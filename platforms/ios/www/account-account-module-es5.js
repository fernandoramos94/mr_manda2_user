(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
    /***/
    "3Bst":
    /*!*********************************************************!*\
      !*** ./src/app/pages/account/account-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: AccountPageRoutingModule */

    /***/
    function Bst(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
        return AccountPageRoutingModule;
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


      var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account.page */
      "S9xc"); //


      var routes = [{
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
      }];

      var AccountPageRoutingModule = function AccountPageRoutingModule() {
        _classCallCheck(this, AccountPageRoutingModule);
      };

      AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountPageRoutingModule);
      /***/
    },

    /***/
    "4+IK":
    /*!*************************************************!*\
      !*** ./src/app/pages/account/account.module.ts ***!
      \*************************************************/

    /*! exports provided: AccountPageModule */

    /***/
    function IK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
        return AccountPageModule;
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


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account-routing.module */
      "3Bst");
      /* harmony import */


      var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account.page */
      "S9xc"); //


      var AccountPageModule = function AccountPageModule() {
        _classCallCheck(this, AccountPageModule);
      };

      AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
      })], AccountPageModule);
      /***/
    },

    /***/
    "E4AK":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function E4AK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\" *ngIf=\"!util.appClosed\">\n\n</ion-header>\n\n\n<ion-content *ngIf=\"!util.appClosed\">\n  <div class=\"main_div\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <div class=\"user_img\" [ngStyle]=\"{'background-image':'url('+getProfile()+'),url(assets/placeholder.jpg)'}\">\n        </div>\n      </ion-col>\n      <ion-col size=\"8\">\n        <p class=\"username\">{{getName()}}</p>\n        <p class=\"email\">{{getEmail()}}</p>\n        <ion-button (click)=\"editProfile()\" shape=\"round\" size=\"small\" color=\"light\"> Editar perfil\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"options\">\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"reviews()\">\n      <ion-icon name=\"cash-outline\" slot=\"start\"></ion-icon>\n      <ion-label>Calificaciones </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"goToAddress()\">\n      <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>\n      <ion-label> Mis direcciones </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"reset()\">\n      <ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\n      <ion-label> Cambiar contraseña </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"logout()\">\n      <ion-icon name=\"power-outline\" slot=\"start\"></ion-icon>\n      <ion-label> Cerrar sesión</ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "S9xc":
    /*!***********************************************!*\
      !*** ./src/app/pages/account/account.page.ts ***!
      \***********************************************/

    /*! exports provided: AccountPage */

    /***/
    function S9xc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
        return AccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account.page.html */
      "E4AK");
      /* harmony import */


      var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account.page.scss */
      "c5PT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U"); //


      var AccountPage = /*#__PURE__*/function () {
        function AccountPage(api, router, util, navCtrl, cart) {
          _classCallCheck(this, AccountPage);

          this.api = api;
          this.router = router;
          this.util = util;
          this.navCtrl = navCtrl;
          this.cart = cart;
          this.seg_id = 1;
          this.photo = 'assets/imgs/user.png';
        }

        _createClass(AccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToAddress",
          value: function goToAddress() {
            var navData = {
              queryParams: {
                from: 'accont'
              }
            };
            this.router.navigate(['/choose-address'], navData);
          }
        }, {
          key: "changeSegment",
          value: function changeSegment(val) {
            this.seg_id = val;
          }
        }, {
          key: "goToselectRestaurants",
          value: function goToselectRestaurants() {
            this.router.navigate(['/choose-restaurant']);
          }
        }, {
          key: "editProfile",
          value: function editProfile() {
            this.router.navigate(['/edit-profile']);
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            return this.util.userInfo && this.util.userInfo.cover ? this.api.mediaURL + this.util.userInfo.cover : 'assets/user.png';
          }
        }, {
          key: "getName",
          value: function getName() {
            return this.util.userInfo && this.util.userInfo.first_name ? this.util.userInfo.first_name + ' ' + this.util.userInfo.last_name : 'Foodies';
          }
        }, {
          key: "getEmail",
          value: function getEmail() {
            return this.util.userInfo && this.util.userInfo.email ? this.util.userInfo.email : 'info@foodies.com';
          }
        }, {
          key: "orders",
          value: function orders() {
            this.navCtrl.navigateRoot(['tabs/tab2']);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.router.navigate(['forgot']);
          }
        }, {
          key: "goToAbout",
          value: function goToAbout() {
            this.navCtrl.navigateRoot(['tabs/tab4/about']);
          }
        }, {
          key: "goToContact",
          value: function goToContact() {
            this.navCtrl.navigateRoot(['tabs/tab4/contacts']);
          }
        }, {
          key: "goLangs",
          value: function goLangs() {
            this.navCtrl.navigateRoot(['tabs/tab4/languages']);
          }
        }, {
          key: "goToChats",
          value: function goToChats() {
            this.router.navigate(['chats']);
          }
        }, {
          key: "goFaqs",
          value: function goFaqs() {
            this.navCtrl.navigateRoot(['tabs/tab4/faqs']);
          }
        }, {
          key: "goHelp",
          value: function goHelp() {
            this.navCtrl.navigateRoot(['tabs/tab4/help']);
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('uid');
            this.cart.cart = [];
            this.cart.itemId = [];
            this.cart.totalPrice = 0;
            this.cart.grandTotal = 0;
            this.cart.coupon = null;
            this.cart.discount = null;
            this.util.clearKeys('cart');
            this.navCtrl.navigateRoot(['']);
          }
        }, {
          key: "reviews",
          value: function reviews() {
            // console.log('review');
            this.router.navigate(['choose-restaurant']);
          }
        }]);

        return AccountPage;
      }();

      AccountPage.ctorParameters = function () {
        return [{
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]
        }];
      };

      AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]])], AccountPage);
      /***/
    },

    /***/
    "c5PT":
    /*!*************************************************!*\
      !*** ./src/app/pages/account/account.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function c5PT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_div {\n  padding: 23px;\n  background: var(--ion-color-primary);\n}\n.main_div .menuBtn {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.main_div .menuBtn .menuIcon {\n  width: 25px;\n}\n.main_div .profilePic {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  border: 4px solid white;\n}\n.main_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_div .username {\n  margin: 0px;\n  margin-top: 10px;\n  font-size: 12px;\n  font-weight: bold;\n  color: white;\n}\n.main_div .email {\n  margin: 0px;\n  margin-bottom: 10px;\n  font-size: 10px;\n  color: white;\n}\n.options {\n  padding: 10px;\n}\n.options ion-item {\n  border-bottom: 1px solid lightgray;\n  height: 60px;\n  display: flex;\n}\n.options ion-item ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLG9DQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFDUjtBQUFRO0VBRUksV0FBQTtBQUNaO0FBRUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFBUjtBQUVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQVI7QUFFSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFBUjtBQUdJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFEUjtBQUtBO0VBQ0ksYUFBQTtBQUZKO0FBR0k7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRFI7QUFHUTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtBQURaIiwiZmlsZSI6ImFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgLy9cbi5tYWluX2RpdiB7XG4gICAgcGFkZGluZzogMjNweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLm1lbnVCdG4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAubWVudUljb24ge1xuICAgICAgICAgICAgLy8gaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2ZpbGVQaWMge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gICAgfVxuICAgIC51c2VyX2ltZyB7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC51c2VybmFtZSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmVtYWlsIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuLm9wdGlvbnMge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-account-module-es5.js.map