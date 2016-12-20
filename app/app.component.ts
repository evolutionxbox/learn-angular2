import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <like
      [is-liked]="tweets[0].isLiked"
      [total-likes]="tweets[0].totalLikes"
      (like-change)="onChange($event)"></like>
    <like
      [is-liked]="tweets[1].isLiked"
      [total-likes]="tweets[1].totalLikes"
      (like-change)="onChange($event)"></like>
    <like
      [is-liked]="tweets[2].isLiked"
      [total-likes]="tweets[2].totalLikes"
      (like-change)="onChange($event)"></like>
  `
})

export class AppComponent {
  
  tweets = [
    {
      isLiked: false,
      totalLikes: 10
    },
    {
      isLiked: true,
      totalLikes: 1
    },
    {
      isLiked: false,
      totalLikes: 100
    }
  ]


  onChange ($event) {
    console.log($event);
  }

}
