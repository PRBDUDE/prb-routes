import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuBar} from './core/menu-bar/menu-bar';
import {Footer} from './core/footer/footer';

@Component({
  selector: 'prb-root',
  imports: [RouterOutlet, MenuBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('prb-routes');
}
