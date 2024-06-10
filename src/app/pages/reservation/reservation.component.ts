import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  user_id: string = '';
  reservation_date: string = '';
  reservation_time: string = '';
  guest_count: string = '';

  reservations: any;
  resDelete: any;

  constructor(
    private ReservationService: ReservationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllReservation();
  }
 
 
  getAllReservation() {
    this.ReservationService.getAllReservation().subscribe({
       next: (res) => {
        console.log('Reservation Res', res);
        this.reservations = res.data.reservation;
      },
      error: (error) => {
        console.log('Reservation Error', error.error);
      },
      complete: () => {},
    });
  }

  addNewReservation(reservationData: NgForm) {
    console.log(reservationData.value);
    this.ReservationService.createReservation(reservationData.value).subscribe(
      (res) => {
        if (res['status'] === 'success') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your reservation has been added successfully.',
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            this.router.navigateByUrl('/');
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to add reservation  !',
          });
        }
      }
    );
  }

  /**
   * this function calls sweetalert to delete selected reservation item
   * @param id number
   */
  selectDelete(id: any) {
    this.resDelete = { id };
    console.log(this.resDelete);
  }

  toDelete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        //call the delete if user confirm/deleteReservation/:id//
        this.ReservationService.deleteReservation(id).subscribe((res) => {
          if (res['status'] === 'success') {
            this.router.navigateByUrl('/reservation');
          }
        });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
        this.reservations();
        console.log('deleted');
      }
    });
  }


  
}
