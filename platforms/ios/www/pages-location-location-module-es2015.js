(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-location-location-module"],{

/***/ "+T66":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\">\n\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"contents\">\n    <p class=\"header\">Para darte el mejor servicio necesitamos acceder a tu</p>\n    <p class=\"subHeader\">Ubicación</p>\n    <img src=\"assets/map-location.png\" alt=\"\" class=\"imgs\">\n    <ion-button (click)=\"getLocation()\" expand=\"block\" shape=\"round\">\n      Usar ubicación actual\n    </ion-button>\n    <ion-button (click)=\"customLocation()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Elegir ubicación\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "5mMC":
/*!***************************************************!*\
  !*** ./src/app/pages/location/location.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contents {\n  position: absolute;\n  transform: translate(-50%, 50%);\n  left: 50%;\n  top: 20%;\n  text-align: center;\n}\n.contents .imgs {\n  width: 100px;\n  height: 100px;\n  margin: 10px 0px;\n}\n.contents .header {\n  font-size: 15px;\n  margin: 5px;\n}\n.contents .subHeader {\n  font-size: 25px;\n  font-weight: bold;\n  margin: 5px;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FBQ1IiLCJmaWxlIjoibG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgLy9cbi5jb250ZW50cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAuaW1ncyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICB9XG4gICAgLmhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxuICAgIC5zdWJIZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "A/7y":
/*!***********************************************************!*\
  !*** ./src/app/pages/location/location-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function() { return LocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.page */ "N4Pa");

//



const routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]
    }
];
let LocationPageRoutingModule = class LocationPageRoutingModule {
};
LocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocationPageRoutingModule);



/***/ }),

/***/ "N4Pa":
/*!*************************************************!*\
  !*** ./src/app/pages/location/location.page.ts ***!
  \*************************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./location.page.html */ "+T66");
/* harmony import */ var _location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.page.scss */ "5mMC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "mtRb");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/location.service */ "yHma");



//








let LocationPage = class LocationPage {
    constructor(platform, androidPermissions, geolocation, router, util, alertController, navCtrl, menuController, diagnostic, locationService) {
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
    ngOnInit() {
    }
    getLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.locationService.getLocationCoordinates();
            if (data) {
                this.getAddress(data.lat, data.lng);
            }
            //this.checkPermissions();
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
        });
    }
    checkPermissions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const hasPermission = yield this.locationService.checkGPSPermission();
            if (hasPermission) {
                const canUseGPS = yield this.locationService.askToTurnOnGPS();
                this.postGPSPermission(canUseGPS);
            }
            else {
                const permission = yield this.locationService.requestGPSPermission();
                if (permission === 'CAN_REQUEST' || permission === 'GOT_PERMISSION') {
                    const canUseGPS = yield this.locationService.askToTurnOnGPS();
                    this.postGPSPermission(canUseGPS);
                }
                else {
                    this.util.errorToast('User denied location permission');
                }
            }
        });
    }
    postGPSPermission(canUseGPS) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (canUseGPS) {
                //this.watchPosition();
            }
            else {
                //
            }
        });
    }
    askPermission() {
        this.getLocation();
    }
    grantRequest() {
        this.diagnostic.isLocationEnabled().then((data) => {
            if (data) {
                this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
                    if (resp) {
                        this.lat = resp.coords.latitude;
                        this.lng = resp.coords.longitude;
                        this.getAddress(resp.coords.latitude, resp.coords.longitude);
                    }
                }).catch(error => {
                    this.diagnostic.switchToSettings();
                });
            }
            else {
                this.diagnostic.switchToSettings();
                this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
                    if (resp) {
                        this.lat = resp.coords.latitude;
                        this.lng = resp.coords.longitude;
                        this.getAddress(resp.coords.latitude, resp.coords.longitude);
                    }
                }).catch(error => {
                    this.diagnostic.switchToSettings();
                });
            }
        }, error => {
            if (this.platform.is('ios')) {
                this.iOSAlert();
            }
            else {
                this.presentAlertConfirm();
            }
        }).catch(error => {
            if (this.platform.is('ios')) {
                this.iOSAlert();
            }
            else {
                this.presentAlertConfirm();
            }
        });
    }
    getAddress(lat, lng) {
        const geocoder = new google.maps.Geocoder();
        const location = new google.maps.LatLng(lat, lng);
        geocoder.geocode({ 'location': location }, (results, status) => {
            if (results && results.length) {
                this.lat = lat;
                this.lng = lng;
                localStorage.setItem('location', 'true');
                localStorage.setItem('lat', this.lat);
                localStorage.setItem('address', results[0].formatted_address);
                localStorage.setItem('lng', this.lng);
                this.util.cityAddress = results[0].formatted_address;
                this.util.publishLocation();
                this.navCtrl.navigateRoot(['']);
            }
            else {
                this.util.errorToast('Something went wrong please try again later');
            }
        });
    }
    iOSAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Por favor activa tu servicio de ubicación para brindarte un mejor servicio',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            // console.log('Confirm Okay');
                            this.diagnostic.switchToSettings();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Por favor activa tu servicio de ubicación para brindarte un mejor servicio',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            // console.log('Confirm Okay');
                            this.askPermission();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    customLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['pick-location']);
        });
    }
    ionViewWillEnter() {
        // console.log('disbaled');
        this.menuController.enable(false);
    }
    ionViewWillLeave() {
        // console.log('enabled');
        this.menuController.enable(true);
    }
};
LocationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_8__["Diagnostic"] },
    { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"] }
];
LocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-location',
        template: _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"],
        _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_8__["Diagnostic"],
        src_app_services_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"]])
], LocationPage);



/***/ }),

/***/ "lPJH":
/*!***************************************************!*\
  !*** ./src/app/pages/location/location.module.ts ***!
  \***************************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-routing.module */ "A/7y");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.page */ "N4Pa");

//






let LocationPageModule = class LocationPageModule {
};
LocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"]
        ],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
    })
], LocationPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-location-location-module-es2015.js.map