import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { CategoryService } from 'src/app/services/category.service';
import { categoryType } from 'src/app/type/category';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  categories:categoryType[]
  totalCategory: number =0
  constructor(private cateService : CategoryService, private toast : NgToastService) {
    this.categories = []
  }

  ngOnInit(): void {
    this.onGetCategory()
  }
  onStatus(id:string){
    this.categories.map(items=>{
      if (items._id==id) {
        items.status = !items.status
        this.cateService.updateCategory(id,{status:items.status}).subscribe(()=>{
          this.toast.success({detail:`Đã đổi trạng thái thành ${items.status==true?'"Actived"':'"Disable"'}`})
        })
      }
    })
  }
  onGetCategory(){
    this.cateService.getCategories().subscribe((data)=>{
      this.categories = data
      this.categories.map((item,count)=>this.totalCategory = count+1)
    })
  }
  onRemove(id:string){
    const confirmRemove = confirm("Bạn có muốn xóa không?")
    if (confirmRemove) {
      this.cateService.removeCate(id).subscribe(()=>{
        this.onGetCategory()
        this.categories.find(item=>{
          if (item._id==id) {
            this.toast.success({detail:`Đã xóa "${item.name}"`})
          }
        })

      })
    }
  }
}
