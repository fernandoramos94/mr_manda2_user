function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"assets/icon.png\" class=\"logo_icon\" alt=\"foodies\">\n    <p class=\"login-name\">Iniciar sesión</p>\n\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate *ngIf=\"util.user_login ==='0'\">\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.email\" type=\"email\" [placeholder]=\"('Correo')\" name=\"email\"\n          #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          Correo es requerido\n        </p>\n      </ion-text>\n\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" [placeholder]=\"('Contraseña')\"\n          type=\"password\" #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Contraseña es requerida\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding\">\n        <p class=\"frgTag\" (click)=\"resetPass()\">Olvidaste tu contraseña?</p>\n        <ion-button class=\"btn_class\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\" [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\">INICIAR</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n  <form #loginForm=\"ngForm\" novalidate *ngIf=\"util.user_login ==='1'\">\n    <ion-list lines=\"none\">\n      <ion-row>\n        <ion-col size=\"3\" (click)=\"openCountry()\">\n          <ion-item lines=\"none\">\n            <ion-input style=\"font-size: 12px;\" [(ngModel)]=\"mobile.ccCode\" disabled=\"true\" type=\"text\" name=\"ccode\"\n              #ccode=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-item lines=\"none\">\n            <ion-input [(ngModel)]=\"mobile.phone\" type=\"number\" [placeholder]=\"('Teléfono')\"\n              name=\"mobile\" #phone=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n          <ion-text color=\"danger\">\n            <p [hidden]=\"phone.valid || submitted == false\" class=\"ion-padding-start\">\n              Teléfono\n            </p>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"mobile.password\" name=\"password\" [placeholder]=\"('Contraseña')\"\n          type=\"password\" #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Contraseña\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding\">\n        <p class=\"frgTag\" (click)=\"resetPass()\">Olvidaste tu contraseña?</p>\n        <ion-button class=\"btn_class\" (click)=\"onPhoneLogin(loginForm)\" type=\"submit\" expand=\"block\"\n          [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\"> INICIAR</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n\n  <form #loginForm=\"ngForm\" novalidate *ngIf=\"util.user_login ==='2'\">\n    <ion-list lines=\"none\">\n      <ion-row>\n        <ion-col size=\"3\" (click)=\"openCountry()\">\n          <ion-item lines=\"none\">\n            <ion-input style=\"font-size: 12px;\" [(ngModel)]=\"mobileLogin.ccCode\" disabled=\"true\" type=\"text\"\n              name=\"ccode\" #ccode=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-item lines=\"none\">\n            <ion-input [(ngModel)]=\"mobileLogin.phone\" type=\"number\" [placeholder]=\"('Teléfono')\"\n              name=\"mobile\" #phone=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n          <ion-text color=\"danger\">\n            <p [hidden]=\"phone.valid || submitted == false\" class=\"ion-padding-start\">\n             Teléfono es requerido\n            </p>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n    </ion-list>\n\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding\">\n        <p class=\"frgTag\" (click)=\"resetPass()\">Olvidaste tu contraseña?</p>\n        <ion-button class=\"btn_class\" (click)=\"onOTPLogin(loginForm)\" type=\"submit\" expand=\"block\" [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\"> INICIAR</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n  <p class=\"createAcc\" (click)=\"register()\">Aún no tienes una contraseña?\n    <span class=\"registerTag\">Registrar</span>\n  </p>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");
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
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-header {\n  --box-shadow: none;\n}\nion-footer {\n  --box-shadow: none;\n}\nion-toolbar {\n  border-color: none !important;\n}\nion-toolbar ion-title {\n  --color: white;\n}\n.login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 20%;\n  margin-bottom: 20px;\n}\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n.login-logo .subTitle {\n  margin: 0px;\n  font-size: 1rem;\n}\n.frgTag {\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n.btn_class {\n  color: white;\n  height: 50px;\n  --border-radius: 5px;\n}\n.login-logo img {\n  max-width: 150px;\n}\n.list {\n  margin-bottom: 0;\n}\nion-list {\n  --ion-background-color: transparent;\n  margin: 0px;\n}\nion-item {\n  --ion-background-color: #f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n.createAcc {\n  text-align: center;\n}\n.createAcc .registerTag {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n.btns {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0px;\n}\n.btns .flagActive {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-primary);\n  margin: 0px 10px;\n}\n.btns .flagDeactive {\n  height: 45px;\n  width: 45px;\n  margin: 0px 10px;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwiL1VzZXJzL2FsZWphbmRyb2RpYXovRGVza3RvcC9URUxPIDIuMC9UZWxvIFVzdWFyaW8vc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxrQkFBQTtBREVKO0FDQUE7RUFDSSxrQkFBQTtBREdKO0FDREE7RUFDSSw2QkFBQTtBRElKO0FDSEk7RUFDSSxjQUFBO0FES1I7QUNGQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FES0o7QUNKSTtFQUNJLHVCQUFBO0FETVI7QUNKSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBRE1SO0FDSkk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBRE1SO0FDSEE7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0FETUo7QUNKQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QURPSjtBQ0xBO0VBQ0ksZ0JBQUE7QURRSjtBQ05BO0VBQ0ksZ0JBQUE7QURTSjtBQ1BBO0VBQ0ksbUNBQUE7RUFDQSxXQUFBO0FEVUo7QUNSQTtFQUNJLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBRFdKO0FDUkE7RUFDSSxrQkFBQTtBRFdKO0FDVkk7RUFDSSwrQkFBQTtFQUVBLGlCQUFBO0FEV1I7QUNSQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRFdKO0FDVkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBRFlSO0FDVkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRFlSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24taGVhZGVyIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJvcmRlci1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5sb2dpbi1sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmxvZ2luLWxvZ28gLmxvZ29faWNvbiB7XG4gIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWxvZ28gLmxvZ2luLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ubG9naW4tbG9nbyAuc3ViVGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZnJnVGFnIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5idG5fY2xhc3Mge1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jcmVhdGVBY2Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3JlYXRlQWNjIC5yZWdpc3RlclRhZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cbi5idG5zIC5mbGFnQWN0aXZlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG59XG4uYnRucyAuZmxhZ0RlYWN0aXZlIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgb3BhY2l0eTogMC41O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLWhlYWRlciB7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuaW9uLWZvb3RlciB7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuaW9uLXRvb2xiYXIge1xuICAgIGJvcmRlci1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cbi5sb2dpbi1sb2dvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC5sb2dvX2ljb24ge1xuICAgICAgICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmxvZ2luLW5hbWUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICAgIC5zdWJUaXRsZSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxufVxuLmZyZ1RhZyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5idG5fY2xhc3Mge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubG9naW4tbG9nbyBpbWcge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG59XG4ubGlzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmlvbi1saXN0IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW46IDBweDtcbn1cbmlvbi1pdGVtIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jcmVhdGVBY2Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAucmVnaXN0ZXJUYWcge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbi5idG5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAuZmxhZ0FjdGl2ZSB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIH1cbiAgICAuZmxhZ0RlYWN0aXZlIHtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../select-country/select-country.page */
    "./src/app/pages/select-country/select-country.page.ts");
    /* harmony import */


    var _verify_verify_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../verify/verify.page */
    "./src/app/pages/verify/verify.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


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
        this.isLogin = false;
        console.log('--------------- user login', this.util.user_login);
        this.mobile.ccCode = '+91';
        this.mobileLogin.ccCode = '+91';
        this.oneSignal.getIds().then(function (data) {
          console.log('iddddd==========', data);
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

          console.log('form', form);
          this.submitted = true;

          if (form.valid) {
            var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

            if (!emailfilter.test(this.login.email)) {
              this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
              return false;
            }

            console.log('login');
            this.isLogin = true;
            this.api.post('users/login', this.login).then(function (data) {
              _this.isLogin = false;
              console.log(data);

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

                      _this.api.post('users/edit_profile', updateParam).then(function (data) {
                        console.log('user info=>', data);
                      }, function (error) {
                        console.log(error);
                      });
                    }

                    var favParam = {
                      id: data.data.id
                    };

                    _this.api.post('favourite/getByUid', favParam).then(function (data) {
                      console.log('fav data', data);

                      if (data && data.status === 200 && data.data.length > 0) {
                        _this.util.haveFav = true;

                        try {
                          _this.util.favIds = data.data[0].ids.split(',');
                        } catch (error) {
                          console.log('eroor', error);
                        }
                      } else {
                        _this.util.haveFav = false;
                      }
                    }, function (error) {
                      _this.util.haveFav = false;
                      console.log('fav error', error);
                    });

                    _this.navCtrl.navigateRoot(['']);
                  } else {
                    console.log('not valid');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                      title: _this.util.translate('Error'),
                      text: _this.util.translate('Your are blocked please contact administrator'),
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
                  _this.util.errorToast(_this.util.translate('Not valid user'));

                  _this.login.email = '';
                  _this.login.password = '';
                }
              } else if (data && data.status === 500) {
                _this.util.errorToast(data.data.message);
              } else {
                _this.util.errorToast(_this.util.translate('Something went wrong'));
              }
            }, function (error) {
              console.log(error);
              _this.isLogin = false;

              _this.util.errorToast(_this.util.translate('Something went wrong'));
            });
          }
        }
      }, {
        key: "onPhoneLogin",
        value: function onPhoneLogin(form) {
          var _this2 = this;

          console.log('form', form, this.mobile);
          console.log(this.mobile.ccCode + this.mobile.phone);
          this.submitted = true;

          if (form.valid) {
            var param = {
              cc: this.mobile.ccCode,
              mobile: this.mobile.phone,
              password: this.mobile.password
            };
            this.isLogin = true;
            this.api.post('users/loginWithPhoneAndPassword', param).then(function (data) {
              _this2.isLogin = false;
              console.log(data);

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

                      _this2.api.post('users/edit_profile', updateParam).then(function (data) {
                        console.log('user info=>', data);
                      }, function (error) {
                        console.log(error);
                      });
                    }

                    var favParam = {
                      id: data.data.id
                    };

                    _this2.api.post('favourite/getByUid', favParam).then(function (data) {
                      console.log('fav data', data);

                      if (data && data.status === 200 && data.data.length > 0) {
                        _this2.util.haveFav = true;

                        try {
                          _this2.util.favIds = data.data[0].ids.split(',');
                        } catch (error) {
                          console.log('eroor', error);
                        }
                      } else {
                        _this2.util.haveFav = false;
                      }
                    }, function (error) {
                      _this2.util.haveFav = false;
                      console.log('fav error', error);
                    });

                    _this2.navCtrl.navigateRoot(['']);
                  } else {
                    console.log('not valid');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                      title: _this2.util.translate('Error'),
                      text: _this2.util.translate('Your are blocked please contact administrator'),
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
                  _this2.util.errorToast(_this2.util.translate('Not valid user'));

                  _this2.login.email = '';
                  _this2.login.password = '';
                }
              } else if (data && data.status === 500) {
                _this2.util.errorToast(data.data.message);
              } else {
                _this2.util.errorToast(_this2.util.translate('Something went wrong'));
              }
            }, function (error) {
              console.log(error);
              _this2.isLogin = false;

              _this2.util.errorToast(_this2.util.translate('Something went wrong'));
            })["catch"](function (error) {
              console.log(error);
              _this2.isLogin = false;

              _this2.util.errorToast(_this2.util.translate('Something went wrong'));
            });
          }
        }
      }, {
        key: "onOTPLogin",
        value: function onOTPLogin(form) {
          var _this3 = this;

          console.log(this.mobileLogin);
          this.submitted = true;

          if (form.valid) {
            var param = {
              mobile: this.mobileLogin.phone,
              cc: this.mobileLogin.ccCode
            };
            this.isLogin = true;
            this.api.post('users/checkMobileNumber', param).then(function (data) {
              _this3.isLogin = false;
              console.log(data);

              if (data && data.status === 200) {
                console.log('open modal');

                _this3.openModal(data.data.id);
              } else if (data && data.status === 500) {
                _this3.util.errorToast(data.data.message);
              } else {
                _this3.util.errorToast(_this3.util.translate('Something went wrong'));
              }
            }, function (error) {
              console.log(error);
              _this3.isLogin = false;

              _this3.util.errorToast(_this3.util.translate('Something went wrong'));
            })["catch"](function (error) {
              console.log(error);
              _this3.isLogin = false;

              _this3.util.errorToast(_this3.util.translate('Something went wrong'));
            });
          }
        }
      }, {
        key: "openModal",
        value: function openModal(uid) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('uid', uid);
                    _context.next = 3;
                    return this.modalCtrl.create({
                      component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_9__["VerifyPage"],
                      componentProps: {
                        code: this.mobileLogin.ccCode,
                        phone: this.mobileLogin.phone
                      }
                    });

                  case 3:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (data) {
                      console.log(data);

                      if (data && data.role === 'ok') {
                        var param = {
                          id: uid
                        };

                        _this4.api.post('users/getById', param).then(function (data) {
                          console.log('user data', data);

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

                                  _this4.api.post('users/edit_profile', updateParam).then(function (data) {
                                    console.log('user info=>', data);
                                  }, function (error) {
                                    console.log(error);
                                  });
                                }

                                var favParam = {
                                  id: uid
                                };

                                _this4.api.post('favourite/getByUid', favParam).then(function (data) {
                                  console.log('fav data', data);

                                  if (data && data.status === 200 && data.data.length > 0) {
                                    _this4.util.haveFav = true;

                                    try {
                                      _this4.util.favIds = data.data[0].ids.split(',');
                                    } catch (error) {
                                      console.log('eroor', error);
                                    }
                                  } else {
                                    _this4.util.haveFav = false;
                                  }
                                }, function (error) {
                                  _this4.util.haveFav = false;
                                  console.log('fav error', error);
                                });

                                _this4.navCtrl.navigateRoot(['']);
                              } else {
                                console.log('not valid');
                                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                                  title: _this4.util.translate('Error'),
                                  text: _this4.util.translate('Your are blocked please contact administrator'),
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
                              _this4.util.errorToast(_this4.util.translate('Not valid user'));

                              _this4.login.email = '';
                              _this4.login.password = '';
                            }
                          } else if (data && data.status === 500) {
                            _this4.util.errorToast(data.data.message);
                          } else {
                            _this4.util.errorToast(_this4.util.translate('Something went wrong'));
                          }
                        }, function (error) {
                          localStorage.removeItem('uid');
                          console.log(error);
                        });
                      }
                    });
                    modal.present();

                  case 6:
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log('open ccode');
                    _context2.next = 3;
                    return this.modalController.create({
                      component: _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_8__["SelectCountryPage"],
                      backdropDismiss: false,
                      showBackdrop: true
                    });

                  case 3:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (data) {
                      console.log(data);

                      if (data && data.role === 'selected') {
                        console.log('ok');
                        _this5.mobile.ccCode = '+' + data.data;
                        _this5.mobileLogin.ccCode = '+' + data.data;
                      }
                    });
                    _context2.next = 7;
                    return modal.present();

                  case 7:
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
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map