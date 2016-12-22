import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'voter',
    template: `
    <div class="voter">
        <i
            (click)="upVote()"
            [class.highlighted]="myVote == 1"
            class="glyphicon glyphicon-menu-up vote-button"></i>

        <span class="vote-count">{{ voteCount + myVote }}</span>

        <i
            (click)="downVote()"
            [class.highlighted]="myVote == -1"
            class="glyphicon glyphicon-menu-down vote-button"></i>
    </div>`,
    styles: [
        `.voter {
            color: #999;
            padding: 20px;
            text-align: center;
            width: 20px;
        }`,
        `.vote-count {
            font-size: 1.2em;
        }`,
        `.vote-button {
            cursor: pointer;
        }`,
        `.highlighted {
            font-weight: bold;
            color: orange;
        }`
    ]
})

export class VoterComponent {
    @Input('vote-count') voteCount: number = 10;
    @Input('my-vote') myVote: number = 0;

    @Output() vote = new EventEmitter();

    calculateVote() {
        return this.voteCount + this.myVote;
    }

    upVote() {
        if (this.myVote < 1) {
            ++this.myVote;
            this.vote.emit({ myVote: this.myVote });
        }
    }

    downVote() {
        if (this.myVote > -1) {
            --this.myVote;
            this.vote.emit({ myVote: this.myVote });
        }
    }
}