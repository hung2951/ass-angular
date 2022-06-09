import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { categoryType } from '../type/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {
   }
   getCategories():Observable<categoryType[]>{
     return this.http.get<categoryType[]>(environment.category)
   }
}