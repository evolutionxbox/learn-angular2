import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li>Title: {{ task.title }}</li>
      <li>Assigned to: {{ task.assignee.name }}</li>
    </ul>
  `
})

export class AppComponent {
  task = {
    title: "Review applications",
    assignee: {
      name: "Jon"
    }
  };
}
