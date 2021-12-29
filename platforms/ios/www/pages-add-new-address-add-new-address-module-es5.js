(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-new-address-add-new-address-module"], {
    /***/
    "2hKP":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-address/add-new-address.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hKP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Añadir nueva dirección</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_map\" #map></div>\n  <div class=\"informations\">\n\n    <ion-item>\n      <ion-label position=\"stacked\">Ubicación</ion-label>\n      <ion-input [(ngModel)]=\"address\" #autocompletesearch id=\"googlePlaces\" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Número de casa</ion-label>\n      <ion-input [(ngModel)]=\"house\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Punto de referencia</ion-label>\n      <ion-input [(ngModel)]=\"landmark\"></ion-input>\n    </ion-item>\n\n   \n\n    <ion-radio-group [(ngModel)]=\"title\" mode=\"md\">\n\n      <ion-label class=\"title\">\n        Guardar como\n      </ion-label>\n\n      <ion-item style=\"margin-top: 20px;\">\n        <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Casa</ion-label>\n        <ion-radio value=\"casa\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Oficina</ion-label>\n        <ion-radio value=\"oficina\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"navigate-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Otro</ion-label>\n        <ion-radio value=\"otro\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n    <ion-button *ngIf=\"from ==='new'\" (click)=\"addAddress()\" expand=\"block\">\n      Añadir\n    </ion-button>\n\n    <ion-button *ngIf=\"from ==='edit'\" (click)=\"updateAddress()\" expand=\"block\">\n      Actualizar\n    </ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "AsGt":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/add-new-address/add-new-address.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function AsGt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".div_map {\n  height: 50vh;\n  width: 100%;\n  border: 1px solid gray;\n}\n\n.informations {\n  padding: 16px;\n}\n\n.informations ion-item {\n  --padding-start: 0px;\n}\n\n.informations ion-item ion-icon {\n  font-size: 20px;\n  color: gray;\n}\n\n.informations .title {\n  display: block;\n  font-weight: bold;\n  margin-top: 15px;\n}\n\n.informations ion-button {\n  --border-radius: 5px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZC1uZXctYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBRUk7RUFDSSxvQkFBQTtBQUFSOztBQUVRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFBWjs7QUFJSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRlI7O0FBS0k7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FBSFIiLCJmaWxlIjoiYWRkLW5ldy1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgIC8vXG4uZGl2X21hcCB7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5pbmZvcm1hdGlvbnMge1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "PDU8":
    /*!***************************************************************!*\
      !*** ./src/app/pages/add-new-address/add-new-address.page.ts ***!
      \***************************************************************/

    /*! exports provided: AddNewAddressPage */

    /***/
    function PDU8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewAddressPage", function () {
        return AddNewAddressPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_new_address_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-new-address.page.html */
      "2hKP");
      /* harmony import */


      var _add_new_address_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-new-address.page.scss */
      "AsGt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); //


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
          this.autocompleteItems1 = [];
          this.route.queryParams.subscribe(function (data) {
            if (data && data.from) {
              _this.from = 'edit';
              var info = JSON.parse(data.data);
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
          }); //this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        }

        _createClass(AddNewAddressPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            var options = {
              fields: ["geometry", "icon", "name"],
              strictBounds: false
            };
            var input = document.getElementById('googlePlaces').getElementsByTagName('input')[0];
            var autocomplete = new google.maps.places.Autocomplete(input, options);
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
              var place = autocomplete.getPlace();
              var location = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
              _this2.lat = place.geometry.location.lat();
              _this2.lng = place.geometry.location.lng();

              _this2.addMarker(location);

              _this2.map.setCenter(location);
            });
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            var _this3 = this;

            this.platform.ready().then(function () {
              if (_this3.platform.is('android')) {
                _this3.androidPermissions.checkPermission(_this3.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(function (result) {
                  return console.log('Has permission?', result.hasPermission);
                }, function (err) {
                  return _this3.androidPermissions.requestPermission(_this3.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
                });

                _this3.grantRequest();
              } else if (_this3.platform.is('ios')) {
                _this3.grantRequest();
              } else {
                _this3.geolocation.getCurrentPosition({
                  maximumAge: 3000,
                  timeout: 10000,
                  enableHighAccuracy: false
                }).then(function (resp) {
                  if (resp) {
                    _this3.lat = resp.coords.latitude;
                    _this3.lng = resp.coords.longitude;

                    _this3.loadmap(resp.coords.latitude, resp.coords.longitude, _this3.mapEle);

                    _this3.getAddress(_this3.lat, _this3.lng);
                  }
                });
              }
            });
          }
        }, {
          key: "onSearchChange",
          value: function onSearchChange(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.GoogleAutocomplete.getPlacePredictions({
                        input: this.address
                      }, function (predictions, status) {
                        if (predictions && predictions.length > 0) {
                          _this4.autocompleteItems1 = predictions;
                        }
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "grantRequest",
          value: function grantRequest() {
            var _this5 = this;

            this.geolocation.getCurrentPosition({
              maximumAge: 3000,
              timeout: 10000,
              enableHighAccuracy: false
            }).then(function (resp) {
              if (resp) {
                _this5.loadmap(resp.coords.latitude, resp.coords.longitude, _this5.mapEle);

                _this5.getAddress(resp.coords.latitude, resp.coords.longitude);
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
            var _this6 = this;

            var geocoder = new google.maps.Geocoder();
            var location = new google.maps.LatLng(lat, lng);
            geocoder.geocode({
              'location': location
            }, function (results, status) {
              _this6.address = results[0].formatted_address;
              _this6.lat = lat;
              _this6.lng = lng;
            });
          }
        }, {
          key: "addMarker",
          value: function addMarker(location) {
            var _this7 = this;

            if (this.marker != undefined) {
              this.marker.setMap(null);
            }

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
              _this7.getDragAddress(_this7.marker);
            });
          }
        }, {
          key: "getDragAddress",
          value: function getDragAddress(event) {
            var _this8 = this;

            var geocoder = new google.maps.Geocoder();
            var location = new google.maps.LatLng(event.position.lat(), event.position.lng());
            geocoder.geocode({
              'location': location
            }, function (results, status) {
              _this8.address = results[0].formatted_address;
              _this8.lat = event.position.lat();
              _this8.lng = event.position.lng();
            });
          }
        }, {
          key: "addAddress",
          value: function addAddress() {
            var _this9 = this;

            if (this.address === '' || this.landmark === '' || this.house === '') {
              this.util.errorToast(this.util.translate('Todos los campos son requerido'));
              return false;
            }

            this.util.show();
            var param = {
              uid: localStorage.getItem('uid'),
              address: this.address,
              lat: this.lat,
              lng: this.lng,
              title: this.title,
              house: this.house,
              landmark: this.landmark
            };
            this.api.post('address/save', param).then(function (data) {
              _this9.util.hide();

              if (data && data.status === 200) {
                _this9.util.publishAddress('');

                _this9.navCtrl.back();

                _this9.util.showToast('Direccion agregada', 'success', 'bottom');
              } else {
                _this9.util.errorToast('Algo ha ido mal');
              }
            }, function (error) {
              _this9.util.hide();

              _this9.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "updateAddress",
          value: function updateAddress() {
            var _this10 = this;

            if (this.address === '' || this.landmark === '' || this.house === '') {
              this.util.errorToast('Todos los campos son requeridos');
              return false;
            }

            this.util.show();
            var param = {
              id: this.id,
              uid: localStorage.getItem('uid'),
              address: this.address,
              lat: this.lat,
              lng: this.lng,
              title: this.title,
              house: this.house,
              landmark: this.landmark
            };
            this.api.post('address/editList', param).then(function (data) {
              _this10.util.hide();

              if (data && data.status === 200) {
                _this10.util.publishAddress('');

                _this10.navCtrl.back();

                _this10.util.showToast('Dirección actualizada', 'success', 'bottom');
              } else {
                _this10.util.errorToast('Algo ha ido mal');
              }
            }, function (error) {
              _this10.util.hide();

              _this10.util.errorToast('Algo ha ido mal');
            });
          }
        }]);

        return AddNewAddressPage;
      }();

      AddNewAddressPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }];
      };

      AddNewAddressPage.propDecorators = {
        mapEle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map', {
            "static": true
          }]
        }],
        autoCompleteS: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['autocompletesearch', {
            "static": true
          }]
        }]
      };
      AddNewAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-new-address',
        template: _raw_loader_add_new_address_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_new_address_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])], AddNewAddressPage);
      /***/
    },

    /***/
    "PMNr":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/add-new-address/add-new-address.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AddNewAddressPageModule */

    /***/
    function PMNr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewAddressPageModule", function () {
        return AddNewAddressPageModule;
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


      var _add_new_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-new-address-routing.module */
      "jl9S");
      /* harmony import */


      var _add_new_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-new-address.page */
      "PDU8"); //


      var AddNewAddressPageModule = function AddNewAddressPageModule() {
        _classCallCheck(this, AddNewAddressPageModule);
      };

      AddNewAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_new_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNewAddressPageRoutingModule"]],
        declarations: [_add_new_address_page__WEBPACK_IMPORTED_MODULE_6__["AddNewAddressPage"]]
      })], AddNewAddressPageModule);
      /***/
    },

    /***/
    "jl9S":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/add-new-address/add-new-address-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: AddNewAddressPageRoutingModule */

    /***/
    function jl9S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewAddressPageRoutingModule", function () {
        return AddNewAddressPageRoutingModule;
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


      var _add_new_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-new-address.page */
      "PDU8"); //


      var routes = [{
        path: '',
        component: _add_new_address_page__WEBPACK_IMPORTED_MODULE_3__["AddNewAddressPage"]
      }];

      var AddNewAddressPageRoutingModule = function AddNewAddressPageRoutingModule() {
        _classCallCheck(this, AddNewAddressPageRoutingModule);
      };

      AddNewAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddNewAddressPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-add-new-address-add-new-address-module-es5.js.map