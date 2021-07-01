export class Option{
    id:number;
    option:string;
    isChecked:boolean;

    constructor(id:number,label:string,isCheck:boolean){
        this.id=id;
        this.option=label;
        this.isChecked=isCheck;
    }
}