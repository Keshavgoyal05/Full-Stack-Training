import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClothesComponent } from './clothes/clothes.component';
import { CartComponent } from './cart/cart.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { CartFilterPipe } from './cart-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UserDisplayComponent,
    NoPageFoundComponent,
    LoginComponent,
    FilterPipe,
    ClothesComponent,
    CartComponent,
    ProductFilterPipe,
    CartFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
