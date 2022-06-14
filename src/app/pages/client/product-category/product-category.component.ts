import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/app/type/product';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  productsByCategory:any
  products:ProductType[]=[]
  id_cate : string
  constructor(private productService:ProductService,private activateRoute:ActivatedRoute) {
    this.id_cate = ''
   }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.activateRoute.paramMap.subscribe(params=>{
      this.id_cate = params.get('id') as string
      if (this.id_cate) {
        this.productService.getProductCategory(this.id_cate).subscribe(data=>{
          this.productsByCategory = data
          this.products = this.productsByCategory.products.filter((item:any)=>item.status==true)
        })
      }
    })

  }
}
