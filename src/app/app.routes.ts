import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./feature/home/home')
      .then(m => m.Home),
    title: 'Home'
  },
  {
    path: 'top-level-1',
    loadChildren: () => import('./feature/top-level-1/top-level-1-routes')
      .then(m => m.topLevel1Routes),
    title: 'Top Level 1'
  },
  {
    path: 'top-level-2',
    loadChildren: () => import('./feature/top-level-2/top-level-2-routes')
      .then(m => m.topLevel2Routes),
    title: 'Top Level 2'
  }
];
