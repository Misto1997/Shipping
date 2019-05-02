import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Order } from 'src/app/Classes/usertab';
import { OrderDetailService } from 'src/app/Services/order-detail.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  constructor(private os:OrderDetailService) { }
  orders : Order[] = [] ;

  ngOnInit()
  {
    this.showOrders();
  }


  showOrders()
  {
    this.os.getOrders()
            .subscribe((response:Response)=>
                                            {                                      
                                              for(var i=0 ; i< response["Tables"].length ; i++)
                                              {
                                                //response["Tables"][i]["mobileNo"] =parseInt(response["Tables"][i]["mobileNo"]);
                                                //response["Tables"][i]["order_id"] =parseInt(response["Tables"][i]["order_id"]);
                                                //response["Tables"][i]["quantity"] =parseInt(response["Tables"][i]["quantity"]);
                                                //console.log( response["Tables"][i]); 
                                                this.orders[i] = response["Tables"][i] ; 
                                              }
                                              //console.log(this.orders);
                                              
                                            }

                      );    
  }
}
