import { Component, OnInit } from '@angular/core';
import { CreditsService } from 'src/app/service/credits.service';
import { InvestmentsService } from 'src/app/service/investments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  creditList = [] as any;
  investmentList = [] as any;

  constructor(private creditService: CreditsService, private investmentService: InvestmentsService, private router: Router) { }

  ngOnInit(): void {
    this.creditService.getCredits().subscribe(
      data => {
        this.creditList = data;
      }
    );
    this.investmentService.getInvestments().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.investmentList = data;
      }
    );
  }

  creditDetailsSubmit(creditId:any){
    console.log('creditId: ' + creditId);
    this.router.navigate(['creditDetails/' + creditId]);
  }

  portfolioSubmit(portfolioId:any){
    console.log('portfolioId: ' + portfolioId);
    this.router.navigate(['portfolio/' + portfolioId]);
  }

}
