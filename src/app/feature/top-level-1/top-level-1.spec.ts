import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevel1 } from './top-level-1';

describe('TopLevel1', () => {
  let component: TopLevel1;
  let fixture: ComponentFixture<TopLevel1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopLevel1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopLevel1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
