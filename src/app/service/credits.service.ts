import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CreditsService {
  token: any;

  constructor(private httpClient: HttpClient) { }

  getCredits () {
    this.token = localStorage.getItem('token');
    console.log('token: ' + this.token);
    return this.httpClient.get('http://localhost:8080/loans/getLoan?user=40dfe70a-7931-11ec-90d6-0242ac120003', 
    { headers: {"Authorization" : `Bearer ` + this.token} });
  }

  getCreditDetails(creditId:any) {
    return this.httpClient.get('http://localhost:8080/loans/getLoanDetails?creditId=' + creditId,
    { headers: {"Authorization" : `Bearer ` + this.token} }
    );
  }

}
