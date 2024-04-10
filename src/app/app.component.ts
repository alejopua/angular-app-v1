import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter: number = 0;

  constructor() {}

  onIncrease(): void {
    this.counter++;
  }

  onDecrease(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  onReset(): void {
    this.counter = 0;
  }
}
