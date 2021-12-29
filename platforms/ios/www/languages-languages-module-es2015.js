(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["languages-languages-module"],{

/***/ "+8HC":
/*!*****************************************************!*\
  !*** ./src/app/pages/languages/languages.module.ts ***!
  \*****************************************************/
/*! exports provided: LanguagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesPageModule", function() { return LanguagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _languages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./languages-routing.module */ "l3ba");
/* harmony import */ var _languages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./languages.page */ "rO+y");

//






let LanguagesPageModule = class LanguagesPageModule {
};
LanguagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _languages_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanguagesPageRoutingModule"]
        ],
        declarations: [_languages_page__WEBPACK_IMPORTED_MODULE_6__["LanguagesPage"]]
    })
], LanguagesPageModule);



/***/ }),

/***/ "Mfxn":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/languages/languages.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{util.translate('Languages')}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <p *ngIf=\"!dummy?.length && !langs?.length\" class=\"ion-text-center\"> {{util.translate('No Languages Found')}} </p>\n  <ion-item *ngFor=\"let item of dummy\">\n    <ion-thumbnail slot=\"start\">\n      <ion-skeleton-text animated style=\"width: 100%;height: 100px;\"></ion-skeleton-text>\n    </ion-thumbnail>\n    <ion-label>\n      <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n    </ion-label>\n  </ion-item>\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"selected\" (ionChange)=\"changed()\">\n      <ion-item *ngFor=\"let item of langs\" class=\"list\" lines=\"none\">\n        <ion-thumbnail slot=\"start\" class=\"thums\">\n          <img [src]=\"api.mediaURL+ item.cover\" alt=\"\">\n        </ion-thumbnail>\n        <ion-label class=\"title\">{{item.name}}</ion-label>\n        <ion-radio [value]=\"item.file\" slot=\"end\" mode=\"md\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "gl0j":
/*!*****************************************************!*\
  !*** ./src/app/pages/languages/languages.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thums {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.thums img {\n  height: 25px;\n  width: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xhbmd1YWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoibGFuZ3VhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgIC8vXG4udGh1bXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "l3ba":
/*!*************************************************************!*\
  !*** ./src/app/pages/languages/languages-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LanguagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesPageRoutingModule", function() { return LanguagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _languages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./languages.page */ "rO+y");

//



const routes = [
    {
        path: '',
        component: _languages_page__WEBPACK_IMPORTED_MODULE_3__["LanguagesPage"]
    }
];
let LanguagesPageRoutingModule = class LanguagesPageRoutingModule {
};
LanguagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LanguagesPageRoutingModule);



/***/ }),

/***/ "rO+y":
/*!***************************************************!*\
  !*** ./src/app/pages/languages/languages.page.ts ***!
  \***************************************************/
/*! exports provided: LanguagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesPage", function() { return LanguagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_languages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./languages.page.html */ "Mfxn");
/* harmony import */ var _languages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languages.page.scss */ "gl0j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");



//



let LanguagesPage = class LanguagesPage {
    constructor(util, api) {
        this.util = util;
        this.api = api;
        this.dummy = [];
        this.langs = [];
        this.selected = localStorage.getItem('language');
        this.getLangs();
    }
    ngOnInit() {
    }
    getLangs() {
        this.dummy = Array(10);
        this.api.get('lang').then((data) => {
            // console.log(data);
            this.dummy = [];
            if (data && data.status === 200) {
                const info = data.data.filter(x => x.status === '1');
                this.langs = info;
            }
        }, error => {
            this.dummy = [];
            // console.log(error);
            this.util.errorToast('Algo ha ido mal');
        });
    }
    openMenu() {
        this.util.openMenu();
    }
    changed() {
        // console.log(this.selected);
        const item = this.langs.filter(x => x.file === this.selected);
        if (item && item.length > 0) {
            this.util.direction = item[0].positions === '1' ? 'ltr' : 'rtl';
            document.documentElement.dir = this.util.direction;
            localStorage.setItem('language', this.selected);
            window.location.reload();
        }
    }
};
LanguagesPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] }
];
LanguagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-languages',
        template: _raw_loader_languages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_languages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]])
], LanguagesPage);



/***/ })

}]);
//# sourceMappingURL=languages-languages-module-es2015.js.map