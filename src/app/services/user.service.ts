import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers():User[]{
      var users:Array<User>=[
        {  id:1,name:"Madhuri",email:"madhuri.padule@gmail.com",password:"123",isAdmin:true,answer:[] },
        {  id:2,name:"Ovee",email:"ovee.solat@gmail.com",password:"abc",isAdmin:false,answer:[] },
        {  id:3,name:"Swara",email:"swara.padule@gmail.com",password:"1123",isAdmin:false,answer:[] },
        {  id:4,name:"Ahilya",email:"ahilya.umesh@gmail.com",password:"absc",isAdmin:false,answer:[] },
        {  id:5,name:"Nidhish",email:"nidhish.patil@gmail.com",password:"12s3",isAdmin:false,answer:[] },
        {  id:6,name:"Mauli",email:"mauli.chavan@gmail.com",password:"23abc",isAdmin:false,answer:[] }
      ] ;
      return users;
  }
}
