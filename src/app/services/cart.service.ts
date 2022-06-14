import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductCart } from '../type/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
   // 1. Định nghĩa việc lắng nghe thay đổi bằng cách khởi tạo 1 Subject
  // Trong subject sẽ có phương thức bắt sự kiện thay đổi để phát hành động tiếp theo
  private storageSubject = new Subject<string>();

  watchStorage(): Observable<any> {
    return this.storageSubject.asObservable();
  }
  // Tất cả các xử lý của ls sẽ thực hiện ở đây, để kích hoạt việc lắng nghe

  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  setItem(addItem:ProductCart) {

    // 1. Lấy ra toàn bộ sp trong giỏ
    const cartItems = this.getItem();
    // 2. kiểm tra trong giỏ đã có phần tử có id giống cartItem chưa
    const existItem = cartItems.find((item: ProductCart) =>
      item._id === addItem._id
    );
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.quantity += addItem.quantity;
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    // 3. Sau khi thêm sản phẩm vào giỏ bằng phương thức setItem này
    this.storageSubject.next('');
    // thì watchStorage sẽ được phát sự kiện vào subscibe
  }
  increaseItemInCart(id:string){
     // Lấy ra toàn bộ sp trong giỏ
     const cartItems = this.getItem();
     cartItems.find((item:ProductCart)=>item._id == id).quantity++;

    localStorage.setItem('cart', JSON.stringify(cartItems));
    // Sau khi thêm sản phẩm vào giỏ bằng phương thức setItem này
    this.storageSubject.next('');
    // thì watchStorage sẽ được phát sự kiện vào subscibe
  }
  decreaseItemInCart(id:string){
    let cartItems = this.getItem();
    const existItem = cartItems.find((item:ProductCart)=>item._id == id)
    existItem.quantity--;
    if (existItem.quantity<1) {
      const confirmCartItem = confirm("Bạn có muốn xóa sản phẩm này không?")
      if (confirmCartItem) {
        cartItems = cartItems.filter((item:any) => item._id !== existItem._id);
      } else {
        existItem.quantity = 1
      }
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    // Sau khi thêm sản phẩm vào giỏ bằng phương thức setItem này
    this.storageSubject.next('');
    // thì watchStorage sẽ được phát sự kiện vào subscibe
  }
  removeItemCart(id:string){
    let cartItems = this.getItem();
    const confirm = window.confirm("Bạn có muốn xóa không")
    if (confirm) {
      cartItems = cartItems.filter((item:any)=>item._id!=id)
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    // Sau khi thêm sản phẩm vào giỏ bằng phương thức setItem này
    this.storageSubject.next('');
    // thì watchStorage sẽ được phát sự kiện vào subscibe
  }
}
