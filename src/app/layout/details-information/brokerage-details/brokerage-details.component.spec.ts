import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestmentsService } from 'src/app/service/investments.service';

import { BrokerageDetailsComponent } from './brokerage-details.component';

describe('BrokerageDetailsComponent', () => {
  let component: BrokerageDetailsComponent;
  let fixture: ComponentFixture<BrokerageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
