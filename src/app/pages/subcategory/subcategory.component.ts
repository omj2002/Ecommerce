import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service'; // Import CartService

@Component({
  selector: 'app-subcategory',
  standalone: true,
  imports: [], // Remove unnecessary imports like CartComponent
  templateUrl: './subcategory.component.html', // External HTML file
  styleUrls: ['./subcategory.component.css']   // External CSS file
})
export class SubcategoryComponent implements OnInit {
  products: any[] = [];
  category: string = '';
  subcategory: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService // Inject CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.subcategory = params.get('subcategory') || '';
      this.products = this.productService.getProducts().filter(product =>
        product.category === this.category && product.subcategory === this.subcategory
      );
    });
  }

  // Method to add a product to the cart
  addToCart(product: any): void {
    this.cartService.addToCart(product); // Call CartService's addToCart method
    alert(`${product.name} has been added to the cart!`);
  }
}