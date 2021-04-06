/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { NavController } from '@ionic/angular';
import * as  moment from 'moment';
import { environment } from 'src/environments/environment';
import { CartService } from 'src/app/services/cart.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  havePayment: boolean;
  haveStripe: boolean;
  havePayPal: boolean;
  haveCOD: boolean;
  havePayTM: boolean;
  haveInstamojo: boolean;
  havepayStack: boolean;
  haveflutterwave: boolean;
  instamojo = {
    key: '',
    token: '',
    code: ''
  };
  instaENV: any;
  paystack = {
    pk: '',
    sk: '',
    code: ''
  };
  flutterwave = {
    pk: '',
    code: ''
  };
  haveRazor: boolean;
  razorKey: any;

  storeFCM: any;
  constructor(
    private router: Router,
    public api: ApisService,
    public util: UtilService,
    private navCtrl: NavController,
    public cart: CartService,
    private iab: InAppBrowser,
  ) {
    console.log('cart', this.cart.cart);
    console.log('all data', this.cart);
    const param = {
      id: this.cart.cartStoreInfo.uid
    };
    this.api.post('users/getById', param).then((data: any) => {
      console.log('*******************', data);
      if (data && data.status === 200 && data.data && data.data.length) {
        this.storeFCM = data.data[0].fcm_token;
      }
    }, error => {
      console.log(error);
    });
    this.getPayments();
  }

  async ngOnInit() {

  }

  getPayments() {
    this.util.show();
    this.api.get('payments').then((data: any) => {
      console.log(data);
      this.util.hide();
      if (data && data.status === 200 && data.data) {
        const info = data.data.filter(x => x.status === '1');
        console.log('total payments', info);
        if (info && info.length > 0) {
          console.log('---->>', info);
          this.havePayment = true;
          const stripe = info.filter(x => x.id === '1');
          this.haveStripe = stripe && stripe.length > 0 ? true : false;
          const cod = info.filter(x => x.id === '2');
          this.haveCOD = cod && cod.length > 0 ? true : false;
          const payPal = info.filter(x => x.id === '3');
          this.havePayPal = payPal && payPal.length > 0 ? true : false;
          const razor = info.filter(x => x.id === '4');
          this.haveRazor = razor && razor.length > 0 ? true : false;
          const paytm = info.filter(x => x.id === '5');
          this.havePayTM = paytm && paytm.length > 0 ? true : false;
          const insta = info.filter(x => x.id === '6');
          this.haveInstamojo = insta && insta.length > 0 ? true : false;
          const paystack = info.filter(x => x.id === '7');
          this.havepayStack = paystack && paystack.length > 0 ? true : false;
          const flutterwave = info.filter(x => x.id === '8');
          this.haveflutterwave = flutterwave && flutterwave.length > 0 ? true : false;
          if (this.haveStripe) {
            // this.util.stripe = stripe;
            if (stripe) {
              const creds = JSON.parse(stripe[0].creds);
              if (stripe[0].env === '1') {
                this.util.stripe = creds.live;
              } else {
                this.util.stripe = creds.test;
              }
              this.util.stripeCode = creds && creds.code ? creds.code : 'USD';
            }
            console.log('============>>', this.util.stripe);
          }
          if (this.haveInstamojo) {
            const datas = info.filter(x => x.id === '6');
            this.instaENV = datas[0].env;
            if (insta) {
              const instaPay = JSON.parse(datas[0].creds);
              this.instamojo = instaPay;
              console.log('instaMOJO', this.instamojo);
            }
          }
          if (this.haveRazor) {
            const razorPay = info.filter(x => x.id === '4');
            const env = razorPay[0].env;
            if (razorPay) {
              const keys = JSON.parse(razorPay[0].creds);
              console.log('evnof razor pay', env);
              this.razorKey = env === '0' ? keys.test : keys.live;
              console.log('----------', this.razorKey);
            }
          }
          if (this.havepayStack) {
            const keys = JSON.parse(paystack[0].creds);
            this.paystack = keys;
            console.log('paystack variables', this.paystack);
          }

          if (this.haveflutterwave) {
            const keys = JSON.parse(flutterwave[0].creds);
            this.flutterwave = keys;
            console.log('flutterwave config', this.flutterwave);
          }
        } else {
          this.havePayment = false;
          this.util.showToast(this.util.translate('No Payment Found'), 'danger', 'bottom');
        }
      } else {
        this.havePayment = false;
        this.util.showToast(this.util.translate('No Payment Found'), 'danger', 'bottom');
      }
    }, error => {
      console.log(error);
      this.util.hide();
      this.havePayment = false;
      this.util.showToast(this.util.translate('Something went wrong'), 'danger', 'bottom');
    });
  }



  async makeOrder(method, key) {

    const param = {
      address: JSON.stringify(this.cart.deliveryAddress),
      applied_coupon: this.cart.coupon && this.cart.coupon.discount ? 1 : 0,
      coupon_id: this.cart.coupon && this.cart.coupon.discount ? this.cart.coupon.id : 0,
      pay_method: method,
      did: '',
      delivery_charge: this.cart.deliveryPrice,
      discount: this.cart.discount,
      grand_total: this.cart.grandTotal,
      orders: JSON.stringify(this.cart.cart),
      paid: key,
      restId: this.cart.cartStoreInfo.uid,
      serviceTax: this.cart.orderTax,
      status: 'created',
      time: moment().format('YYYY-MM-DD HH:mm:ss'),
      total: this.cart.totalPrice,
      uid: localStorage.getItem('uid'),
      notes: this.cart.orderNotes
    };

    console.log('param----->', param);

    this.util.show();
    this.api.post('orders/save', param).then((data: any) => {
      console.log(data);
      this.util.hide();
      this.cart.orderNotes = '';
      this.api.sendNotification('You have received new order', 'New Order Received', this.storeFCM);
      this.util.publishNewOrder();
      this.cart.clearCart();
      this.navCtrl.navigateRoot(['/success']);
    }, error => {
      console.log(error);
      this.util.hide();
      this.util.showToast(this.util.translate('Something went wrong'), 'danger', 'bottom');
    });
  }


  proceed() {
    // this.util.errorToast('ongoing');
    const options: InAppBrowserOptions = {
      location: 'no',
      clearcache: 'yes',
      zoom: 'yes',
      toolbar: 'yes',
      closebuttoncaption: 'close'
    };
    const param = {
      key: this.razorKey,
      amount: this.cart.grandTotal ? this.cart.grandTotal * 100 : 5,
      email: this.getEmail(),
      logo: this.api.mediaURL + this.util.logo
    };
    console.log('to url===>', this.api.JSON_to_URLEncoded(param));
    const url = this.api.baseUrl + 'razorpay?' + this.api.JSON_to_URLEncoded(param);
    const browser: any = this.iab.create(url, '_blank', options);
    browser.on('loadstop').subscribe(event => {
      console.log('event?;>11', event);
      const navUrl = event.url;
      if (navUrl.includes('success')) {
        console.log('close');
        browser.close();
        const urlItems = new URL(event.url);
        const orderId = urlItems.searchParams.get('id');
        this.makeOrder('razorpay', orderId);
      }
    });
  }

  paypalPayment() {
    const options: InAppBrowserOptions = {
      location: 'no',
      clearcache: 'yes',
      zoom: 'yes',
      toolbar: 'yes',
      closebuttoncaption: 'close'
    };
    const param = {
      uid: localStorage.getItem('uid'),
      itemName: 'Foodies',
      grandTotal: this.cart.grandTotal,
      dateTime: moment().format('YYYY-MM-DD HH:mm'),
      logo: this.api.mediaURL + this.util.logo
    };
    console.log('to url===>', this.api.JSON_to_URLEncoded(param));
    const url = this.api.baseUrl + 'paypal/buyProduct?' + this.api.JSON_to_URLEncoded(param);
    const browser: any = this.iab.create(url, '_blank', options);
    browser.on('loadstop').subscribe(event => {
      console.log('event?;>11', event);
      const navUrl = event.url;
      if (navUrl.includes('success') || navUrl.includes('checkout/done')) {
        console.log('close');
        browser.close();
        this.makeOrder('paypal', 'fromApp');
      }
    });
  }




  

  getName() {
    return this.util.userInfo && this.util.userInfo.first_name ?
      this.util.userInfo.first_name + ' ' + this.util.userInfo.last_name : 'Groceryee';
  }

  getEmail() {
    return this.util.userInfo && this.util.userInfo.email ? this.util.userInfo.email : 'info@groceryee.com';
  }



  async createOrder() {

    const param = {
      address: JSON.stringify(this.cart.deliveryAddress),
      applied_coupon: this.cart.coupon && this.cart.coupon.discount ? 1 : 0,
      coupon_id: this.cart.coupon && this.cart.coupon.discount ? this.cart.coupon.id : 0,
      pay_method: 'cod',
      did: '',
      delivery_charge: this.cart.deliveryPrice,
      discount: this.cart.discount,
      grand_total: this.cart.grandTotal,
      orders: JSON.stringify(this.cart.cart),
      paid: 'none',
      restId: this.cart.cartStoreInfo.uid,
      serviceTax: this.cart.orderTax,
      status: 'creada',
      time: moment().format('YYYY-MM-DD HH:mm:ss'),
      total: this.cart.totalPrice,
      uid: localStorage.getItem('uid'),
      notes: this.cart.orderNotes
    };

    console.log('param----->', param);

    this.util.show();
    this.api.post('orders/save', param).then((data: any) => {
      console.log(data);
      this.util.hide();
      this.cart.orderNotes = '';
      this.api.sendNotification('You have received new order', 'New Order Received', this.storeFCM);
      this.util.publishNewOrder();
      this.cart.clearCart();
      this.navCtrl.navigateRoot(['/success']);
    }, error => {
      console.log(error);
      this.util.hide();
      this.util.showToast(this.util.translate('Something went wrong'), 'danger', 'bottom');
    });
  }
}
