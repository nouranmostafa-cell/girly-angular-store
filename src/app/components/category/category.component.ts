import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: Category[] = [
    { image: 'assets/product1.jpg', price: 30 },
    { image: 'assets/product1.jpg', price: 45 }
  ];
}
