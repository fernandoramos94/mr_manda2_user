function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-new-address-add-new-address-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-address/add-new-address.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-address/add-new-address.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddNewAddressAddNewAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Add new address')}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_map\" #map></div>\n  <div class=\"informations\">\n\n    <ion-item>\n      <ion-label position=\"stacked\">{{util.translate('LOCATIONS')}}</ion-label>\n      <ion-input [(ngModel)]=\"address\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">{{util.translate('HOUSE / FLAT NO')}}</ion-label>\n      <ion-input [(ngModel)]=\"house\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">{{util.translate('LANDMARK')}}</ion-label>\n      <ion-input [(ngModel)]=\"landmark\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">{{util.translate('PINCODE')}}</ion-label>\n      <ion-input [(ngModel)]=\"pincode\"></ion-input>\n    </ion-item>\n\n    <ion-radio-group [(ngModel)]=\"title\" mode=\"md\">\n\n      <ion-label class=\"title\">\n        {{util.translate('SAVE AS')}}\n      </ion-label>\n\n      <ion-item style=\"margin-top: 20px;\">\n        <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n        <ion-label>{{util.translate('HOME')}}</ion-label>\n        <ion-radio value=\"home\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n        <ion-label>{{util.translate('WORK')}}</ion-label>\n        <ion-radio value=\"work\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"navigate-outline\" slot=\"start\"></ion-icon>\n        <ion-label>{{util.translate('OTHER')}}</ion-label>\n        <ion-radio value=\"other\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n    <ion-button *ngIf=\"from ==='new'\" (click)=\"addAddress()\" expand=\"block\">\n      {{util.translate('Add')}}\n    </ion-button>\n\n    <ion-button *ngIf=\"from ==='edit'\" (click)=\"updateAddress()\" expand=\"block\">\n      {{util.translate('Update')}}\n    </ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/add-new-address/add-new-address-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/add-new-address/add-new-address-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: AddNewAddressPageRoutingModule */

  /***/
  function srcAppPagesAddNewAddressAddNewAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewAddressPageRoutingModule", function () {
      return AddNewAddressPageRoutingModule;
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


    var _add_new_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-new-address.page */
    "./src/app/pages/add-new-address/add-new-address.page.ts");
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
      component: _add_new_address_page__WEBPACK_IMPORTED_MODULE_3__["AddNewAddressPage"]
    }];

    var AddNewAddressPageRoutingModule = function AddNewAddressPageRoutingModule() {
      _classCallCheck(this, AddNewAddressPageRoutingModule);
    };

    AddNewAddressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddNewAddressPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/add-new-address/add-new-address.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/add-new-address/add-new-address.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AddNewAddressPageModule */

  /***/
  function srcAppPagesAddNewAddressAddNewAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewAddressPageModule", function () {
      return AddNewAddressPageModule;
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


    var _add_new_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-new-address-routing.module */
    "./src/app/pages/add-new-address/add-new-address-routing.module.ts");
    /* harmony import */


    var _add_new_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-new-address.page */
    "./src/app/pages/add-new-address/add-new-address.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AddNewAddressPageModule = function AddNewAddressPageModule() {
      _classCallCheck(this, AddNewAddressPageModule);
    };

    AddNewAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_new_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNewAddressPageRoutingModule"]],
      declarations: [_add_new_address_page__WEBPACK_IMPORTED_MODULE_6__["AddNewAddressPage"]]
    })], AddNewAddressPageModule);
    /***/
  },

  /***/
  "./src/app/pages/add-new-address/add-new-address.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/add-new-address/add-new-address.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddNewAddressAddNewAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.div_map {\n  height: 50vh;\n  width: 100%;\n  border: 1px solid gray;\n}\n.informations {\n  padding: 16px;\n}\n.informations ion-item {\n  --padding-start: 0px;\n}\n.informations ion-item ion-icon {\n  font-size: 20px;\n  color: gray;\n}\n.informations .title {\n  display: block;\n  font-weight: bold;\n  margin-top: 15px;\n}\n.informations ion-button {\n  --border-radius: 5px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLW5ldy1hZGRyZXNzL2FkZC1uZXctYWRkcmVzcy5wYWdlLnNjc3MiLCIvVXNlcnMvYWxlamFuZHJvZGlhei9EZXNrdG9wL1RFTE8gMi4wL1RlbG8gVXN1YXJpby9zcmMvYXBwL3BhZ2VzL2FkZC1uZXctYWRkcmVzcy9hZGQtbmV3LWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBREVKO0FDQ0E7RUFDSSxhQUFBO0FERUo7QUNBSTtFQUNJLG9CQUFBO0FERVI7QUNBUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FERVo7QUNFSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEQVI7QUNHSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUREUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1uZXctYWRkcmVzcy9hZGQtbmV3LWFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uZGl2X21hcCB7XG4gIGhlaWdodDogNTB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5pbmZvcm1hdGlvbnMge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmluZm9ybWF0aW9ucyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuLmluZm9ybWF0aW9ucyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IGdyYXk7XG59XG4uaW5mb3JtYXRpb25zIC50aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5pbmZvcm1hdGlvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmRpdl9tYXAge1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG4uaW5mb3JtYXRpb25zIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/add-new-address/add-new-address.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/add-new-address/add-new-address.page.ts ***!
    \***************************************************************/

  /*! exports provided: AddNewAddressPage */

  /***/
  function srcAppPagesAddNewAddressAddNewAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewAddressPage", function () {
      return AddNewAddressPage;
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
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AddNewAddressPage = /*#__PURE__*/function () {
      function AddNewAddressPage(platform, androidPermissions, geolocation, navCtrl, api, util, route, router) {
        var _this = this;

        _classCallCheck(this, AddNewAddressPage);

        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.route = route;
        this.router = router;
        this.house = '';
        this.landmark = '';
        this.title = 'home';
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.from) {
            _this.from = 'edit';
            var info = JSON.parse(data.data);
            console.log('da===>', info);
            _this.address = info.address;
            _this.house = info.house;
            _this.id = info.id;
            _this.landmark = info.landmark;
            _this.lat = info.lat;
            _this.lng = info.lng;

            _this.loadmap(_this.lat, _this.lng, _this.mapEle);
          } else {
            _this.from = 'new';

            _this.getLocation();
          }
        });
      }

      _createClass(AddNewAddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getLocation",
        value: function getLocation() {
          var _this2 = this;

          this.platform.ready().then(function () {
            if (_this2.platform.is('android')) {
              _this2.androidPermissions.checkPermission(_this2.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(function (result) {
                return console.log('Has permission?', result.hasPermission);
              }, function (err) {
                return _this2.androidPermissions.requestPermission(_this2.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
              });

              _this2.grantRequest();
            } else if (_this2.platform.is('ios')) {
              _this2.grantRequest();
            } else {
              _this2.geolocation.getCurrentPosition({
                maximumAge: 3000,
                timeout: 10000,
                enableHighAccuracy: false
              }).then(function (resp) {
                if (resp) {
                  console.log('resp', resp);
                  _this2.lat = resp.coords.latitude;
                  _this2.lng = resp.coords.longitude;

                  _this2.loadmap(resp.coords.latitude, resp.coords.longitude, _this2.mapEle);

                  _this2.getAddress(_this2.lat, _this2.lng);
                }
              });
            }
          });
        }
      }, {
        key: "grantRequest",
        value: function grantRequest() {
          var _this3 = this;

          this.geolocation.getCurrentPosition({
            maximumAge: 3000,
            timeout: 10000,
            enableHighAccuracy: false
          }).then(function (resp) {
            if (resp) {
              console.log('resp', resp);

              _this3.loadmap(resp.coords.latitude, resp.coords.longitude, _this3.mapEle);

              _this3.getAddress(resp.coords.latitude, resp.coords.longitude);
            }
          });
        }
      }, {
        key: "loadmap",
        value: function loadmap(lat, lng, mapElement) {
          var location = new google.maps.LatLng(lat, lng);
          var style = [{
            featureType: 'all',
            elementType: 'all',
            stylers: [{
              saturation: -100
            }]
          }];
          var mapOptions = {
            zoom: 15,
            scaleControl: false,
            streetViewControl: false,
            zoomControl: false,
            overviewMapControl: false,
            center: location,
            mapTypeControl: false,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'Foodfire5']
            }
          };
          this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);
          var mapType = new google.maps.StyledMapType(style, {
            name: 'Grayscale'
          });
          this.map.mapTypes.set('Foodfire5', mapType);
          this.map.setMapTypeId('Foodfire5');
          this.addMarker(location);
        }
      }, {
        key: "getAddress",
        value: function getAddress(lat, lng) {
          var _this4 = this;

          var geocoder = new google.maps.Geocoder();
          var location = new google.maps.LatLng(lat, lng);
          geocoder.geocode({
            'location': location
          }, function (results, status) {
            console.log(results);
            _this4.address = results[0].formatted_address;
            _this4.lat = lat;
            _this4.lng = lng;
          });
        }
      }, {
        key: "addMarker",
        value: function addMarker(location) {
          var _this5 = this;

          console.log('location =>', location);
          var icons = {
            url: 'assets/icon/marker.png',
            scaledSize: new google.maps.Size(50, 50)
          };
          this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: icons,
            draggable: true,
            animation: google.maps.Animation.DROP
          });
          google.maps.event.addListener(this.marker, 'dragend', function () {
            console.log(_this5.marker);

            _this5.getDragAddress(_this5.marker);
          });
        }
      }, {
        key: "getDragAddress",
        value: function getDragAddress(event) {
          var _this6 = this;

          var geocoder = new google.maps.Geocoder();
          var location = new google.maps.LatLng(event.position.lat(), event.position.lng());
          geocoder.geocode({
            'location': location
          }, function (results, status) {
            console.log(results);
            _this6.address = results[0].formatted_address;
            _this6.lat = event.position.lat();
            _this6.lng = event.position.lng();
          });
        }
      }, {
        key: "addAddress",
        value: function addAddress() {
          var _this7 = this;

          if (this.address === '' || this.landmark === '' || this.house === '' || !this.pincode || this.pincode === '') {
            this.util.errorToast(this.util.translate('All Fields are required'));
            return false;
          }

          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            address: this.house + ' ' + this.landmark + ' ' + this.address + ' ' + this.pincode
          }, function (results, status) {
            console.log(results, status);

            if (status === 'OK' && results && results.length) {
              _this7.lat = results[0].geometry.location.lat();
              _this7.lng = results[0].geometry.location.lng();
              console.log('----->', _this7.lat, _this7.lng);
              console.log('call api');

              _this7.util.show();

              var param = {
                uid: localStorage.getItem('uid'),
                address: _this7.address,
                lat: _this7.lat,
                lng: _this7.lng,
                title: _this7.title,
                house: _this7.house,
                landmark: _this7.landmark,
                pincode: _this7.pincode
              };

              _this7.api.post('address/save', param).then(function (data) {
                _this7.util.hide();

                if (data && data.status === 200) {
                  _this7.util.publishAddress('');

                  _this7.navCtrl.back();

                  _this7.util.showToast('Address added', 'success', 'bottom');
                } else {
                  _this7.util.errorToast(_this7.util.translate('Something went wrong'));
                }
              }, function (error) {
                console.log(error);

                _this7.util.hide();

                _this7.util.errorToast(_this7.util.translate('Something went wrong'));
              });
            } else {
              _this7.util.errorToast(_this7.util.translate('Something went wrong'));

              return false;
            }
          });
        }
      }, {
        key: "updateAddress",
        value: function updateAddress() {
          var _this8 = this;

          if (this.address === '' || this.landmark === '' || this.house === '' || !this.pincode || this.pincode === '') {
            this.util.errorToast(this.util.translate('All Fields are required'));
            return false;
          }

          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            address: this.house + ' ' + this.landmark + ' ' + this.address + ' ' + this.pincode
          }, function (results, status) {
            console.log(results, status);

            if (status === 'OK' && results && results.length) {
              _this8.lat = results[0].geometry.location.lat();
              _this8.lng = results[0].geometry.location.lng();
              console.log('----->', _this8.lat, _this8.lng);
              var param = {
                id: _this8.id,
                uid: localStorage.getItem('uid'),
                address: _this8.address,
                lat: _this8.lat,
                lng: _this8.lng,
                title: _this8.title,
                house: _this8.house,
                landmark: _this8.landmark,
                pincode: _this8.pincode
              };

              _this8.util.show();

              _this8.api.post('address/editList', param).then(function (data) {
                _this8.util.hide();

                if (data && data.status === 200) {
                  _this8.util.publishAddress('');

                  _this8.navCtrl.back();

                  _this8.util.showToast('Address updated', 'success', 'bottom');
                } else {
                  _this8.util.errorToast(_this8.util.translate('Something went wrong'));
                }
              }, function (error) {
                console.log(error);

                _this8.util.hide();

                _this8.util.errorToast(_this8.util.translate('Something went wrong'));
              });
            } else {
              _this8.util.errorToast(_this8.util.translate('Something went wrong'));

              return false;
            }
          });
        }
      }]);

      return AddNewAddressPage;
    }();

    AddNewAddressPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AddNewAddressPage.prototype, "mapEle", void 0);
    AddNewAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-new-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-new-address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-address/add-new-address.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-new-address.page.scss */
      "./src/app/pages/add-new-address/add-new-address.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], AddNewAddressPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-add-new-address-add-new-address-module-es5.js.map