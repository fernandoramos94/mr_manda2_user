function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pick-location-pick-location-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pick-location/pick-location.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pick-location/pick-location.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPickLocationPickLocationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>Buscar ubicación</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar [placeholder]=\"('Buscar ubicación')\" select-all (ionChange)=\"onSearchChange($event)\"\n    [debounce]=\"250\" mode=\"ios\" [(ngModel)]=\"autocomplete1.query\">\n  </ion-searchbar>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of autocompleteItems1\" (click)=\"selectSearchResult1(item)\">\n      {{ item.description }}\n      <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n    </ion-item>\n  </ion-list>\n  <ion-button (click)=\"getLocation()\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"primary\">\n   Usar mi ubicación actual\n  </ion-button>\n  <p class=\"ion-text-center\"></p>\n  <div #map id=\"map\" class=\"map\"></div>\n  <div style=\"margin-top: 20px;padding: 30px;\" *ngIf=\"lat && lng\">\n    <ion-button (click)=\"selectedAddress()\" expand=\"block\" shape=\"round\" color=\"primary\">\n      Usar esta ubicación\n    </ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/pick-location/pick-location-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/pick-location/pick-location-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: PickLocationPageRoutingModule */

  /***/
  function srcAppPagesPickLocationPickLocationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PickLocationPageRoutingModule", function () {
      return PickLocationPageRoutingModule;
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


    var _pick_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pick-location.page */
    "./src/app/pages/pick-location/pick-location.page.ts");
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
      component: _pick_location_page__WEBPACK_IMPORTED_MODULE_3__["PickLocationPage"]
    }];

    var PickLocationPageRoutingModule = function PickLocationPageRoutingModule() {
      _classCallCheck(this, PickLocationPageRoutingModule);
    };

    PickLocationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PickLocationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pick-location/pick-location.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/pick-location/pick-location.module.ts ***!
    \*************************************************************/

  /*! exports provided: PickLocationPageModule */

  /***/
  function srcAppPagesPickLocationPickLocationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PickLocationPageModule", function () {
      return PickLocationPageModule;
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


    var _pick_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pick-location-routing.module */
    "./src/app/pages/pick-location/pick-location-routing.module.ts");
    /* harmony import */


    var _pick_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pick-location.page */
    "./src/app/pages/pick-location/pick-location.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var PickLocationPageModule = function PickLocationPageModule() {
      _classCallCheck(this, PickLocationPageModule);
    };

    PickLocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pick_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["PickLocationPageRoutingModule"]],
      declarations: [_pick_location_page__WEBPACK_IMPORTED_MODULE_6__["PickLocationPage"]]
    })], PickLocationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/pick-location/pick-location.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/pick-location/pick-location.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPickLocationPickLocationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.btnb {\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  border-bottom: 1px solid lightgray;\n  position: relative;\n  overflow: hidden;\n}\n#map {\n  margin-top: 20px;\n  width: 100%;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGljay1sb2NhdGlvbi9waWNrLWxvY2F0aW9uLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hbGVqYW5kcm9kaWF6L0Rlc2t0b3AvVEVMTyAyLjAvVGVsbyBVc3VhcmlvL3NyYy9hcHAvcGFnZXMvcGljay1sb2NhdGlvbi9waWNrLWxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FERUo7QUNBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QURHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BpY2stbG9jYXRpb24vcGljay1sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5idG5iIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNtYXAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5idG5iIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI21hcCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/pick-location/pick-location.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/pick-location/pick-location.page.ts ***!
    \***********************************************************/

  /*! exports provided: PickLocationPage */

  /***/
  function srcAppPagesPickLocationPickLocationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PickLocationPage", function () {
      return PickLocationPage;
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


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


    var PickLocationPage = /*#__PURE__*/function () {
      function PickLocationPage(chMod, platform, androidPermissions, geolocation, router, util, alertController, navCtrl, menuController, diagnostic) {
        _classCallCheck(this, PickLocationPage);

        this.chMod = chMod;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.router = router;
        this.util = util;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.menuController = menuController;
        this.diagnostic = diagnostic;
        this.autocompleteItems1 = [];
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.autocomplete1 = {
          query: ''
        };
        this.autocompleteItems1 = [];
      }

      _createClass(PickLocationPage, [{
        key: "loadMap",
        value: function loadMap(lat, lng) {
          this.lat = lat;
          this.lng = lng;
          var latLng = new google.maps.LatLng(lat, lng);
          var mapOptions = {
            center: latLng,
            zoom: 15,
            scaleControl: true,
            streetViewControl: false,
            zoomControl: false,
            overviewMapControl: false,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            disableDoubleClickZoom: false,
            styles: []
          };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          this.previousMarker = new google.maps.Marker({
            position: latLng,
            map: this.map,
            animation: google.maps.Animation.DROP,
            title: 'Your Location'
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.navCtrl.back();
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          var _this = this;

          this.platform.ready().then(function () {
            if (_this.platform.is('android')) {
              _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(function (result) {
                return console.log('Has permission?', result.hasPermission);
              }, function (err) {
                return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
              });

              _this.grantRequest();
            } else if (_this.platform.is('ios')) {
              _this.grantRequest();
            } else {
              _this.geolocation.getCurrentPosition({
                maximumAge: 3000,
                timeout: 10000,
                enableHighAccuracy: false
              }).then(function (resp) {
                if (resp) {
                  console.log('resp', resp);
                  _this.lat = resp.coords.latitude;
                  _this.lng = resp.coords.longitude;

                  _this.getAddress(_this.lat, _this.lng);
                }
              })["catch"](function (error) {
                console.log(error);

                _this.grantRequest();
              });
            }
          });
        }
      }, {
        key: "askPermission",
        value: function askPermission() {
          this.getLocation();
        }
      }, {
        key: "grantRequest",
        value: function grantRequest() {
          var _this2 = this;

          this.diagnostic.isLocationEnabled().then(function (data) {
            if (data) {
              _this2.geolocation.getCurrentPosition({
                maximumAge: 3000,
                timeout: 10000,
                enableHighAccuracy: false
              }).then(function (resp) {
                if (resp) {
                  console.log('resp', resp);
                  _this2.lat = resp.coords.latitude;
                  _this2.lng = resp.coords.longitude;

                  _this2.getAddress(resp.coords.latitude, resp.coords.longitude);
                }
              })["catch"](function (error) {
                console.log('ERORROR 1 and open', JSON.stringify(error));

                _this2.diagnostic.switchToSettings();
              });
            } else {
              _this2.diagnostic.switchToSettings();

              _this2.geolocation.getCurrentPosition({
                maximumAge: 3000,
                timeout: 10000,
                enableHighAccuracy: false
              }).then(function (resp) {
                if (resp) {
                  console.log('ress,', resp);
                  _this2.lat = resp.coords.latitude;
                  _this2.lng = resp.coords.longitude;

                  _this2.getAddress(resp.coords.latitude, resp.coords.longitude);
                }
              })["catch"](function (error) {
                console.log('ERORROR 1 and open', JSON.stringify(error));

                _this2.diagnostic.switchToSettings();
              });
            }
          }, function (error) {
            console.log('errir ????????????????/', error);

            if (_this2.platform.is('ios')) {
              _this2.iOSAlert();
            } else {
              _this2.presentAlertConfirm();
            }
          })["catch"](function (error) {
            console.log('error ******************', error);

            if (_this2.platform.is('ios')) {
              _this2.iOSAlert();
            } else {
              _this2.presentAlertConfirm();
            }
          });
        }
      }, {
        key: "getAddress",
        value: function getAddress(lat, lng) {
          var _this3 = this;

          var geocoder = new google.maps.Geocoder();
          var location = new google.maps.LatLng(lat, lng);
          geocoder.geocode({
            'location': location
          }, function (results, status) {
            console.log(results);
            console.log('status', status);

            if (results && results.length) {
              _this3.lat = lat;
              _this3.lng = lng;
              localStorage.setItem('location', 'true');
              localStorage.setItem('lat', _this3.lat);
              localStorage.setItem('address', results[0].formatted_address);
              localStorage.setItem('lng', _this3.lng);
              _this3.util.cityAddress = results[0].formatted_address;

              _this3.util.publishLocation();

              _this3.navCtrl.navigateRoot(['']);
            } else {
              _this3.util.errorToast('Something went wrong please try again later');
            }
          });
        }
      }, {
        key: "iOSAlert",
        value: function iOSAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      message: 'Por favor activa tu ubicación para una mejor experiencia',
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Ok',
                        handler: function handler() {
                          console.log('Confirm Okay');

                          _this4.diagnostic.switchToSettings();
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      message: 'Please Enable Location Service for best experience',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          console.log('Confirm Okay');

                          _this5.askPermission();
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
        key: "selectedAddress",
        value: function selectedAddress() {
          localStorage.setItem('location', 'true');
          localStorage.setItem('lat', this.lat);
          localStorage.setItem('lng', this.lng);
          localStorage.setItem('address', this.autocomplete1.query);
          this.util.publishLocation();
          this.navCtrl.navigateRoot(['']);
        }
      }, {
        key: "onSearchChange",
        value: function onSearchChange(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this6 = this;

            var addsSelected;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.autocomplete1.query === '')) {
                      _context3.next = 3;
                      break;
                    }

                    this.autocompleteItems1 = [];
                    return _context3.abrupt("return");

                  case 3:
                    addsSelected = localStorage.getItem('addsSelected');

                    if (!(addsSelected && addsSelected != null)) {
                      _context3.next = 7;
                      break;
                    }

                    localStorage.removeItem('addsSelected');
                    return _context3.abrupt("return");

                  case 7:
                    this.GoogleAutocomplete.getPlacePredictions({
                      input: this.autocomplete1.query
                    }, function (predictions, status) {
                      console.log(predictions);

                      if (predictions && predictions.length > 0) {
                        _this6.autocompleteItems1 = predictions;
                        console.log(_this6.autocompleteItems1);
                      }
                    });

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "selectSearchResult1",
        value: function selectSearchResult1(item) {
          var _this7 = this;

          console.log('select', item);
          localStorage.setItem('addsSelected', 'true');
          this.autocompleteItems1 = [];
          this.autocomplete1.query = item.description;
          this.util.cityAddress = item.description;
          this.geocoder.geocode({
            placeId: item.place_id
          }, function (results, status) {
            if (status === 'OK' && results[0]) {
              console.log(status);
              _this7.lat = results[0].geometry.location.lat();
              _this7.lng = results[0].geometry.location.lng();
              console.log(_this7.lat, _this7.lng);

              _this7.chMod.detectChanges();

              _this7.loadMap(_this7.lat, _this7.lng);
            }
          });
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

      return PickLocationPage;
    }();

    PickLocationPage.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidPermissions"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
      }, {
        type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], PickLocationPage.prototype, "mapElement", void 0);
    PickLocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pick-location',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pick-location.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pick-location/pick-location.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pick-location.page.scss */
      "./src/app/pages/pick-location/pick-location.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"]])], PickLocationPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-pick-location-pick-location-module-es5.js.map