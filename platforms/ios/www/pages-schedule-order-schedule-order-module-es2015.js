(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-schedule-order-schedule-order-module"],{

/***/ "2+YO":
/*!***********************************************************************!*\
  !*** ./src/app/pages/schedule-order/schedule-order-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ScheduleOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleOrderPageRoutingModule", function() { return ScheduleOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _schedule_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule-order.page */ "RxX+");

//



const routes = [
    {
        path: '',
        component: _schedule_order_page__WEBPACK_IMPORTED_MODULE_3__["ScheduleOrderPage"]
    }
];
let ScheduleOrderPageRoutingModule = class ScheduleOrderPageRoutingModule {
};
ScheduleOrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScheduleOrderPageRoutingModule);



/***/ }),

/***/ "mHwt":
/*!***************************************************************!*\
  !*** ./src/app/pages/schedule-order/schedule-order.module.ts ***!
  \***************************************************************/
/*! exports provided: ScheduleOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleOrderPageModule", function() { return ScheduleOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _schedule_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule-order-routing.module */ "2+YO");
/* harmony import */ var _schedule_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule-order.page */ "RxX+");

//






// import { ComponentsModule } from 'src/app/components/components.module';
let ScheduleOrderPageModule = class ScheduleOrderPageModule {
};
ScheduleOrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _schedule_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScheduleOrderPageRoutingModule"],
        ],
        declarations: [_schedule_order_page__WEBPACK_IMPORTED_MODULE_6__["ScheduleOrderPage"]],
    })
], ScheduleOrderPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-schedule-order-schedule-order-module-es2015.js.map