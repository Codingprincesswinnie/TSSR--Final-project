import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LunchService } from 'src/app/services/lunch.service';

@Component({
  selector: 'app-view-lunch',
  templateUrl: './view-lunch.component.html',
  styleUrls: ['./view-lunch.component.css'],
})
export class ViewLunchComponent implements OnInit {
  menu_lunch: any;
  menuLunch: any;
  id: any;
  isViewLunch: boolean = false;

  constructor(
    private LunchService: LunchService,
    private router: ActivatedRoute,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
    });
    
    // this.getMLI();
    this.getMenuLunch();
  }

  // getMLI() {
  //   this.LunchService.getOneMLI(this.id).subscribe((res) => {
  //     if (res['status'] !== 'success') {
  //     } else {
  //       this.menu_lunch = res['data'];
  //       console.log(this.menu_lunch);
  //     }
  //   });
  // }

  getMenuLunch() {
    this.LunchService.getSingleLunch(this.id).subscribe((res) => {
      if (!res['data']) {
        this.menu_lunch = [];
      } else {
        console.log('lun res: ', res);
        
        this.menu_lunch = res['data'];
        console.log(this.menu_lunch);
        if (this.menu_lunch.length > 0) this.isViewLunch = true;
      }
    });
  }
}
