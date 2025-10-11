import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Book } from "./book/book";
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Book, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HotelReservationApp');
}
