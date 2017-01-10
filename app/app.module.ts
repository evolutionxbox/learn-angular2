import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BootstrapPanel } from './bootstrap.panel.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    BootstrapPanel
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
