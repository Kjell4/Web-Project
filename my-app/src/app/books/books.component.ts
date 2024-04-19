import { Component, OnInit } from '@angular/core';
import { Book } from '../models';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{
  books!: Book[];
  loaded:boolean = false;

  constructor(private route: ActivatedRoute,private router: Router, private dataService: DataService){}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.route.paramMap.subscribe((params) => {
      const id: number = Number(params.get('id'));
      this.loaded = false;
      this.dataService.getBooks(id).subscribe((books) => {
          this.books = books;
        console.log(books)
        this.loaded = true;
      });
     })
  }

  getBookDetails(bookId: number): void {
    const categoryId = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/category', categoryId, 'books', bookId]);
  }
}
