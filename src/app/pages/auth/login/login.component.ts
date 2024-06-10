import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hasError: boolean = false;
  errorMessage: string = '';
  user: any;

  constructor(private authService: AuthService, private router: Router) {}

  private userLink = '/menu-lunch';
  private adminLink = 'menu-lunch';
  currentRole: string = '';

  ngOnInit(): void {}

  login(oForm: NgForm): void {
    this.authService.login(oForm.value).subscribe(
      (res) => {
        console.log(res);

        if (res['status'] === 'success') {
          // this.router.navigate(['/home'])
          this.authService.authToken = res['data']['token'];
          this.authService.saveAuthToken();
          this.authService.getCurrentUser(() => {
            this.user = this.authService.getCurrentUser;
            this.currentRole = this.user.role;

            console.log(`USER DATA: ${JSON.stringify(this.user)}`);

            if (this.currentRole === 'USER') {
              this.router.navigate([this.userLink]);
            } else {
              this.router.navigate([this.adminLink]);
            }
          });
        } else {
          // console.log(`RESPONSE DATA: ${JSON.stringify(res)}`);
        }
      },
      (err) => {
        this.hasError = true;
        this.errorMessage = err.error.message;
        console.log(err);
      }
    );
  }
}
