import { Component, Inject, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardActions, MatCardContent, MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField, MatInput, MatInputModule, MatLabel } from '@angular/material/input';
import { MatOption, MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,ReactiveFormsModule,MatCardActions,MatCardModule,MatCardContent,MatInputModule,MatSelectModule
    ,MatLabel,MatOption,MatDialogModule,CommonModule,MatDividerModule,MatButtonModule],
  templateUrl: './user-dialog.html',
  styleUrl: './user-dialog.css'
})
/*export class UserDialog {
userForm: FormGroup;

  UserType = ['Admin', 'Guest', 'Operator'];
  Gate = ['Gate 1', 'Gate 2', 'Gate 3'];

  constructor(
    public dialogRef: MatDialogRef<UserDialog>,
    private fb: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this.fb.group({
      userId: [''],
      name: [''],
      email: [''],
      userType: [''],
      gate: ['']
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value); 
    }
  }

  

  openDialog() {
    const dialogRef = this.dialog.open(UserDialog, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User Data:', result);
      }
    });
  
  }
} */
export class UserDialog {
  editUserForm: FormGroup;
  userTypes = ['Admin', 'Guest', 'Operator'];
  gates = ['Gate 1', 'Gate 2', 'Gate 3'];
  isEditMode = false;

  constructor(
    public dialogRef: MatDialogRef<UserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.isEditMode = data?.mode === 'edit';

    this.editUserForm = this.fb.group({
      loginId: [data?.loginId || ''],
      name: [data?.name || ''],
      email: [data?.email || ''],
      userType: [data?.userType || ''],
      gate: [data?.gate || ''],
    });

    if (this.isEditMode) {
      this.editUserForm.get('loginId')?.disable(); // prevent changing ID on edit
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.editUserForm.valid) {
      const result = this.isEditMode
        ? this.editUserForm.getRawValue() // loginId is disabled
        : this.editUserForm.value;

      this.dialogRef.close(result);
    }
  }
}
