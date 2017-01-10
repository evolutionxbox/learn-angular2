import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <zippy title="This is the title">
      Here is the content
    </zippy>
    <zippy title="Who can see my stuff?">
      I can
    </zippy>
  `
})

export class AppComponent {
}
