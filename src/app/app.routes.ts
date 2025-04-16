import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import  {ContactComponent} from './pages/contact/contact.component';
import {ProductsComponent} from './pages/products/products.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.component').then(m => m.ProductsComponent)
  },
  { path: '**', redirectTo: 'home' }
];
