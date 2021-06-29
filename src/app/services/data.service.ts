import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  displayMenuOption:number=1;
  constructor() { }
  
  getMenuOption():number{
    return this.displayMenuOption;  
  }
  setMenuOption(option:number):void{
    console.log(option);
    this.displayMenuOption=option;
  }
}
