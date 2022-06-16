import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-orders-client',
  templateUrl: './orders-client.component.html',
  styleUrls: ['./orders-client.component.css']
})
export class OrdersClientComponent implements OnInit {
  formOrders:FormGroup
  orders:any
  constructor(private checkoutService:CheckoutService) {
    this.formOrders = new FormGroup({
      id:new FormControl('',[Validators.required])
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formOrders.value.id);
    this.checkoutService.getOrderDetail(this.formOrders.value.id).subscribe(data=>{
      this.orders = data
      console.log(this.orders);

    })
  }
}
