import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, Category } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private client: HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.client.get<Category[]>(`/api/categories`)
  }

  getBooks(id: number): Observable<Book[]>{
    return this.client.get<Book[]>(`/api/categories/${id}/books`)
  }
}
