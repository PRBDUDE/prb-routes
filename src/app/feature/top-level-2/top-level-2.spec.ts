import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TopLevel2} from './top-level-2';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideRouter} from '@angular/router';

describe('TopLevel2', () => {
  let component: TopLevel2;
  let fixture: ComponentFixture<TopLevel2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TopLevel2
      ],
      providers: [
        provideRouter([
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
        ]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TopLevel2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
