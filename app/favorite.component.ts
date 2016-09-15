import {Component, Input} from 'angular2/core';

@Component({
    selector: 'favorite',
    template: `
        <i class="glyphicon" [class.glyphicon-star]="isActive" [class.glyphicon-star-empty]="!isActive" (click)="onClick()"></i>
    `
})
export class FavoriteComponent {
    @Input('is-favorite') isActive = false;

    onClick() {
        this.isActive = !this.isActive;
    }
}