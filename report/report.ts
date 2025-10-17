import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


export interface Visitor {
  visitorName: string;
  visitorCompany: string;
  email: string;
  visitorPurpose: string;
  visitorSignIn: string;
}

const VISITOR_DATA: Visitor[] = [
  {
    visitorName: 'John',
    visitorCompany: 'ABC',
    email: 'john@123.com',
    visitorPurpose: 'Meeting',
    visitorSignIn: '28 Aug 2025',
  },
  {
    visitorName: 'Devin',
    visitorCompany: 'MGH',
    email: 'devin@123.com',
    visitorPurpose: 'Meeting',
    visitorSignIn: '28 Aug 2025',
  },
  {
    visitorName: 'Klein',
    visitorCompany: 'LKH',
    email: 'klein@123.com',
    visitorPurpose: 'Meeting',
    visitorSignIn: '28 Aug 2025',
  },
  {
    visitorName: 'John',
    visitorCompany: 'ABC',
    email: 'john@123.com',
    visitorPurpose: 'Meeting',
    visitorSignIn: '28 Aug 2025',
  },
  {
    visitorName: 'Devin',
    visitorCompany: 'MGH',
    email: 'devin@123.com',
    visitorPurpose: 'Meeting',
    visitorSignIn: '28 Aug 2025',
  },
    {
    visitorName: 'John',
    visitorCompany: 'ABC',
    email: 'john@123.com',
    visitorPurpose: 'Meeting',
    visitorSignIn: '28 Aug 2025',
  },
  {
    visitorName: 'Devin',
    visitorCompany: 'MGH',
    email: 'devin@123.com',
    visitorPurpose: 'Meeting',
    visitorSignIn: '28 Aug 2025',
  },
  {
    visitorName: 'Mars',
    visitorCompany: 'jkl',
    email: 'mars@123.com',
    visitorPurpose: 'Meeting',
    visitorSignIn: '28 Aug 2025',
  }
  
];

@Component({
  selector: 'app-report',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './report.html',
  styleUrl: './report.css'
})
export class ReportComponent implements AfterViewInit {

  displayedColumns: string[] = ['visitorName', 'visitorCompany', 'email', 'visitorPurpose', 'visitorSignIn'];
  dataSource = new MatTableDataSource<Visitor>(VISITOR_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

