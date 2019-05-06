export class Connectivity
{
 
    private static url:string="http://localhost:5000/";

    private static headerDict = 
    {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    public static getUrl() : string
    {
        return this.url ;
    }

    public static getHeaders()
    {
        return this.headerDict ;
    } 

}