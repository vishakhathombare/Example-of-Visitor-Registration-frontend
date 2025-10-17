// src/app/checkin/checkin.ts

import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { CheckinService } from '../services/checkin.service';

@Component({
  selector: 'app-checkin',
  standalone: true, // ✅ If using standalone component
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule
  ],
  templateUrl: './checkin.html',
  styleUrl: './checkin.css'
})
export class Checkin {
  checkInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private checkinService: CheckinService,  // ✅ Inject service
    private dialogRef: MatDialogRef<Checkin>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.checkInForm = this.fb.group({
      loginId: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      
    });
  }

  oncheckin() {
    if (this.checkInForm.valid) {
      const visitorData = this.checkInForm.value;

      // ✅ Call the API using the service
      this.checkinService.checkIn(visitorData).subscribe({
        next: (response) => {
          console.log('✅ Check-in success:', response);
          this.dialogRef.close(response); // Close dialog and send data back
        },
        error: (error) => {
          console.error('❌ Check-in failed:', error);
          alert('Something went wrong during check-in. Please try again.');
        }
      });

    } else {
      console.log('❗ Form invalid');
    }
  }
}
