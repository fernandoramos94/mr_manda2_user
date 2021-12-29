(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CATEGORIAS-buscador-buscador-module"],{

/***/ "79rd":
/*!******************************************************!*\
  !*** ./src/app/CATEGORIAS/buscador/buscador.page.ts ***!
  \******************************************************/
/*! exports provided: BuscadorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorPage", function() { return BuscadorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_buscador_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./buscador.page.html */ "ICZo");
/* harmony import */ var _buscador_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buscador.page.scss */ "MOEe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");



//








let BuscadorPage = class BuscadorPage {
    constructor(platform, router, api, util, modalController, chMod, iab, navCtrl, route) {
        this.platform = platform;
        this.router = router;
        this.api = api;
        this.util = util;
        this.modalController = modalController;
        this.chMod = chMod;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.route = route;
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
        this.chips = [
            this.util.translate('Calificación 4.0+'),
            this.util.translate('Tiempo de entrega'),
            this.util.translate('Costo'),
        ];
        this.haveLocation = false;
        if (this.platform.is('ios')) {
            this.plt = 'ios';
        }
        else {
            this.plt = 'android';
        }
        this.util.subscribeLocation().subscribe(data => {
            // console.log('changedd----->>>');
            this.dummyRest = [];
            this.allRest = [];
            this.banners = [];
            this.dummyBanners = Array(2);
            this.dummy = Array(5);
            this.getRestaurants();
        });
        this.getRestaurants();
    }
    ionViewWillEnter() {
        this.route.params.subscribe(params => {
            if (params.useFocusOnSearch !== undefined) {
                this.inputSearch.setFocus();
            }
        });
    }
    getRestaurants() {
        const param = {
            lat: localStorage.getItem('lat'),
            lng: localStorage.getItem('lng'),
            distance: 10,
            type: 1
        };
        this.api.post('stores/nearMe', param).then((data) => {
            this.dummyBanners = [];
            this.dummy = [];
            // console.log('=== DATA', data);
            if (data && data.status === 200 && data.data.length > 0) {
                this.allRest = [];
                this.dummyRest = [];
                data.data = data.data.filter(x => x.status === '1');
                data.data.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    element.rating = parseFloat(element.rating);
                    element.time = parseInt(element.time);
                    element.dish = parseInt(element.dish);
                    element['isOpen'] = this.isOpen(element.open_time, element.close_time);
                    if (element.cusine && element.cusine !== '') {
                        element.cusine = JSON.parse(element.cusine).join();
                    }
                    this.allRest.push(element);
                    this.dummyRest.push(element);
                }));
                const info = [...new Set(this.allRest.map(item => item.id))];
                // console.log(info);
                this.getBanners(info);
                // console.log(this.allRest);
                this.chMod.detectChanges();
            }
            else {
                this.allRest = [];
                this.dummy = [];
            }
        }, error => {
            // console.log(error);
            this.dummyRest = [];
            this.dummyBanners = [];
        }).catch(error => {
            // console.log(error);
            this.dummyRest = [];
            this.dummyBanners = [];
        });
    }
    getBanners(ids) {
        // console.log(ids);
        this.api.get('banners').then((data) => {
            // console.log('banners-->>', data);
            this.dummyBanners = [];
            this.banners = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                this.dummyBanners = [];
                this.banners = [];
                data.data.forEach(element => {
                    // console.log(element);
                    // console.log(element.type === '0' && ids.includes(element.value));
                    if (element.type === '0' && ids.includes(element.value)) {
                        this.banners.push(element);
                    }
                    else if (element.type === '1') {
                        this.banners.push(element);
                    }
                });
            }
        }).catch((error) => {
            // console.log('error=>', error);
        });
    }
    isOpen(open, close) {
        const format = 'HH:mm:ss';
        const currentTime = moment__WEBPACK_IMPORTED_MODULE_8__().format(format);
        const time = moment__WEBPACK_IMPORTED_MODULE_8__(currentTime, format);
        const beforeTime = moment__WEBPACK_IMPORTED_MODULE_8__(open, format);
        const afterTime = moment__WEBPACK_IMPORTED_MODULE_8__(close, format);
        if (time.isBetween(beforeTime, afterTime)) {
            return true;
        }
        return false;
    }
    addFilter(index) {
        // console.log(index);
        if (index === 0) {
            // console.log('rating');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'rating', 'desc');
        }
        else if (index === 1) {
            // console.log('fast');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'time', 'asc');
        }
        else if (index === 2) {
            // console.log('cost');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'dish', 'asc');
        }
        else if (index === 3) {
            // console.log('A-Z');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'name', 'asc');
        }
        else if (index === 4) {
            // console.log('Z-A');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'name', 'desc');
        }
    }
    ngOnInit() {
        // console.log('init');
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['choose-address']);
        });
    }
    openMenu(item) {
        // console.log(item);
        if (item.isOpen === false || item.isClosed === '0') {
            return false;
        }
        const navData = {
            queryParams: {
                id: item.uid
            }
        };
        this.router.navigate(['category'], navData);
    }
    openOffers(item) {
        if (item.type === '0') {
            const navData = {
                queryParams: {
                    id: item.value
                }
            };
            this.router.navigate(['category'], navData);
        }
        else {
            this.iab.create(item.value);
        }
    }
    onSearchChange(event) {
        // console.log(event.detail.value);
        this.allRest = this.dummyRest.filter((ele) => {
            return ele.name.toLowerCase().includes(event.detail.value.toLowerCase());
        });
    }
    chipChange(item) {
        this.allRest = this.dummyRest;
        // console.log(item);
        if (item === 'Fastest Delivery') {
            this.allRest.sort((a, b) => {
                a = new Date(a.time);
                b = new Date(b.time);
                return a > b ? -1 : a < b ? 1 : 0;
            });
        }
        if (item === 'Ratting 4.0+') {
            this.allRest = [];
            this.dummyRest.forEach(ele => {
                if (ele.ratting >= 4) {
                    this.allRest.push(ele);
                }
            });
        }
        if (item === 'Cost') {
            this.allRest.sort((a, b) => {
                a = a.time;
                b = b.time;
                return a > b ? -1 : a < b ? 1 : 0;
            });
        }
    }
    changeLocation() {
        this.router.navigate(['pick-location']);
    }
    regresar() {
        this.navCtrl.navigateRoot(['tabs']);
    }
};
BuscadorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
BuscadorPage.propDecorators = {
    inputSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inputSearch', { static: false },] }]
};
BuscadorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buscador',
        template: _raw_loader_buscador_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buscador_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], BuscadorPage);



/***/ }),

/***/ "ICZo":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/CATEGORIAS/buscador/buscador.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n\n <ion-header mode=\"ios\">\n\n  <ion-toolbar>\n    <div class=\"deliveryAddress\">\n      <ion-icon  class=\"pin\"   name=\"arrow-back-outline\" (click)=\"regresar()\"></ion-icon>\n      <p class=\"address\" >{{util.cityAddress}}</p>\n\n      <div class=\"userPhoto\" [style.backgroundImage]=\"'url('+ profile +')'\" *ngIf=\"profile\"></div>\n      <div class=\"userPhoto\" [style.backgroundImage]=\"'url(assets/user.png)'\" *ngIf=\"!profile\"></div>\n    </div>\n  </ion-toolbar>\n\n  <div class=\"div_searchbar\">\n    <ion-searchbar animated=\"true\" mode=\"ios\" [placeholder]=\"('Buscar comercios')\"\n      (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" class=\"search_bar\"></ion-searchbar>\n  </div>\n  <div class=\"chips_div animated fadeInDown\" *ngIf=\"allRest?.length\">\n    <ion-label class=\"chip\" *ngFor=\"let item of chips;let i = index\" (click)=\"addFilter(i)\">{{item}}</ion-label>\n  </div>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n  <div class=\"noData\" *ngIf=\"!dummy?.length && !allRest?.length\" [style.backgroundImage]=\"'url(assets/nothing.jpg)'\">\n  </div>\n  <p style=\"font-weight: bold;text-align: center;\" *ngIf=\"!dummy?.length && !allRest?.length\">\n    No se encontraron comercios\n  </p>\n  <div  class=\"main_content_div1\">\n\n    <div *ngFor=\"let item of dummy\">\n      <ion-list>\n        <ion-item>\n          <ion-thumbnail slot=\"start\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"card_div\">\n      <ion-row\n        [className]=\"item.isOpen === false || item.isClosed === '0' ? 'cardClosed ion-no-padding':'card ion-no-padding'\"\n        *ngFor=\"let item of allRest\">\n        <ion-col size=\"4\">\n          <div class=\"image_div\" (click)=\"openMenu(item)\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/placeholder.jpg)'}\">\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"desc_div\" (click)=\"openMenu(item)\">\n            <ion-label class=\"heading_lbl\">\n              {{ (item.name.length>20)? (item.name | slice:0:20)+'..':(item.name) }}\n            </ion-label>\n          \n            <ion-label class=\"small_lbl\">{{ (item.cusine.length>30)? (item.cusine | slice:0:30)+'..':(item.cusine) }}\n            </ion-label>\n            <ion-label class=\"small_lbl\">{{item.dish}}$ Mínimo | {{item.time}}\n              {{util.translate('min')}} </ion-label>\n          </div>\n        </ion-col>\n        \n        <ion-col size=\"2\">\n          <div class=\"ratting\">\n            <ion-label class=\"rateNumber\">{{item.rating}}</ion-label>\n          </div>\n          <p class=\"closed\" *ngIf=\"item && item.isOpen === false || item.isClosed === '0'\">Cerrado\n          </p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div  class=\"main_content_div2\">\n    <ion-card *ngFor=\"let item of dummy\">\n      <ion-skeleton-text animated\n        style=\"width: 100%;height: 150px;border-radius: 5px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;\">\n      </ion-skeleton-text>\n      <ion-card-content>\n        <ion-badge class=\"number_badge\" color=\"light\" mode=\"ios\">\n          <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n        </ion-badge>\n        <ion-label class=\"bold_lbl\">\n          <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n        </ion-label>\n        <ion-label class=\"small_lbl\">\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </ion-label>\n        <div class=\"flex_div\">\n          <ion-label class=\"distance_lbl\">\n            <ion-skeleton-text animated style=\"width: 25px\"></ion-skeleton-text>\n          </ion-label>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  \n\n\n\n\n\n  \n</ion-content>");

/***/ }),

/***/ "MOEe":
/*!********************************************************!*\
  !*** ./src/app/CATEGORIAS/buscador/buscador.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.animated {\n  background-repeat: no-repeat;\n  background-position: left top;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.div_searchbar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 8px;\n}\n\n.div_searchbar .search_bar {\n  padding: 0px;\n  width: 100%;\n}\n\n.chips_div {\n  display: flex;\n  flex-direction: row;\n  overflow: scroll;\n  scrollbar-width: none;\n  /* Firefox */\n  -ms-overflow-style: none;\n  /* Internet Explorer 10+ */\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.chips_div ::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n}\n\n.chips_div ::-webkit-scrollbar-thumb {\n  background: transparent;\n}\n\n.chips_div .chip {\n  border-radius: 3px;\n  padding: 5px 20px;\n  margin-right: 10px;\n  white-space: nowrap;\n  color: lightgray;\n  font-size: 12px;\n  font-weight: bold;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.chips_div .selected {\n  border-radius: 3px;\n  padding: 5px 20px;\n  margin-right: 10px;\n  white-space: nowrap;\n  background: var(--ion-color-primary);\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n\n.main_content_div1 {\n  padding: 16px;\n}\n\n.main_content_div1 .back_image {\n  height: 150px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div1 .heading {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.main_content_div1 .heading .heading_lbl {\n  font-size: 20px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-primary);\n}\n\n.main_content_div1 .heading .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div1 .slider_div .card {\n  margin-top: 15px;\n}\n\n.main_content_div1 .slider_div .card .back_image {\n  height: 200px;\n  width: 250px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  position: relative;\n}\n\n.main_content_div1 .slider_div .card .back_image .time_lbl {\n  padding: 10px;\n  position: absolute;\n  background: white;\n  bottom: 15px;\n  right: 15px;\n  border-radius: 25px;\n  font-size: 12px;\n}\n\n.main_content_div1 .slider_div .card .heading_lbl {\n  font-size: 20px;\n  display: block;\n  margin-top: 10px;\n  text-align: left;\n}\n\n.main_content_div1 .slider_div .card .price_rating {\n  display: flex;\n  height: 25px;\n  align-items: flex-start;\n}\n\n.main_content_div1 .slider_div .card .price_rating .rating {\n  color: var(--ion-color-primary);\n  font-size: 15px;\n  margin-left: 10px;\n}\n\n.main_content_div1 .slider_div .card .price_rating .red_lbl {\n  color: var(--ion-color-primary);\n  font-size: 12px;\n}\n\n.main_content_div1 .slider_div .card .price_rating .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div1 .card_div .heading {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.main_content_div1 .card_div .heading .heading_lbl {\n  font-size: 20px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-primary);\n}\n\n.main_content_div1 .card_div .heading .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div1 .card_div .card {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n}\n\n.main_content_div1 .card_div .card .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.main_content_div1 .card_div .card .desc_div .heading_lbl {\n  font-size: 1rem;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div1 .card_div .card .desc_div .small_lbl {\n  font-size: 0.8rem;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div1 .card_div .card .ratting {\n  background: #00b3f0;\n  padding: 2px 5px;\n  text-align: center;\n}\n\n.main_content_div1 .card_div .card .ratting .rateNumber {\n  color: white;\n  font-size: 0.8rem;\n}\n\n.main_content_div1 .card_div .cardClosed {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  background: #ebebeb;\n  margin: 10px 0px;\n  border-radius: 15px;\n}\n\n.main_content_div1 .card_div .cardClosed .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.main_content_div1 .card_div .cardClosed .desc_div .heading_lbl {\n  font-size: 1rem;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div1 .card_div .cardClosed .desc_div .small_lbl {\n  font-size: 0.8rem;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div1 .card_div .cardClosed .ratting {\n  background: #00b3f0;\n  padding: 2px 5px;\n  text-align: center;\n}\n\n.main_content_div1 .card_div .cardClosed .ratting .rateNumber {\n  color: white;\n  font-size: 0.8rem;\n}\n\n.main_content_div1 .card_div .cardClosed .closed {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  border-radius: 5px;\n  font-size: 1rem;\n  padding: 5px;\n}\n\n.main_content_div2 .back_image {\n  height: 150px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div2 ion-card {\n  margin: 0;\n  padding: 10px;\n  --border-radius: 0px !important;\n}\n\n.main_content_div2 ion-card .image_back {\n  height: 150px;\n  width: 100%;\n  min-width: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n\n.main_content_div2 ion-card ion-card-content {\n  padding: 10px;\n  position: relative;\n}\n\n.main_content_div2 ion-card ion-card-content .bold_lbl {\n  font-weight: 600;\n  color: black;\n  margin-bottom: 5px;\n  display: block;\n}\n\n.main_content_div2 ion-card ion-card-content .small_lbl {\n  font-size: 12px;\n  color: black;\n  margin-bottom: 5px;\n  display: block;\n}\n\n.main_content_div2 ion-card ion-card-content .distance_lbl {\n  font-size: 12px;\n  color: gray;\n  display: flex;\n  flex-direction: row;\n  display: block;\n}\n\n.main_content_div2 ion-card ion-card-content .distance_lbl2 {\n  font-size: 12px;\n  color: gray;\n  display: flex;\n  flex-direction: row;\n  font-weight: bold;\n  display: block;\n}\n\n.main_content_div2 ion-card ion-card-content .number_badge {\n  position: absolute;\n  right: 10px;\n  top: 1px;\n  width: 40px;\n  padding: 5px;\n}\n\n.main_content_div2 ion-card ion-card-content .storeTime {\n  position: absolute;\n  right: 10px;\n  bottom: 15px;\n  padding: 5px;\n}\n\n.main_content_div2 ion-card ion-card-content .flex_div {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.main_content_div3 .back_image {\n  height: 150px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div3 .main_div {\n  margin: 10px;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.main_content_div3 .main_div .image_back {\n  height: 100px;\n  width: 100%;\n  min-width: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n\n.main_content_div3 .main_div .heading_lbl {\n  font-size: 12px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-dark);\n  font-weight: bold;\n}\n\n.main_content_div3 .main_div .small_lbl {\n  font-size: 10px;\n  color: gray;\n}\n\n.main_content_div3 .main_div .clbl {\n  position: absolute;\n  bottom: 0px;\n  right: 5px;\n  font-size: 12px;\n  font-weight: bold;\n  color: var(--ion-color-danger);\n}\n\n.main_content_div3 .main_div .more_data {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.main_content_div3 .main_div .more_data .information {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.main_content_div3 .main_div .more_data .information ion-icon {\n  font-size: 15px;\n}\n\n.main_content_div3 .main_div .more_data .information .lbl {\n  font-size: 10px;\n}\n\n.deliveryAddress {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px 10px 0px 10px;\n}\n\n.deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.deliveryAddress .userPhoto {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1c2NhZG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRztFQUNDLG1CQUFBO0FBQUo7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLG9DQUFBO0VBQ047RUFDRTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFQUFOO0VBRUU7SUFDSSxVQUFBO0lBQ0Esd0JBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0ksa0NBQUE7RUFDQSwwQkFBQTtBQURKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQURSOztBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUF1QixZQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLDBCQUFBO0VBQzFCLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBQ0k7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7QUFDUjs7QUFDSTtFQUNJLHVCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUNJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FB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ZUFBQTtFQUNBLFdBQUE7QUE1Qlo7O0FBOEJRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBNUJaOztBQThCUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUE1Qlo7O0FBNkJZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTNCaEI7O0FBNEJnQjtFQUNJLGVBQUE7QUExQnBCOztBQTRCZ0I7RUFDSSxlQUFBO0FBMUJwQjs7QUFpQ0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQTlCSjs7QUErQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQTdCUjs7QUErQkk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQTdCUjs7QUErQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBN0JSIiwiZmlsZSI6ImJ1c2NhZG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgIC8vXG4gICBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuLmFuaW1hdGVkIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cblxuLmZhZGVJbkRvd24ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG59XG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uZGl2X3NlYXJjaGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG5cbiAgICAuc2VhcmNoX2JhciB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uY2hpcHNfZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuY2hpcCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbn1cblxuLm5vRGF0YSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLm1haW5fY29udGVudF9kaXYxIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIC5iYWNrX2ltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuXG4gICAgLmhlYWRpbmcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgIC5oZWFkaW5nX2xibCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICAgIC5zbWFsbF9sYmwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zbGlkZXJfZGl2IHtcbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIC5iYWNrX2ltYWdlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgLnRpbWVfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRpbmdfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgLy9mb250LWZhbWlseTogb3Blbi1ib2xkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZV9yYXRpbmcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIC5yYXRpbmcge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVkX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgLy9mb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmRfZGl2IHtcbiAgICAgICAgLmhlYWRpbmcge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgICAgICAuaGVhZGluZ19sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsX2xibCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgLy9mb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgLmltYWdlX2RpdiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY19kaXYge1xuICAgICAgICAgICAgICAgIC5oZWFkaW5nX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zbWFsbF9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdHRpbmcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGIzZjA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLnJhdGVOdW1iZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY2FyZENsb3NlZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgLmltYWdlX2RpdiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY19kaXYge1xuICAgICAgICAgICAgICAgIC5oZWFkaW5nX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zbWFsbF9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdHRpbmcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGIzZjA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLnJhdGVOdW1iZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jbG9zZWQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdjIge1xuICAgIC5iYWNrX2ltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAuaW1hZ2VfYmFjayB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgLmJvbGRfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXN0YW5jZV9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGlzdGFuY2VfbGJsMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5udW1iZXJfYmFkZ2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RvcmVUaW1lIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZsZXhfZGl2IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdjMge1xuICAgIC5iYWNrX2ltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5tYWluX2RpdiB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC5pbWFnZV9iYWNrIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkaW5nX2xibCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnNtYWxsX2xibCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgfVxuICAgICAgICAuY2xibCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgfVxuICAgICAgICAubW9yZV9kYXRhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIC5pbmZvcm1hdGlvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGVsaXZlcnlBZGRyZXNze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMTBweDtcbiAgICAucGlue1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgIH1cbiAgICAuYWRkcmVzc3tcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgLnVzZXJQaG90b3tcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "VGPn":
/*!****************************************************************!*\
  !*** ./src/app/CATEGORIAS/buscador/buscador-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: BuscadorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorPageRoutingModule", function() { return BuscadorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _buscador_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buscador.page */ "79rd");




const routes = [
    {
        path: '',
        component: _buscador_page__WEBPACK_IMPORTED_MODULE_3__["BuscadorPage"]
    }
];
let BuscadorPageRoutingModule = class BuscadorPageRoutingModule {
};
BuscadorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BuscadorPageRoutingModule);



/***/ }),

/***/ "qpgZ":
/*!********************************************************!*\
  !*** ./src/app/CATEGORIAS/buscador/buscador.module.ts ***!
  \********************************************************/
/*! exports provided: BuscadorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorPageModule", function() { return BuscadorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _buscador_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buscador-routing.module */ "VGPn");
/* harmony import */ var _buscador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buscador.page */ "79rd");







let BuscadorPageModule = class BuscadorPageModule {
};
BuscadorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _buscador_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuscadorPageRoutingModule"]
        ],
        declarations: [_buscador_page__WEBPACK_IMPORTED_MODULE_6__["BuscadorPage"]]
    })
], BuscadorPageModule);



/***/ })

}]);
//# sourceMappingURL=CATEGORIAS-buscador-buscador-module-es2015.js.map