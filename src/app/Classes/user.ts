export class LoginUser
{
    mobileNo:number;
    pass:string;
    type:string;
    constructor(id,pass,type)
    {
        this.mobileNo=id;
        this.pass=pass;
        this.type=type;
    }
}

export class User
{
    name:string;
    email:string;
    mobileNo:number;
    age:number;
    address:string;
    password:string;
    
    constructor(name,emailId,mobileNo,age,address,pass)
    {

        this.name=name;
        this.email=emailId;
        this.mobileNo=mobileNo;
        this.age=age;
        this.address=address;
        this.password=pass;
    }
}