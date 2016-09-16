import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {LikeComponent} from './like.component'

@Component({
    selector: 'tweet',
    template: `
        <div class="media col-md-offset-4">
            <div class="media-left">
                <a href="#">
                <img class="media-object" src={{tweet.url}}>
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{tweet.author}} <span>{{tweet.tweetHandle}}</span></h4>
                <p>{{tweet.content}}</p>
                <like [like-count]="tweet.tweetTotal" [is-like]="tweet.isLike" (like-change)="onLikeChange($event)"></like>
            </div>
        </div>
    `,
    directives: [LikeComponent],
    styles: [`
        .media {
            margin: 10px 0;
        }

        .media-left a img{
            border-radius: 8px !important;
        }

        span {
            color: #ccc;
        }
    `]
})
export class TweetComponent {
    
    @Input() tweet = {
        url: "http://lorempixel.com/100/100/people",
        author: "Peter Park",
        tweetHandle: "@PeterParkStudio",
        content: "This is a tweet. Like it for me!!!",
        tweetTotal: 30,
        isLike: true
    }

    @Output() change = new EventEmitter(); 

    onLikeChange($event) {
        console.log($event);

        this.change.emit({tweet: this.tweet});
    }

}