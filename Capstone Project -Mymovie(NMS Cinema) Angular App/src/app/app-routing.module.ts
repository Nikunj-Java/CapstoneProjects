import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PaymentComponent } from './payment/payment.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [

  ///path to redirect
{"path":"home",component:HomeComponent},
{"path":"aboutus",component:AboutusComponent},
{"path":"contactus",component:ContactusComponent},
{"path":"movie",component:MoviesComponent},
{"path":"details",component:DetailsComponent},
{"path":"payment",component:PaymentComponent},
{"path":"ticket",component:TicketComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
