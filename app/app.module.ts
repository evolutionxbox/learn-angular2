import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { MessagesComponent } from './messages.component';
import { MessagesService } from './messages.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { FavouriteComponent } from './favourite.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    CoursesComponent, 
    AuthorsComponent, 
    MessagesComponent,
    AutoGrowDirective,
    FavouriteComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
