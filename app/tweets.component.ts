import {Component} from 'angular2/core'
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'

@Component({
    selector: 'tweets',
    template: `
        <tweet *ngFor="#tweet of tweets" [tweet]="tweet" (change)="onTweetChange($event)"></tweet>
    `,
    directives: [TweetComponent],
    providers: [TweetService]
})
export class TweetsComponent {
    tweets;

    constructor(tweetService : TweetService) {
        this.tweets = tweetService.getTweets();
    }

    onTweetChange($event) {
        console.log($event);
    }
}