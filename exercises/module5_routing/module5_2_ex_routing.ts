//app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MessagesComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
         path: 'todo',
         component: TodoComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
     }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//app.component.html

<a routerLink = "todo">To Do</a> &nbsp; | &nbsp; <a routerLink = "courses">Courses</a>

<router-outlet></router-outlet>

//template
<div>
    <h2>List of courses:</h2>
    </div>
    <div>
        <label>New Course:
          <input [(ngModel)]="newcourse" placeholder="Enter Course" (change) = "addcourse(newcourse)">
        </label>
    </div>
      
    <ul *ngIf="courses.length>0">
     <li *ngFor="let i of courses">{{i | uppercase }}</li>
    </ul>