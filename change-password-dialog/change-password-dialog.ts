import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatInputModule, MatLabel } from '@angular/material/input';



@Component({
  selector: 'app-change-password-dialog',
  imports: [MatFormField, MatDialogActions, MatDialogActions, MatLabel, MatDialogModule,MatButtonModule,MatInputModule],
  templateUrl: './change-password-dialog.html',
  styleUrl: './change-password-dialog.css'
})
export class ChangePasswordDialog {

}
