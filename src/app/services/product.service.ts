import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    return [
      {
        id: 1,
        name: 'Men T-Shirt',
        price: 29.99,
        description: 'Comfortable cotton t-shirt for men.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Men',
        subcategory: 'T-Shirts'
      },
      {
        id: 2,
        name: 'Men Casual Shoes',
        price: 49.99,
        description: 'Stylish casual shoes for men.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Men',
        subcategory: 'Footwear'
      },
      {
        id: 3,
        name: 'Men Winter Jacket',
        price: 89.99,
        description: 'Warm winter jacket for men.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Men',
        subcategory: 'Jackets'
      },
      {
        id: 4,
        name: 'Women Jeans',
        price: 49.99,
        description: 'Stylish denim jeans for women.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Women',
        subcategory: 'Bottoms'
      },
      {
        id: 5,
        name: 'Women Dress',
        price: 79.99,
        description: 'Elegant summer dress for women.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Women',
        subcategory: 'Dresses'
      },
      {
        id: 6,
        name: 'Children Shoes',
        price: 39.99,
        description: 'Durable shoes for children.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Children',
        subcategory: 'Footwear'
      },
      {
        id: 7,
        name: 'Children Backpack',
        price: 24.99,
        description: 'Colorful backpack for children.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Children',
        subcategory: 'Accessories'
      },
      {
        id: 8,
        name: 'Home Decor Set',
        price: 39.99,
        description: 'Decorative set for home and kitchen.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Home & Kitchen',
        subcategory: 'Decor'
      },
      {
        id: 9,
        name: 'Beauty Kit',
        price: 29.99,
        description: 'Essential beauty and health kit.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Beauty & Health',
        subcategory: 'Skincare'
      },
      {
        id: 10,
        name: 'Jewellery Set',
        price: 79.99,
        description: 'Elegant jewellery set with accessories.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Jewellery & Accessories',
        subcategory: 'Jewellery'
      },
      {
        id: 11,
        name: 'Laptop Bag',
        price: 39.99,
        description: 'Stylish laptop bag with multiple compartments.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Bags & Footwear',
        subcategory: 'Bags'
      },
      {
        id: 12,
        name: 'Smartphone',
        price: 699.99,
        description: 'A sleek smartphone with a 6.7-inch display and 128GB storage.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Electronics',
        subcategory: 'Mobile Phones'
      },
      {
        id: 13,
        name: 'Sports Gear',
        price: 49.99,
        description: 'Durable sports gear for fitness enthusiasts.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Sports & Fitness',
        subcategory: 'Equipment'
      },
      {
        id: 14,
        name: 'Car Accessories',
        price: 59.99,
        description: 'Useful car accessories for drivers.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Car',
        subcategory: 'Accessories'
      }
    ];
  }

  getCategories() {
    const products = this.getProducts();
    const categories = new Set(products.map(product => product.category));
    return Array.from(categories);
  }

  getSubcategories(category: string) {
    const products = this.getProducts().filter(product => product.category === category);
    const subcategories = new Set(products.map(product => product.subcategory));
    return Array.from(subcategories);
  }
}