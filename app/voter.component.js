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
var VoterComponent = (function () {
    function VoterComponent() {
        this.voteCount = 10;
        this.myVote = 0;
        this.vote = new core_1.EventEmitter();
    }
    VoterComponent.prototype.calculateVote = function () {
        return this.voteCount + this.myVote;
    };
    VoterComponent.prototype.upVote = function () {
        if (this.myVote < 1) {
            ++this.myVote;
            this.vote.emit({ myVote: this.myVote });
        }
    };
    VoterComponent.prototype.downVote = function () {
        if (this.myVote > -1) {
            --this.myVote;
            this.vote.emit({ myVote: this.myVote });
        }
    };
    return VoterComponent;
}());
__decorate([
    core_1.Input('vote-count'),
    __metadata("design:type", Number)
], VoterComponent.prototype, "voteCount", void 0);
__decorate([
    core_1.Input('my-vote'),
    __metadata("design:type", Number)
], VoterComponent.prototype, "myVote", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], VoterComponent.prototype, "vote", void 0);
VoterComponent = __decorate([
    core_1.Component({
        selector: 'voter',
        template: "\n    <div class=\"voter\">\n        <i\n            (click)=\"upVote()\"\n            [class.highlighted]=\"myVote == 1\"\n            class=\"glyphicon glyphicon-menu-up vote-button\"></i>\n\n        <span class=\"vote-count\">{{ voteCount + myVote }}</span>\n\n        <i\n            (click)=\"downVote()\"\n            [class.highlighted]=\"myVote == -1\"\n            class=\"glyphicon glyphicon-menu-down vote-button\"></i>\n    </div>",
        styles: [
            ".voter {\n            color: #999;\n            padding: 20px;\n            text-align: center;\n            width: 20px;\n        }",
            ".vote-count {\n            font-size: 1.2em;\n        }",
            ".vote-button {\n            cursor: pointer;\n        }",
            ".highlighted {\n            font-weight: bold;\n            color: orange;\n        }"
        ]
    }),
    __metadata("design:paramtypes", [])
], VoterComponent);
exports.VoterComponent = VoterComponent;
//# sourceMappingURL=voter.component.js.map