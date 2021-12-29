(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-coupons-coupons-module"], {
    /***/
    "BNb3":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupons/coupons.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function BNb3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Cupones</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"noData\" *ngIf=\"!dummy?.length && !list?.length\" [style.backgroundImage]=\"'url(assets/nothing.jpg)'\">\n  </div>\n  <div *ngFor=\"let item of dummy\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-row *ngFor=\"let item of list\" class=\"coupons\" (click)=\"claim(item)\">\n    <ion-col size=\"12\" class=\"info\">\n      <p class=\"title\">\n        <span class=\"code\">Código: {{item.code}} </span><br>\n        <span class=\"expire\">{{expire(item.exire)}}</span><br>\n      \n      </p>\n    </ion-col>\n    <ion-badge color=\"primary\" class=\"ion-padding\" mode=\"ios\">Aplicar</ion-badge>\n  </ion-row>\n</ion-content>";
      /***/
    },

    /***/
    "CqcZ":
    /*!***********************************************!*\
      !*** ./src/app/pages/coupons/coupons.page.ts ***!
      \***********************************************/

    /*! exports provided: CouponsPage */

    /***/
    function CqcZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CouponsPage", function () {
        return CouponsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_coupons_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./coupons.page.html */
      "BNb3");
      /* harmony import */


      var _coupons_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./coupons.page.scss */
      "lUSa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/"); //


      var CouponsPage = /*#__PURE__*/function () {
        function CouponsPage(api, route, util, navCtrl) {
          _classCallCheck(this, CouponsPage);

          this.api = api;
          this.route = route;
          this.util = util;
          this.navCtrl = navCtrl;
          this.list = [];
          this.dummy = Array(10);
          this.getOffers();
        }

        _createClass(CouponsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (data) {
              // console.log(data);
              if (data && data.restId) {
                _this.restId = data.restId;
                _this.name = data.name;
                _this.total = parseFloat(data.totalPrice); // console.log(this.restId);
              } else {
                _this.dummy = [];
              }
            });
          }
        }, {
          key: "getOffers",
          value: function getOffers() {
            var _this2 = this;

            this.api.get('offers').then(function (data) {
              _this2.dummy = []; // console.log('list=====>', data);

              _this2.list = [];

              if (data && data.status === 200 && data.data.length) {
                var currnetDate = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
                data.data.forEach(function (element) {
                  // console.log(moment(element.expire).isAfter(currnetDate));
                  if (element && element.status === '1' && moment__WEBPACK_IMPORTED_MODULE_5__(element.expire).isAfter(currnetDate)) {
                    // console.log('yes=>', element);
                    element.available = element.available.split(',');

                    _this2.list.push(element); // console.log("elemento?",element)

                  }
                }); // this.list = data;
              }
            })["catch"](function (error) {
              _this2.dummy = []; // console.log(error);
            });
          }
        }, {
          key: "claim",
          value: function claim(item) {
            // console.log("elemento2?",item);
            // console.log(this.restId);
            if (item && item.available && item.available.length) {
              // console.log("EXPIRACION?",item.available)
              var data = item.available.includes(this.restId); // console.log(data);
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
        }, {
          key: "expire",
          value: function expire(date) {
            return moment__WEBPACK_IMPORTED_MODULE_5__(date).format('llll');
          }
        }]);

        return CouponsPage;
      }();

      CouponsPage.ctorParameters = function () {
        return [{
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }];
      };

      CouponsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-coupons',
        template: _raw_loader_coupons_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_coupons_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]])], CouponsPage);
      /***/
    },

    /***/
    "lUSa":
    /*!*************************************************!*\
      !*** ./src/app/pages/coupons/coupons.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function lUSa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n\n.coupons {\n  border-bottom: 1px solid lightgray;\n}\n\n.coupons .info .title {\n  margin: 0px;\n  font-weight: bold;\n}\n\n.coupons .info .title .code {\n  font-weight: normal;\n  color: var(--ion-color-primary);\n}\n\n.coupons .info .title .expire {\n  font-size: 0.8rem;\n  color: gray;\n}\n\n.coupons .info .title .desc {\n  font-size: 0.8rem;\n  color: gray;\n}\n\n.coupons .btns {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvdXBvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUVBO0VBQ0ksa0NBQUE7QUFDSjs7QUFDUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNaOztBQUFZO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtBQUVoQjs7QUFBWTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQUVoQjs7QUFBWTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQUVoQjs7QUFFSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBUiIsImZpbGUiOiJjb3Vwb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgIC8vXG4ubm9EYXRhIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xufVxuLmNvdXBvbnMge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgLmluZm8ge1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIC5jb2RlIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZXhwaXJlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNjIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnRucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "oJaD":
    /*!*************************************************!*\
      !*** ./src/app/pages/coupons/coupons.module.ts ***!
      \*************************************************/

    /*! exports provided: CouponsPageModule */

    /***/
    function oJaD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CouponsPageModule", function () {
        return CouponsPageModule;
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


      var _coupons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./coupons-routing.module */
      "vCrI");
      /* harmony import */


      var _coupons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./coupons.page */
      "CqcZ"); //


      var CouponsPageModule = function CouponsPageModule() {
        _classCallCheck(this, CouponsPageModule);
      };

      CouponsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _coupons_routing_module__WEBPACK_IMPORTED_MODULE_5__["CouponsPageRoutingModule"]],
        declarations: [_coupons_page__WEBPACK_IMPORTED_MODULE_6__["CouponsPage"]]
      })], CouponsPageModule);
      /***/
    },

    /***/
    "vCrI":
    /*!*********************************************************!*\
      !*** ./src/app/pages/coupons/coupons-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: CouponsPageRoutingModule */

    /***/
    function vCrI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CouponsPageRoutingModule", function () {
        return CouponsPageRoutingModule;
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


      var _coupons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./coupons.page */
      "CqcZ"); //


      var routes = [{
        path: '',
        component: _coupons_page__WEBPACK_IMPORTED_MODULE_3__["CouponsPage"]
      }];

      var CouponsPageRoutingModule = function CouponsPageRoutingModule() {
        _classCallCheck(this, CouponsPageRoutingModule);
      };

      CouponsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CouponsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-coupons-coupons-module-es5.js.map