import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailCmtComponent } from './components/client/client-detail/client-detail-cmt/client-detail-cmt.component';
import { ClientDetailInfoComponent } from './components/client/client-detail/client-detail-info/client-detail-info.component';
import { ClientHome1Component } from './components/client/client-home/client-home1/client-home1.component';
import { ClientHome2Component } from './components/client/client-home/client-home2/client-home2.component';
import { ClientHome3Component } from './components/client/client-home/client-home3/client-home3.component';
import { ClientHome4Component } from './components/client/client-home/client-home4/client-home4.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminAuthListComponent } from './pages/admin/admin-auth/admin-auth-list/admin-auth-list.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { CartpageComponent } from './pages/client/cartpage/cartpage.component';
import { CategorypageComponent } from './pages/client/categorypage/categorypage.component';
import { DetailpageComponent } from './pages/client/detailpage/detailpage.component';
import { HomepageComponent } from './pages/client/homepage/homepage.component';
import { SigninComponent } from './pages/login/signin/signin.component';
import { SignupComponent } from './pages/login/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:ClientLayoutComponent,
    children:[
      {
        path:'',
        component:HomepageComponent,
        children:[
          {path:'',component:ClientHome1Component},
          {path:'h2',component:ClientHome2Component},
          {path:'h3',component:ClientHome3Component},
          {path:'h4',component:ClientHome4Component},
        ]
      },
      {path:'detail',component:DetailpageComponent,
        children:[
          {path:'',component:ClientDetailCmtComponent},
          {path:'info',component:ClientDetailInfoComponent},
        ]
      },
      {path:'cart',component:CartpageComponent},
      {path:'c',component:CategorypageComponent},
    ]
  },
  {
    path:'admin',
    component:AdminLayoutComponent,
    children:[
      {
      path:'product',
        children:[
          {path:'',component:AdminProductListComponent},
          {path:'add',component:AdminProductFormComponent}
        ]
      },
      {
        path:'category',
        children:[
          {path:'',component:AdminCategoryListComponent},
          {path:'add',component:AdminCategoryFormComponent},
        ]
      },
      {
        path:'users',component:AdminAuthListComponent
      }
   ]
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
