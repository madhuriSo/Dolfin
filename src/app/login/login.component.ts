import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   //usersList=User[];

  constructor( private userService:UserService) { 
    //this.usersList=this.userService.getUsers();
  }

  ngOnInit(): void {
  }

  login(email:string,password:string){
    console.log(`username is : ${email} and password is ${password}`);

  }

}
