import {Component} from 'angular2/core'
import {CoursesComponent} from './course.component'
import {AuthorComponent} from './author.component'
import {FavoriteComponent} from './favorite.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular beta 2</h1>
        <favorite [is-favorite]="post.isFavorite"></favorite>
    `,
    directives: [CoursesComponent, AuthorComponent, FavoriteComponent]
})
export class AppComponent { 
    post = {
        title: "New post",
        isFavorite: true
    }
}