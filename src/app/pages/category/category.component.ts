import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.component.html', // External HTML file
  styleUrls: ['./category.component.css']   // External CSS file
})
export class CategoryComponent implements OnInit {
  products: any[] = [];
  category: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.products = this.productService.getProducts().filter(product => product.category === this.category);
    });
  }
}