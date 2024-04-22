import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartComponent } from './cart/cart.component';
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'category', component: CategoryComponent, title: 'Category'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'category/:id/books', component: BooksComponent, title: 'Books'},
    { path: 'category/:categoryId/books/:bookId', component: BookDetailsComponent, title: 'Book Details' },
    {path: 'cart', component: CartComponent, title: 'Cart'},
  {path: 'login', component:LoginComponent, title:'Login'},

];
