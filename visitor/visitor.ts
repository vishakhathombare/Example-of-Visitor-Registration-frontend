import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Checkin } from '../checkin/checkin';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';



interface VisitorData {
  username: string;
  company: string;
  email: string;
  gates: string;
  purpose: string;
  checkedIn?: boolean;
  confirming?: boolean;
}

@Component({
  selector: 'app-visitor',
  standalone: true,
  templateUrl: './visitor.html',
  styleUrls: ['./visitor.css'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatFormField,
    MatDialogModule
  ]
})
export class Visitor implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['username', 'company', 'email', 'gates', 'purpose', 'actions'];
  dataSource: MatTableDataSource<VisitorData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    const visitors: VisitorData[] = [
      { username: 'jdoe', company: 'Acme Corp', email: 'jdoe@acme.com', gates: 'North Gate', purpose: 'Meeting' },
      { username: 'Evana', company: 'Corp', email: 'evv@acme.com', gates: 'South Gate', purpose: 'Meeting' },
      { username: 'Marles', company: 'ABCD', email: 'marls@acme.com', gates: 'North Gate', purpose: 'Interview' },
      { username: 'Jack', company: 'Zensor', email: 'jack@acme.com', gates: 'North Gate', purpose: 'Meeting' },
      { username: 'Adobe', company: 'Adobe Corp', email: 'ads@acme.com', gates: 'West Gate', purpose: 'Meeting' },
      { username: 'Anay', company: 'Anay pvt', email: 'anay@acme.com', gates: 'North Gate', purpose: 'Meeting' }
    ];
    this.dataSource = new MatTableDataSource(visitors);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openCheckinDialog() {
    const dialogRef = this.dialog.open(Checkin, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newUser: VisitorData = {
          username: result.loginid,
          company: result.userType,
          email: result.email,
          gates: 'Main Gate',
          purpose: 'Visit'
        };

        this.dataSource.data = [...this.dataSource.data, newUser];

        this.snackBar.open('User checked in successfully!', 'Close', {
          duration: 3000
        });
      }
    });
  }

  
  openCheckoutDialog(user: VisitorData): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '300px',
      data: { message: 'Are you sure you want to log out?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.confirmCheckout(user);
        this.snackBar.open('User logged out successfully!', 'Close', { duration: 3000 });
      }
    });
  }

  confirmCheckout(user: VisitorData) {
    this.dataSource.data = this.dataSource.data.filter(u => u !== user);
  }
}
