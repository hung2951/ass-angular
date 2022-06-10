import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm :FormGroup
  constructor(private authService: AuthService,private router:Router,private toastr:NgToastService) {
    this.signinForm = new FormGroup({
      email: new FormControl('',[
        Validators.required,
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  ngOnInit(): void {

  }
  onSubmit(){
    this.authService.signin(this.signinForm.value).subscribe((data)=>{
      localStorage.setItem('user',JSON.stringify(data))
      if (this.getLocalstorage().user.status==true) {
        this.toastr.success({detail:'Đăng nhập thành công'});
        if (this.getLocalstorage().user.role==1) {
          setTimeout(() => {
            this.router.navigateByUrl('/admin')
          }, 1000);
        } else {
          setTimeout(() => {
            this.router.navigateByUrl('/')
          }, 1000);
        }
      }else{
        this.toastr.info({detail:'Tài khoản đã bị vô hiệu quá'});
        localStorage.removeItem('user')
      }
    },
    ()=>{
      this.toastr.error({detail:"Tài khoản hoặc mật khẩu không chính xác"})
    })
  }
  getLocalstorage(){
    if (!localStorage.getItem('user')) return
    else return JSON.parse(localStorage.getItem('user') as string)
  }
}
