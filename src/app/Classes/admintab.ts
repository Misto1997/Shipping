export class Employee
{
    mobileNo:number
    name:string;
    age:number;
    password:string;
    email:string;
    address:string;
   
    constructor(id : number ,name : string ,age : number ,password : string ,email : string ,address : string )
    {
        this.mobileNo=id;
        this.name=name;
        this.age=age;
        this.password=password;
        this.email=email;
        this.address=address;
    }
}