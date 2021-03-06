//component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name = 'Alfred';
  items = ["Buy Grocery", "Buy Lunch", "Watch Movie"];

  constructor() { }

  ngOnInit() {
  }

}

//html template
<h2>Hi {{name}}, here are your list of things to do today:</h2>
<ul>
  <li>{{items[0]}}</li> 
  <li>{{items[1]}}</li> 
  <li>{{items[2]}}</li> 
</ul>