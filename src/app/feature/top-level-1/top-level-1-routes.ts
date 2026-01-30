import {Routes} from '@angular/router';

export const topLevel1Routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./top-level-1')
      .then(m => m.TopLevel1),
    title: 'Top Level 1'
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
  },
  {
    path: 'sub-c',
    loadComponent: () => import('./sub-c/sub-c')
      .then(m => m.SubC),
    title: 'Sub C'
  }
];
