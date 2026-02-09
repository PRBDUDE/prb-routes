import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SubRouterDemo} from './sub-router-demo';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideRouter} from '@angular/router';

describe('SubRouterDemo', () => {
  let component: SubRouterDemo;
  let fixture: ComponentFixture<SubRouterDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SubRouterDemo
      ],
      providers: [
        provideRouter([
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
        ]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SubRouterDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
