import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JobStatusSuccess} from './job-status-success';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('JobStatusSuccess', () => {
  let component: JobStatusSuccess;
  let fixture: ComponentFixture<JobStatusSuccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JobStatusSuccess
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(JobStatusSuccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
