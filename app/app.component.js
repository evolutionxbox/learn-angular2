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
        this.tweets = [
            {
                isLiked: false,
                totalLikes: 10
            },
            {
                isLiked: true,
                totalLikes: 1
            },
            {
                isLiked: false,
                totalLikes: 100
            }
        ];
    }
    AppComponent.prototype.onChange = function ($event) {
        console.log($event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <like\n      [is-liked]=\"tweets[0].isLiked\"\n      [total-likes]=\"tweets[0].totalLikes\"\n      (like-change)=\"onChange($event)\"></like>\n    <like\n      [is-liked]=\"tweets[1].isLiked\"\n      [total-likes]=\"tweets[1].totalLikes\"\n      (like-change)=\"onChange($event)\"></like>\n    <like\n      [is-liked]=\"tweets[2].isLiked\"\n      [total-likes]=\"tweets[2].totalLikes\"\n      (like-change)=\"onChange($event)\"></like>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map