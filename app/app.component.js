"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_model_1 = require('./task.model');
var AppComponent = (function () {
    function AppComponent() {
        this.masterTaskList = [
            new task_model_1.Task("Create To-Do List app.", 0),
            new task_model_1.Task("Learn Kung Fu.", 1),
            new task_model_1.Task("Rewatch all the Lord of the Rings movies.", 2),
            new task_model_1.Task("Do the laundry.", 3)
        ];
        this.selectedTask = null;
    }
    AppComponent.prototype.showDetails = function (clickedTask) {
        this.selectedTask = clickedTask;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedTask = null;
    };
    AppComponent.prototype.addTask = function (newTaskFromChild) {
        this.masterTaskList.push(newTaskFromChild);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n    <h1>My First Angular 2 App</h1>\n    <pies></pies>\n    <task-list\n      [childTaskList]=\"masterTaskList\"\n      (clickSender)=\"showDetails($event)\"\n     ></task-list>\n    <edit-task\n      [childSelectedTask]=\"selectedTask\"\n      (doneClickedSender)=\"finishedEditing()\"\n    ></edit-task>\n    <new-task\n      (newTaskSender)=\"addTask($event)\"\n    ></new-task>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map