import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SubC} from './sub-c';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideRouter} from '@angular/router';

describe('SubC', () => {
  let component: SubC;
  let fixture: ComponentFixture<SubC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SubC
      ],
      providers: [
        provideRouter([
          {
            path: '',
            loadComponent: () => import('../../top-level-2/top-level-2')
              .then(m => m.TopLevel2),
            title: 'Top Level 2'
          },
          {
            path: 'sub-a',
            loadComponent: () => import('../sub-a/sub-a')
              .then(m => m.SubA),
            title: 'Sub A'
          },
          {
            path: 'sub-b',
            loadComponent: () => import('../sub-b/sub-b')
              .then(m => m.SubB),
            title: 'Sub B'
          }
        ]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SubC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
