(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/1to":
    /*!***********************************************************!*\
      !*** ./src/app/pages/driver-rating/driver-rating.page.ts ***!
      \***********************************************************/

    /*! exports provided: DriverRatingPage */

    /***/
    function to(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverRatingPage", function () {
        return DriverRatingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_driver_rating_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./driver-rating.page.html */
      "ac/F");
      /* harmony import */


      var _driver_rating_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./driver-rating.page.scss */
      "Hg1L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); //


      var DriverRatingPage = /*#__PURE__*/function () {
        function DriverRatingPage(util, api, route) {
          var _this = this;

          _classCallCheck(this, DriverRatingPage);

          this.util = util;
          this.api = api;
          this.route = route;
          this.rate = 2;
          this.comment = '';
          this.rating = [];
          this.route.queryParams.subscribe(function (data) {
            // console.log(data);
            if (data && data.id && data.name) {
              _this.id = data.id;
              _this.name = data.name;
              _this.way = 'order'; // console.log('id', this.id);
              // console.log('name', this.name);

              var param = {
                where: 'did = ' + _this.id
              };

              _this.util.show();

              _this.api.post('rating/getFromCount', param).then(function (data) {
                _this.util.hide(); // console.log('data', data);


                if (data && data.status === 200) {
                  if (data && data.data && data.data.total) {
                    _this.total = data.data.total;

                    if (data.data.rating) {
                      var rats = data.data.rating; // console.log(rats.split(','));

                      _this.rating = rats.split(',');
                    } else {
                      _this.rating = [];
                    }
                  } else {
                    _this.total = 0;
                    _this.rating = [];
                  }
                } else {
                  _this.total = 0;
                  _this.rating = [];
                } // console.log('total', this.total);

              }, function (error) {
                // console.log(error);
                _this.util.hide();

                _this.total = 0;
                _this.rating = [];
              });
            }
          });
        }

        _createClass(DriverRatingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.util.back();
          }
        }, {
          key: "onRatingChange",
          value: function onRatingChange(event) {// console.log(event);
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            this.rating.push(this.rate);
            var count = 0;
            var sum = this.rating.reduce(function (sum, item, index) {
              item = parseFloat(item); // console.log(sum, item, index);

              count += item;
              return sum + item * (index + 1);
            }, 0); // console.log(sum / count);

            var storeRating = (sum / count).toFixed(2); // console.log('rate', this.rate, this.comment);

            if (this.comment === '') {
              this.util.errorToast('Algo ha ido mal');
              return false;
            }

            var param = {
              uid: localStorage.getItem('uid'),
              pid: 0,
              did: this.id,
              sid: 0,
              rate: this.rate,
              msg: this.comment,
              way: this.way,
              status: 1,
              timestamp: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD')
            };
            this.util.show();
            this.api.post('rating/save', param).then(function (data) {
              // console.log(data);
              _this2.util.hide();

              if (data && data.status === 200) {
                _this2.util.showToast(_this2.util.translate('Rating added'), 'success', 'bottom');

                _this2.close();
              } else {
                _this2.util.errorToast('Algo ha ido mal');
              }
            }, function (error) {
              _this2.util.hide(); // console.log(error);


              _this2.util.errorToast('Algo ha ido mal');
            });
          }
        }]);

        return DriverRatingPage;
      }();

      DriverRatingPage.ctorParameters = function () {
        return [{
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      };

      DriverRatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-driver-rating',
        template: _raw_loader_driver_rating_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_driver_rating_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])], DriverRatingPage);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/fernandoramostimote/Documents/MrManda2 Usuario/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0oYm":
    /*!***************************************************!*\
      !*** ./src/app/components/menu/menu.component.ts ***!
      \***************************************************/

    /*! exports provided: MenuComponent */

    /***/
    function oYm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./menu.component.html */
      "AabN");
      /* harmony import */


      var _menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu.component.scss */
      "nfPh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/"); //


      var MenuComponent = /*#__PURE__*/function () {
        function MenuComponent(navParam, popoverController) {
          _classCallCheck(this, MenuComponent);

          this.navParam = navParam;
          this.popoverController = popoverController;
          this.id = this.navParam.get('id');
          this.cates = this.navParam.get('data');
        }

        _createClass(MenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "selected",
          value: function selected(item) {
            this.popoverController.dismiss(item, 'selected');
          }
        }]);

        return MenuComponent;
      }();

      MenuComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }];
      };

      MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])], MenuComponent);
      /***/
    },

    /***/
    "2Rin":
    /*!******************************************!*\
      !*** ./src/app/services/util.service.ts ***!
      \******************************************/

    /*! exports provided: UtilService */

    /***/
    function Rin(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilService", function () {
        return UtilService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1"); //


      var UtilService = /*#__PURE__*/function () {
        function UtilService(loadingCtrl, alertCtrl, toastCtrl, router, navCtrl, storage, menuCtrl) {
          _classCallCheck(this, UtilService);

          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl;
          this.toastCtrl = toastCtrl;
          this.router = router;
          this.navCtrl = navCtrl;
          this.storage = storage;
          this.menuCtrl = menuCtrl;
          this.isLoading = false;
          this.address = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.coupon = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.review = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.changeLocation = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.profile = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.newOrder = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.translations = [];
          this.appClosedMessage = '';
          this.appPages = [];
          this.cityAddress = '';
          this.favIds = [];
          this.countrys = [{
            country_code: 'AF',
            country_name: 'Afghanistan',
            dialling_code: '93'
          }, {
            country_code: 'AL',
            country_name: 'Albania',
            dialling_code: '355'
          }, {
            country_code: 'DZ',
            country_name: 'Algeria',
            dialling_code: '213'
          }, {
            country_code: 'AS',
            country_name: 'American Samoa',
            dialling_code: '1'
          }, {
            country_code: 'AD',
            country_name: 'Andorra',
            dialling_code: '376'
          }, {
            country_code: 'AO',
            country_name: 'Angola',
            dialling_code: '244'
          }, {
            country_code: 'AI',
            country_name: 'Anguilla',
            dialling_code: '1'
          }, {
            country_code: 'AG',
            country_name: 'Antigua',
            dialling_code: '1'
          }, {
            country_code: 'AR',
            country_name: 'Argentina',
            dialling_code: '54'
          }, {
            country_code: 'AM',
            country_name: 'Armenia',
            dialling_code: '374'
          }, {
            country_code: 'AW',
            country_name: 'Aruba',
            dialling_code: '297'
          }, {
            country_code: 'AU',
            country_name: 'Australia',
            dialling_code: '61'
          }, {
            country_code: 'AI',
            country_name: 'Austria',
            dialling_code: '43'
          }, {
            country_code: 'AZ',
            country_name: 'Azerbaijan',
            dialling_code: '994'
          }, {
            country_code: 'BH',
            country_name: 'Bahrain',
            dialling_code: '973'
          }, {
            country_code: 'BD',
            country_name: 'Bangladesh',
            dialling_code: '880'
          }, {
            country_code: 'BB',
            country_name: 'Barbados',
            dialling_code: '1'
          }, {
            country_code: 'BY',
            country_name: 'Belarus',
            dialling_code: '375'
          }, {
            country_code: 'BE',
            country_name: 'Belgium',
            dialling_code: '32'
          }, {
            country_code: 'BZ',
            country_name: 'Belize',
            dialling_code: '501'
          }, {
            country_code: 'BJ',
            country_name: 'Benin',
            dialling_code: '229'
          }, {
            country_code: 'BM',
            country_name: 'Bermuda',
            dialling_code: '1'
          }, {
            country_code: 'BT',
            country_name: 'Bhutan',
            dialling_code: '975'
          }, {
            country_code: 'BO',
            country_name: 'Bolivia',
            dialling_code: '591'
          }, {
            country_code: 'BA',
            country_name: 'Bosnia and Herzegovina',
            dialling_code: '387'
          }, {
            country_code: 'BW',
            country_name: 'Botswana',
            dialling_code: '267'
          }, {
            country_code: 'BR',
            country_name: 'Brazil',
            dialling_code: '55'
          }, {
            country_code: 'IO',
            country_name: 'British Indian Ocean Territory',
            dialling_code: '246'
          }, {
            country_code: 'VG',
            country_name: 'British Virgin Islands',
            dialling_code: '1'
          }, {
            country_code: 'BN',
            country_name: 'Brunei',
            dialling_code: '673'
          }, {
            country_code: 'BG',
            country_name: 'Bulgaria',
            dialling_code: '359'
          }, {
            country_code: 'BF',
            country_name: 'Burkina Faso',
            dialling_code: '226'
          }, {
            country_code: 'MM',
            country_name: 'Burma Myanmar',
            dialling_code: '95'
          }, {
            country_code: 'BI',
            country_name: 'Burundi',
            dialling_code: '257'
          }, {
            country_code: 'KH',
            country_name: 'Cambodia',
            dialling_code: '855'
          }, {
            country_code: 'CM',
            country_name: 'Cameroon',
            dialling_code: '237'
          }, {
            country_code: 'CA',
            country_name: 'Canada',
            dialling_code: '1'
          }, {
            country_code: 'CV',
            country_name: 'Cape Verde',
            dialling_code: '238'
          }, {
            country_code: 'KY',
            country_name: 'Cayman Islands',
            dialling_code: '1'
          }, {
            country_code: 'CF',
            country_name: 'Central African Republic',
            dialling_code: '236'
          }, {
            country_code: 'ID',
            country_name: 'Chad',
            dialling_code: '235'
          }, {
            country_code: 'CL',
            country_name: 'Chile',
            dialling_code: '56'
          }, {
            country_code: 'CN',
            country_name: 'China',
            dialling_code: '86'
          }, {
            country_code: 'CO',
            country_name: 'Colombia',
            dialling_code: '57'
          }, {
            country_code: 'KM',
            country_name: 'Comoros',
            dialling_code: '269'
          }, {
            country_code: 'CK',
            country_name: 'Cook Islands',
            dialling_code: '682'
          }, {
            country_code: 'CR',
            country_name: 'Costa Rica',
            dialling_code: '506'
          }, {
            country_code: 'CI',
            country_name: "C\xF4te d'Ivoire",
            dialling_code: '225'
          }, {
            country_code: 'HR',
            country_name: 'Croatia',
            dialling_code: '385'
          }, {
            country_code: 'CU',
            country_name: 'Cuba',
            dialling_code: '53'
          }, {
            country_code: 'CY',
            country_name: 'Cyprus',
            dialling_code: '357'
          }, {
            country_code: 'CZ',
            country_name: 'Czech Republic',
            dialling_code: '420'
          }, {
            country_code: 'CD',
            country_name: 'Democratic Republic of Congo',
            dialling_code: '243'
          }, {
            country_code: 'DK',
            country_name: 'Denmark',
            dialling_code: '45'
          }, {
            country_code: 'DJ',
            country_name: 'Djibouti',
            dialling_code: '253'
          }, {
            country_code: 'DM',
            country_name: 'Dominica',
            dialling_code: '1'
          }, {
            country_code: 'DO',
            country_name: 'Dominican Republic',
            dialling_code: '1'
          }, {
            country_code: 'EC',
            country_name: 'Ecuador',
            dialling_code: '593'
          }, {
            country_code: 'EG',
            country_name: 'Egypt',
            dialling_code: '20'
          }, {
            country_code: 'SV',
            country_name: 'El Salvador',
            dialling_code: '503'
          }, {
            country_code: 'GQ',
            country_name: 'Equatorial Guinea',
            dialling_code: '240'
          }, {
            country_code: 'ER',
            country_name: 'Eritrea',
            dialling_code: '291'
          }, {
            country_code: 'EE',
            country_name: 'Estonia',
            dialling_code: '372'
          }, {
            country_code: 'ET',
            country_name: 'Ethiopia',
            dialling_code: '251'
          }, {
            country_code: 'FK',
            country_name: 'Falkland Islands',
            dialling_code: '500'
          }, {
            country_code: 'FO',
            country_name: 'Faroe Islands',
            dialling_code: '298'
          }, {
            country_code: 'FM',
            country_name: 'Federated States of Micronesia',
            dialling_code: '691'
          }, {
            country_code: 'FJ',
            country_name: 'Fiji',
            dialling_code: '679'
          }, {
            country_code: 'FI',
            country_name: 'Finland',
            dialling_code: '358'
          }, {
            country_code: 'FR',
            country_name: 'France',
            dialling_code: '33'
          }, {
            country_code: 'GF',
            country_name: 'French Guiana',
            dialling_code: '594'
          }, {
            country_code: 'PF',
            country_name: 'French Polynesia',
            dialling_code: '689'
          }, {
            country_code: 'GA',
            country_name: 'Gabon',
            dialling_code: '241'
          }, {
            country_code: 'GE',
            country_name: 'Georgia',
            dialling_code: '995'
          }, {
            country_code: 'DE',
            country_name: 'Germany',
            dialling_code: '49'
          }, {
            country_code: 'GH',
            country_name: 'Ghana',
            dialling_code: '233'
          }, {
            country_code: 'GI',
            country_name: 'Gibraltar',
            dialling_code: '350'
          }, {
            country_code: 'GR',
            country_name: 'Greece',
            dialling_code: '30'
          }, {
            country_code: 'GL',
            country_name: 'Greenland',
            dialling_code: '299'
          }, {
            country_code: 'GD',
            country_name: 'Grenada',
            dialling_code: '1'
          }, {
            country_code: 'GP',
            country_name: 'Guadeloupe',
            dialling_code: '590'
          }, {
            country_code: 'GU',
            country_name: 'Guam',
            dialling_code: '1'
          }, {
            country_code: 'GT',
            country_name: 'Guatemala',
            dialling_code: '502'
          }, {
            country_code: 'GN',
            country_name: 'Guinea',
            dialling_code: '224'
          }, {
            country_code: 'GW',
            country_name: 'Guinea-Bissau',
            dialling_code: '245'
          }, {
            country_code: 'GY',
            country_name: 'Guyana',
            dialling_code: '592'
          }, {
            country_code: 'HT',
            country_name: 'Haiti',
            dialling_code: '509'
          }, {
            country_code: 'HN',
            country_name: 'Honduras',
            dialling_code: '504'
          }, {
            country_code: 'HK',
            country_name: 'Hong Kong',
            dialling_code: '852'
          }, {
            country_code: 'HU',
            country_name: 'Hungary',
            dialling_code: '36'
          }, {
            country_code: 'IS',
            country_name: 'Iceland',
            dialling_code: '354'
          }, {
            country_code: 'IN',
            country_name: 'India',
            dialling_code: '91'
          }, {
            country_code: 'ID',
            country_name: 'Indonesia',
            dialling_code: '62'
          }, {
            country_code: 'IR',
            country_name: 'Iran',
            dialling_code: '98'
          }, {
            country_code: 'IQ',
            country_name: 'Iraq',
            dialling_code: '964'
          }, {
            country_code: 'IE',
            country_name: 'Ireland',
            dialling_code: '353'
          }, {
            country_code: 'IL',
            country_name: 'Israel',
            dialling_code: '972'
          }, {
            country_code: 'IT',
            country_name: 'Italy',
            dialling_code: '39'
          }, {
            country_code: 'JM',
            country_name: 'Jamaica',
            dialling_code: '1'
          }, {
            country_code: 'JP',
            country_name: 'Japan',
            dialling_code: '81'
          }, {
            country_code: 'JO',
            country_name: 'Jordan',
            dialling_code: '962'
          }, {
            country_code: 'KZ',
            country_name: 'Kazakhstan',
            dialling_code: '7'
          }, {
            country_code: 'KE',
            country_name: 'Kenya',
            dialling_code: '254'
          }, {
            country_code: 'KI',
            country_name: 'Kiribati',
            dialling_code: '686'
          }, {
            country_code: 'XK',
            country_name: 'Kosovo',
            dialling_code: '381'
          }, {
            country_code: 'KW',
            country_name: 'Kuwait',
            dialling_code: '965'
          }, {
            country_code: 'KG',
            country_name: 'Kyrgyzstan',
            dialling_code: '996'
          }, {
            country_code: 'LA',
            country_name: 'Laos',
            dialling_code: '856'
          }, {
            country_code: 'LV',
            country_name: 'Latvia',
            dialling_code: '371'
          }, {
            country_code: 'LB',
            country_name: 'Lebanon',
            dialling_code: '961'
          }, {
            country_code: 'LS',
            country_name: 'Lesotho',
            dialling_code: '266'
          }, {
            country_code: 'LR',
            country_name: 'Liberia',
            dialling_code: '231'
          }, {
            country_code: 'LY',
            country_name: 'Libya',
            dialling_code: '218'
          }, {
            country_code: 'LI',
            country_name: 'Liechtenstein',
            dialling_code: '423'
          }, {
            country_code: 'LT',
            country_name: 'Lithuania',
            dialling_code: '370'
          }, {
            country_code: 'LU',
            country_name: 'Luxembourg',
            dialling_code: '352'
          }, {
            country_code: 'MO',
            country_name: 'Macau',
            dialling_code: '853'
          }, {
            country_code: 'MK',
            country_name: 'Macedonia',
            dialling_code: '389'
          }, {
            country_code: 'MG',
            country_name: 'Madagascar',
            dialling_code: '261'
          }, {
            country_code: 'MW',
            country_name: 'Malawi',
            dialling_code: '265'
          }, {
            country_code: 'MY',
            country_name: 'Malaysia',
            dialling_code: '60'
          }, {
            country_code: 'MV',
            country_name: 'Maldives',
            dialling_code: '960'
          }, {
            country_code: 'ML',
            country_name: 'Mali',
            dialling_code: '223'
          }, {
            country_code: 'MT',
            country_name: 'Malta',
            dialling_code: '356'
          }, {
            country_code: 'MH',
            country_name: 'Marshall Islands',
            dialling_code: '692'
          }, {
            country_code: 'MQ',
            country_name: 'Martinique',
            dialling_code: '596'
          }, {
            country_code: 'MR',
            country_name: 'Mauritania',
            dialling_code: '222'
          }, {
            country_code: 'MU',
            country_name: 'Mauritius',
            dialling_code: '230'
          }, {
            country_code: 'YT',
            country_name: 'Mayotte',
            dialling_code: '262'
          }, {
            country_code: 'MX',
            country_name: 'Mexico',
            dialling_code: '52'
          }, {
            country_code: 'MD',
            country_name: 'Moldova',
            dialling_code: '373'
          }, {
            country_code: 'MC',
            country_name: 'Monaco',
            dialling_code: '377'
          }, {
            country_code: 'MN',
            country_name: 'Mongolia',
            dialling_code: '976'
          }, {
            country_code: 'ME',
            country_name: 'Montenegro',
            dialling_code: '382'
          }, {
            country_code: 'MS',
            country_name: 'Montserrat',
            dialling_code: '1'
          }, {
            country_code: 'MA',
            country_name: 'Morocco',
            dialling_code: '212'
          }, {
            country_code: 'MZ',
            country_name: 'Mozambique',
            dialling_code: '258'
          }, {
            country_code: 'NA',
            country_name: 'Namibia',
            dialling_code: '264'
          }, {
            country_code: 'NR',
            country_name: 'Nauru',
            dialling_code: '674'
          }, {
            country_code: 'NP',
            country_name: 'Nepal',
            dialling_code: '977'
          }, {
            country_code: 'NL',
            country_name: 'Netherlands',
            dialling_code: '31'
          }, {
            country_code: 'AN',
            country_name: 'Netherlands Antilles',
            dialling_code: '599'
          }, {
            country_code: 'NC',
            country_name: 'New Caledonia',
            dialling_code: '687'
          }, {
            country_code: 'NZ',
            country_name: 'New Zealand',
            dialling_code: '64'
          }, {
            country_code: 'NI',
            country_name: 'Nicaragua',
            dialling_code: '505'
          }, {
            country_code: 'NE',
            country_name: 'Niger',
            dialling_code: '227'
          }, {
            country_code: 'NG',
            country_name: 'Nigeria',
            dialling_code: '234'
          }, {
            country_code: 'NU',
            country_name: 'Niue',
            dialling_code: '683'
          }, {
            country_code: 'NF',
            country_name: 'Norfolk Island',
            dialling_code: '672'
          }, {
            country_code: 'KP',
            country_name: 'North Korea',
            dialling_code: '850'
          }, {
            country_code: 'MP',
            country_name: 'Northern Mariana Islands',
            dialling_code: '1'
          }, {
            country_code: 'NO',
            country_name: 'Norway',
            dialling_code: '47'
          }, {
            country_code: 'OM',
            country_name: 'Oman',
            dialling_code: '968'
          }, {
            country_code: 'PK',
            country_name: 'Pakistan',
            dialling_code: '92'
          }, {
            country_code: 'PW',
            country_name: 'Palau',
            dialling_code: '680'
          }, {
            country_code: 'PS',
            country_name: 'Palestine',
            dialling_code: '970'
          }, {
            country_code: 'PA',
            country_name: 'Panama',
            dialling_code: '507'
          }, {
            country_code: 'PG',
            country_name: 'Papua New Guinea',
            dialling_code: '675'
          }, {
            country_code: 'PY',
            country_name: 'Paraguay',
            dialling_code: '595'
          }, {
            country_code: 'PE',
            country_name: 'Peru',
            dialling_code: '51'
          }, {
            country_code: 'PH',
            country_name: 'Philippines',
            dialling_code: '63'
          }, {
            country_code: 'PL',
            country_name: 'Poland',
            dialling_code: '48'
          }, {
            country_code: 'PT',
            country_name: 'Portugal',
            dialling_code: '351'
          }, {
            country_code: 'PR',
            country_name: 'Puerto Rico',
            dialling_code: '1'
          }, {
            country_code: 'QA',
            country_name: 'Qatar',
            dialling_code: '974'
          }, {
            country_code: 'CG',
            country_name: 'Republic of the Congo',
            dialling_code: '242'
          }, {
            country_code: 'RE',
            country_name: 'Réunion',
            dialling_code: '262'
          }, {
            country_code: 'RO',
            country_name: 'Romania',
            dialling_code: '40'
          }, {
            country_code: 'RU',
            country_name: 'Russia',
            dialling_code: '7'
          }, {
            country_code: 'RW',
            country_name: 'Rwanda',
            dialling_code: '250'
          }, {
            country_code: 'BL',
            country_name: 'Saint Barthélemy',
            dialling_code: '590'
          }, {
            country_code: 'SH',
            country_name: 'Saint Helena',
            dialling_code: '290'
          }, {
            country_code: 'KN',
            country_name: 'Saint Kitts and Nevis',
            dialling_code: '1'
          }, {
            country_code: 'MF',
            country_name: 'Saint Martin',
            dialling_code: '590'
          }, {
            country_code: 'PM',
            country_name: 'Saint Pierre and Miquelon',
            dialling_code: '508'
          }, {
            country_code: 'VC',
            country_name: 'Saint Vincent and the Grenadines',
            dialling_code: '1'
          }, {
            country_code: 'WS',
            country_name: 'Samoa',
            dialling_code: '685'
          }, {
            country_code: 'SM',
            country_name: 'San Marino',
            dialling_code: '378'
          }, {
            country_code: 'ST',
            country_name: 'São Tomé and Príncipe',
            dialling_code: '239'
          }, {
            country_code: 'SA',
            country_name: 'Saudi Arabia',
            dialling_code: '966'
          }, {
            country_code: 'SN',
            country_name: 'Senegal',
            dialling_code: '221'
          }, {
            country_code: 'RS',
            country_name: 'Serbia',
            dialling_code: '381'
          }, {
            country_code: 'SC',
            country_name: 'Seychelles',
            dialling_code: '248'
          }, {
            country_code: 'SL',
            country_name: 'Sierra Leone',
            dialling_code: '232'
          }, {
            country_code: 'SG',
            country_name: 'Singapore',
            dialling_code: '65'
          }, {
            country_code: 'SK',
            country_name: 'Slovakia',
            dialling_code: '421'
          }, {
            country_code: 'SI',
            country_name: 'Slovenia',
            dialling_code: '386'
          }, {
            country_code: 'SB',
            country_name: 'Solomon Islands',
            dialling_code: '677'
          }, {
            country_code: 'SO',
            country_name: 'Somalia',
            dialling_code: '252'
          }, {
            country_code: 'ZA',
            country_name: 'South Africa',
            dialling_code: '27'
          }, {
            country_code: 'KR',
            country_name: 'South Korea',
            dialling_code: '82'
          }, {
            country_code: 'ES',
            country_name: 'Spain',
            dialling_code: '34'
          }, {
            country_code: 'LK',
            country_name: 'Sri Lanka',
            dialling_code: '94'
          }, {
            country_code: 'LC',
            country_name: 'St. Lucia',
            dialling_code: '1'
          }, {
            country_code: 'SD',
            country_name: 'Sudan',
            dialling_code: '249'
          }, {
            country_code: 'SR',
            country_name: 'Suriname',
            dialling_code: '597'
          }, {
            country_code: 'SZ',
            country_name: 'Swaziland',
            dialling_code: '268'
          }, {
            country_code: 'SE',
            country_name: 'Sweden',
            dialling_code: '46'
          }, {
            country_code: 'CH',
            country_name: 'Switzerland',
            dialling_code: '41'
          }, {
            country_code: 'SY',
            country_name: 'Syria',
            dialling_code: '963'
          }, {
            country_code: 'TW',
            country_name: 'Taiwan',
            dialling_code: '886'
          }, {
            country_code: 'TJ',
            country_name: 'Tajikistan',
            dialling_code: '992'
          }, {
            country_code: 'TZ',
            country_name: 'Tanzania',
            dialling_code: '255'
          }, {
            country_code: 'TH',
            country_name: 'Thailand',
            dialling_code: '66'
          }, {
            country_code: 'BS',
            country_name: 'The Bahamas',
            dialling_code: '1'
          }, {
            country_code: 'GM',
            country_name: 'The Gambia',
            dialling_code: '220'
          }, {
            country_code: 'TL',
            country_name: 'Timor-Leste',
            dialling_code: '670'
          }, {
            country_code: 'TG',
            country_name: 'Togo',
            dialling_code: '228'
          }, {
            country_code: 'TK',
            country_name: 'Tokelau',
            dialling_code: '690'
          }, {
            country_code: 'TO',
            country_name: 'Tonga',
            dialling_code: '676'
          }, {
            country_code: 'TT',
            country_name: 'Trinidad and Tobago',
            dialling_code: '1'
          }, {
            country_code: 'TN',
            country_name: 'Tunisia',
            dialling_code: '216'
          }, {
            country_code: 'TR',
            country_name: 'Turkey',
            dialling_code: '90'
          }, {
            country_code: 'TM',
            country_name: 'Turkmenistan',
            dialling_code: '993'
          }, {
            country_code: 'TC',
            country_name: 'Turks and Caicos Islands',
            dialling_code: '1'
          }, {
            country_code: 'TV',
            country_name: 'Tuvalu',
            dialling_code: '688'
          }, {
            country_code: 'UG',
            country_name: 'Uganda',
            dialling_code: '256'
          }, {
            country_code: 'UA',
            country_name: 'Ukraine',
            dialling_code: '380'
          }, {
            country_code: 'AE',
            country_name: 'United Arab Emirates',
            dialling_code: '971'
          }, {
            country_code: 'GB',
            country_name: 'United Kingdom',
            dialling_code: '44'
          }, {
            country_code: 'US',
            country_name: 'United States',
            dialling_code: '1'
          }, {
            country_code: 'UY',
            country_name: 'Uruguay',
            dialling_code: '598'
          }, {
            country_code: 'VI',
            country_name: 'US Virgin Islands',
            dialling_code: '1'
          }, {
            country_code: 'UZ',
            country_name: 'Uzbekistan',
            dialling_code: '998'
          }, {
            country_code: 'VU',
            country_name: 'Vanuatu',
            dialling_code: '678'
          }, {
            country_code: 'VA',
            country_name: 'Vatican City',
            dialling_code: '39'
          }, {
            country_code: 'VE',
            country_name: 'Venezuela',
            dialling_code: '58'
          }, {
            country_code: 'VN',
            country_name: 'Vietnam',
            dialling_code: '84'
          }, {
            country_code: 'WF',
            country_name: 'Wallis and Futuna',
            dialling_code: '681'
          }, {
            country_code: 'YE',
            country_name: 'Yemen',
            dialling_code: '967'
          }, {
            country_code: 'ZM',
            country_name: 'Zambia',
            dialling_code: '260'
          }, {
            country_code: 'ZW',
            country_name: 'Zimbabwe',
            dialling_code: '263'
          }];
          this.user_login = '0';
          this.home_type = '0';
          this.reset_pwd = '0';
          this.appPages = [{
            title: 'Home',
            url: 'tabs/tab1',
            icon: 'assets/sidemenu/home.png',
            icon2: 'assets/sidemenu/home2.png',
            icn: 'home-outline'
          }, {
            title: 'Profile',
            url: 'tabs/tab4',
            icon: 'assets/sidemenu/user.png',
            icon2: 'assets/sidemenu/user2.png',
            icn: 'person-outline'
          }, {
            title: 'Language',
            url: 'tabs/tab4/languages',
            icon: 'assets/sidemenu/language.png',
            icon2: 'assets/sidemenu/language2.png',
            icn: 'language-outline'
          }, {
            title: 'Contact Us',
            url: 'tabs/tab4/contacts',
            icon: 'mail-outline',
            icn: 'mail-outline'
          }, {
            title: 'About',
            url: 'tabs/tab4/about',
            icon: 'assets/sidemenu/info.png',
            icon2: 'assets/sidemenu/info2.png',
            icn: 'alert-circle-outline'
          }, {
            title: 'FAQs',
            url: 'tabs/tab4/faqs',
            icon: 'assets/sidemenu/contact.png',
            icon2: 'assets/sidemenu/contact2.png',
            icn: 'flag-outline'
          }, {
            title: 'Help',
            url: 'tabs/tab4/help',
            icon: 'assets/sidemenu/contact.png',
            icon2: 'assets/sidemenu/contact2.png',
            icn: 'help-circle-outline'
          }];
        }
        /*
        Start Loader
        Call this method to Start your Loader
        */


        _createClass(UtilService, [{
          key: "publishAddress",
          value: function publishAddress(data) {
            this.address.next(data);
          }
        }, {
          key: "publishReview",
          value: function publishReview(data) {
            this.review.next(data);
          }
        }, {
          key: "publishProfile",
          value: function publishProfile(data) {
            this.profile.next(data);
          }
        }, {
          key: "publishNewOrder",
          value: function publishNewOrder() {
            this.newOrder.next();
          }
        }, {
          key: "subscribeNewOrder",
          value: function subscribeNewOrder() {
            return this.newOrder;
          }
        }, {
          key: "observProfile",
          value: function observProfile() {
            return this.profile;
          }
        }, {
          key: "getKeys",
          value: function getKeys(key) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              _this3.storage.get(key).then(function (data) {
                resolve(data);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "clearKeys",
          value: function clearKeys(key) {
            this.storage.remove(key);
          }
        }, {
          key: "setKeys",
          value: function setKeys(key, value) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              _this4.storage.set(key, value).then(function (data) {
                resolve(data);
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.back();
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return '';
          }
        }, {
          key: "getReviewObservable",
          value: function getReviewObservable() {
            return this.review;
          }
        }, {
          key: "publishLocation",
          value: function publishLocation() {
            this.changeLocation.next();
          }
        }, {
          key: "subscribeLocation",
          value: function subscribeLocation() {
            return this.changeLocation;
          }
        }, {
          key: "publishLoggedIn",
          value: function publishLoggedIn(data) {
            this.loggedIn.next(data);
          }
        }, {
          key: "subscribeLoggedIn",
          value: function subscribeLoggedIn() {
            return this.loggedIn;
          }
        }, {
          key: "translate",
          value: function translate(str) {
            if (this.translations[str]) {
              return this.translations[str];
            }

            return str;
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "translateInEN",
          value: function translateInEN(str) {
            return str;
          }
        }, {
          key: "getObservable",
          value: function getObservable() {
            return this.address;
          }
        }, {
          key: "publishCoupon",
          value: function publishCoupon(data) {
            this.coupon.next(data);
          }
        }, {
          key: "getCouponObservable",
          value: function getCouponObservable() {
            return this.coupon;
          }
        }, {
          key: "setOrders",
          value: function setOrders(data) {
            this.orders = null;
            this.orders = data;
          }
        }, {
          key: "gerOrder",
          value: function gerOrder() {
            return this.orders;
          }
        }, {
          key: "show",
          value: function show(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isLoading = true;
                      _context.next = 3;
                      return this.loadingCtrl.create({
                        message: msg,
                        spinner: 'bubbles'
                      }).then(function (a) {
                        a.present().then(function () {
                          //console.log('presented');
                          if (!_this5.isLoading) {
                            a.dismiss().then(function () {
                              return console.log('abort presenting');
                            });
                          }
                        });
                      });

                    case 3:
                      return _context.abrupt("return", _context.sent);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "hide",
          value: function hide() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = false;
                      _context2.next = 3;
                      return this.loadingCtrl.dismiss().then(function () {
                        return console.log('dismissed');
                      });

                    case 3:
                      return _context2.abrupt("return", _context2.sent);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /*
            Show Warning Alert Message
            param : msg = message to display
            Call this method to show Warning Alert,
            */

        }, {
          key: "showWarningAlert",
          value: function showWarningAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        header: 'Warning',
                        message: msg,
                        buttons: ['OK']
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
          key: "showSimpleAlert",
          value: function showSimpleAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertCtrl.create({
                        header: '',
                        message: msg,
                        buttons: ['OK']
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
          /*
           Show Error Alert Message
           param : msg = message to display
           Call this method to show Error Alert,
           */

        }, {
          key: "showErrorAlert",
          value: function showErrorAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertCtrl.create({
                        header: 'Error',
                        message: msg,
                        buttons: ['OK']
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
          /*
             param : email = email to verify
             Call this method to get verify email
             */

        }, {
          key: "getEmailFilter",
          value: function getEmailFilter(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var emailfilter, alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

                      if (emailfilter.test(email)) {
                        _context6.next = 10;
                        break;
                      }

                      _context6.next = 4;
                      return this.alertCtrl.create({
                        header: 'Warning',
                        message: 'Please enter valid email',
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context6.sent;
                      _context6.next = 7;
                      return alert.present();

                    case 7:
                      return _context6.abrupt("return", false);

                    case 10:
                      return _context6.abrupt("return", true);

                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "findMessageByStatusDetail",
          value: function findMessageByStatusDetail(status_detail, cb) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var messageToShow, responseCheckout, i, res;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      // console.log("status detail > ", status_detail);
                      responseCheckout = [{
                        "status": "approved",
                        "status_detail": "accredited",
                        "message": "¡Listo! Se acreditó tu pago. En tu resumen verás el monto."
                      }, {
                        "status": "in_process",
                        "status_detail": "pending_contingency",
                        "message": "Estamos procesando tu pago. No te preocupes"
                      }, {
                        "status": "in_process",
                        "status_detail": "pending_review_manual",
                        "message": "Estamos procesando tu pago. No te preocupes"
                      }, {
                        "status": "rejected",
                        "status_detail": "cc_rejected_bad_filled_card_number",
                        "message": "Revisa el número de tarjeta."
                      }, {
                        "status": "rejected",
                        "status_detail": "cc_rejected_bad_filled_date",
                        "message": "Revisa la fecha de vencimiento."
                      }, {
                        "status": "rejected",
                        "status_detail": "cc_rejected_bad_filled_other",
                        "message": "Revisa los datos."
                      }, {
                        "status": "rejected",
                        "status_detail": "cc_rejected_bad_filled_security_code",
                        "message": "Revisa el código de seguridad de la tarjeta."
                      }, {
                        "status": "rejected",
                        "status_detail": "cc_rejected_blacklist",
                        "message": "No pudimos procesar tu pago."
                      }, {
                        "status": "rejected",
                        "status_detail": "cc_rejected_call_for_authorize",
                        "message": "Debes autorizar ante payment_method_id el pago de amount."
                      }, {
                        "status": "rejected",
                        "status_detail": "cc_rejected_card_disabled",
                        "message": "Llama a tu metodo de pago para activar tu tarjeta o usa otro medio de pago. El teléfono está al dorso de tu tarjeta."
                      }, {
                        "status": "rejected",
                        "status_detail": "cc_rejected_card_error",
                        "message": "No pudimos procesar tu pago."
                      }, {
                        "status": "rejected",
                        "status_detail": "cc_rejected_duplicated_payment",
                        "message": "Ya hiciste un pago por ese valor. Si necesitas volver a pagar usa otra tarjeta u otro medio de pago."
                      }, {
                        "status": "rejected",
                        "status_detail": "cc_rejected_high_risk",
                        "message": "Tu pago fue rechazado. Elige otro de los medios de pago"
                      }, {
                        "status": "rejected",
                        "status_detail": "cc_rejected_insufficient_amount",
                        "message": "Tu tarjeta no tiene fondos suficientes."
                      }, {
                        "status": "rejected",
                        "status_detail": "cc_rejected_invalid_installments",
                        "message": "El metodo de pago no procesa pagos en esa cantidad de cuotas."
                      }, {
                        "status": "rejected",
                        "status_detail": "cc_rejected_max_attempts",
                        "message": "Llegaste al límite de intentos permitidos. Elige otra tarjeta u otro medio de pago."
                      }, {
                        "status": "rejected",
                        "status_detail": "cc_rejected_other_reason",
                        "message": "Tu tarjeta no procesó el pago. Errores de ingreso de datos"
                      }];

                      for (i = 0; i < responseCheckout.length; i++) {
                        res = responseCheckout[i];

                        if (res.status_detail == status_detail) {
                          messageToShow = res.message;
                        }
                      }

                      cb(messageToShow); // return messageToShow;

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
          /*
            Show Toast Message on Screen
             param : msg = message to display, color= background
             color of toast example dark,danger,light. position  = position of message example top,bottom
             Call this method to show toast message
             */

        }, {
          key: "showToast",
          value: function showToast(msg, colors, positon) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var toast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toastCtrl.create({
                        message: msg,
                        duration: 2000,
                        color: colors,
                        position: positon
                      });

                    case 2:
                      toast = _context8.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "shoNotification",
          value: function shoNotification(msg, colors, positon) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var toast;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.toastCtrl.create({
                        message: msg,
                        duration: 4000,
                        color: colors,
                        position: positon,
                        buttons: [{
                          text: 'Ok',
                          role: 'cancel',
                          handler: function handler() {// console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      toast = _context9.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "errorToast",
          value: function errorToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var toast;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.toastCtrl.create({
                        message: msg,
                        duration: 2000
                      });

                    case 2:
                      toast = _context10.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "apiErrorHandler",
          value: function apiErrorHandler(err) {
            // console.log('Error got in service =>', err)
            if (err.status === -1) {
              this.showErrorAlert('Failed To Connect With Server');
            } else if (err.status === 401) {
              this.showErrorAlert('Unauthorized Request!');
              this.navCtrl.navigateRoot('/login');
            } else if (err.status === 500) {
              this.showErrorAlert('Somethimg Went Wrong..');
            }
          } // setDetails(data) {
          //   this.details = null;
          //   this.details = data;
          // }
          // getDetails() {
          //   return this.details;
          // }

        }, {
          key: "makeid",
          value: function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;

            for (var i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
          }
        }]);

        return UtilService;
      }();

      UtilService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }];
      };

      UtilService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], UtilService);
      /***/
    },

    /***/
    "2Vrb":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-rating/product-rating.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vrb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{name}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"main_div\">\n\n      <div class=\"info_div\">\n        <div class=\"rattingBtns\">\n          <rating [(ngModel)]=\"rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\"\n            halfStarIconName=\"star-half\" starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\">\n          </rating>\n        </div>\n        <div class=\"name\">\n          <div class=\"content_div\">\n            <ion-textarea row=\"8\" type=\"text\" [placeholder]=\"util.translate('Comment')\" [(ngModel)]=\"comment\">\n            </ion-textarea>\n          </div>\n        </div>\n        <ion-button (click)=\"submit()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          {{util.translate('Submit')}}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "2vAW":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-country/select-country.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vAW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>{{util.translate('Select country')}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar placeholder=\"Search\" type=\"text\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\" *ngIf=\"dummyLoad?.length\">\n    <ion-item *ngFor=\"let item of dummyLoad\">\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"dummy?.length\">\n    <ion-radio-group [(ngModel)]=\"ccCode\">\n      <ion-item *ngFor=\"let item of countries\">\n        <ion-label>+{{item.dialling_code}} {{item.country_name}} </ion-label>\n        <ion-radio [value]=\"item.dialling_code\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"okay()\">\n    <ion-fab-button>\n      <ion-icon name=\"checkmark-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "2wkC":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/select-country/select-country-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SelectCountryPageRoutingModule */

    /***/
    function wkC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectCountryPageRoutingModule", function () {
        return SelectCountryPageRoutingModule;
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


      var _select_country_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./select-country.page */
      "hxji"); //


      var routes = [{
        path: '',
        component: _select_country_page__WEBPACK_IMPORTED_MODULE_3__["SelectCountryPage"]
      }];

      var SelectCountryPageRoutingModule = function SelectCountryPageRoutingModule() {
        _classCallCheck(this, SelectCountryPageRoutingModule);
      };

      SelectCountryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SelectCountryPageRoutingModule);
      /***/
    },

    /***/
    "4Mq/":
    /*!***************************************************************!*\
      !*** ./src/app/pages/select-drivers/select-drivers.module.ts ***!
      \***************************************************************/

    /*! exports provided: SelectDriversPageModule */

    /***/
    function Mq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectDriversPageModule", function () {
        return SelectDriversPageModule;
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


      var _select_drivers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./select-drivers-routing.module */
      "gKjt");
      /* harmony import */


      var _select_drivers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./select-drivers.page */
      "ERed"); //


      var SelectDriversPageModule = function SelectDriversPageModule() {
        _classCallCheck(this, SelectDriversPageModule);
      };

      SelectDriversPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_drivers_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectDriversPageRoutingModule"]],
        declarations: [_select_drivers_page__WEBPACK_IMPORTED_MODULE_6__["SelectDriversPage"]]
      })], SelectDriversPageModule);
      /***/
    },

    /***/
    "4bno":
    /*!*************************************************************!*\
      !*** ./src/app/pages/driver-rating/driver-rating.module.ts ***!
      \*************************************************************/

    /*! exports provided: DriverRatingPageModule */

    /***/
    function bno(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverRatingPageModule", function () {
        return DriverRatingPageModule;
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


      var _driver_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./driver-rating-routing.module */
      "FaRo");
      /* harmony import */


      var _driver_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./driver-rating.page */
      "/1to");
      /* harmony import */


      var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic4-rating */
      "Xcyb"); //


      var DriverRatingPageModule = function DriverRatingPageModule() {
        _classCallCheck(this, DriverRatingPageModule);
      };

      DriverRatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _driver_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverRatingPageRoutingModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]],
        declarations: [_driver_rating_page__WEBPACK_IMPORTED_MODULE_6__["DriverRatingPage"]]
      })], DriverRatingPageModule);
      /***/
    },

    /***/
    "8RPc":
    /*!******************************************!*\
      !*** ./src/app/services/apis.service.ts ***!
      \******************************************/

    /*! exports provided: ApisService */

    /***/
    function RPc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApisService", function () {
        return ApisService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__); //


      var ApisService = /*#__PURE__*/function () {
        function ApisService(http, nativeHttp) {
          _classCallCheck(this, ApisService);

          this.http = http;
          this.nativeHttp = nativeHttp;
          this.baseUrl = '';
          this.mediaURL = '';
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
          this.mediaURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mediaURL;
        }

        _createClass(ApisService, [{
          key: "translate",
          value: function translate(str) {
            return str;
          }
        }, {
          key: "alerts",
          value: function alerts(title, message, type) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(title, message, type);
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(files) {
            var formData = new FormData();
            Array.from(files).forEach(function (f) {
              return formData.append('userfile', f);
            });
            return this.http.post(this.baseUrl + 'users/upload_image', formData);
          }
        }, {
          key: "instaPay",
          value: function instaPay(url, body, key, token) {
            return this.nativeHttp.post(url, body, {
              'X-Api-Key': "".concat(key),
              'X-Auth-Token': "".concat(token)
            });
          }
        }, {
          key: "getCurrencyCode",
          value: function getCurrencyCode() {
            return 'none';
          }
        }, {
          key: "getCurrecySymbol",
          value: function getCurrecySymbol() {
            return 'none';
          }
        }, {
          key: "sendNotification",
          value: function sendNotification(msg, title, id) {
            var body = {
              app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.appId,
              include_player_ids: [id],
              headings: {
                en: title
              },
              contents: {
                en: msg
              },
              data: {
                task: msg
              }
            };
            var header = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', "Basic ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.restKey))
            };
            return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
          }
        }, {
          key: "JSON_to_URLEncoded",
          value: function JSON_to_URLEncoded(element, key, list) {
            var new_list = list || [];

            if (typeof element === 'object') {
              for (var idx in element) {
                this.JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, new_list);
              }
            } else {
              new_list.push(key + '=' + encodeURIComponent(element));
            }

            return new_list.join('&');
          }
        }, {
          key: "post",
          value: function post(url, body) {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              var header = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Basic', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken))
              };

              var param = _this6.JSON_to_URLEncoded(body);

              _this6.http.post(_this6.baseUrl + url, param, header).subscribe(function (data) {
                resolve(data);
              }, function (error) {
                resolve(error);
              });
            });
          }
        }, {
          key: "getToken",
          value: function getToken() {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              var auth = "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].client_ID + ':' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].secret_ID);
              var header = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/json').set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', auth)
              };
              var body = 'grant_type=client_credentials';
              var link = 'https://api-m.sandbox.paypal.com/v1/oauth2/token';

              _this7.http.post(link, body, header).subscribe(function (data) {
                resolve(data);
              }, function (error) {
                resolve(error);
              });
            });
          }
        }, {
          key: "createOrder",
          value: function createOrder(order, token) {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
              var auth = "Bearer " + token;
              var header = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/json').set('Content-Type', 'application/json').set('Authorization', auth)
              };
              var body = JSON.stringify(order);
              var link = 'https://api-m.sandbox.paypal.com/v2/checkout/orders';

              _this8.http.post(link, body, header).subscribe(function (data) {
                resolve(data);
              }, function (error) {
                resolve(error);
              });
            });
          }
        }, {
          key: "get",
          value: function get(url) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              var header = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Basic', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken)) // .set('responseType', 'blob')

              };

              _this9.http.get(_this9.baseUrl + url, header).subscribe(function (data) {
                resolve(data);
              }, function (error) {
                resolve(error);
              });
            });
          }
        }, {
          key: "externalGet",
          value: function externalGet(url) {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              var header = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Basic', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken))
              };

              _this10.http.get(url, header).subscribe(function (data) {
                resolve(data);
              }, function (error) {
                resolve(error);
              });
            });
          }
        }, {
          key: "nativePost",
          value: function nativePost(url, post) {
            // console.log(this.baseUrl + url, post);
            return this.nativeHttp.post(this.baseUrl + url, post, {
              Basic: "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken)
            });
          }
        }, {
          key: "httpGet",
          value: function httpGet(url, key) {
            var header = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(key))
            };
            return this.http.get(url, header);
          }
        }, {
          key: "externalPost",
          value: function externalPost(url, body, key) {
            var header = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(key))
            };
            var order = this.JSON_to_URLEncoded(body); // console.log(order)

            return this.http.post(url, order, header);
          }
        }]);

        return ApisService;
      }();

      ApisService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
        }];
      };

      ApisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])], ApisService);
      /***/
    },

    /***/
    "8hIk":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/product-rating/product-rating-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ProductRatingPageRoutingModule */

    /***/
    function hIk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductRatingPageRoutingModule", function () {
        return ProductRatingPageRoutingModule;
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


      var _product_rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-rating.page */
      "b1BE"); //


      var routes = [{
        path: '',
        component: _product_rating_page__WEBPACK_IMPORTED_MODULE_3__["ProductRatingPage"]
      }];

      var ProductRatingPageRoutingModule = function ProductRatingPageRoutingModule() {
        _classCallCheck(this, ProductRatingPageRoutingModule);
      };

      ProductRatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProductRatingPageRoutingModule);
      /***/
    },

    /***/
    "9VZB":
    /*!***************************************************************!*\
      !*** ./src/app/pages/schedule-order/schedule-order.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function VZB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".use-bold {\n  font-weight: bold;\n  padding: 10px 0;\n}\n\n.c-fnl-mb {\n  margin-bottom: 50px;\n}\n\n.section-title {\n  display: inline-flex;\n  margin: 0 20px;\n  padding: 15px 0;\n  width: calc(100% - 40px);\n}\n\n.section-title:not(.n-bt) {\n  border-top: 2px solid rgba(120, 120, 120, 0.1);\n}\n\n.section-title .icon-wrapper, .section-title .info {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.section-title .icon-wrapper {\n  flex-shrink: 0;\n  padding-right: 15px;\n}\n\n.section-title .icon-wrapper .icon {\n  display: block;\n  height: 25px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 25px;\n}\n\n.section-title .info {\n  /**/\n}\n\n.section-title .info .subtitle {\n  color: rgba(80, 80, 80, 0.8);\n  font-size: 14px;\n  margin-bottom: 2px;\n}\n\n.section-title .info .title {\n  font-weight: bold;\n  width: 100%;\n}\n\n.select-days {\n  margin: 0 20px;\n  width: calc(100% - 40px);\n}\n\n.select-days .list {\n  display: flex;\n  flex-wrap: nowrap;\n  list-style: none;\n  overflow-x: auto;\n  padding: 0;\n  white-space: nowrap;\n}\n\n.select-days .list .item {\n  align-items: center;\n  background-color: rgba(120, 120, 120, 0.06);\n  border-radius: 20px;\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  height: 80px;\n  justify-content: center;\n  margin: 0 5px;\n  text-align: center;\n  width: 100px;\n}\n\n.select-days .list .item.active {\n  background-color: #0dc465;\n  color: white;\n}\n\n.select-days .list .item .info {\n  /**/\n}\n\n.select-days .list .item .info .text {\n  /**/\n}\n\n.select-days .list .item .info .text:nth-child(2) {\n  font-size: 14px;\n}\n\n.select-days .list .item .info .text.s-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NjaGVkdWxlLW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQUFGOztBQUVFO0VBQ0UsOENBQUE7QUFBSjs7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUlJO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsV0FBQTtBQUZOOztBQU1FO0VBQ0UsR0FBQTtBQUpKOztBQU1JO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFKTjs7QUFPSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUxOOztBQVVBO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0FBUEY7O0FBU0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBU0k7RUFDRSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBUE47O0FBU007RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFQUjs7QUFVTTtFQUNFLEdBQUE7QUFSUjs7QUFVUTtFQUNFLEdBQUE7QUFSVjs7QUFVVTtFQUNFLGVBQUE7QUFSWjs7QUFXVTtFQUNFLGlCQUFBO0FBVFoiLCJmaWxlIjoic2NoZWR1bGUtb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi51c2UtYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG4uYy1mbmwtbWIge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBtYXJnaW46IDAgMjBweDtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG5cclxuICAmOm5vdCgubi1idCkge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMTIwLCAxMjAsIDEyMCwgLjEpO1xyXG4gIH1cclxuXHJcbiAgLmljb24td3JhcHBlciwgLmluZm8ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG5cclxuICAuaWNvbi13cmFwcGVyIHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmluZm8ge1xyXG4gICAgLyoqL1xyXG5cclxuICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIC44KTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlbGVjdC1kYXlzIHtcclxuICBtYXJnaW46IDAgMjBweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcblxyXG4gIC5saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgLml0ZW0ge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMCwgMTIwLCAxMjAsIC4wNik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZGM0NjU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5mbyB7XHJcbiAgICAgICAgLyoqL1xyXG5cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAvKiovXHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5zLWJvbGQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jLXNlbGVjdC1kYXlzIHtcclxuICAvLyBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLnNjci1oIHtcclxuICAvLyBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAvLyBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcclxuICAvLyBvdmVyZmxvdy15OiBoaWRkZW47XHJcblxyXG4gIC5jLWl0ZW0ge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjZmJmN2Y5O1xyXG4gICAgLy8gLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgIC5pdGVtLW5hdGl2ZSB7XHJcbiAgICAgIC8vXHJcblxyXG4gICAgICAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgLy9cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbi1pdGVtIHtcclxuICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICAuYy1sYWJlbCB7XHJcbiAgICAgIC8vXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "AabN":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function AabN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-item *ngFor=\"let item of cates\" lines=\"none\" (click)=\"selected(item)\">\n  <ion-label [ngClass]=\"id === item.id ? 'selected':'normal'\">{{item.name}}</ion-label>\n</ion-item>";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: true,
        baseURL: 'https://api.mrmandados.xyz/index.php/',
        mediaURL: 'https://api.mrmandados.xyz/uploads/',
        onesignal: {
          appId: '50504fb7-0f02-41c5-8ccf-0d7e43b3247c',
          googleProjectNumber: '176229806393',
          restKey: 'M2Q4ZTdmYWMtMDkxYS00OTk4LWE0ZGMtNWYzMTI1YmYzZjky'
        },
        authToken: '050902',
        client_ID: 'AVXjPymtX7wjlfu615NsL23dqAA56gSvmbiJBwL2zU2YjFX33fZHGbtfMBYpvj3wXtEcgaJARp9QnSNh',
        secret_ID: 'ENe2-0IWNu2wiwGbfZ8TMVfqxqm3c-jSI60b6MThmyX3RKBXeBwRBwR2IYjfPPAjj9EoJNfkfIiMp58p'
      };
      /***/
    },

    /***/
    "Bxw0":
    /*!***************************************************************!*\
      !*** ./src/app/pages/choose-address/choose-address.module.ts ***!
      \***************************************************************/

    /*! exports provided: ChooseAddressPageModule */

    /***/
    function Bxw0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseAddressPageModule", function () {
        return ChooseAddressPageModule;
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


      var _choose_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./choose-address-routing.module */
      "Un4R");
      /* harmony import */


      var _choose_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./choose-address.page */
      "DiWI");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");
      /* harmony import */


      var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/popover/popover.component */
      "nm6V"); //


      var ChooseAddressPageModule = function ChooseAddressPageModule() {
        _classCallCheck(this, ChooseAddressPageModule);
      };

      ChooseAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_8__["PopoverComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _choose_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseAddressPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_choose_address_page__WEBPACK_IMPORTED_MODULE_6__["ChooseAddressPage"]]
      })], ChooseAddressPageModule);
      /***/
    },

    /***/
    "CTwn":
    /*!***********************************************!*\
      !*** ./src/app/pages/verify/verify.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function CTwn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".otpContainer {\n  margin-top: 50%;\n}\n.otpContainer .headerText {\n  text-align: center;\n  font-weight: bolder;\n  font-size: 2rem;\n}\n.otpContainer .subTitleText {\n  text-align: center;\n  font-weight: bold;\n  color: gray;\n  font-size: 1rem;\n}\n.otpContainer .otpInputs {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n.otpContainer .btn_class {\n  color: white;\n  margin: 30px 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ1I7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFDUiIsImZpbGUiOiJ2ZXJpZnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgLy9cbi5vdHBDb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICAuaGVhZGVyVGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgICAuc3ViVGl0bGVUZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLm90cElucHV0cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICAuYnRuX2NsYXNzIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW46IDMwcHggNTBweDtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "DB8z":
    /*!*******************************************************!*\
      !*** ./src/app/pages/verify/verify-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: VerifyPageRoutingModule */

    /***/
    function DB8z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function () {
        return VerifyPageRoutingModule;
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


      var _verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./verify.page */
      "TCp9"); //


      var routes = [{
        path: '',
        component: _verify_page__WEBPACK_IMPORTED_MODULE_3__["VerifyPage"]
      }];

      var VerifyPageRoutingModule = function VerifyPageRoutingModule() {
        _classCallCheck(this, VerifyPageRoutingModule);
      };

      VerifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VerifyPageRoutingModule);
      /***/
    },

    /***/
    "DiWI":
    /*!*************************************************************!*\
      !*** ./src/app/pages/choose-address/choose-address.page.ts ***!
      \*************************************************************/

    /*! exports provided: ChooseAddressPage */

    /***/
    function DiWI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseAddressPage", function () {
        return ChooseAddressPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_choose_address_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./choose-address.page.html */
      "pp8I");
      /* harmony import */


      var _choose_address_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./choose-address.page.scss */
      "lTsH");
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


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/popover/popover.component */
      "nm6V");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var _schedule_order_schedule_order_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../schedule-order/schedule-order.page */
      "RxX+");

      var ChooseAddressPage = /*#__PURE__*/function () {
        function ChooseAddressPage(router, api, util, navCtrl, route, popoverController, cart, modalController) {
          var _this11 = this;

          _classCallCheck(this, ChooseAddressPage);

          this.router = router;
          this.api = api;
          this.util = util;
          this.navCtrl = navCtrl;
          this.route = route;
          this.popoverController = popoverController;
          this.cart = cart;
          this.modalController = modalController;
          this.myaddress = [];
          this.dummy = Array(10);
          this.scheduleData = {
            status: false,
            time: null
          };
          this.showScheduleButton = false;
          this.route.queryParams.subscribe(function (data) {
            if (data && data.from) {
              _this11.from = data.from;
            }
          });
          this.getAddress();
          this.util.getObservable().subscribe(function (data) {
            _this11.getAddress();
          });
        }

        _createClass(ChooseAddressPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            if (this.cart.cartStoreInfo) {
              this.api.post('users/getById', {
                id: this.cart.cartStoreInfo.uid
              }).then(function (data) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                  var _a, response;

                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          if (!(data && data.status === 200 && data.data && data.data.length)) {
                            _context11.next = 10;
                            break;
                          }

                          _context11.prev = 1;
                          _context11.next = 4;
                          return this.api.post('stores/getByUid', {
                            id: data.data[0].id
                          });

                        case 4:
                          response = _context11.sent;
                          this.showScheduleButton = ['supermercado'].includes((((_a = response.data[0]) === null || _a === void 0 ? void 0 : _a.category) || '').toLowerCase());
                          _context11.next = 10;
                          break;

                        case 8:
                          _context11.prev = 8;
                          _context11.t0 = _context11["catch"](1);

                        case 10:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11, this, [[1, 8]]);
                }));
              }, function () {});
            }
          }
        }, {
          key: "showModalSchedule",
          value: function showModalSchedule() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this13 = this;

              var redirectTo, modal;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.prev = 0;
                      _context12.next = 3;
                      return this.selectAddress();

                    case 3:
                      redirectTo = _context12.sent;

                      if (!this.showScheduleButton) {
                        _context12.next = 14;
                        break;
                      }

                      _context12.next = 7;
                      return this.modalController.create({
                        component: _schedule_order_schedule_order_page__WEBPACK_IMPORTED_MODULE_11__["ScheduleOrderPage"]
                      });

                    case 7:
                      modal = _context12.sent;
                      modal.onWillDismiss().then(function (response) {
                        if (response.data.time !== null) {
                          _this13.scheduleData.time = response.data.time;
                          localStorage.setItem('scheduleData', JSON.stringify(_this13.scheduleData));

                          if (redirectTo) {
                            _this13.router.navigate(['payments']);
                          }
                        }
                      })["catch"](function () {});
                      _context12.next = 11;
                      return modal.present();

                    case 11:
                      return _context12.abrupt("return", _context12.sent);

                    case 14:
                      localStorage.setItem('scheduleData', JSON.stringify(this.scheduleData));

                      if (redirectTo) {
                        this.router.navigate(['payments']);
                      }

                    case 16:
                      _context12.next = 20;
                      break;

                    case 18:
                      _context12.prev = 18;
                      _context12.t0 = _context12["catch"](0);

                    case 20:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this, [[0, 18]]);
            }));
          }
        }, {
          key: "getAddress",
          value: function getAddress() {
            var _this14 = this;

            var param = {
              id: localStorage.getItem('uid')
            };
            this.api.post('address/getByUid', param).then(function (data) {
              _this14.dummy = [];

              if (data && data.status === 200 && data.data.length > 0) {
                _this14.myaddress = data.data;
              }
            }, function (error) {
              _this14.dummy = [];

              _this14.util.errorToast('Algo ha ido mal');
            })["catch"](function (error) {
              _this14.dummy = [];

              _this14.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "addNew",
          value: function addNew() {
            this.router.navigate(['add-new-address']);
          }
        }, {
          key: "selectAddress",
          value: function selectAddress() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this15 = this;

              var selected, item, distance, permittedDistance;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (!(this.from === 'cart')) {
                        _context13.next = 15;
                        break;
                      }

                      selected = this.myaddress.filter(function (x) {
                        return x.id === _this15.selectedAddress;
                      });

                      if (!(selected && selected.length && this.cart.cartStoreInfo && this.cart.cartStoreInfo.lat)) {
                        _context13.next = 15;
                        break;
                      }

                      item = selected[0];
                      _context13.next = 6;
                      return this.getDistanceFromLatLonInKm(parseFloat(this.cart.cartStoreInfo.lat), parseFloat(this.cart.cartStoreInfo.lng), parseFloat(item.lat), parseFloat(item.lng));

                    case 6:
                      distance = _context13.sent;
                      permittedDistance = parseInt(this.util.general.allowDistance);

                      if (!(distance <= permittedDistance)) {
                        _context13.next = 14;
                        break;
                      }

                      this.cart.deliveryAddress = item;
                      this.cart.calcuate();
                      return _context13.abrupt("return", true);

                    case 14:
                      this.util.errorToast('La distancia entre su dirección y la dirección del restaurante debe ser menor a ' + permittedDistance + ' KM');

                    case 15:
                      return _context13.abrupt("return", false);

                    case 16:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "getDistanceFromLatLonInKm",
          value: function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var R, dLat, dLon, a, c, d;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      R = 6371; // Radius of the earth in km

                      dLat = this.deg2rad(lat2 - lat1); // deg2rad below

                      dLon = this.deg2rad(lon2 - lon1);
                      a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
                      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                      d = R * c; // Distance in km

                      return _context14.abrupt("return", d);

                    case 7:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "deg2rad",
          value: function deg2rad(deg) {
            return deg * (Math.PI / 180);
          }
        }, {
          key: "openMenu",
          value: function openMenu(item, events) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this16 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.popoverController.create({
                        component: src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_8__["PopoverComponent"],
                        event: events,
                        mode: 'ios'
                      });

                    case 2:
                      popover = _context15.sent;
                      popover.onDidDismiss().then(function (data) {
                        if (data && data.data) {
                          if (data.data === 'edit') {
                            var navData = {
                              queryParams: {
                                from: 'edit',
                                data: JSON.stringify(item)
                              }
                            };

                            _this16.router.navigate(['add-new-address'], navData);
                          } else if (data.data === 'delete') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                              title: _this16.util.translate('Are you sure?'),
                              text: _this16.util.translate('to delete this address'),
                              icon: 'question',
                              confirmButtonText: _this16.util.translate('Yes'),
                              backdrop: false,
                              background: 'white',
                              showCancelButton: true,
                              showConfirmButton: true,
                              cancelButtonText: _this16.util.translate('cancel')
                            }).then(function (data) {
                              if (data && data.value) {
                                _this16.util.show();

                                var param = {
                                  id: item.id
                                };

                                _this16.api.post('address/deleteList', param).then(function (info) {
                                  _this16.util.hide();

                                  _this16.getAddress();
                                }, function (error) {
                                  _this16.util.hide();

                                  _this16.util.errorToast('Algo ha ido mal');
                                })["catch"](function (error) {
                                  _this16.util.hide();

                                  _this16.util.errorToast('Algo ha ido mal');
                                });
                              }
                            });
                          }
                        }
                      });
                      _context15.next = 6;
                      return popover.present();

                    case 6:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }]);

        return ChooseAddressPage;
      }();

      ChooseAddressPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }, {
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }];
      };

      ChooseAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choose-address',
        template: _raw_loader_choose_address_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choose_address_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])], ChooseAddressPage);
      /***/
    },

    /***/
    "ERed":
    /*!*************************************************************!*\
      !*** ./src/app/pages/select-drivers/select-drivers.page.ts ***!
      \*************************************************************/

    /*! exports provided: SelectDriversPage */

    /***/
    function ERed(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectDriversPage", function () {
        return SelectDriversPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_select_drivers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./select-drivers.page.html */
      "FVnK");
      /* harmony import */


      var _select_drivers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./select-drivers.page.scss */
      "kSbv");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/util.service */
      "2Rin");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/"); //


      var SelectDriversPage = /*#__PURE__*/function () {
        function SelectDriversPage(navParam, modalController, util) {
          _classCallCheck(this, SelectDriversPage);

          this.navParam = navParam;
          this.modalController = modalController;
          this.util = util;
          this.drivers = [];
          this.selectedDriver = '';
          this.drivers = this.navParam.get('item'); // console.log('drivers->', this.drivers);

          if (this.drivers.length && this.drivers.length > 0) {
            this.selectedDriver = this.drivers[0].id;
          }
        }

        _createClass(SelectDriversPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "select",
          value: function select() {
            var _this17 = this;

            // console.log(this.selectedDriver);
            var driver = this.drivers.filter(function (x) {
              return x.id === _this17.selectedDriver;
            }); // console.log(driver);

            this.modalController.dismiss(driver, 'selected');
          }
        }, {
          key: "close",
          value: function close() {
            this.modalController.dismiss([], 'close');
          }
        }]);

        return SelectDriversPage;
      }();

      SelectDriversPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
        }];
      };

      SelectDriversPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-select-drivers',
        template: _raw_loader_select_drivers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_drivers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])], SelectDriversPage);
      /***/
    },

    /***/
    "FVnK":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-drivers/select-drivers.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FVnK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<div class=\"inner-content\">\n  <div class=\"div_content\">\n    <p class=\"title\">{{util.translate('Select Drivers')}}</p>\n  </div>\n  <div class=\"content\">\n    <ion-list>\n      <ion-radio-group [(ngModel)]=\"selectedDriver\">\n        <ion-list-header>\n          <ion-label>{{util.translate('Drivers')}}</ion-label>\n        </ion-list-header>\n        <ion-item *ngFor=\"let item of drivers\" lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"item.coverImage\" />\n          </ion-avatar>\n          <ion-label>{{item.fullname}}</ion-label>\n          <ion-radio [value]=\"item.id\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n  </div>\n  <div class=\"div_btn\">\n    <ion-row>\n      <ion-col size=\"6\" class=\"cancel\">\n        <ion-button (click)=\"select()\" color=\"primary\" expand=\"full\">\n          {{util.translate('Select')}}\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"cancel\">\n        <ion-button (click)=\"close()\" color=\"light\" expand=\"full\">\n          {{util.translate('Cancle')}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n</div>";
      /***/
    },

    /***/
    "FaRo":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/driver-rating/driver-rating-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: DriverRatingPageRoutingModule */

    /***/
    function FaRo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverRatingPageRoutingModule", function () {
        return DriverRatingPageRoutingModule;
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


      var _driver_rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./driver-rating.page */
      "/1to"); //


      var routes = [{
        path: '',
        component: _driver_rating_page__WEBPACK_IMPORTED_MODULE_3__["DriverRatingPage"]
      }];

      var DriverRatingPageRoutingModule = function DriverRatingPageRoutingModule() {
        _classCallCheck(this, DriverRatingPageRoutingModule);
      };

      DriverRatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DriverRatingPageRoutingModule);
      /***/
    },

    /***/
    "FbwC":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function FbwC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> Confirmar </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"otpContainer\">\n    <h2 class=\"headerText\"> Confirmación </h2>\n    <p class=\"subTitleText\">Te hemos mandado un código \n      <br> a tu número:   {{mobile}}\n    </p>\n    <div class=\"otpInputs\">\n      <ng-otp-input (onInputChange)=\"onOtpChange($event)\"\n        [config]=\"{length:6,inputStyles:{'width': '30px','height': '30px'}}\">\n      </ng-otp-input>\n    </div>\n    <ion-button class=\"btn_class\" (click)=\"continue()\" type=\"submit\" expand=\"block\">Continuar\n    </ion-button>\n\n    <ion-button (click)=\"resend()\" *ngIf=\"resendCode\" type=\"submit\" expand=\"block\" fill=\"clear\">\n      Reenviar\n    </ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "G4oC":
    /*!*******************************************************!*\
      !*** ./src/app/pages/variations/variations.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function G4oC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header {\n  border-bottom: 1px solid lightgray;\n}\n.header .bts {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding-bottom: 10px;\n}\n.header .desc .title {\n  margin: 0px;\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.header .desc .details {\n  margin: 0px;\n  padding: 0px 10px;\n  font-size: 14px;\n}\n.padder {\n  padding-bottom: 60px;\n}\n.cartItems {\n  padding: 10px 5px;\n}\n.cartItems .name {\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0px;\n}\n.cartItems .details {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.cartItems .details .names .subDetails {\n  margin: 0px;\n  font-size: 14px;\n}\n.cartItems .details .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: flex;\n  background: white;\n}\n.cartItems .details .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n.sameProduct {\n  padding: 5px;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.sameProduct .desc {\n  padding: 0px 0px 10px 0px;\n}\n.sameProduct .desc .name {\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0px;\n}\n.sameProduct .desc .selectedItem {\n  margin: 0px;\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n}\n.sameProduct .desc .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: flex;\n  background: white;\n}\n.sameProduct .desc .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n.footers {\n  position: fixed;\n  bottom: 10px;\n  width: 100%;\n  padding: 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZhcmlhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0NBQUE7QUFBRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBRUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFOO0FBRUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQU47QUFJQTtFQUNFLG9CQUFBO0FBREY7QUFHQTtFQUNFLGlCQUFBO0FBQUY7QUFDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUNNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDUjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUFOO0FBQ007RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDUjtBQUlBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQURGO0FBRUU7RUFDRSx5QkFBQTtBQUFKO0FBQ0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ047QUFDSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ047QUFDSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUFNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBRVI7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQUYiLCJmaWxlIjoidmFyaWF0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAvL1xuLmhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIC5idHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAuZGVzYyB7XG4gICAgLnRpdGxlIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuZGV0YWlscyB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxufVxuLnBhZGRlciB7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuLmNhcnRJdGVtcyB7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICAubmFtZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIC5kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5uYW1lcyB7XG4gICAgICAuc3ViRGV0YWlscyB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5jYXJ0QnRuMiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTVweDtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgLnF1bml0aXR5IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5zYW1lUHJvZHVjdCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC5kZXNjIHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xuICAgIC5uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICAgIC5zZWxlY3RlZEl0ZW0ge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLmNhcnRCdG4yIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAucXVuaXRpdHkge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmZvb3RlcnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "HOOB":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-order/schedule-order.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HOOB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-label>Cancelar</ion-label>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Programar Pedido</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"time !== null && day !== null\">\n      <ion-button (click)=\"closeModal(true)\">\n        <ion-label>Aceptar</ion-label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"section-title n-bt\">\n    <div class=\"icon-wrapper\">\n      <img src=\"/assets/pin.png\" class=\"icon\" alt=\"Icon\">\n    </div>\n    <div class=\"info\">\n      <div class=\"subtitle\">Dirección de entrega</div>\n      <div class=\"title\">{{ cart.deliveryAddress.address }}</div>\n    </div>\n  </div>\n\n  <div class=\"section-title\">\n    <div class=\"icon-wrapper\">\n      <img src=\"/assets/pin.png\" class=\"icon\" alt=\"Icon\">\n    </div>\n    <div class=\"info\">\n      <div class=\"title\">Elige el día y la hora de entrega</div>\n    </div>\n  </div>\n\n  <div class=\"select-days\">\n    <ul class=\"list\">\n      <ng-container *ngFor=\"let item of days\" >\n        <li class=\"item{{ item.index === day.index ? ' active' : '' }}\" (click)=\"selectItem(item)\">\n          <div class=\"info\">\n            <div class=\"text s-bold\">{{ item.day }}</div>\n            <div class=\"text\">{{ item.month }}</div>\n          </div>\n        </li>\n      </ng-container>\n    </ul>\n  </div>\n\n  <ion-list class=\"c-fnl-mb\">\n    <ion-radio-group [(ngModel)]=\"time\">\n      <ion-item *ngFor=\"let item of filterHours()\">\n        <ion-radio *ngIf=\"item.value\" slot=\"start\" mode=\"md\" [value]=\"item\"></ion-radio>\n        <ion-label *ngIf=\"item.value\" class=\"use-bold\">{{item.name}}</ion-label>\n        \n        <!-- <ion-badge color=\"success\">{{item.value}}</ion-badge> -->\n      </ion-item>\n      <ion-item *ngIf=\"!filterHours().length\">\n        <ion-label class=\"use-bold ion-text-center\">No hay disponibilidad</ion-label>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "Hg1L":
    /*!*************************************************************!*\
      !*** ./src/app/pages/driver-rating/driver-rating.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function Hg1L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  padding: 20px;\n}\n.main_content_div .main_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_content_div .rattingBtns {\n  margin: 20px 0px;\n}\n.main_content_div .name {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  justify-content: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n}\n.main_content_div .name .image_div {\n  width: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main_content_div .name .icn {\n  max-width: 15px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .name .content_div {\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  margin-left: 15px;\n}\n.main_content_div .name .content_div span {\n  font-size: 11px;\n  color: #8992aa;\n  padding-top: 5px;\n}\n.main_content_div .name .content_div ion-input {\n  font-size: 11px;\n  color: #454d62;\n}\n.main_content_div .btn_div {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.main_content_div ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 3px;\n  --color: white;\n  font-weight: bold;\n  font-size: 12px;\n  height: 40px;\n  width: 150px;\n  text-transform: capitalize;\n  --background-activated: rgba(159, 201, 165, 0.5);\n  --color-actived: white;\n}\n.main_content_div ion-button .logout_icon {\n  width: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RyaXZlci1yYXRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtBQUFKO0FBRUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUFSO0FBRUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxvREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFaO0FBRVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBWjtBQUVRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQVo7QUFFWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFBaEI7QUFFWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQWhCO0FBS0k7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSFI7QUFLSTtFQUNJLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdEQUFBO0VBQ0Esc0JBQUE7QUFIUjtBQUlRO0VBQ0ksV0FBQTtBQUZaIiwiZmlsZSI6ImRyaXZlci1yYXRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgLy9cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLm1haW5fZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICAudXNlcl9pbWcge1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1pbi13aWR0aDogOTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAucmF0dGluZ0J0bnMge1xuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgIH1cbiAgICAubmFtZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC0zcHggcmdiYSgzMCwgOTgsIDI1NSwgMC4zKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgLmltYWdlX2RpdiB7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pY24ge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnRfZGl2IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4OTkyYWE7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDU0ZDYyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bl9kaXYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgxNTksIDIwMSwgMTY1LCAwLjUpO1xuICAgICAgICAtLWNvbG9yLWFjdGl2ZWQ6IHdoaXRlO1xuICAgICAgICAubG9nb3V0X2ljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "RxX+":
    /*!*************************************************************!*\
      !*** ./src/app/pages/schedule-order/schedule-order.page.ts ***!
      \*************************************************************/

    /*! exports provided: ScheduleOrderPage */

    /***/
    function RxX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScheduleOrderPage", function () {
        return ScheduleOrderPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_schedule_order_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./schedule-order.page.html */
      "HOOB");
      /* harmony import */


      var _schedule_order_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./schedule-order.page.scss */
      "9VZB");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");

      var ScheduleOrderPage = /*#__PURE__*/function () {
        function ScheduleOrderPage(modalController, cart) {
          _classCallCheck(this, ScheduleOrderPage);

          this.modalController = modalController;
          this.cart = cart;
          this.defaultTime = 90;
          this.days = [];
          this.options = [{
            name: '8am - 9am',
            value: 8
          }, {
            name: '9am - 10am',
            value: 9
          }, {
            name: '10am - 11am',
            value: 10
          }, {
            name: '11am - 12pm',
            value: 11
          }, {
            name: '12pm - 1pm',
            value: 12
          }, {
            name: '1pm - 2pm',
            value: 13
          }, {
            name: '2pm - 3pm',
            value: 14
          }, {
            name: '3pm - 4pm',
            value: 15
          }, {
            name: '4pm - 5pm',
            value: 16
          }, {
            name: '5pm - 6pm',
            value: 17
          }, {
            name: '6pm - 7pm',
            value: 18
          }, {
            name: '7pm - 8pm',
            value: 19
          }, {
            name: '8pm - 9pm',
            value: 20
          }];
          this.day = null;
          this.time = null;
          this.getHourDisp = [];
          moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('es');

          for (var a = 0; a < 7; a++) {
            var date = new Date();
            date.setDate(date.getDate() + a);
            var mo = moment__WEBPACK_IMPORTED_MODULE_5__(date);
            this.days.push({
              index: a,
              day: a === 0 ? 'Hoy' : mo.format('ddd'),
              month: mo.format('MMM DD'),
              value: mo
            });
          }

          this.day = this.days[0];
        }

        _createClass(ScheduleOrderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            }));
          }
        }, {
          key: "selectItem",
          value: function selectItem(item) {
            this.day = item;
            this.time = null;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17);
            }));
          }
        }, {
          key: "filterHours",
          value: function filterHours() {
            var _this18 = this;

            var dat = this.options.filter(function (item, index) {
              var validations = [];
              var today = new Date();
              var date = new Date(_this18.day.value.toDate());

              if (_this18.day.index === 0) {
                date.setHours(item.value);
                today.setMinutes(today.getMinutes() + _this18.defaultTime);
                validations.push(date >= today);
              }

              return !validations.includes(false);
            });
            console.log(dat);
            return dat;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            var useCurrent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var newProps, newDate;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      newProps = {
                        time: null
                      };

                      if (useCurrent && this.day !== null) {
                        newDate = new Date(this.day.value.toDate());

                        if (this.time.value === null) {
                          newDate.setMinutes(newDate.getMinutes() + this.defaultTime);
                        } else {
                          newDate.setHours(this.time.value);
                          newDate.setMinutes(0);
                          newDate.setSeconds(0);
                        }

                        newProps.time = moment__WEBPACK_IMPORTED_MODULE_5__(newDate).format('YYYY-MM-DD HH:mm:ss') || null;
                      }

                      this.modalController.dismiss(newProps);

                    case 3:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }]);

        return ScheduleOrderPage;
      }();

      ScheduleOrderPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]
        }];
      };

      ScheduleOrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-schedule-order',
        template: _raw_loader_schedule_order_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_schedule_order_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]])], ScheduleOrderPage);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/util.service */
      "2Rin");
      /* harmony import */


      var _services_apis_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./services/apis.service */
      "8RPc");
      /* harmony import */


      var _services_cart_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/cart.service */
      "c14U"); //


      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, router, oneSignal, actionSheetController, util, navCtrl, api, cart) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.oneSignal = oneSignal;
          this.actionSheetController = actionSheetController;
          this.util = util;
          this.navCtrl = navCtrl;
          this.api = api;
          this.cart = cart;
          this.appPages = [];
          this.selectedIndex = 0;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this19 = this;

            this.platform.ready().then(function () {
              _this19.statusBar.backgroundColorByHexString('#00b3f0');

              _this19.splashScreen.hide();

              _this19.util.cityAddress = localStorage.getItem('address');
              _this19.appPages = _this19.util.appPages;
              console.log('%c Copyright and Good Faith Purchasers © 2020-present initappz. ', 'background: #222; color: #bada55');
              var lng = localStorage.getItem('language');

              if (!lng || lng === null) {
                _this19.api.get('users/getDefaultSettings').then(function (data) {
                  // console.log('----------------- app setting', data);
                  if (data && data.status === 200 && data.data) {
                    var manage = data.data.manage;
                    var language = data.data.lang;

                    if (manage && manage.length > 0) {
                      if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                        _this19.util.appClosed = true;
                        _this19.util.appClosedMessage = manage[0].message;
                      } else {
                        _this19.util.appClosed = false;
                      }
                    } else {
                      _this19.util.appClosed = false;
                    }

                    if (language) {
                      _this19.util.translations = language;
                      localStorage.setItem('language', data.data.file);
                    }

                    var settings = data.data.settings;

                    if (settings && settings.length > 0) {
                      var info = settings[0];
                      _this19.util.direction = info.appDirection;
                      _this19.util.cside = info.currencySide;
                      _this19.util.currecny = info.currencySymbol;
                      _this19.util.logo = info.logo;
                      _this19.util.twillo = info.twillo;
                      _this19.util.delivery = info.delivery;
                      _this19.util.user_login = info.user_login;
                      _this19.util.home_type = info.home_ui;
                      _this19.util.reset_pwd = info.reset_pwd;
                      document.documentElement.dir = _this19.util.direction;
                    } else {
                      _this19.util.direction = 'ltr';
                      _this19.util.cside = 'right';
                      _this19.util.currecny = '$';
                      document.documentElement.dir = _this19.util.direction;
                    }

                    var general = data.data.general; // console.log('generalllll============================>', general);

                    if (general && general.length > 0) {
                      var _info = general[0];
                      _this19.util.general = _info;
                      _this19.cart.minOrderPrice = parseFloat(_info.min);
                      _this19.cart.shipping = _info.shipping;
                      _this19.cart.shippingPrice = parseFloat(_info.shippingPrice);
                      _this19.cart.orderTax = parseFloat(_info.tax);
                      _this19.cart.flatTax = parseInt(_info.tax);
                      _this19.cart.freeShipping = parseFloat(_info.free);
                    }
                  }
                }, function (error) {// console.log('default settings', error);
                });
              } else {
                var param = {
                  id: localStorage.getItem('language')
                };

                _this19.api.post('users/getDefaultSettingsById', param).then(function (data) {
                  // console.log('----------------- app setting', data);
                  if (data && data.status === 200 && data.data) {
                    var manage = data.data.manage;
                    var language = data.data.lang;

                    if (manage && manage.length > 0) {
                      if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                        _this19.util.appClosed = true;
                        _this19.util.appClosedMessage = manage[0].message;
                      } else {
                        _this19.util.appClosed = false;
                      }
                    } else {
                      _this19.util.appClosed = false;
                    }

                    if (language) {
                      _this19.util.translations = language;
                    }

                    var settings = data.data.settings;

                    if (settings && settings.length > 0) {
                      var info = settings[0];
                      _this19.util.direction = info.appDirection;
                      _this19.util.cside = info.currencySide;
                      _this19.util.currecny = info.currencySymbol;
                      _this19.util.logo = info.logo;
                      _this19.util.twillo = info.twillo;
                      _this19.util.delivery = info.delivery;
                      _this19.util.user_login = info.user_login;
                      _this19.util.home_type = info.home_ui;
                      _this19.util.reset_pwd = info.reset_pwd;
                      document.documentElement.dir = _this19.util.direction;
                    } else {
                      _this19.util.direction = 'ltr';
                      _this19.util.cside = 'right';
                      _this19.util.currecny = '$';
                      document.documentElement.dir = _this19.util.direction;
                    }

                    var general = data.data.general; // console.log('generalllll============================>', general)

                    if (general && general.length > 0) {
                      var _info2 = general[0];
                      _this19.util.general = _info2;
                      _this19.cart.minOrderPrice = parseFloat(_info2.min);
                      _this19.cart.shipping = _info2.shipping;
                      _this19.cart.shippingPrice = parseFloat(_info2.shippingPrice);
                      _this19.cart.orderTax = parseFloat(_info2.tax);
                      _this19.cart.flatTax = parseInt(_info2.tax);
                      _this19.cart.freeShipping = parseFloat(_info2.free);
                    }
                  }
                }, function (error) {
                  // console.log('default settings by id', error);
                  _this19.util.appClosed = false;
                  _this19.util.direction = 'ltr';
                  _this19.util.cside = 'right';
                  _this19.util.currecny = '$';
                  document.documentElement.dir = _this19.util.direction;
                });
              }

              if (_this19.platform.is('cordova')) {
                // console.log('cordova platform');
                setTimeout(function () {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                    var _this20 = this;

                    return regeneratorRuntime.wrap(function _callee19$(_context19) {
                      while (1) {
                        switch (_context19.prev = _context19.next) {
                          case 0:
                            _context19.next = 2;
                            return this.oneSignal.startInit(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].onesignal.appId, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].onesignal.googleProjectNumber);

                          case 2:
                            this.oneSignal.getIds().then(function (data) {
                              // console.log('iddddd', data);
                              localStorage.setItem('fcm', data.userId);
                              var uid = localStorage.getItem('uid');

                              if (uid && uid !== null && uid !== 'null') {
                                var _param = {
                                  id: uid,
                                  fcm_token: data.userId
                                };

                                _this20.api.post('users/edit_profile', _param).then(function (data) {// console.log('user info=>', data);
                                }, function (error) {// console.log(error);
                                });
                              }
                            });
                            this.oneSignal.enableSound(true);
                            _context19.next = 6;
                            return this.oneSignal.endInit();

                          case 6:
                          case "end":
                            return _context19.stop();
                        }
                      }
                    }, _callee19, this);
                  }));
                }, 1000);

                _this19.oneSignal.inFocusDisplaying(2);
              }

              var uid = localStorage.getItem('uid');

              if (uid && uid !== null && uid !== 'null') {
                var _param2 = {
                  id: uid
                };

                _this19.api.post('users/getById', _param2).then(function (data) {
                  // console.log('*******************', data);
                  if (data && data.status === 200 && data.data && data.data.length && data.data[0].type === 'user') {
                    _this19.util.userInfo = data.data[0];
                  } else {
                    localStorage.removeItem('uid');
                  }
                }, function (error) {
                  localStorage.removeItem('uid'); // console.log(error);
                });
              }

              _this19.platform.backButton.subscribe(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
                  return regeneratorRuntime.wrap(function _callee20$(_context20) {
                    while (1) {
                      switch (_context20.prev = _context20.next) {
                        case 0:
                          // console.log('asd', this.router.url, 'ad', this.router.isActive('/tabs/', true));
                          if (this.router.url.includes('/tabs/') || this.router.url.includes('/login')) {
                            navigator['app'].exitApp();
                          }

                        case 1:
                        case "end":
                          return _context20.stop();
                      }
                    }
                  }, _callee20, this);
                }));
              });
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            this.navCtrl.navigateRoot(['/login']);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_apis_service__WEBPACK_IMPORTED_MODULE_11__["ApisService"]
        }, {
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_12__["CartService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _services_apis_service__WEBPACK_IMPORTED_MODULE_11__["ApisService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_12__["CartService"]])], AppComponent);
      /***/
    },

    /***/
    "TCp9":
    /*!*********************************************!*\
      !*** ./src/app/pages/verify/verify.page.ts ***!
      \*********************************************/

    /*! exports provided: VerifyPage */

    /***/
    function TCp9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPage", function () {
        return VerifyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_verify_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./verify.page.html */
      "FbwC");
      /* harmony import */


      var _verify_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./verify.page.scss */
      "CTwn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin"); //


      var VerifyPage = /*#__PURE__*/function () {
        function VerifyPage(api, util, navParam, navCtrl, modalCtrl) {
          var _this21 = this;

          _classCallCheck(this, VerifyPage);

          this.api = api;
          this.util = util;
          this.navParam = navParam;
          this.navCtrl = navCtrl;
          this.modalCtrl = modalCtrl;
          this.textCode = '';
          this.userCode = '';
          this.resendCode = false; // console.log('cc code', this.navParam.get('code'));

          this.sendOTP();
          setTimeout(function () {
            _this21.resendCode = true;
          }, 30000);
        }

        _createClass(VerifyPage, [{
          key: "sendOTP",
          value: function sendOTP() {
            var _this22 = this;

            this.mobile = this.navParam.get('code') + this.navParam.get('phone'); // console.log('send on this number------<<<<<<<', this.mobile);
            // console.log(this.mobile);

            var message = this.util.translate('Your Foodies app verification code : ');
            var param = {
              msg: message,
              to: this.mobile
            }; // console.log(param);

            this.util.show();
            this.api.post('users/twilloMessage', param).then(function (data) {
              // console.log(data);
              _this22.id = data.data.id;

              _this22.util.hide();
            }, function (error) {
              // console.log(error);
              _this22.util.hide();

              _this22.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onOtpChange",
          value: function onOtpChange(event) {
            // console.log(event);
            this.userCode = event;
          }
        }, {
          key: "resend",
          value: function resend() {
            this.sendOTP();
          }
        }, {
          key: "continue",
          value: function _continue() {
            var _this23 = this;

            // console.log(this.userCode);
            if (this.userCode === '' || !this.userCode) {
              this.util.errorToast(this.util.translate('Not valid code'));
              return false;
            }

            if (this.userCode) {
              var param = {
                id: this.id,
                otp: this.userCode
              };
              this.util.show();
              this.api.post('users/verifyOTP', param).then(function (data) {
                // console.log(data);
                _this23.util.hide();

                if (data && data.status === 200) {
                  _this23.modalCtrl.dismiss('', 'ok');
                } else {
                  if (data && data.status === 500 && data.data && data.data.message) {
                    _this23.util.errorToast(data.data.message);

                    return false;
                  }

                  _this23.util.errorToast('Algo ha ido mal');

                  return false;
                }
              }, function (error) {
                _this23.util.hide(); // console.log(error);


                _this23.util.errorToast('Algo ha ido mal');
              });
            } else {
              this.util.errorToast(this.util.translate('Not valid code'));
              return false;
            }
          }
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          }
        }]);

        return VerifyPage;
      }();

      VerifyPage.ctorParameters = function () {
        return [{
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      VerifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify',
        template: _raw_loader_verify_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verify_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], VerifyPage);
      /***/
    },

    /***/
    "UWHZ":
    /*!***********************************************!*\
      !*** ./src/app/pages/verify/verify.module.ts ***!
      \***********************************************/

    /*! exports provided: VerifyPageModule */

    /***/
    function UWHZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function () {
        return VerifyPageModule;
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


      var _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./verify-routing.module */
      "DB8z");
      /* harmony import */


      var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./verify.page */
      "TCp9");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-otp-input */
      "9OaD"); //


      var VerifyPageModule = function VerifyPageModule() {
        _classCallCheck(this, VerifyPageModule);
      };

      VerifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageRoutingModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"]],
        declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
      })], VerifyPageModule);
      /***/
    },

    /***/
    "Un4R":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/choose-address/choose-address-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ChooseAddressPageRoutingModule */

    /***/
    function Un4R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseAddressPageRoutingModule", function () {
        return ChooseAddressPageRoutingModule;
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


      var _choose_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./choose-address.page */
      "DiWI"); //


      var routes = [{
        path: '',
        component: _choose_address_page__WEBPACK_IMPORTED_MODULE_3__["ChooseAddressPage"]
      }];

      var ChooseAddressPageRoutingModule = function ChooseAddressPageRoutingModule() {
        _classCallCheck(this, ChooseAddressPageRoutingModule);
      };

      ChooseAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChooseAddressPageRoutingModule);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";
      /***/
    },

    /***/
    "Y29p":
    /*!***************************************************************!*\
      !*** ./src/app/pages/product-rating/product-rating.module.ts ***!
      \***************************************************************/

    /*! exports provided: ProductRatingPageModule */

    /***/
    function Y29p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductRatingPageModule", function () {
        return ProductRatingPageModule;
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


      var _product_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./product-rating-routing.module */
      "8hIk");
      /* harmony import */


      var _product_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./product-rating.page */
      "b1BE");
      /* harmony import */


      var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic4-rating */
      "Xcyb"); //


      var ProductRatingPageModule = function ProductRatingPageModule() {
        _classCallCheck(this, ProductRatingPageModule);
      };

      ProductRatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductRatingPageRoutingModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]],
        declarations: [_product_rating_page__WEBPACK_IMPORTED_MODULE_6__["ProductRatingPage"]]
      })], ProductRatingPageModule);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var src_app_pages_choose_address_choose_address_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/pages/choose-address/choose-address.module */
      "Bxw0");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _pages_select_drivers_select_drivers_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/select-drivers/select-drivers.module */
      "4Mq/");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");
      /* harmony import */


      var _pages_variations_variations_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/variations/variations.module */
      "w3kL");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _pages_verify_verify_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./pages/verify/verify.module */
      "UWHZ");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");
      /* harmony import */


      var _pages_product_rating_product_rating_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/product-rating/product-rating.module */
      "Y29p");
      /* harmony import */


      var _pages_driver_rating_driver_rating_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./pages/driver-rating/driver-rating.module */
      "4bno");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "mtRb");
      /* harmony import */


      var _pages_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./pages/select-country/select-country.module */
      "rDR3");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "6g0+");
      /* harmony import */


      var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ionic-native/location-accuracy/ngx */
      "92l+"); //


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], src_app_pages_choose_address_choose_address_module__WEBPACK_IMPORTED_MODULE_11__["ChooseAddressPageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _pages_select_drivers_select_drivers_module__WEBPACK_IMPORTED_MODULE_15__["SelectDriversPageModule"], _pages_variations_variations_module__WEBPACK_IMPORTED_MODULE_17__["VariationsPageModule"], _pages_verify_verify_module__WEBPACK_IMPORTED_MODULE_19__["VerifyPageModule"], _pages_product_rating_product_rating_module__WEBPACK_IMPORTED_MODULE_21__["ProductRatingPageModule"], _pages_driver_rating_driver_rating_module__WEBPACK_IMPORTED_MODULE_22__["DriverRatingPageModule"], _pages_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_24__["SelectCountryPageModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_25__["NgxIonicImageViewerModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_18__["IonicStorageModule"].forRoot()],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_26__["LocationAccuracy"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__["OneSignal"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_16__["HTTP"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__["InAppBrowser"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_23__["Diagnostic"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZwHX":
    /*!*************************************************!*\
      !*** ./src/app/locationGuard/location.guard.ts ***!
      \*************************************************/

    /*! exports provided: LocationGuard */

    /***/
    function ZwHX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationGuard", function () {
        return LocationGuard;
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


      var _services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/apis.service */
      "8RPc"); //


      var LocationGuard = /*#__PURE__*/function () {
        function LocationGuard(authServ, router) {
          _classCallCheck(this, LocationGuard);

          this.authServ = authServ;
          this.router = router;
        }

        _createClass(LocationGuard, [{
          key: "canActivate",
          value: function canActivate(route) {
            var location = localStorage.getItem('location'); // console.log('location', localStorage.getItem('location'));

            if (location && location != null && location !== 'null') {
              return true;
            }

            this.router.navigate(['/location']);
            return false;
          }
        }]);

        return LocationGuard;
      }();

      LocationGuard.ctorParameters = function () {
        return [{
          type: _services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      LocationGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LocationGuard);
      /***/
    },

    /***/
    "ac/F":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-rating/driver-rating.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function acF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{name}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"main_div\">\n      <div class=\"info_div\">\n        <div class=\"rattingBtns\">\n          <rating [(ngModel)]=\"rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\"\n            halfStarIconName=\"star-half\" starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\">\n          </rating>\n        </div>\n        <div class=\"name\">\n          <div class=\"content_div\">\n            <ion-textarea row=\"8\" type=\"text\" [placeholder]=\"util.translate('Comment')\" [(ngModel)]=\"comment\">\n            </ion-textarea>\n          </div>\n        </div>\n        <ion-button (click)=\"submit()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          {{util.translate('Submit')}}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "b1BE":
    /*!*************************************************************!*\
      !*** ./src/app/pages/product-rating/product-rating.page.ts ***!
      \*************************************************************/

    /*! exports provided: ProductRatingPage */

    /***/
    function b1BE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductRatingPage", function () {
        return ProductRatingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_product_rating_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./product-rating.page.html */
      "2Vrb");
      /* harmony import */


      var _product_rating_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-rating.page.scss */
      "lLFv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); //


      var ProductRatingPage = /*#__PURE__*/function () {
        function ProductRatingPage(util, api, route) {
          var _this24 = this;

          _classCallCheck(this, ProductRatingPage);

          this.util = util;
          this.api = api;
          this.route = route;
          this.rate = 2;
          this.comment = '';
          this.rating = [];
          this.route.queryParams.subscribe(function (data) {
            // console.log(data);
            if (data && data.id && data.name) {
              _this24.id = data.id;
              _this24.name = data.name;
              _this24.way = 'order'; // console.log('id', this.id);
              // console.log('name', this.name);

              var param = {
                where: 'pid = ' + _this24.id
              };

              _this24.util.show();

              _this24.api.post('rating/getFromCount', param).then(function (data) {
                _this24.util.hide(); // console.log('data', data);


                if (data && data.status === 200) {
                  if (data && data.data && data.data.total) {
                    _this24.total = data.data.total;

                    if (data.data.rating) {
                      var rats = data.data.rating; // console.log(rats.split(','));

                      _this24.rating = rats.split(',');
                    } else {
                      _this24.rating = [];
                    }
                  } else {
                    _this24.total = 0;
                    _this24.rating = [];
                  }
                } else {
                  _this24.total = 0;
                  _this24.rating = [];
                } // console.log('total', this.total);

              }, function (error) {
                // console.log(error);
                _this24.util.hide();

                _this24.total = 0;
                _this24.rating = [];
              });
            }
          });
        }

        _createClass(ProductRatingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.util.back();
          }
        }, {
          key: "onRatingChange",
          value: function onRatingChange(event) {// console.log(event);
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this25 = this;

            this.rating.push(this.rate);
            var count = 0;
            var sum = this.rating.reduce(function (sum, item, index) {
              item = parseFloat(item); // console.log(sum, item, index);

              count += item;
              return sum + item * (index + 1);
            }, 0); // console.log(sum / count);

            var storeRating = (sum / count).toFixed(2); // console.log('rate', this.rate, this.comment);

            if (this.comment === '') {
              this.util.errorToast('Algo ha ido mal');
              return false;
            }

            var param = {
              uid: localStorage.getItem('uid'),
              pid: this.id,
              did: 0,
              sid: 0,
              rate: this.rate,
              msg: this.comment,
              way: this.way,
              status: 1,
              timestamp: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD')
            };
            this.util.show();
            this.api.post('rating/save', param).then(function (data) {
              // console.log(data);
              _this25.util.hide();

              if (data && data.status === 200) {
                _this25.util.showToast('Rating added', 'success', 'bottom');

                var storeParam = {
                  id: _this25.id,
                  rating: storeRating
                };

                _this25.api.post('products/editList', storeParam).then(function (stores) {// console.log('products edit done', stores);
                }, function (error) {// console.log(error);
                });

                _this25.close();
              } else {
                _this25.util.errorToast('Algo ha ido mal');
              }
            }, function (error) {
              _this25.util.hide(); // console.log(error);


              _this25.util.errorToast('Algo ha ido mal');
            });
          }
        }]);

        return ProductRatingPage;
      }();

      ProductRatingPage.ctorParameters = function () {
        return [{
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      };

      ProductRatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-rating',
        template: _raw_loader_product_rating_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_rating_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])], ProductRatingPage);
      /***/
    },

    /***/
    "blxb":
    /*!*****************************************************!*\
      !*** ./src/app/pages/variations/variations.page.ts ***!
      \*****************************************************/

    /*! exports provided: VariationsPage */

    /***/
    function blxb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VariationsPage", function () {
        return VariationsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_variations_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./variations.page.html */
      "jl/1");
      /* harmony import */


      var _variations_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./variations.page.scss */
      "G4oC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin"); //


      var VariationsPage = /*#__PURE__*/function () {
        function VariationsPage(modalController, navParma, util) {
          _classCallCheck(this, VariationsPage);

          this.modalController = modalController;
          this.navParma = navParma;
          this.util = util;
          this.productName = '';
          this.desc = '';
          this.total = 0;
          this.cart = [];
          this.userCart = [];
          this.sameProduct = false;
          this.removeProduct = false;
          this.newItem = false;
          this.sameCart = [];
          this.currentFile = [];
          var info = this.navParma.get('food');
          this.foodInfo = info;
          this.selectedItem = info; // console.log('info', info);

          this.productName = info.name;
          this.lists = info.variations;
          var userCart = localStorage.getItem('userCart');
          this.haveSize = info.size === '1';

          if (userCart && userCart !== 'null' && userCart !== undefined && userCart !== 'undefined') {
            this.userCart = JSON.parse(userCart);
            var sameItem = this.userCart.filter(function (x) {
              return x.id === info.id;
            });

            if (sameItem.length > 0) {
              this.sameProduct = true;
              this.sameCart = sameItem[0].selectedItem;
              this.currentFile.push(sameItem[0]);
            }
          } else {
            this.userCart = [];
          }
        }

        _createClass(VariationsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeIt",
          value: function closeIt() {
            this.modalController.dismiss();
          }
        }, {
          key: "radioGroupChange",
          value: function radioGroupChange(event, title) {
            // console.log(this.lists);
            var radioList = this.lists.filter(function (x) {
              return x.title === title;
            });
            var selectedItems = radioList[0].items.filter(function (x) {
              return x.title === event.detail.value;
            });
            var price = parseFloat(selectedItems[0].price);
            var param = {
              type: title,
              value: price,
              name: selectedItems[0].title
            };
            var item = this.cart.filter(function (x) {
              return x.type === title;
            });

            if (item && item.length) {
              var index = this.cart.findIndex(function (x) {
                return x.type === title;
              });
              this.cart[index].value = price;
              this.cart[index].name = selectedItems[0].title;
            } else {
              this.cart.push(param);
            }
          }
        }, {
          key: "sameChoise",
          value: function sameChoise() {
            this.modalController.dismiss(this.sameCart, 'sameChoice');
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            /*
              new
              sameChoice
              newCustom
              remove
              dismissed with no selection from extras.
            */
            var addedSize = this.cart.filter(function (x) {
              return x.type === 'size';
            });
            var role;

            if (this.haveSize && !addedSize.length) {
              this.util.errorToast('Please select size');
              return false;
            }

            if (this.cart.length && !this.userCart.length) {
              role = 'new';
            }

            if (this.cart.length && this.userCart.length) {
              role = 'new';
            }

            if (!this.cart.length) {
              role = 'dismissed';
            }

            if (this.newItem) {
              role = 'newCustom';
            } // console.log(this.haveSize, '------------------', this.cart);


            if (this.haveSize === false) {
              var regularItem = {
                name: 'Regular',
                type: 'size',
                value: Number(this.foodInfo.price)
              };
              this.cart.push(regularItem);
            }

            this.modalController.dismiss(this.cart, role);
          }
        }, {
          key: "checkedEvent",
          value: function checkedEvent(event, title) {
            var price = parseFloat(event.detail.value);
            var param = {
              type: title,
              value: price,
              name: title
            };

            if (event.detail && event.detail.checked) {
              this.cart.push(param);
            } else {
              this.cart = this.cart.filter(function (x) {
                return x.type !== title;
              });
            }
          }
        }, {
          key: "addQ",
          value: function addQ(index) {
            this.sameCart[index].total = this.sameCart[index].total + 1;
          }
        }, {
          key: "removeQ",
          value: function removeQ(index) {
            this.sameCart[index].total = this.sameCart[index].total - 1;

            if (this.sameCart[index].total === 0) {
              this.sameCart = this.sameCart.filter(function (x) {
                return x.total !== 0;
              });
            }

            if (this.sameCart.length < 0) {
              this.modalController.dismiss(this.cart, 'remove');
            }
          }
        }]);

        return VariationsPage;
      }();

      VariationsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }];
      };

      VariationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-variations',
        template: _raw_loader_variations_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_variations_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])], VariationsPage);
      /***/
    },

    /***/
    "c14U":
    /*!******************************************!*\
      !*** ./src/app/services/cart.service.ts ***!
      \******************************************/

    /*! exports provided: CartService */

    /***/
    function c14U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
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


      var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./util.service */
      "2Rin"); //


      var CartService = /*#__PURE__*/function () {
        function CartService(util) {
          var _this26 = this;

          _classCallCheck(this, CartService);

          this.util = util;
          this.cart = [];
          this.itemId = [];
          this.totalPrice = 0;
          this.grandTotal = 0;
          this.discount = 0;
          this.orderTax = 0;
          this.shippingPrice = 0;
          this.minOrderPrice = 0;
          this.freeShipping = 0;
          this.deliveryPrice = 0;
          this.stores = [];
          this.bulkOrder = [];
          this.util.getCouponObservable().subscribe(function (data) {
            if (data) {
              // console.log('------------->>', data);
              _this26.coupon = data;
              _this26.coupon.discount = parseFloat(data.discount);
              _this26.coupon.min = parseFloat(data.min);

              _this26.calcuate();
            }
          });
          this.util.getKeys('userCart').then(function (data) {
            // console.log('first???', data);
            if (data && data !== null && data !== 'null') {
              var userCart = JSON.parse(data);

              if (userCart && userCart.length > 0) {
                _this26.cart = userCart;
                _this26.itemId = _toConsumableArray(new Set(_this26.cart.map(function (item) {
                  return item.id;
                })));

                _this26.calcuate(); // console.log('0???', data);

              } else {
                // console.log('1???', data);
                _this26.calcuate();
              }
            } else {
              // console.log('2???', data);
              _this26.calcuate();
            }
          });
        }

        _createClass(CartService, [{
          key: "clearCart",
          value: function clearCart() {
            this.cart = [];
            this.itemId = [];
            this.totalPrice = 0;
            this.grandTotal = 0;
            this.coupon = undefined;
            this.discount = 0;
            this.orderPrice = 0;
            this.datetime = undefined;
            this.stores = [];
            this.util.clearKeys('cart');
            this.totalItem = 0;
            this.calcuate();
          }
        }, {
          key: "addVariations",
          value: function addVariations(info, cart, type) {
            if (type === 'new') {
              // console.log('-->> new--->>', info, cart);
              this.cart.push(info);
              this.itemId.push(info.id);
            } else if (type === 'sameChoice') {
              var index = this.cart.findIndex(function (x) {
                return x.id === info.id;
              }); // console.log('index--', index);

              this.cart[index].selectedItem = info.selectedItem;
            } else if (type === 'newCustom') {
              var _index = this.cart.findIndex(function (x) {
                return x.id === info.id;
              }); // console.log('index--', index);


              this.cart[_index].selectedItem = info.selectedItem;
              this.cart[_index].quantiy = info.quantiy;
            }

            this.calcuate();
          }
        }, {
          key: "addItem",
          value: function addItem(item) {
            // console.log('item to adde', item);
            this.cart.push(item);
            this.itemId.push(item.id);
            this.calcuate();
          }
        }, {
          key: "addQuantity",
          value: function addQuantity(quantity, id) {
            // console.log('iddd-->>', id);
            // console.log('quantity', quantity);
            this.cart.forEach(function (element) {
              if (element.id === id) {
                element.quantiy = quantity;
              }
            });
            this.calcuate();
          }
        }, {
          key: "removeItem",
          value: function removeItem(id) {
            // console.log('remove this item from cart');
            // console.log('current cart items', this.cart);
            this.cart = this.cart.filter(function (x) {
              return x.id !== id;
            });
            this.itemId = this.itemId.filter(function (x) {
              return x !== id;
            }); // console.log('====>>>>>>>>>', this.cart);
            // console.log('items====>>>', this.itemId);

            this.calcuate();
          }
        }, {
          key: "calcuate",
          value: function calcuate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var _this27 = this;

              var item, appTax, tax, distance, distancePricer, percentage, totalPrice, lng, selectedCity;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      item = this.cart.filter(function (x) {
                        return x.quantiy > 0;
                      });
                      this.cart.forEach(function (element) {
                        if (element.quantiy === 0) {
                          element.selectedItem = [];
                        }
                      });
                      this.totalPrice = 0;
                      this.totalItem = 0;
                      this.cart = [];
                      item.forEach(function (element) {
                        if (element && element.selectedItem && element.selectedItem.length > 0 && element.size === '1') {
                          var subPrice = 0;
                          element.selectedItem.forEach(function (subItems) {
                            subItems.item.forEach(function (realsItems) {
                              subPrice = subPrice + realsItems.value;
                            });
                            subPrice = subPrice * subItems.total;
                            _this27.totalItem = _this27.totalItem + subItems.total;
                          });
                          _this27.totalPrice = _this27.totalPrice + subPrice;
                        } else if (element && element.selectedItem && element.selectedItem.length > 0 && element.size === '0') {
                          var _subPrice = 0;
                          element.selectedItem.forEach(function (subItems) {
                            _subPrice = 0;
                            subItems.item.forEach(function (realsItems) {
                              _subPrice = _subPrice + realsItems.value;
                            });
                            _subPrice = _subPrice * subItems.total;
                            _this27.totalItem = _this27.totalItem + subItems.total;
                            _this27.totalPrice = _this27.totalPrice + _subPrice;
                          });
                        } else {
                          _this27.totalItem = _this27.totalItem + element.quantiy;
                          _this27.totalPrice = _this27.totalPrice + parseFloat(element.price) * parseInt(element.quantiy);
                        }

                        _this27.cart.push(element);
                      });
                      localStorage.removeItem('userCart');
                      localStorage.setItem('userCart', JSON.stringify(this.cart));
                      this.util.clearKeys('userCart');
                      this.util.setKeys('userCart', JSON.stringify(this.cart));
                      this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                      appTax = this.util.general && this.util.general.tax ? parseFloat(this.util.general.tax) : 0;
                      tax = parseFloat(this.totalPrice) * appTax / 100;
                      this.orderTax = tax.toFixed(2);

                      if (!(this.deliveryAddress && this.deliveryAddress.address && this.cartStoreInfo && this.cartStoreInfo.address)) {
                        _context21.next = 20;
                        break;
                      }

                      _context21.next = 17;
                      return this.distanceInKmBetweenEarthCoordinates(this.deliveryAddress.lat, this.deliveryAddress.lng, this.cartStoreInfo.lat, this.cartStoreInfo.lng);

                    case 17:
                      distance = _context21.sent;
                      _context21.next = 21;
                      break;

                    case 20:
                      distance = 0;

                    case 21:
                      if (this.freeShipping > this.totalPrice) {
                        if (this.shipping === 'km') {
                          distancePricer = distance * this.shippingPrice;
                          this.deliveryPrice = Math.floor(distancePricer).toFixed(2);
                        } else {
                          this.deliveryPrice = this.shippingPrice;
                        }
                      } else {
                        this.deliveryPrice = 0;
                      }

                      this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.deliveryPrice);
                      this.grandTotal = this.grandTotal.toFixed(2);

                      if (this.coupon && this.coupon.code && this.totalPrice >= parseFloat(this.coupon.min)) {
                        if (this.coupon.type === 'per') {
                          percentage = function percentage(num, per) {
                            return num / 100 * per;
                          };

                          totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), this.coupon.discount);
                          this.discount = totalPrice.toFixed(2);
                          this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.deliveryPrice);
                          this.grandTotal = this.grandTotal - this.discount;
                          this.grandTotal = this.grandTotal.toFixed(2);
                        } else {
                          this.discount = this.coupon.discount;
                          this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.deliveryPrice);
                          this.grandTotal = this.grandTotal - this.discount;
                          this.grandTotal = this.grandTotal.toFixed(2);
                        }
                      } else {
                        this.coupon = null;
                        localStorage.removeItem('coupon');
                      }

                      if (this.totalItem === 0) {
                        lng = localStorage.getItem('language');
                        selectedCity = localStorage.getItem('selectedCity');
                        localStorage.setItem('language', lng);
                        localStorage.setItem('selectedCity', selectedCity);
                        this.totalItem = 0;
                        this.totalPrice = 0;
                      }

                    case 26:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "checkProductInCart",
          value: function checkProductInCart(id) {
            return this.itemId.includes(id);
          }
        }, {
          key: "degreesToRadians",
          value: function degreesToRadians(degrees) {
            return degrees * Math.PI / 180;
          }
        }, {
          key: "distanceInKmBetweenEarthCoordinates",
          value: function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
            // console.log(lat1, lon1, lat2, lon2);
            var earthRadiusKm = 6371;
            var dLat = this.degreesToRadians(lat2 - lat1);
            var dLon = this.degreesToRadians(lon2 - lon1);
            lat1 = this.degreesToRadians(lat1);
            lat2 = this.degreesToRadians(lat2);
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return earthRadiusKm * c;
          }
        }]);

        return CartService;
      }();

      CartService.ctorParameters = function () {
        return [{
          type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
        }];
      };

      CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])], CartService);
      /***/
    },

    /***/
    "cT6d":
    /*!*************************************!*\
      !*** ./src/app/guard/auth.guard.ts ***!
      \*************************************/

    /*! exports provided: AuthGuard */

    /***/
    function cT6d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var _services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/apis.service */
      "8RPc"); //


      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authServ, router) {
          _classCallCheck(this, AuthGuard);

          this.authServ = authServ;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route) {
            var uid = localStorage.getItem('uid'); // console.log('uid', localStorage.getItem('uid'));

            if (uid && uid != null && uid !== 'null') {
              return true;
            }

            this.router.navigate(['/login']);
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
      /***/
    },

    /***/
    "eqCj":
    /*!***************************************************************!*\
      !*** ./src/app/pages/select-country/select-country.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function eqCj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtY291bnRyeS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "fBKi":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fBKi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-list lines=\"none\">\n  <ion-item (click)=\"select('edit')\">\n    <ion-label color=\"secondary\">{{util.translate('EDIT')}}</ion-label>\n  </ion-item>\n  <ion-item (click)=\"select('delete')\">\n    <ion-label color=\"danger\">{{util.translate('DELETE')}}</ion-label>\n  </ion-item>\n</ion-list>";
      /***/
    },

    /***/
    "g+95":
    /*!***************************************************************!*\
      !*** ./src/app/pages/variations/variations-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: VariationsPageRoutingModule */

    /***/
    function g95(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VariationsPageRoutingModule", function () {
        return VariationsPageRoutingModule;
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


      var _variations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./variations.page */
      "blxb"); //


      var routes = [{
        path: '',
        component: _variations_page__WEBPACK_IMPORTED_MODULE_3__["VariationsPage"]
      }];

      var VariationsPageRoutingModule = function VariationsPageRoutingModule() {
        _classCallCheck(this, VariationsPageRoutingModule);
      };

      VariationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VariationsPageRoutingModule);
      /***/
    },

    /***/
    "gKjt":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/select-drivers/select-drivers-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SelectDriversPageRoutingModule */

    /***/
    function gKjt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectDriversPageRoutingModule", function () {
        return SelectDriversPageRoutingModule;
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


      var _select_drivers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./select-drivers.page */
      "ERed"); //


      var routes = [{
        path: '',
        component: _select_drivers_page__WEBPACK_IMPORTED_MODULE_3__["SelectDriversPage"]
      }];

      var SelectDriversPageRoutingModule = function SelectDriversPageRoutingModule() {
        _classCallCheck(this, SelectDriversPageRoutingModule);
      };

      SelectDriversPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SelectDriversPageRoutingModule);
      /***/
    },

    /***/
    "hxji":
    /*!*************************************************************!*\
      !*** ./src/app/pages/select-country/select-country.page.ts ***!
      \*************************************************************/

    /*! exports provided: SelectCountryPage */

    /***/
    function hxji(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectCountryPage", function () {
        return SelectCountryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_select_country_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./select-country.page.html */
      "2vAW");
      /* harmony import */


      var _select_country_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./select-country.page.scss */
      "eqCj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin"); //


      var SelectCountryPage = /*#__PURE__*/function () {
        function SelectCountryPage(modalCtrl, util) {
          var _this28 = this;

          _classCallCheck(this, SelectCountryPage);

          this.modalCtrl = modalCtrl;
          this.util = util;
          this.ccCode = '91';
          this.countries = [];
          this.dummy = [];
          this.dummyLoad = [];
          this.dummyLoad = Array(10);
          setTimeout(function () {
            _this28.dummyLoad = [];
            _this28.dummy = _this28.util.countrys;
            _this28.countries = _this28.dummy; // console.log(this.dummy);
          }, 500);
        }

        _createClass(SelectCountryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "onSearchChange",
          value: function onSearchChange(events) {
            // console.log(events);
            if (events.value !== '') {
              this.countries = this.dummy.filter(function (item) {
                return item.country_name.toLowerCase().indexOf(events.detail.value.toLowerCase()) > -1;
              });
            } else {
              this.countries = [];
            }
          }
        }, {
          key: "okay",
          value: function okay() {
            // console.log(this.ccCode);
            this.modalCtrl.dismiss(this.ccCode, 'selected');
          }
        }]);

        return SelectCountryPage;
      }();

      SelectCountryPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }];
      };

      SelectCountryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-country',
        template: _raw_loader_select_country_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_country_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])], SelectCountryPage);
      /***/
    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/popover/popover.component */
      "nm6V");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu/menu.component */
      "0oYm"); //


      var components = [_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"]];

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [components],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        exports: [].concat(components)
      })], ComponentsModule);
      /***/
    },

    /***/
    "jT0p":
    /*!***********************************************************!*\
      !*** ./src/app/components/popover/popover.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function jT0p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "jl/1":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/variations/variations.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function jl1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-start\">{{productName}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeIt()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Same Product -->\n  <div *ngIf=\"sameProduct\">\n    <div *ngFor=\"let item of sameCart;let i = index\" class=\"cartItems\">\n      <p class=\"name\">{{productName}}</p>\n      <div class=\"details\">\n        <div class=\"names\">\n          <p *ngFor=\"let sub of item.item\" class=\"subDetails\"> {{sub.name}} </p>\n        </div>\n        <div class=\"cartBtn2\">\n          <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n            <ion-icon name=\"remove\"></ion-icon>\n          </ion-button>\n          <p class=\"qunitity\">{{item.total}}</p>\n          <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- New Or diff variations -->\n  <div *ngIf=\"!sameProduct\" class=\"padder\">\n    <div *ngFor=\"let item of lists\">\n      <ion-list *ngIf=\"item.type == 'radio'\">\n        <ion-radio-group (ionChange)=\"radioGroupChange($event,item.title)\">\n          <ion-list-header>\n            <ion-label>{{item.title}}</ion-label>\n          </ion-list-header>\n          <ion-item *ngFor=\"let sub of item.items;let i = index;\">\n            <ion-label style=\"text-align: left\">{{sub.title}}</ion-label>\n            <ion-label style=\"text-align: right\" *ngIf=\"util.cside =='right'\"> {{sub.price}} {{util.currecny}}\n            </ion-label>\n            <ion-label style=\"text-align: right\" *ngIf=\"util.cside =='left'\"> {{util.currecny}} {{sub.price}}\n            </ion-label>\n            <ion-radio slot=\"start\" [value]=\"sub.title\" [name]=\"sub.title\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <ion-list *ngIf=\"item.type =='check'\">\n        <ion-list-header>\n          <ion-label>{{item.title}}</ion-label>\n        </ion-list-header>\n        <ion-item *ngFor=\"let sub of item.items;let j = index;\">\n          <ion-label style=\"text-align: left\">{{sub.title}}</ion-label>\n          <ion-label style=\"text-align: right\" *ngIf=\"util.cside =='right'\"> {{sub.price}} {{util.currecny}}</ion-label>\n          <ion-label style=\"text-align: right\" *ngIf=\"util.cside =='left'\"> {{util.currecny}} {{sub.price}}</ion-label>\n          <ion-checkbox slot=\"start\" [value]=\"sub.price\" (ionChange)=\"checkedEvent($event,sub.title)\" mode=\"md\">\n          </ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div class=\"footers\">\n    <ion-button (click)=\"addToCart()\" expand=\"block\" *ngIf=\"!sameProduct\">\n      Añadir {{total ? this.util.currecny:'' }} {{total ? total : ''}}\n    </ion-button>\n    <ion-row *ngIf=\"sameProduct\">\n      <ion-col size=\"6\">\n        <ion-button (click)=\"sameChoise()\" expand=\"block\">\n          Listo\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"sameProduct = !sameProduct;newItem = true\" expand=\"block\">\n          Añadir nuevo\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "kSbv":
    /*!***************************************************************!*\
      !*** ./src/app/pages/select-drivers/select-drivers.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function kSbv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-modal.modalContact {\n  --height: auto;\n}\nion-modal.modalContact .modal-wrapper {\n  width: 90% !important;\n}\nion-modal.modalContact.bottom {\n  align-items: flex-end;\n}\nion-modal.modalContact .ion-page {\n  position: relative;\n  display: block;\n  contain: content;\n}\nion-modal.modalContact .ion-page .inner-content {\n  max-height: 80vh;\n  overflow: auto;\n  border-radius: 10px;\n}\n.div_header {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  position: relative;\n}\n.div_header .img_cross {\n  width: 35px;\n  position: absolute;\n  right: 20px;\n}\n.div_header .lbl_contact {\n  font-size: 20px;\n  display: block;\n  text-align: center;\n  margin-top: 20px;\n}\n.div_content {\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid lightgray;\n  padding: 10px;\n}\n.div_content .iconPerson {\n  font-size: 3rem;\n}\n.div_content .title {\n  text-align: center;\n  font-size: 0.8rem;\n  color: black;\n  margin: 0px;\n}\n.div_content .your {\n  text-align: center;\n  font-size: 0.8rem;\n  color: black;\n  margin: 0px;\n}\n.div_content .score {\n  text-align: center;\n  font-size: 1.2rem;\n  color: black;\n  margin: 0px;\n  font-weight: bold;\n}\n.content {\n  padding: 10px;\n}\n.content .inputs {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.content .inputs ion-input {\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  --padding-start: 10px;\n  margin: 15px 0px;\n}\n.content .tabs_prpl {\n  background: var(--ion-color-secondary);\n  color: white;\n  height: 30px;\n  line-height: 20px;\n  margin-bottom: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n.content .pdd_left {\n  padding-left: 20px;\n}\n.div_btn .cancel {\n  border-top: 1px solid lightgray;\n}\n.div_btn .save {\n  border-top: 1px solid lightgray;\n  border-left: 1px solid lightgray;\n  background: #f9f9f9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlbGVjdC1kcml2ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQU9JLGNBQUE7QUFOSjtBQUFJO0VBQ0kscUJBQUE7QUFFUjtBQUFJO0VBQ0kscUJBQUE7QUFFUjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUFRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7QUFDWjtBQUlBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQURKO0FBRUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQVI7QUFFSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFSO0FBR0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FBQUo7QUFDSTtFQUNJLGVBQUE7QUFDUjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ1I7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNSO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNSO0FBRUE7RUFDSSxhQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQUFJO0VBQ0ksc0NBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBR0k7RUFDSSwrQkFBQTtBQUFSO0FBRUk7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFBUiIsImZpbGUiOiJzZWxlY3QtZHJpdmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAvL1xuaW9uLW1vZGFsLm1vZGFsQ29udGFjdCB7XG4gICAgLm1vZGFsLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICYuYm90dG9tIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIH1cbiAgICAtLWhlaWdodDogYXV0bztcbiAgICAuaW9uLXBhZ2Uge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb250YWluOiBjb250ZW50O1xuICAgICAgICAuaW5uZXItY29udGVudCB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRpdl9oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuaW1nX2Nyb3NzIHtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIC5sYmxfY29udGFjdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG59XG4uZGl2X2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLmljb25QZXJzb24ge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICAgIC55b3VyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgLnNjb3JlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLmlucHV0cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGFic19wcnBsIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG4gICAgLnBkZF9sZWZ0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cbn1cblxuLmRpdl9idG4ge1xuICAgIC5jYW5jZWwge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIH1cbiAgICAuc2F2ZSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "lLFv":
    /*!***************************************************************!*\
      !*** ./src/app/pages/product-rating/product-rating.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function lLFv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  padding: 20px;\n}\n.main_content_div .main_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_content_div .rattingBtns {\n  margin: 20px 0px;\n}\n.main_content_div .name {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  justify-content: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n}\n.main_content_div .name .image_div {\n  width: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main_content_div .name .icn {\n  max-width: 15px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .name .content_div {\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  margin-left: 15px;\n}\n.main_content_div .name .content_div span {\n  font-size: 11px;\n  color: #8992aa;\n  padding-top: 5px;\n}\n.main_content_div .name .content_div ion-input {\n  font-size: 11px;\n  color: #454d62;\n}\n.main_content_div .btn_div {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.main_content_div ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 3px;\n  --color: white;\n  font-weight: bold;\n  font-size: 12px;\n  height: 40px;\n  width: 150px;\n  text-transform: capitalize;\n  --background-activated: rgba(159, 201, 165, 0.5);\n  --color-actived: white;\n}\n.main_content_div ion-button .logout_icon {\n  width: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2R1Y3QtcmF0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7QUFBSjtBQUVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFBUjtBQUVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQVI7QUFFSTtFQUNJLGdCQUFBO0FBQVI7QUFFSTtFQUNJLGtCQUFBO0VBQ0Esb0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFFUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBWjtBQUVRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQVo7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFaO0FBRVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQWhCO0FBRVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUFoQjtBQUtJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUhSO0FBS0k7RUFDSSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnREFBQTtFQUNBLHNCQUFBO0FBSFI7QUFJUTtFQUNJLFdBQUE7QUFGWiIsImZpbGUiOiJwcm9kdWN0LXJhdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAvL1xuLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAubWFpbl9kaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC51c2VyX2ltZyB7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5yYXR0aW5nQnRucyB7XG4gICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgfVxuICAgIC5uYW1lIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTNweCByZ2JhKDMwLCA5OCwgMjU1LCAwLjMpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICAuaW1hZ2VfZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmljbiB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudF9kaXYge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzg5OTJhYTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NTRkNjI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuX2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDE1OSwgMjAxLCAxNjUsIDAuNSk7XG4gICAgICAgIC0tY29sb3ItYWN0aXZlZDogd2hpdGU7XG4gICAgICAgIC5sb2dvdXRfaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "lTsH":
    /*!***************************************************************!*\
      !*** ./src/app/pages/choose-address/choose-address.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function lTsH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  display: block;\n}\n\n.group {\n  padding: 10px 15px;\n  width: 100%;\n  background: #fff !important;\n}\n\n.group .mainContent {\n  padding: 5px 10px;\n}\n\n.group .mainContent .savedTitle {\n  font-weight: bold;\n}\n\n.group .mainContent .noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n\n.group .mainContent .list {\n  margin-top: 20px;\n  position: relative;\n  overflow-x: auto;\n}\n\n.group .mainContent .list::-webkit-scrollbar {\n  display: none;\n}\n\n.group .mainContent .list .scroll-item {\n  flex: 0 0 auto;\n}\n\n.group .mainContent .list .title {\n  font-weight: bold;\n  color: black;\n  font-size: 14px;\n  white-space: pre-wrap;\n  text-transform: capitalize;\n  margin-bottom: 5px;\n}\n\n.group .mainContent .list .name {\n  color: gray;\n  font-size: 13px;\n}\n\n.group .mainContent .list .moreIcon {\n  position: absolute;\n  right: 0px;\n  top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Nob29zZS1hZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGNBQUE7QUFISjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBRko7O0FBR0k7RUFDSSxpQkFBQTtBQURSOztBQUVRO0VBQ0ksaUJBQUE7QUFBWjs7QUFFUTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFBWjs7QUFFUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtBQUZaOztBQUdZO0VBQ0ksYUFBQTtBQURoQjs7QUFHWTtFQUNJLGNBQUE7QUFEaEI7O0FBR1k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBRGhCOztBQUdZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFEaEI7O0FBR1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBRGhCIiwiZmlsZSI6ImNob29zZS1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgIC8vXG5pb24tY29udGVudCB7XG4gICAgLy8gICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5pb24tbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmdyb3VwIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC5tYWluQ29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAuc2F2ZWRUaXRsZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAubm9EYXRhIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLy8gZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2Nyb2xsLWl0ZW0ge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vcmVJY29uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "nfPh":
    /*!*****************************************************!*\
      !*** ./src/app/components/menu/menu.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function nfPh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".selected {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.normal {\n  color: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwrQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSw0QkFBQTtBQUNKIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAvL1xuLnNlbGVjdGVkIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5vcm1hbCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "nm6V":
    /*!*********************************************************!*\
      !*** ./src/app/components/popover/popover.component.ts ***!
      \*********************************************************/

    /*! exports provided: PopoverComponent */

    /***/
    function nm6V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
        return PopoverComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_popover_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./popover.component.html */
      "fBKi");
      /* harmony import */


      var _popover_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./popover.component.scss */
      "jT0p");
      /* harmony import */


      var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/util.service */
      "2Rin");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/"); //


      var PopoverComponent = /*#__PURE__*/function () {
        function PopoverComponent(popoverController, util) {
          _classCallCheck(this, PopoverComponent);

          this.popoverController = popoverController;
          this.util = util;
        }

        _createClass(PopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "select",
          value: function select(type) {
            this.popoverController.dismiss(type);
          }
        }]);

        return PopoverComponent;
      }();

      PopoverComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
        }, {
          type: _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
        }];
      };

      PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-popover',
        template: _raw_loader_popover_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_popover_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])], PopoverComponent);
      /***/
    },

    /***/
    "pp8I":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-address/choose-address.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pp8I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"from ==='cart'\">Dirección a entregar</ion-title>\n    <ion-title *ngIf=\"from ==='accont'\">Cambiar dirección</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"group\">\n    <div class=\"mainContent\">\n      <ion-button (click)=\"addNew()\" expand=\"block\" fill=\"clear\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n        Añadir dirección\n      </ion-button>\n      <div class=\"noData\" *ngIf=\"!dummy?.length && !myaddress?.length\"\n        [style.backgroundImage]=\"'url(assets/nothing.jpg)'\">\n      </div>\n      <div *ngFor=\"let item of dummy\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n      <ion-list *ngIf=\"from ==='cart'\">\n        <ion-radio-group [(ngModel)]=\"selectedAddress\">\n          <ion-item *ngFor=\"let item of myaddress\" class=\"list\">\n            <ion-label class=\"title\">{{item.title}} <br>\n              <span class=\"name\">{{item.house}} {{item.landmark}} {{item.address}}</span>\n            </ion-label>\n            <!-- <ion-label class=\"name\"></ion-label> -->\n            <ion-radio [value]=\"item.id\" slot=\"start\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n\n\n      </ion-list>\n      <div *ngIf=\"from ==='accont'\">\n        <div class=\"list\" *ngFor=\"let item of myaddress\" scrollX=\"true\">\n\n          <ion-label class=\"title\">{{item.title}}</ion-label>\n          <ion-label class=\"name\">{{item.house}} {{item.landmark}} {{item.address}}\n          </ion-label>\n          <ion-icon class=\"moreIcon\" (click)=\"openMenu(item,$event)\" name=\"ellipsis-vertical-outline\">\n          </ion-icon>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"selectedAddress\" (click)=\"showModalSchedule()\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    "rDR3":
    /*!***************************************************************!*\
      !*** ./src/app/pages/select-country/select-country.module.ts ***!
      \***************************************************************/

    /*! exports provided: SelectCountryPageModule */

    /***/
    function rDR3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectCountryPageModule", function () {
        return SelectCountryPageModule;
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


      var _select_country_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./select-country-routing.module */
      "2wkC");
      /* harmony import */


      var _select_country_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./select-country.page */
      "hxji"); //


      var SelectCountryPageModule = function SelectCountryPageModule() {
        _classCallCheck(this, SelectCountryPageModule);
      };

      SelectCountryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_country_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectCountryPageRoutingModule"]],
        declarations: [_select_country_page__WEBPACK_IMPORTED_MODULE_6__["SelectCountryPage"]]
      })], SelectCountryPageModule);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guard/auth.guard */
      "cT6d");
      /* harmony import */


      var _locationGuard_location_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./locationGuard/location.guard */
      "ZwHX"); //


      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tabs-tabs-module */
          "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./pages/tabs/tabs.module */
          "qiIP")).then(function (m) {
            return m.TabsPageModule;
          });
        },
        canActivate: [_locationGuard_location_guard__WEBPACK_IMPORTED_MODULE_4__["LocationGuard"]]
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tabs-tabs-module */
          "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./pages/tabs/tabs.module */
          "qiIP")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "F4UR")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-register-register-module */
          "pages-register-register-module").then(__webpack_require__.bind(null,
          /*! ./pages/register/register.module */
          "fhSy")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-home-home-module */
          [__webpack_require__.e("default~CATEGORIAS-bebidas-bebidas-module~CATEGORIAS-buscador-buscador-module~CATEGORIAS-cafeypan-ca~57774f30"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "99Un")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'cart',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-cart-cart-module */
          "cart-cart-module").then(__webpack_require__.bind(null,
          /*! ./pages/cart/cart.module */
          "sFz8")).then(function (m) {
            return m.CartPageModule;
          });
        },
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'category',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-category-category-module */
          "pages-category-category-module").then(__webpack_require__.bind(null,
          /*! ./pages/category/category.module */
          "iCz4")).then(function (m) {
            return m.CategoryPageModule;
          });
        }
      }, {
        path: 'account',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-account-account-module */
          "account-account-module").then(__webpack_require__.bind(null,
          /*! ./pages/account/account.module */
          "4+IK")).then(function (m) {
            return m.AccountPageModule;
          });
        },
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'history',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-history-history-module */
          "history-history-module").then(__webpack_require__.bind(null,
          /*! ./pages/history/history.module */
          "6F3i")).then(function (m) {
            return m.HistoryPageModule;
          });
        },
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'payments',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-payments-payments-module */
          "pages-payments-payments-module").then(__webpack_require__.bind(null,
          /*! ./pages/payments/payments.module */
          "cvkL")).then(function (m) {
            return m.PaymentsPageModule;
          });
        }
      }, {
        path: 'choose-address',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/choose-address/choose-address.module */
          "Bxw0")).then(function (m) {
            return m.ChooseAddressPageModule;
          });
        }
      }, {
        path: 'add-new-address',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-add-new-address-add-new-address-module */
          "pages-add-new-address-add-new-address-module").then(__webpack_require__.bind(null,
          /*! ./pages/add-new-address/add-new-address.module */
          "PMNr")).then(function (m) {
            return m.AddNewAddressPageModule;
          });
        }
      }, {
        path: 'coupons',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-coupons-coupons-module */
          "pages-coupons-coupons-module").then(__webpack_require__.bind(null,
          /*! ./pages/coupons/coupons.module */
          "oJaD")).then(function (m) {
            return m.CouponsPageModule;
          });
        }
      }, {
        path: 'history-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-history-detail-history-detail-module */
          "pages-history-detail-history-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/history-detail/history-detail.module */
          "1AGm")).then(function (m) {
            return m.HistoryDetailPageModule;
          });
        }
      }, {
        path: 'choose-restaurant',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-choose-restaurant-choose-restaurant-module */
          "pages-choose-restaurant-choose-restaurant-module").then(__webpack_require__.bind(null,
          /*! ./pages/choose-restaurant/choose-restaurant.module */
          "dg/j")).then(function (m) {
            return m.ChooseRestaurantPageModule;
          });
        }
      }, {
        path: 'add-review',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-add-review-add-review-module */
          "pages-add-review-add-review-module").then(__webpack_require__.bind(null,
          /*! ./pages/add-review/add-review.module */
          "Z3QP")).then(function (m) {
            return m.AddReviewPageModule;
          });
        }
      }, {
        path: 'edit-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-edit-profile-edit-profile-module */
          "pages-edit-profile-edit-profile-module").then(__webpack_require__.bind(null,
          /*! ./pages/edit-profile/edit-profile.module */
          "k578")).then(function (m) {
            return m.EditProfilePageModule;
          });
        }
      }, {
        path: 'tracker',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tracker-tracker-module */
          "pages-tracker-tracker-module").then(__webpack_require__.bind(null,
          /*! ./pages/tracker/tracker.module */
          "akYc")).then(function (m) {
            return m.TrackerPageModule;
          });
        }
      }, {
        path: 'stripe-payments',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-stripe-payments-stripe-payments-module */
          "pages-stripe-payments-stripe-payments-module").then(__webpack_require__.bind(null,
          /*! ./pages/stripe-payments/stripe-payments.module */
          "xKnB")).then(function (m) {
            return m.StripePaymentsPageModule;
          });
        }
      }, {
        path: 'add-card',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-add-card-add-card-module */
          "pages-add-card-add-card-module").then(__webpack_require__.bind(null,
          /*! ./pages/add-card/add-card.module */
          "3ONh")).then(function (m) {
            return m.AddCardPageModule;
          });
        }
      }, {
        path: 'select-drivers',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/select-drivers/select-drivers.module */
          "4Mq/")).then(function (m) {
            return m.SelectDriversPageModule;
          });
        }
      }, {
        path: 'inbox',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-inbox-inbox-module */
          "pages-inbox-inbox-module").then(__webpack_require__.bind(null,
          /*! ./pages/inbox/inbox.module */
          "+duN")).then(function (m) {
            return m.InboxPageModule;
          });
        }
      }, {
        path: 'rate',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-rate-rate-module */
          "pages-rate-rate-module").then(__webpack_require__.bind(null,
          /*! ./pages/rate/rate.module */
          "+6y4")).then(function (m) {
            return m.RatePageModule;
          });
        }
      }, {
        path: 'rest-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-rest-details-rest-details-module */
          "pages-rest-details-rest-details-module").then(__webpack_require__.bind(null,
          /*! ./pages/rest-details/rest-details.module */
          "3gdy")).then(function (m) {
            return m.RestDetailsPageModule;
          });
        }
      }, {
        path: 'cities',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-cities-cities-module */
          "pages-cities-cities-module").then(__webpack_require__.bind(null,
          /*! ./pages/cities/cities.module */
          "eiZR")).then(function (m) {
            return m.CitiesPageModule;
          });
        }
      }, {
        path: 'forgot',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-forgot-forgot-module */
          "pages-forgot-forgot-module").then(__webpack_require__.bind(null,
          /*! ./pages/forgot/forgot.module */
          "Ityv")).then(function (m) {
            return m.ForgotPageModule;
          });
        }
      }, {
        path: 'location',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-location-location-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-location-location-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/location/location.module */
          "lPJH")).then(function (m) {
            return m.LocationPageModule;
          });
        }
      }, {
        path: 'pick-location',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-pick-location-pick-location-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-pick-location-pick-location-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/pick-location/pick-location.module */
          "rt+D")).then(function (m) {
            return m.PickLocationPageModule;
          });
        }
      }, {
        path: 'languages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-languages-languages-module */
          "languages-languages-module").then(__webpack_require__.bind(null,
          /*! ./pages/languages/languages.module */
          "+8HC")).then(function (m) {
            return m.LanguagesPageModule;
          });
        }
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-about-about-module */
          "about-about-module").then(__webpack_require__.bind(null,
          /*! ./pages/about/about.module */
          "UoYK")).then(function (m) {
            return m.AboutPageModule;
          });
        }
      }, {
        path: 'contacts',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-contacts-contacts-module */
          "contacts-contacts-module").then(__webpack_require__.bind(null,
          /*! ./pages/contacts/contacts.module */
          "EWb5")).then(function (m) {
            return m.ContactsPageModule;
          });
        }
      }, {
        path: 'faqs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-faqs-faqs-module */
          "faqs-faqs-module").then(__webpack_require__.bind(null,
          /*! ./pages/faqs/faqs.module */
          "IeLZ")).then(function (m) {
            return m.FaqsPageModule;
          });
        }
      }, {
        path: 'help',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-help-help-module */
          "help-help-module").then(__webpack_require__.bind(null,
          /*! ./pages/help/help.module */
          "6RTz")).then(function (m) {
            return m.HelpPageModule;
          });
        }
      }, {
        path: 'chats',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-chats-chats-module */
          "pages-chats-chats-module").then(__webpack_require__.bind(null,
          /*! ./pages/chats/chats.module */
          "UTXh")).then(function (m) {
            return m.ChatsPageModule;
          });
        }
      }, {
        path: 'driver-rating',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/driver-rating/driver-rating.module */
          "4bno")).then(function (m) {
            return m.DriverRatingPageModule;
          });
        }
      }, {
        path: 'product-rating',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/product-rating/product-rating.module */
          "Y29p")).then(function (m) {
            return m.ProductRatingPageModule;
          });
        }
      }, {
        path: 'select-country',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/select-country/select-country.module */
          "rDR3")).then(function (m) {
            return m.SelectCountryPageModule;
          });
        }
      }, {
        path: 'schedule-order',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-schedule-order-schedule-order-module */
          "pages-schedule-order-schedule-order-module").then(__webpack_require__.bind(null,
          /*! ./pages/schedule-order/schedule-order.module */
          "mHwt")).then(function (m) {
            return m.ScheduleOrderPageModule;
          });
        }
      }, {
        path: 'success',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-success-success-module */
          "pages-success-success-module").then(__webpack_require__.bind(null,
          /*! ./pages/success/success.module */
          "fGwd")).then(function (m) {
            return m.SuccessPageModule;
          });
        }
      }, {
        path: 'bebidas',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | CATEGORIAS-bebidas-bebidas-module */
          [__webpack_require__.e("default~CATEGORIAS-bebidas-bebidas-module~CATEGORIAS-buscador-buscador-module~CATEGORIAS-cafeypan-ca~57774f30"), __webpack_require__.e("CATEGORIAS-bebidas-bebidas-module")]).then(__webpack_require__.bind(null,
          /*! ./CATEGORIAS/bebidas/bebidas.module */
          "90KP")).then(function (m) {
            return m.BebidasPageModule;
          });
        }
      }, {
        path: 'comida',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | CATEGORIAS-comida-comida-module */
          [__webpack_require__.e("default~CATEGORIAS-bebidas-bebidas-module~CATEGORIAS-buscador-buscador-module~CATEGORIAS-cafeypan-ca~57774f30"), __webpack_require__.e("CATEGORIAS-comida-comida-module")]).then(__webpack_require__.bind(null,
          /*! ./CATEGORIAS/comida/comida.module */
          "DKYB")).then(function (m) {
            return m.ComidaPageModule;
          });
        }
      }, {
        path: 'supermercado',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | CATEGORIAS-supermercado-supermercado-module */
          [__webpack_require__.e("default~CATEGORIAS-bebidas-bebidas-module~CATEGORIAS-buscador-buscador-module~CATEGORIAS-cafeypan-ca~57774f30"), __webpack_require__.e("CATEGORIAS-supermercado-supermercado-module")]).then(__webpack_require__.bind(null,
          /*! ./CATEGORIAS/supermercado/supermercado.module */
          "jG40")).then(function (m) {
            return m.SupermercadoPageModule;
          });
        }
      }, {
        path: 'buscador',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | CATEGORIAS-buscador-buscador-module */
          [__webpack_require__.e("default~CATEGORIAS-bebidas-bebidas-module~CATEGORIAS-buscador-buscador-module~CATEGORIAS-cafeypan-ca~57774f30"), __webpack_require__.e("CATEGORIAS-buscador-buscador-module")]).then(__webpack_require__.bind(null,
          /*! ./CATEGORIAS/buscador/buscador.module */
          "qpgZ")).then(function (m) {
            return m.BuscadorPageModule;
          });
        }
      }, {
        path: 'cafeypan',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | CATEGORIAS-cafeypan-cafeypan-module */
          [__webpack_require__.e("default~CATEGORIAS-bebidas-bebidas-module~CATEGORIAS-buscador-buscador-module~CATEGORIAS-cafeypan-ca~57774f30"), __webpack_require__.e("CATEGORIAS-cafeypan-cafeypan-module")]).then(__webpack_require__.bind(null,
          /*! ./CATEGORIAS/cafeypan/cafeypan.module */
          "knH/")).then(function (m) {
            return m.CafeypanPageModule;
          });
        }
      }, {
        path: 'salud',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | CATEGORIAS-salud-salud-module */
          [__webpack_require__.e("default~CATEGORIAS-bebidas-bebidas-module~CATEGORIAS-buscador-buscador-module~CATEGORIAS-cafeypan-ca~57774f30"), __webpack_require__.e("CATEGORIAS-salud-salud-module")]).then(__webpack_require__.bind(null,
          /*! ./CATEGORIAS/salud/salud.module */
          "nId1")).then(function (m) {
            return m.SaludPageModule;
          });
        }
      }, {
        path: 'hogaryferreteria',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | CATEGORIAS-hogaryferreteria-hogaryferreteria-module */
          [__webpack_require__.e("default~CATEGORIAS-bebidas-bebidas-module~CATEGORIAS-buscador-buscador-module~CATEGORIAS-cafeypan-ca~57774f30"), __webpack_require__.e("CATEGORIAS-hogaryferreteria-hogaryferreteria-module")]).then(__webpack_require__.bind(null,
          /*! ./CATEGORIAS/hogaryferreteria/hogaryferreteria.module */
          "APnY")).then(function (m) {
            return m.HogaryferreteriaPageModule;
          });
        }
      }, {
        path: 'conveniencia',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | CATEGORIAS-conveniencia-conveniencia-module */
          [__webpack_require__.e("default~CATEGORIAS-bebidas-bebidas-module~CATEGORIAS-buscador-buscador-module~CATEGORIAS-cafeypan-ca~57774f30"), __webpack_require__.e("CATEGORIAS-conveniencia-conveniencia-module")]).then(__webpack_require__.bind(null,
          /*! ./CATEGORIAS/conveniencia/conveniencia.module */
          "2kb4")).then(function (m) {
            return m.ConvenienciaPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "w3kL":
    /*!*******************************************************!*\
      !*** ./src/app/pages/variations/variations.module.ts ***!
      \*******************************************************/

    /*! exports provided: VariationsPageModule */

    /***/
    function w3kL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VariationsPageModule", function () {
        return VariationsPageModule;
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


      var _variations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./variations-routing.module */
      "g+95");
      /* harmony import */


      var _variations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./variations.page */
      "blxb"); //


      var VariationsPageModule = function VariationsPageModule() {
        _classCallCheck(this, VariationsPageModule);
      };

      VariationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _variations_routing_module__WEBPACK_IMPORTED_MODULE_5__["VariationsPageRoutingModule"]],
        declarations: [_variations_page__WEBPACK_IMPORTED_MODULE_6__["VariationsPage"]]
      })], VariationsPageModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".infoSection {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 50px;\n}\n.infoSection .userPhoto {\n  width: 80px;\n  margin: 20px 0px;\n}\n.infoSection .userName {\n  margin: 0px;\n  padding: 0px;\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n  margin-bottom: 20px;\n}\n.version {\n  margin: 0px;\n  padding: 0px;\n  font-size: 1rem;\n  font-weight: 500;\n  color: black;\n  margin-bottom: 25px;\n  text-align: center;\n  position: absolute;\n  bottom: 0px;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.md ion-item ion-icon {\n  color: black;\n}\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\nion-item {\n  border-bottom: 1px solid lightgray;\n  --padding-start: 30px !important;\n  --min-height: 60px !important;\n}\n.filterItems ion-item {\n  border-bottom: none !important;\n}\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n}\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n.imgs {\n  height: 20px;\n  width: 20px;\n  margin-right: 10px;\n}\n.menu_user_image {\n  height: 90px;\n  width: 90px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  margin: auto;\n}\n.username {\n  margin-top: 20px;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  font-size: 20px;\n}\n.email {\n  margin-top: 5px;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUxGO0FBTUU7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQU9FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQUxKO0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0FBTEY7QUFrQkE7RUFDRSxtQkFBQTtBQWZGO0FBa0JBOztFQUVFLGtCQUFBO0FBZkY7QUFzQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtBQXBCRjtBQXVCQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQXZCRjtBQTBCQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXZCRjtBQTBCQTtFQUNFLHNEQUFBO0FBdkJGO0FBMEJBO0VBQ0UsK0JBQUE7QUF2QkY7QUEwQkE7RUFHRSxZQUFBO0FBekJGO0FBZ0NBO0VBQ0Usc0JBQUE7QUE3QkY7QUFvQ0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBakNGO0FBbUNBO0VBQ0Usa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBaENGO0FBbUNFO0VBQ0UsOEJBQUE7QUFoQ0o7QUFtQ0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFoQ0Y7QUFtQ0E7RUFDRSwrQkFBQTtBQWhDRjtBQW1DQTtFQUNFLGVBQUE7QUFoQ0Y7QUFvQ0E7RUFDRSxrQkFBQTtBQWpDRjtBQW9DQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBakNGO0FBb0NBO0VBQ0Usa0JBQUE7QUFqQ0Y7QUFvQ0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQWxDRjtBQXFDQTtFQUNFLGlDQUFBO0FBbENGO0FBcUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWxDRjtBQW9DQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBakNGO0FBb0NBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFqQ0Y7QUFtQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBaENGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgIC8vXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC8vICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG4uaW5mb1NlY3Rpb24ge1xuICAvLyAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICAudXNlclBob3RvIHtcbiAgICAvLyBoZWlnaHQ6IDExMHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cbiAgLnVzZXJOYW1lIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbi52ZXJzaW9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6IDUwJTtcbn1cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLy8gLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC8vIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLy8gLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLy8gLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICAvLyBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICAvLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICAvLyBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICAvLyBwYWRkaW5nOiA0MHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuLmZpbHRlckl0ZW1zIHtcbiAgaW9uLWl0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5pbWdzIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1lbnVfdXNlcl9pbWFnZSB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi51c2VybmFtZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5lbWFpbCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR"); //


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map