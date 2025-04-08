import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule], // No additional imports needed for this example
  templateUrl: './home.component.html', // External HTML file
  styleUrls: ['./home.component.css']   // External CSS file
})
export class HomeComponent implements OnInit {
  productsByCategory: { [key: string]: any[] } = {};
  categories: string[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const products = this.productService.getProducts();
    this.categories = this.productService.getCategories();

    this.categories.forEach(category => {
      this.productsByCategory[category] = products.filter(product => product.category === category);
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to the cart!`);
  }
}