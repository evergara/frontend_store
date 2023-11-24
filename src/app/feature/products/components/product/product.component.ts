import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@feature/products/model/product.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {

  @Input({ required: true }) product!: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
  public urlImg: string = '';

  addToCartHandler(): void {
    this.addToCart.emit(this.product);
  }

  ngOnInit(): void {
    this.urlImg = this.product.images[0];
  }

  imgError() {
    this.urlImg = '../../../../../assets/img/default-image.jpeg';
  }
}
