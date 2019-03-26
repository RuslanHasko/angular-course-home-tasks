import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  moveToActiveCounter = 0;
  moveToInactiveCounter = 0;

  updateCounter(type: string) {
    this[`moveTo${type.charAt(0).toUpperCase() + type.slice(1)}Counter`]++;
    console.log(`
      Users moved to active: ${this.moveToActiveCounter} times;
      Users moved to inactive: ${this.moveToInactiveCounter} times;
    `);
  }
}
