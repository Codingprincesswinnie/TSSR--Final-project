import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
 export class ReservationComponent implements OnInit {
  // id
  // user_id: string = '';
  reservation_date: string = '';
  reservation_time: string = '';
  guest_count: string = '';

  reservation: any;
  // id:any;

  constructor(
    private ReservationService: ReservationService,
    private router: Router
  ) {}

  // ngOnInit(): void {
  //   this.getAllReservation();
  // }

  // getAllReservation(){
  //   this.ReservationService.getAllReservation().subscribe({
  //     next: (res) =>{
  //       console.log(res);
  //       this.reservation = res['data']['reservation'];
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }


  // addNewReservation(reservationData: NgForm){
  //   console.log(reservationData.value);
  //   this.ReservationService.createReservation(reservationData.value).subscribe((res) =>{
  //     if (res['status'] === 'success') {
  //       Swal.fire({
  //         position: 'center',
  //         icon: 'success',
  //         title: 'Your reservation has been added successfully.',
  //         showConfirmButton: false,
  //         timer: 1500,
  //       }).then(() => {
  //         this.router.navigateByUrl('/');
  //       });
  //     } else {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: 'Failed to add reservation  !',
  //       });
  //     }
  //   });
  // }
    
  }

