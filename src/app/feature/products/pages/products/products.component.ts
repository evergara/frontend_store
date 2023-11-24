import { Component, Input, OnInit, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { ProductComponent } from '@feature/products/components/product/product.component';
import { Category } from '@feature/products/model/category.model';
import { Product } from '@feature/products/model/product.model';
import { ProductsService } from '@feature/products/services/products.service';
import { CategoriesService } from '@feature/products/services/categories.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, ProductComponent],
  templateUrl: './products.component.html'
})
export default class ProductsComponent implements OnInit {


  @Input() category_id?: string;

  categories = signal<Category[]>([]);
  products = signal<Product[]>([]);

  private productServices = inject(ProductsService);
  private categoryService = inject(CategoriesService);

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getProducts();
  }

  getProducts() {
    this.productServices.findAll(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      }
    });
  }

  getCategories() {
    this.categoryService.findAll().subscribe({
      next: (category) => {
        this.categories.set(category);
      }
    });
  }

  addToCart(product: Product): void {
    
  }

}
