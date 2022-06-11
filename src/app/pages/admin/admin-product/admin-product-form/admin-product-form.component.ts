import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { categoryType } from 'src/app/type/category';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  categories: categoryType[]
  formSubmit:FormGroup
  id:string
  constructor(
    private cateService:CategoryService,
    private router:Router,
    private toast:NgToastService,
    private productService:ProductService,
    private activateRoute: ActivatedRoute
    ) {
      this.categories= []
      this.formSubmit = new FormGroup({
        name:new FormControl('',[
          Validators.required,
          Validators.minLength(5)
        ]),
        price:new FormControl(0,[
          Validators.required
        ]),
        sale_price:new FormControl(0),
        totalNumber:new FormControl(0),
        category:new FormControl('',[
          Validators.required
        ]),
        img:new FormControl('',[
          Validators.required
        ]),
        desc:new FormControl('',[
          Validators.required
        ])
      })

      this.id = ''
     }

  ngOnInit(): void {
    // list categories
    this.getCategories()
    // edit: lấy dữ liệu vào form
    this.id = this.activateRoute.snapshot.params['id']
    if (this.id) {
      this.productService.getOneProduct(this.id).subscribe(data=>{
        this.formSubmit.patchValue({
          name:data.name,
          price:data.price,
          category:data.category,
          sale_price:data.sale_price,
          totalNumber:data.totalNumber,
          img:data.img,
          desc:data.desc
        })
      })
    }
  }
  onSubmit(){
    if (this.id!=''|| this.id != undefined) {
      return this.productService.updateProduct(this.id,this.formSubmit.value).subscribe(()=>{
        this.toast.success({detail:`Đã cập nhập ${this.formSubmit.value.name} thành công`})
        setTimeout(() => {
          this.router.navigateByUrl('/admin/product')
        }, 700);
      })
    }
      return this.productService.createProduct(this.formSubmit.value).subscribe(()=>{
      this.toast.success({detail:`Thêm ${this.formSubmit.value.name}`})
      setTimeout(() => {
        this.router.navigateByUrl('/admin/product')
      }, 700);
    },()=>{
      this.toast.error({detail:"Sản phẩm đã tồn tại"})
    })
  }

  getCategories(){
    this.cateService.getCategories().subscribe((data)=>{
      this.categories = data
    })
  }
}
