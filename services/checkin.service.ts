import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  private apiUrl = 'https://localhost:7205/api/checkin'; // Update port if needed

  constructor(private http: HttpClient) {}

  checkIn(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
