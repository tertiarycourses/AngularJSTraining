import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
  title = 'My First Angular App';
  name = 'Alfred';
  itemlist: object;
  count = 3;

  displayCount(count) {
    this.count = count;
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe( data => {
      this.itemlist = data;
    })
  }

}

