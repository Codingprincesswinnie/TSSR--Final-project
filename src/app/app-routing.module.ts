import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/nav-menu/menu.component';
import { MenuDinnerComponent } from './pages/menu-dinner/menu-dinner.component';
import { MenuBeverageComponent } from './pages/menu-beverage/menu-beverage.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { NewLunchComponent } from './pages/menu-lunch/new-lunch/new-lunch.component';
import { EditLunchComponent } from './pages/menu-lunch/edit-lunch/edit-lunch.component';
import { ViewLunchComponent } from './pages/menu-lunch/view-lunch/view-lunch.component';
// import { ViewAllLunchsComponent } from './pages/menu-lunch/view-all-lunchs/view-all-lunchs.component';
import { MenuLunchComponent } from './pages/menu-lunch/menu-lunch.component';
import { NewBeverageComponent } from './pages/menu-beverage/new-beverage/new-beverage.component';
import { EditBeverageComponent } from './pages/menu-beverage/edit-beverage/edit-beverage.component';
import { ViewBeverageComponent } from './pages/menu-beverage/view-beverage/view-beverage.component';
import { LoginComponent } from './pages/auth/login/login.component';
 import { AuthGuard } from './shared/guards/auth.guard';
import { LogoutComponent } from './pages/partials/logout/logout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/auth/register/register.component';

const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: 'menu', title: 'Menu', component: MenuComponent },
  { path: 'menu-lunch', title: 'Lunch Menu', component: MenuLunchComponent, canActivate: [AuthGuard] },

  {
    path: 'new-lunch',
    title: 'Add New Lunch Item',
    component: NewLunchComponent,
  },

  {
    path: 'edit-lunch/:id',
    title: 'Edit Lunch Item',
    component: EditLunchComponent,
  },
  {
    path: 'view-lunch/:id',
    title: 'View Lunch',
    component: ViewLunchComponent,
  },

  {
    path: 'menu-beverage',
    title: 'Beverage Menu',
    component: MenuBeverageComponent,
  },
  {
    path: 'new-menu-beverage',
    title: 'Add New Beverage Item',
    component: NewBeverageComponent,
  },
  {
    path: 'edit-beverage/:id',
    title: 'Edit Beverage Item',
    component: EditBeverageComponent,
  },
  {
    path: 'view-beverage/:id',
    title: 'View Beverage',
    component: ViewBeverageComponent,
  },
  { path: 'menu-dinner', title: 'Dinner Menu', component: MenuDinnerComponent },

  // AUTH//
  { path: 'login', title: 'User Login', component: LoginComponent },

  { path: 'sign-up', title: 'Register', component:RegisterComponent },

  { path: 'profile', title: 'Profiles', component: ProfileComponent },

  { path: 'logout', title: 'Log Out', component: LogoutComponent },

  {
    path: 'reservation',
    title: 'Make Reservation',
    component: ReservationComponent,
     canActivate: [AuthGuard],
  },

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
