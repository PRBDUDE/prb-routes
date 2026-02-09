import {Routes} from '@angular/router';

export const subRouterDemoRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./sub-router-demo')
      .then(m => m.SubRouterDemo),
    title: 'Sub Router Demo',
    children: [
      {
        path: 'job-success',
        loadComponent: () =>
          import('./job-status-success/job-status-success')
            .then(m => m.JobStatusSuccess),
        outlet: 'job-status'
      },
      {
        path: 'job-failure',
        loadComponent: () =>
          import('./job-status-failed/job-status-failed')
            .then(m => m.JobStatusFailed),
        outlet: 'job-status'
      }
    ]
  }
];
