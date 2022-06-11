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
  updateStatus(id:string,data:any):Observable<any>{
    return this.http.patch(`${environment.product}/${id}`,data)
  }
  createProduct(data:ProductType):Observable<ProductType>{
    return this.http.post<ProductType>(`${environment.product}`,data)
  }
  removeProduct(id:string):Observable<any>{
    return this.http.delete(`${environment.product}/${id}`)
  }
  updateProduct(id:string,data:ProductType):Observable<ProductType>{
    return this.http.patch<ProductType>(`${environment.product}/${id}`,data)
  }
}
