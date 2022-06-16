import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Order } from 'src/app/type/order';

@Component({
  selector: 'app-status-order',
  templateUrl: './status-order.component.html',
  styleUrls: ['./status-order.component.css']
})
export class StatusOrderComponent implements OnInit {
  id:string=''
  order:any
  constructor(private activeRoute:ActivatedRoute,
    private checkoutService:CheckoutService,
    private toast:NgToastService,
    private router:Router
    ) {}

  ngOnInit(): void {
    this.getOrder()
  }
  getOrder(){
    this.id = this.activeRoute.snapshot.params['id']
    this.checkoutService.getOneOrders(this.id).subscribe(data=>{
      this.order = data
    })
  }
  onStatus(status:number){
    this.checkoutService.updateOrder(this.id,{status:status}).subscribe(()=>{
      this.toast.success({detail:`Đã đổi trạng thái thành công!`})
      this.getOrder()
      setTimeout(() => {
        this.router.navigateByUrl('/admin/orders')
      }, 1000);
    })

  }
}
