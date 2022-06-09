import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup
  constructor(private authService: AuthService, private router:Router, private toastr:ToastrService) {
    this.signupForm = new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl('')
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.signup(this.signupForm.value).subscribe(()=>{
      this.toastr.success("Đăng ký thành công")
      setTimeout(() => {
        this.router.navigateByUrl('/signin')
      }, 500);
    },()=>{
      this.toastr.error("Tài khoản đã tồn tại")
    })

  }
}
