import { Component, OnInit } from '@angular/core';
import { Category } from '../models';
import { DataService } from '../data.service';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.component.html',
  imports: [RouterModule, CommonModule],
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories!: Category[];
  loaded: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.loaded = false;
    this.dataService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.loaded = true;
    })
  }
}
