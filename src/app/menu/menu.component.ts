import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuUser :Array<string>=["Login","Take Quiz","Score"];
  menuAdmin :Array<string>=["Login","Add Questions","View Report","Take Quiz"];
  constructor() { }

  ngOnInit(): void {
  }

}
