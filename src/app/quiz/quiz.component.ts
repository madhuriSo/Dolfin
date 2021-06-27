import { Component, OnInit } from '@angular/core';
import {Question} from '../model/question.model';
import { QuestionService } from '../services/question.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questionCurrent:Question;
  count:number;
  questions:Question[];
  constructor( private qService:QuestionService) { 
    this.questions=qService.getQuestions();
    this.count=this.questions.length;
    this.questionCurrent=this.getNextQuestion();
  }

  ngOnInit(): void {
    console.log(`QuizComponent-->Questions total: ${this.count}`);
    console.log(`QuizComponent --> Questions are ${this.questions[0].question}`);
    console.log(`QuizComponent -->Question is :${this.questionCurrent.question} and options are :
                ${this.questionCurrent.options}
                `);
  
  }
  getNextQuestion():Question{

    this.questionCurrent=this.questions[this.count-1];
    console.log(`Current question is :${this.questionCurrent}`);
    return this.questionCurrent; 
  }

  checkAnswer(ans:string[]):boolean{
      if(ans===this.questionCurrent.answer){
        console.log();
        return true;
      }
      else{
        return false;
      }
  }

}
