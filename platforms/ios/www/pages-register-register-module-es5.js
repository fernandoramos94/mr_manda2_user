(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"], {
    /***/
    "+mX6":
    /*!***********************************************************!*\
      !*** ./src/app/pages/register/register-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function mX6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
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


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "gnlj"); //


      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    },

    /***/
    "/al4":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function al4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n\n <ion-header no-shadow no-border>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"assets/icon.png\" class=\"logo_icon\" alt=\"foodies\">\n    <p class=\"login-name\">Registrarse</p>\n    <p class=\"subTitle\">Ingresa los datos<br>\n      para acceder a tu cuenta</p>\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.email\" type=\"email\" [placeholder]=\"('Correo')\" name=\"email\"\n          #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          Correo es requerido\n        </p>\n      </ion-text>\n\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" [placeholder]=\"('Contraseña')\"\n          type=\"password\" #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Contraseña es requerida\n        </p>\n      </ion-text>\n\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.first_name\" type=\"text\" [placeholder]=\"('Nombre')\"\n          name=\"full_name\" #full_name=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"full_name.valid || submitted == false\" class=\"ion-padding-start\">\n          Nombre es requerido\n        </p>\n      </ion-text>\n\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.last_name\" type=\"text\" [placeholder]=\"('Apellido')\" name=\"lname\"\n          #lname=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"lname.valid || submitted == false\" class=\"ion-padding-start\">\n          Apellido\n        </p>\n      </ion-text>\n\n      <!-- Country -->\n\n      <ion-row>\n        <ion-col size=\"3\" (click)=\"openCountry()\">\n          <ion-item lines=\"none\">\n            <ion-input style=\"font-size: 12px;\" [(ngModel)]=\"login.cc\" disabled=\"true\" type=\"text\" name=\"ccode\"\n              #ccode=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-item lines=\"none\">\n            <ion-input [(ngModel)]=\"login.mobile\" type=\"number\" [placeholder]=\"('Teléfono')\"\n              name=\"mobile\" #phone=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n          <ion-text color=\"danger\">\n            <p [hidden]=\"phone.valid || submitted == false\" class=\"ion-padding-start\">\n              Teléfono es requerido\n            </p>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <!-- Country -->\n\n      <ion-item lines=\"none\">\n        <ion-label>Género</ion-label>\n        <ion-select okText=\"Okay\" cancelText=\"Dismiss\" interface=\"popover\" [(ngModel)]=\"login.gender\" name=\"gender\"\n          #gender=\"ngModel\" required>\n          <ion-select-option value=\"1\"> Masculino </ion-select-option>\n          <ion-select-option value=\"0\"> Femenino </ion-select-option>\n          <ion-select-option value=\"2\"> Otro </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n\n    </ion-list>\n\n    <div class=\"div_chk\">\n      <ion-checkbox [checked]=\"login.check\" [(ngModel)]=\"login.check\" name=\"checkls\" #checkls=\"ngModel\" color=\"light\"\n        class=\"chk\"></ion-checkbox>\n      <ion-label class=\"lbl_police\"><span class=\"span_term\">\n          Al apretar aceptar o al utilizar esta aplicación, estás aprobando automaticamente nuestras Términos y Condiciones \n          que puedes encontrar en:\n        </span>\n        <u> <a style=\"color: var(--ion-color-primary);\" (click)=\"open('privacy')\"> Términos y Condiciones\n          </a> </u>\n        de esta aplicación\n      </ion-label>\n    </div>\n    <ion-text color=\"danger\">\n      <p [hidden]=\"checkls.valid || submitted == false\" class=\"ion-padding-start\">\n        Por favor acepta nuestras politicas de privacidad\n      </p>\n    </ion-text>\n\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding\">\n        <ion-button class=\"btn_class\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\" [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\"> INICIAR</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n  <p class=\"createAcc\" (click)=\"back()\">Ya tengo una cuenta\n    <span class=\"registerTag\">Iniciar sesión</span>\n  </p>\n</ion-content>";
      /***/
    },

    /***/
    "fQjJ":
    /*!***************************************************!*\
      !*** ./src/app/pages/register/register.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function fQjJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 30%;\n  margin-bottom: 20px;\n}\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n.login-logo .subTitle {\n  margin: 0px;\n  font-size: 1rem;\n}\n.frgTag {\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n.btn_class {\n  color: white;\n  height: 50px;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n.login-logo img {\n  max-width: 150px;\n}\n.list {\n  margin-bottom: 0;\n}\nion-list {\n  --ion-background-color: transparent;\n  margin: 0px;\n}\nion-item {\n  --ion-background-color: #f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n.createAcc {\n  text-align: center;\n}\n.createAcc .registerTag {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n.div_chk {\n  width: 100%;\n  margin: 20px 0px;\n  position: relative;\n}\n.div_chk .lbl_police {\n  font-size: 10px;\n  margin-left: 40px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.div_chk .span_term {\n  margin-right: 10px;\n}\n.div_chk .chk {\n  --size: 20px;\n  --border-radius: 5px !important;\n  --border-color-checked: var(--ion-color-primary);\n}\n.div_chk .lbl_by {\n  display: block;\n  font-size: 10px;\n  color: black;\n  margin-top: 10px;\n}\n.div_chk .span_termm {\n  color: #8992aa;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFDSTtFQUNJLHVCQUFBO0FBQ1I7QUFDSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNSO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUNSO0FBRUE7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0FBQ0o7QUFDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUE7RUFDSSxnQkFBQTtBQUdKO0FBREE7RUFDSSxnQkFBQTtBQUlKO0FBRkE7RUFDSSxtQ0FBQTtFQUNBLFdBQUE7QUFLSjtBQUhBO0VBQ0ksK0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBTUo7QUFIQTtFQUNJLGtCQUFBO0FBTUo7QUFMSTtFQUNJLCtCQUFBO0VBRUEsaUJBQUE7QUFNUjtBQUhBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFNSjtBQUpJO0VBQ0ksZUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFLUjtBQUZJO0VBQ0ksa0JBQUE7QUFJUjtBQURJO0VBQ0ksWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0RBQUE7QUFHUjtBQURJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHUjtBQURJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBR1IiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgLy9cbi5sb2dpbi1sb2dvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC5sb2dvX2ljb24ge1xuICAgICAgICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmxvZ2luLW5hbWUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICAgIC5zdWJUaXRsZSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxufVxuLmZyZ1RhZyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5idG5fY2xhc3Mge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5sb2dpbi1sb2dvIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbn1cbi5saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaW9uLWxpc3Qge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogMHB4O1xufVxuaW9uLWl0ZW0ge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNyZWF0ZUFjYyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5yZWdpc3RlclRhZyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuLmRpdl9jaGsge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmxibF9wb2xpY2Uge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIC8vIGNvbG9yOiBibGFjaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG5cbiAgICAuc3Bhbl90ZXJtIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIC5jaGsge1xuICAgICAgICAtLXNpemU6IDIwcHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gICAgLmxibF9ieSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgLnNwYW5fdGVybW0ge1xuICAgICAgICBjb2xvcjogIzg5OTJhYTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "fhSy":
    /*!***************************************************!*\
      !*** ./src/app/pages/register/register.module.ts ***!
      \***************************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function fhSy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-routing.module */
      "+mX6");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "gnlj"); //


      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    },

    /***/
    "gnlj":
    /*!*************************************************!*\
      !*** ./src/app/pages/register/register.page.ts ***!
      \*************************************************/

    /*! exports provided: RegisterPage */

    /***/
    function gnlj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.page.html */
      "/al4");
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.page.scss */
      "fQjJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../verify/verify.page */
      "TCp9");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../select-country/select-country.page */
      "hxji"); //


      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(router, api, util, navCtrl, modalCtrl, iab, menuController, alertController) {
          _classCallCheck(this, RegisterPage);

          this.router = router;
          this.api = api;
          this.util = util;
          this.navCtrl = navCtrl;
          this.modalCtrl = modalCtrl;
          this.iab = iab;
          this.menuController = menuController;
          this.alertController = alertController;
          this.login = {
            email: '',
            first_name: '',
            last_name: '',
            password: '',
            gender: '1',
            mobile: '',
            fcm_token: '',
            type: '',
            lat: '',
            lng: '',
            cover: '',
            status: '',
            verified: '',
            others: '',
            date: '',
            stripe_key: '',
            cc: '',
            check: false
          };
          this.submitted = false;
          this.isLogin = false;
          this.ccCode = '+503';
          this.login.cc = '+503';
        }

        _createClass(RegisterPage, [{
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__["VerifyPage"],
                        componentProps: {
                          code: this.ccCode,
                          phone: this.login.mobile
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        // console.log(data);
                        if (data && data.role === 'ok') {
                          // console.log('login');
                          var param = {
                            first_name: _this.login.first_name,
                            last_name: _this.login.last_name,
                            email: _this.login.email,
                            password: _this.login.password,
                            gender: _this.login.gender,
                            fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : 'NA',
                            type: 'user',
                            lat: '',
                            lng: '',
                            cover: 'NA',
                            mobile: _this.login.mobile,
                            status: 1,
                            country_code: _this.ccCode,
                            verified: 0,
                            others: 1,
                            date: moment__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DD'),
                            stripe_key: ''
                          }; // console.log('param', param);

                          _this.isLogin = true;

                          _this.api.post('users/registerUser', param).then(function (data) {
                            _this.isLogin = false; // console.log(data);

                            if (data && data.status === 200) {
                              _this.util.userInfo = data.data;
                              localStorage.setItem('uid', data.data.id);
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

                              _this.sendVerification(_this.login.email, _this.api.baseUrl + 'users/verify?uid=' + data.data.id);

                              _this.navCtrl.navigateRoot(['']);
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
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Confirmación',
                        message: 'Enviaremos un código de verificación a tu número de teléfono  ' + this.ccCode + this.login.mobile,
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {// console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Enviar',
                          handler: function handler() {
                            // console.log('Confirm Okay');
                            _this2.openModal();
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLogin",
          value: function onLogin(form) {
            var _this3 = this;

            // console.log('form', this.login, this.ccCode);
            // console.log(this.util.twillo);
            this.submitted = true; // console.log(this.login.check);

            if (form.valid) {
              if (!this.login.check) {
                this.util.showToast('Por favor acepta nuestros términos y condiciones', 'dark', 'bottom');
                return false;
              }

              var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

              if (!emailfilter.test(this.login.email)) {
                this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
                return false;
              }

              if (this.util.twillo === '1') {
                // console.log('open model=>>>');
                var param = {
                  email: this.login.email,
                  phone: this.login.mobile
                };
                this.isLogin = true;
                this.api.post('users/validatePhoneAndEmail', param).then(function (data) {
                  _this3.isLogin = false; // console.log('data', data);

                  if (data && data.status === 200) {
                    // console.log('all done...');
                    _this3.presentAlertConfirm();
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
                }); // this.openModal();
              } else {
                // console.log('login');
                var _param = {
                  first_name: this.login.first_name,
                  last_name: this.login.last_name,
                  email: this.login.email,
                  password: this.login.password,
                  gender: this.login.gender,
                  fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : 'NA',
                  type: 'user',
                  lat: '',
                  lng: '',
                  cover: 'NA',
                  mobile: this.login.mobile,
                  status: 1,
                  country_code: this.ccCode,
                  verified: 0,
                  others: 1,
                  date: moment__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DD'),
                  stripe_key: ''
                }; // console.log('param', param);

                this.isLogin = true;
                this.api.post('users/registerUser', _param).then(function (data) {
                  _this3.isLogin = false; // console.log(data);

                  if (data && data.status === 200) {
                    _this3.util.userInfo = data.data;
                    localStorage.setItem('uid', data.data.id);
                    var fcm = localStorage.getItem('fcm');

                    if (fcm && fcm !== null && fcm !== 'null') {
                      var updateParam = {
                        id: data.data.id,
                        fcm_token: fcm
                      };

                      _this3.api.post('users/edit_profile', updateParam).then(function (data) {// console.log('user info=>', data);
                      }, function (error) {// console.log(error);
                      });
                    }

                    _this3.sendVerification(_this3.login.email, _this3.api.baseUrl + 'users/verify?uid=' + data.data.id);

                    _this3.navCtrl.navigateRoot(['']);
                  } else if (data && data.status === 500) {
                    _this3.util.errorToast(data.data.message);
                  } else {
                    _this3.util.errorToast('Algo ha ido mal');
                  }
                }, function (error) {
                  // console.log(error);
                  _this3.isLogin = false;

                  _this3.util.errorToast('Algo ha ido mal');
                });
              }
            }
          }
        }, {
          key: "sendVerification",
          value: function sendVerification(mail, link) {
            var param = {
              email: mail,
              url: link
            };
            this.api.post('users/sendVerificationMail', param).then(function (data) {// console.log('mail', data);
            }, function (error) {// console.log(error);
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.back();
          }
        }, {
          key: "openCountry",
          value: function openCountry() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalCtrl.create({
                        component: _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_11__["SelectCountryPage"],
                        backdropDismiss: false,
                        showBackdrop: true
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (data) {
                        // console.log(data);
                        if (data && data.role === 'selected') {
                          // console.log('ok');
                          _this4.login.cc = '+' + data.data;
                          _this4.ccCode = '+' + data.data;
                        }
                      });
                      _context3.next = 6;
                      return modal.present();

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "open",
          value: function open(type) {
            if (type === 'eula') {
              this.iab.create('https://terebuscas.com');
            } else {
              this.iab.create('https://terebuscas.com');
            }
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
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])], RegisterPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-register-register-module-es5.js.map