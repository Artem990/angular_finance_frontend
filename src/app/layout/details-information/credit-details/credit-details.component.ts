import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CreditsService } from 'src/app/service/credits.service';

@Component({
  selector: 'app-credit-details',
  templateUrl: './credit-details.component.html',
  styleUrls: ['./credit-details.component.scss']
})
export class CreditDetailsComponent implements OnInit {
  creditId: any;
  creditDetails: any;

  constructor(private creditService: CreditsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((p:ParamMap)=>{
      this.creditId = p.get('creditId');
    });

    this.creditService.getCreditDetails(this.creditId).subscribe(
      data => {
        console.log(data)
        this.creditDetails = data;
      }
    );
    
  }

}
