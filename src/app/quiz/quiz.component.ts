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
  count:number=1;
  i:number=0;
  questions:Question[];
  display:boolean=false;
  constructor( private qService:QuestionService) { 
    this.questions=qService.getQuestions();
    this.count=this.questions.length;
    this.questionCurrent=this.getNextQuestion();
  }

  ngOnInit(): void {
  
  }
  getNextQuestion():Question{
    if(this.count>0){
      
      this.questionCurrent=this.questions[this.i++];
  
      this.count--;
    }else{
      this.count=this.questions.length;
      this.i=0;
      this.questionCurrent=this.questions[this.i++];

    }
    
    console.log(`Current question is :${this.questionCurrent}`);
    return this.questionCurrent; 
  }
  getPreviousQuestion(){
    console.log(`this.i ${this.i} , this.count : ${this.count}`);
    console.log(` i+count : ${this.i+this.count}`);
    if(this.count>0){
      this.questionCurrent=this.questions[this.count];
      this.i--;
      this.count--;
    }else{
      this.count=this.questions.length-1;
      this.i=0;
      this.questionCurrent=this.questions[this.i];
    }

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
  displayComponent(){

  }

}
