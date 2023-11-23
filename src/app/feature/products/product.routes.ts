import { Routes } from '@angular/router';
import ProductsComponent from './pages/products/products.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
   },
  {
    path: 'product/:id',
    component: ProductComponent
   }
];
