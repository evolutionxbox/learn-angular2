import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <favourite
      [is-favourite]="post.isFavourite"
      (change)="onFavouriteChange($event)">
    </favourite>
  `
})

export class AppComponent {
}
