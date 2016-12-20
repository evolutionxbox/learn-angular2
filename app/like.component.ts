import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'like',
    template: `
        <i
            class="glyphicon glyphicon-heart"
            [class.highlighted]="isLiked"
            (click)="onClick()"></i>
        <span>{{ totalLikes }}</span>`,
    styles: [
        `.glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }`,
        `.highlighted {
            color: deeppink;
        }`
    ]
})

export class LikeComponent {
    @Input('is-liked') isLiked: boolean = false;
    @Input('total-likes') totalLikes: number = 0;
    @Output('like-change') change = new EventEmitter();

    onClick () {
        this.isLiked = !this.isLiked;
        this.isLiked ? ++this.totalLikes : --this.totalLikes;
        
        this.change.emit({
            newValue: this.isLiked
        })
    }
}