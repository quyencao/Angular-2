import { Component } from 'angular2/core'
import { AuthorService } from './author.service'
import { AutoGrowDirective } from './auto-grow.directive'

@Component({
    selector: 'authors',
    template: `
        <h1>Author</h1>
        <p>{{title}}</p>
        <input type="text" autoGrow width="120"/>
        <ul>
            <li *ngFor="#author of authors">{{author}}</li>
        </ul>
    `,
    providers: [AuthorService],
    directives: [AutoGrowDirective]
})
export class AuthorComponent {
    title = "Title for the author page";

    authors:string[];

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}