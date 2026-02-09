import {ComponentFixture, TestBed} from '@angular/core/testing';
import {JobStatusFailed} from './job-status-failed';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('JobStatusFailed', () => {
  let component: JobStatusFailed;
  let fixture: ComponentFixture<JobStatusFailed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JobStatusFailed
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(JobStatusFailed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
