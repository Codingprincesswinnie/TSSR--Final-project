import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private API_URL = environment.api_url;
  private API_URL = `http://localhost:7010/api/v1/auth`;
  private tokenKey: string = 'nightapp-authToken';

  public authToken?: string;
  public currentUser?: any;

  //    loginState?: boolean;
  constructor(private _http: HttpClient) {}

  /**
   * @description Function to save any item to the local storeage
   * @param key the identifier for the item stored
   * @param value the data to be stored
   */
  private _saveToStorage(key: string, value: any) {
    localStorage.setItem(key, value);
  }
  saveAuthToken(): void {
    this._saveToStorage(this.tokenKey, this.authToken);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }

  getProfile(): Observable<any> {
    return this._http.get<any>(this.API_URL + '/my-profile').pipe(
      map((res) => {
        return res;
      })
    );
  }

  getCurrentUser(cb?: () => void) {
    this.getProfile().subscribe((res) => {
      if (res['status'] === 'success') {
        this.currentUser = res.data!['user'];
        if (cb) {
          cb();
        }
      }
    });
  }

  // login//
  login(data: any): Observable<any> {
    return this._http.post(this.API_URL + '/login', data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  // Register/sign up//
  register(data: any): Observable<any> {
    return this._http.post(this.API_URL + '/register', data).pipe(
      map((res) => {
        return res;
      })
    );
  }



  

logout(): void {
  localStorage.removeItem('this.tokenkey');
}



}
