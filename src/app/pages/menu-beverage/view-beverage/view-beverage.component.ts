import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeverageService } from 'src/app/services/beverage.service';

@Component({
  selector: 'app-view-beverage',
  templateUrl: './view-beverage.component.html',
  styleUrls: ['./view-beverage.component.css'],
})
export class ViewBeverageComponent implements OnInit {
  menu_beverage: any;
  menuBeverage: any;
  id: any;
  isViewBeverage: boolean = false;

  constructor(
    private BeverageService: BeverageService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.getMenuBeverage();
  }

  getBMI() {
    this.BeverageService.getOneBMI(this.id).subscribe((res) => {
      if (res['status'] !== 'success') {
      } else {
        this.menu_beverage = res['data'];
        console.log(this.menu_beverage);
      }
    });
  }

  getMenuBeverage() {
    this.BeverageService.getSingleBeverage(this.id).subscribe((res) => {
      if (!res['status']) {
        this.menu_beverage = [];
      } else {
        console.log('bev res: ', res);

        this.menu_beverage = res['data'];
         console.log(this.menu_beverage);
        if (this.menu_beverage.length > 0) this.isViewBeverage = true;
      }
    });
  }
}
