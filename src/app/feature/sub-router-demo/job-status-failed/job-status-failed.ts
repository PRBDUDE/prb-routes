import {Component, OnInit} from '@angular/core';
import {JobStatus} from '../model/job-status';
import {DatePipe} from '@angular/common';
import {setDate} from '@core/set-date';

@Component({
  selector: 'prb-job-status-failed',
  imports: [
    DatePipe
  ],
  templateUrl: './job-status-failed.html',
  styleUrl: '../sub-router-demo.scss',
})
export class JobStatusFailed implements OnInit {
  protected batchId = 'PRB-03348945';
  protected runStartDate = new Date('2026-01-25T18:43:36');

  jobEvents: JobStatus[] = [];

  ngOnInit(): void {
    this.jobEvents.push(new JobStatus(this.batchId,
      setDate(this.runStartDate, 0, 46, 0),
      "Job crashed"
    ));
    this.jobEvents.push(new JobStatus(this.batchId,
      setDate(this.runStartDate, 0, 53, 47),
      "Job restarted"
    ));
  }
}
