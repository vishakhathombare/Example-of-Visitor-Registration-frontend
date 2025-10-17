import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserDialog } from '../user-dialog/user-dialog';
import { UserList } from '../user-list/user-list';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatLabel } from '@angular/material/input';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatTableModule, MatTableDataSource } from '@angular/material/table';
import { UserDialog1 } from '../user-dialog1/user-dialog1';

@Component({
  selector: 'app-users',
  imports: [MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatButtonModule, MatTableModule,
    MatInputModule, MatFormFieldModule, MatLabel, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {


  users = [
    { username: 'john_doe', company: 'ABC Corp', email: 'john@example.com', gates: 'North',  },
    { username: 'jane_smith', company: 'XYZ Inc', email: 'jane@example.com', gates: 'South',  },
    { username: 'jane_smith', company: 'XYZ Inc', email: 'jane@example.com', gates: 'South',  },
    { username: 'john_doe', company: 'ABC Corp', email: 'john@example.com', gates: 'North', },
    { username: 'jane_smith', company: 'XYZ Inc', email: 'jane@example.com', gates: 'South', },
    { username: 'jane_smith', company: 'XYZ Inc', email: 'jane@example.com', gates: 'South', },
    { username: 'jane_smith', company: 'XYZ Inc', email: 'jane@example.com', gates: 'South',  },
    { username: 'jane_smith', company: 'XYZ Inc', email: 'jane@example.com', gates: 'South', },

  ];
  displayedColumns: string[] = ['username', 'company', 'email', 'gates', 'actions'];

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
  constructor(private dialog: MatDialog) { }

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

