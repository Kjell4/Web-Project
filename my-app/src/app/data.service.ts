import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, CartItem, Category, Token } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private client: HttpClient) { }

  login(username: string, password: string): Observable<Token> {
    return this.client.post<Token>(
      `/api/login/`,
      {username, password}
    );
  }

  private getRequestHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      // Exclude the CSRF token here
    });
  }

  getCategories(): Observable<Category[]>{
    return this.client.get<Category[]>(`/api/categories`)
  }

  getCategory(id: number): Observable<Category>{
    return this.client.get<Category>(`/api/categories/${id}`)
  }

  getBook(categoryId: number, bookId: number): Observable<Book>{
    return this.client.get<Book>(`/api/categories/${categoryId}/books/${bookId}`);
  }

  getBooks(id: number): Observable<Book[]>{
    return this.client.get<Book[]>(`/api/categories/${id}/books`)
  }

  addToCart(item: CartItem): Observable<any> {
    return this.client.post<any>('/api/cart/', item);
  }
  
  getCartBooks(): Observable<CartItem[]> {
    return this.client.get<CartItem[]>('/api/cart/');
  }
  
}
