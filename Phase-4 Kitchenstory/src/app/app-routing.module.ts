import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {"path":"productList",component:ProductlistComponent},
  {"path":"dashboard",component:DashboardComponent},
  {"path":"payment",component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
