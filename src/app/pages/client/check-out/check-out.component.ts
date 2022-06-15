import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  formCheckout: FormGroup
  cart:any[] = []
  total:number = 0
  info:any
  idOrder : string=''
  constructor(
    private checkoutService: CheckoutService,
    private cartService:CartService,
    private toast:NgToastService,
    private router :Router,
    ) {
    this.formCheckout = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(2)]),
      email:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required,Validators.maxLength(11)]),
      address:new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
    this.cart = this.cartService.getItem()
    this.cart.map(item=>this.total += item.quantity*item.price)
  }
  onSubmit(){
    this.checkoutService.createOrders({...this.formCheckout.value,money:this.total}).subscribe(order=>{
      this.idOrder = order._id
      this.cart.map(item=>{
        item = {...item,IdOrder:order._id}
        const data = {
          name:item.name,
          price:item.price,
          sale_price:item.sale_price,
          quantity:item.quantity,
          img:item.img,
          idProduct:item.idProduct,
          idOrder:order._id,
          desc:item.desc
        }
        this.checkoutService.createOrderDetail(data).subscribe(()=>{
            this.cartService.removeCart()
            setTimeout(() => {
              this.toast.success({detail:"Đặt hàng thành công"})
              this.router.navigateByUrl(`/success/${this.idOrder}`)
            }, 500);
        })
      })
    })
  }
}
