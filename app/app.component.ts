import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <button
      [style.backgroundColor]="canSave ? 'blue' : 'gray'"
      [style.color]="canSave ? 'white' : 'black"
      [style.fontWeight]="canSave ? 'bold' : 'normal'">
      Submit
    </button>
  `
})

export class AppComponent {
  canSave = true;
}
