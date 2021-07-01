import { Option } from "./answer.model";

export interface IQuestion{
   qId: number,
   question: string,
   options: Option[],
   answer: Option[],
   isSingleValue:boolean   
}
export class Question implements IQuestion{
    constructor(
        public qId: number,
        public question: string,
        public options: Option[],
        public answer: Option[],
        public isSingleValue:boolean 
      ) { }
}
export interface IQuestionService{
  getQuestions():any;

}