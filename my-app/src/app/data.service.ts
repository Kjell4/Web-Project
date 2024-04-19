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
  getCategory(id: number): Observable<Category>{
    return this.client.get<Category>(`/api/categories/${id}`)
  }
  getBook(id:number): Observable<Book>{
    return this.client.get<Book>(`/api/categories/${id}/books/${id}`)
  }
  getBooks(id: number): Observable<Book[]>{
    return this.client.get<Book[]>(`/api/categories/${id}/books`)
  }
}
