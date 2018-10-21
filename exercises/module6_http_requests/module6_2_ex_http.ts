//app.modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HttpClientModule } from '@angular/common/http';


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
    HttpClientModule,
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

////app.component.app
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
  title = 'My First Angular App';
  name = 'Alfred';
  itemlist: object;
  count = 3;

  displayCount(count) {
    this.count = count;
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe( data => {
      this.itemlist = data;
    })
  }

}

//template
<h1>Course List</h1>
<ul>
  <li *ngFor="let i of courselist">{{i.item}}</li>
</ul>