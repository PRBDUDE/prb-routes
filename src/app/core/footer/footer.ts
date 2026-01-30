import { Component } from '@angular/core';

@Component({
  selector: 'prb-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  year = new Date().getFullYear();
}
