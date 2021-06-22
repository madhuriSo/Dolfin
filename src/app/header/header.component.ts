import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  today: any = Date.now();
  constructor() { }

  ngOnInit(): void {
    console.log("Date is :"+this.today)
  }

}
