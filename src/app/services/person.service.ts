import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseURL = "http://localhost:8008/api/v1/person";

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  getAllPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.baseURL + '/all');
  }

  getPersonById(id: number): Observable<Person> {
    return this.httpClient.get<Person>(this.baseURL + '/' + id);
  }
}
