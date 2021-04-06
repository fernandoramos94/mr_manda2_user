function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-card-add-card-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddCardAddCardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.translate('Add New Card')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"inputType\">\n    <ion-input type=\"email\" [placeholder]=\"util.translate('Email address')\" [(ngModel)]=\"email\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-input type=\"number\" [placeholder]=\"util.translate('Card Number')\" [(ngModel)]=\"cnumber\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-input type=\"text\" [placeholder]=\"util.translate('Card Holder Name')\" [(ngModel)]=\"cname\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-input type=\"password\" [placeholder]=\"util.translate('CVC')\" [(ngModel)]=\"cvc\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-datetime [min]=\"minStartDate()\" [max]=\"getMaxDate()\" display-format=\"MM/YYYY\" [(ngModel)]=\"date\"\n      placeholder=\"MM/YYYY\">\n    </ion-datetime>\n  </div>\n\n  <ion-button expand=\"full\" color=\"primary\" class=\"btn_addcard\" (click)=\"addcard()\">{{util.translate('Add Card')}}\n  </ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/add-card/add-card-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/add-card/add-card-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddCardPageRoutingModule */

  /***/
  function srcAppPagesAddCardAddCardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCardPageRoutingModule", function () {
      return AddCardPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _add_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-card.page */
    "./src/app/pages/add-card/add-card.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var routes = [{
      path: '',
      component: _add_card_page__WEBPACK_IMPORTED_MODULE_3__["AddCardPage"]
    }];

    var AddCardPageRoutingModule = function AddCardPageRoutingModule() {
      _classCallCheck(this, AddCardPageRoutingModule);
    };

    AddCardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddCardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/add-card/add-card.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/add-card/add-card.module.ts ***!
    \***************************************************/

  /*! exports provided: AddCardPageModule */

  /***/
  function srcAppPagesAddCardAddCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function () {
      return AddCardPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-card-routing.module */
    "./src/app/pages/add-card/add-card-routing.module.ts");
    /* harmony import */


    var _add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-card.page */
    "./src/app/pages/add-card/add-card.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AddCardPageModule = function AddCardPageModule() {
      _classCallCheck(this, AddCardPageModule);
    };

    AddCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCardPageRoutingModule"]],
      declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
    })], AddCardPageModule);
    /***/
  },

  /***/
  "./src/app/pages/add-card/add-card.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/add-card/add-card.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddCardAddCardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.inputType {\n  margin-bottom: 10px;\n  padding: 0px 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n}\nion-datetime {\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNhcmQvYWRkLWNhcmQucGFnZS5zY3NzIiwiL1VzZXJzL2FsZWphbmRyb2RpYXovRGVza3RvcC9URUxPIDIuMC9UZWxvIFVzdWFyaW8vc3JjL2FwcC9wYWdlcy9hZGQtY2FyZC9hZGQtY2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0RBQUE7QURFSjtBQ0NBO0VBQ0ksb0JBQUE7QURFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1jYXJkL2FkZC1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmlucHV0VHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtM3B4IHJnYmEoMzAsIDk4LCAyNTUsIDAuMyk7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmlucHV0VHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtM3B4IHJnYmEoMzAsIDk4LCAyNTUsIDAuMyk7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4uYnRuX2FkZGNhcmQge1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/add-card/add-card.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/add-card/add-card.page.ts ***!
    \*************************************************/

  /*! exports provided: AddCardPage */

  /***/
  function srcAppPagesAddCardAddCardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCardPage", function () {
      return AddCardPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AddCardPage = /*#__PURE__*/function () {
      function AddCardPage(navCtrl, util, api) {
        _classCallCheck(this, AddCardPage);

        this.navCtrl = navCtrl;
        this.util = util;
        this.api = api;
        this.cnumber = '';
        this.cname = '';
        this.cvc = '';
        this.date = '';
        this.email = '';
      }

      _createClass(AddCardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "addcard",
        value: function addcard() {
          var _this = this;

          if (this.email === '' || this.cname === '' || this.cnumber === '' || this.cvc === '' || this.date === '') {
            // this.util.showToast('All Fields are required', 'danger', 'bottom');
            this.util.showToast(this.util.translate('All Fields are required'), 'danger', 'bottom');
            return false;
          }

          var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

          if (!emailfilter.test(this.email)) {
            this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
            return false;
          }

          var year = this.date.split('-')[0];
          var month = this.date.split('-')[1];

          if (this.util.userInfo && this.util.userInfo.stripe_key && this.util.userInfo.stripe_key !== '') {
            console.log('add new card');
            var param = {
              'card[number]': this.cnumber,
              'card[exp_month]': month,
              'card[exp_year]': year,
              'card[cvc]': this.cvc
            };
            this.util.show();
            this.api.externalPost('https://api.stripe.com/v1/tokens', param, this.util.stripe).subscribe(function (data) {
              console.log(data);

              if (data && data.id) {
                // this.token = data.id;
                var newCardInfo = {
                  source: data.id
                };

                _this.api.externalPost('https://api.stripe.com/v1/customers/' + _this.util.userInfo.stripe_key + '/sources', newCardInfo, _this.util.stripe).subscribe(function (data) {
                  console.log('new card addedd', data);

                  _this.util.hide();

                  _this.back();
                }, function (error) {
                  console.log('error in new card', error);

                  _this.util.hide();
                });
              } else {
                _this.util.hide();
              }
            }, function (error) {
              console.log(error);

              _this.util.hide();

              console.log();

              if (error && error.error && error.error.error && error.error.error.message) {
                _this.util.errorToast(error.error.error.message);

                return false;
              }

              _this.util.errorToast(_this.util.translate('Something went wrong'));
            });
          } else {
            var _param = {
              'card[number]': this.cnumber,
              'card[exp_month]': month,
              'card[exp_year]': year,
              'card[cvc]': this.cvc
            };
            this.util.show();
            this.api.externalPost('https://api.stripe.com/v1/tokens', _param, this.util.stripe).subscribe(function (data) {
              console.log(data);

              if (data && data.id) {
                // this.token = data.id;
                var customer = {
                  description: 'Customer for food app',
                  source: data.id,
                  email: _this.email
                };

                _this.api.externalPost('https://api.stripe.com/v1/customers', customer, _this.util.stripe).subscribe(function (customer) {
                  console.log(customer);

                  _this.util.hide();

                  if (customer && customer.id) {
                    // this.cid = customer.id;
                    var cid = {
                      id: localStorage.getItem('uid'),
                      stripe_key: customer.id
                    };

                    _this.updateUser(cid);
                  }
                }, function (error) {
                  _this.util.hide();

                  console.log();

                  if (error && error.error && error.error.error && error.error.error.message) {
                    _this.util.showErrorAlert(error.error.error.message);

                    return false;
                  }

                  _this.util.errorToast(_this.util.translate('Something went wrong'));
                });
              } else {
                _this.util.hide();
              }
            }, function (error) {
              console.log(error);

              _this.util.hide();

              console.log();

              if (error && error.error && error.error.error && error.error.error.message) {
                _this.util.showErrorAlert(error.error.error.message);

                return false;
              }

              _this.util.errorToast(_this.util.translate('Something went wrong'));
            });
          }
        }
      }, {
        key: "updateUser",
        value: function updateUser(param) {
          var _this2 = this;

          this.util.show(this.util.translate('updating...'));
          this.api.post('users/edit_profile', param).then(function (data) {
            _this2.util.hide();

            console.log(data);
            var getParam = {
              id: localStorage.getItem('uid')
            };

            _this2.api.post('users/getById', getParam).then(function (data) {
              console.log('user info=>', data);

              if (data && data.status === 200 && data.data && data.data.length) {
                _this2.util.userInfo = data.data[0];

                _this2.navCtrl.back();
              } else {
                _this2.navCtrl.back();
              }
            }, function (error) {
              console.log(error);
            });
          }, function (error) {
            _this2.util.hide();

            console.log(error);

            _this2.util.errorToast(_this2.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "getMaxDate",
        value: function getMaxDate() {
          return moment__WEBPACK_IMPORTED_MODULE_5__().add('50', 'years').format('YYYY-MM-DD');
        }
      }, {
        key: "minStartDate",
        value: function minStartDate() {
          return moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
        }
      }]);

      return AddCardPage;
    }();

    AddCardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }];
    };

    AddCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-card.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-card.page.scss */
      "./src/app/pages/add-card/add-card.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]])], AddCardPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-add-card-add-card-module-es5.js.map