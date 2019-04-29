export class AddEmp
{
    mobile:number
    name:string;
    age:number;
    pass:string;
    email:string;
    address:string;
   
    
    constructor(id,name,age,pass,email,address)
    {
        this.mobile=id;
        this.name=name;
        this.age=age;
        this.pass=pass;
        this.email=email;
        this.address=address;
    }
}