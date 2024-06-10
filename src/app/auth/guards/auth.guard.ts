// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { CanActivateFn, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// // import { AuthService } from 'src/app/services/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
// constructor(
//   private AuthService: AuthService,
//   private router: Router
// ){}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     // return true;

//     if(!this.AuthService.isLoggedIn()){
//       this.router.navigateByUrl('/login');
//     }
//     return true;
//   }
  
// }
