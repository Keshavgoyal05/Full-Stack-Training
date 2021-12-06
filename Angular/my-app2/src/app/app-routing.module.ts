import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthguardService } from './authguard.service';
import { CartComponent } from './cart/cart.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { UserDisplayComponent } from './user-display/user-display.component';

const routes : Routes = [
  {path : '', redirectTo : "/home", pathMatch : 'full'}, 
  {path : 'home', component : HomeComponent}, 
  {path : 'cart', component : CartComponent,canActivate:[AuthguardService]},
  {path : 'about', component : AboutComponent,canActivate:[AuthguardService]}, 
  {path : 'contact', component : ContactComponent,canActivate:[AuthguardService]}, 
  {path : 'userdisplay', component : UserDisplayComponent,canActivate:[AuthguardService]},
  {path : 'clothes', component : ClothesComponent,canActivate:[AuthguardService]},
  {path : 'login', component : LoginComponent},
  {path : '**', component : NoPageFoundComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
