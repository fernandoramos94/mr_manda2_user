(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "F4UR":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function F4UR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "aTZN");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "bP1B"); //


      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "H+1c":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function H1c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  --box-shadow: none;\n}\n\nion-footer {\n  --box-shadow: none;\n}\n\nion-toolbar {\n  border-color: none !important;\n}\n\nion-toolbar ion-title {\n  --color: white;\n}\n\n.login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 20%;\n  margin-bottom: 20px;\n}\n\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n\n.login-logo .subTitle {\n  margin: 0px;\n  font-size: 1rem;\n}\n\n.frgTag {\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n\n.btn_class {\n  color: white;\n  height: 50px;\n  --border-radius: 5px;\n}\n\n.login-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-list {\n  --ion-background-color: transparent;\n  margin: 0px;\n}\n\nion-item {\n  --ion-background-color: #f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n\n.createAcc {\n  text-align: center;\n}\n\n.createAcc .registerTag {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.btns {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0px;\n}\n\n.btns .flagActive {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-primary);\n  margin: 0px 10px;\n}\n\n.btns .flagDeactive {\n  height: 45px;\n  width: 45px;\n  margin: 0px 10px;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksNkJBQUE7QUFFSjs7QUFESTtFQUNJLGNBQUE7QUFHUjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBRkk7RUFDSSx1QkFBQTtBQUlSOztBQUZJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBSVI7O0FBRkk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUlSOztBQURBO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtBQUlKOztBQUZBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxtQ0FBQTtFQUNBLFdBQUE7QUFRSjs7QUFOQTtFQUNJLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQVNKOztBQU5BO0VBQ0ksa0JBQUE7QUFTSjs7QUFSSTtFQUNJLCtCQUFBO0VBRUEsaUJBQUE7QUFTUjs7QUFOQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVNKOztBQVJJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUFVUjs7QUFSSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBVVIiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgLy9cbmlvbi1oZWFkZXIge1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbmlvbi1mb290ZXIge1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbmlvbi10b29sYmFyIHtcbiAgICBib3JkZXItY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgICBpb24tdGl0bGUge1xuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG4ubG9naW4tbG9nbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICByaWdodDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAubG9nb19pY29uIHtcbiAgICAgICAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sb2dpbi1uYW1lIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgICAuc3ViVGl0bGUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbn1cbi5mcmdUYWcge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uYnRuX2NsYXNzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuLmxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5pb24tbGlzdCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5pb24taXRlbSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY3JlYXRlQWNjIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLnJlZ2lzdGVyVGFnIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4uYnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgLmZsYWdBY3RpdmUge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICB9XG4gICAgLmZsYWdEZWFjdGl2ZSB7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "TuYN":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function TuYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n <ion-header no-shadow no-border>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"assets/icon.png\" class=\"logo_icon\" alt=\"foodies\">\n    <p class=\"login-name\">Iniciar sesión</p>\n\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate *ngIf=\"util.user_login ==='0'\">\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.email\" type=\"email\" [placeholder]=\"('Correo')\" name=\"email\"\n          #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          Correo es requerido\n        </p>\n      </ion-text>\n\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" [placeholder]=\"('Contraseña')\"\n          type=\"password\" #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Contraseña es requerida\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding\">\n        <p class=\"frgTag\" (click)=\"resetPass()\">Olvidaste tu contraseña?</p>\n        <ion-button class=\"btn_class\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\" [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\">INICIAR</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n  <form #loginForm=\"ngForm\" novalidate *ngIf=\"util.user_login ==='1'\">\n    <ion-list lines=\"none\">\n      <ion-row>\n        <ion-col size=\"3\" (click)=\"openCountry()\">\n          <ion-item lines=\"none\">\n            <ion-input style=\"font-size: 12px;\" [(ngModel)]=\"mobile.ccCode\" disabled=\"true\" type=\"text\" name=\"ccode\"\n              #ccode=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-item lines=\"none\">\n            <ion-input [(ngModel)]=\"mobile.phone\" type=\"number\" [placeholder]=\"('Teléfono')\"\n              name=\"mobile\" #phone=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n          <ion-text color=\"danger\">\n            <p [hidden]=\"phone.valid || submitted == false\" class=\"ion-padding-start\">\n              Teléfono\n            </p>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"mobile.password\" name=\"password\" [placeholder]=\"('Contraseña')\"\n          type=\"password\" #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Contraseña\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding\">\n        <p class=\"frgTag\" (click)=\"resetPass()\">Olvidaste tu contraseña?</p>\n        <ion-button class=\"btn_class\" (click)=\"onPhoneLogin(loginForm)\" type=\"submit\" expand=\"block\"\n          [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\"> INICIAR</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n\n  <form #loginForm=\"ngForm\" novalidate *ngIf=\"util.user_login ==='2'\">\n    <ion-list lines=\"none\">\n      <ion-row>\n        <ion-col size=\"3\" (click)=\"openCountry()\">\n          <ion-item lines=\"none\">\n            <ion-input style=\"font-size: 12px;\" [(ngModel)]=\"mobileLogin.ccCode\" disabled=\"true\" type=\"text\"\n              name=\"ccode\" #ccode=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-item lines=\"none\">\n            <ion-input [(ngModel)]=\"mobileLogin.phone\" type=\"number\" [placeholder]=\"('Teléfono')\"\n              name=\"mobile\" #phone=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n          <ion-text color=\"danger\">\n            <p [hidden]=\"phone.valid || submitted == false\" class=\"ion-padding-start\">\n             Teléfono es requerido\n            </p>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n    </ion-list>\n\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding\">\n        <p class=\"frgTag\" (click)=\"resetPass()\">Olvidaste tu contraseña?</p>\n        <ion-button class=\"btn_class\" (click)=\"onOTPLogin(loginForm)\" type=\"submit\" expand=\"block\" [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\"> INICIAR</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n  <p class=\"createAcc\" (click)=\"register()\">Aún no tienes una cuenta?\n    <span class=\"registerTag\">Registrar</span>\n  </p>\n\n</ion-content>";
      /***/
    },

    /***/
    "aTZN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function aTZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "bP1B"); //


      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "bP1B":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function bP1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "TuYN");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "H+1c");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");
      /* harmony import */


      var _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../select-country/select-country.page */
      "hxji");
      /* harmony import */


      var _verify_verify_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../verify/verify.page */
      "TCp9"); //


      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, api, util, navCtrl, oneSignal, menuController, modalController, modalCtrl) {
          _classCallCheck(this, LoginPage);

          this.router = router;
          this.api = api;
          this.util = util;
          this.navCtrl = navCtrl;
          this.oneSignal = oneSignal;
          this.menuController = menuController;
          this.modalController = modalController;
          this.modalCtrl = modalCtrl;
          this.login = {
            email: '',
            password: ''
          };
          this.mobile = {
            ccCode: '',
            phone: '',
            password: ''
          };
          this.mobileLogin = {
            ccCode: '',
            phone: ''
          };
          this.submitted = false;
          this.isLogin = false; // console.log('--------------- user login', this.util.user_login);

          this.mobile.ccCode = '+91';
          this.mobileLogin.ccCode = '+91';
          this.oneSignal.getIds().then(function (data) {
            // console.log('iddddd==========', data);
            localStorage.setItem('fcm', data.userId);
          });
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLogin",
          value: function onLogin(form) {
            var _this = this;

            // console.log('form', form);
            this.submitted = true;

            if (form.valid) {
              var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

              if (!emailfilter.test(this.login.email)) {
                this.util.showToast('Por favor ingresa un correo válido', 'danger', 'bottom');
                return false;
              } // console.log('login');


              this.isLogin = true;
              this.api.post('users/login', this.login).then(function (data) {
                _this.isLogin = false; // console.log(data);

                if (data && data.status === 200) {
                  if (data && data.data && data.data.type === 'user') {
                    if (data.data.status === '1') {
                      localStorage.setItem('uid', data.data.id);
                      _this.util.userInfo = data.data;
                      var fcm = localStorage.getItem('fcm');

                      if (fcm && fcm !== null && fcm !== 'null') {
                        var updateParam = {
                          id: data.data.id,
                          fcm_token: fcm
                        };

                        _this.api.post('users/edit_profile', updateParam).then(function (data) {// console.log('user info=>', data);
                        }, function (error) {// console.log(error);
                        });
                      }

                      var favParam = {
                        id: data.data.id
                      };

                      _this.api.post('favourite/getByUid', favParam).then(function (data) {
                        // console.log('fav data', data);
                        if (data && data.status === 200 && data.data.length > 0) {
                          _this.util.haveFav = true;

                          try {
                            _this.util.favIds = data.data[0].ids.split(',');
                          } catch (error) {// console.log('eroor', error);
                          }
                        } else {
                          _this.util.haveFav = false;
                        }
                      }, function (error) {
                        _this.util.haveFav = false; // console.log('fav error', error);
                      });

                      _this.navCtrl.navigateRoot(['']);
                    } else {
                      // console.log('not valid');
                      sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                        title: _this.util.translate('Error'),
                        text: 'Por favor contacta al administrador',
                        icon: 'error',
                        showConfirmButton: true,
                        showCancelButton: true,
                        confirmButtonText: _this.util.translate('Need Help?'),
                        backdrop: false,
                        background: 'white'
                      }).then(function (status) {
                        if (status && status.value) {
                          // localStorage.setItem('helpId', data.data.id);
                          // this.router.navigate(['inbox']);
                          var inboxParam = {
                            queryParams: {
                              id: 0,
                              name: 'Support',
                              uid: data.data.id
                            }
                          };

                          _this.router.navigate(['inbox'], inboxParam);
                        }
                      });
                    }
                  } else {
                    _this.util.errorToast('Usuario no válido');

                    _this.login.email = '';
                    _this.login.password = '';
                  }
                } else if (data && data.status === 500) {
                  _this.util.errorToast(data.data.message);
                } else {
                  _this.util.errorToast('Algo ha ido mal');
                }
              }, function (error) {
                // console.log(error);
                _this.isLogin = false;

                _this.util.errorToast('Algo ha ido mal');
              });
            }
          }
        }, {
          key: "onPhoneLogin",
          value: function onPhoneLogin(form) {
            var _this2 = this;

            // console.log('form', form, this.mobile);
            // console.log(this.mobile.ccCode + this.mobile.phone);
            this.submitted = true;

            if (form.valid) {
              var param = {
                cc: this.mobile.ccCode,
                mobile: this.mobile.phone,
                password: this.mobile.password
              };
              this.isLogin = true;
              this.api.post('users/loginWithPhoneAndPassword', param).then(function (data) {
                _this2.isLogin = false; // console.log(data);

                if (data && data.status === 200) {
                  if (data && data.data && data.data.type === 'user') {
                    if (data.data.status === '1') {
                      localStorage.setItem('uid', data.data.id);
                      _this2.util.userInfo = data.data;
                      var fcm = localStorage.getItem('fcm');

                      if (fcm && fcm !== null && fcm !== 'null') {
                        var updateParam = {
                          id: data.data.id,
                          fcm_token: fcm
                        };

                        _this2.api.post('users/edit_profile', updateParam).then(function (data) {// console.log('user info=>', data);
                        }, function (error) {// console.log(error);
                        });
                      }

                      var favParam = {
                        id: data.data.id
                      };

                      _this2.api.post('favourite/getByUid', favParam).then(function (data) {
                        // console.log('fav data', data);
                        if (data && data.status === 200 && data.data.length > 0) {
                          _this2.util.haveFav = true;

                          try {
                            _this2.util.favIds = data.data[0].ids.split(',');
                          } catch (error) {// console.log('eroor', error);
                          }
                        } else {
                          _this2.util.haveFav = false;
                        }
                      }, function (error) {
                        _this2.util.haveFav = false; // console.log('fav error', error);
                      });

                      _this2.navCtrl.navigateRoot(['']);
                    } else {
                      // console.log('not valid');
                      sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                        title: _this2.util.translate('Error'),
                        text: 'Por favor contacta al administrador',
                        icon: 'error',
                        showConfirmButton: true,
                        showCancelButton: true,
                        confirmButtonText: _this2.util.translate('Need Help?'),
                        backdrop: false,
                        background: 'white'
                      }).then(function (status) {
                        if (status && status.value) {
                          // localStorage.setItem('helpId', data.data.id);
                          // this.router.navigate(['inbox']);
                          var inboxParam = {
                            queryParams: {
                              id: 0,
                              name: 'Support',
                              uid: data.data.id
                            }
                          };

                          _this2.router.navigate(['inbox'], inboxParam);
                        }
                      });
                    }
                  } else {
                    _this2.util.errorToast('Usuario no válido');

                    _this2.login.email = '';
                    _this2.login.password = '';
                  }
                } else if (data && data.status === 500) {
                  _this2.util.errorToast(data.data.message);
                } else {
                  _this2.util.errorToast('Algo ha ido mal');
                }
              }, function (error) {
                // console.log(error);
                _this2.isLogin = false;

                _this2.util.errorToast('Algo ha ido mal');
              })["catch"](function (error) {
                // console.log(error);
                _this2.isLogin = false;

                _this2.util.errorToast('Algo ha ido mal');
              });
            }
          }
        }, {
          key: "onOTPLogin",
          value: function onOTPLogin(form) {
            var _this3 = this;

            // console.log(this.mobileLogin);
            this.submitted = true;

            if (form.valid) {
              var param = {
                mobile: this.mobileLogin.phone,
                cc: this.mobileLogin.ccCode
              };
              this.isLogin = true;
              this.api.post('users/checkMobileNumber', param).then(function (data) {
                _this3.isLogin = false; // console.log(data);

                if (data && data.status === 200) {
                  // console.log('open modal');
                  _this3.openModal(data.data.id);
                } else if (data && data.status === 500) {
                  _this3.util.errorToast(data.data.message);
                } else {
                  _this3.util.errorToast('Algo ha ido mal');
                }
              }, function (error) {
                // console.log(error);
                _this3.isLogin = false;

                _this3.util.errorToast('Algo ha ido mal');
              })["catch"](function (error) {
                // console.log(error);
                _this3.isLogin = false;

                _this3.util.errorToast('Algo ha ido mal');
              });
            }
          }
        }, {
          key: "openModal",
          value: function openModal(uid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_11__["VerifyPage"],
                        componentProps: {
                          code: this.mobileLogin.ccCode,
                          phone: this.mobileLogin.phone
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        // console.log(data);
                        if (data && data.role === 'ok') {
                          var param = {
                            id: uid
                          };

                          _this4.api.post('users/getById', param).then(function (data) {
                            // console.log('user data', data);
                            if (data && data.status === 200 && data.data && data.data.length && data.data[0].type === 'user') {
                              _this4.util.userInfo = data.data[0];

                              if (data && data.data && data.data[0].type === 'user') {
                                if (data.data[0].status === '1') {
                                  localStorage.setItem('uid', uid);
                                  var fcm = localStorage.getItem('fcm');

                                  if (fcm && fcm !== null && fcm !== 'null') {
                                    var updateParam = {
                                      id: uid,
                                      fcm_token: fcm
                                    };

                                    _this4.api.post('users/edit_profile', updateParam).then(function (data) {// console.log('user info=>', data);
                                    }, function (error) {// console.log(error);
                                    });
                                  }

                                  var favParam = {
                                    id: uid
                                  };

                                  _this4.api.post('favourite/getByUid', favParam).then(function (data) {
                                    // console.log('fav data', data);
                                    if (data && data.status === 200 && data.data.length > 0) {
                                      _this4.util.haveFav = true;

                                      try {
                                        _this4.util.favIds = data.data[0].ids.split(',');
                                      } catch (error) {// console.log('eroor', error);
                                      }
                                    } else {
                                      _this4.util.haveFav = false;
                                    }
                                  }, function (error) {
                                    _this4.util.haveFav = false; // console.log('fav error', error);
                                  });

                                  _this4.navCtrl.navigateRoot(['']);
                                } else {
                                  // console.log('not valid');
                                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                                    title: _this4.util.translate('Error'),
                                    text: 'Por favor contacta al administrador',
                                    icon: 'error',
                                    showConfirmButton: true,
                                    showCancelButton: true,
                                    confirmButtonText: _this4.util.translate('Need Help?'),
                                    backdrop: false,
                                    background: 'white'
                                  }).then(function (status) {
                                    if (status && status.value) {
                                      var inboxParam = {
                                        queryParams: {
                                          id: 0,
                                          name: 'Support',
                                          uid: uid
                                        }
                                      };

                                      _this4.router.navigate(['inbox'], inboxParam);
                                    }
                                  });
                                }
                              } else {
                                _this4.util.errorToast('Usuario no válido');

                                _this4.login.email = '';
                                _this4.login.password = '';
                              }
                            } else if (data && data.status === 500) {
                              _this4.util.errorToast(data.data.message);
                            } else {
                              _this4.util.errorToast('Algo ha ido mal');
                            }
                          }, function (error) {
                            localStorage.removeItem('uid'); // console.log(error);
                          });
                        }
                      });
                      modal.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "resetPass",
          value: function resetPass() {
            this.router.navigate(['/forgot']);
          }
        }, {
          key: "register",
          value: function register() {
            this.router.navigate(['register']);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuController.enable(false);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.menuController.enable(true);
          }
        }, {
          key: "openCountry",
          value: function openCountry() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_10__["SelectCountryPage"],
                        backdropDismiss: false,
                        showBackdrop: true
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (data) {
                        // console.log(data);
                        if (data && data.role === 'selected') {
                          // console.log('ok');
                          _this5.mobile.ccCode = '+' + data.data;
                          _this5.mobileLogin.ccCode = '+' + data.data;
                        }
                      });
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map