import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { TempConverterPipe } from './temp-converter.pipe';
import { PurepipePipe } from './purepipe.pipe';
import { ImpurepipePipe } from './impurepipe.pipe';
import { CustomUppercasePipe } from './custom-uppercase.pipe';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserLoginComponent } from './user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TempConverterPipe,
    PurepipePipe,
    ImpurepipePipe,
    CustomUppercasePipe,
    FilterPipe,
    AboutComponent,
    ProductComponent,
    NoPageFoundComponent,
    ContactComponent,
    HomeComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
