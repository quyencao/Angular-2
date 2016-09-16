import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'like',
    template: `
        <i 
            class="glyphicon glyphicon-heart"
            [class.highlight]="isLike"
            (click)="onLikeClick()"
        ></i> 
        <span>{{totalLikes}}</span>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer
        }

        .highlight {
            color: deeppink;
        }
    `]
})
export class LikeComponent {
    @Input('like-count') totalLikes = 0;

    @Input('is-like') isLike = true;

    @Output('like-change') change = new EventEmitter();

    onLikeClick() {
        this.isLike = !this.isLike;

        this.totalLikes += this.isLike ? 1 : -1;

        this.change.emit({likes: this.totalLikes, isLike: this.isLike});
    }
}

//  .glyphicon, span {
//     font-size: 40px
// }