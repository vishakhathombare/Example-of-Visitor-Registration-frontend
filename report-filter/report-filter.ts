import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatFormField, MatLabel } from '@angular/material/input';
import { MatOption } from '@angular/material/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-report-filter',
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatOption, MatDatepicker, MatDatepickerToggle, MatNativeDateModule,],
  templateUrl: './report-filter.html',
  styleUrl: './report-filter.css'
})
export class ReportFilter {
 reportForm: FormGroup;
 
reportData: any[] = [];
displayedColumns: string[] = [];


  constructor(private fb: FormBuilder) {
    this.reportForm = this.fb.group({
      reportType: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });
  }
}
