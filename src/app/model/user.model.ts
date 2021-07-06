export class User{
    id:number | undefined;
    name:string;
    email: string;
    password:string | undefined;
    isAdmin:boolean;
    public answer:Array<number>=[];
    constructor(name:string,email:string,role:boolean,ans:Array<number>){
        this.name=name;
        this.email=email;
        this.isAdmin=role;
        this.answer=ans;
    }
    
}