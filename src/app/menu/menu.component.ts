import { Component, OnInit } from '@angular/core';
import { DataService} from './../services/data.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuUser :Array<string>=["Login","Take Quiz","Score"];
  menuAdmin :Array<string>=["Login","Add Questions","View Report","Take Quiz"];
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }
  viewComponent(index:number){
    console.log(`viewComponent :${index}`);
    this.dataService.setMenuOption(index);
  }

}
