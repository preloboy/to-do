import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { findIndex } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <input type='text' placeholder='Type here ...' #task /> <br/><br/>
    <button (click)="addTask(task.value)">Add</button><br><br>
    <ol *ngFor="let task of tasks">
    <li>{{task}} <button (click)="removeTask(task)">Remove</button></li>
    </ol>
  `,
})
export class App {
  name = 'Angular';
  color = 'ff';
  display = false;
  tasks = [];
  addTask(item) {
    // console.warn(item);
    this.tasks.includes(item) || item==="" ? alert("Already added or Nothing to add !") : this.tasks.push(item);
    console.log(this.tasks);
  }
  removeTask(item) {
    let index = this.tasks.indexOf(item);
    console.warn(index);
    this.tasks.splice(index);
  }
}

bootstrapApplication(App);
