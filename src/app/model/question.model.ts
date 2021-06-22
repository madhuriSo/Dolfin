export class Question{
    constructor(
        public qId: number,
        public question: string,
        public options: string[],
        public answer: string[],
        public isSingleValue:boolean 
      ) { }
}