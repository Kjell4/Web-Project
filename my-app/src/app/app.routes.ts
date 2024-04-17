import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { BooksComponent } from './books/books.component';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'category', component: CategoryComponent, title: 'Category'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'category/:id/books', component: BooksComponent, title: 'Books'}
];