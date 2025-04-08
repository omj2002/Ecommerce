import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  // Add a product to the cart
  addToCart(product: any) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1; // Increment quantity if product already exists
    } else {
      this.cartItems.push({ ...product, quantity: 1 }); // Add new product with quantity 1
    }
  }

  // Get all cart items
  getCartItems() {
    return this.cartItems;
  }

  // Remove a product from the cart
  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }

  // Clear the cart
  clearCart() {
    this.cartItems = [];
  }
}