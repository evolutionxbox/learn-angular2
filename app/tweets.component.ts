import { Component } from '@angular/core'
import { TweetsService } from './tweets.service'

@Component({
    selector: 'tweets',
    template: `
    <div class="tweets">
        <div *ngFor="let tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
    </div>`
})
export class TweetsComponent {
    tweets: any[];

    constructor(tweetsService: TweetsService) {
        this.tweets = tweetsService.getAllTweets();
    }
}