import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';

  num1 = 100;
  num2 = 200;
  total = 0;

  add() {
    return this.total = this.num1 + this.num2;
  }

//template

 <h2>Num1 =  {{num1}}</h2>
 <h2>Num2 = {{num2}}</h2>
 <button (click) = "add()">Show Answer</button>
 <h2 *ngIf="total>0">Total = {{total}}</h2>