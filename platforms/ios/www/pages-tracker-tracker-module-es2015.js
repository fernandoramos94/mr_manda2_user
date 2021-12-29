(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tracker-tracker-module"],{

/***/ "KAE8":
/*!*************************************************!*\
  !*** ./src/app/pages/tracker/tracker.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .upper_div {\n  height: 60vh;\n}\n.main_content_div .upper_div #map {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .lower_div {\n  height: 40vh;\n  padding: 20px;\n}\n.main_content_div .lower_div ion-label {\n  display: block;\n}\n.main_content_div .lower_div .head_lbl {\n  font-weight: 600;\n  font-size: 20px;\n  margin-top: 10px;\n}\n.main_content_div .lower_div .driver_detail_div {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .lower_div .driver_detail_div .back_image {\n  height: 50px !important;\n  width: 50px !important;\n  border-radius: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-width: 50px;\n}\n.main_content_div .lower_div .driver_detail_div .boy_name {\n  font-weight: 600;\n}\n.main_content_div .lower_div .driver_detail_div .address {\n  color: gray;\n  width: 80%;\n}\n.main_content_div .lower_div .driver_detail_div ion-button {\n  position: absolute;\n  right: -3px;\n  top: -5px;\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .lower_div .order_detail {\n  font-weight: bold;\n  margin-top: 20px;\n}\n.main_content_div .lower_div .order_status {\n  background: var(--ion-color-primary);\n  position: absolute;\n  right: 20px;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 3px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyYWNrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUFKO0FBQ0k7RUFDSSxZQUFBO0FBQ1I7QUFBUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRVo7QUFDSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ1I7QUFBUTtFQUNJLGNBQUE7QUFFWjtBQUFRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFWjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ1o7QUFBWTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUFFaEI7QUFBWTtFQUNJLGdCQUFBO0FBRWhCO0FBQVk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQUVoQjtBQUFZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFFaEI7QUFFUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBWjtBQUVRO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQVoiLCJmaWxlIjoidHJhY2tlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAvL1xuLm1haW5fY29udGVudF9kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAudXBwZXJfZGl2IHtcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAjbWFwIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sb3dlcl9kaXYge1xuICAgICAgICBoZWlnaHQ6IDQwdmg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuaGVhZF9sYmwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZHJpdmVyX2RldGFpbF9kaXYge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC5iYWNrX2ltYWdlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm95X25hbWUge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWRkcmVzcyB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogLTNweDtcbiAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vcmRlcl9kZXRhaWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5vcmRlcl9zdGF0dXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "OtiO":
/*!***********************************************!*\
  !*** ./src/app/pages/tracker/tracker.page.ts ***!
  \***********************************************/
/*! exports provided: TrackerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerPage", function() { return TrackerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tracker_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tracker.page.html */ "dfCF");
/* harmony import */ var _tracker_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracker.page.scss */ "KAE8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



//





let TrackerPage = class TrackerPage {
    constructor(route, api, util, navCtrl) {
        this.route = route;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.id = '';
        this.dName = '';
        this.restAddress = '';
        this.dCover = '';
        this.phone = '';
        this.status = '';
        this.totalOrders = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            // console.log('data=>', data);
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.getOrder();
            }
        });
    }
    callDriver() {
        window.open('https://api.whatsapp.com/send?phone=91' + this.phone);
    }
    getOrder() {
        const param = {
            id: this.id
        };
        this.api.post('orders/getById', param).then((datas) => {
            // console.log(datas);
            if (datas && datas.status === 200 && datas.data.length) {
                const data = datas.data[0];
                this.totalOrders = JSON.parse(data.orders);
                this.grandTotal = data.grand_total;
                this.status = data.status;
                this.restAddress = data.str_address;
                this.payMethod = data.pay_method === 'cod' ? 'COD' : 'PAID';
                if (data && data.address) {
                    const add = JSON.parse(data.address);
                    // console.log(add);
                    this.myLat = add.lat;
                    this.myLng = add.lng;
                }
                if (data && data.did && data.did !== '0') {
                    this.dId = data.did;
                    this.getDriverInfo();
                }
            }
            else {
                this.util.back();
            }
        }, error => {
            // console.log('error in orders', error);
            this.util.errorToast('Something went wrong');
        }).catch(error => {
            // console.log('error in order', error);
            this.util.errorToast('Something went wrong');
        });
    }
    getDriverInfo() {
        const param = {
            id: this.dId
        };
        this.api.post('drivers/getById', param).then((data) => {
            // console.log('driver info--->>', data);
            if (data && data.status === 200 && data.data.length) {
                const info = data.data[0];
                // console.log('---->>>>>', info);
                this.dName = info.first_name + ' ' + info.last_name;
                this.dCover = info.cover;
                this.phone = info.mobile;
                this.driverLat = info.lat;
                this.driverLng = info.lng;
                this.loadMap(parseFloat(this.myLat), parseFloat(this.myLng), parseFloat(this.driverLat), parseFloat(this.driverLng));
            }
        }, error => {
            // console.log(error);
            this.util.errorToast('Something went wrong');
        }).catch((error) => {
            // console.log(error);
            this.util.errorToast('Something went wrong');
        });
    }
    changeMarkerPosition(marker, map) {
        const param = {
            id: this.dId
        };
        this.api.post('drivers/getById', param).then((data) => {
            // console.log('driver info--->>', data);
            if (data && data.status === 200 && data.data.length) {
                const info = data.data[0];
                // console.log('---->>>>>', info);
                this.dName = info.first_name + ' ' + info.last_name;
                this.dCover = info.cover;
                this.phone = info.mobile;
                this.driverLat = info.lat;
                this.driverLng = info.lng;
                const latlng = new google.maps.LatLng(parseFloat(this.driverLat), parseFloat(this.driverLng));
                map.setCenter(latlng);
                marker.setPosition(latlng);
            }
        }, error => {
            // console.log(error);
            this.util.errorToast('Something went wrong');
        }).catch((error) => {
            // console.log(error);
            this.util.errorToast('Something went wrong');
        });
    }
    loadMap(latOri, lngOri, latDest, lngDest) {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay = new google.maps.DirectionsRenderer();
        var bounds = new google.maps.LatLngBounds;
        var origin1 = { lat: parseFloat(latOri), lng: parseFloat(lngOri) };
        var destinationA = { lat: latDest, lng: lngDest };
        var destinationIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_pin_letter&chld=D|FF0000|000000';
        var originIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_pin_letter&chld=O|FFFF00|000000';
        var map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: latOri, lng: lngOri },
            disableDefaultUI: true,
            zoom: 100
        });
        const custPos = new google.maps.LatLng(latOri, lngOri);
        const restPos = new google.maps.LatLng(latDest, lngDest);
        const icon = {
            url: 'assets/pin.png',
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        var marker = new google.maps.Marker({
            map: map,
            position: custPos,
            animation: google.maps.Animation.DROP,
            icon: icon,
        });
        marker.setMap(map);
        /// markerCust.setMap(map);
        // directionsDisplay.setMap(map);
        // directionsDisplay.setOptions({ suppressMarkers: true });
        directionsDisplay.setOptions({
            polylineOptions: {
                strokeWeight: 4,
                strokeOpacity: 1,
                strokeColor: 'red'
            },
            suppressMarkers: true
        });
        var geocoder = new google.maps.Geocoder;
        var service = new google.maps.DistanceMatrixService;
        service.getDistanceMatrix({
            origins: [origin1],
            destinations: [destinationA],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        }, function (response, status) {
            if (status !== 'OK') {
                alert('Error was: ' + status);
            }
            else {
                var originList = response.originAddresses;
                var destinationList = response.destinationAddresses;
                var outputDiv = document.getElementById('output');
                // outputDiv.innerHTML = '';
                // deleteMarkers(markersArray);
                var showGeocodedAddressOnMap = function (asDestination) {
                    var icon = asDestination ? destinationIcon : originIcon;
                    return function (results, status) {
                        if (status === 'OK') {
                            map.fitBounds(bounds.extend(results[0].geometry.location));
                            // markersArray.push(new google.maps.Marker({
                            //   map: map,
                            //   position: results[0].geometry.location,
                            //   icon: icon
                            // }));
                        }
                        else {
                            alert('Geocode was not successful due to: ' + status);
                        }
                    };
                };
                directionsService.route({
                    origin: origin1,
                    destination: destinationA,
                    travelMode: 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        directionsDisplay.setDirections(response);
                    }
                    else {
                        window.alert('Directions request failed due to ' + status);
                    }
                });
                for (let i = 0; i < originList.length; i++) {
                    let results = response.rows[i].elements;
                    geocoder.geocode({ 'address': originList[i] }, showGeocodedAddressOnMap(false));
                    for (let j = 0; j < results.length; j++) {
                        geocoder.geocode({ 'address': destinationList[j] }, showGeocodedAddressOnMap(true));
                    }
                }
            }
        });
        this.interval = setInterval(() => {
            this.changeMarkerPosition(marker, map);
        }, 1000);
    }
    ionViewDidLeave() {
        // console.log('leaae');
        clearInterval(this.interval);
    }
};
TrackerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }
];
TrackerPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map', { static: true },] }]
};
TrackerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tracker',
        template: _raw_loader_tracker_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tracker_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])
], TrackerPage);



/***/ }),

/***/ "akYc":
/*!*************************************************!*\
  !*** ./src/app/pages/tracker/tracker.module.ts ***!
  \*************************************************/
/*! exports provided: TrackerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerPageModule", function() { return TrackerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tracker_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tracker-routing.module */ "yKY6");
/* harmony import */ var _tracker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tracker.page */ "OtiO");

//






let TrackerPageModule = class TrackerPageModule {
};
TrackerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tracker_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrackerPageRoutingModule"],
        ],
        declarations: [_tracker_page__WEBPACK_IMPORTED_MODULE_6__["TrackerPage"]]
    })
], TrackerPageModule);



/***/ }),

/***/ "dfCF":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracker/tracker.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Rastrear</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"upper_div\">\n      <div #map id=\"map\" class=\"map\"></div>\n    </div>\n    <div class=\"lower_div\">\n      <ion-label class=\"head_lbl\">Orden en camino</ion-label>\n\n      <div class=\"driver_detail_div\">\n        <div class=\"back_image\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+dCover+'),url(assets/placeholder.jpg)'}\"></div>\n        <div style=\"padding-left: 20px;\">\n          <ion-label class=\"boy_name\">{{dName}}</ion-label>\n          <ion-label class=\"address\">{{restAddress}}</ion-label>\n          <ion-button (click)=\"callDriver()\" size=\"small\" fill=\"outline\">\n            Llamar\n          </ion-button>\n        </div>\n      </div>\n\n      <ion-label class=\"order_detail\">{{totalOrders.length}} Productos\n        <span style=\"color: var(--ion-color-primary);position: absolute;right: 20px;\" *ngIf=\"util.cside==='left'\">\n          {{util.currecny}} {{grandTotal}}</span>\n        <span style=\"color: var(--ion-color-primary);position: absolute;right: 20px;\"\n          *ngIf=\"util.cside==='right'\">{{grandTotal}} {{util.currecny}}</span>\n      </ion-label>\n      <ion-label class=\"order_detail\">Estado<span class=\"order_status\">{{status}}</span>\n      </ion-label>\n\n     \n\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "yKY6":
/*!*********************************************************!*\
  !*** ./src/app/pages/tracker/tracker-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TrackerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerPageRoutingModule", function() { return TrackerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tracker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracker.page */ "OtiO");

//



const routes = [
    {
        path: '',
        component: _tracker_page__WEBPACK_IMPORTED_MODULE_3__["TrackerPage"]
    }
];
let TrackerPageRoutingModule = class TrackerPageRoutingModule {
};
TrackerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrackerPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-tracker-tracker-module-es2015.js.map