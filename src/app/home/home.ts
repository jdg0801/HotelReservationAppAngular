import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
   standalone: true, 
  imports: [RouterLink, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  

}
