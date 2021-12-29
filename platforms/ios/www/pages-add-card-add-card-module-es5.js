(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-card-add-card-module"], {
    /***/
    "2bq6":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function bq6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.translate('Add New Card')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"inputType\">\n    <ion-input type=\"email\" [placeholder]=\"util.translate('Email address')\" [(ngModel)]=\"email\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-input type=\"number\" [placeholder]=\"util.translate('Card Number')\" [(ngModel)]=\"cnumber\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-input type=\"text\" [placeholder]=\"util.translate('Card Holder Name')\" [(ngModel)]=\"cname\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-input type=\"password\" [placeholder]=\"util.translate('CVC')\" [(ngModel)]=\"cvc\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-datetime [min]=\"minStartDate()\" [max]=\"getMaxDate()\" display-format=\"MM/YYYY\" [(ngModel)]=\"date\"\n      placeholder=\"MM/YYYY\">\n    </ion-datetime>\n  </div>\n\n  <ion-button expand=\"full\" color=\"primary\" class=\"btn_addcard\" (click)=\"addcard()\">{{util.translate('Add Card')}}\n  </ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "3ONh":
    /*!***************************************************!*\
      !*** ./src/app/pages/add-card/add-card.module.ts ***!
      \***************************************************/

    /*! exports provided: AddCardPageModule */

    /***/
    function ONh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function () {
        return AddCardPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-card-routing.module */
      "tF5+");
      /* harmony import */


      var _add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-card.page */
      "kgbJ"); //


      var AddCardPageModule = function AddCardPageModule() {
        _classCallCheck(this, AddCardPageModule);
      };

      AddCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCardPageRoutingModule"]],
        declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
      })], AddCardPageModule);
      /***/
    },

    /***/
    "T2SW":
    /*!***************************************************!*\
      !*** ./src/app/pages/add-card/add-card.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function T2SW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inputType {\n  margin-bottom: 10px;\n  padding: 0px 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n}\n\nion-datetime {\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZC1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtBQUFKOztBQUdBO0VBQ0ksb0JBQUE7QUFBSiIsImZpbGUiOiJhZGQtY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAvL1xuLmlucHV0VHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtM3B4IHJnYmEoMzAsIDk4LCAyNTUsIDAuMyk7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4uYnRuX2FkZGNhcmQge1xufVxuIl19 */";
      /***/
    },

    /***/
    "kgbJ":
    /*!*************************************************!*\
      !*** ./src/app/pages/add-card/add-card.page.ts ***!
      \*************************************************/

    /*! exports provided: AddCardPage */

    /***/
    function kgbJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCardPage", function () {
        return AddCardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_card_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-card.page.html */
      "2bq6");
      /* harmony import */


      var _add_card_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-card.page.scss */
      "T2SW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__); //


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
              // console.log('add new card');
              var param = {
                'card[number]': this.cnumber,
                'card[exp_month]': month,
                'card[exp_year]': year,
                'card[cvc]': this.cvc
              };
              this.util.show();
              this.api.externalPost('https://api.stripe.com/v1/tokens', param, this.util.stripe).subscribe(function (data) {
                // console.log(data);
                if (data && data.id) {
                  // this.token = data.id;
                  var newCardInfo = {
                    source: data.id
                  };

                  _this.api.externalPost('https://api.stripe.com/v1/customers/' + _this.util.userInfo.stripe_key + '/sources', newCardInfo, _this.util.stripe).subscribe(function (data) {
                    // console.log('new card addedd', data);
                    _this.util.hide();

                    _this.back();
                  }, function (error) {
                    // console.log('error in new card', error);
                    _this.util.hide();
                  });
                } else {
                  _this.util.hide();
                }
              }, function (error) {
                // console.log(error);
                _this.util.hide(); // console.log();


                if (error && error.error && error.error.error && error.error.error.message) {
                  _this.util.errorToast(error.error.error.message);

                  return false;
                }

                _this.util.errorToast('Algo ha ido mal');
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
                // console.log(data);
                if (data && data.id) {
                  // this.token = data.id;
                  var customer = {
                    description: 'Customer for food app',
                    source: data.id,
                    email: _this.email
                  };

                  _this.api.externalPost('https://api.stripe.com/v1/customers', customer, _this.util.stripe).subscribe(function (customer) {
                    // console.log(customer);
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
                    _this.util.hide(); // console.log();


                    if (error && error.error && error.error.error && error.error.error.message) {
                      _this.util.showErrorAlert(error.error.error.message);

                      return false;
                    }

                    _this.util.errorToast('Algo ha ido mal');
                  });
                } else {
                  _this.util.hide();
                }
              }, function (error) {
                // console.log(error);
                _this.util.hide(); // console.log();


                if (error && error.error && error.error.error && error.error.error.message) {
                  _this.util.showErrorAlert(error.error.error.message);

                  return false;
                }

                _this.util.errorToast('Algo ha ido mal');
              });
            }
          }
        }, {
          key: "updateUser",
          value: function updateUser(param) {
            var _this2 = this;

            this.util.show(this.util.translate('updating...'));
            this.api.post('users/edit_profile', param).then(function (data) {
              _this2.util.hide(); // console.log(data);


              var getParam = {
                id: localStorage.getItem('uid')
              };

              _this2.api.post('users/getById', getParam).then(function (data) {
                // console.log('user info=>', data);
                if (data && data.status === 200 && data.data && data.data.length) {
                  _this2.util.userInfo = data.data[0];

                  _this2.navCtrl.back();
                } else {
                  _this2.navCtrl.back();
                }
              }, function (error) {// console.log(error);
              });
            }, function (error) {
              _this2.util.hide(); // console.log(error);


              _this2.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "getMaxDate",
          value: function getMaxDate() {
            return moment__WEBPACK_IMPORTED_MODULE_7__().add('50', 'years').format('YYYY-MM-DD');
          }
        }, {
          key: "minStartDate",
          value: function minStartDate() {
            return moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD');
          }
        }]);

        return AddCardPage;
      }();

      AddCardPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
        }];
      };

      AddCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-card',
        template: _raw_loader_add_card_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_card_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]])], AddCardPage);
      /***/
    },

    /***/
    "tF5+":
    /*!***********************************************************!*\
      !*** ./src/app/pages/add-card/add-card-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: AddCardPageRoutingModule */

    /***/
    function tF5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCardPageRoutingModule", function () {
        return AddCardPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _add_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-card.page */
      "kgbJ"); //


      var routes = [{
        path: '',
        component: _add_card_page__WEBPACK_IMPORTED_MODULE_3__["AddCardPage"]
      }];

      var AddCardPageRoutingModule = function AddCardPageRoutingModule() {
        _classCallCheck(this, AddCardPageRoutingModule);
      };

      AddCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddCardPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-add-card-add-card-module-es5.js.map