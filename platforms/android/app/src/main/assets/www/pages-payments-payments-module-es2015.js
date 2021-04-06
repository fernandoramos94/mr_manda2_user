(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payments-payments-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payments/payments.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payments/payments.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Payment')}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"billing\">\n    <div class=\"singleRow\">\n      <ion-label class=\"headerTitle\">{{util.translate('Item Total')}}</ion-label>\n      <ion-label class=\"price\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{cart.totalPrice}}</ion-label>\n      <ion-label class=\"price\" *ngIf=\"util.cside ==='right'\"> {{cart.totalPrice}} {{util.currecny}}</ion-label>\n    </div>\n    <div class=\"singleRow\" *ngIf=\"cart.discount && cart.coupon\">\n      <ion-label class=\"headerTitle\">{{util.translate('Discount')}}</ion-label>\n      <ion-label class=\"price\" *ngIf=\"util.cside ==='left'\"> - {{util.currecny}} {{cart.discount}}</ion-label>\n      <ion-label class=\"price\" *ngIf=\"util.cside ==='right'\"> - {{cart.discount}} {{util.currecny}}</ion-label>\n    </div>\n    <div class=\"singleRow\">\n      <ion-label class=\"headerTitle\">{{util.translate('Taxes & Charges')}} ({{cart.flatTax}} %) </ion-label>\n      <ion-label class=\"price\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{cart.orderTax}}</ion-label>\n      <ion-label class=\"price\" *ngIf=\"util.cside ==='right'\"> {{cart.orderTax}} {{util.currecny}}</ion-label>\n    </div>\n    <div class=\"singleRow\">\n      <ion-label class=\"headerTitle\">{{util.translate('Delivery Charges')}}</ion-label>\n      <ion-label class=\"price\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{cart.deliveryPrice}}</ion-label>\n      <ion-label class=\"price\" *ngIf=\"util.cside ==='right'\"> {{cart.deliveryPrice}} {{util.currecny}}</ion-label>\n    </div>\n\n    <div class=\"singleRow\">\n      <ion-label class=\"headerTotal boldClass\">{{util.translate('Grand Total')}}</ion-label>\n      <ion-label class=\"priceTotal boldClass\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{cart.grandTotal}}\n      </ion-label>\n      <ion-label class=\"priceTotal boldClass\" *ngIf=\"util.cside ==='right'\"> {{cart.grandTotal}} {{util.currecny}}\n      </ion-label>\n    </div>\n  </div>\n  <div class=\"header\">\n    <ion-label class=\"title\">{{util.translate('Payment Options')}}</ion-label>\n  </div>\n  <ion-item (click)=\"openStripe()\" lines=\"none\" *ngIf=\"havePayment && haveStripe\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/stripe.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.translate('Pay with Stripe')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"createOrder()\" lines=\"none\" *ngIf=\"havePayment && haveCOD\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/cod.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.translate('Cash on Delivery')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"paypalPayment()\" lines=\"none\" *ngIf=\"havePayment && havePayPal\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/paypal.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.translate('Pay with PayPal')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"paytm()\" lines=\"none\" *ngIf=\"havePayment && havePayTM\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/paytm.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.translate('Pay with PayTM')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n\n  <ion-item (click)=\"instaPay()\" lines=\"none\" *ngIf=\"havePayment && haveInstamojo\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/instamojoapp.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.translate('Pay with Instamojo')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"proceed()\" lines=\"none\" *ngIf=\"havePayment && haveRazor\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/razor.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.translate('Pay with RazorPay')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"paystackPay()\" lines=\"none\" *ngIf=\"havePayment && havepayStack\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/paystack.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.translate('Pay with PayStack')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"flutterpay()\" lines=\"none\" *ngIf=\"havePayment && havepayStack\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/flutter.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.translate('Pay with Flutterwave')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/payments/payments-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/payments/payments-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PaymentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageRoutingModule", function() { return PaymentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments.page */ "./src/app/pages/payments/payments.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



const routes = [
    {
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_3__["PaymentsPage"]
    }
];
let PaymentsPageRoutingModule = class PaymentsPageRoutingModule {
};
PaymentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/payments/payments.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/payments/payments.module.ts ***!
  \***************************************************/
/*! exports provided: PaymentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function() { return PaymentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments-routing.module */ "./src/app/pages/payments/payments-routing.module.ts");
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payments.page */ "./src/app/pages/payments/payments.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let PaymentsPageModule = class PaymentsPageModule {
};
PaymentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentsPageRoutingModule"],
        ],
        declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsPage"]]
    })
], PaymentsPageModule);



/***/ }),

/***/ "./src/app/pages/payments/payments.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/payments/payments.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.header {\n  background: #f3f3f3;\n  padding: 20px;\n}\n.header .title {\n  font-size: 1rem;\n  font-weight: bold;\n}\n.billing {\n  padding: 5px 10px;\n}\n.billing .singleRow {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0px;\n  border-bottom: 1px dashed lightgray;\n}\n.billing .singleRow .headerTitle {\n  font-size: 0.8rem;\n}\n.billing .singleRow .boldClass {\n  font-weight: bold;\n}\n.billing .singleRow .headerTotal {\n  font-size: 1rem;\n}\n.billing .singleRow .priceTotal {\n  font-size: 1rem;\n}\n.billing .singleRow .price {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudHMvcGF5bWVudHMucGFnZS5zY3NzIiwiL1VzZXJzL2FsZWphbmRyb2RpYXovRGVza3RvcC9URUxPIDIuMC9UZWxvIFVzdWFyaW8vc3JjL2FwcC9wYWdlcy9wYXltZW50cy9wYXltZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QURFSjtBQ0RJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FER1I7QUNBQTtFQUNJLGlCQUFBO0FER0o7QUNGSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7QURJUjtBQ0hRO0VBQ0ksaUJBQUE7QURLWjtBQ0hRO0VBQ0ksaUJBQUE7QURLWjtBQ0hRO0VBQ0ksZUFBQTtBREtaO0FDSFE7RUFDSSxlQUFBO0FES1o7QUNIUTtFQUNJLGlCQUFBO0FES1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50cy9wYXltZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmhlYWRlciAudGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmlsbGluZyB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLmJpbGxpbmcgLnNpbmdsZVJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xufVxuLmJpbGxpbmcgLnNpbmdsZVJvdyAuaGVhZGVyVGl0bGUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5iaWxsaW5nIC5zaW5nbGVSb3cgLmJvbGRDbGFzcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJpbGxpbmcgLnNpbmdsZVJvdyAuaGVhZGVyVG90YWwge1xuICBmb250LXNpemU6IDFyZW07XG59XG4uYmlsbGluZyAuc2luZ2xlUm93IC5wcmljZVRvdGFsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmJpbGxpbmcgLnNpbmdsZVJvdyAucHJpY2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbi5iaWxsaW5nIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAuc2luZ2xlUm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgIC5oZWFkZXJUaXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYm9sZENsYXNzIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXJUb3RhbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnByaWNlVG90YWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/payments/payments.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payments/payments.page.ts ***!
  \*************************************************/
/*! exports provided: PaymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPage", function() { return PaymentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








let PaymentsPage = class PaymentsPage {
    constructor(router, api, util, navCtrl, cart, iab) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.cart = cart;
        this.iab = iab;
        this.instamojo = {
            key: '',
            token: '',
            code: ''
        };
        this.paystack = {
            pk: '',
            sk: '',
            code: ''
        };
        this.flutterwave = {
            pk: '',
            code: ''
        };
        console.log('cart', this.cart.cart);
        console.log('all data', this.cart);
        const param = {
            id: this.cart.cartStoreInfo.uid
        };
        this.api.post('users/getById', param).then((data) => {
            console.log('*******************', data);
            if (data && data.status === 200 && data.data && data.data.length) {
                this.storeFCM = data.data[0].fcm_token;
            }
        }, error => {
            console.log(error);
        });
        this.getPayments();
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    getPayments() {
        this.util.show();
        this.api.get('payments').then((data) => {
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
                            }
                            else {
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
                }
                else {
                    this.havePayment = false;
                    this.util.showToast(this.util.translate('No Payment Found'), 'danger', 'bottom');
                }
            }
            else {
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
    openStripe() {
        this.router.navigate(['stripe-payments']);
    }
    makeOrder(method, key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
                time: moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD HH:mm:ss'),
                total: this.cart.totalPrice,
                uid: localStorage.getItem('uid'),
                notes: this.cart.orderNotes
            };
            console.log('param----->', param);
            this.util.show();
            this.api.post('orders/save', param).then((data) => {
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
        });
    }
    proceed() {
        // this.util.errorToast('ongoing');
        const options = {
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
        const browser = this.iab.create(url, '_blank', options);
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
        const options = {
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
            dateTime: moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD HH:mm'),
            logo: this.api.mediaURL + this.util.logo
        };
        console.log('to url===>', this.api.JSON_to_URLEncoded(param));
        const url = this.api.baseUrl + 'paypal/buyProduct?' + this.api.JSON_to_URLEncoded(param);
        const browser = this.iab.create(url, '_blank', options);
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
    flutterpay() {
        const options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
        };
        const param = {
            key: this.flutterwave.pk,
            amount: this.cart.grandTotal,
            email: this.getEmail(),
            phone: this.util.userInfo.mobile,
            name: this.getName(),
            code: this.flutterwave.code,
            logo: this.api.mediaURL + this.util.logo
        };
        console.log('to url===>', this.api.JSON_to_URLEncoded(param));
        const url = this.api.baseUrl + 'flutterwave?' + this.api.JSON_to_URLEncoded(param);
        const browser = this.iab.create(url, '_blank', options);
        browser.on('loadstop').subscribe(event => {
            console.log('event?;>11', event);
            const navUrl = event.url;
            if (navUrl.includes('success') || navUrl.includes('closed')) {
                console.log('close');
                browser.close();
                if (navUrl.includes('success')) {
                    const urlItems = new URL(event.url);
                    const orderId = urlItems.searchParams.get('transaction_id');
                    this.makeOrder('flutterwave', orderId);
                }
            }
        });
    }
    paystackPay() {
        const options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
        };
        const paykey = '' + Math.floor((Math.random() * 1000000000) + 1);
        const param = {
            key: this.paystack.pk,
            email: this.util.userInfo.email,
            amount: parseInt(this.cart.grandTotal) * 100,
            firstname: this.util.userInfo.first_name,
            lastname: this.util.userInfo.last_name,
            ref: paykey
        };
        console.log('to url===>', this.api.JSON_to_URLEncoded(param));
        const url = this.api.baseUrl + 'paystack?' + this.api.JSON_to_URLEncoded(param);
        const browser = this.iab.create(url, '_blank', options);
        browser.on('loadstop').subscribe(event => {
            console.log('event?;>11', event);
            const navUrl = event.url;
            if (navUrl.includes('success') || navUrl.includes('close')) {
                console.log('close');
                browser.close();
                if (navUrl.includes('success')) {
                    console.log('closed---->>>>>');
                    this.makeOrder('paystack', paykey);
                }
                else {
                    console.log('closed');
                }
            }
        });
    }
    paytm() {
        const options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
        };
        const orderId = this.util.makeid(20);
        const param = {
            ORDER_ID: orderId,
            CUST_ID: localStorage.getItem('uid'),
            INDUSTRY_TYPE_ID: 'Retail',
            CHANNEL_ID: 'WAP',
            TXN_AMOUNT: this.cart.grandTotal ? this.cart.grandTotal : 5
        };
        console.log('to url===>', this.api.JSON_to_URLEncoded(param));
        const url = this.api.baseUrl + 'paytm/pay?' + this.api.JSON_to_URLEncoded(param);
        const browser = this.iab.create(url, '_blank', options);
        browser.on('loadstop').subscribe(event => {
            console.log('event?;>11', event);
            const navUrl = event.url;
            if (navUrl.includes('success')) {
                console.log('close');
                browser.close();
                this.makeOrder('paytm', orderId);
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
    instaPay() {
        let url;
        if (this.instaENV === '0') {
            url = 'https://test.instamojo.com/api/1.1/payment-requests/';
        }
        else {
            url = 'https://www.instamojo.com/api/1.1/payment-requests/';
        }
        const param = {
            allow_repeated_payments: 'False',
            amount: this.cart.grandTotal,
            buyer_name: this.getName(),
            purpose: 'Foodies',
            redirect_url: this.api.baseUrl + 'paypal/success',
            phone: this.util.userInfo && this.util.userInfo.mobile ? this.util.userInfo.mobile : '',
            send_email: 'True',
            webhook: this.api.baseUrl,
            send_sms: 'True',
            email: this.getEmail()
        };
        this.util.show();
        this.api.instaPay(url, param, this.instamojo.key, this.instamojo.token).then((data) => {
            console.log(data);
            this.util.hide();
            console.log(JSON.parse(data.data));
            const info = JSON.parse(data.data);
            console.log('data.status', data.status);
            if (data.status === 201 && info && info.success === true) {
                const options = {
                    location: 'no',
                    clearcache: 'yes',
                    zoom: 'yes',
                    toolbar: 'yes',
                    closebuttoncaption: 'close'
                };
                const browser = this.iab.create(info.payment_request.longurl, '_blank', options);
                browser.on('loadstop').subscribe(event => {
                    const navUrl = event.url;
                    console.log('navURL', navUrl);
                    if (navUrl.includes('success')) {
                        browser.close();
                        const urlItems = new URL(event.url);
                        console.log(urlItems);
                        const orderId = urlItems.searchParams.get('payment_id');
                        this.makeOrder('instamojo', orderId);
                    }
                });
            }
            else {
                const error = JSON.parse(data.error);
                console.log('error message', error);
                if (error && error.message) {
                    this.util.showToast(error.message, 'danger', 'bottom');
                    return false;
                }
                this.util.showToast(this.util.translate('Something went wrong'), 'danger', 'bottom');
            }
        }, error => {
            console.log(error);
            this.util.hide();
            const message = JSON.parse(error.error);
            console.log('error message', message);
            if (message && message.message) {
                this.util.showToast(message.message, 'danger', 'bottom');
                return false;
            }
            this.util.showToast(this.util.translate('Something went wrong'), 'danger', 'bottom');
        }).catch(error => {
            console.log(error);
            this.util.hide();
            const message = JSON.parse(error.error);
            console.log('error message', message);
            if (message && message.message) {
                this.util.showToast(message.message, 'danger', 'bottom');
                return false;
            }
            this.util.showToast(this.util.translate('Something went wrong'), 'danger', 'bottom');
        });
    }
    createOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
                status: 'created',
                time: moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD HH:mm:ss'),
                total: this.cart.totalPrice,
                uid: localStorage.getItem('uid'),
                notes: this.cart.orderNotes
            };
            console.log('param----->', param);
            this.util.show();
            this.api.post('orders/save', param).then((data) => {
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
        });
    }
};
PaymentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] }
];
PaymentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payments.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payments/payments.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payments.page.scss */ "./src/app/pages/payments/payments.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]])
], PaymentsPage);



/***/ })

}]);
//# sourceMappingURL=pages-payments-payments-module-es2015.js.map