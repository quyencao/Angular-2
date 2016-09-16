System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.totalVotes = 10;
                    // 1 is vote up, 0 is no vote, -1 is vote down
                    this.myVote = 0;
                    this.change = new core_1.EventEmitter();
                }
                VoteComponent.prototype.onUpMenuClick = function () {
                    if (this.myVote == 1) {
                        return;
                    }
                    this.totalVotes++;
                    this.myVote++;
                    this.emitChange();
                };
                VoteComponent.prototype.onDownMenuClick = function () {
                    if (this.myVote == -1) {
                        return;
                    }
                    this.totalVotes--;
                    this.myVote--;
                    this.emitChange();
                };
                VoteComponent.prototype.emitChange = function () {
                    this.change.emit({
                        totalVotes: this.totalVotes,
                        vote: this.myVote
                    });
                };
                __decorate([
                    core_1.Input('total-votes'), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "totalVotes", void 0);
                __decorate([
                    core_1.Input('vote'), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output('vote-change'), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "change", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n        <div class=\"col-md-offset-3\">\n            <i class=\"glyphicon glyphicon-menu-up vote-button\" (click)=\"onUpMenuClick()\" [class.highlight]=\"myVote == 1\"></i>\n            <span>{{totalVotes}}</span>\n            <i class=\"glyphicon glyphicon-menu-down vote-button\" (click)=\"onDownMenuClick()\" [class.highlight]=\"myVote == -1\"></i>\n        </div>\n    ",
                        styles: ["\n        div {\n            width: 20px;\n            font-size: 30px;\n            text-align:center;\n            color:#999;\n        }\n\n        .vote-button {\n            cursor: pointer;\n        }\n\n        .highlight {\n            color: orange;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map