import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  
  private reservations: Reservation[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Only access localStorage in browser environment
    if (isPlatformBrowser(this.platformId)) {
      let data = localStorage.getItem("reservations");
      this.reservations = data ? JSON.parse(data) : [];
    }
  }

  //CRUD Operations

  getAllReservations(): Reservation[] {
    return this.reservations;
  }

  getSingleReservation(id: number): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  addReservation(res: Reservation) {
    res.id = Date.now();
    this.reservations.push(res);
    console.log(this.reservations);
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("reservations", JSON.stringify(this.reservations));
    }
  }

  deleteReservation(id: number) {
    let index = this.reservations.findIndex(res => res.id === id);
    if (index !== -1) {
      this.reservations.splice(index, 1);
      
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem("reservations", JSON.stringify(this.reservations));
      }
    }
  }

  updateReservation(id: number, updatedReservation: Reservation) {
    let index = this.reservations.findIndex(res => res.id === id);
    if (index !== -1) {
      this.reservations[index] = updatedReservation;
      
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem("reservations", JSON.stringify(this.reservations));
      }
    }
  }
}