export interface IQuestion{
   qId: number,
   question: string,
   options: string[],
   answer: string[],
   isSingleValue:boolean   
}
export class Question implements IQuestion{
    constructor(
        public qId: number,
        public question: string,
        public options: string[],
        public answer: string[],
        public isSingleValue:boolean 
      ) { }
}
export interface IQuestionService{
  getQuestions():any;

}