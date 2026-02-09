import {Component} from '@angular/core';
import {DatePipe} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'prb-sub-router-demo',
  imports: [
    DatePipe,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './sub-router-demo.html',
  styleUrl: './sub-router-demo.scss',
})
export class SubRouterDemo {
  protected batchId = 'PRB-03348945';
  protected runStartDate = new Date('2026-01-25T18:43:36');
  protected runEndDate = new Date('2026-01-25T20:38:27');
}
