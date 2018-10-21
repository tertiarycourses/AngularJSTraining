//todo component
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  items = ["Buy Grocery", "Buy Lunch", "Watch Movie"];
  //items = [];

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}

//parrent template
<app-todo [name]="name" [newthing]="newthing"></app-todo>


//child template template
<div>
<h2>Hi {{name}} Here are your list of things to do today:</h2>
</div>


