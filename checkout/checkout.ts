import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  checkoutForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private checkoutservice: CheckoutService // ✅ Inject service
  ) {
    this.checkoutForm = this.fb.group({
      visitorId: ['', Validators.required]  // You should pass ID, not names
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      const visitorId = this.checkoutForm.value.visitorId;

      const confirmCheckout = confirm(`Are you sure you want to check out visitor ID: ${visitorId}?`);
      if (!confirmCheckout) return;

      this.checkoutservice.checkOut(visitorId).subscribe({
        next: (response: { message: any; }) => {
          alert(response.message || 'Visitor checked out successfully.');
          this.checkoutForm.reset();
        },
        error: (err: any) => {
          console.error('Checkout error:', err);
          alert('Checkout failed. Please try again.');
        }
      });
    }
  }
}
