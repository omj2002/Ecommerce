import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SecondaryNavbarComponent } from './shared/secondary-navbar/secondary-navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterLink,CommonModule,SecondaryNavbarComponent,FormsModule], // No additional imports needed for this example
  templateUrl: './app.component.html', // External HTML file
  styleUrls: ['./app.component.css']   // External CSS file
})
export class AppComponent {
  searchQuery = '';
  showCategories = false;
  categories: string[] = [];
  filteredProducts: any[] = [];
  allProducts: any[] = [];

  constructor(private productService: ProductService, private router: Router) {
    this.categories = this.productService.getCategories();
  }

  ngOnInit(): void {
    // Fetch static categories and products
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  
    console.log('All Products:', this.allProducts); // Debug log
  }
// Filter products dynamically as the user types
filterProducts() {
  const query = this.searchQuery.toLowerCase().trim();
  console.log('Filtering with Query:', query); // Debug log

  if (query === '') {
    this.filteredProducts = [];
    console.log('Filtered Products (Empty Query):', this.filteredProducts); // Debug log
    return;
  }

  this.filteredProducts = this.allProducts.filter(product => {
    const matches = (
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
    console.log('Checking Product:', product.name, 'Matches:', matches); // Debug log
    return matches;
  });

  console.log('Filtered Products:', this.filteredProducts); // Debug log
  this.showCategories = false;
}
  // Handle category selection
  // Handle category selection
// Handle category selection
// Handle category selection
selectCategory(category: string) {
  console.log('Selected Category:', category); // Debug log
  this.searchQuery = category;
  this.showCategories = false; // Hide the categories dropdown
  this.router.navigate(['/search'], { queryParams: { query: category } }); // Navigate to search page
}

// Handle product selection
selectProduct(product: any) {
  console.log('Selected Product:', product.name); // Debug log
  this.searchQuery = product.name;
  this.filteredProducts = []; // Clear the filtered products list
  this.showCategories = false; // Hide the categories dropdown
  this.router.navigate(['/search'], { queryParams: { query: product.name } }); // Navigate to search page
}

  // Handle search submission
  onSearch(event: Event | null) {
    if (event) {
      event.preventDefault(); // Prevent form submission
    }

    const query = this.searchQuery.toLowerCase().trim();
    if (query === '') {
      return;
    }

    this.router.navigate(['/search'], { queryParams: { query } });
  }

  hideDropdownDelayed() {
    setTimeout(() => {
      this.showCategories = false;
      this.filteredProducts = [];
    }, 200); // Adjust the delay as needed
  }
}