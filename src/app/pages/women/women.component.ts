import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-women',
  imports: [CommonModule,RouterLink], // No additional imports needed for this example
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
  products: any[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.products = this.productService.getProducts().filter(product => product.category === 'Women');
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to the cart!`);
  }
}
