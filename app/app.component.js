System.register(['angular2/core', './course.component', './author.component', './favorite.component', './like.component', './vote.component', './tweets.component'], function(exports_1, context_1) {
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
    var core_1, course_component_1, author_component_1, favorite_component_1, like_component_1, vote_component_1, tweets_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_component_1_1) {
                course_component_1 = course_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "New post",
                        isFavorite: true,
                        likes: 10,
                        isLike: false
                    };
                    this.vote = {
                        totalVotes: 10,
                        vote: 0
                    };
                }
                AppComponent.prototype.onVoteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onLikeChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Hello Angular beta 2</h1>\n        <favorite [is-favorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n        <like [like-count]=\"post.likes\" [is-like]=\"post.isLike\" (like-change)=\"onLikeChange($event)\"></like>\n        <vote [total-votes]=\"vote.totalVotes\" [vote]=\"vote.vote\" (vote-change)=\"onVoteChange($event)\"></vote>\n        <tweets></tweets>\n    ",
                        directives: [course_component_1.CoursesComponent, author_component_1.AuthorComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, vote_component_1.VoteComponent, tweets_component_1.TweetsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map