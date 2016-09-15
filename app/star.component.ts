import {Component} from 'angular2/core';

@Component({
    selector: 'stars',
    template: `
        <i class="glyphicon" [class.glyphicon-star]="isActive" [class.glyphicon-star-empty]="!isActive" (click)="onClick()"></i>
    `
})
export class StarComponent {
    isActive = false;

    onClick() {
        this.isActive = !this.isActive;
    }
}