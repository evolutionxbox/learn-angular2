import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    {{ post.title }}
    <br>
    {{ post.body | summary }}
    <br>
    {{ post.body | summary:10 }}
    <br>
    {{ post.body | summary:100 }}
  `
})

export class AppComponent {
  post = {
    title: "Angular Tutorial for Beginners",
    body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
    nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`
  }
}
