import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductFormComponent } from './pages/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin-product/admin-product-list/admin-product-list.component';
import { SigninComponent } from './pages/login/signin/signin.component';
import { SignupComponent } from './pages/login/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:ClientLayoutComponent
  },
  {
    path:'admin',
    component:AdminLayoutComponent,
    children:[{
      path:'product',
      children:[{
        path:'',
        component:AdminProductListComponent
      },
      {
        path:'add',
        component:AdminProductFormComponent
      }
    ]
    }]
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
