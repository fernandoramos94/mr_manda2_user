(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faqs-faqs-module"], {
    /***/
    "ED0L":
    /*!*******************************************!*\
      !*** ./src/app/pages/faqs/faqs.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function ED0L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXFzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "IeLZ":
    /*!*******************************************!*\
      !*** ./src/app/pages/faqs/faqs.module.ts ***!
      \*******************************************/

    /*! exports provided: FaqsPageModule */

    /***/
    function IeLZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqsPageModule", function () {
        return FaqsPageModule;
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


      var _faqs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./faqs-routing.module */
      "K9j1");
      /* harmony import */


      var _faqs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./faqs.page */
      "R9J1"); //


      var FaqsPageModule = function FaqsPageModule() {
        _classCallCheck(this, FaqsPageModule);
      };

      FaqsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _faqs_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqsPageRoutingModule"]],
        declarations: [_faqs_page__WEBPACK_IMPORTED_MODULE_6__["FaqsPage"]]
      })], FaqsPageModule);
      /***/
    },

    /***/
    "K9j1":
    /*!***************************************************!*\
      !*** ./src/app/pages/faqs/faqs-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: FaqsPageRoutingModule */

    /***/
    function K9j1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqsPageRoutingModule", function () {
        return FaqsPageRoutingModule;
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


      var _faqs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./faqs.page */
      "R9J1"); //


      var routes = [{
        path: '',
        component: _faqs_page__WEBPACK_IMPORTED_MODULE_3__["FaqsPage"]
      }];

      var FaqsPageRoutingModule = function FaqsPageRoutingModule() {
        _classCallCheck(this, FaqsPageRoutingModule);
      };

      FaqsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FaqsPageRoutingModule);
      /***/
    },

    /***/
    "R9J1":
    /*!*****************************************!*\
      !*** ./src/app/pages/faqs/faqs.page.ts ***!
      \*****************************************/

    /*! exports provided: FaqsPage */

    /***/
    function R9J1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqsPage", function () {
        return FaqsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_faqs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./faqs.page.html */
      "rCZ6");
      /* harmony import */


      var _faqs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./faqs.page.scss */
      "ED0L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc"); //


      var FaqsPage = /*#__PURE__*/function () {
        function FaqsPage(util, api, navCtrl) {
          var _this = this;

          _classCallCheck(this, FaqsPage);

          this.util = util;
          this.api = api;
          this.navCtrl = navCtrl;
          var param = {
            id: 5
          };
          this.loaded = false;
          this.api.post('pages/getById', param).then(function (data) {
            // console.log(data);
            _this.loaded = true;

            if (data && data.status === 200 && data.data.length > 0) {
              var info = data.data[0];
              _this.content = info.content;
            }
          }, function (error) {
            // console.log(error);
            _this.loaded = true;

            _this.util.errorToast('Algo ha ido mal');
          });
        }

        _createClass(FaqsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getContent",
          value: function getContent() {
            return this.content;
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.back();
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.util.openMenu();
          }
        }]);

        return FaqsPage;
      }();

      FaqsPage.ctorParameters = function () {
        return [{
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      FaqsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-faqs',
        template: _raw_loader_faqs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faqs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], FaqsPage);
      /***/
    },

    /***/
    "rCZ6":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faqs/faqs.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function rCZ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('FAQs')}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"!loaded\">\n    <div *ngFor=\"let item of [1,2,3,4,5,6,7,8]\">\n      <h3>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n      </p>\n      <p>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </p>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </h3>\n    </div>\n  </div>\n  <p [innerHTML]=\"getContent()\" *ngIf=\"loaded\"></p>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=faqs-faqs-module-es5.js.map