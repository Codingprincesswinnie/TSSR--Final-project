import { Component, OnInit } from '@angular/core';
import { BeverageService } from 'src/app/services/beverage.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-beverage',
  templateUrl: './new-beverage.component.html',
  styleUrls: ['./new-beverage.component.css'],
})
export class NewBeverageComponent implements OnInit {
  item_name: string = '';
  description: string = '';
  category: string = '';
  price: string = '';
  img: string = '';

  menu_beverage: any;

   
  constructor(
    private BeverageServices: BeverageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllBeverage();
  }

  getAllBeverage() {
    this.BeverageServices.getAllBeverage().subscribe({
      next: (res) => {
        console.log(res);
        this.menu_beverage = res['data']['menu_beverage'];
      },
    });
  }

  addNewBeverage(BevData: NgForm) {
    console.log(BevData.value);
    this.BeverageServices.createBeverage(BevData.value).subscribe((res) => {
      if (res['status'] === 'success') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'New Beverage item has been added successfully',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.router.navigateByUrl('/menu-beverage');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to add lunch item!',
        });
      }
    });
  }
}
