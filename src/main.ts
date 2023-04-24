import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container p-3">
    <h1>Hello from {{name}}!</h1>
    <div class="d-flex">
    <input class="form-control" type='text' placeholder='Type here ...' #task [(ngModel)]="preview"/> 
    <button (click)="addTask(task.value)" class="btn btn-primary mb-3 mx-1">Add</button>
    </div>
    <label class="form-label px-2 mx-1">{{preview}}</label>
    <ul *ngFor="let task of tasks" class="list-group d-flex justify-content-between">
    <li class="list-group-item">{{task}}<button class="btn btn-primary m-0" (click)="removeTask(task)">Remove</button></li>
    </ul>
    </div>
  `,
})
export class App {
  preview: any;
  name = 'Angular';
  color = 'ff';
  display = false;
  tasks = [];
  addTask(item) {
    // console.warn(item);
    this.tasks.includes(item) || item === ''
      ? alert('Already added or Nothing to add !')
      : this.tasks.push(item);
    console.log(this.tasks);
  }
  removeTask(item) {
    let index = this.tasks.indexOf(item);
    console.warn(index);
    this.tasks.splice(index);
  }
}

bootstrapApplication(App);
