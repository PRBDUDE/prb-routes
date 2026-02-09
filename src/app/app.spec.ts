import {TestBed} from '@angular/core/testing';
import {App} from './app';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideRouter} from '@angular/router';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        App
      ],
      providers: [
        provideRouter([
          {
            path: '',
            loadComponent: () => import('./feature/top-level-1/top-level-1')
              .then(m => m.TopLevel1),
            title: 'Top Level 1'
          },
          {
            path: '',
            loadComponent: () => import('./feature/top-level-2/top-level-2')
              .then(m => m.TopLevel2),
            title: 'Top Level 2'
          },
          {
            path: 'sub-a',
            loadComponent: () => import('./feature/top-level-2/sub-a/sub-a')
              .then(m => m.SubA),
            title: 'Sub A'
          },
          {
            path: 'sub-b',
            loadComponent: () => import('./feature/top-level-2/sub-b/sub-b')
              .then(m => m.SubB),
            title: 'Sub B'
          }
        ]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
