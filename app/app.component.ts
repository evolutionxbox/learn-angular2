import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    {{ course.title | uppercase | lowercase }}
    <br>
    {{ course.students | number }}
    <br>
    {{ course.rating | number:'2.2-2' }}
    <br>
    {{ course.price | currency:'GBP':true:'2.2-2' }}
    <br>
    {{ course.releaseDate | date:'dd MM yyyy' }}
    <br>
    {{ course | json }}
  `
})

export class AppComponent {
  course = {
    title: "Angular 2 for Beginners",
    rating: 4.9745,
    students: 5981,
    price: 10.00,
    releaseDate: new Date(2016, 3, 1)
  }
}
