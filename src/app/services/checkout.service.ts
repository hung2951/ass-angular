import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { }

  createOrders(data:any):Observable<any>{
    return this.http.post<any>(environment.orders,data)
  }
  createOrderDetail(data:any):Observable<any>{
    return this.http.post<any>(environment.orderDetail,data)
  }
  getOrders():Observable<any[]>{
    return this.http.get<any[]>(environment.orders)
  }
  getOneOrders(id:string):Observable<any>{
    return this.http.get(`${environment.orders}/${id}`)
  }
  getOrderDetail(id:string):Observable<any[]>{
    return this.http.get<any[]>(`${environment.orders}/getOrder/${id}`)
  }
  updateOrder(id:string,data:any):Observable<any>{
    return this.http.patch(`${environment.orders}/${id}`,data)
  }
}
