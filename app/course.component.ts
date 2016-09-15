import { Component } from 'angular2/core';
import { CourseService } from './course.service';

@Component({
    selector: 'courses',
    template: `
        <h2>Course</h2>
        {{ title }}
        <ul>
            <li *ngFor="#course of courses">
                {{course}}
            </li>
        </ul>
        <img [src]="imageUrl"/>
        <img src="{{imageUrl}}"/>
        <div (click)="onDivClick()">
        <button on-click="onClick($event)" class="btn btn-primary" [class.active]="isActive">Submit</button>
        </div>
        <button (click)="onClick()" class="btn btn-primary" [style.width]="isActive ? 200 : 100" [style.height]="isActive ? 200 : 100">Login</button>
        <input type="text" [(ngModel)]="title" /> 
        <button (click)="title=''">Clear</button>
        <label>Priview: {{title}}</label>
    `,
    providers: [CourseService]
    // [value]="title" (input)="title = $event.target.value"
})
export class CoursesComponent {
    //title: string = "The title of the course";
    title = "The title of the course";

    isActive = true;

    imageUrl = "http://i.imgur.com/ZStdDkvb.jpg";

    courses;

    onDivClick() {
        console.log("From div");
    }

    onChange($event) {
        console.log($event);
        this.title = $event.target.value;
    }

    onClick($event) {
        $event.stopPropagation();
        console.log($event);
        this.isActive = ! this.isActive;
    }

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}