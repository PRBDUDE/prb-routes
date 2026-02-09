import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPath12 } from './sub-path-1-2';

describe('SubPath12', () => {
  let component: SubPath12;
  let fixture: ComponentFixture<SubPath12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubPath12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubPath12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
