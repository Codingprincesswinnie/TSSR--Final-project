import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewAllLunchsService } from 'src/app/services/view-all-lunchs.service'; 
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
// import { LunchService } from 'src/app/services/lunch.service';

@Component({
  selector: 'app-view-all-lunchs',
  templateUrl: './view-all-lunchs.component.html',
  styleUrls: ['./view-all-lunchs.component.css'],
})
export class ViewAllLunchsComponent implements OnInit {
  menu_lunch: any = [];
  lunchtoDelete: any;

  constructor(
    private ViewAllLunchsService: ViewAllLunchsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.allMenuLunch();
  }

  allMenuLunch() {
    this.ViewAllLunchsService.getAllLunch().subscribe((res) => {
      this.menu_lunch = res['data']['menu_lunch'];
      console.log(this.menu_lunch);
      
    });
  }
   

  /**
   * this function calls sweetalert to delete selectes lunch item
   * @param id number
   */
  selectDelete(id: any) {
    this.lunchtoDelete = { id };
    console.log(this.lunchtoDelete);
    
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

        //call the delete if user confirm//
        this.ViewAllLunchsService.deleteLunch(id).subscribe((res) => {

          if (res['status'] === 'success') {
            this.router.navigateByUrl('/menu-lunch');
          }
        });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
 console.log('deleted');
       }
    });
  }
}
