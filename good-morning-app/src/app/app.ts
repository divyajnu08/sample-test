import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoodMorningComponent } from './good-morning/good-morning';

@Component({
  selector: 'app-root',
  imports: [
    GoodMorningComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('good-morning-app');
}
