import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  username: string;
  password?: string;     // optional (used in login/register)
  company: string;
  email: string;
  purpose: string;
  gates: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:7205/api/users';  // adjust port if needed

  constructor(private http: HttpClient) {}

  // ✅ Get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // ✅ Get a single user by ID
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // ✅ Create a new user (admin or manually)
  createUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // ✅ Update existing user
  updateUser(id: number, user: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  // ✅ Delete user (optional)
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // ✅ Register user (register route)
  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // ✅ Login user
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}
