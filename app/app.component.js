"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.tasks = [
            new Task("Create To-Do List app.", 0),
            new Task("Learn Kung Fu.", 1),
            new Task("Rewatch all the Lord of the Rings movies.", 2),
            new Task("Do the Laundry.", 3)
        ];
    }
    AppComponent.prototype.doStuff = function (clickedTask) {
        if (clickedTask.done === true) {
            alert("This Task is done!");
        }
        else {
            alert("This Task is not completed yet! Get to work!");
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div class=\"container\">\n   <h1>My First Angular 2 App</h1>\n   <h3 (click) = \"doStuff(currentTask)\" *ngFor=\"let currentTask of tasks\"> {{ currentTask.description}}</h3>\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Task = (function () {
    function Task(description, id) {
        this.description = description;
        this.id = id;
        this.done = false;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=app.component.js.map