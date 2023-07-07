import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { RegisterComponent } from './register/register.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ADDPRODUCTComponent } from './addproduct/addproduct.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ProductregistrationComponent } from './productregistration/productregistration.component';
import { FeebackComponent } from './feeback/feeback.component';
import { CartViewComponent } from './cart-view/cart-view.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"display",component:DisplayComponent},
  {path:"customer-profile",component:CustomerProfileComponent},
  {path:"register",component:RegisterComponent},
  {path:"addproduct",component:ADDPRODUCTComponent},
  {path:"product-view",component:ProductViewComponent},
  {path:"Customerlist",component:CustomerlistComponent},
  {path: "productregistration",component:ProductregistrationComponent},
  {path: "feedback",component:FeebackComponent},
 {path:"cart-view",component:CartViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
