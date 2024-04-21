import { Component, OnInit } from '@angular/core';
import { Book } from '../models';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit{
  book!: Book;
  loaded:boolean = false;

  constructor(private route: ActivatedRoute, private dataService: DataService){}

  ngOnInit(): void {
    this.getBook();
  }

  
  // like(): void {
  //   if (this.book) {
  //     this.book.likes++;
  //   }
  // }

  getBook(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId: number = Number(params.get('categoryId')); // Используйте categoryId
      const bookId: number = Number(params.get('bookId')); // Используйте bookId
      this.loaded = false;
      this.dataService.getBook(categoryId, bookId).subscribe((book: Book) => {
        this.book = book;
        console.log(book);
        this.book.likes = this.book.likes || 0;
        this.loaded = true;
      });
    });
  }

}