import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LunchService } from 'src/app/services/lunch.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-lunch',
  templateUrl: './edit-lunch.component.html',
  styleUrls: ['./edit-lunch.component.css'],
})
export class EditLunchComponent implements OnInit {
   item_name: string = '';
  description: string = '';
  category: string = '';
  price: string = '';
  img: string = '';

  id: any;
  menu_lunch: any;

  constructor(
    private LunchServices: LunchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.getLunchData();
  }

   getLunchData() {
    this.LunchServices.getSingleLunch(this.id).subscribe((res) => {
      if (res['status'] == 'error') {
        console.log(res);
      } else {
        console.log('item res: ', res);

        this.menu_lunch = res['data'];

        console.log(this.menu_lunch);
      }
    });
  }

  editLunch(data: NgForm) {
    this.LunchServices.updateLunch(data.value, this.id).subscribe((res) => {
      if (res['status'] === 'success') {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your changes has been applied successfully',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.router.navigateByUrl('/');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Opps!...',
          text: 'Fail to update change',
        });
      }
    });
  }
}
