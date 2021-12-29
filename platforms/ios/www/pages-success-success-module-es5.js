(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-success-success-module"], {
    /***/
    "7ZxM":
    /*!*************************************************!*\
      !*** ./src/app/pages/success/success.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function ZxM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".success-animation {\n  margin: 150px auto;\n}\n\n.checkmark {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  display: block;\n  stroke-width: 2;\n  stroke: #4bb71b;\n  stroke-miterlimit: 10;\n  box-shadow: inset 0px 0px 0px #4bb71b;\n  -webkit-animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;\n          animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;\n  position: relative;\n  top: 5px;\n  right: 5px;\n  margin: 0 auto;\n}\n\n.checkmark__circle {\n  stroke-dasharray: 166;\n  stroke-dashoffset: 166;\n  stroke-width: 2;\n  stroke-miterlimit: 10;\n  stroke: #4bb71b;\n  fill: #fff;\n  -webkit-animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n}\n\n.checkmark__check {\n  transform-origin: 50% 50%;\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  -webkit-animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n}\n\n@-webkit-keyframes stroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n\n@keyframes stroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n\n@-webkit-keyframes scale {\n  0%, 100% {\n    transform: none;\n  }\n  50% {\n    transform: scale3d(1.1, 1.1, 1);\n  }\n}\n\n@keyframes scale {\n  0%, 100% {\n    transform: none;\n  }\n  50% {\n    transform: scale3d(1.1, 1.1, 1);\n  }\n}\n\n@-webkit-keyframes fill {\n  100% {\n    box-shadow: inset 0px 0px 0px 30px #4bb71b;\n  }\n}\n\n@keyframes fill {\n  100% {\n    box-shadow: inset 0px 0px 0px 30px #4bb71b;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N1Y2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0ZBQUE7VUFBQSxnRkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxzRUFBQTtVQUFBLDhEQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLG9CQUFBO0VBQ047QUFDRjs7QUFKQTtFQUNJO0lBQ0ksb0JBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0k7SUFFSSxlQUFBO0VBRE47RUFJRTtJQUNJLCtCQUFBO0VBRk47QUFDRjs7QUFOQTtFQUNJO0lBRUksZUFBQTtFQUROO0VBSUU7SUFDSSwrQkFBQTtFQUZOO0FBQ0Y7O0FBS0E7RUFDSTtJQUNJLDBDQUFBO0VBSE47QUFDRjs7QUFBQTtFQUNJO0lBQ0ksMENBQUE7RUFITjtBQUNGIiwiZmlsZSI6InN1Y2Nlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgLy9cbi5zdWNjZXNzLWFuaW1hdGlvbiB7XG4gICAgbWFyZ2luOiAxNTBweCBhdXRvO1xufVxuXG4uY2hlY2ttYXJrIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgIHN0cm9rZTogIzRiYjcxYjtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggIzRiYjcxYjtcbiAgICBhbmltYXRpb246IGZpbGwgMC40cyBlYXNlLWluLW91dCAwLjRzIGZvcndhcmRzLCBzY2FsZSAwLjNzIGVhc2UtaW4tb3V0IDAuOXMgYm90aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5jaGVja21hcmtfX2NpcmNsZSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTY2O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxNjY7XG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbiAgICBzdHJva2U6ICM0YmI3MWI7XG4gICAgZmlsbDogI2ZmZjtcbiAgICBhbmltYXRpb246IHN0cm9rZSAwLjZzIGN1YmljLWJlemllcigwLjY1LCAwLCAwLjQ1LCAxKSBmb3J3YXJkcztcbn1cblxuLmNoZWNrbWFya19fY2hlY2sge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNDg7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ4O1xuICAgIGFuaW1hdGlvbjogc3Ryb2tlIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuNDUsIDEpIDAuOHMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc3Ryb2tlIHtcbiAgICAxMDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcbiAgICAwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZpbGwge1xuICAgIDEwMCUge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAzMHB4ICM0YmI3MWI7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "MRf3":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/success/success.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function MRf3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"success-animation\">\n    <svg class=\"checkmark\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\">\n      <circle class=\"checkmark__circle\" cx=\"26\" cy=\"26\" r=\"25\" fill=\"none\" />\n      <path class=\"checkmark__check\" fill=\"none\" d=\"M14.1 27.2l7.1 7.2 16.7-16.8\" />\n    </svg>\n  </div>\n\n  <h2 class=\"ion-text-center\">Tu órden ha sido generada correctamente</h2>\n  <p class=\"ion-text-center\">Muchas gracias por confiar en Mr.Manda2</p>\n</ion-content>\n";
      /***/
    },

    /***/
    "fGwd":
    /*!*************************************************!*\
      !*** ./src/app/pages/success/success.module.ts ***!
      \*************************************************/

    /*! exports provided: SuccessPageModule */

    /***/
    function fGwd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function () {
        return SuccessPageModule;
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


      var _success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./success-routing.module */
      "sWE+");
      /* harmony import */


      var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./success.page */
      "moqM"); //


      var SuccessPageModule = function SuccessPageModule() {
        _classCallCheck(this, SuccessPageModule);
      };

      SuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _success_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuccessPageRoutingModule"]],
        declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]]
      })], SuccessPageModule);
      /***/
    },

    /***/
    "moqM":
    /*!***********************************************!*\
      !*** ./src/app/pages/success/success.page.ts ***!
      \***********************************************/

    /*! exports provided: SuccessPage */

    /***/
    function moqM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessPage", function () {
        return SuccessPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_success_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./success.page.html */
      "MRf3");
      /* harmony import */


      var _success_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./success.page.scss */
      "7ZxM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/"); //


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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      SuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-success',
        template: _raw_loader_success_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_success_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], SuccessPage);
      /***/
    },

    /***/
    "sWE+":
    /*!*********************************************************!*\
      !*** ./src/app/pages/success/success-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SuccessPageRoutingModule */

    /***/
    function sWE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessPageRoutingModule", function () {
        return SuccessPageRoutingModule;
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


      var _success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./success.page */
      "moqM"); //


      var routes = [{
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_3__["SuccessPage"]
      }];

      var SuccessPageRoutingModule = function SuccessPageRoutingModule() {
        _classCallCheck(this, SuccessPageRoutingModule);
      };

      SuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SuccessPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-success-success-module-es5.js.map