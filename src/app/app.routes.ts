import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', 
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    loadComponent: () => import('./home/home')
      .then(m => m.Home)
  },
  {
    path: 'ReservationForm',
    loadComponent: () => import('./reservation-form/reservation-form')
      .then(m => m.ReservationForm)
  },
   {
    path: 'ReservationList',
    loadComponent: () => import('./reservation-list/reservation-list')
      .then(m => m.ReservationList)
  }
];
