(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-detail-history-detail-module"],{

/***/ "1AGm":
/*!***************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: HistoryDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailPageModule", function() { return HistoryDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _history_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-detail-routing.module */ "TU9k");
/* harmony import */ var _history_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history-detail.page */ "LiNW");

//






let HistoryDetailPageModule = class HistoryDetailPageModule {
};
HistoryDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryDetailPageRoutingModule"],
        ],
        declarations: [_history_detail_page__WEBPACK_IMPORTED_MODULE_6__["HistoryDetailPage"]]
    })
], HistoryDetailPageModule);



/***/ }),

/***/ "9BBu":
/*!***************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header_div .support_lbl {\n  margin-right: 20px;\n  color: #00b3f0;\n}\n.main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .header_lbl {\n  font-weight: 600;\n  font-size: 22px;\n}\n.main_content_div .res_name {\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.main_content_div .res_location {\n  font-size: 14px;\n  width: 90%;\n}\n.main_content_div .flex_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n}\n.main_content_div .flex_div .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .flex_div .food_price {\n  font-size: 15px;\n}\n.main_content_div .flex_div .fav_lbl {\n  color: #00b3f0;\n  font-size: 12px;\n  border: 1px solid #00b3f0;\n  border-radius: 25px;\n  padding: 2px 10px;\n}\n.main_content_div .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.main_content_div .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .subNames .food_title .veg {\n  height: 12px;\n  width: 12px;\n}\n.main_content_div .subNames .food_title .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .subNames .flex_titles {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.main_content_div .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.main_content_div .card_div {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.main_content_div .card_div .upper_div {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .card_div .upper_div .veg {\n  width: 12px;\n  height: 12px;\n}\n.main_content_div .card_div .lower_div {\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div .lower_div .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .prise_lbl {\n  position: absolute;\n  right: 20px;\n}\n.main_content_div .head_gray {\n  color: gray;\n  font-size: 13px;\n}\n.main_content_div .small_lbl {\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n.main_content_div .red_lbl {\n  color: #00b3f0;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.btn_div {\n  display: flex;\n  justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n  width: 130px;\n}\n.btn_div .ratae {\n  --background: var(--ion-color-warning);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hpc3RvcnktZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQUFSO0FBSUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQURKO0FBR0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBSUk7RUFDSSxjQUFBO0FBRlI7QUFLSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUhSO0FBS0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhSO0FBS0k7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQUhSO0FBTUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFLUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUhaO0FBS1E7RUFDSSxlQUFBO0FBSFo7QUFLUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSFo7QUFPSTtFQUNJLG1DQUFBO0VBQ0EsbUJBQUE7QUFMUjtBQU1RO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBSlo7QUFLWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBSGhCO0FBS1k7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhoQjtBQU1RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFKWjtBQUtZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSGhCO0FBUUk7RUFDSSxtQ0FBQTtFQUNBLG1CQUFBO0FBTlI7QUFPUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUxaO0FBT1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUxoQjtBQVNRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVBaO0FBUVk7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5oQjtBQVdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBVFI7QUFZSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBVlI7QUFZSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVlI7QUFZSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFWUjtBQWNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBWEo7QUFhSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBWFI7QUFhSTtFQUNJLHNDQUFBO0FBWFIiLCJmaWxlIjoiaGlzdG9yeS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgLy9cbi5oZWFkZXJfZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnN1cHBvcnRfbGJsIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzAwYjNmMDtcbiAgICB9XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLmxpbmVfZGl2IHtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmhlYWRlcl9sYmwge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIC5yZXNfbmFtZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLnJlc19sb2NhdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG5cbiAgICAuZmxleF9kaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIC5mb29kX3RpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5mb29kX3ByaWNlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuZmF2X2xibCB7XG4gICAgICAgICAgICBjb2xvcjogIzAwYjNmMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIzAwYjNmMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJOYW1lcyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAuZm9vZF90aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIC52ZWcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlX2xibCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2IyZDliMjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjN2JkYjdiO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5mbGV4X3RpdGxlcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIC5zdWJfbmFtZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkX2RpdiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAudXBwZXJfZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAudmVnIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubG93ZXJfZGl2IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC5yYXRlX2xibCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2IyZDliMjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjN2JkYjdiO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByaXNlX2xibCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRfZ3JheSB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICAgIC5zbWFsbF9sYmwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgIC5yZWRfbGJsIHtcbiAgICAgICAgY29sb3I6ICMwMGIzZjA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG5cbi5idG5fZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgfVxuICAgIC5yYXRhZSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "LiNW":
/*!*************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: HistoryDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailPage", function() { return HistoryDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_history_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./history-detail.page.html */ "iXvb");
/* harmony import */ var _history_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history-detail.page.scss */ "9BBu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");



//








let HistoryDetailPage = class HistoryDetailPage {
    constructor(route, api, router, util, alertController, navCtrl, iab) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.util = util;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.orders = [];
        this.coupon = false;
        this.orderNotes = '';
        this.delivery_charge = 0;
        this.loaded = false;
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
    getOrder() {
        const param = {
            id: this.id
        };
        this.api.post('orders/getById', param).then((datas) => {
            this.loaded = true;
            // console.log(datas);
            if (datas && datas.status === 200 && datas.data.length) {
                const data = datas.data[0];
                this.util.orderDetails = data;
                this.grandTotal = data.grand_total;
                this.serviceTax = data.serviceTax;
                this.orders = JSON.parse(data.orders);
                this.status = data.status;
                this.time = moment__WEBPACK_IMPORTED_MODULE_9__(data.time).format('llll');
                this.total = data.total;
                this.paid = data.pay_method;
                this.delivery_charge = data.delivery_charge;
                this.address = data.str_address;
                this.restName = data.str_name;
                if (data && data.did && data.did !== '0') {
                    this.dId = data.did;
                    this.getDriverInfo();
                }
                this.coupon = data.applied_coupon === '1' ? true : false;
                this.dicount = data.discount;
                this.restPhone = data.str_mobile;
                this.restFCM = data.str_fcm_token;
                // console.log("FCM RESTAURANTEEE", this.restFCM)
                if (data && data.address) {
                    const add = JSON.parse(data.address);
                    this.deliveryAddress = add.house + ' ' + add.landmark + ' ' + add.address + add.pincode;
                }
                this.orderNotes = data.notes;
            }
            else {
                this.util.back();
            }
        }, error => {
            // console.log('error in orders', error);
            this.loaded = true;
            this.util.errorToast('Something went wrong');
        }).catch(error => {
            // console.log('error in order', error);
            this.loaded = true;
            this.util.errorToast('Something went wrong');
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Qué tal tu experiencia?',
                message: 'Califica al comercio ' + this.restName + ' y a tu repartidor ' + this.driverName,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            // console.log('Confirm Okay');
                            this.router.navigate(['rate']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    trackMyOrder() {
        const navData = {
            queryParams: {
                id: this.id
            }
        };
        this.router.navigate(['/tracker'], navData);
        //
    }
    call() {
        if (this.restPhone) {
            this.iab.create('tel:' + '55 54613890', '_system');
        }
    }
    getDriverInfo() {
        const param = {
            id: this.dId
        };
        this.api.post('drivers/getById', param).then((data) => {
            // console.log('driver info--->>', data);
            if (data && data.status === 200 && data.data.length) {
                const info = data.data[0];
                this.util.orderDetails['driverInfo'] = info;
                // console.log('---->>>>>', info);
                this.driverName = info.first_name + ' ' + info.last_name;
                this.driverMobile = info.mobile;
                this.driverCover = info.cover;
                this.driverFCM = info.fcm_token;
            }
        }, error => {
            // console.log(error);
            this.util.errorToast('Something went wrong');
        }).catch((error) => {
            // console.log(error);
            this.util.errorToast('Something went wrong');
        });
    }
    driverCall() {
        if (this.driverMobile) {
            this.iab.create('tel:' + this.driverMobile, '_system');
        }
        else {
            this.util.errorToast(this.util.translate('Number not found'));
        }
    }
    chat() {
        const param = {
            queryParams: {
                id: 0,
                name: 'Support',
                uid: localStorage.getItem('uid')
            }
        };
        this.router.navigate(['inbox'], param);
    }
    changeStatus() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Estás seguro?',
            text: 'Cancelar tu pedido',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            showConfirmButton: true,
            confirmButtonText: 'Si',
            backdrop: false,
            background: 'white'
        }).then((data) => {
            // console.log(data);
            if (data && data.value) {
                // console.log('cancle,delivered');
                const value = 'cancelada';
                const param = {
                    id: this.id,
                    status: value,
                };
                // console.log('order param', param);
                this.util.show(this.util.translate('Please wait'));
                this.api.post('orders/editList', param).then((order) => {
                    // console.log(order);
                    if (order && order.status === 200) {
                        if (this.dId && this.dId !== '' && this.dId !== '0') {
                            const driverParam = {
                                id: this.dId,
                                current: 'active'
                            };
                            // console.log('driver param', driverParam);
                            this.api.post('drivers/edit_profile', driverParam).then((driver) => {
                                if (driver && driver.status === 200) {
                                    this.util.hide();
                                    this.api.sendNotification(this.util.translate('Order statuts changed '), this.util.translate('Order statuts changed'), this.driverFCM);
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                                        title: this.util.translate('success'),
                                        text: this.util.translate('Order status changed to ') + value,
                                        icon: 'success',
                                        timer: 2000,
                                        backdrop: false,
                                        background: 'white'
                                    });
                                    this.navCtrl.back();
                                }
                                else {
                                    this.util.hide();
                                    this.util.errorToast('Algo ha ido mal');
                                    this.navCtrl.back();
                                }
                            }, error => {
                                // console.log(error);
                                this.util.hide();
                                this.util.errorToast('Algo ha ido mal');
                            }).catch(error => {
                                // console.log(error);
                                this.util.hide();
                                this.util.errorToast('Algo ha ido mal');
                            });
                        }
                        else {
                            this.util.hide();
                            this.navCtrl.back();
                        }
                        // edit_profile
                    }
                    else {
                        this.util.hide();
                        this.util.errorToast('Algo ha ido mal');
                        this.navCtrl.back();
                    }
                }, error => {
                    // console.log(error);
                    this.util.hide();
                    this.util.errorToast('Algo ha ido mal');
                }).catch(error => {
                    // console.log(error);
                    this.util.hide();
                    this.util.errorToast('Algo ha ido mal');
                });
            }
        });
    }
};
HistoryDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"] }
];
HistoryDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-history-detail',
        template: _raw_loader_history_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_history_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"]])
], HistoryDetailPage);



/***/ }),

/***/ "TU9k":
/*!***********************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: HistoryDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailPageRoutingModule", function() { return HistoryDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _history_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-detail.page */ "LiNW");

//



const routes = [
    {
        path: '',
        component: _history_detail_page__WEBPACK_IMPORTED_MODULE_3__["HistoryDetailPage"]
    }
];
let HistoryDetailPageRoutingModule = class HistoryDetailPageRoutingModule {
};
HistoryDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryDetailPageRoutingModule);



/***/ }),

/***/ "iXvb":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-detail/history-detail.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Detalles de la órden #{{id}} </ion-title>\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"loaded\">\n    <ion-label class=\"header_lbl\">Resumen del pedido</ion-label>\n    <ion-label class=\"res_location\">Tu pedido en {{restName}} ha sido\n      {{status}}\n    </ion-label>\n\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"res_location\">{{address}}</ion-label>\n\n    <div class=\"flex_div\">\n      <ion-label class=\"res_name\" style=\"margin-top: 0px;\">Tu órden</ion-label>\n      <ion-label class=\"fav_lbl\" (click)=\"trackMyOrder()\" *ngIf=\"status =='en camino' || status =='aceptada' \">\n        Rastrear pedido\n      </ion-label>\n    </div>\n\n    <!-- <div class=\"line_div\"></div> -->\n\n    <span *ngFor=\"let item of orders\">\n\n      <div *ngFor=\"let subItems of item.selectedItem;let j = index\" class=\"subNames\">\n        <ion-label class=\"food_title\">\n          {{item.name}} X\n          {{item.selectedItem[j].total}}</ion-label>\n        <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n          <p class=\"sub_name\">\n            - {{addods.name}}\n          </p>\n          <p class=\"sub_name\" *ngIf=\"util.cside ==='left'\">\n            {{util.currecny}} {{addods.value}}\n          </p>\n          <p class=\"sub_name\" *ngIf=\"util.cside ==='right'\">\n            {{addods.value}} {{util.currecny}}\n          </p>\n        </div>\n      </div>\n\n      <div class=\"card_div\" *ngIf=\"!item.selectedItem || !item.selectedItem.length\">\n        <div class=\"flex_div\">\n          <ion-label class=\"food_title\">{{item.name}} X {{item.quantiy}} </ion-label>\n          <ion-label class=\"food_price\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{item.quantiy * item.price}}\n          </ion-label>\n          <ion-label class=\"food_price\" *ngIf=\"util.cside ==='right'\"> {{item.quantiy * item.price}} {{util.currecny}}\n          </ion-label>\n        </div>\n\n      </div>\n\n    </span>\n\n    <ion-label style=\"margin-top: 5px; font-weight: 600px;\">Total productos\n      <span class=\"prise_lbl\" *ngIf=\"util.cside === 'left'\">{{util.currecny}} {{total}}</span>\n      <span class=\"prise_lbl\" *ngIf=\"util.cside === 'right'\">{{total}} {{util.currecny}}</span>\n    </ion-label>\n    <ion-label style=\"margin-top: 5px; font-weight: 600px;\" *ngIf=\"coupon\">Cupón\n      <span class=\"prise_lbl\" *ngIf=\"util.cside === 'left'\">{{util.currecny}} {{dicount}}</span>\n      <span class=\"prise_lbl\" *ngIf=\"util.cside === 'right'\">{{dicount}} {{util.currecny}}</span>\n    </ion-label>\n    <ion-label style=\"margin-top: 5px; font-size: 14px\">Cargo por envío\n      <span class=\"prise_lbl\" *ngIf=\"util.cside === 'left'\">{{util.currecny}} {{delivery_charge}}</span>\n      <span class=\"prise_lbl\" *ngIf=\"util.cside === 'right'\">{{delivery_charge}} {{util.currecny}}</span>\n    </ion-label>\n\n    <ion-label style=\"margin-top: 5px; font-size: 14px\">Total\n      <span class=\"prise_lbl\" *ngIf=\"util.cside === 'left'\">{{util.currecny}} {{grandTotal}}</span>\n      <span class=\"prise_lbl\" *ngIf=\"util.cside === 'right'\">{{grandTotal}} {{util.currecny}}</span>\n    </ion-label>\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"res_name\">Detalles del pedido</ion-label>\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"head_gray\">Número del pedido</ion-label>\n    <ion-label class=\"small_lbl\">#{{id}}</ion-label>\n    <ion-label class=\"head_gray\">Notas</ion-label>\n    <ion-label class=\"small_lbl\">{{orderNotes}}</ion-label>\n    <ion-label class=\"head_gray\">Fecha</ion-label>\n    <ion-label class=\"small_lbl\">{{time}}</ion-label>\n    <ion-label class=\"head_gray\">Entregar en</ion-label>\n    <ion-label class=\"small_lbl\">{{deliveryAddress}}</ion-label>\n\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"red_lbl\" *ngIf=\"status =='creada' ||status =='en camino' || status =='accepted' \" (click)=\"call()\">\n      Llamar a Mr Manda2 </ion-label>\n\n    <ion-label class=\"red_lbl\" *ngIf=\"status =='en camino' || status =='' \" (click)=\"driverCall()\">\n     Llamar al repartidor {{driverName}}</ion-label>\n\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"btn_div\">\n      <ion-button *ngIf=\"status ==='delivered'\" (click)=\"presentAlertConfirm()\" size=\"small\" class=\"ratae\">\n        <ion-icon name=\"star\" color=\"light\" slot=\"start\"></ion-icon>\n        Calificar pedido\n      </ion-button>\n      <ion-button *ngIf=\"status === 'created' ||status === 'ongoing' || status === 'accepted' \" (click)=\"changeStatus()\"\n        size=\"small\" class=\"reject\">\n        Cancelar pedido\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=pages-history-detail-history-detail-module-es2015.js.map