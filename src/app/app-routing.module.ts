import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { TollgateComponent } from './tollgate/tollgate.component';

const routes: Routes = [
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'payments', component:PaymentsComponent},
{path:'home', component:HomeComponent},
{path:'pricelist', component:PricelistComponent},
{path:'tollgate', component:TollgateComponent},
{ path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent,ContactComponent,PaymentsComponent,HomeComponent,PricelistComponent,TollgateComponent]