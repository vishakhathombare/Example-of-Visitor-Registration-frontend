import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef } from "@angular/material/dialog";

import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: 'app-view-profile-dialog',
  imports: [MatDialogContent, MatDialogActions, MatIconModule, MatListModule,MatButtonModule,MatDialogModule,ReactiveFormsModule,FormsModule],
  templateUrl: './view-profile-dialog.html',
  styleUrl: './view-profile-dialog.css'
})
export class ViewProfileDialog {
  constructor(private dialogRef: MatDialogRef<ViewProfileDialog>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  
}
  

