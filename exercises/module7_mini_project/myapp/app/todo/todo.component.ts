import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  items = ["Buy Grocery", "Buy Lunch", "Watch Movie"];

  //items = [];

  @Input()  name: string;
  @Output() newitem = new EventEmitter();


  additem(newitem: string) {
    this.items.push(newitem);
    this.newitem.emit(newitem);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
