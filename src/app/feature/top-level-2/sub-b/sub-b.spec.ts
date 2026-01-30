import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubB } from './sub-b';

describe('SubB', () => {
  let component: SubB;
  let fixture: ComponentFixture<SubB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
