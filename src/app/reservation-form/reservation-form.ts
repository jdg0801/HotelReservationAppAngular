// Import required Angular core functionality
import { Component } from '@angular/core';
// Import form-related modules from Angular forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Import form building and validation utilities
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
// Import lifecycle hook interface
import { OnInit } from '@angular/core';

// Component decorator that defines metadata for the reservation form component
@Component({
  // Selector used to embed this component in other templates
  selector: 'app-reservation-form',
  // Required form modules for template-driven and reactive forms
  imports: [FormsModule, ReactiveFormsModule],
  // Path to the HTML template file
  templateUrl: './reservation-form.html',
  // Path to the CSS styles file
  styleUrl: './reservation-form.css'
})

// Component class that implements OnInit interface for initialization logic
export class ReservationForm implements OnInit {
  
  // Form group instance to hold the form controls
  reservationForm: FormGroup = new FormGroup({});
  
  // Constructor that injects the FormBuilder service
  constructor(private formBuilder: FormBuilder){}

  // Lifecycle hook that initializes the form when component loads
  ngOnInit(): void {
    // Create form group with validation rules
    this.reservationForm = this.formBuilder.group({
      // Each form control with initial value ('') and validators
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]], // Email has multiple validators
      roomNumber: ['', Validators.required]
    })
  }
  
  // Method to handle form submission
  onSubmit() {
    // TODO: Implement form submission logic
    if (this.reservationForm) {
      // Form submission logic will go here
    }
  }
}
