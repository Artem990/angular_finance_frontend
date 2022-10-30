import { Component, OnInit } from '@angular/core';
import { InvestmentsService } from 'src/app/service/investments.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-brokerage-details',
  templateUrl: './brokerage-details.component.html',
  styleUrls: ['./brokerage-details.component.scss']
})
export class BrokerageDetailsComponent implements OnInit {
  portfolio: any;
  stocks = [] as any;
  commonValue: any;
  currency: any;
  expectedYield: any;
  portfolioId: any;
  instrument: any;
  element: any;
  

  constructor(private investmentService: InvestmentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((p:ParamMap) => {
      this.portfolioId = p.get('portfolioId');
    })

    this.investmentService.getPortfolio(this.portfolioId).subscribe(
      data => {
        console.log(data)
        this.portfolio = data;
        
        this.commonValue = 
          this.portfolio.totalAmountBonds.value
          + this.portfolio.totalAmountCurrencies.value 
          + this.portfolio.totalAmountEtfs.value
          + this.portfolio.totalAmountFutures.value
          + this.portfolio.totalAmountShares.value;
        
        this.currency = this.portfolio.totalAmountCurrencies.currency;

        this.expectedYield = this.portfolio.expectedYield;

        this.stocks = this.portfolio.positions;
      }
    )
  }

  public getColor(balance: number): string{
    return balance > 0 ? "green" : "red";
  }

  // public getInstrument (figi: any){
  //   this.investmentService.getInstrumentByFigi(figi).subscribe(
  //     data => {
  //       console.log('adata:' + data)
  //     }
  //   );
  // }

}
