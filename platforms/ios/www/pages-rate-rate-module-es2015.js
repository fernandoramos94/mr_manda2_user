(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rate-rate-module"],{

/***/ "+6y4":
/*!*******************************************!*\
  !*** ./src/app/pages/rate/rate.module.ts ***!
  \*******************************************/
/*! exports provided: RatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatePageModule", function() { return RatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _rate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rate-routing.module */ "oQQC");
/* harmony import */ var _rate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rate.page */ "A+rc");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "Xcyb");

//







let RatePageModule = class RatePageModule {
};
RatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rate_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatePageRoutingModule"],
            ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]
        ],
        declarations: [_rate_page__WEBPACK_IMPORTED_MODULE_6__["RatePage"]]
    })
], RatePageModule);



/***/ }),

/***/ "A+rc":
/*!*****************************************!*\
  !*** ./src/app/pages/rate/rate.page.ts ***!
  \*****************************************/
/*! exports provided: RatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatePage", function() { return RatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rate_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rate.page.html */ "A6+y");
/* harmony import */ var _rate_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rate.page.scss */ "FtR2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");



//





let RatePage = class RatePage {
    constructor(api, util, navCtrl, router, modalCtrl) {
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.router = router;
        this.modalCtrl = modalCtrl;
        // console.log(this.util.orderDetails);
        if (this.util.orderDetails && this.util.orderDetails.orders) {
            this.products = JSON.parse(this.util.orderDetails.orders);
            // console.log(this.products);
        }
        else {
            this.util.errorToast('Something went wrong');
            this.navCtrl.back();
        }
    }
    submit() {
    }
    ngOnInit() {
    }
    onRatingChange(event) {
        // console.log(event);
    }
    rateStore() {
        const navData = {
            queryParams: {
                id: this.util.orderDetails.restId,
                name: this.util.orderDetails.str_name,
                way: 'order'
            }
        };
        this.router.navigate(['/add-review'], navData);
    }
    ratDriver() {
        const param = {
            queryParams: {
                id: this.util.orderDetails.driverInfo.id,
                name: this.util.orderDetails.driverInfo.first_name + ' ' + this.util.orderDetails.driverInfo.last_name
            }
        };
        this.router.navigate(['driver-rating'], param);
    }
    rateProduct(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const param = {
                queryParams: {
                    id: item.id,
                    name: item.name
                }
            };
            this.router.navigate(['product-rating'], param);
        });
    }
};
RatePage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
RatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rate',
        template: _raw_loader_rate_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rate_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], RatePage);



/***/ }),

/***/ "A6+y":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rate/rate.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Rate')}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\" *ngIf=\"util.orderDetails && util.orderDetails.orders\">\n\n\n    <ion-label class=\"titles\"> {{util.translate('Orders')}} </ion-label>\n    <div class=\"desc_div\">\n      <div class=\"border_bottom\">\n        <div>\n          <p class=\"storeName\">\n            <span class=\"name\"> {{util.orderDetails.str_name}} </span>\n            <span class=\"status\" (click)=\"rateStore()\">\n              <div class=\"ion-activatable ripple-parent\">\n                <ion-icon slot=\"start\" color=\"warning\" name=\"star-outline\"></ion-icon>\n                <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n              </div>\n            </span>\n          </p>\n          <p *ngFor=\"let order of products\" class=\"items\">\n            <span>{{order.name}}\n            </span>\n            <span (click)=\"rateProduct(order)\">\n              <div class=\"ion-activatable ripple-parent\">\n                <ion-icon slot=\"start\" color=\"warning\" name=\"star-outline\"></ion-icon>\n                <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n              </div>\n            </span>\n          </p>\n        </div>\n      </div>\n\n      <ion-label class=\"titles\" *ngIf=\"util.orderDetails && util.orderDetails.did\"> {{util.translate('Rate Drivers')}}\n      </ion-label>\n\n      <div class=\"card_div\">\n        <div class=\"resto_detail\">\n          <div class=\"back_image\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+util.orderDetails.driverInfo.cover+'),url(assets/user.png)'}\">\n          </div>\n          <div style=\"margin-left: 10px;\" (click)=\"ratDriver()\">\n            <ion-label class=\"res_name\">{{util.orderDetails.driverInfo.first_name}}\n              {{util.orderDetails.driverInfo.last_name}}</ion-label>\n            <ion-label class=\"res_location\">\n              <ion-icon name=\"mail-outline\"></ion-icon> {{util.orderDetails.driverInfo.email}}\n            </ion-label>\n            <ion-label class=\"res_location\">\n              <ion-icon name=\"call-outline\"></ion-icon> {{util.orderDetails.driverInfo.mobile}}\n            </ion-label>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "FtR2":
/*!*******************************************!*\
  !*** ./src/app/pages/rate/rate.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div .card_div {\n  padding: 20px;\n}\n.main_content_div .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div .card_div .resto_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .res_location {\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .order_id {\n  position: absolute;\n  right: 5px;\n}\n.main_content_div .card_div .resto_detail .order_id ion-label {\n  text-align: right;\n}\n.main_content_div .card_div .resto_detail .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 10px;\n}\n.main_content_div .card_div2 {\n  padding: 10px 20px;\n}\n.main_content_div .card_div2 .personal_detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div2 .personal_detail ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.main_content_div .card_div2 .personal_detail ion-button {\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .personal_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div2 .order_detail .head_gray {\n  color: gray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n}\n.main_content_div .card_div2 .order_detail .prize1 {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n  font-size: 16px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl2 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n}\n.main_content_div .titles {\n  font-size: 15px;\n  font-weight: bold;\n  margin: 20px 0px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .desc_div {\n  width: 100%;\n}\n.main_content_div .desc_div .border_bottom {\n  padding-bottom: 10px;\n  width: 100%;\n}\n.main_content_div .desc_div .border_bottom .storeName {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.main_content_div .desc_div .border_bottom .storeName .name {\n  font-weight: bold;\n}\n.main_content_div .desc_div .border_bottom .storeName .status {\n  font-weight: bold;\n}\n.main_content_div .desc_div .border_bottom .storeName .status .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 10px;\n}\n.main_content_div .desc_div .border_bottom .items {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  padding-bottom: 5px;\n  border-bottom: 0.5px dashed lightgray;\n  margin-bottom: 10px;\n}\n.main_content_div .desc_div .border_bottom .itemss {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.main_content_div .desc_div .border_bottom .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 10px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  padding-bottom: 10px;\n}\n.main_content_div .flex_div .values {\n  font-weight: bold;\n  text-transform: capitalize;\n}\n.main_content_div .hr_line_div {\n  margin-top: 15px;\n  width: 100%;\n  height: 1px;\n  background: lightgray;\n}\n.main_content_div .tracking_div {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n}\n.main_content_div .tracking_div .left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20%;\n}\n.main_content_div .tracking_div .left .line_div {\n  height: 40px;\n  width: 1px;\n  border: 1px solid #e8e8e8;\n}\n.main_content_div .tracking_div .left .line_div_darkgray {\n  height: 40px;\n  width: 1px;\n  border: 1px solid #c8c7ce;\n}\n.main_content_div .tracking_div .left .round_div_gray {\n  height: 20px;\n  width: 20px;\n  background-color: #e8e8e8;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left .round_div_darkgray {\n  height: 20px;\n  width: 20px;\n  background-color: #c8c7ce;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left .round_div_red {\n  height: 20px;\n  width: 20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left ion-icon {\n  font-size: 20px;\n  margin-left: -7px;\n  color: var(--ion-color-primary);\n  background: #f4f5f8;\n  border-radius: 50%;\n}\n.main_content_div .tracking_div .right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 80%;\n}\n.main_content_div .tracking_div .right .line_div {\n  height: 45px;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n}\n.main_content_div .tracking_div .right .round_div_gray {\n  height: 20px;\n  width: 100% px;\n  color: #c8c7ce;\n}\n.main_content_div .tracking_div .right .round_div_red {\n  height: 20px;\n  width: 100% px;\n  color: var(--ion-color-main);\n}\n.main_content_div .tracking_div .right .round_div_darkgray {\n  height: 20px;\n  width: 100%;\n  color: gray;\n}\n.btn_div {\n  display: flex;\n  justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n  width: 130px;\n}\n.btn_div .reject {\n  --background: var(--ion-color-danger);\n}\n.btn_div .accept {\n  --background: var(--ion-color-primary);\n}\n.status_div {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  align-items: center;\n}\n.status_div ion-select {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  width: 100%;\n}\n.status_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n}\n.green {\n  display: block;\n  text-align: center;\n  color: green;\n  font-weight: 600;\n}\n.red {\n  display: block;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFBSjtBQUNJO0VBQ0ksYUFBQTtBQUNSO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ1o7QUFDWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFDaEI7QUFFWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUFoQjtBQUVZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFBaEI7QUFHWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQURoQjtBQUdnQjtFQUNJLGlCQUFBO0FBRHBCO0FBSVk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUZoQjtBQU1JO0VBQ0ksa0JBQUE7QUFKUjtBQUtRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUhaO0FBS1k7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7QUFIaEI7QUFLWTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUFIaEI7QUFLWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUhoQjtBQVFZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5oQjtBQVFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBTmhCO0FBU1k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFQaEI7QUFVWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVJoQjtBQVdZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFUaEI7QUFhSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtBQVhSO0FBYUk7RUFDSSxjQUFBO0FBWFI7QUFjSTtFQUNJLFdBQUE7QUFaUjtBQWFRO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0FBWFo7QUFZWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtBQVZoQjtBQVdnQjtFQUNJLGlCQUFBO0FBVHBCO0FBV2dCO0VBQ0ksaUJBQUE7QUFUcEI7QUFVb0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQVJ4QjtBQVlZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FBVmhCO0FBWVk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVZoQjtBQVlZO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFWaEI7QUFlSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsZUFBQTtFQUNBLG9CQUFBO0FBZFI7QUFlUTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7QUFiWjtBQWlCSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQWZSO0FBa0JJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFoQlI7QUFtQlE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFqQlo7QUFrQlk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBaEJoQjtBQW1CWTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFqQmhCO0FBb0JZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFsQmhCO0FBb0JZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFsQmhCO0FBb0JZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFsQmhCO0FBcUJZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBbkJoQjtBQXVCUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQXJCWjtBQXVCWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBckJoQjtBQXdCWTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQXRCaEI7QUF3Qlk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FBdEJoQjtBQXdCWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtBQXZCaEI7QUE2QkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUExQko7QUE0Qkk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQTFCUjtBQTRCSTtFQUNJLHFDQUFBO0FBMUJSO0FBNEJJO0VBQ0ksc0NBQUE7QUExQlI7QUE4QkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUEzQko7QUE2Qkk7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUEzQlI7QUE4Qkk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FBNUJSO0FBZ0NBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBN0JKO0FBK0JBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQTVCSiIsImZpbGUiOiJyYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgIC8vXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICAuY2FyZF9kaXYge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgIC5yZXN0b19kZXRhaWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAuYmFja19pbWFnZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlc19uYW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZXNfbG9jYXRpb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9yZGVyX2lkIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcblxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2RpdjIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIC5wZXJzb25hbF9kZXRhaWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlc19uYW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vcmRlcl9kZXRhaWwge1xuICAgICAgICAgICAgLmhlYWRfZ3JheSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaXplIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaXplMSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbWFsbF9sYmwyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC50aXRsZXMge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmRlc2NfZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC5ib3JkZXJfYm90dG9tIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAuc3RvcmVOYW1lIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAucmlwcGxlLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pdGVtcyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbXNzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlwcGxlLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mbGV4X2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLy8gaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAudmFsdWVzIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaHJfbGluZV9kaXYge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICB9XG5cbiAgICAudHJhY2tpbmdfZGl2IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI0ZBRkFGQTtcblxuICAgICAgICAubGVmdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgLmxpbmVfZGl2IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGluZV9kaXZfZGFya2dyYXkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfZ3JheSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9kYXJrZ3JheSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGM3Y2U7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9yZWQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG5cbiAgICAgICAgICAgIC5saW5lX2RpdiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9ncmF5IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2M4YzdjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfcmVkIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9kYXJrZ3JheSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjQzhDN0NFO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnRuX2RpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgIH1cbiAgICAucmVqZWN0IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICB9XG4gICAgLmFjY2VwdCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbn1cblxuLnN0YXR1c19kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxufVxuXG4uZ3JlZW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5yZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4iXX0= */");

/***/ }),

/***/ "oQQC":
/*!***************************************************!*\
  !*** ./src/app/pages/rate/rate-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatePageRoutingModule", function() { return RatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rate.page */ "A+rc");

//



const routes = [
    {
        path: '',
        component: _rate_page__WEBPACK_IMPORTED_MODULE_3__["RatePage"]
    }
];
let RatePageRoutingModule = class RatePageRoutingModule {
};
RatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RatePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-rate-rate-module-es2015.js.map