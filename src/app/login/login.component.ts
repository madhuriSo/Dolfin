import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  login(loginR:NgForm){
    let login=loginR.value;
    console.log(`username is : ${login.userEmail} and password is ${login.userPass}`);

  }

}
