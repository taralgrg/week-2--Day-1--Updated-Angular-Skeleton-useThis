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
var TaskListComponent = (function () {
    function TaskListComponent() {
        this.clickSender = new core_1.EventEmitter();
    }
    TaskListComponent.prototype.editButtonHasBeenClicked = function (taskToEdit) {
        this.clickSender.emit(taskToEdit);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TaskListComponent.prototype, "childTaskList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TaskListComponent.prototype, "clickSender", void 0);
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'task-list',
            template: "\n    <div *ngFor=\"let currentTask of childTaskList\">\n      <h3>{{ currentTask.description }}</h3>\n      <button (click)=\"editButtonHasBeenClicked(currentTask)\">Edit</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map