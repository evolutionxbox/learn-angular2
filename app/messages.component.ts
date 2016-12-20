import { Component } from '@angular/core'
import { MessagesService } from './messages.service'

@Component({
    selector: 'messages',
    template: `<h1>Messages</h1>
    <ul>
        <li *ngFor="let message of messages">{{ message }}</li>
    </ul>`,
    providers: [ MessagesService ]
})

export class MessagesComponent {
    messages;

    constructor(messagesService: MessagesService) {
        this.messages = messagesService.getMessages();
    }
}