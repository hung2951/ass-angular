import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { Auth } from 'src/app/type/auth';

@Component({
  selector: 'app-admin-auth-list',
  templateUrl: './admin-auth-list.component.html',
  styleUrls: ['./admin-auth-list.component.css']
})
export class AdminAuthListComponent implements OnInit {
  users: Auth[]
  constructor(private authService:AuthService,private toast:NgToastService) {
    this.users = []
  }
  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    this.authService.getUser().subscribe(data=>{
      this.users = data
    })
}
  onStatus(id:string){
    this.users.map(items=>{
      if (id===items._id) {
        items.status = !items.status
        this.authService.updateUser(id,{status:items.status}).subscribe(()=>{
          this.toast.success({detail:`Đã đổi trạng thái thành ${items.status==true?'"Actived"':'"Disable"'}`})
        })
      }
    })
  }

}
