import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm :FormGroup
  constructor(private authService: AuthService,private router:Router,private toastr:ToastrService) {
    this.signinForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {

  }
  onSubmit(){
    this.authService.signin(this.signinForm.value).subscribe((data)=>{
      this.toastr.success('Đăng nhập thành công');
      localStorage.setItem('user',JSON.stringify(data))

      setTimeout(() => {
        this.router.navigateByUrl('/')
      }, 1000);


    },()=>{
      this.toastr.error("Tài khoản hoặc mật khẩu không chính xác")
    })
  }
}
