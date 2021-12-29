(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-stripe-payments-stripe-payments-module"],{

/***/ "Bacn":
/*!***************************************************************!*\
  !*** ./src/app/pages/stripe-payments/stripe-payments.page.ts ***!
  \***************************************************************/
/*! exports provided: StripePaymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentsPage", function() { return StripePaymentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stripe_payments_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stripe-payments.page.html */ "CgU1");
/* harmony import */ var _stripe_payments_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stripe-payments.page.scss */ "Ko7l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");



//








let StripePaymentsPage = class StripePaymentsPage {
    constructor(router, api, util, navCtrl, cart) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.cart = cart;
        this.cards = [];
        this.dummy = [];
        const param = {
            id: this.cart.cartStoreInfo.uid
        };
        this.api.post('users/getById', param).then((data) => {
            // console.log('*******************', data);
            if (data && data.status === 200 && data.data && data.data.length) {
                this.storeFCM = data.data[0].fcm_token;
            }
        }, error => {
            // console.log(error);
        });
    }
    ngOnInit() {
    }
    getCards() {
        this.dummy = Array(10);
        // console.log(this.util.userInfo.stripe_key);
        this.api.httpGet('https://api.stripe.com/v1/customers/' + this.util.userInfo.stripe_key +
            '/sources?object=card', this.util.stripe).subscribe((cards) => {
            // console.log(cards);
            this.dummy = [];
            if (cards && cards.data) {
                this.cards = cards.data;
                this.token = this.cards[0].id;
            }
        }, (error) => {
            this.dummy = [];
            // console.log(error);
            if (error && error.error && error.error.error && error.error.error.message) {
                this.util.showErrorAlert(error.error.error.message);
                return false;
            }
            this.util.errorToast('Algo ha ido mal');
        });
    }
    payment() {
        // console.log('place order');
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.util.translate('Are you sure?'),
            text: this.util.translate('Orders once placed cannot be cancelled and are non-refundable'),
            icon: 'question',
            confirmButtonText: this.util.translate('Yes'),
            cancelButtonText: this.util.translate('cancel'),
            showCancelButton: true,
            backdrop: false,
            background: 'white'
        }).then((data) => {
            // console.log(data);
            if (data && data.value) {
                // console.log('go to procesed,,');
                const options = {
                    amount: parseInt(this.cart.grandTotal) * 100,
                    currency: this.util.stripeCode,
                    customer: this.util.userInfo.stripe_key,
                    card: this.token,
                };
                // console.log('options', options);
                const url = 'https://api.stripe.com/v1/charges';
                this.util.show();
                this.api.externalPost(url, options, this.util.stripe).subscribe((data) => {
                    // console.log('------------------------->', data);
                    this.paykey = data.id;
                    this.util.hide();
                    this.util.showToast(this.util.translate('Payment Success'), 'success', 'bottom');
                    this.createOrder();
                }, (error) => {
                    this.util.hide();
                    // console.log(error);
                    this.util.hide();
                    if (error && error.error && error.error.error && error.error.error.message) {
                        this.util.showErrorAlert(error.error.error.message);
                        return false;
                    }
                    this.util.errorToast('Algo ha ido mal');
                });
            }
        });
    }
    createOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const param = {
                address: JSON.stringify(this.cart.deliveryAddress),
                applied_coupon: this.cart.coupon && this.cart.coupon.discount ? 1 : 0,
                coupon_id: this.cart.coupon && this.cart.coupon.discount ? this.cart.coupon.id : 0,
                pay_method: 'stripe',
                did: '',
                delivery_charge: this.cart.deliveryPrice,
                discount: this.cart.discount,
                grand_total: this.cart.grandTotal,
                orders: JSON.stringify(this.cart.cart),
                paid: this.paykey,
                restId: this.cart.cartStoreInfo.uid,
                serviceTax: this.cart.orderTax,
                status: 'created',
                time: moment__WEBPACK_IMPORTED_MODULE_9__().format('YYYY-MM-DD HH:mm:ss'),
                total: this.cart.totalPrice,
                uid: localStorage.getItem('uid'),
                notes: this.cart.orderNotes
            };
            // console.log('param----->', param);
            this.util.show();
            this.api.post('orders/save', param).then((data) => {
                // console.log(data);
                this.util.hide();
                this.cart.orderNotes = '';
                this.api.sendNotification('You have received new order', 'New Order Received', this.storeFCM);
                this.util.publishNewOrder();
                this.cart.clearCart();
                this.navCtrl.navigateRoot(['/success']);
            }, error => {
                // console.log(error);
                this.util.hide();
                this.util.showToast('Algo ha ido mal', 'danger', 'bottom');
            });
        });
    }
    onAdd() {
        this.router.navigate(['add-card']);
    }
    back() {
        this.navCtrl.back();
    }
    changeMethod(id) {
        this.token = id;
    }
    ionViewWillEnter() {
        if (this.util.userInfo && this.util.userInfo.stripe_key) {
            this.getCards();
        }
    }
};
StripePaymentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_10__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"] }
];
StripePaymentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stripe-payments',
        template: _raw_loader_stripe_payments_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stripe_payments_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_10__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]])
], StripePaymentsPage);



/***/ }),

/***/ "CgU1":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stripe-payments/stripe-payments.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Pay with Stripe')}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdd()\">\n        <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_content\">\n    <div *ngIf=\"!cards?.length && !dummy?.length\">\n      <p class=\"ion-text-center\">{{util.translate('No Card Found Please Add Card')}}</p>\n    </div>\n    <ion-item *ngFor=\"let item of dummy\">\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-radio-group [(ngModel)]=\"token\">\n      <ion-item class=\"div_inner\" lines=\"none\" *ngFor=\"let card of cards;let i = index\">\n        <ion-thumbnail slot=\"end\"\n          style=\"display: flex; flex-direction: column; justify-content: center; align-items: center;\">\n          <ion-label>{{card.brand}} </ion-label>\n        </ion-thumbnail>\n        <ion-radio (ionSelect)=\"changeMethod(card.id)\" [value]=\"card.id\" slot=\"start\"></ion-radio>\n        <ion-label>XXXX{{card.last4}} <br> {{util.translate('Expiry')}} {{card.exp_month}} / {{card.exp_year}}\n        </ion-label>\n      </ion-item>\n    </ion-radio-group>\n    <ion-button expand=\"block\" *ngIf=\"cards?.length\" class=\"btn_addcard\" (click)=\"payment()\">\n      {{util.translate('Payment')}}\n      <span *ngIf=\"util.cside === 'left'\"> {{util.currecny}} {{cart.grandTotal}}</span>\n      <span *ngIf=\"util.cside === 'right'\"> {{cart.grandTotal}} {{util.currecny}}</span>\n\n    </ion-button>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "Ko7l":
/*!*****************************************************************!*\
  !*** ./src/app/pages/stripe-payments/stripe-payments.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn_right {\n  position: relative;\n  z-index: 999999;\n}\n\n.img_menu {\n  width: 17px;\n  position: absolute;\n  right: 20px;\n}\n\n.div_content {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.div_content .div_inner {\n  width: 100%;\n  margin-top: 15px;\n  padding-bottom: 15px;\n}\n\n.div_content .div_inner .r {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.div_content .div_inner .lbl_number {\n  display: block;\n  font-size: 17px;\n  color: gray;\n  margin-left: 10px;\n}\n\n.div_content .div_inner .img_visa {\n  float: right;\n  position: absolute;\n  top: 50%;\n  display: block;\n  font-size: 17px;\n  color: gray;\n  margin-left: 10px;\n  transform: translateY(-50%);\n  height: 15px !important;\n  width: 50px !important;\n}\n\n.btn_addcard {\n  margin-top: 30px;\n  --box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0cmlwZS1wYXltZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUVSOztBQUFRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFFWjs7QUFBUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRVo7O0FBQVE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFFWjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7QUFDSiIsImZpbGUiOiJzdHJpcGUtcGF5bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgLy9cbi5idG5fcmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG59XG4uaW1nX21lbnUge1xuICAgIHdpZHRoOiAxN3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbn1cbi5kaXZfY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAuZGl2X2lubmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICAgIC5yIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5sYmxfbnVtYmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nX3Zpc2Ege1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4uYnRuX2FkZGNhcmQge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "usTK":
/*!*************************************************************************!*\
  !*** ./src/app/pages/stripe-payments/stripe-payments-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: StripePaymentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentsPageRoutingModule", function() { return StripePaymentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _stripe_payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stripe-payments.page */ "Bacn");

//



const routes = [
    {
        path: '',
        component: _stripe_payments_page__WEBPACK_IMPORTED_MODULE_3__["StripePaymentsPage"]
    }
];
let StripePaymentsPageRoutingModule = class StripePaymentsPageRoutingModule {
};
StripePaymentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StripePaymentsPageRoutingModule);



/***/ }),

/***/ "xKnB":
/*!*****************************************************************!*\
  !*** ./src/app/pages/stripe-payments/stripe-payments.module.ts ***!
  \*****************************************************************/
/*! exports provided: StripePaymentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentsPageModule", function() { return StripePaymentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _stripe_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stripe-payments-routing.module */ "usTK");
/* harmony import */ var _stripe_payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stripe-payments.page */ "Bacn");

//






let StripePaymentsPageModule = class StripePaymentsPageModule {
};
StripePaymentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stripe_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["StripePaymentsPageRoutingModule"],
        ],
        declarations: [_stripe_payments_page__WEBPACK_IMPORTED_MODULE_6__["StripePaymentsPage"]]
    })
], StripePaymentsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-stripe-payments-stripe-payments-module-es2015.js.map