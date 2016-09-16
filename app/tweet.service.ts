export class TweetService {
    getTweets() : any[] {
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
        ]
    }
}