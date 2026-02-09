import {Component, OnInit} from '@angular/core';
import {JobStatus} from '../model/job-status';
import {setDate} from '../../../core/date-functions/set-date';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'prb-job-status-success',
  imports: [
    DatePipe
  ],
  templateUrl: './job-status-success.html',
  styleUrl: '../sub-router-demo.scss',
})
export class JobStatusSuccess implements OnInit {
  protected batchId = 'PRB-03348945';
  protected runStartDate = new Date('2026-01-25T18:43:36');
  protected runEndDate = new Date('2026-01-25T20:38:27');

  jobEvents: JobStatus[] = [];

  ngOnInit(): void {
    let workDate = this.runStartDate;
    let processedRecords;
    this.jobEvents.push(new JobStatus(this.batchId,
      workDate, "Job started"));
    workDate = setDate(workDate, 0, 24, 29);
    processedRecords = 1030;
    this.jobEvents.push(new JobStatus(this.batchId,
      workDate, "Processed " + processedRecords.toLocaleString() + " records"));
    workDate = setDate(workDate, 0, 34, 2);
    processedRecords = processedRecords + 1404;
    this.jobEvents.push(new JobStatus(this.batchId,
      workDate, "Processed " + processedRecords.toLocaleString() + " records"));
    workDate = setDate(workDate, 0, 28, 45);
    processedRecords = processedRecords + 1670;
    this.jobEvents.push(new JobStatus(this.batchId,
      workDate, "Processed " + processedRecords.toLocaleString() + " records"));
    processedRecords = processedRecords + 892;
    this.jobEvents.push(new JobStatus(this.batchId,
      this.runEndDate, "Processed " + processedRecords.toLocaleString() + " records"));
    this.jobEvents.push(new JobStatus(this.batchId,
      this.runEndDate, "Job completed"));
  }
}
