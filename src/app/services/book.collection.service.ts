import {HttpClient} from "@angular/common/http";
import {Collection} from "../models/collection";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private baseURL = "http://localhost:8008/api/v1/collection";

  constructor(
    private httpClient: HttpClient
  ) {
  }

  createCollection(collection: Collection): Observable<Collection> {
    return this.httpClient.post<Collection>(this.baseURL + '/add', collection);
  }

  getAllCollections(): Observable<Collection[]> {
    return this.httpClient.get<Collection[]>(this.baseURL + '/all');
  }

  getCollectionByTitle(title: string): Observable<Collection> {
    return this.httpClient.get<Collection>(this.baseURL + '/title', {params: {title: title}});
  }

  getCollection(id: number): Observable<Collection> {
    return this.httpClient.get<Collection>(this.baseURL + '/' + id);
  }

  updateCollection(id: number, collection: Collection): Observable<Collection> {
    return this.httpClient.put<Collection>(this.baseURL + '/update/' + id, collection);
  }

  deleteCollection(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.baseURL + '/delete/' + id);
  }
}
