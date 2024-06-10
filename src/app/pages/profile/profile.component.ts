import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {

constructor(
private authService: AuthService
){}

user: any;


ngOnInit(): void {
    this.fetchUserData();
}

fetchUserData(){
  console.log(`INSIDE FETCH USER DATA`);
  this.authService.getCurrentUser(() =>{
    this.user = this.authService.currentUser;
    console.log(`USER DATA: ${JSON.stringify(this.user)}`);
  })
}



}
