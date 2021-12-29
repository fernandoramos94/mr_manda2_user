/*
  Authors : initappz(Rahul Jograna)
Website: https://initappz.com/
App Name: ionic 5 foodies app
Created: 28 - Feb - 2021
This App Template Source code is licensed as per the
terms found in the Website https://initappz.com/license
Copyright and Good Faith Purchasers © 2020 - present initappz.
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScheduleOrderPage } from './schedule-order.page';

describe('ScheduleOrderPage', () => {
  let component: ScheduleOrderPage;
  let fixture: ComponentFixture<ScheduleOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleOrderPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
