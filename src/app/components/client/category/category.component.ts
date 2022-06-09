import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { categoryType } from 'src/app/type/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: categoryType[]
  constructor(private categoryService: CategoryService) {
    this.categories = []
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
    })
  }

}
