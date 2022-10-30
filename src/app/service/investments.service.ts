import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {

  constructor(private httpClient: HttpClient) { }


  getInvestments () {
    return this.httpClient.get('http://localhost:8084/brokerage/accounts');
  }

  getPortfolio(portfolioId:any) {
    return this.httpClient.get('http://localhost:8084/brokerage/operations/portfolio?portfolioId=' + portfolioId);
  }

  getInstrumentByFigi(figi: any){
    return this.httpClient.get('http://localhost:8084/brokerage/instrument/instrument?figi=' + figi);
  }

}
