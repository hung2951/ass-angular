import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
  formSubmit:FormGroup
  id:string=''
  constructor(
    private cateService:CategoryService,
    private router:Router,
    private toast:NgToastService,
    private activateRoute: ActivatedRoute
    ) {
    this.formSubmit = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ])
    })
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    if (this.id) {
      this.cateService.getOneCategories(this.id).subscribe(data=>{
        this.formSubmit.patchValue({
          name:data.name,
          status:data.status
        })
      })
    }
  }
  onSubmit(){
    if (this.id != undefined) {
      return this.cateService.updateCategory(this.id,this.formSubmit.value).subscribe(()=>{
        this.toast.success({detail:`Sửa "${this.formSubmit.value.name}" thành công`})
        setTimeout(() => {
          this.router.navigateByUrl('/admin/category')
          }, 700);
      })
    }
    return this.cateService.createCate(this.formSubmit.value).subscribe(()=>{
      this.toast.success({detail:`Thêm "${this.formSubmit.value.name}" thành công`})
      setTimeout(() => {
      this.router.navigateByUrl('/admin/category')
      }, 700);
    },()=>{
      this.toast.error({detail:"Lỗi",summary:"Danh mục tồn tại"})
    })

  }
}
