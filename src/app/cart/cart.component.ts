import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink,CommonModule], // No additional imports needed for this example
  templateUrl: './cart.component.html', // External HTML file
  styleUrls: ['./cart.component.css']   // External CSS file
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems(); // Refresh the cart items
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = []; // Clear the displayed cart items
  }
}