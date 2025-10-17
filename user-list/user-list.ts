import { Component, ViewChild, viewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialog1 } from '../user-dialog1/user-dialog1';
import { MatCellDef, MatHeaderCellDef, MatHeaderRowDef, MatRowDef, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatLabel } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [MatButtonModule, MatTableModule,
    MatInputModule, MatFormFieldModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, FormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {

  
  users = [
    { username: 'john_doe', company: 'ABC Corp', email: 'john@example.com', gates: 'North', purpose: 'Visit' },
    { username: 'jane_smith', company: 'XYZ Inc', email: 'jane@example.com', gates: 'South', purpose: 'Interview' },
    { username: 'jane_smith', company: 'XYZ Inc', email: 'jane@example.com', gates: 'South', purpose: 'Interview' },
    { username: 'john_doe', company: 'ABC Corp', email: 'john@example.com', gates: 'North', purpose: 'Visit' },
    { username: 'jane_smith', company: 'XYZ Inc', email: 'jane@example.com', gates: 'South', purpose: 'Interview' },
    { username: 'jane_smith', company: 'XYZ Inc', email: 'jane@example.com', gates: 'South', purpose: 'Interview' },
    { username: 'jane_smith', company: 'XYZ Inc', email: 'jane@example.com', gates: 'South', purpose: 'Interview' },
    { username: 'jane_smith', company: 'XYZ Inc', email: 'jane@example.com', gates: 'South', purpose: 'Interview' },

  ];
    displayedColumns: string[] = ['username', 'company', 'email', 'gates', 'purpose', 'actions'];
  
    dataSource = new MatTableDataSource(this.users);


    @ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
gates: any;
    selectedGatesFromDialog: string[] = [];

openDialog() {
  const dialogRef = this.dialog.open(UserDialog1);

  dialogRef.afterClosed().subscribe((result: string[]) => {
    if (result) {
      console.log('Dialog result:', result);  
      this.selectedGatesFromDialog = result;
    }
  });
}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}


    applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  constructor(private dialog: MatDialog) {}

  public refreshTable(): void {
  this.dataSource.data = [...this.users];
}


  openCreateUser() {
    const dialogRef = this.dialog.open(UserDialog1, {
      width: '400px',
      data: { isEdit: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.users.push(result);
        this.refreshTable();
      }
    });
  }

  openEditUser(user: any) {
    const dialogRef = this.dialog.open(UserDialog1, {
      width: '400px',
      data: { isEdit: true, user: { ...user } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.users.indexOf(user);
        if (index !== -1) this.users[index] = result;
        this.refreshTable();
      }
    });
  }
}

