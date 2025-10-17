import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private apiUrl = 'https://localhost:7205/api/CheckIn/checkout';

  constructor(private http: HttpClient) {}

  checkOut(visitorId: number): Observable<any> {
    return this.http.post(this.apiUrl, visitorId, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
