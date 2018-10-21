//Parent Component

<app-courses [count]="3"></app-courses>

//Child Component

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = ["Angular JS", "React JS", "Vue JS"];

  @Input() count: number;

  addcourse(newcourse:string) {
    this.courses.push(newcourse);

  }

  constructor() { }

  ngOnInit() {
  }

}