export class AddItem
{
    date:string
    name:string;
    quantity:number;
    from:string;
    to:string;
    constructor(date,name,quantity,from,to)
    {
        this.date=date;
        this.name=name;
        this.quantity=quantity;
        this.from=from;
        this.to=to;
    }
}