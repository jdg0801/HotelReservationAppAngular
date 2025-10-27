import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ReservationForm } from './reservation-form/reservation-form';



export const routes: Routes = [
//  { path: '', redirectTo: 'Home', pathMatch: 'full' },
//   { path: 'Home',component:Home },
   { path: '', pathMatch: 'full', redirectTo: 'ReservationList' },
  // list and create paths
  { path: 'ReservationList', loadComponent: () => import('./reservation-list/reservation-list').then(m => m.ReservationList) },
  { path: 'ReservationForm', loadComponent: () => import('./reservation-form/reservation-form').then(m => m.ReservationForm) },
  { path: 'edit/:id', component:ReservationForm },
 
];
