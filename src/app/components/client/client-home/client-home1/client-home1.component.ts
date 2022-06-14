import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/app/type/product';

@Component({
  selector: 'app-client-home1',
  templateUrl: './client-home1.component.html',
  styleUrls: ['./client-home1.component.css']
})
export class ClientHome1Component implements OnInit {
  products : ProductType[]
  constructor(private productService:ProductService) {
    this.products = []
   }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data)=>{
      this.products = data.filter(item=>item.status==true)
    })
  }

}
