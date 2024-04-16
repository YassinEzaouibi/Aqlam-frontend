import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../models/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = 'http://localhost:8008/api/v1/user';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseURL + '/all');
  }

  getUserByUserName(userName: string): Observable<User> {
    return this.httpClient.get<User>(this.baseURL + '/username', {params: {userName: userName}});
  }

  getUserByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>(this.baseURL + '/email', {params: {email: email}});
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.baseURL + '/' + id);
  }

  updateUser(id: number, user: any): Observable<User> {
    return this.httpClient.put<User>(this.baseURL + '/update/' + id, user);
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL + '/delete/' + id);
  }

  public toUsersList() {
    this.router.navigate(['/users']);
  }
}
