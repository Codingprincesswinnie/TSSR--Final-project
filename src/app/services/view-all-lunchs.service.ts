import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewAllLunchsService {
  private API_URL = 'http://localhost:7010/api/v1/menu_lunch/';

  constructor(private _http: HttpClient) {}

  /**
   * get all lunch item
   * @returns All Lunch item stored in database.
   */

  getAllLunch(): Observable<any> {
    return this._http.get<any>(this.API_URL + `view-all-menu`).pipe(
      map((res) => {
        return res;
      })
    );
  }

  /**
   * this function will add new teacher.
   * @parma data object - data collected from the form feel
   * @returns response to the api
   */
  saveLunch(data: any): Observable<any> {
    return this._http.post<any>(this.API_URL, data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  /**
   * this function will request a single lunch item
   * @returns All Lunch item stored in database.
   */
  getSingleLunch(id: number): Observable<any> {
    return this._http.get<any>(this.API_URL + '/' + id).pipe(
      map((res) => {
        return res;
      })
    );
  }

  updateLunch(data: any, id: number): Observable<any> {
    return this._http.patch<any>(`${this.API_URL}/${id}`, data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteLunch(id: number): Observable<any> {
    return this._http.delete<any>(`${this.API_URL}/${id}`).pipe(
      map((res) => {
        return res;
      })
    );
  }

 }
