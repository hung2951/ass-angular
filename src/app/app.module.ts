import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { SigninComponent } from './pages/login/signin/signin.component';
import { SignupComponent } from './pages/login/signup/signup.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminAuthListComponent } from './pages/admin/admin-auth/admin-auth-list/admin-auth-list.component';
import { AdminLayoutNavbarComponent } from './components/admin/admin-layouts/admin-layout-navbar/admin-layout-navbar.component';
import { HomepageComponent } from './pages/client/homepage/homepage.component';
import { DetailpageComponent } from './pages/client/detailpage/detailpage.component';
import { CartpageComponent } from './pages/client/cartpage/cartpage.component';
import { CategorypageComponent } from './pages/client/categorypage/categorypage.component';
import { ClientLayoutsNavbarComponent } from './components/client/client-layouts/client-layouts-navbar/client-layouts-navbar.component';
import { ClientFormSearchComponent } from './components/client/client-form-search/client-form-search.component';
import { ClientHeroComponent } from './components/client/client-hero/client-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    AdminProductListComponent,
    AdminProductFormComponent,
    SigninComponent,
    SignupComponent,
    AdminCategoryListComponent,
    AdminCategoryFormComponent,
    AdminAuthListComponent,
    AdminLayoutNavbarComponent,
    HomepageComponent,
    DetailpageComponent,
    CartpageComponent,
    CategorypageComponent,
    ClientLayoutsNavbarComponent,
    ClientFormSearchComponent,
    ClientHeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
