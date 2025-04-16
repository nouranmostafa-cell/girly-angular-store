import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CategoryComponent } from '../../components/category/category.component';


@Component({
  selector: 'app-home',
  imports: [ProductComponent, CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
