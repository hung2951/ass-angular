import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductCart } from 'src/app/type/product';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  cart:ProductCart[]
  total : number = 0
  constructor(private cartService:CartService) {
    this.cart = []
   }
private storageSubject = new Subject<string>();

  watchStorage(): Observable<any> {
    return this.storageSubject.asObservable();
  }
  ngOnInit(): void {
    this.getItemCart()
  }
  getItemCart(){
    if (localStorage.getItem('cart')) {
      this.cart = this.cartService.getItem()
      this.cart.map(item=>{
        this.total += item.quantity*item.price
      })
    }
  }
  remove(id:string){
    this.cartService.removeItemCart(id)
    this.getItemCart()
  }
  increase(id:string){
    this.cartService.increaseItemInCart(id)
    this.getItemCart()
  }
  decrease(id:string){
    this.cartService.decreaseItemInCart(id)
    this.getItemCart()
  }
}
