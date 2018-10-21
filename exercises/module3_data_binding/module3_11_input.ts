//Parent Component

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-todo [name]= "name" > </app-todo>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = "Alfred";
}

// Child Component

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `Hi {{name}}`,
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() name: string;
}
