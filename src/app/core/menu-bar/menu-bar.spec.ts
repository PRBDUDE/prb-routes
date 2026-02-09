import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuBar} from './menu-bar';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideRouter} from '@angular/router';

describe('MenuBar', () => {
  let component: MenuBar;
  let fixture: ComponentFixture<MenuBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MenuBar
      ],
      providers: [
        provideRouter([
          {
            path: '',
            loadComponent: () =>
              import('../../feature/sub-router-outlet/sub-router-outlet')
                .then(m => m.SubRouterOutlet),
            title: 'Sub Router Outlet Base',
            children: [
              {
                path: 'sub-path-1',
                loadComponent: () =>
                  import('../../feature/sub-router-outlet/sub-path-1/sub-path-1')
                    .then(m => m.SubPath1),
                outlet: 'left-panel'
              },
              {
                path: 'sub-path-1-1',
                loadComponent: () =>
                  import('../../feature/sub-router-outlet/sub-path-1-1/sub-path-1-1')
                    .then(m => m.SubPath11),
                outlet: 'left-panel'
              },
              {
                path: 'sub-path-1-2',
                loadComponent: () =>
                  import('../../feature/sub-router-outlet/sub-path-1-2/sub-path-1-2')
                    .then(m => m.SubPath12),
                outlet: 'lower-left-panel'
              },
              {
                path: 'sub-path-1-3',
                loadComponent: () =>
                  import('../../feature/sub-router-outlet/sub-path-1-3/sub-path-1-3')
                    .then(m => m.SubPath13),
                outlet: 'lower-left-panel'
              },
              {
                path: 'sub-path-2',
                loadComponent: () =>
                  import('../../feature/sub-router-outlet/right-sub-path-2/right-sub-path-2')
                    .then(m => m.RightSubPath2),
                outlet: 'right-panel'
              },
              {
                path: 'sub-path-2-1',
                loadComponent: () =>
                  import('../../feature/sub-router-outlet/right-sub-path-2-1/right-sub-path-2-1')
                    .then(m => m.RightSubPath21),
                outlet: 'right-panel'
              }
            ]
          }
        ]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
