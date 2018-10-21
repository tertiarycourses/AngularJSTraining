// component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
 
  clickMe() { 
    alert("How are you?");
 }
}

//template
<button (click)="clickMe()">Click Me</button>


