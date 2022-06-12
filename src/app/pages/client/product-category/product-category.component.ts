import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  productsByCategory:any
  id_cate : string
  constructor(private productService:ProductService,private activateRoute:ActivatedRoute) {
    this.id_cate = ''
   }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.id_cate = this.activateRoute.snapshot.params['id']
    this.productService.getProductCategory(this.id_cate).subscribe(data=>{
      this.productsByCategory= data
      this.getProducts()
    })
  }
}
