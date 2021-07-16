import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Question} from './model/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dolfin';
  menuAdmin :Array<string>=["Login","Add Questions","View Report","Take Quiz"];
 
  data = [];

  constructor(){}

  viewComponent(i:number) {
   console.log("Input is :"+i);
  }


}