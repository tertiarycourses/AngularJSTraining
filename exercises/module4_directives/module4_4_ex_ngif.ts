import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name = 'Alfred';
  items = ["Buy Grocery", "Buy Lunch", "Watch Movie"];
  //items = [];

  constructor() { }

  ngOnInit() {
  }

}

//template
<ul *ngIf="items.length>0">
 <li *ngFor="let i of items">{{i}}</li>
</ul>
