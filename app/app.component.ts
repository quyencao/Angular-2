import {Component} from 'angular2/core'
import {CoursesComponent} from './course.component'
import {AuthorComponent} from './author.component'
import {StarComponent} from './star.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular beta 2</h1>
        <stars></stars>
    `,
    directives: [CoursesComponent, AuthorComponent, StarComponent]
})
export class AppComponent { }