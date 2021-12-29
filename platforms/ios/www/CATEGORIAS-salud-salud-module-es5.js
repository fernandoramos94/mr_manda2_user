(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CATEGORIAS-salud-salud-module"], {
    /***/
    "9LtI":
    /*!**********************************************************!*\
      !*** ./src/app/CATEGORIAS/salud/salud-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: SaludPageRoutingModule */

    /***/
    function LtI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaludPageRoutingModule", function () {
        return SaludPageRoutingModule;
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


      var _salud_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./salud.page */
      "o+Rn");

      var routes = [{
        path: '',
        component: _salud_page__WEBPACK_IMPORTED_MODULE_3__["SaludPage"]
      }];

      var SaludPageRoutingModule = function SaludPageRoutingModule() {
        _classCallCheck(this, SaludPageRoutingModule);
      };

      SaludPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SaludPageRoutingModule);
      /***/
    },

    /***/
    "E94J":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/CATEGORIAS/salud/salud.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function E94J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n\n <ion-header mode=\"ios\">\n\n  <ion-toolbar>\n    <div class=\"deliveryAddress\">\n      <ion-icon  class=\"pin\"   name=\"arrow-back-outline\" (click)=\"regresar()\"></ion-icon>\n      <p class=\"address\" >{{util.cityAddress}}</p>\n\n      <div class=\"userPhoto\" [style.backgroundImage]=\"'url('+ profile +')'\" *ngIf=\"profile\"></div>\n      <div class=\"userPhoto\" [style.backgroundImage]=\"'url(assets/user.png)'\" *ngIf=\"!profile\"></div>\n    </div>\n  </ion-toolbar>\n\n  <div class=\"div_searchbar\">\n    <ion-searchbar animated=\"true\" mode=\"ios\" [placeholder]=\"('Buscar comercios')\"\n      (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" class=\"search_bar\"></ion-searchbar>\n  </div>\n  <div class=\"chips_div animated fadeInDown\" *ngIf=\"allRest?.length\">\n    <ion-label class=\"chip\" *ngFor=\"let item of chips;let i = index\" (click)=\"addFilter(i)\">{{item}}</ion-label>\n  </div>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n  <div class=\"noData\" *ngIf=\"!dummy?.length && !allRest?.length\" [style.backgroundImage]=\"'url(assets/nothing.jpg)'\">\n  </div>\n  <p style=\"font-weight: bold;text-align: center;\" *ngIf=\"!dummy?.length && !allRest?.length\">\n    No se encontraron comercios\n  </p>\n  <div  class=\"main_content_div1\">\n\n    <div *ngFor=\"let item of dummy\">\n      <ion-list>\n        <ion-item>\n          <ion-thumbnail slot=\"start\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"card_div\">\n      <ion-row\n        [className]=\"item.isOpen === false || item.isClosed === '0' ? 'cardClosed ion-no-padding':'card ion-no-padding'\"\n        *ngFor=\"let item of allRest\">\n        <ion-col size=\"4\">\n          <div class=\"image_div\" (click)=\"openMenu(item)\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/placeholder.jpg)'}\">\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"desc_div\" (click)=\"openMenu(item)\">\n            <ion-label class=\"heading_lbl\">\n              {{ (item.name.length>20)? (item.name | slice:0:20)+'..':(item.name) }}\n            </ion-label>\n          \n            <ion-label class=\"small_lbl\">{{ (item.cusine.length>30)? (item.cusine | slice:0:30)+'..':(item.cusine) }}\n            </ion-label>\n            <ion-label class=\"small_lbl\">{{item.dish}}$ Mínimo | {{item.time}}\n              {{util.translate('min')}} </ion-label>\n          </div>\n        </ion-col>\n        \n        <ion-col size=\"2\">\n          <div class=\"ratting\">\n            <ion-label class=\"rateNumber\">{{item.rating}}</ion-label>\n          </div>\n          <p class=\"closed\" *ngIf=\"item && item.isOpen === false || item.isClosed === '0'\">Cerrado\n          </p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div  class=\"main_content_div2\">\n    <ion-card *ngFor=\"let item of dummy\">\n      <ion-skeleton-text animated\n        style=\"width: 100%;height: 150px;border-radius: 5px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;\">\n      </ion-skeleton-text>\n      <ion-card-content>\n        <ion-badge class=\"number_badge\" color=\"light\" mode=\"ios\">\n          <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n        </ion-badge>\n        <ion-label class=\"bold_lbl\">\n          <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n        </ion-label>\n        <ion-label class=\"small_lbl\">\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </ion-label>\n        <div class=\"flex_div\">\n          <ion-label class=\"distance_lbl\">\n            <ion-skeleton-text animated style=\"width: 25px\"></ion-skeleton-text>\n          </ion-label>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  \n\n\n\n\n\n  \n</ion-content>";
      /***/
    },

    /***/
    "nId1":
    /*!**************************************************!*\
      !*** ./src/app/CATEGORIAS/salud/salud.module.ts ***!
      \**************************************************/

    /*! exports provided: SaludPageModule */

    /***/
    function nId1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaludPageModule", function () {
        return SaludPageModule;
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


      var _salud_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./salud-routing.module */
      "9LtI");
      /* harmony import */


      var _salud_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./salud.page */
      "o+Rn");

      var SaludPageModule = function SaludPageModule() {
        _classCallCheck(this, SaludPageModule);
      };

      SaludPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _salud_routing_module__WEBPACK_IMPORTED_MODULE_5__["SaludPageRoutingModule"]],
        declarations: [_salud_page__WEBPACK_IMPORTED_MODULE_6__["SaludPage"]]
      })], SaludPageModule);
      /***/
    },

    /***/
    "o+Rn":
    /*!************************************************!*\
      !*** ./src/app/CATEGORIAS/salud/salud.page.ts ***!
      \************************************************/

    /*! exports provided: SaludPage */

    /***/
    function oRn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaludPage", function () {
        return SaludPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_salud_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./salud.page.html */
      "E94J");
      /* harmony import */


      var _salud_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./salud.page.scss */
      "yeAT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+"); //


      var SaludPage = /*#__PURE__*/function () {
        function SaludPage(platform, router, api, util, modalController, chMod, iab, navCtrl) {
          var _this = this;

          _classCallCheck(this, SaludPage);

          this.platform = platform;
          this.router = router;
          this.api = api;
          this.util = util;
          this.modalController = modalController;
          this.chMod = chMod;
          this.iab = iab;
          this.navCtrl = navCtrl;
          this.allRest = [];
          this.chips = [];
          this.dummyRest = [];
          this.dummy = Array(5);
          this.banners = [];
          this.dummyBanners = Array(2);
          this.slideOpts = {
            slidesPerView: 1.2,
            pagination: true
          };
          this.chips = [this.util.translate('Calificación 4.0+'), this.util.translate('Tiempo de entrega'), this.util.translate('Costo')];
          this.haveLocation = false;

          if (this.platform.is('ios')) {
            this.plt = 'ios';
          } else {
            this.plt = 'android';
          }

          this.util.subscribeLocation().subscribe(function (data) {
            // console.log('changedd----->>>');
            _this.dummyRest = [];
            _this.allRest = [];
            _this.banners = [];
            _this.dummyBanners = Array(2);
            _this.dummy = Array(5);

            _this.getRestaurants();
          });
          this.getRestaurants();
        }

        _createClass(SaludPage, [{
          key: "getRestaurants",
          value: function getRestaurants() {
            var _this2 = this;

            var param = {
              lat: localStorage.getItem('lat'),
              lng: localStorage.getItem('lng'),
              distance: 10,
              type: 1
            };
            this.api.post('stores/nearMe', param).then(function (data) {
              _this2.dummyBanners = [];
              _this2.dummy = []; // console.log('=== DATA', data);

              if (data && data.status === 200 && data.data.length > 0) {
                _this2.allRest = [];
                _this2.dummyRest = [];
                data.data = data.data.filter(function (x) {
                  return x.status === '1';
                });
                data.data.forEach(function (element) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!(element.category !== 'Salud')) {
                              _context.next = 2;
                              break;
                            }

                            return _context.abrupt("return");

                          case 2:
                            element.rating = parseFloat(element.rating);
                            element.time = parseInt(element.time);
                            element.dish = parseInt(element.dish);
                            element['isOpen'] = this.isOpen(element.open_time, element.close_time);

                            if (element.cusine && element.cusine !== '') {
                              element.cusine = JSON.parse(element.cusine).join();
                            }

                            this.allRest.push(element);
                            this.dummyRest.push(element);

                          case 9:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                });

                var info = _toConsumableArray(new Set(_this2.allRest.map(function (item) {
                  return item.id;
                }))); // console.log(info);


                _this2.getBanners(info); // console.log(this.allRest);


                _this2.chMod.detectChanges();
              } else {
                _this2.allRest = [];
                _this2.dummy = [];
              }
            }, function (error) {
              // console.log(error);
              _this2.dummyRest = [];
              _this2.dummyBanners = [];
            })["catch"](function (error) {
              // console.log(error);
              _this2.dummyRest = [];
              _this2.dummyBanners = [];
            });
          }
        }, {
          key: "getBanners",
          value: function getBanners(ids) {
            var _this3 = this;

            // console.log(ids);
            this.api.get('banners').then(function (data) {
              // console.log('banners-->>', data);
              _this3.dummyBanners = [];
              _this3.banners = [];

              if (data && data.status === 200 && data.data && data.data.length) {
                _this3.dummyBanners = [];
                _this3.banners = [];
                data.data.forEach(function (element) {
                  // console.log(element);
                  // console.log(element.type === '0' && ids.includes(element.value));
                  if (element.type === '0' && ids.includes(element.value)) {
                    _this3.banners.push(element);
                  } else if (element.type === '1') {
                    _this3.banners.push(element);
                  }
                });
              }
            })["catch"](function (error) {// console.log('error=>', error);
            });
          }
        }, {
          key: "isOpen",
          value: function isOpen(open, close) {
            var format = 'HH:mm:ss';
            var currentTime = moment__WEBPACK_IMPORTED_MODULE_8__().format(format);
            var time = moment__WEBPACK_IMPORTED_MODULE_8__(currentTime, format);
            var beforeTime = moment__WEBPACK_IMPORTED_MODULE_8__(open, format);
            var afterTime = moment__WEBPACK_IMPORTED_MODULE_8__(close, format);

            if (time.isBetween(beforeTime, afterTime)) {
              return true;
            }

            return false;
          }
        }, {
          key: "addFilter",
          value: function addFilter(index) {
            // console.log(index);
            if (index === 0) {
              // console.log('rating');
              this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'rating', 'desc');
            } else if (index === 1) {
              // console.log('fast');
              this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'time', 'asc');
            } else if (index === 2) {
              // console.log('cost');
              this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'dish', 'asc');
            } else if (index === 3) {
              // console.log('A-Z');
              this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'name', 'asc');
            } else if (index === 4) {
              // console.log('Z-A');
              this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'name', 'desc');
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {// console.log('init');
          }
        }, {
          key: "presentModal",
          value: function presentModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.router.navigate(['choose-address']);

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openMenu",
          value: function openMenu(item) {
            // console.log(item);
            if (item.isOpen === false || item.isClosed === '0') {
              return false;
            }

            var navData = {
              queryParams: {
                id: item.uid
              }
            };
            this.router.navigate(['category'], navData);
          }
        }, {
          key: "openOffers",
          value: function openOffers(item) {
            if (item.type === '0') {
              var navData = {
                queryParams: {
                  id: item.value
                }
              };
              this.router.navigate(['category'], navData);
            } else {
              this.iab.create(item.value);
            }
          }
        }, {
          key: "onSearchChange",
          value: function onSearchChange(event) {
            // console.log(event.detail.value);
            if (event.detail.value && event.detail.value !== '') {
              this.allRest = this.dummyRest.filter(function (ele) {
                return ele.name.toLowerCase().includes(event.detail.value.toLowerCase());
              });
            } else {
              this.allRest = this.dummyRest;
            }
          }
        }, {
          key: "chipChange",
          value: function chipChange(item) {
            var _this4 = this;

            this.allRest = this.dummyRest; // console.log(item);

            if (item === 'Fastest Delivery') {
              this.allRest.sort(function (a, b) {
                a = new Date(a.time);
                b = new Date(b.time);
                return a > b ? -1 : a < b ? 1 : 0;
              });
            }

            if (item === 'Ratting 4.0+') {
              this.allRest = [];
              this.dummyRest.forEach(function (ele) {
                if (ele.ratting >= 4) {
                  _this4.allRest.push(ele);
                }
              });
            }

            if (item === 'Cost') {
              this.allRest.sort(function (a, b) {
                a = a.time;
                b = b.time;
                return a > b ? -1 : a < b ? 1 : 0;
              });
            }
          }
        }, {
          key: "changeLocation",
          value: function changeLocation() {
            this.router.navigate(['pick-location']);
          }
        }, {
          key: "regresar",
          value: function regresar() {
            this.navCtrl.navigateRoot(['tabs']);
          }
        }]);

        return SaludPage;
      }();

      SaludPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }];
      };

      SaludPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-salud',
        template: _raw_loader_salud_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_salud_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])], SaludPage);
      /***/
    },

    /***/
    "yeAT":
    /*!**************************************************!*\
      !*** ./src/app/CATEGORIAS/salud/salud.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function yeAT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.animated {\n  background-repeat: no-repeat;\n  background-position: left top;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.div_searchbar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 8px;\n}\n\n.div_searchbar .search_bar {\n  padding: 0px;\n  width: 100%;\n}\n\n.chips_div {\n  display: flex;\n  flex-direction: row;\n  overflow: scroll;\n  scrollbar-width: none;\n  /* Firefox */\n  -ms-overflow-style: none;\n  /* Internet Explorer 10+ */\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.chips_div ::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n}\n\n.chips_div ::-webkit-scrollbar-thumb {\n  background: transparent;\n}\n\n.chips_div .chip {\n  border-radius: 3px;\n  padding: 5px 20px;\n  margin-right: 10px;\n  white-space: nowrap;\n  color: lightgray;\n  font-size: 12px;\n  font-weight: bold;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.chips_div .selected {\n  border-radius: 3px;\n  padding: 5px 20px;\n  margin-right: 10px;\n  white-space: nowrap;\n  background: var(--ion-color-primary);\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n\n.main_content_div1 {\n  padding: 16px;\n}\n\n.main_content_div1 .back_image {\n  height: 150px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div1 .heading {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.main_content_div1 .heading .heading_lbl {\n  font-size: 20px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-primary);\n}\n\n.main_content_div1 .heading .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div1 .slider_div .card {\n  margin-top: 15px;\n}\n\n.main_content_div1 .slider_div .card .back_image {\n  height: 200px;\n  width: 250px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  position: relative;\n}\n\n.main_content_div1 .slider_div .card .back_image .time_lbl {\n  padding: 10px;\n  position: absolute;\n  background: white;\n  bottom: 15px;\n  right: 15px;\n  border-radius: 25px;\n  font-size: 12px;\n}\n\n.main_content_div1 .slider_div .card .heading_lbl {\n  font-size: 20px;\n  display: block;\n  margin-top: 10px;\n  text-align: left;\n}\n\n.main_content_div1 .slider_div .card .price_rating {\n  display: flex;\n  height: 25px;\n  align-items: flex-start;\n}\n\n.main_content_div1 .slider_div .card .price_rating .rating {\n  color: var(--ion-color-primary);\n  font-size: 15px;\n  margin-left: 10px;\n}\n\n.main_content_div1 .slider_div .card .price_rating .red_lbl {\n  color: var(--ion-color-primary);\n  font-size: 12px;\n}\n\n.main_content_div1 .slider_div .card .price_rating .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div1 .card_div .heading {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.main_content_div1 .card_div .heading .heading_lbl {\n  font-size: 20px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-primary);\n}\n\n.main_content_div1 .card_div .heading .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div1 .card_div .card {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n}\n\n.main_content_div1 .card_div .card .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.main_content_div1 .card_div .card .desc_div .heading_lbl {\n  font-size: 1rem;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div1 .card_div .card .desc_div .small_lbl {\n  font-size: 0.8rem;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div1 .card_div .card .ratting {\n  background: #00b3f0;\n  padding: 2px 5px;\n  text-align: center;\n}\n\n.main_content_div1 .card_div .card .ratting .rateNumber {\n  color: white;\n  font-size: 0.8rem;\n}\n\n.main_content_div1 .card_div .cardClosed {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  background: #ebebeb;\n  margin: 10px 0px;\n  border-radius: 15px;\n}\n\n.main_content_div1 .card_div .cardClosed .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.main_content_div1 .card_div .cardClosed .desc_div .heading_lbl {\n  font-size: 1rem;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div1 .card_div .cardClosed .desc_div .small_lbl {\n  font-size: 0.8rem;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div1 .card_div .cardClosed .ratting {\n  background: #00b3f0;\n  padding: 2px 5px;\n  text-align: center;\n}\n\n.main_content_div1 .card_div .cardClosed .ratting .rateNumber {\n  color: white;\n  font-size: 0.8rem;\n}\n\n.main_content_div1 .card_div .cardClosed .closed {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  border-radius: 5px;\n  font-size: 1rem;\n  padding: 5px;\n}\n\n.main_content_div2 .back_image {\n  height: 150px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div2 ion-card {\n  margin: 0;\n  padding: 10px;\n  --border-radius: 0px !important;\n}\n\n.main_content_div2 ion-card .image_back {\n  height: 150px;\n  width: 100%;\n  min-width: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n\n.main_content_div2 ion-card ion-card-content {\n  padding: 10px;\n  position: relative;\n}\n\n.main_content_div2 ion-card ion-card-content .bold_lbl {\n  font-weight: 600;\n  color: black;\n  margin-bottom: 5px;\n  display: block;\n}\n\n.main_content_div2 ion-card ion-card-content .small_lbl {\n  font-size: 12px;\n  color: black;\n  margin-bottom: 5px;\n  display: block;\n}\n\n.main_content_div2 ion-card ion-card-content .distance_lbl {\n  font-size: 12px;\n  color: gray;\n  display: flex;\n  flex-direction: row;\n  display: block;\n}\n\n.main_content_div2 ion-card ion-card-content .distance_lbl2 {\n  font-size: 12px;\n  color: gray;\n  display: flex;\n  flex-direction: row;\n  font-weight: bold;\n  display: block;\n}\n\n.main_content_div2 ion-card ion-card-content .number_badge {\n  position: absolute;\n  right: 10px;\n  top: 1px;\n  width: 40px;\n  padding: 5px;\n}\n\n.main_content_div2 ion-card ion-card-content .storeTime {\n  position: absolute;\n  right: 10px;\n  bottom: 15px;\n  padding: 5px;\n}\n\n.main_content_div2 ion-card ion-card-content .flex_div {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.main_content_div3 .back_image {\n  height: 150px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div3 .main_div {\n  margin: 10px;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.main_content_div3 .main_div .image_back {\n  height: 100px;\n  width: 100%;\n  min-width: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n\n.main_content_div3 .main_div .heading_lbl {\n  font-size: 12px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-dark);\n  font-weight: bold;\n}\n\n.main_content_div3 .main_div .small_lbl {\n  font-size: 10px;\n  color: gray;\n}\n\n.main_content_div3 .main_div .clbl {\n  position: absolute;\n  bottom: 0px;\n  right: 5px;\n  font-size: 12px;\n  font-weight: bold;\n  color: var(--ion-color-danger);\n}\n\n.main_content_div3 .main_div .more_data {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.main_content_div3 .main_div .more_data .information {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.main_content_div3 .main_div .more_data .information ion-icon {\n  font-size: 15px;\n}\n\n.main_content_div3 .main_div .more_data .information .lbl {\n  font-size: 10px;\n}\n\n.deliveryAddress {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px 10px 0px 10px;\n}\n\n.deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.deliveryAddress .userPhoto {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NhbHVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRztFQUNDLG1CQUFBO0FBQUo7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLG9DQUFBO0VBQ047RUFDRTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFQUFOO0VBRUU7SUFDSSxVQUFBO0lBQ0Esd0JBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0ksa0NBQUE7RUFDQSwwQkFBQTtBQURKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQURSOztBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUF1QixZQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLDBCQUFBO0VBQzFCLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBQ0k7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7QUFDUjs7QUFDSTtFQUNJLHVCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUNJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBQ1I7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QTtFQUNBLFdBQUE7QUE1Qlo7O0FBOEJRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBNUJaOztBQThCUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUE1Qlo7O0FBNkJZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTNCaEI7O0FBNEJnQjtFQUNJLGVBQUE7QUExQnBCOztBQTRCZ0I7RUFDSSxlQUFBO0FBMUJwQjs7QUFpQ0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQTlCSjs7QUErQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQTdCUjs7QUErQkk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQTdCUjs7QUErQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBN0JSIiwiZmlsZSI6InNhbHVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgIC8vXG4gICBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuLmFuaW1hdGVkIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cblxuLmZhZGVJbkRvd24ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG59XG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uZGl2X3NlYXJjaGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG5cbiAgICAuc2VhcmNoX2JhciB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uY2hpcHNfZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuY2hpcCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbn1cblxuLm5vRGF0YSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLm1haW5fY29udGVudF9kaXYxIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIC5iYWNrX2ltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuXG4gICAgLmhlYWRpbmcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgIC5oZWFkaW5nX2xibCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICAgIC5zbWFsbF9sYmwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zbGlkZXJfZGl2IHtcbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIC5iYWNrX2ltYWdlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgLnRpbWVfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRpbmdfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgLy9mb250LWZhbWlseTogb3Blbi1ib2xkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZV9yYXRpbmcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIC5yYXRpbmcge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVkX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgLy9mb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmRfZGl2IHtcbiAgICAgICAgLmhlYWRpbmcge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgICAgICAuaGVhZGluZ19sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsX2xibCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgLy9mb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgLmltYWdlX2RpdiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY19kaXYge1xuICAgICAgICAgICAgICAgIC5oZWFkaW5nX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zbWFsbF9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdHRpbmcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwYjNmMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAucmF0ZU51bWJlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jYXJkQ2xvc2VkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAuaW1hZ2VfZGl2IHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNjX2RpdiB7XG4gICAgICAgICAgICAgICAgLmhlYWRpbmdfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNtYWxsX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0dGluZyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwYjNmMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAucmF0ZU51bWJlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsb3NlZCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5tYWluX2NvbnRlbnRfZGl2MiB7XG4gICAgLmJhY2tfaW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG4gICAgaW9uLWNhcmQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC5pbWFnZV9iYWNrIHtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAuYm9sZF9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbWFsbF9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRpc3RhbmNlX2xibCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXN0YW5jZV9sYmwyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm51bWJlcl9iYWRnZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdG9yZVRpbWUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZmxleF9kaXYge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5tYWluX2NvbnRlbnRfZGl2MyB7XG4gICAgLmJhY2tfaW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB9XG4gICAgLm1haW5fZGl2IHtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLmltYWdlX2JhY2sge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRpbmdfbGJsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICB9XG4gICAgICAgIC5jbGJsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICB9XG4gICAgICAgIC5tb3JlX2RhdGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgLmluZm9ybWF0aW9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kZWxpdmVyeUFkZHJlc3N7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMjBweCAxMHB4IDBweCAxMHB4O1xuICAgIC5waW57XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuICAgIC5hZGRyZXNze1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICAudXNlclBob3Rve1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=CATEGORIAS-salud-salud-module-es5.js.map