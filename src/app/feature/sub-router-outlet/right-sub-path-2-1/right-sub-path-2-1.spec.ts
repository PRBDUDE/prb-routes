import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSubPath21 } from './right-sub-path-2-1';

describe('RightSubPath21', () => {
  let component: RightSubPath21;
  let fixture: ComponentFixture<RightSubPath21>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightSubPath21]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSubPath21);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
