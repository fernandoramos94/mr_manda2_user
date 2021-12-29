(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chats-chats-module"],{

/***/ "EJ+t":
/*!*****************************************************!*\
  !*** ./src/app/pages/chats/chats-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChatsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageRoutingModule", function() { return ChatsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats.page */ "ZJfK");

//



const routes = [
    {
        path: '',
        component: _chats_page__WEBPACK_IMPORTED_MODULE_3__["ChatsPage"]
    }
];
let ChatsPageRoutingModule = class ChatsPageRoutingModule {
};
ChatsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatsPageRoutingModule);



/***/ }),

/***/ "Tuwx":
/*!*********************************************!*\
  !*** ./src/app/pages/chats/chats.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "UTXh":
/*!*********************************************!*\
  !*** ./src/app/pages/chats/chats.module.ts ***!
  \*********************************************/
/*! exports provided: ChatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chats_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chats-routing.module */ "EJ+t");
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chats.page */ "ZJfK");

//






let ChatsPageModule = class ChatsPageModule {
};
ChatsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chats_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatsPageRoutingModule"]
        ],
        declarations: [_chats_page__WEBPACK_IMPORTED_MODULE_6__["ChatsPage"]]
    })
], ChatsPageModule);



/***/ }),

/***/ "ZJfK":
/*!*******************************************!*\
  !*** ./src/app/pages/chats/chats.page.ts ***!
  \*******************************************/
/*! exports provided: ChatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPage", function() { return ChatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chats_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chats.page.html */ "is+8");
/* harmony import */ var _chats_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chats.page.scss */ "Tuwx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");



//





let ChatsPage = class ChatsPage {
    constructor(api, util, router, navCtrl) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.navCtrl = navCtrl;
        this.dummy = [];
        this.users = [];
        this.getChats();
    }
    getChats() {
        const param = {
            id: localStorage.getItem('uid')
        };
        this.dummy = Array(10);
        this.api.post('chats/getByGroup', param).then((data) => {
            // console.log(data);
            if (data && data.status === 200) {
                const info = [];
                data.data.forEach(element => {
                    info.push(element.from_id);
                    info.push(element.room_id);
                });
                let uniq = [...new Set(info)];
                uniq = uniq.filter(x => x !== localStorage.getItem('uid'));
                // console.log('uniq->>', uniq);
                const uid = {
                    id: uniq.join()
                };
                this.api.post('stores/getChatsNames', uid).then((uids) => {
                    this.dummy = [];
                    // console.log(uids);
                    if (uids && uids.status === 200) {
                        this.users = uids.data;
                    }
                }, error => {
                    // console.log(error);
                    this.users = [];
                    this.dummy = [];
                    this.util.errorToast('Algo ha ido mal');
                });
            }
            else {
                this.dummy = [];
            }
        }, error => {
            // console.log(error);
            this.util.errorToast('Algo ha ido mal');
        });
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.back();
    }
    onAdmin() {
        const param = {
            queryParams: {
                id: 0,
                name: 'Support',
                uid: localStorage.getItem('uid')
            }
        };
        this.router.navigate(['inbox'], param);
    }
    onChat(item) {
        // console.log(localStorage.getItem('uid'));
        const param = {
            queryParams: {
                id: item.id,
                name: item.name,
                uid: localStorage.getItem('uid')
            }
        };
        this.router.navigate(['inbox'], param);
    }
};
ChatsPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
ChatsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chats',
        template: _raw_loader_chats_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chats_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
], ChatsPage);



/***/ }),

/***/ "is+8":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chats/chats.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.translate('Chats')}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdmin()\">\n        <ion-icon slot=\"start\" name=\"happy\"></ion-icon>\n        {{util.translate('Support')}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-item *ngFor=\"let item of dummy\">\n    <ion-avatar slot=\"start\">\n      <ion-skeleton-text></ion-skeleton-text>\n    </ion-avatar>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item *ngFor=\"let item of users\" (click)=\"onChat(item)\" class=\"ion-activatable ripple-parent\">\n    <ion-avatar slot=\"start\">\n      <img [src]=\"api.mediaURL+item.cover\" onError=\"this.src='assets/imgs/user.png'\" />\n    </ion-avatar>\n    <ion-label>\n      <h3> {{item.name}} </h3>\n      <p> {{item.mobile}} </p>\n    </ion-label>\n    <ion-ripple-effect></ion-ripple-effect>\n  </ion-item>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-chats-chats-module-es2015.js.map