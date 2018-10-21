import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = ["Angular JS", "React JS", "Vue JS"];

  @Input() count: number;
  @Output() newcount = new EventEmitter();

  addcourse(newcourse: string) {
    this.courses.push(newcourse);

  }

  increment() {
    this.count++;
  }

  reset() {
    this.count = this.courses.length;
    this.newcount.emit(this.count);
  }


  constructor() { }

  ngOnInit() {
  }

}
