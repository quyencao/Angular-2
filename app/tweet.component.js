System.register(['angular2/core', './like.component'], function(exports_1, context_1) {
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
    var core_1, like_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent() {
                    this.tweet = {
                        url: "http://lorempixel.com/100/100/people",
                        author: "Peter Park",
                        tweetHandle: "@PeterParkStudio",
                        content: "This is a tweet. Like it for me!!!",
                        tweetTotal: 30,
                        isLike: true
                    };
                    this.change = new core_1.EventEmitter();
                }
                TweetComponent.prototype.onLikeChange = function ($event) {
                    console.log($event);
                    this.change.emit({ tweet: this.tweet });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "tweet", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "change", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "\n        <div class=\"media col-md-offset-4\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                <img class=\"media-object\" src={{tweet.url}}>\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{tweet.author}} <span>{{tweet.tweetHandle}}</span></h4>\n                <p>{{tweet.content}}</p>\n                <like [like-count]=\"tweet.tweetTotal\" [is-like]=\"tweet.isLike\" (like-change)=\"onLikeChange($event)\"></like>\n            </div>\n        </div>\n    ",
                        directives: [like_component_1.LikeComponent],
                        styles: ["\n        .media {\n            margin: 10px 0;\n        }\n\n        .media-left a img{\n            border-radius: 8px !important;\n        }\n\n        span {\n            color: #ccc;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map