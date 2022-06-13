import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductCart } from 'src/app/type/product';

@Component({
  selector: 'app-client-layout-header-cart',
  templateUrl: './client-layout-header-cart.component.html',
  styleUrls: ['./client-layout-header-cart.component.css']
})
export class ClientLayoutHeaderCartComponent implements OnInit {
  cartItems: ProductCart[];
  cartItemQuantity: number = 0;
  total:number
  constructor(private cartService:CartService) {
    this.cartItems = [];
    this.total = 0
  }

  ngOnInit(): void {
    this.onSetCart();
    // Khi setItem được chạy, thì next('') cũng được chạy -> có thể subscribe được
    this.cartService.watchStorage().subscribe(data => {
      this.onSetCart();
    })
  }
  onSetCart() {
    this.cartItems = this.cartService.getItem();
    this.cartItemQuantity = this.cartItems.reduce((a, b) => a + b.quantity, 0);
    this.cartItems.map(item=>{
      this.total += item.quantity*item.price
    })



  }
}
