export class Order 
{
    order_id: number;
    date: string
    order_name: string;
    quantity: number;
    from: string;
    to: string;
    mobileNo: number;
    approval: string;

    constructor(date : string  , pName : string  , quantity : number  , from : string  , to : string , mobileNo : number ) 
    {
        this.date = date;
        this.order_name = pName;
        this.quantity = quantity;
        this.from = from;
        this.to = to;
        this.mobileNo = mobileNo;
        this.order_id = 0;
        this.approval = "Pending"
    }
}


export class ContactUs 
{
    name: string
    email: string;
    pNumber: number;
    msg: string;

    constructor(name : string  , email : string  , pNumber : number , msg : string ) 
    {
        this.name = name;
        this.email = email;
        this.pNumber = pNumber;
        this.msg = msg;

    }
}