import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [
    {
      image: 'assets/product1.jpg',
      productName: 'Product 1',
      productPrice: 100,
      onSale: true
    },
    {
      image: 'assets/product1.jpg',
      productName: 'Product 2',
      productPrice: 120,
      onSale: false
    }
  ];
}
