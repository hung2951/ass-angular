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
}
