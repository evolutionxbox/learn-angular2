import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'like',
    template: `
        <i
            class="like glyphicon glyphicon-heart"
            [class.highlighted]="isLiked"
            (click)="isLikeChanged()"></i>
        <span>{{ totalLikes }}</span>`,
    styles: [
        `.like {
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
    
    @Output() change = new EventEmitter();

    isLikeChanged() {
        this.isLiked ? --this.totalLikes : ++this.totalLikes;
        this.isLiked = !this.isLiked;
        this.change.emit({
            newValue: this.isLiked,
            likes: this.totalLikes
        });
    }
}