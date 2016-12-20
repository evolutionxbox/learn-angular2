import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { LikeComponent }   from './like.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    LikeComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
