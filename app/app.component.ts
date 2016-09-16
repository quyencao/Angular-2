import {Component} from 'angular2/core'
import {CoursesComponent} from './course.component'
import {AuthorComponent} from './author.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoteComponent} from './vote.component'
import {TweetsComponent} from './tweets.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular beta 2</h1>
        <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
        <like [like-count]="post.likes" [is-like]="post.isLike" (like-change)="onLikeChange($event)"></like>
        <vote [total-votes]="vote.totalVotes" [vote]="vote.vote" (vote-change)="onVoteChange($event)"></vote>
        <tweets></tweets>
    `,
    directives: [CoursesComponent, AuthorComponent, FavoriteComponent, LikeComponent, VoteComponent, TweetsComponent]
})
export class AppComponent { 
    post = {
        title: "New post",
        isFavorite: true,
        likes: 10,
        isLike: false
    }

    vote = {
        totalVotes: 10,
        vote: 0
    }

    onVoteChange($event) {
        console.log($event);
    }

    onFavoriteChange($event){
        console.log($event);
    }

    onLikeChange($event) {
        console.log($event);
    }
}