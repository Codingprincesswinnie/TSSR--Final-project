import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
 import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
   private authService: AuthService,
   private router: Router
  ) {}

  ngOnInit(): void {
    //
  }

//   hasError?: boolean;
//   errMsg?: string;
//   oLogin(oForm: NgForm) {
//     console.log(`BEFORE CALL TO SERVICE`);

//     const addLog = this.AuthServices.login(oForm.value).subscribe(
//       (loginRes) => {
//         console.log(`loginRes >> ${loginRes}`);

//         if (loginRes['status'] === 'success') {
//           this.hasError = false;

//           this.AuthServices.authToken = loginRes['data']!['token'];
//           this.AuthServices.saveAuthToken();
//           this.AuthServices.getCurrentUser(() => {
//             this.AuthServices.loginState = true;
//           });
//           this.router.navigateByUrl('/reservation');
//         } else {
//            this.hasError = true;
//           this.errMsg = loginRes['message'];

//           this.AuthServices.loginState = false;
//           this.router.navigateByUrl('/login ');
//         }
      
//       },
// );
//   }
}
 