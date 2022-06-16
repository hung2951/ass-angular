import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:any[]=[]
  count:number = 0
  constructor(private checkoutService:CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getOrders().subscribe((data)=>{
      this.orders = data.sort((a:any,b:any)=>a.status - b.status)
      this.orders.map((item,i)=>this.count =i+1 )
    })
  }

}
