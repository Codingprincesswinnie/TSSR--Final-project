import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LunchService } from 'src/app/services/lunch.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu-lunch',
  templateUrl: './menu-lunch.component.html',
  styleUrls: ['./menu-lunch.component.css'],
})
export class MenuLunchComponent implements OnInit {
//  isAdmin: any;
  menu_lunch: any;
  lunchDelete: any;
  // toDelete: any;

  constructor(
    private LunchService: LunchService,
    private route: ActivatedRoute,
    private router: Router

    
  ) {}
  
  ngOnInit(): void {
    this.allMenuLunch();

  
}


  allMenuLunch() {
    this.LunchService.getAllLunch().subscribe((res) => {
      this.menu_lunch = res['data']['menu_lunch'];
      console.log(this.menu_lunch);
    });
  }


  /**
   * this function calls sweetalert to delete selected lunch item
   * @param id number
   */
  selectDelete(id: any) {
    this.lunchDelete = { id };
    console.log(this.lunchDelete);
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
        //call the delete if user confirm/delete-lunch/:id//
        this.LunchService.deleteLunch(id).subscribe((res) => {
          if (res['status'] === 'success') {
            this.router.navigateByUrl('/menu-lunch');
          }
        });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
        this.allMenuLunch();
        console.log('deleted');
      }
    });
  }
}
