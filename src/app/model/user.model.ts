export class User{
    id:number | undefined;
    name:string;
    email: string;
    password:string | undefined;
    isAdmin:boolean;
    constructor(n:string,e:string,role:boolean){
        this.name=n;
        this.email=e;
        this.isAdmin=role;
    }
}