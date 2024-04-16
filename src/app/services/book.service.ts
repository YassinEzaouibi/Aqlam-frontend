import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../models/book";
import {Category} from "../models/enum/Category";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = "http://localhost:8008/api/v1/book";

  constructor(
    private httpClient: HttpClient
  ) {
  }

  createBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.baseURL + '/add', book);
  }

  retrieveAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseURL + '/all');
  }

  retrieveBookByTitle(title: string): Observable<Book> {
    return this.httpClient.get<Book>(this.baseURL + '/title', {params: {title: title}});
  }

  retrieveBooksByCategory(category: Category): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseURL + '/category', {params: {category: category}});
  }

  retrieveBookByAuthor(author: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseURL + '/author', {params: {author: author}});
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(this.baseURL + '/update/' + id, book);
  }

  deleteBookByTitle(title: string): Observable<void> {
    return this.httpClient.delete<void>(this.baseURL + '/delete', {params: {title: title}});
  }

  deleteBookById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.baseURL + '/delete/' + id);
  }

  retrieveBooksByIdUser(id: number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseURL + '/' + id);
  }
}
