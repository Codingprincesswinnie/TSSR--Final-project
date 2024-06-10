import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/partials/header/footer/footer.component';
import { HeaderComponent } from './pages/partials/header/header.component';
import { MenuLunchComponent } from './pages/menu-lunch/menu-lunch.component';
import { MenuDinnerComponent } from './pages/menu-dinner/menu-dinner.component';
import { MenuBeverageComponent } from './pages/menu-beverage/menu-beverage.component';
import { NewLunchComponent } from './pages/menu-lunch/new-lunch/new-lunch.component';
import { EditLunchComponent } from './pages/menu-lunch/edit-lunch/edit-lunch.component';
import { ViewLunchComponent } from './pages/menu-lunch/view-lunch/view-lunch.component';
import { EditBeverageComponent } from './pages/menu-beverage/edit-beverage/edit-beverage.component';
import { NewBeverageComponent } from './pages/menu-beverage/new-beverage/new-beverage.component';
import { ViewBeverageComponent } from './pages/menu-beverage/view-beverage/view-beverage.component';
import { ViewDinnerComponent } from './pages/menu-dinner/view-dinner/view-dinner.component';
import { NewDinnerComponent } from './pages/menu-dinner/new-dinner/new-dinner.component';
import { EditDinnerComponent } from './pages/menu-dinner/edit-dinner/edit-dinner.component';
import { SignupComponent } from './pages/login-signup/signup/signup.component';
import { MenuComponent } from './pages/nav-menu/menu.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { TokenInterceptor } from './shared/interceptor/token.interceptor';
import { LogoutComponent } from './pages/partials/logout/logout.component';
import { LoginComponent} from './pages/auth/login/login.component'
import { ProfileComponent } from './pages/profile/profile.component';
 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    MenuLunchComponent,
    MenuDinnerComponent,
    MenuBeverageComponent,
    NewLunchComponent,
    EditLunchComponent,
    ViewLunchComponent,
    EditBeverageComponent,
    NewBeverageComponent,
    ViewBeverageComponent,
    ViewDinnerComponent,
    NewDinnerComponent,
    EditDinnerComponent,
    SignupComponent,
    MenuComponent,
    ReservationComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent,
    LoginComponent,
    
      
   ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, CommonModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
