import { Injectable } from '@angular/core';
import { Question } from '../model/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
 
  constructor() { }

  getQuestions(){
      var questions:Question[]=[
        {qId:1,question:"What is the fastest thing in the world?",
        options:["Air","Rocket","Electorn","Mind"],
        answer:["Mind"],
        isSingleValue:true
        }
      ];
      console.log(`QuestionService -->getQuestions-->questions ${questions}`)
      return questions;
  }
  
}
