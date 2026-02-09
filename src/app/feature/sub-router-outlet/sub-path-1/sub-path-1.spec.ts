import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPath1 } from './sub-path-1';

describe('SubPath1', () => {
  let component: SubPath1;
  let fixture: ComponentFixture<SubPath1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubPath1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubPath1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
