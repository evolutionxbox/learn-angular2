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
var TweetComponent = (function () {
    function TweetComponent() {
    }
    TweetComponent.prototype.onLike = function ($event) {
        console.log($event);
    };
    return TweetComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TweetComponent.prototype, "data", void 0);
TweetComponent = __decorate([
    core_1.Component({
        selector: 'tweet',
        template: "\n        <div class=\"media tweet\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                    <img class=\"media-object img-rounded\" src=\"{{ data.imageUrl }}\" alt=\"\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">\n                    {{ data.author }} <span class=\"handle\">{{ data.handle }}</span>\n                </h4>\n                <p>{{ content }}</p>\n                <like (change)=\"onLike($event)\" [is-liked]=\"data.isLiked\" [total-likes]=\"data.totalLikes\"></like>\n            </div>\n        </div>",
        styles: [
            ".tweet {\n            padding: 20px;\n        }",
            ".handle {\n            color: #ccc;\n        }",
            ".handle::before {\n            content: '@';\n        }"
        ]
    }),
    __metadata("design:paramtypes", [])
], TweetComponent);
exports.TweetComponent = TweetComponent;
//# sourceMappingURL=tweet.component.js.map