export class AddEmp
{
    mobileNo:number
    name:string;
    age:number;
    password:string;
    email:string;
    address:string;
   
    
    constructor(id,name,age,password,email,address)
    {
        this.mobileNo=id;
        this.name=name;
        this.age=age;
        this.password=password;
        this.email=email;
        this.address=address;
    }
}