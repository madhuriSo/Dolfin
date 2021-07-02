import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Question} from '../model/question.model';
import { QuestionService } from '../services/question.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Option} from '../model/answer.model';

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
  selectedOptionList:Option[]=[];
  display:boolean=false;
  answer:boolean[]=[];
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
    
    console.log(`Current question is :${this.questionCurrent.question}`);
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
  submit(){
  
  }

  checkAnswer(ans:Option[]):boolean{
      if(ans===this.questionCurrent.answer){
        console.log();
        return true;
      }
      else{
        return false;
      }
  }
  changeSelection(){
    this.selectedOptionList = this.questionCurrent.options.
                              filter((value, index) => {
                              return value.isChecked
                              });
     this.selectedOptionList.forEach(val=>console.log(val.option)) ;                        
                            
  }
  displayComponent(){

  }

}
