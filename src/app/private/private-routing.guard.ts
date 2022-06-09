import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {  NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivateRoutingGuard implements CanActivate {
  constructor(private router:Router, private toastr:NgToastService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.getLocalstorage()) {
      if (this.getLocalstorage().user.role == 1) {
        return true
      }
      this.toastr.error({detail:"Lỗi",summary:'Bạn không có quyền truy cập'});
      setTimeout(() => {
        this.router.navigateByUrl('/signin')
      }, 500);
      return false
    }
    this.toastr.error({detail:"Lỗi",summary:'Bạn không có quyền truy cập'});
      setTimeout(() => {
        this.router.navigateByUrl('/signin')
      }, 500);
    return false
  }
  getLocalstorage(){
    if (!localStorage.getItem('user')) return
    else return JSON.parse(localStorage.getItem('user') as string)
  }
}
