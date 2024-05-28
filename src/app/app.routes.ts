import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./products/products.routes').then(m => m.pagesRoutes)
  }
];
