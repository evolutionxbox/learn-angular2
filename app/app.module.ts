import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ZippyComponent } from './zippy.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    ZippyComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
