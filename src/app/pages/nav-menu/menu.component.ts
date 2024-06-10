import { Component, OnInit } from '@angular/core';
import { MenuBeverageComponent } from '../menu-beverage/menu-beverage.component';
import { MenuLunchComponent } from '../menu-lunch/menu-lunch.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { LunchService } from 'src/app/services/lunch.service';
import { BeverageService } from 'src/app/services/beverage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menu_lunch: any[] = [];
  menu_beverage: any[] = [];
  // lunchItem: any;

  constructor(
    private MenuService: MenuService,
    private route: ActivatedRoute,
    private router: Router,
    private lunchService: LunchService,
    private beverageService: BeverageService
  ) {}
  ngOnInit(): void {
    this.fetchMenuLunch();
    this.fetchMenuBeverage();
  }

  fetchMenuLunch() {
    this.lunchService.getAllLunch().subscribe({
      next: (res) => {
        console.log('Lunch Res: ', res);
        this.menu_lunch = res.data.menu_lunch;
      },
      error: (error) => {
        console.log('Lunch Error: ', error.error);
      },
      complete: () => {},
    });
  }

  fetchMenuBeverage() {
    this.beverageService.getAllBeverage().subscribe({
      next: (res) => {
        console.log('Beverage Res: ', res);
        this.menu_beverage = res.data.menu_beverage;
      },
      error: (error) => {
        console.log('Beverage Error: ', error.error);
      },
      complete: () => {},
    });
  }
}
