import {Component} from 'angular2/core'
import {CoursesComponent} from './course.component'
import {AuthorComponent} from './author.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular beta 2</h1>
        <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
        <like [like-count]="post.likes" [is-like]="post.isLike" (like-change)="onLikeChange($event)"></like>
    `,
    directives: [CoursesComponent, AuthorComponent, FavoriteComponent, LikeComponent]
})
export class AppComponent { 
    post = {
        title: "New post",
        isFavorite: true,
        likes: 10,
        isLike: false
    }

    onFavoriteChange($event){
        console.log($event);
    }

    onLikeChange($event) {
        console.log($event);
    }
}