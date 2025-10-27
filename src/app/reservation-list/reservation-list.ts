import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation';
import { Reservation } from '../models/reservation';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from "@angular/router";




@Component({
  selector: 'app-reservation-list',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.css'
})
export class ReservationList implements OnInit{

  
  
  listOfReservations: Reservation[] = [];
  
  constructor(private reservationService: ReservationService){}

  ngOnInit(): void {
    this.listOfReservations = this.reservationService.getAllReservations();
  }

  deleteReservation(id: number){
    this.reservationService.deleteReservation(id);
  }
}
