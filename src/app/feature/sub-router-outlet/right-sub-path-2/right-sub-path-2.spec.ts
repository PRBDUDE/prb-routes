import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSubPath2 } from './right-sub-path-2';

describe('RightSubPath2', () => {
  let component: RightSubPath2;
  let fixture: ComponentFixture<RightSubPath2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightSubPath2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSubPath2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
