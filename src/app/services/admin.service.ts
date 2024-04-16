import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Admin} from "../models/admin";
import {Router} from "@angular/router";
import {Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:8008/api/v1/admin";

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  getAllAdmins(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.baseURL + '/admins');
  }

  getAllManagers(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.baseURL + '/managers');
  }

  getAll(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.baseURL + '/all');
  }

  addAdmin(admin: Admin): Observable<Admin> {
    return this.httpClient.post<Admin>(this.baseURL + '/add', admin);
  }

  updateAdmin(id: number, admin: Admin): Observable<Admin> {
    return this.httpClient.put<Admin>(this.baseURL + '/update/' + id, admin);
  }

  getAdminById(id: number): Observable<Admin> {
    return this.httpClient.get<Admin>(this.baseURL + '/' + id);
  }

  getAdminByEmail(email: string): Observable<Admin> {
    return this.httpClient.get<Admin>(this.baseURL + '/email', {params: {email: email}});
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL + '/delete/' + id);
  }

  public toAdminsList() {
    this.router.navigate(['/admins']);
  }
}
