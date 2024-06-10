import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private API_URL = 'http://localhost:7010/api/v1/reservation/';

  constructor(private _http: HttpClient) {}

  /**
   * get all reservation item
   * @returns All reservation stored in database.
   */
  getAllReservation(): Observable<any> {
    return this._http.get<any>(this.API_URL + 'all-reservation').pipe(
      map((res) => {
        return res;
      })
    );
  }

  /**
   * this function will add new reservation.
   * @parma data object - data collected from the form field
   */
  addNewReservation(reservationData: any): Observable<any> {
    return this._http.post<any>(this.API_URL, reservationData).pipe(
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
  createReservation(data: any): Observable<any> {
    return this._http.post<any>(this.API_URL + 'new-reservation', data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteReservation(id: number): Observable<any> {
    return this._http
      .delete<any>(`${this.API_URL}delete-Reservation/${id}`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
