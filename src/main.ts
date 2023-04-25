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
    <div class="container my-3"> 
      <label for="exampleFormControlTextarea1" class="form-label"> <h1>{{name}}</h1></label>
      <textarea #task [(ngModel)]="preview" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type here ..."></textarea>
    </div>
    <div class="container">
      <button (click)="addTask(task.value)" class="btn btn-primary mb-3 mx-1">Add</button>
    </div>
    <div class="container">
      <ul *ngFor="let task of tasks" class="list-group d-flex">
        <li class="list-group-item d-flex justify-content-between align-items-center">{{task}}
        <button class="btn btn-primary m-0 py-0" (click)="removeTask(task)">Remove</button>
        </li>
      </ul>
    </div>
  `,
})
export class App {
  preview: string;
  name = 'To-Do';
  color = 'ff';
  display = false;
  tasks = ['To-do'];
  addTask(item) {
    console.warn(item);
    this.tasks.includes(item) || item === ''
      ? alert('Already added or Nothing to add !')
      : this.tasks.push(item);
    // console.log(this.tasks);
  }
  removeTask(item) {
    let index = this.tasks.indexOf(item);
    console.warn(index);
    this.tasks.splice(index,1);
  }
}

bootstrapApplication(App);
