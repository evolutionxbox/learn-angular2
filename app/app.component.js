"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular App';
        this.imageUrl = 'http://lorempixel.com/400/200/';
        this.isActive = true;
        this.post = {
            title: "Title",
            isFavourite: true
        };
    }
    AppComponent.prototype.onClick = function (a, $event) {
        $event.stopPropagation();
        console.log(a, $event, 'hello');
    };
    AppComponent.prototype.onDivClick = function ($event) {
        console.log('Clicked');
    };
    AppComponent.prototype.onFavouriteChange = function ($event) {
        console.log($event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{ title }}</h1>\n\n    <i class=\"glyphicon glyphicon-star\"></i>\n    <favourite [is-favourite]=\"post.isFavourite\" (change)=\"onFavouriteChange($event)\"></favourite>\n\n    <hr>\n\n    <input type=\"text\" [(ngModel)]=\"title\">\n    <input bindon-ngModel=\"title\">\n    <button (click)=\"title = ''\"></button>\n\n    <courses></courses>\n    <authors></authors>\n    <messages></messages>\n    \n    <img src=\"{{ imageUrl }}\" />\n    <img [src]=\"imageUrl\" />\n    <img bind-src=\"imageUrl\" />\n\n    <button\n      [class.active]=\"isActive\"\n      [style.backgroundColor]=\"isActive ? 'blue' : 'grey'\">Button</button> \n\n    <div (click)=\"onDivClick()\">\n      <button (click)=\"onClick(this, $event)\">One button</button>\n      <button on-click=\"onClick(this, $event)\">Two button</button>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map