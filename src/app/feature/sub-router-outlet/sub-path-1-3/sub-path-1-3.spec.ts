import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPath13 } from './sub-path-1-3';

describe('SubPath13', () => {
  let component: SubPath13;
  let fixture: ComponentFixture<SubPath13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubPath13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubPath13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
