export class AddItem
{
    date:string
    pName:string;
    quantity:number;
    from:string;
    to:string;
    
    constructor(date,pName,quantity,from,to)
    {
        this.date=date;
        this.pName=pName;
        this.quantity=quantity;
        this.from=from;
        this.to=to;
    }
}


export class ContactUs
{
    name:string
    email:string;
    pNumber:number;
    msg:string; 
    
    constructor(name,email,pNumber,msg)
    {
        this.name=name;
        this.email=email;
        this.pNumber=pNumber;
        this.msg=msg;

    }
}