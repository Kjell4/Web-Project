import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book, CartItem } from '../models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems!: CartItem[]; // Инициализация в строке определения

  logged: boolean = false;
  username: string = "";
  password: string = "";

  constructor(private dataService: DataService) {
    this.loadCartItems();
  }
  ngOnInit(): void {
    const access = localStorage.getItem("access");
    if (access) {
      this.logged = true;
      this.loadCartItems();
    }
  }

  login() {
    this.dataService
      .login(this.username, this.password)
      .subscribe((data) => {
        this.logged = true;
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        this.loadCartItems();
      })
  }

  logout() {
    this.logged = false;
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }

  loadCartItems() {
    this.dataService.getCartBooks().subscribe(data => {
      this.cartItems = data;
    });
    console.log(this.cartItems)
  }
}