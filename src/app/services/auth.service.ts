import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth, AuthToken } from '../type/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ) { }

  signin(data:Auth):Observable<AuthToken>{
    return this.http.post<AuthToken>(`${environment.signin}`,data)
  }
  signup(data:Auth):Observable<Auth>{
    return this.http.post<Auth>(`${environment.signup}`,data)
  }
  getUser():Observable<Auth[]>{
    return this.http.get<Auth[]>(environment.user)
  }
  updateUser(id:string,data:any):Observable<any>{
    return this.http.patch(`${environment.user}/${id}`,data)
  }
}
