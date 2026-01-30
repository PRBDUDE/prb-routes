import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubA } from './sub-a';

describe('SubA', () => {
  let component: SubA;
  let fixture: ComponentFixture<SubA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
