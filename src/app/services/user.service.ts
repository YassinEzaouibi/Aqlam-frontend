import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = 'http://localhost:8008/api/v1/user';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/all`);
  }

  getUserByUserName(userName: string): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/username`, { params: { userName: userName } });
  }

  getUserByEmail(email: string): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/email`, { params: { email: email } });
  }

  getUserById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/update/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
