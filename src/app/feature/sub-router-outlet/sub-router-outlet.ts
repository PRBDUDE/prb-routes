import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'prb-sub-router-outlet',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './sub-router-outlet.html',
  styleUrl: './sub-router-outlet.scss',
})
export class SubRouterOutlet {

}
