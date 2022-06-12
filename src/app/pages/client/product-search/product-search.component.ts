import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/app/type/product';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  key:string
  products:ProductType[]
  constructor(private activateRoute: ActivatedRoute,private productServive:ProductService) {
    this.key = '',
    this.products = []
   }

  ngOnInit(): void {
    this.key = this.activateRoute.snapshot.queryParams['q']
    this.productServive.getProductSearch(this.key).subscribe(data=>{
      this.products = data.filter(item=>item.status==true)
      console.log(this.products);

    })

  }

}
