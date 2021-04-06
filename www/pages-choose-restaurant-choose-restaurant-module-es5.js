function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-choose-restaurant-choose-restaurant-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-restaurant/choose-restaurant.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-restaurant/choose-restaurant.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChooseRestaurantChooseRestaurantPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Select Restaurant')}}</ion-title>\n  </ion-toolbar>\n  <ion-searchbar [placeholder]=\"util.translate('Search by restaurant')\" mode=\"ios\" (ionChange)=\"onSearchChange($event)\"\n    [debounce]=\"250\" showCancelButton=\"never\"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"card_div\" *ngFor=\"let item of restaurants\" (click)=\"goToAddReview(item)\">\n      <div class=\"resto_detail\">\n        <img [src]=\"api.mediaURL+item.cover\" onError=\"this.src='assets/placeholder.jpg'\" class=\"back_image\" alt=\"\">\n        <!-- <div class=\"back_image\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/placeholder.jpg)'}\"></div> -->\n        <div style=\"padding-left: 20px;\">\n          <ion-label class=\"res_name\">{{item.name}}</ion-label>\n          <ion-label class=\"res_location\">{{item.address}}</ion-label>\n        </div>\n      </div>\n      <div class=\"line_div\"></div>\n    </div>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/choose-restaurant/choose-restaurant-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/choose-restaurant/choose-restaurant-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ChooseRestaurantPageRoutingModule */

  /***/
  function srcAppPagesChooseRestaurantChooseRestaurantRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChooseRestaurantPageRoutingModule", function () {
      return ChooseRestaurantPageRoutingModule;
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


    var _choose_restaurant_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./choose-restaurant.page */
    "./src/app/pages/choose-restaurant/choose-restaurant.page.ts");
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
      component: _choose_restaurant_page__WEBPACK_IMPORTED_MODULE_3__["ChooseRestaurantPage"]
    }];

    var ChooseRestaurantPageRoutingModule = function ChooseRestaurantPageRoutingModule() {
      _classCallCheck(this, ChooseRestaurantPageRoutingModule);
    };

    ChooseRestaurantPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChooseRestaurantPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/choose-restaurant/choose-restaurant.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/choose-restaurant/choose-restaurant.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ChooseRestaurantPageModule */

  /***/
  function srcAppPagesChooseRestaurantChooseRestaurantModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChooseRestaurantPageModule", function () {
      return ChooseRestaurantPageModule;
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


    var _choose_restaurant_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./choose-restaurant-routing.module */
    "./src/app/pages/choose-restaurant/choose-restaurant-routing.module.ts");
    /* harmony import */


    var _choose_restaurant_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./choose-restaurant.page */
    "./src/app/pages/choose-restaurant/choose-restaurant.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ChooseRestaurantPageModule = function ChooseRestaurantPageModule() {
      _classCallCheck(this, ChooseRestaurantPageModule);
    };

    ChooseRestaurantPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _choose_restaurant_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseRestaurantPageRoutingModule"]],
      declarations: [_choose_restaurant_page__WEBPACK_IMPORTED_MODULE_6__["ChooseRestaurantPage"]]
    })], ChooseRestaurantPageModule);
    /***/
  },

  /***/
  "./src/app/pages/choose-restaurant/choose-restaurant.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/choose-restaurant/choose-restaurant.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChooseRestaurantChooseRestaurantPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.header_div {\n  display: flex;\n  flex-direction: column;\n}\n.header_div .head_lbl {\n  margin-left: 16px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.header_div ion-searchbar {\n  margin-top: 15px;\n}\n.main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.main_content_div .resto_detail ion-label {\n  display: block;\n}\n.main_content_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n}\n.main_content_div .resto_detail .res_name {\n  font-weight: 600;\n}\n.main_content_div .resto_detail .res_location {\n  color: lightgray;\n  font-size: 14px;\n}\n.main_content_div .line_div {\n  width: 100%;\n  height: 1px;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hvb3NlLXJlc3RhdXJhbnQvY2hvb3NlLXJlc3RhdXJhbnQucGFnZS5zY3NzIiwiL1VzZXJzL2FsZWphbmRyb2RpYXovRGVza3RvcC9URUxPIDIuMC9UZWxvIFVzdWFyaW8vc3JjL2FwcC9wYWdlcy9jaG9vc2UtcmVzdGF1cmFudC9jaG9vc2UtcmVzdGF1cmFudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QURFSjtBQ0RJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURHUjtBQ0FJO0VBQ0ksZ0JBQUE7QURFUjtBQ0VBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QURDSjtBQ0NJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QURDUjtBQ0NRO0VBQ0ksY0FBQTtBRENaO0FDRVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FEQVo7QUNHUTtFQUNJLGdCQUFBO0FERFo7QUNHUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBRERaO0FDSUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBREZSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hvb3NlLXJlc3RhdXJhbnQvY2hvb3NlLXJlc3RhdXJhbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uaGVhZGVyX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaGVhZGVyX2RpdiAuaGVhZF9sYmwge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmhlYWRlcl9kaXYgaW9uLXNlYXJjaGJhciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVzdG9fZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZXN0b19kZXRhaWwgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVzdG9fZGV0YWlsIC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVzdG9fZGV0YWlsIC5yZXNfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVzdG9fZGV0YWlsIC5yZXNfbG9jYXRpb24ge1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGluZV9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5oZWFkZXJfZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLmhlYWRfbGJsIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBpb24tc2VhcmNoYmFyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLnJlc3RvX2RldGFpbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2tfaW1hZ2Uge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXNfbmFtZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICAgIC5yZXNfbG9jYXRpb24ge1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubGluZV9kaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/choose-restaurant/choose-restaurant.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/choose-restaurant/choose-restaurant.page.ts ***!
    \*******************************************************************/

  /*! exports provided: ChooseRestaurantPage */

  /***/
  function srcAppPagesChooseRestaurantChooseRestaurantPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChooseRestaurantPage", function () {
      return ChooseRestaurantPage;
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
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ChooseRestaurantPage = /*#__PURE__*/function () {
      function ChooseRestaurantPage(router, api, util) {
        var _this = this;

        _classCallCheck(this, ChooseRestaurantPage);

        this.router = router;
        this.api = api;
        this.util = util;
        this.restaurants = [];
        this.dummyRest = [];

        this.resetChanges = function () {
          _this.restaurants = _this.dummyRest;
        };

        this.getRestaurant();
      }

      _createClass(ChooseRestaurantPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToAddReview",
        value: function goToAddReview(item) {
          var navData = {
            queryParams: {
              id: item.uid,
              name: item.name
            }
          };
          this.router.navigate(['/add-review'], navData);
        }
      }, {
        key: "setFilteredItems",
        value: function setFilteredItems() {
          console.log('clear');
          this.restaurants = [];
          this.restaurants = this.dummyRest;
        }
      }, {
        key: "filterItems",
        value: function filterItems(searchTerm) {
          return this.restaurants.filter(function (item) {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          });
        }
      }, {
        key: "onSearchChange",
        value: function onSearchChange(event) {
          this.resetChanges();
          this.restaurants = this.filterItems(event.detail.value);
        }
      }, {
        key: "getRestaurant",
        value: function getRestaurant() {
          var _this2 = this;

          var param = {
            lat: localStorage.getItem('lat'),
            lng: localStorage.getItem('lng'),
            distance: 10,
            type: 1
          };
          this.api.post('stores/nearMe', param).then(function (data) {
            console.log(data);

            if (data && data.status === 200 && data.data.length > 0) {
              data.data = data.data.filter(function (x) {
                return x.status === '1';
              });
              data.data.forEach(function (element) {
                element.rating = parseFloat(element.rating);
                element.time = parseInt(element.time);
                element.dish = parseInt(element.dish);

                _this2.restaurants.push(element);

                _this2.dummyRest.push(element);
              });
            }
          }, function (error) {
            console.log(error);
            _this2.dummyRest = [];
          })["catch"](function (error) {
            console.log(error);
            _this2.dummyRest = [];
          });
        }
      }]);

      return ChooseRestaurantPage;
    }();

    ChooseRestaurantPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }];
    };

    ChooseRestaurantPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-choose-restaurant',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./choose-restaurant.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-restaurant/choose-restaurant.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./choose-restaurant.page.scss */
      "./src/app/pages/choose-restaurant/choose-restaurant.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])], ChooseRestaurantPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-choose-restaurant-choose-restaurant-module-es5.js.map