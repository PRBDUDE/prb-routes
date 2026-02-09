import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRouterOutlet } from './sub-router-outlet';

describe('SubRouterOutlet', () => {
  let component: SubRouterOutlet;
  let fixture: ComponentFixture<SubRouterOutlet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubRouterOutlet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubRouterOutlet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
