import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <voter
      [vote-count]="post.voteCount"
      [my-vote]="post.myVote"
      (vote)="onVote($event)">
    </voter>`
})

export class AppComponent {
  post = {
    voteCount: 10,
    myVote: 0
  };

  onVote($event) {
    console.log($event);
  }
}
