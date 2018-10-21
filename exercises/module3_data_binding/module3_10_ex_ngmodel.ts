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
  @Input() newitem: string;

  additem(newitem:string) {
    this.items.push(newitem);

  }

  constructor() { }

  ngOnInit() {
  }

}

//template
<div>
<h2>Hi {{name}} Here are your list of things to do today:</h2>
</div>

<div>
    <label>New Item:
      <input [(ngModel)]="newitem" placeholder="Enter items" (change) = "additem(newitem)">
    </label>
</div>
  
<ul *ngIf="items.length>0">
 <li *ngFor="let i of items">{{i | uppercase }}</li>
</ul>




