import { Component } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { ChangePasswordDialog } from '../change-password-dialog/change-password-dialog';



@Component({
  selector: 'app-profile-dialog',
  imports: [MatDialogContent,MatIcon,MatDialogActions,MatDialogModule],
  templateUrl: './profile-dialog.html',
  styleUrl: './profile-dialog.css'
})
export class ProfileDialog {
constructor(
    private dialogRef: MatDialogRef<ProfileDialog>,
    private dialog: MatDialog
  ) {}

  openViewProfileDialog() {
    this.dialogRef.close(); 
    this.dialog.open(ProfileDialog, {
      width: '400px'
    });
  }

  openChangePasswordDialog() {
    this.dialogRef.close();
    this.dialog.open(ChangePasswordDialog, {
      width: '400px'
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

