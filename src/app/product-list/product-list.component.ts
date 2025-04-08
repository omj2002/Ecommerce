import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule,CommonModule,CartComponent], // No additional imports needed for this example
  templateUrl: './product-list.component.html', // External HTML file
  styleUrls: ['./product-list.component.css']   // External CSS file
})
export class ProductListComponent {
  products: any[] = [];

  constructor(private productService: ProductService,private cartService: CartService) {}
  ngOnInit() {
    this.products = this.productService.getProducts();
    console.log('Products:', this.products);
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to the cart!`);
  }
}