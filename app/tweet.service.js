System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            url: "http://lorempixel.com/100/100/people?1",
                            author: "Peter Park",
                            tweetHandle: "@PeterParkStudio",
                            content: "This is a tweet. Like it for me!!!",
                            tweetTotal: 30,
                            isLike: true
                        },
                        {
                            url: "http://lorempixel.com/100/100/people?2",
                            author: "John Park",
                            tweetHandle: "@JohnParkStudios",
                            content: "This is a tweet. Like it for me!!!",
                            tweetTotal: 20,
                            isLike: false
                        },
                        {
                            url: "http://lorempixel.com/100/100/people?3",
                            author: "Micheal Park",
                            tweetHandle: "@MichealParkStudios",
                            content: "This is a tweet. Like it for me!!!",
                            tweetTotal: 100,
                            isLike: false
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map