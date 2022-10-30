import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditDetailsComponent } from './credit-details/credit-details.component';
import { BrokerageDetailsComponent } from './brokerage-details/brokerage-details.component';



@NgModule({
  declarations: [
    CreditDetailsComponent,
    BrokerageDetailsComponent
  ],
  imports: [
    CommonModule,
    CreditDetailsComponent
  ],
  exports: [
    CreditDetailsComponent,
    BrokerageDetailsComponent
  ]
})
export class DetailsInformationModule { }
