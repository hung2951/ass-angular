import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { categoryType } from 'src/app/type/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: categoryType[]
  constructor(
    private categoryService: CategoryService,
    private router:Router,
    private route:ActivatedRoute
    ){
    this.categories = []
  }

  ngOnInit(): void {
    this.getCategory()
  }
 getCategory(){
  this.categoryService.getCategories().subscribe(data=>{
    this.categories = data.filter(item=>item.status==true)
  })
 }
}
