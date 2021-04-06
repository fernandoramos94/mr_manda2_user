function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-success-success-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/success/success.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/success/success.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSuccessSuccessPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Success</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"success-animation\">\n    <svg class=\"checkmark\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\">\n      <circle class=\"checkmark__circle\" cx=\"26\" cy=\"26\" r=\"25\" fill=\"none\" />\n      <path class=\"checkmark__check\" fill=\"none\" d=\"M14.1 27.2l7.1 7.2 16.7-16.8\" />\n    </svg>\n  </div>\n\n  <h2 class=\"ion-text-center\">Order Placed successfully</h2>\n  <p class=\"ion-text-center\">Thank you for placing orders with us.. your order will delivered soon.. </p>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/success/success-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/success/success-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: SuccessPageRoutingModule */

  /***/
  function srcAppPagesSuccessSuccessRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessPageRoutingModule", function () {
      return SuccessPageRoutingModule;
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


    var _success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./success.page */
    "./src/app/pages/success/success.page.ts");
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
      component: _success_page__WEBPACK_IMPORTED_MODULE_3__["SuccessPage"]
    }];

    var SuccessPageRoutingModule = function SuccessPageRoutingModule() {
      _classCallCheck(this, SuccessPageRoutingModule);
    };

    SuccessPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SuccessPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/success/success.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/success/success.module.ts ***!
    \*************************************************/

  /*! exports provided: SuccessPageModule */

  /***/
  function srcAppPagesSuccessSuccessModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function () {
      return SuccessPageModule;
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


    var _success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./success-routing.module */
    "./src/app/pages/success/success-routing.module.ts");
    /* harmony import */


    var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./success.page */
    "./src/app/pages/success/success.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var SuccessPageModule = function SuccessPageModule() {
      _classCallCheck(this, SuccessPageModule);
    };

    SuccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _success_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuccessPageRoutingModule"]],
      declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]]
    })], SuccessPageModule);
    /***/
  },

  /***/
  "./src/app/pages/success/success.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/success/success.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSuccessSuccessPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.success-animation {\n  margin: 150px auto;\n}\n.checkmark {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  display: block;\n  stroke-width: 2;\n  stroke: #4bb71b;\n  stroke-miterlimit: 10;\n  box-shadow: inset 0px 0px 0px #4bb71b;\n  -webkit-animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;\n          animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;\n  position: relative;\n  top: 5px;\n  right: 5px;\n  margin: 0 auto;\n}\n.checkmark__circle {\n  stroke-dasharray: 166;\n  stroke-dashoffset: 166;\n  stroke-width: 2;\n  stroke-miterlimit: 10;\n  stroke: #4bb71b;\n  fill: #fff;\n  -webkit-animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n}\n.checkmark__check {\n  transform-origin: 50% 50%;\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  -webkit-animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n}\n@-webkit-keyframes stroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes stroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@-webkit-keyframes scale {\n  0%, 100% {\n    transform: none;\n  }\n  50% {\n    transform: scale3d(1.1, 1.1, 1);\n  }\n}\n@keyframes scale {\n  0%, 100% {\n    transform: none;\n  }\n  50% {\n    transform: scale3d(1.1, 1.1, 1);\n  }\n}\n@-webkit-keyframes fill {\n  100% {\n    box-shadow: inset 0px 0px 0px 30px #4bb71b;\n  }\n}\n@keyframes fill {\n  100% {\n    box-shadow: inset 0px 0px 0px 30px #4bb71b;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VjY2Vzcy9zdWNjZXNzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hbGVqYW5kcm9kaWF6L0Rlc2t0b3AvVEVMTyAyLjAvVGVsbyBVc3VhcmlvL3NyYy9hcHAvcGFnZXMvc3VjY2Vzcy9zdWNjZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLGtCQUFBO0FERUo7QUNDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0ZBQUE7VUFBQSxnRkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FERUo7QUNBQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHNFQUFBO1VBQUEsOERBQUE7QURHSjtBQ0FBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBREdKO0FDQUE7RUFDSTtJQUNJLG9CQUFBO0VER047QUFDRjtBQ05BO0VBQ0k7SUFDSSxvQkFBQTtFREdOO0FBQ0Y7QUNBQTtFQUNJO0lBRUksZUFBQTtFRENOO0VDRUU7SUFDSSwrQkFBQTtFREFOO0FBQ0Y7QUNSQTtFQUNJO0lBRUksZUFBQTtFRENOO0VDRUU7SUFDSSwrQkFBQTtFREFOO0FBQ0Y7QUNHQTtFQUNJO0lBQ0ksMENBQUE7RURETjtBQUNGO0FDRkE7RUFDSTtJQUNJLDBDQUFBO0VERE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Y2Nlc3Mvc3VjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5zdWNjZXNzLWFuaW1hdGlvbiB7XG4gIG1hcmdpbjogMTUwcHggYXV0bztcbn1cblxuLmNoZWNrbWFyayB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgc3Ryb2tlLXdpZHRoOiAyO1xuICBzdHJva2U6ICM0YmI3MWI7XG4gIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggIzRiYjcxYjtcbiAgYW5pbWF0aW9uOiBmaWxsIDAuNHMgZWFzZS1pbi1vdXQgMC40cyBmb3J3YXJkcywgc2NhbGUgMC4zcyBlYXNlLWluLW91dCAwLjlzIGJvdGg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2hlY2ttYXJrX19jaXJjbGUge1xuICBzdHJva2UtZGFzaGFycmF5OiAxNjY7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxNjY7XG4gIHN0cm9rZS13aWR0aDogMjtcbiAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xuICBzdHJva2U6ICM0YmI3MWI7XG4gIGZpbGw6ICNmZmY7XG4gIGFuaW1hdGlvbjogc3Ryb2tlIDAuNnMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuNDUsIDEpIGZvcndhcmRzO1xufVxuXG4uY2hlY2ttYXJrX19jaGVjayB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDQ4O1xuICBzdHJva2UtZGFzaG9mZnNldDogNDg7XG4gIGFuaW1hdGlvbjogc3Ryb2tlIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuNDUsIDEpIDAuOHMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc3Ryb2tlIHtcbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2NhbGUge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmaWxsIHtcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMzBweCAjNGJiNzFiO1xuICB9XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uc3VjY2Vzcy1hbmltYXRpb24ge1xuICAgIG1hcmdpbjogMTUwcHggYXV0bztcbn1cblxuLmNoZWNrbWFyayB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHN0cm9rZS13aWR0aDogMjtcbiAgICBzdHJva2U6ICM0YmI3MWI7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4ICM0YmI3MWI7XG4gICAgYW5pbWF0aW9uOiBmaWxsIDAuNHMgZWFzZS1pbi1vdXQgMC40cyBmb3J3YXJkcywgc2NhbGUgMC4zcyBlYXNlLWluLW91dCAwLjlzIGJvdGg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2hlY2ttYXJrX19jaXJjbGUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE2NjtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTY2O1xuICAgIHN0cm9rZS13aWR0aDogMjtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG4gICAgc3Ryb2tlOiAjNGJiNzFiO1xuICAgIGZpbGw6ICNmZmY7XG4gICAgYW5pbWF0aW9uOiBzdHJva2UgMC42cyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC40NSwgMSkgZm9yd2FyZHM7XG59XG5cbi5jaGVja21hcmtfX2NoZWNrIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDQ4O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA0ODtcbiAgICBhbmltYXRpb246IHN0cm9rZSAwLjNzIGN1YmljLWJlemllcigwLjY1LCAwLCAwLjQ1LCAxKSAwLjhzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHN0cm9rZSB7XG4gICAgMTAwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzY2FsZSB7XG4gICAgMCUsXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmaWxsIHtcbiAgICAxMDAlIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMzBweCAjNGJiNzFiO1xuICAgIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/success/success.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/success/success.page.ts ***!
    \***********************************************/

  /*! exports provided: SuccessPage */

  /***/
  function srcAppPagesSuccessSuccessPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessPage", function () {
      return SuccessPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var SuccessPage = /*#__PURE__*/function () {
      function SuccessPage(navCtrl) {
        var _this = this;

        _classCallCheck(this, SuccessPage);

        this.navCtrl = navCtrl;
        setTimeout(function () {
          _this.navCtrl.navigateRoot(['/tabs/tab2']);
        }, 2000);
      }

      _createClass(SuccessPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SuccessPage;
    }();

    SuccessPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    SuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-success',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./success.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/success/success.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./success.page.scss */
      "./src/app/pages/success/success.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], SuccessPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-success-success-module-es5.js.map