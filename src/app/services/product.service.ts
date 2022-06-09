import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductType } from '../type/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProduct():Observable<ProductType[]>{
    return this.http.get<ProductType[]>(environment.product)
  }
  getOneProduct(id:string):Observable<ProductType>{
    return this.http.get<ProductType>(`${environment.product}/${id}`)
  }
  getProductSearch(key:string):Observable<ProductType[]>{
    return this.http.get<ProductType[]>(`${environment.search}?q=${key}`)
  }
  getProductCategory(id:string):Observable<ProductType[]>{
    return this.http.get<ProductType[]>(`${environment.product}/product_category/${id}`)
  }
}
