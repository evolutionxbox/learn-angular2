import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TweetsComponent }   from './tweets.component';
import { TweetComponent }   from './tweet.component';
import { TweetsService }   from './tweets.service';
import { LikeComponent }   from './like.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    TweetsComponent,
    TweetComponent,
    LikeComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [ TweetsService ]
})

export class AppModule { }
