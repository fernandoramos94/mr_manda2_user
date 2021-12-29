(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pick-location-pick-location-module"], {
    /***/
    "8YQ0":
    /*!*************************************************************!*\
      !*** ./src/app/pages/pick-location/pick-location.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function YQ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btnb {\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  border-bottom: 1px solid lightgray;\n  position: relative;\n  overflow: hidden;\n}\n\n#map {\n  margin-top: 20px;\n  width: 100%;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BpY2stbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJwaWNrLWxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgIC8vXG4uYnRuYiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNtYXAge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "I0Eo":
    /*!***********************************************************!*\
      !*** ./src/app/pages/pick-location/pick-location.page.ts ***!
      \***********************************************************/

    /*! exports provided: PickLocationPage */

    /***/
    function I0Eo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PickLocationPage", function () {
        return PickLocationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pick_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pick-location.page.html */
      "Ly0p");
      /* harmony import */


      var _pick_location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pick-location.page.scss */
      "8YQ0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "mtRb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/location.service */
      "yHma"); //


      var PickLocationPage = /*#__PURE__*/function () {
        function PickLocationPage(chMod, platform, androidPermissions, geolocation, router, util, alertController, navCtrl, menuController, diagnostic, locationService) {
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
          this.locationService = locationService;
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var data;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.locationService.getLocationCoordinates();

                    case 2:
                      data = _context.sent;

                      if (data) {
                        this.getAddress(data.lat, data.lng);
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "askPermission",
          value: function askPermission() {
            this.getLocation();
          }
        }, {
          key: "grantRequest",
          value: function grantRequest() {
            var _this = this;

            this.diagnostic.isLocationEnabled().then(function (data) {
              if (data) {
                _this.geolocation.getCurrentPosition({
                  maximumAge: 3000,
                  timeout: 10000,
                  enableHighAccuracy: false
                }).then(function (resp) {
                  if (resp) {
                    // console.log('resp', resp);
                    _this.lat = resp.coords.latitude;
                    _this.lng = resp.coords.longitude;

                    _this.getAddress(resp.coords.latitude, resp.coords.longitude);
                  }
                })["catch"](function (error) {
                  // console.log('ERORROR 1 and open', JSON.stringify(error));
                  _this.diagnostic.switchToSettings();
                });
              } else {
                _this.diagnostic.switchToSettings();

                _this.geolocation.getCurrentPosition({
                  maximumAge: 3000,
                  timeout: 10000,
                  enableHighAccuracy: false
                }).then(function (resp) {
                  if (resp) {
                    // console.log('ress,', resp);
                    _this.lat = resp.coords.latitude;
                    _this.lng = resp.coords.longitude;

                    _this.getAddress(resp.coords.latitude, resp.coords.longitude);
                  }
                })["catch"](function (error) {
                  // console.log('ERORROR 1 and open', JSON.stringify(error));
                  _this.diagnostic.switchToSettings();
                });
              }
            }, function (error) {
              if (_this.platform.is('ios')) {
                _this.iOSAlert();
              } else {
                _this.presentAlertConfirm();
              }
            })["catch"](function (error) {
              if (_this.platform.is('ios')) {
                _this.iOSAlert();
              } else {
                _this.presentAlertConfirm();
              }
            });
          }
        }, {
          key: "getAddress",
          value: function getAddress(lat, lng) {
            var _this2 = this;

            var geocoder = new google.maps.Geocoder();
            var location = new google.maps.LatLng(lat, lng);
            geocoder.geocode({
              'location': location
            }, function (results, status) {
              if (results && results.length) {
                _this2.lat = lat;
                _this2.lng = lng;
                localStorage.setItem('location', 'true');
                localStorage.setItem('lat', _this2.lat);
                localStorage.setItem('address', results[0].formatted_address);
                localStorage.setItem('lng', _this2.lng);
                _this2.util.cityAddress = results[0].formatted_address;

                _this2.util.publishLocation();

                _this2.navCtrl.navigateRoot(['']);
              } else {
                _this2.util.errorToast('Something went wrong please try again later');
              }
            });
          }
        }, {
          key: "iOSAlert",
          value: function iOSAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'Por favor activa tu ubicación para una mejor experiencia',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {// console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler() {
                            // console.log('Confirm Okay');
                            _this3.diagnostic.switchToSettings();
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
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'Please Enable Location Service for best experience',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {// console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            // console.log('Confirm Okay');
                            _this4.askPermission();
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this5 = this;

              var addsSelected;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this.autocomplete1.query === '')) {
                        _context4.next = 3;
                        break;
                      }

                      this.autocompleteItems1 = [];
                      return _context4.abrupt("return");

                    case 3:
                      addsSelected = localStorage.getItem('addsSelected');

                      if (!(addsSelected && addsSelected != null)) {
                        _context4.next = 7;
                        break;
                      }

                      localStorage.removeItem('addsSelected');
                      return _context4.abrupt("return");

                    case 7:
                      this.GoogleAutocomplete.getPlacePredictions({
                        input: this.autocomplete1.query
                      }, function (predictions, status) {
                        if (predictions && predictions.length > 0) {
                          _this5.autocompleteItems1 = predictions;
                        }
                      });

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "selectSearchResult1",
          value: function selectSearchResult1(item) {
            var _this6 = this;

            localStorage.setItem('addsSelected', 'true');
            this.autocompleteItems1 = [];
            this.autocomplete1.query = item.description;
            this.util.cityAddress = item.description;
            this.geocoder.geocode({
              placeId: item.place_id
            }, function (results, status) {
              if (status === 'OK' && results[0]) {
                _this6.lat = results[0].geometry.location.lat();
                _this6.lng = results[0].geometry.location.lng();

                _this6.chMod.detectChanges();

                _this6.loadMap(_this6.lat, _this6.lng);
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
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"]
        }, {
          type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__["Diagnostic"]
        }, {
          type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"]
        }];
      };

      PickLocationPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map', {
            "static": true
          }]
        }]
      };
      PickLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pick-location',
        template: _raw_loader_pick_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pick_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__["Diagnostic"], src_app_services_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"]])], PickLocationPage);
      /***/
    },

    /***/
    "Ly0p":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pick-location/pick-location.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ly0p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>Buscar ubicación</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar [placeholder]=\"('Buscar ubicación')\" select-all (ionChange)=\"onSearchChange($event)\"\n    [debounce]=\"250\" mode=\"ios\" [(ngModel)]=\"autocomplete1.query\">\n  </ion-searchbar>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of autocompleteItems1\" (click)=\"selectSearchResult1(item)\">\n      {{ item.description }}\n      <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n    </ion-item>\n  </ion-list>\n  <ion-button (click)=\"getLocation()\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"primary\">\n   Usar mi ubicación actual\n  </ion-button>\n  <p class=\"ion-text-center\"></p>\n  <div #map id=\"map\" class=\"map\"></div>\n  <div style=\"margin-top: 20px;padding: 30px;\" *ngIf=\"lat && lng\">\n    <ion-button (click)=\"selectedAddress()\" expand=\"block\" shape=\"round\" color=\"primary\">\n      Usar esta ubicación\n    </ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "rt+D":
    /*!*************************************************************!*\
      !*** ./src/app/pages/pick-location/pick-location.module.ts ***!
      \*************************************************************/

    /*! exports provided: PickLocationPageModule */

    /***/
    function rtD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PickLocationPageModule", function () {
        return PickLocationPageModule;
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


      var _pick_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pick-location-routing.module */
      "y/mC");
      /* harmony import */


      var _pick_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pick-location.page */
      "I0Eo"); //


      var PickLocationPageModule = function PickLocationPageModule() {
        _classCallCheck(this, PickLocationPageModule);
      };

      PickLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pick_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["PickLocationPageRoutingModule"]],
        declarations: [_pick_location_page__WEBPACK_IMPORTED_MODULE_6__["PickLocationPage"]]
      })], PickLocationPageModule);
      /***/
    },

    /***/
    "y/mC":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/pick-location/pick-location-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: PickLocationPageRoutingModule */

    /***/
    function yMC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PickLocationPageRoutingModule", function () {
        return PickLocationPageRoutingModule;
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


      var _pick_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pick-location.page */
      "I0Eo"); //


      var routes = [{
        path: '',
        component: _pick_location_page__WEBPACK_IMPORTED_MODULE_3__["PickLocationPage"]
      }];

      var PickLocationPageRoutingModule = function PickLocationPageRoutingModule() {
        _classCallCheck(this, PickLocationPageRoutingModule);
      };

      PickLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PickLocationPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-pick-location-pick-location-module-es5.js.map