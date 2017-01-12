import { Component } from '@angular/core';

@Component({
  selector: 'subscribe-form',
  templateUrl: `./app/subscribe-form.template.html`
})

export class SubscribeFormComponent {
  onSubmit(form) {
    console.log(form);
  }
}
