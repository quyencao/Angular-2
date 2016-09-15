import {Component} from 'angular2/core'
import {CoursesComponent} from './course.component'
import {AuthorComponent} from './author.component'
import {FavoriteComponent} from './favorite.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular beta 2</h1>
        <favorite *ngFor="#post of posts" [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    `,
    directives: [CoursesComponent, AuthorComponent, FavoriteComponent]
})
export class AppComponent { 
    posts = [{
        title: "New post",
        isFavorite: true
    }, {
        title: "New post",
        isFavorite: false
    }]

    onFavoriteChange($event){
        console.log($event);
    }
}