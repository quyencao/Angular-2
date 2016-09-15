System.register(['angular2/core', './course.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, course_service_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    //title: string = "The title of the course";
                    this.title = "The title of the course";
                    this.isActive = true;
                    this.imageUrl = "http://i.imgur.com/ZStdDkvb.jpg";
                    this.courses = courseService.getCourses();
                }
                CoursesComponent.prototype.onDivClick = function () {
                    console.log("From div");
                };
                CoursesComponent.prototype.onChange = function ($event) {
                    console.log($event);
                    this.title = $event.target.value;
                };
                CoursesComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log($event);
                    this.isActive = !this.isActive;
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n        <h2>Course</h2>\n        {{ title }}\n        <ul>\n            <li *ngFor=\"#course of courses\">\n                {{course}}\n            </li>\n        </ul>\n        <img [src]=\"imageUrl\"/>\n        <img src=\"{{imageUrl}}\"/>\n        <div (click)=\"onDivClick()\">\n        <button on-click=\"onClick($event)\" class=\"btn btn-primary\" [class.active]=\"isActive\">Submit</button>\n        </div>\n        <button (click)=\"onClick()\" class=\"btn btn-primary\" [style.width]=\"isActive ? 200 : 100\" [style.height]=\"isActive ? 200 : 100\">Login</button>\n        <input type=\"text\" [(ngModel)]=\"title\" /> \n        <button (click)=\"title=''\">Clear</button>\n        <label>Priview: {{title}}</label>\n    ",
                        providers: [course_service_1.CourseService]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=course.component.js.map