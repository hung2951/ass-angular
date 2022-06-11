import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/app/type/product';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
  product:ProductType
  id:string
  quantityCart:number
  constructor(
    private activeRoute:ActivatedRoute,
    private productService:ProductService,
    private cartService: CartService,
    private toast:NgToastService
    ) {
    this.id =''
    this.product={
      _id:'',
      name:'',
      price:0,
      sale_price:0,
      totalNumber:0,
      img:'',
      desc:'',
      category:'',
      status:true
    }
  this.quantityCart =1
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id']
     this.productService.getOneProduct(this.id).subscribe((data)=>{
      this.product = data
    })
  }
  onChange(e:any){
    this.quantityCart = e.target.value
  }
  showToast(){
    this.toast.success({detail:`Thêm vào giỏ hàng thành công`})

  }
  addToCart(){
    this.showToast()
    const addItem = {
      ...this.product,
      quantity: +this.quantityCart
    }

    this.cartService.setItem(addItem);
    this.quantityCart = 1;
  }

}
