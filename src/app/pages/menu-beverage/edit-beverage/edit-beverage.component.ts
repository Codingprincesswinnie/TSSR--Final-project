import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BeverageService } from 'src/app/services/beverage.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-beverage',
  templateUrl: './edit-beverage.component.html',
  styleUrls: ['./edit-beverage.component.css'],
})
export class EditBeverageComponent implements OnInit {
  item_name: string = '';
  description: string = '';
  category: string = '';
  price: string = '';
  img: string = '';

  id: any;
  menu_beverage: any;

  constructor(
    private BeverageService: BeverageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.getBeverageData();
  }

  getBeverageData() {
    this.BeverageService.getSingleBeverage(this.id).subscribe((res) => {
      if (res['status'] == 'error') {
        console.log(res);
      } else {
        console.log('item res', res);
        this.menu_beverage = res['data'];
        console.log(this.menu_beverage);
      }
    });
  }

  editBeverage(data: NgForm) {
    this.BeverageService.updateBeverage(data.value, this.id).subscribe(
      (res) => {
        if (res['status'] === 'success') {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your changes has been applied successfully',
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            this.router.navigateByUrl('/menu-beverage');
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Opps!...',
            text: 'Fail to update change',
          });
        }
      }
    );
  }

 }
