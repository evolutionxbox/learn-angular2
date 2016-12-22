import { Component, Input } from '@angular/core'
import { LikeComponent } from './like.component'

@Component({
    selector: 'tweet',
    template: `
        <div class="media tweet">
            <div class="media-left">
                <a href="#">
                    <img class="media-object img-rounded" src="{{ data.imageUrl }}" alt="">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    {{ data.author }} <span class="handle">{{ data.handle }}</span>
                </h4>
                <p>{{ content }}</p>
                <like (change)="onLike($event)" [is-liked]="data.isLiked" [total-likes]="data.totalLikes"></like>
            </div>
        </div>`,
    styles: [
        `.tweet {
            padding: 20px;
        }`,
        `.handle {
            color: #ccc;
        }`,
        `.handle::before {
            content: '@';
        }`
    ]
})
export class TweetComponent {
    @Input() data: any;

    onLike($event) {
        console.log($event)
    }
}