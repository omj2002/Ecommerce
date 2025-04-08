import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [CommonModule,RouterLink], // No additional imports needed for this example
  templateUrl: './men.component.html', // External HTML file
  styleUrls: ['./men.component.css']   // External CSS file
})
export class MenComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService,private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts().filter(product => product.category === 'Men');
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to the cart!`);
  }
}