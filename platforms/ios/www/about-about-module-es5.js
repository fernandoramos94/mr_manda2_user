(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"], {
    /***/
    "6hSs":
    /*!*********************************************!*\
      !*** ./src/app/pages/about/about.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function hSs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "P6uQ":
    /*!*****************************************************!*\
      !*** ./src/app/pages/about/about-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: AboutPageRoutingModule */

    /***/
    function P6uQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
        return AboutPageRoutingModule;
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


      var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about.page */
      "fr+C"); //


      var routes = [{
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
      }];

      var AboutPageRoutingModule = function AboutPageRoutingModule() {
        _classCallCheck(this, AboutPageRoutingModule);
      };

      AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AboutPageRoutingModule);
      /***/
    },

    /***/
    "UoYK":
    /*!*********************************************!*\
      !*** ./src/app/pages/about/about.module.ts ***!
      \*********************************************/

    /*! exports provided: AboutPageModule */

    /***/
    function UoYK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
        return AboutPageModule;
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


      var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about-routing.module */
      "P6uQ");
      /* harmony import */


      var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./about.page */
      "fr+C"); //


      var AboutPageModule = function AboutPageModule() {
        _classCallCheck(this, AboutPageModule);
      };

      AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
      })], AboutPageModule);
      /***/
    },

    /***/
    "fr+C":
    /*!*******************************************!*\
      !*** ./src/app/pages/about/about.page.ts ***!
      \*******************************************/

    /*! exports provided: AboutPage */

    /***/
    function frC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
        return AboutPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./about.page.html */
      "zRMW");
      /* harmony import */


      var _about_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about.page.scss */
      "6hSs");
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


      var AboutPage = /*#__PURE__*/function () {
        function AboutPage(util, api, navCtrl) {
          var _this = this;

          _classCallCheck(this, AboutPage);

          this.util = util;
          this.api = api;
          this.navCtrl = navCtrl;
          var param = {
            id: 1
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
          })["catch"](function (error) {
            // console.log(error);
            _this.loaded = true;

            _this.util.errorToast('Algo ha ido mal');
          });
        }

        _createClass(AboutPage, [{
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

        return AboutPage;
      }();

      AboutPage.ctorParameters = function () {
        return [{
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], AboutPage);
      /***/
    },

    /***/
    "zRMW":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function zRMW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('About')}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"!loaded\">\n    <div *ngFor=\"let item of [1,2,3,4,5,6,7,8]\">\n      <h3>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n      </p>\n      <p>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </p>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </h3>\n    </div>\n  </div>\n  <p [innerHTML]=\"getContent()\" *ngIf=\"loaded\"></p>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=about-about-module-es5.js.map