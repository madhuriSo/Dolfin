import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {User} from '../model/user.model';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   usersList:User[]=[];
   loginUser?:User;
   msg:string="";
  constructor( private userService:UserService,public router:Router) { 
    this.usersList=this.userService.getUsers();
  }
  ngOnInit(): void {
  }
  login(loginR:NgForm){
    let login=loginR.value;
    console.log(`username is : ${login.userEmail} and password is ${login.userPass}`);
    this.usersList.forEach( val=>
                          {             
                          if(val.email==login.userEmail&&val.password==login.userPass)
                          this.loginUser=val;
                          });
    if(this.loginUser!=undefined) {
      this.router.navigate(["quiz"]);  
    }  
    else{
      this.msg="Invalid login credentials";
    }                   
                     
                  
  }

}
