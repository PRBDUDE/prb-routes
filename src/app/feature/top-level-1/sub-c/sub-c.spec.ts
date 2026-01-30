import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubC } from './sub-c';

describe('SubC', () => {
  let component: SubC;
  let fixture: ComponentFixture<SubC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
