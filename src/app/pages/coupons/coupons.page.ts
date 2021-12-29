   //
import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
})
export class CouponsPage implements OnInit {
  list: any[] = [];
  restId: any;
  name: any;
  total: any;
  dummy = Array(10);
  constructor(
    public api: ApisService,
    private route: ActivatedRoute,
    public util: UtilService,
    private navCtrl: NavController
  ) {
    this.getOffers();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
    // console.log(data);
      if (data && data.restId) {
        this.restId = data.restId;
        this.name = data.name;
        this.total = parseFloat(data.totalPrice);
      // console.log(this.restId);
      } else {
        this.dummy = [];
      }
    });
  }
  getOffers() {
    this.api.get('offers').then(data => {
      this.dummy = [];
    // console.log('list=====>', data);
      this.list = [];
      if (data && data.status === 200 && data.data.length) {
        const currnetDate = moment().format('YYYY-MM-DD');
        data.data.forEach(element => {
        // console.log(moment(element.expire).isAfter(currnetDate));
          if (element && element.status === '1' && moment(element.expire).isAfter(currnetDate)) {
          // console.log('yes=>', element);
            element.available = element.available.split(',');
            this.list.push(element);
          // console.log("elemento?",element)
          }
        });
        // this.list = data;
      }
    }).catch(error => {
      this.dummy = [];
    // console.log(error);
    });
  }

  
  claim(item) {
  // console.log("elemento2?",item);
  // console.log(this.restId);
    if (item && item.available && item.available.length) {
    // console.log("EXPIRACION?",item.available)
      const data = item.available.includes(this.restId);
    // console.log(data);
    // console.log(this.restId);
      if (item) {
        if (this.total >= item.min) {
        // console.log('ok');
          this.util.showToast('Cupón aplicado', 'success', 'bottom');
          this.util.publishCoupon(item);
          this.navCtrl.back();
        } else {
          this.util.errorToast('Para reclamar este cupón tu orden debe tener un mínimo de $' + item.min);
        }
      } else {
        this.util.errorToast('Cupón no válido para ' + this.name);
      }
    } else {
      this.util.errorToast('Este cupón no es válido para ' + this.name);
    }
  }
  expire(date) {
    return moment(date).format('llll');
  }
}
