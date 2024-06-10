import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private API_URL = 'http://localhost:7010/api/v1/menu/';

  constructor(private _http: HttpClient) {}

  getMenuLunch(): Observable<any> {
    return this._http.get<any>(this.API_URL + 'all-lunch').pipe(
      map((res) => {
        return res;
      })
    );
  }

getMenuBeverages(): Observable<any> {
  return this._http.get<any>(this.API_URL + 'all-menu-beverage ').pipe(
    map((res) => {
      return res;
    })
  );
}


}
