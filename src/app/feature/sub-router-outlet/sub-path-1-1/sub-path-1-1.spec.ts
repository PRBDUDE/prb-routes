import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPath11 } from './sub-path-1-1';

describe('SubPath11', () => {
  let component: SubPath11;
  let fixture: ComponentFixture<SubPath11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubPath11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubPath11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
