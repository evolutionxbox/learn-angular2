import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
     <li *ngFor="let course of courses; let i = index">
      <span>{{ i + 1 }} {{ course }}</span>
     </li>
    </ul>
  `
})

export class AppComponent {
  courses = ['Course1', 'Course2', 'Course3'];
}
