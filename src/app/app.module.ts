import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductListComponent } from './pages/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './pages/admin-product/admin-product-form/admin-product-form.component';
import { ClientProductFormComponent } from './pages/client-product/client-product-form/client-product-form.component';
import { SigninComponent } from './pages/login/signin/signin.component';
import { SignupComponent } from './pages/login/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    AdminProductListComponent,
    AdminProductFormComponent,
    ClientProductFormComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
