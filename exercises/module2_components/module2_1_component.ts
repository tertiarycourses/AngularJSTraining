import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

// Parent component template
<app-todo></app-todo>
<app-courses></app-courses>

// Child component template
<h2>Course List</h2>

<ul>
  <li>Angular JS </li> 
  <li>React JS</li>
  <li>Vue JS</li>
</ul>




