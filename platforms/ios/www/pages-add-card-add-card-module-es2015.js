(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-card-add-card-module"],{

/***/ "2bq6":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.translate('Add New Card')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"inputType\">\n    <ion-input type=\"email\" [placeholder]=\"util.translate('Email address')\" [(ngModel)]=\"email\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-input type=\"number\" [placeholder]=\"util.translate('Card Number')\" [(ngModel)]=\"cnumber\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-input type=\"text\" [placeholder]=\"util.translate('Card Holder Name')\" [(ngModel)]=\"cname\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-input type=\"password\" [placeholder]=\"util.translate('CVC')\" [(ngModel)]=\"cvc\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-datetime [min]=\"minStartDate()\" [max]=\"getMaxDate()\" display-format=\"MM/YYYY\" [(ngModel)]=\"date\"\n      placeholder=\"MM/YYYY\">\n    </ion-datetime>\n  </div>\n\n  <ion-button expand=\"full\" color=\"primary\" class=\"btn_addcard\" (click)=\"addcard()\">{{util.translate('Add Card')}}\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ "3ONh":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.module.ts ***!
  \***************************************************/
/*! exports provided: AddCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function() { return AddCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-card-routing.module */ "tF5+");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-card.page */ "kgbJ");

//






let AddCardPageModule = class AddCardPageModule {
};
AddCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCardPageRoutingModule"],
        ],
        declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
    })
], AddCardPageModule);



/***/ }),

/***/ "T2SW":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inputType {\n  margin-bottom: 10px;\n  padding: 0px 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n}\n\nion-datetime {\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZC1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtBQUFKOztBQUdBO0VBQ0ksb0JBQUE7QUFBSiIsImZpbGUiOiJhZGQtY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAvL1xuLmlucHV0VHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtM3B4IHJnYmEoMzAsIDk4LCAyNTUsIDAuMyk7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4uYnRuX2FkZGNhcmQge1xufVxuIl19 */");

/***/ }),

/***/ "kgbJ":
/*!*************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.ts ***!
  \*************************************************/
/*! exports provided: AddCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPage", function() { return AddCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_card_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-card.page.html */ "2bq6");
/* harmony import */ var _add_card_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-card.page.scss */ "T2SW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);



//





let AddCardPage = class AddCardPage {
    constructor(navCtrl, util, api) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.api = api;
        this.cnumber = '';
        this.cname = '';
        this.cvc = '';
        this.date = '';
        this.email = '';
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.back();
    }
    addcard() {
        if (this.email === '' || this.cname === '' || this.cnumber === '' ||
            this.cvc === '' || this.date === '') {
            // this.util.showToast('All Fields are required', 'danger', 'bottom');
            this.util.showToast(this.util.translate('All Fields are required'), 'danger', 'bottom');
            return false;
        }
        const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!(emailfilter.test(this.email))) {
            this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
            return false;
        }
        const year = this.date.split('-')[0];
        const month = this.date.split('-')[1];
        if (this.util.userInfo && this.util.userInfo.stripe_key && this.util.userInfo.stripe_key !== '') {
            // console.log('add new card');
            const param = {
                'card[number]': this.cnumber,
                'card[exp_month]': month,
                'card[exp_year]': year,
                'card[cvc]': this.cvc
            };
            this.util.show();
            this.api.externalPost('https://api.stripe.com/v1/tokens', param, this.util.stripe).subscribe((data) => {
                // console.log(data);
                if (data && data.id) {
                    // this.token = data.id;
                    const newCardInfo = {
                        source: data.id
                    };
                    this.api.externalPost('https://api.stripe.com/v1/customers/' + this.util.userInfo.stripe_key + '/sources', newCardInfo, this.util.stripe).subscribe((data) => {
                        // console.log('new card addedd', data);
                        this.util.hide();
                        this.back();
                    }, error => {
                        // console.log('error in new card', error);
                        this.util.hide();
                    });
                }
                else {
                    this.util.hide();
                }
            }, (error) => {
                // console.log(error);
                this.util.hide();
                // console.log();
                if (error && error.error && error.error.error && error.error.error.message) {
                    this.util.errorToast(error.error.error.message);
                    return false;
                }
                this.util.errorToast('Algo ha ido mal');
            });
        }
        else {
            const param = {
                'card[number]': this.cnumber,
                'card[exp_month]': month,
                'card[exp_year]': year,
                'card[cvc]': this.cvc
            };
            this.util.show();
            this.api.externalPost('https://api.stripe.com/v1/tokens', param, this.util.stripe).subscribe((data) => {
                // console.log(data);
                if (data && data.id) {
                    // this.token = data.id;
                    const customer = {
                        description: 'Customer for food app',
                        source: data.id,
                        email: this.email
                    };
                    this.api.externalPost('https://api.stripe.com/v1/customers', customer, this.util.stripe).subscribe((customer) => {
                        // console.log(customer);
                        this.util.hide();
                        if (customer && customer.id) {
                            // this.cid = customer.id;
                            const cid = {
                                id: localStorage.getItem('uid'),
                                stripe_key: customer.id
                            };
                            this.updateUser(cid);
                        }
                    }, error => {
                        this.util.hide();
                        // console.log();
                        if (error && error.error && error.error.error && error.error.error.message) {
                            this.util.showErrorAlert(error.error.error.message);
                            return false;
                        }
                        this.util.errorToast('Algo ha ido mal');
                    });
                }
                else {
                    this.util.hide();
                }
            }, (error) => {
                // console.log(error);
                this.util.hide();
                // console.log();
                if (error && error.error && error.error.error && error.error.error.message) {
                    this.util.showErrorAlert(error.error.error.message);
                    return false;
                }
                this.util.errorToast('Algo ha ido mal');
            });
        }
    }
    updateUser(param) {
        this.util.show(this.util.translate('updating...'));
        this.api.post('users/edit_profile', param).then((data) => {
            this.util.hide();
            // console.log(data);
            const getParam = {
                id: localStorage.getItem('uid')
            };
            this.api.post('users/getById', getParam).then((data) => {
                // console.log('user info=>', data);
                if (data && data.status === 200 && data.data && data.data.length) {
                    this.util.userInfo = data.data[0];
                    this.navCtrl.back();
                }
                else {
                    this.navCtrl.back();
                }
            }, error => {
                // console.log(error);
            });
        }, error => {
            this.util.hide();
            // console.log(error);
            this.util.errorToast('Algo ha ido mal');
        });
    }
    getMaxDate() {
        return moment__WEBPACK_IMPORTED_MODULE_7__().add('50', 'years').format('YYYY-MM-DD');
    }
    minStartDate() {
        return moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD');
    }
};
AddCardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] }
];
AddCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-card',
        template: _raw_loader_add_card_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_card_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]])
], AddCardPage);



/***/ }),

/***/ "tF5+":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-card/add-card-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddCardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageRoutingModule", function() { return AddCardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-card.page */ "kgbJ");

//



const routes = [
    {
        path: '',
        component: _add_card_page__WEBPACK_IMPORTED_MODULE_3__["AddCardPage"]
    }
];
let AddCardPageRoutingModule = class AddCardPageRoutingModule {
};
AddCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddCardPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-add-card-add-card-module-es2015.js.map