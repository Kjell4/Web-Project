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

  getBook(): void {
  this.route.paramMap.subscribe(params => {
    const bookId: number = Number(params.get('id'));
    this.loaded = false;
    this.dataService.getBook(bookId).subscribe((book: Book) => {
      this.book = book;
      console.log(book);
      this.loaded = true;
    });
  });
}

}

