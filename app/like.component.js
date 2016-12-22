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
var LikeComponent = (function () {
    function LikeComponent() {
        this.isLiked = false;
        this.totalLikes = 0;
        this.change = new core_1.EventEmitter();
    }
    LikeComponent.prototype.isLikeChanged = function () {
        this.isLiked ? --this.totalLikes : ++this.totalLikes;
        this.isLiked = !this.isLiked;
        this.change.emit({
            newValue: this.isLiked,
            likes: this.totalLikes
        });
    };
    return LikeComponent;
}());
__decorate([
    core_1.Input('is-liked'),
    __metadata("design:type", Boolean)
], LikeComponent.prototype, "isLiked", void 0);
__decorate([
    core_1.Input('total-likes'),
    __metadata("design:type", Number)
], LikeComponent.prototype, "totalLikes", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LikeComponent.prototype, "change", void 0);
LikeComponent = __decorate([
    core_1.Component({
        selector: 'like',
        template: "\n        <i\n            class=\"like glyphicon glyphicon-heart\"\n            [class.highlighted]=\"isLiked\"\n            (click)=\"isLikeChanged()\"></i>\n        <span>{{ totalLikes }}</span>",
        styles: [
            ".like {\n            color: #ccc;\n            cursor: pointer;\n        }",
            ".highlighted {\n            color: deeppink;\n        }"
        ]
    }),
    __metadata("design:paramtypes", [])
], LikeComponent);
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map