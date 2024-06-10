import { Component, OnInit } from '@angular/core';
import { LunchService } from 'src/app/services/lunch.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-lunch',
  templateUrl: './new-lunch.component.html',
  styleUrls: ['./new-lunch.component.css'],
})
export class NewLunchComponent implements OnInit {
  item_name: string = '';
  description: string = '';
  category: string = '';
  price: string = '';
  img: string = '';

  menu_lunch: any;
 

  constructor(
    private LunchServices: LunchService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllLunch();
  }

  getAllLunch() {
    this.LunchServices.getAllLunch().subscribe({
      next: (res) => {
        console.log(res);
        this.menu_lunch = res['data']['menu_lunch'];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  addNewLunch(lunchData: NgForm) {
    console.log(lunchData.value);
    this.LunchServices.createLunch(lunchData.value).subscribe((res) => {
      if (res['status'] === 'success') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'New lunch item has been added successfully.',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.router.navigateByUrl('/menu-lunch');
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
