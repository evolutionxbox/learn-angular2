import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'favourite',
    templateUrl: 'app/favourite.template.html',
    styles: [`.glyphicon-star {
        color: orange;
    }`]
    // inputs: ['isFavourite']
    // outputs: ['change']
    // styleUrls: []
})
export class FavouriteComponent {
    @Input('is-favourite') isFavourite: Boolean = false;

    @Output() change = new EventEmitter();

    onClick() {
        this.isFavourite = !this.isFavourite;
        this.change.emit({
            newValue: this.isFavourite
        });
    }
}