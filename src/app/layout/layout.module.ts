import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from '../app-routing.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PersonalAccountComponent } from './personalAccount/personal-account/personal-account.component';
import { CreditDetailsComponent } from './details-information/credit-details/credit-details.component';
import { BrokerageDetailsComponent } from './details-information/brokerage-details/brokerage-details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    MainDashboardComponent,
    PersonalAccountComponent,
    CreditDetailsComponent,
    BrokerageDetailsComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    AppRoutingModule
  ],
  exports: [
    ContentComponent
  ]
})
export class LayoutModule { }
