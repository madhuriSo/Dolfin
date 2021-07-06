import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Question} from '../model/question.model';
import { QuestionService } from '../services/question.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Option} from '../model/answer.model';
import { User } from '../model/user.model';

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
  viewReport:boolean=false;
  answer:boolean[]=[];
  user: User;
  points:number=0;
  constructor( private qService:QuestionService) { 
    this.questions=qService.getQuestions();
    this.count=this.questions.length;
    this.questionCurrent=this.getNextQuestion();
    this.user=new User("Test","test@gmail.com",false,[]);
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
    
   //console.log(`Current question is :${this.questionCurrent.question}`);
    return this.questionCurrent; 
  }
  getPreviousQuestion(){
  // console.log(`this.i ${this.i} , this.count : ${this.count}`);
   // console.log(` i+count : ${this.i+this.count}`);
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
    if(this.questionCurrent.isSingleValue){
      this.checkAnswer();
    }else{
      this.checkAnswerMultiple()
    }
    
    this.getNextQuestion();
   
  }

  checkAnswerMultiple(){
    if(this.questionCurrent.answer.length!=this.selectedOptionList.length){
      this.user.answer[this.questionCurrent.qId]=0;
      console.log("Incorrect answer");
    }
    else{
    let value=this.questionCurrent.answer.length;
    let check:number=0;
    let i:number=0;
    //console.log("----------checkAnswerMultiple----------")
    this.selectedOptionList.forEach(item=>{
     // console.log(`selected Option List id: ${item.id} , i= ${i}`);
    
      this.questionCurrent.answer.forEach(val=>{
        if(val.id==item.id){
          check++;
          // Increment _check number for every match and check if all selected 
          // options has match
          //console.log(` val id: ${val.id}, item id: ${item.id}`)
        }
       
       // console.log(`questionCurrent Ans id : ${val.id}`);
      });
      i++;
      
    });
  //  console.log(` Check length : ${check}`);
  //  console.log(` selection length :${this.selectedOptionList.length}`);

    if(check==this.selectedOptionList.length){
      this.user.answer[this.questionCurrent.qId]=this.questionCurrent.points;
      console.log("correct answer");
    }else{
      this.user.answer[this.questionCurrent.qId]=0;
      console.log("Incorrect answer");
    }
  }
    
  }
  checkAnswer(){ 
    
    console.log("----------checkAnswer Single Value----------")
    // If selection count is more than 1 , incorrect answer  
    if(this.selectedOptionList.length>1){
      this.user.answer[this.questionCurrent.qId]=0;  
    //  console.log("Incorrect answer");
    }else{
        this.questionCurrent.answer.forEach(val=>{
          this.selectedOptionList.forEach(value=>{
            if(val.id==value.id){
              this.user.answer[this.questionCurrent.qId]=this.questionCurrent.points;
              console.log("Correct Answer");
            }
            else{
              this.user.answer[this.questionCurrent.qId]=0;
              console.log("Incorrect answer");
            }
          })
        });
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
  checkReport(){
    if(this.user.answer.length>0){
      this.points=this.user.answer.reduce((a,b)=>{return a+b;});
    }else{
      this.points=0;
    }
    this.user.answer.forEach(val=>console.log(val));

  }

}
