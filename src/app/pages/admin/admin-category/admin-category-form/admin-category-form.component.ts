import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
  formSubmit:FormGroup
  constructor(private cateService:CategoryService,private router:Router,private toast:NgToastService) {
    this.formSubmit = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ])
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.cateService.createCate(this.formSubmit.value).subscribe(()=>{
      this.toast.success({detail:"Thêm thành công"})
      setTimeout(() => {
      this.router.navigateByUrl('/admin/category')

      }, 700);
    },()=>{
      this.toast.error({detail:"Lỗi",summary:"Danh mục tồn tại"})
    })

  }
}
