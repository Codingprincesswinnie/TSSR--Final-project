import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hasError: boolean = false;
  errorMessage: string = '';

  first_nam: string = '';
  last_nam: string = '';
  email: string = '';
  password: string = '';
  role: string = '';
  // registerFrom: NgForm;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // this.signUp();
  }
  signUp(data: NgForm) {
    this.authService.register(data.value).subscribe((res) => {
      if (res['status'] === 'success') {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Registration is Successful ',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.router.navigateByUrl('/menu');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to register!',
        });
      }
    });
  }
}
