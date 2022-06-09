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
      this.toastr.success({detail:'Đăng nhập thành công'});
      localStorage.setItem('user',JSON.stringify(data))

      setTimeout(() => {
        this.router.navigateByUrl('/')
      }, 1000);


    },()=>{
      this.toastr.error({detail:"Tài khoản hoặc mật khẩu không chính xác"})
    })
  }
}
