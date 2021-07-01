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
          options:[ {
                      id:1,
                      option:"Air",
                      isChecked:false
                    },
                    {
                      id:2,
                      option:"Rocket",
                      isChecked:false
                    },
                    {
                      id:3,
                      option:"Electorn",
                      isChecked:false
                    },
                    {
                      id:4,
                      option:"Mind",
                      isChecked:false
                    }
                  ],
          answer:[{
              id:1,
              option:"Air",
              isChecked:false
              }],
          isSingleValue:true
        },
        { 
          qId:2,
          question:"Who was the first prime minister of India?",
          options:[ {
            id:1,
            option:"Atal Bihari wajapeyi",
            isChecked:false
          },
          {
            id:2,
            option:"Pandit Neharu",
            isChecked:false
          },
          {
            id:3,
            option:"Indira Gandhi",
            isChecked:false
          },
          {
            id:4,
            option:"Mahatma Gandhi",
            isChecked:false
          }
        ],
      answer:[{
          id:2,
          option:"Pandit Neharu",
          isChecked:false
          }],
          isSingleValue:true
        },
        { 
          qId:3,
          question:"Who was the guru of Vivekanand?",
          options:[ {
            id:1,
            option:"Babaji",
            isChecked:false
          },
          {
            id:2,
            option:"Ram-krishna",
            isChecked:false
          },
          {
            id:3,
            option:"Lahari Mahasya",
            isChecked:false
          },
          {
            id:4,
            option:"Gautam Buddha",
            isChecked:false
          }
        ],
      answer:[{
          id:2,
          option:"Ram-krishna",
          isChecked:false
          }],
          isSingleValue:true
        },
        { 
          qId:4,
          question:"Which one is national Bird of India",
          options:[ {
            id:1,
            option:"Peacock",
            isChecked:false
          },
          {
            id:2,
            option:"Sparrow",
            isChecked:false
          },
          {
            id:3,
            option:"Parrot",
            isChecked:false
          },
          {
            id:4,
            option:"Crow",
            isChecked:false
          }
        ],
      answer:[{
          id:1,
          option:"Peacock",
          isChecked:false
          }],
          isSingleValue:true
        },
        { 
          qId:5,
          question:"Is Bermuda Triangle real?",
          options:[ {
            id:1,
            option:"True",
            isChecked:false
          },
          {
            id:2,
            option:"False",
            isChecked:false
          }
        ],
      answer:[{
          id:1,
          option:"True",
          isChecked:false
          }],
          isSingleValue:true
        },
        { 
          qId:6,
          question:"How many teeths grown-up person has?",
          options:[ {
            id:1,
            option:"29",
            isChecked:false
          },
          {
            id:2,
            option:"28",
            isChecked:false
          },
          {
            id:3,
            option:"30",
            isChecked:false
          },
          {
            id:4,
            option:"32",
            isChecked:false
          }
        ],
      answer:[{
          id:4,
          option:"32",
          isChecked:false
          }],
          isSingleValue:true
        }
      ];
      console.log(`QuestionService -->getQuestions-->questions ${questions}`)
      return questions;
  }
  
}
