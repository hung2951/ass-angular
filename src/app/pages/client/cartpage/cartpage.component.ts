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
  total : number
  constructor(private cartService:CartService) {
    this.cart = []
    this.total = 0

   }
private storageSubject = new Subject<string>();

  watchStorage(): Observable<any> {
    return this.storageSubject.asObservable();
  }
  ngOnInit(): void {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart') || '[]')
      this.cart.map(item=>{
        this.total += item.quantity*item.price
      })
    }

  }
  removeCartItem(id:string){
    const confirm = window.confirm("Bạn có muốn xóa không")
    if (confirm) {
      this.cart = this.cart.filter(item=>item._id!=id)
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
