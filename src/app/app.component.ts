import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Question} from './model/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dolfin';

 // api: string = "https://localhost:8090/questions";
  data = [];

  constructor(){}
  //constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.getQuestions();
  }

  getQuestions() {
    /*
    const promise = new Promise((resolve, reject) => {
      const apiURL = this.api;
      this.http
        .get<Question[]>(apiURL)
        .toPromise()
        .then((res: any) => {
          // Success
          this.data = res.map((res: any) => {
            return new Question(
              res.qId,
              res.question,
              res.options,
              res.answer,
              res.isSingleValue
            );
          });
          resolve("Complete");
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;  */
  }


}