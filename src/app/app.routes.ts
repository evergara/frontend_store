import { LayoutComponent } from '@shared/components/layout/layout.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component:  LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        loadChildren: () => import('@app/feature/products/product.routes').then(r => r.routes)
      },
      {
        path: 'about',
        loadComponent: () => import('@app/feature/info/pages/about/about.component')
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
