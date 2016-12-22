import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { VoterComponent }   from './voter.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    VoterComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
