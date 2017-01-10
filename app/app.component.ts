import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul *ngFor="let task of tasks">
      <li>Title: {{ task.title }}</li>
      <li>Assigned to: {{ task.assignee?.name }}</li>
    </ul>
  `
})

export class AppComponent {
  tasks = [{
    title: "Review applications",
    assignee: null
  },
  {
    title: "Learn Angular",
    assignee: {
      name: "Jon"
    }
  }];
}
