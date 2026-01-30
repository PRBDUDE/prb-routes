import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevel2 } from './top-level-2';

describe('TopLevel2', () => {
  let component: TopLevel2;
  let fixture: ComponentFixture<TopLevel2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopLevel2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopLevel2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
