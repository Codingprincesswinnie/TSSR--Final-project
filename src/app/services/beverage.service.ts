import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BeverageService {
  private API_URL = 'http://localhost:7010/api/v1/beverage/';

  constructor(private _http: HttpClient) {}

  /**
   * get all beverage item
   * @returns All beverage item stored in database.
   */
  getAllBeverage(): Observable<any> {
    return this._http.get<any>(this.API_URL + 'all-menu-beverage').pipe(
      map((res) => {
        return res;
      })
    );
  }

  /**
   * This function will the post route in the api to add a new beverage item to the database
   * @param data Object - data collected from form fields
   * @returns Response from the api
   */
  createBeverage(data: any): Observable<any> {
    return this._http.post<any>(this.API_URL + 'new-menu-beverage', data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  /**
   * this function is to select the id.
   * @param id Number - ID for selected beverage item
   */
  getOneBMI(id: number): Observable<any> {
    return this._http.get<any>(`${this.API_URL}menu_beverage/${id}`).pipe(
      map((res) => {
        return res;
      })
    );
  }

  /**
   * this function will request a single beverage item
   * @returns a single beverage item stored in database.
   */
  getSingleBeverage(id: number): Observable<any> {
    return this._http
      .get<any>(this.API_URL + 'view-one-menu-beverage/' + id)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  /**
   * this function will request to update a single beverage item
   */
updateBeverage(data: any, id: number): Observable<any> {
  return this._http.patch<any>(`${this.API_URL}update-menu-beverage/${id}`, data).pipe(
    map((res) => {
      return res;
    })
  );
}





  deleteBeverage(id: number): Observable<any> {
    return this._http
      .delete<any>(`${this.API_URL}delete-menu-beverage/${id}`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
