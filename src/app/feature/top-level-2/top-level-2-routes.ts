import {Routes} from '@angular/router';

export const topLevel2Routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./top-level-2')
      .then(m => m.TopLevel2),
    title: 'Top Level 2'
  },
  {
    path: 'sub-a',
    loadComponent: () => import('./sub-a/sub-a')
      .then(m => m.SubA),
    title: 'Sub A'
  },
  {
    path: 'sub-b',
    loadComponent: () => import('./sub-b/sub-b')
      .then(m => m.SubB),
    title: 'Sub B'
  }
];
