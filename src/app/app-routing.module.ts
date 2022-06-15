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
import { CheckOutComponent } from './pages/client/check-out/check-out.component';
import { DetailpageComponent } from './pages/client/detailpage/detailpage.component';
import { Error404Component } from './pages/client/error404/error404.component';
import { HomepageComponent } from './pages/client/homepage/homepage.component';
import { ProductCategoryComponent } from './pages/client/product-category/product-category.component';
import { ProductSearchComponent } from './pages/client/product-search/product-search.component';
import { ProductsComponent } from './pages/client/products/products.component';
import { SuccessMessageComponent } from './pages/client/success-message/success-message.component';
import { SigninComponent } from './pages/login/signin/signin.component';
import { SignupComponent } from './pages/login/signup/signup.component';
import { PrivateRoutingGuard } from './private/private-routing.guard';

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
      {path:':id/detail',component:DetailpageComponent,
        children:[
          {path:'',component:ClientDetailCmtComponent},
          {path:'info',component:ClientDetailInfoComponent},
        ]
      },
      {path:'product',component:ProductsComponent},
      {path:'cart',component:CartpageComponent},
      {path:'c/:id',component:ProductCategoryComponent},
      {path:'search',component:ProductSearchComponent},
      {path:'checkout',component:CheckOutComponent},
      {path:'success/:id',component:SuccessMessageComponent},
    ]
  },
  {
    path:'admin',
    component:AdminLayoutComponent,
    canActivate:[PrivateRoutingGuard],
    children:[
      {
      path:'product',
        children:[
          {path:'',component:AdminProductListComponent},
          {path:'add',component:AdminProductFormComponent},
          {path:'edit/:id',component:AdminProductFormComponent},
        ]
      },
      {
        path:'category',
        children:[
          {path:'',component:AdminCategoryListComponent},
          {path:'add',component:AdminCategoryFormComponent},
          {path:':id/edit',component:AdminCategoryFormComponent},
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
  },
  {
    path:'**',
    component:Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[PrivateRoutingGuard]
})
export class AppRoutingModule { }
