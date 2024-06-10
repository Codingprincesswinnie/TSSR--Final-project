import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeverageService } from 'src/app/services/beverage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu-beverage',
  templateUrl: './menu-beverage.component.html',
  styleUrls: ['./menu-beverage.component.css'],
})
export class MenuBeverageComponent implements OnInit {
  menu_beverage: any;
  bevDelete: any;

  constructor(
    private BeverageService: BeverageService,
    private Route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.allMenuBeverage();
  }

  allMenuBeverage() {
    this.BeverageService.getAllBeverage().subscribe((res) => {
      this.menu_beverage = res['data']['menu_beverage'];
      console.log(this.menu_beverage);
    });
  }

  /**
   * this function calls sweetalert to delete selected beverage item
   * @param id number
   */
  selectDelete(id: any) {
    this.bevDelete = { id };
    console.log(this.bevDelete);
  }

  toDelete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        //call the delete if user confirm/delete-beverage/:id//
        this.BeverageService.deleteBeverage(id).subscribe((res) => {
          if (res['status'] === 'success') {
            this.router.navigateByUrl('/menu_beverage');
          }
        });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
        this.allMenuBeverage();
        console.log('deleted');
      }
    });
  }
}
