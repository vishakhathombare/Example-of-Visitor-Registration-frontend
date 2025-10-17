import { Component } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatInputModule, MatLabel } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import {  Validators } from '@angular/forms';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-createuser',
  imports: [   
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    MatInputModule, 
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    
    
  ],
  templateUrl: './createuser.html',
  styleUrl: './createuser.css'
})
export class Createuser {
  userForm: FormGroup;
  userTypes: string[] = ['Admin', 'Gatekeeper', 'Supervisor']; 
  gates : string[] = ['Gate 1', 'Gate 2', 'Gate 3'];      

  constructor(private fb: FormBuilder,
     private userService: UserService,    // ✅ for backend call
    private router: Router 
  ) {
    this.userForm = this.fb.group({
      loginId: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userType: ['', Validators.required],
      gate: [[], Validators.required]
    });
  }

  onCreate() {
  if (this.userForm.invalid) {
      this.userForm.markAllAsTouched(); // show all validation errors
      return;
    }

    const newUser = this.userForm.value;
    console.log('Creating user:', newUser);

    this.userService.createUser(newUser).subscribe({
      next: () => {
        alert('User created successfully');
        this.router.navigate(['/users']); // navigate to user list
      },
      error: (err) => {
        console.error('Create failed', err);
        alert('Failed to create user');
      }
    });
  }
  

  onCancel() {
    this.userForm.reset();
  }
}