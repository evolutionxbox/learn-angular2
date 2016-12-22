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
var TweetsService = (function () {
    function TweetsService() {
    }
    TweetsService.prototype.getAllTweets = function () {
        return [
            {
                imageUrl: 'http://lorempixel.com/100/100/people?1',
                author: 'Windward',
                handle: 'windwardstudios',
                body: 'Looking for a better company reporting or docgen app?',
                isLiked: true,
                totalLikes: 1
            },
            {
                imageUrl: 'http://lorempixel.com/100/100/people?2',
                author: 'AngularJS News',
                handle: 'angularjs_news',
                body: 'Right Relevance: Influencers, Articles and Conversations',
                isLiked: true,
                totalLikes: 5
            },
            {
                imageUrl: 'http://lorempixel.com/100/100/people?3',
                author: 'UX & Bootstrap',
                handle: '3rdwave',
                body: '10 Reasons Why Web Projects Fail',
                isLiked: false,
                totalLikes: 0
            }
        ];
    };
    return TweetsService;
}());
TweetsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TweetsService);
exports.TweetsService = TweetsService;
//# sourceMappingURL=tweets.service.js.map