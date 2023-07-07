import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { RegisterComponent } from './register/register.component';
import { Categoryviseservice } from './services/categoryviewservice';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ProductregistrationComponent } from './productregistration/productregistration.component';
import { FeebackComponent } from './feeback/feeback.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DisplayComponent,
    CustomerProfileComponent,
    RegisterComponent,
    SidebarComponent,
    ProductViewComponent,
    CustomerlistComponent,
    ProductregistrationComponent,
    FeebackComponent,
    CartViewComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [Categoryviseservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
