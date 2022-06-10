import { Component, OnInit } from '@angular/core';
import {  NgToastService } from 'ng-angular-popup';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/app/type/product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products :ProductType[]
  constructor(private productService:ProductService,private toast :NgToastService) {
    this.products = []
   }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.productService.getProduct().subscribe(data =>{
      this.products = data
    })
  }
  onStatus(id:string){
    this.products.map(items=>{
      if (id===items._id) {
        items.status = !items.status
        this.productService.updateStatus(id,{status:items.status}).subscribe(()=>{
          this.toast.success({detail:`Đã đổi trạng thái thành ${items.status==true?"Actived":"Disable"}`})
          // this.getProducts()
        })
      }
    })
  }

}
