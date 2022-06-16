import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order:any=[]
  id:string = ''
  constructor(private checkoutService:CheckoutService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id']
    if (this.id!='') {
      this.checkoutService.getOrderDetail(this.id).subscribe((data)=>{
        this.order = data
      })
    }
  }

}
