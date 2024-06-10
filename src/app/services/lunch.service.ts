import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LunchService {
  private API_URL = 'http://localhost:7010/api/v1/lunch/';

  constructor(private _http: HttpClient) {}

  /**
   * get all lunch item
   * @returns All Lunch item stored in database.
   */
  getAllLunch(): Observable<any> {
    return this._http.get<any>(this.API_URL + 'all-lunch').pipe(
      map((res) => {
        return res;
      })
    );
  }

  /**
   * this function will add new teacher.
   * @parma data object - data collected from the form field
   */
  addNewLunch(lunchData: any): Observable<any> {
    return this._http.post<any>(this.API_URL, lunchData).pipe(
      map((res) => {
        return res;
      })
    );
  }

  /**
   * This function will the post route in the api to add a new lunch item to the database
   * @param data Object - data collected from form fields
   * @returns Response from the api
   */
  createLunch(data: any): Observable<any> {
    return this._http.post<any>(this.API_URL + 'new-lunch', data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  /**
   * this function will request a single lunch item
   * @returns All Lunch item stored in database.
   */
  getSingleLunch(id: number,): Observable<any> {
    return this._http.get<any>(this.API_URL + 'view-lunch/' + id).pipe(
      map((res) => {
        return res;
      })
    );
  }

  /**
   * this fuction is to select the id.
   * @param id Number - ID for selected Lunch item
   */
  getOneMLI(id: number): Observable<any> {
    return this._http.get<any>(`${this.API_URL}menu_lunch/${id}`).pipe(
      map((res) => {
        return res;
      })
    );
  }

  /**
   * this function will request to update a single lunch item
   */
  updateLunch(data: any, id: number): Observable<any> {
    return this._http
      .patch<any>(`${this.API_URL}update-lunch/${id}`, data)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  deleteLunch(id: number): Observable<any> {
    return this._http.delete<any>(`${this.API_URL}delete-lunch/${id}`).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
