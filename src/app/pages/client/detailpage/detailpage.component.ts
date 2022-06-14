import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/app/type/product';
import { formatPrice } from 'src/app/ultils/format-price/format-price';
@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
  product:ProductType
  productByCate:any
  products:ProductType[] = []
  id:string = ''
  id_cate : string = ''
  quantityCart:number
  constructor(
    private activateRoute:ActivatedRoute,
    private productService:ProductService,
    private cartService: CartService,
    private toast:NgToastService
    ) {
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
    this.getProduct()
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

  getProduct(){
    this.activateRoute.paramMap.subscribe(params=>{
      this.id = params.get('id') as string
      this.productService.getOneProduct(this.id).subscribe((data)=>{
        this.product = data
        this.id_cate = this.product.category
        this.productService.getProductCategory(this.id_cate).subscribe(data=>{
           this.productByCate = data
           this.products = this.productByCate.products.filter((item:ProductType)=>item._id!=this.product._id&&(item.status==true&&item.totalNumber>0))
        })
      })
    })

  }
}
