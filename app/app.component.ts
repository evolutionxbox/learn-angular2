import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>

    <i class="glyphicon glyphicon-star"></i>
    <favourite [is-favourite]="post.isFavourite" (change)="onFavouriteChange($event)"></favourite>

    <hr>

    <input type="text" [(ngModel)]="title">
    <input bindon-ngModel="title">
    <button (click)="title = ''"></button>

    <courses></courses>
    <authors></authors>
    <messages></messages>
    
    <img src="{{ imageUrl }}" />
    <img [src]="imageUrl" />
    <img bind-src="imageUrl" />

    <button
      [class.active]="isActive"
      [style.backgroundColor]="isActive ? 'blue' : 'grey'">Button</button> 

    <div (click)="onDivClick()">
      <button (click)="onClick(this, $event)">One button</button>
      <button on-click="onClick(this, $event)">Two button</button>
    </div>
    `
})

export class AppComponent {
    title = 'Angular App';
    imageUrl = 'http://lorempixel.com/400/200/';

    isActive = true;

    post = {
      title: "Title",
      isFavourite: true
    }

    onClick(a, $event) {
      $event.stopPropagation();
      console.log(a, $event, 'hello');
    }

    onDivClick($event) {
      console.log('Clicked');
    }

    onFavouriteChange($event) {
      console.log($event);
    }
}
