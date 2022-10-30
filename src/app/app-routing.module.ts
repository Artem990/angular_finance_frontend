import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';
import { BrokerageDetailsComponent } from './layout/details-information/brokerage-details/brokerage-details.component';
import { CreditDetailsComponent } from './layout/details-information/credit-details/credit-details.component';
import { PersonalAccountComponent } from './layout/personalAccount/personal-account/personal-account.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: ContentComponent,
    children: [
      {path: '', component: PersonalAccountComponent, canActivate:[AuthGuard]},
      {path: 'creditDetails/:creditId', component: CreditDetailsComponent},
      {path: 'portfolio/:portfolioId', component: BrokerageDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContentComponent, LoginComponent, CreditDetailsComponent, PersonalAccountComponent]
