import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Auth } from 'src/app/type/auth';

@Component({
  selector: 'app-admin-auth-list',
  templateUrl: './admin-auth-list.component.html',
  styleUrls: ['./admin-auth-list.component.css']
})
export class AdminAuthListComponent implements OnInit {
  users: Auth[]
  constructor(private authService:AuthService) {
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

      }
    })
  }

}
