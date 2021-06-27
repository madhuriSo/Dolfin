import { Injectable } from '@angular/core';
import { IQuestionService, Question } from '../model/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService implements IQuestionService {
 
  count:number=0;
  constructor() { }

  getQuestions():any{
      var questions:Question[]=[
        { 
          qId:1,
          question:"What is the fastest thing in the world?",
          options:["Air","Rocket","Electorn","Mind"],
          answer:["Mind"],
          isSingleValue:true
        },
        { 
          qId:2,
          question:"Who was the first prime minister of India?",
          options:["Atal Bihari wajapeyi","Pandit Neharu","Indira Gandhi","Mahatma Gandhi"],
          answer:["Pandit Neharu"],
          isSingleValue:true
        },
        { 
          qId:3,
          question:"Who was the guru of Vivekanand?",
          options:["Babaji","Ram-krishna","Lahari Mahasya","Gautam Buddha"],
          answer:["Ram-krishna"],
          isSingleValue:true
        },
        { 
          qId:4,
          question:"Which one is national Bird of India",
          options:["Peacock","Sparrow","Parrot","Crow"],
          answer:["Peacock"],
          isSingleValue:true
        },
        { 
          qId:5,
          question:"Is Bermuda Triangle real?",
          options:["True","False"],
          answer:["True"],
          isSingleValue:true
        },
        { 
          qId:6,
          question:"How many teeths grown-up person has?",
          options:["29","28","30","32"],
          answer:["32"],
          isSingleValue:true
        }
      ];
      console.log(`QuestionService -->getQuestions-->questions ${questions}`)
      return questions;
  }
  
}
