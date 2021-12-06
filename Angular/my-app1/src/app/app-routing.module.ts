import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './auth-guard.service';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProductComponent } from './product/product.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes : Routes = [
  {path : '', redirectTo : "/home", pathMatch : 'full'}, 
  {path : 'home', component : HomeComponent}, 
  {path : 'about', component : AboutComponent}, 
  {path : 'products', component : ProductComponent, canActivate:[AuthGuardService]},
  {path : 'products1/:id', component : ProductComponent}, 
  {path : 'contact', component : ContactComponent}, 
  {path : 'userlogin', component : UserLoginComponent, canActivate:[AuthGuardService]},
  {path : '**', component : NoPageFoundComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
