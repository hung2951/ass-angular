import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup
  constructor(private authService: AuthService, private router:Router, private toastr:NgToastService) {
    this.signupForm = new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      email:new FormControl('',[
        Validators.required
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  ngOnInit(): void {
    console.log(this.signupForm.get('name')?.valueChanges);
  }
  onSubmit(){
    this.authService.signup(this.signupForm.value).subscribe(()=>{
      this.toastr.success({detail:"Đăng ký thành công"})
      setTimeout(() => {
        this.router.navigateByUrl('/signin')
      }, 500);
    },()=>{
      this.toastr.warning({detail:"Đăng ký thất bại"})
    })

  }
}
