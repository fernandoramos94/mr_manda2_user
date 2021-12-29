(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-location-location-module"], {
    /***/
    "+T66":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function T66(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\">\n\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"contents\">\n    <p class=\"header\">Para darte el mejor servicio necesitamos acceder a tu</p>\n    <p class=\"subHeader\">Ubicación</p>\n    <img src=\"assets/map-location.png\" alt=\"\" class=\"imgs\">\n    <ion-button (click)=\"getLocation()\" expand=\"block\" shape=\"round\">\n      Usar ubicación actual\n    </ion-button>\n    <ion-button (click)=\"customLocation()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Elegir ubicación\n    </ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "5mMC":
    /*!***************************************************!*\
      !*** ./src/app/pages/location/location.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function mMC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".contents {\n  position: absolute;\n  transform: translate(-50%, 50%);\n  left: 50%;\n  top: 20%;\n  text-align: center;\n}\n.contents .imgs {\n  width: 100px;\n  height: 100px;\n  margin: 10px 0px;\n}\n.contents .header {\n  font-size: 15px;\n  margin: 5px;\n}\n.contents .subHeader {\n  font-size: 25px;\n  font-weight: bold;\n  margin: 5px;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FBQ1IiLCJmaWxlIjoibG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgLy9cbi5jb250ZW50cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAuaW1ncyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICB9XG4gICAgLmhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxuICAgIC5zdWJIZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "A/7y":
    /*!***********************************************************!*\
      !*** ./src/app/pages/location/location-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: LocationPageRoutingModule */

    /***/
    function A7y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function () {
        return LocationPageRoutingModule;
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


      var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./location.page */
      "N4Pa"); //


      var routes = [{
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]
      }];

      var LocationPageRoutingModule = function LocationPageRoutingModule() {
        _classCallCheck(this, LocationPageRoutingModule);
      };

      LocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LocationPageRoutingModule);
      /***/
    },

    /***/
    "N4Pa":
    /*!*************************************************!*\
      !*** ./src/app/pages/location/location.page.ts ***!
      \*************************************************/

    /*! exports provided: LocationPage */

    /***/
    function N4Pa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPage", function () {
        return LocationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./location.page.html */
      "+T66");
      /* harmony import */


      var _location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./location.page.scss */
      "5mMC");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "mtRb");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/location.service */
      "yHma"); //


      var LocationPage = /*#__PURE__*/function () {
        function LocationPage(platform, androidPermissions, geolocation, router, util, alertController, navCtrl, menuController, diagnostic, locationService) {
          _classCallCheck(this, LocationPage);

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
        }

        _createClass(LocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
                      } //this.checkPermissions();
                      //alert(this.platform.is("android"))
                      // this.platform.ready().then(() => {
                      //   if (this.platform.is('android')) {
                      //     this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(
                      //       result => console.log('Has permission?', result.hasPermission),
                      //       err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
                      //     );
                      //     this.grantRequest();
                      //   } else if (this.platform.is('ios')) {
                      //     this.grantRequest();
                      //   } else {
                      //     this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
                      //       if (resp) {
                      //       // console.log('resp', resp);
                      //         this.lat = resp.coords.latitude;
                      //         this.lng = resp.coords.longitude;
                      //         this.getAddress(this.lat, this.lng);
                      //       }
                      //     }).catch(error => {
                      //     // console.log(error);
                      //       this.grantRequest();
                      //     });
                      //   }
                      // });


                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "checkPermissions",
          value: function checkPermissions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var hasPermission, canUseGPS, permission, _canUseGPS;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.locationService.checkGPSPermission();

                    case 2:
                      hasPermission = _context2.sent;

                      if (!hasPermission) {
                        _context2.next = 10;
                        break;
                      }

                      _context2.next = 6;
                      return this.locationService.askToTurnOnGPS();

                    case 6:
                      canUseGPS = _context2.sent;
                      this.postGPSPermission(canUseGPS);
                      _context2.next = 21;
                      break;

                    case 10:
                      _context2.next = 12;
                      return this.locationService.requestGPSPermission();

                    case 12:
                      permission = _context2.sent;

                      if (!(permission === 'CAN_REQUEST' || permission === 'GOT_PERMISSION')) {
                        _context2.next = 20;
                        break;
                      }

                      _context2.next = 16;
                      return this.locationService.askToTurnOnGPS();

                    case 16:
                      _canUseGPS = _context2.sent;
                      this.postGPSPermission(_canUseGPS);
                      _context2.next = 21;
                      break;

                    case 20:
                      this.util.errorToast('User denied location permission');

                    case 21:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "postGPSPermission",
          value: function postGPSPermission(canUseGPS) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (canUseGPS) {//this.watchPosition();
                      } else {//
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
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
                    _this.lat = resp.coords.latitude;
                    _this.lng = resp.coords.longitude;

                    _this.getAddress(resp.coords.latitude, resp.coords.longitude);
                  }
                })["catch"](function (error) {
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
                    _this.lat = resp.coords.latitude;
                    _this.lng = resp.coords.longitude;

                    _this.getAddress(resp.coords.latitude, resp.coords.longitude);
                  }
                })["catch"](function (error) {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'Por favor activa tu servicio de ubicación para brindarte un mejor servicio',
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
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        header: 'Alert',
                        message: 'Por favor activa tu servicio de ubicación para brindarte un mejor servicio',
                        buttons: [{
                          text: 'Cancelar',
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
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "customLocation",
          value: function customLocation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.router.navigate(['pick-location']);

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // console.log('disbaled');
            this.menuController.enable(false);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            // console.log('enabled');
            this.menuController.enable(true);
          }
        }]);

        return LocationPage;
      }();

      LocationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]
        }, {
          type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_8__["Diagnostic"]
        }, {
          type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"]
        }];
      };

      LocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-location',
        template: _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_8__["Diagnostic"], src_app_services_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"]])], LocationPage);
      /***/
    },

    /***/
    "lPJH":
    /*!***************************************************!*\
      !*** ./src/app/pages/location/location.module.ts ***!
      \***************************************************/

    /*! exports provided: LocationPageModule */

    /***/
    function lPJH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPageModule", function () {
        return LocationPageModule;
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


      var _location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./location-routing.module */
      "A/7y");
      /* harmony import */


      var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./location.page */
      "N4Pa"); //


      var LocationPageModule = function LocationPageModule() {
        _classCallCheck(this, LocationPageModule);
      };

      LocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"]],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
      })], LocationPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-location-location-module-es5.js.map