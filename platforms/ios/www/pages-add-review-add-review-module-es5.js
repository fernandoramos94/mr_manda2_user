(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-review-add-review-module"], {
    /***/
    "/5Y+":
    /*!***************************************************************!*\
      !*** ./src/app/pages/add-review/add-review-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: AddReviewPageRoutingModule */

    /***/
    function Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddReviewPageRoutingModule", function () {
        return AddReviewPageRoutingModule;
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


      var _add_review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-review.page */
      "LipZ"); //


      var routes = [{
        path: '',
        component: _add_review_page__WEBPACK_IMPORTED_MODULE_3__["AddReviewPage"]
      }];

      var AddReviewPageRoutingModule = function AddReviewPageRoutingModule() {
        _classCallCheck(this, AddReviewPageRoutingModule);
      };

      AddReviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddReviewPageRoutingModule);
      /***/
    },

    /***/
    "08Sr":
    /*!*******************************************************!*\
      !*** ./src/app/pages/add-review/add-review.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function Sr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n  padding-top: 20px;\n}\n.main_content_div .head_lbl {\n  font-weight: 600;\n  font-size: 18px;\n  padding-left: 20px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 10px;\n  width: 100%;\n  align-items: center;\n  padding: 0px 20px;\n}\n.main_content_div .flex_div .first_div {\n  display: flex;\n  justify-content: space-between;\n  width: 70%;\n}\n.main_content_div .flex_div .first_div .rate_div {\n  border: 1px solid lightgray;\n  color: lightgray;\n  border-radius: 25px;\n  padding: 3px 10px;\n  display: flex;\n  flex-direction: row;\n}\n.main_content_div .flex_div .first_div .rate_div ion-icon {\n  font-size: 15px;\n}\n.main_content_div .flex_div .first_div .rate_div span {\n  font-size: 18px;\n  font-weight: 600;\n}\n.main_content_div .flex_div .first_div .rate1 {\n  background: #ed5a74;\n  color: white;\n  border: 1px solid #ed5a74;\n}\n.main_content_div .flex_div .first_div .rate2 {\n  background: #f7c007;\n  color: white;\n  border: 1px solid #f7c007;\n}\n.main_content_div .flex_div .first_div .rate3 {\n  background: #7bdb7b;\n  color: white;\n  border: 1px solid #7bdb7b;\n}\n.main_content_div .flex_div .first_div .rate4 {\n  background: #13ad13;\n  color: white;\n  border: 1px solid #13ad13;\n}\n.main_content_div .flex_div .first_div .rate5 {\n  background: #085c08;\n  color: white;\n  border: 1px solid #085c08;\n}\n.main_content_div .flex_div .second_div .rate1 {\n  color: #ed5a74;\n}\n.main_content_div .flex_div .second_div .rate2 {\n  color: #f7c007;\n}\n.main_content_div .flex_div .second_div .rate3 {\n  color: #7bdb7b;\n}\n.main_content_div .flex_div .second_div .rate4 {\n  color: #13ad13;\n}\n.main_content_div .flex_div .second_div .rate5 {\n  color: #085c08;\n}\n.main_content_div .line_div {\n  width: 100%;\n  height: 3px;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .lower_div {\n  padding: 20px;\n}\n.main_content_div .lower_div .head_lbl2 {\n  font-weight: 600;\n  font-size: 18px;\n}\n.main_content_div .lower_div .gray_div {\n  margin-top: 10px;\n  height: 70px;\n  width: 70px;\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  background: #f3f3f3;\n  position: relative;\n}\n.main_content_div .lower_div .gray_div .camera {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n}\n.main_content_div .lower_div ion-textarea {\n  border-bottom: 1px solid lightgray;\n}\n.main_content_div .lower_div .small_gray {\n  font-size: 12px;\n  color: gray;\n  margin-top: 10px;\n}\n.sub_btn {\n  --background: var(--ion-color-primary);\n  --border-radius: 5px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZC1yZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUVBLGlCQUFBO0FBREo7QUFFSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQVI7QUFFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFSO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBQ1o7QUFDWTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ2hCO0FBQWdCO0VBQ0ksZUFBQTtBQUVwQjtBQUNnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNwQjtBQUdZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFEaEI7QUFHWTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBRGhCO0FBR1k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQURoQjtBQUdZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFEaEI7QUFHWTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBRGhCO0FBTVk7RUFDSSxjQUFBO0FBSmhCO0FBTVk7RUFDSSxjQUFBO0FBSmhCO0FBTVk7RUFDSSxjQUFBO0FBSmhCO0FBTVk7RUFDSSxjQUFBO0FBSmhCO0FBTVk7RUFDSSxjQUFBO0FBSmhCO0FBUUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU5SO0FBU0k7RUFDSSxhQUFBO0FBUFI7QUFTUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQVBaO0FBVVE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFSWjtBQVVZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQVJoQjtBQVlRO0VBQ0ksa0NBQUE7QUFWWjtBQWFRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVhaO0FBZUE7RUFDSSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFaSiIsImZpbGUiOiJhZGQtcmV2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgIC8vXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAuaGVhZF9sYmwge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG4gICAgLmZsZXhfZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICAgIC5maXJzdF9kaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG5cbiAgICAgICAgICAgIC5yYXRlX2RpdiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yYXRlMSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VkNWE3NDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkNWE3NDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlMiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3YzAwNztcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y3YzAwNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlMyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzdiZGI3YjtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzdiZGI3YjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlNCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzEzYWQxMztcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzEzYWQxMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlNSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzA4NWMwODtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzA4NWMwODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWNvbmRfZGl2IHtcbiAgICAgICAgICAgIC5yYXRlMSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNlZDVhNzQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0ZTIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjdjMDA3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGUzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzdiZGI3YjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlNCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMxM2FkMTM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0ZTUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDg1YzA4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5saW5lX2RpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5sb3dlcl9kaXYge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgIC5oZWFkX2xibDIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmF5X2RpdiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAuY2FtZXJhIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi10ZXh0YXJlYSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNtYWxsX2dyYXkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnN1Yl9idG4ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "AlTS":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-review/add-review.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function AlTS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{name}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <ion-label class=\"head_lbl\">Califica tu experiencia</ion-label>\n\n    <div class=\"flex_div\">\n      <div class=\"first_div\">\n        <div class=\"rate_div\" [class.rate1]=\"rate==1\" [class.rate2]=\"rate==2\" [class.rate3]=\"rate==3\"\n          [class.rate4]=\"rate==4\" [class.rate5]=\"rate==5\" (click)=\"onClick(1)\"><span>1</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate2]=\"rate==2\" [class.rate3]=\"rate==3\" [class.rate4]=\"rate==4\"\n          [class.rate5]=\"rate==5\" (click)=\"onClick(2)\"><span>2</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate3]=\"rate==3\" [class.rate4]=\"rate==4\" [class.rate5]=\"rate==5\"\n          (click)=\"onClick(3)\"><span>3</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate4]=\"rate==4\" [class.rate5]=\"rate==5\" (click)=\"onClick(4)\"><span>4</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n        <div class=\"rate_div\" [class.rate5]=\"rate==5\" (click)=\"onClick(5)\"><span>5</span>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"second_div\">\n        <ion-label *ngIf=\"rate==1\" class=\"rate1\">Horrible</ion-label>\n        <ion-label *ngIf=\"rate==2\" class=\"rate2\">Mala</ion-label>\n        <ion-label *ngIf=\"rate==3\" class=\"rate3\">Regular</ion-label>\n        <ion-label *ngIf=\"rate==4\" class=\"rate4\">Muy buena</ion-label>\n        <ion-label *ngIf=\"rate==5\" class=\"rate5\">Excelente</ion-label>\n      </div>\n    </div>\n\n\n    <div class=\"line_div\"></div>\n\n    <div class=\"lower_div\">\n      <ion-label class=\"head_lbl2\">Cuéntanos tu experiencia</ion-label>\n      <ion-textarea rows=\"4\" [(ngModel)]=\"comment\" [placeholder]=\"('Cuéntanos que tal tu experiencia con este comercio..')\">\n      </ion-textarea>\n\n  \n    </div>\n    <div class=\"line_div\"></div>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button (click)=\"submit()\" expand=\"block\" class=\"sub_btn\">\n      Enviar calificación\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "LipZ":
    /*!*****************************************************!*\
      !*** ./src/app/pages/add-review/add-review.page.ts ***!
      \*****************************************************/

    /*! exports provided: AddReviewPage */

    /***/
    function LipZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddReviewPage", function () {
        return AddReviewPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_review_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-review.page.html */
      "AlTS");
      /* harmony import */


      var _add_review_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-review.page.scss */
      "08Sr");
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


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin"); //


      var AddReviewPage = /*#__PURE__*/function () {
        function AddReviewPage(route, api, actionSheetController, util, navCtrl) {
          _classCallCheck(this, AddReviewPage);

          this.route = route;
          this.api = api;
          this.actionSheetController = actionSheetController;
          this.util = util;
          this.navCtrl = navCtrl;
          this.rate = 2;
          this.comment = '';
          this.rating = [];
        }

        _createClass(AddReviewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (data) {
              // console.log('data=>', data);
              if (data.hasOwnProperty('id')) {
                _this.id = data.id;
                _this.name = data.name;

                if (data.way) {
                  _this.way = data.way;
                } else {
                  _this.way = 'manually';
                }

                var param = {
                  where: 'sid = ' + _this.id
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
        }, {
          key: "onClick",
          value: function onClick(val) {
            this.rate = val;
          }
        }, {
          key: "onChange",
          value: function onChange(val) {// console.log(val);
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
              did: 0,
              sid: this.id,
              rate: this.rate,
              msg: this.comment,
              way: this.way,
              status: 1,
              timestamp: moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD')
            };
            this.util.show();
            this.api.post('rating/save', param).then(function (data) {
              // console.log(data);
              _this2.util.hide();

              if (data && data.status === 200) {
                _this2.util.showToast('Calificación añadida', 'success', 'bottom');

                var storeParam = {
                  uid: _this2.id,
                  total_rating: _this2.total + 1,
                  rating: storeRating
                };

                _this2.api.post('stores/editByUid', storeParam).then(function (stores) {
                  // console.log('store edit done', stores);
                  _this2.util.back();
                }, function (error) {// console.log(error);
                });
              } else {
                _this2.util.errorToast('Algo ha ido mal');
              }
            }, function (error) {
              _this2.util.hide(); // console.log(error);


              _this2.util.errorToast('Algo ha ido mal');
            });
          }
        }]);

        return AddReviewPage;
      }();

      AddReviewPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }];
      };

      AddReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-review',
        template: _raw_loader_add_review_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_review_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])], AddReviewPage);
      /***/
    },

    /***/
    "Z3QP":
    /*!*******************************************************!*\
      !*** ./src/app/pages/add-review/add-review.module.ts ***!
      \*******************************************************/

    /*! exports provided: AddReviewPageModule */

    /***/
    function Z3QP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddReviewPageModule", function () {
        return AddReviewPageModule;
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


      var _add_review_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-review-routing.module */
      "/5Y+");
      /* harmony import */


      var _add_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-review.page */
      "LipZ"); //


      var AddReviewPageModule = function AddReviewPageModule() {
        _classCallCheck(this, AddReviewPageModule);
      };

      AddReviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_review_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddReviewPageRoutingModule"]],
        declarations: [_add_review_page__WEBPACK_IMPORTED_MODULE_6__["AddReviewPage"]]
      })], AddReviewPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-add-review-add-review-module-es5.js.map