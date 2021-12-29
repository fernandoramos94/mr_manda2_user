(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payments-payments-module"], {
    /***/
    "+rES":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payments/payments.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function rES(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Generar tu pedido</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"billing\">\n        <div class=\"singleRow\">\n            <ion-label class=\"headerTitle\">Total productos</ion-label>\n            <ion-label class=\"price\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{cart.totalPrice}}</ion-label>\n            <ion-label class=\"price\" *ngIf=\"util.cside ==='right'\"> {{cart.totalPrice}} {{util.currecny}}</ion-label>\n        </div>\n        <div class=\"singleRow\" *ngIf=\"cart.discount && cart.coupon\">\n            <ion-label class=\"headerTitle\">Cupón</ion-label>\n            <ion-label class=\"price\" *ngIf=\"util.cside ==='left'\"> - {{util.currecny}} {{cart.discount}}</ion-label>\n            <ion-label class=\"price\" *ngIf=\"util.cside ==='right'\"> - {{cart.discount}} {{util.currecny}}</ion-label>\n        </div>\n\n        <div class=\"singleRow\">\n            <ion-label class=\"headerTitle\">Precio por envío</ion-label>\n            <ion-label class=\"price\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{cart.deliveryPrice}}</ion-label>\n            <ion-label class=\"price\" *ngIf=\"util.cside ==='right'\"> {{cart.deliveryPrice}} {{util.currecny}}</ion-label>\n        </div>\n\n        <div class=\"singleRow\">\n            <ion-label class=\"headerTotal boldClass\">Total</ion-label>\n            <ion-label class=\"priceTotal boldClass\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{cart.grandTotal}}\n            </ion-label>\n            <ion-label class=\"priceTotal boldClass\" *ngIf=\"util.cside ==='right'\"> {{cart.grandTotal}} {{util.currecny}}\n            </ion-label>\n        </div>\n    </div>\n    <div class=\"header\">\n        <ion-label class=\"title\">Selecciona el método de pago</ion-label>\n    </div>\n\n\n    <div class=\"mp\">\n        <div class=\"row row-1\">\n            <label for=\"\" class=\"title-text\">Disponibles</label>\n            <div class=\"card-saves\" *ngFor=\"let cardSave of getCard\" (click)=\"auto(cardSave)\">\n                <div class=\"col-3\" style=\"border: none !important; text-align: center;\">\n                    <img src=\"../../../assets/master.png\" alt=\"\" srcset=\"\" *ngIf=\"cardSave.type == 1\">\n                    <img src=\"../../../assets/visa.png\" alt=\"\" srcset=\"\" *ngIf=\"cardSave.type == 2\">\n                    <img src=\"../../../assets/americanexpress.png\" alt=\"\" srcset=\"\" *ngIf=\"cardSave.type == 3\">\n                </div>\n                <div class=\"col-9\">\n                    <span>{{card.name}}</span>\n                    <span>{{cardHide(cardSave.number)}}</span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row row-1\">\n            <label for=\"\" class=\"title-text\">Agregar tarjeta</label>\n\n            <div class=\"card-saves\" (click)=\"selectCard(1)\">\n                <div class=\"col-3\" style=\"border: none !important; text-align: center;\">\n                    <img src=\"../../../assets/master.png\" alt=\"\" srcset=\"\">\n                </div>\n                <div class=\"col-9\" style=\"vertical-align: text-bottom;\">\n                    <span>MasterCard</span>\n                </div>\n            </div>\n            <div class=\"card-saves\" (click)=\"selectCard(2)\">\n                <div class=\"col-3\" style=\"border: none !important; text-align: center;\">\n                    <img src=\"../../../assets/visa.png\" alt=\"\" srcset=\"\">\n                </div>\n                <div class=\"col-9\" style=\"vertical-align: text-bottom;\">\n                    <span>Visa</span>\n                </div>\n            </div>\n            <div class=\"card-saves\" (click)=\"selectCard(3)\">\n                <div class=\"col-3\" style=\"border: none !important; text-align: center;\">\n                    <img src=\"../../../assets/americanexpress.png\" alt=\"\" srcset=\"\">\n                </div>\n                <div class=\"col-9\" style=\"vertical-align: text-bottom;\">\n                    <span>American Express</span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div style=\"margin: 5px 8px;\">\n        <div id=\"paypalButton\"></div>\n    </div>\n    <div id=\"myModal\" class=\"modalContainer\" *ngIf=\"card.type == '1' || card.type == '2'\">\n        <div class=\"modal-content\">\n            <span class=\"close\" (click)=\"card.type=''\">×</span> <h2></h2>\n            <form id=\"form-checkout\">\n                <div class=\"col-12\">\n                    <ion-icon name=\"person-outline\"></ion-icon>\n                    <input type=\"text\" name=\"cardholderName\" required id=\"form-checkout__cardholderName\"\n                        class=\"form-control\" [(ngModel)]=\"card.name\" />\n                </div>\n                <div class=\"col-12 hidden\">\n                    <ion-icon name=\"id-card-outline\"></ion-icon>\n                    <input type=\"text\" name=\"identificationNumber\" required=\"true\"\n                        id=\"form-checkout__identificationNumber\" class=\"form-control\"\n                        [(ngModel)]=\"card.identification\" />\n                </div>\n                <div class=\"col-12\">\n                    <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                    <input type=\"email\" name=\"cardholderEmail\" required id=\"form-checkout__cardholderEmail\"\n                        class=\"form-control\" [(ngModel)]=\"card.email\" />\n                </div>\n                <div class=\"col-12\">\n                    <ion-icon name=\"card-outline\"></ion-icon> <input type=\"text\" required name=\"cardNumber\"\n                        id=\"form-checkout__cardNumber\" class=\"form-control\" [(ngModel)]=\"card.card_number\" />\n                </div>\n                <div class=\"col-3\">\n                    <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n                    <input type=\"text\" name=\"cardExpirationMonth\" required id=\"form-checkout__cardExpirationMonth\"\n                        class=\"form-control\" [(ngModel)]=\"card.month\" />\n                </div>\n                <div class=\"col-3\">\n                    <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n                    <input type=\"text\" name=\"cardExpirationYear\" required id=\"form-checkout__cardExpirationYear\"\n                        class=\"form-control\" [(ngModel)]=\"card.year\" />\n                </div>\n                <div class=\"col-6\">\n                    <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                    <input type=\"text\" name=\"securityCode\" required id=\"form-checkout__securityCode\"\n                        class=\"form-control\" />\n                </div>\n                <div class=\"col-12 hidden\">\n                    <select name=\"installments\" id=\"form-checkout__installments\" class=\"form-control\"></select>\n                </div>\n                <div class=\"hidden\">\n                    <select name=\"issuer\" id=\"form-checkout__issuer\"></select>\n                    <select name=\"identificationType\" id=\"form-checkout__identificationType\"></select>\n                    <progress value=\"0\" class=\"progress-bar\">Cargando...</progress>\n                </div>\n\n\n                <div class=\"col-12\">\n                    <button type=\"submit\" id=\"form-checkout__submit\" class=\"btn btn-primary\">Pagar</button>\n                </div>\n\n            </form>\n        </div>\n    </div>\n\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "WRQk":
    /*!***************************************************!*\
      !*** ./src/app/pages/payments/payments.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function WRQk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header {\n  background: #f3f3f3;\n  padding: 20px;\n}\n.header .title {\n  font-size: 1rem;\n  font-weight: bold;\n}\n.billing {\n  padding: 5px 10px;\n}\n.billing .singleRow {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0px;\n  border-bottom: 1px dashed lightgray;\n}\n.billing .singleRow .headerTitle {\n  font-size: 0.8rem;\n}\n.billing .singleRow .boldClass {\n  font-weight: bold;\n}\n.billing .singleRow .headerTotal {\n  font-size: 1rem;\n}\n.billing .singleRow .priceTotal {\n  font-size: 1rem;\n}\n.billing .singleRow .price {\n  font-size: 0.8rem;\n}\n.col-12, .col-3, .col-4, .col-6 {\n  border-bottom: 1px solid #cccccc;\n}\n.col-12 {\n  width: 95%;\n  margin: 5px;\n  display: inline-block;\n}\n.col-3 {\n  width: 20%;\n  margin: 5px;\n  display: inline-block;\n}\n.col-4 {\n  width: 30%;\n  margin: 5px;\n  display: inline-block;\n}\n.col-6 {\n  width: 50%;\n  margin: 5px;\n  display: inline-block;\n}\n.col-9 {\n  width: 70%;\n  margin: 5px;\n  display: inline-block;\n}\n.col-9 span {\n  display: block;\n  font-size: 17px;\n  line-height: 1.5;\n  padding-left: 15px;\n}\n.form-control {\n  border: none;\n  padding: 10px 5px;\n  width: 72%;\n  background-color: #fff;\n}\n.form-control:focus, .form-control:active {\n  border: none !important;\n  outline: none;\n}\nselect {\n  width: 100% !important;\n}\nion-icon {\n  font-size: 20px;\n  vertical-align: middle;\n}\n.btn.btn-primary {\n  width: 100%;\n  height: 45px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #3ecc6d;\n  border: 1px solid #ddd;\n}\n.hidden {\n  display: none !important;\n}\n.mp {\n  padding: 5px 10px;\n}\n.card-saves {\n  width: 100%;\n  padding: 5px 10px;\n  background: #f3f3f3;\n  border-radius: 7px;\n  margin: 6px 0px;\n}\n.col-3 img {\n  width: 50px !important;\n  border-radius: 5px;\n}\n.title-text {\n  padding: 13px 10px;\n  display: block;\n  font-size: 18px;\n  font-weight: 600;\n}\n.modalContainer {\n  position: fixed;\n  z-index: 999;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modalContainer .modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 40px 0;\n  border: 1px solid lightgray;\n  border-top: 10px solid #58abb7;\n  width: 100%;\n  margin-top: 96%;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n.modalContainer .close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 39px;\n  font-weight: bold;\n  margin-right: 5%;\n}\n.modalContainer .close:hover,\n.modalContainer .close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BheW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUVBO0VBQ0ksaUJBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtBQUVSO0FBRFE7RUFDSSxpQkFBQTtBQUdaO0FBRFE7RUFDSSxpQkFBQTtBQUdaO0FBRFE7RUFDSSxlQUFBO0FBR1o7QUFEUTtFQUNJLGVBQUE7QUFHWjtBQURRO0VBQ0ksaUJBQUE7QUFHWjtBQUVBO0VBQ0ksZ0NBQUE7QUFDSjtBQUVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUNKO0FBRUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFFSjtBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUdKO0FBREE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBSUo7QUFISTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUtSO0FBREE7RUFDSSxZQUFBO0VBRUEsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFHSjtBQURBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0FBSUo7QUFGQTtFQUNJLHNCQUFBO0FBS0o7QUFIQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtBQU1KO0FBSkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBT0o7QUFKQTtFQUNJLHdCQUFBO0FBT0o7QUFIQTtFQUNJLGlCQUFBO0FBTUo7QUFIQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTUo7QUFISTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFNUjtBQUhBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTUo7QUFIQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUFNSjtBQUhBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFNSjtBQUhBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQU1KO0FBSEE7O0VBRUksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQU1KIiwiZmlsZSI6InBheW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgIC8vXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4uYmlsbGluZyB7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgLnNpbmdsZVJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICAuaGVhZGVyVGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmJvbGRDbGFzcyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyVG90YWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5wcmljZVRvdGFsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb2wtMTIsIC5jb2wtMywgLmNvbC00LCAuY29sLTZ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XG59XG5cbi5jb2wtMTJ7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jb2wtM3tcbiAgICB3aWR0aDogMjAlO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jb2wtNHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jb2wtNntcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jb2wtOXtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBzcGFue1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgfVxufVxuXG4uZm9ybS1jb250cm9se1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICB3aWR0aDogNzIlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uZm9ybS1jb250cm9sOmZvY3VzLCAuZm9ybS1jb250cm9sOmFjdGl2ZXtcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5zZWxlY3R7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbmlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJ0bi5idG4tcHJpbWFyeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZWNjNmQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZFxufVxuXG4uaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG4ubXB7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi5jYXJkLXNhdmVze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIG1hcmdpbjogNnB4IDBweDtcbn1cbi5jb2wtM3tcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG59XG4udGl0bGUtdGV4dHtcbiAgICBwYWRkaW5nOiAxM3B4IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tb2RhbENvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgb3ZlcmZsb3c6IGF1dG87IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xufVxuXG4ubW9kYWxDb250YWluZXIgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjNThhYmI3O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDk2JTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xufVxuXG4ubW9kYWxDb250YWluZXIgLmNsb3NlIHtcbiAgICBjb2xvcjogI2FhYWFhYTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAzOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5tb2RhbENvbnRhaW5lciAuY2xvc2U6aG92ZXIsXG4ubW9kYWxDb250YWluZXIgLmNsb3NlOmZvY3VzIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
      /***/
    },

    /***/
    "WmLo":
    /*!***********************************************************!*\
      !*** ./src/app/pages/payments/payments-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: PaymentsPageRoutingModule */

    /***/
    function WmLo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsPageRoutingModule", function () {
        return PaymentsPageRoutingModule;
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


      var _payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payments.page */
      "cKOx"); //


      var routes = [{
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_3__["PaymentsPage"]
      }];

      var PaymentsPageRoutingModule = function PaymentsPageRoutingModule() {
        _classCallCheck(this, PaymentsPageRoutingModule);
      };

      PaymentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PaymentsPageRoutingModule);
      /***/
    },

    /***/
    "cKOx":
    /*!*************************************************!*\
      !*** ./src/app/pages/payments/payments.page.ts ***!
      \*************************************************/

    /*! exports provided: PaymentsPage */

    /***/
    function cKOx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsPage", function () {
        return PaymentsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_payments_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./payments.page.html */
      "+rES");
      /* harmony import */


      var _payments_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./payments.page.scss */
      "WRQk");
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


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");

      var PaymentsPage = /*#__PURE__*/function () {
        function PaymentsPage(router, api, util, navCtrl, cart, iab, modalController) {
          var _this = this;

          _classCallCheck(this, PaymentsPage);

          this.router = router;
          this.api = api;
          this.util = util;
          this.navCtrl = navCtrl;
          this.cart = cart;
          this.iab = iab;
          this.modalController = modalController;
          this.instamojo = {
            key: '',
            token: '',
            code: ''
          };
          this.paystack = {
            pk: '',
            sk: '',
            code: ''
          };
          this.flutterwave = {
            pk: '',
            code: ''
          };
          this.scheduleData = {
            status: false,
            time: null
          };
          this.card = {
            card_number: '',
            year: '',
            month: '',
            name: '',
            identification: '',
            email: '',
            type: ''
          };
          this.getCard = [];
          this.showScheduleButton = false;
          var param = {
            id: this.cart.cartStoreInfo.uid
          };
          this.api.post('users/getById', param).then(function (data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (data && data.status === 200 && data.data && data.data.length) {
                        this.storeFCM = data.data[0].fcm_token;
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }, function (error) {});
          var param_user = {
            id: localStorage.getItem('uid')
          };
          this.api.post('users/getById', param_user).then(function (data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var ccc;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (data && data.status === 200 && data.data && data.data.length) {
                        ccc = data.data[0];
                        this.card.name = ccc.first_name + ' ' + ccc.last_name;
                        this.card.email = ccc.email;
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }, function (error) {});
          this.getPayments();
          this.cards();
        }

        _createClass(PaymentsPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var orderSend, statusPay;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.jsonOrder();

                    case 2:
                      orderSend = _context3.sent;
                      statusPay = false;
                      paypal.Buttons({
                        style: {
                          shape: 'rect',
                          color: 'blue',
                          layout: 'vertical',
                          label: 'paypal'
                        },
                        createOrder: function createOrder(data, actions) {
                          return actions.order.create(orderSend);
                        },
                        onApprove: function onApprove(data, actions) {
                          return actions.order.capture().then(function (orderData) {
                            _this2.makeOrder('paypal', 'fromApp');
                          });
                        },
                        onError: function onError(err) {
                          this.util.showToast('Algo ha ido mal', 'danger', 'bottom');
                        }
                      }).render('#paypalButton');

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "cards",
          value: function cards() {
            var _this3 = this;

            var dataSend = {
              user_id: localStorage.getItem('uid')
            };
            fetch("https://api.mrmandados.xyz/cards.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(dataSend)
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              console.log(res);
              _this3.getCard = res;
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "cardHide",
          value: function cardHide(card) {
            var hideNum = [];

            for (var i = 0; i < card.length; i++) {
              if (i < card.length - 4) {
                hideNum.push("*");
              } else {
                hideNum.push(card[i]);
              }
            }

            return hideNum.join("");
          }
        }, {
          key: "auto",
          value: function auto(data) {
            var _this4 = this;

            this.util.show();
            this.card.type = data.type;
            this.merchand();
            setTimeout(function () {
              document.getElementById("form-checkout__cardNumber").value = data.number;
              setTimeout(function () {
                document.getElementById("form-checkout__cardNumber").dispatchEvent(new KeyboardEvent('keyup', {
                  'key': 'y'
                }));
              }, 50);
              _this4.card.card_number = data.number;
              _this4.card.month = data.month;
              _this4.card.year = data.year;

              _this4.util.hide();
            }, 600);
          }
        }, {
          key: "merchand",
          value: function merchand() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this5 = this;

              var mp;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      mp = new MercadoPago('APP_USR-4f97bee7-8daa-4581-af99-1645e17b1ad2');

                      if (this.cardForm) {
                        this.cardForm.unmount();
                      }

                      setTimeout(function () {
                        _this5.cardForm = mp.cardForm({
                          amount: _this5.cart.totalPrice,
                          autoMount: true,
                          form: {
                            id: "form-checkout",
                            cardholderName: {
                              id: "form-checkout__cardholderName",
                              placeholder: "Nombre"
                            },
                            cardholderEmail: {
                              id: "form-checkout__cardholderEmail",
                              placeholder: "Correo"
                            },
                            cardNumber: {
                              id: "form-checkout__cardNumber",
                              placeholder: "Número de la tarjeta"
                            },
                            cardExpirationMonth: {
                              id: "form-checkout__cardExpirationMonth",
                              placeholder: "MM"
                            },
                            cardExpirationYear: {
                              id: "form-checkout__cardExpirationYear",
                              placeholder: "AA"
                            },
                            securityCode: {
                              id: "form-checkout__securityCode",
                              placeholder: "CVV"
                            },
                            installments: {
                              id: "form-checkout__installments",
                              placeholder: "Cuotas"
                            },
                            identificationType: {
                              id: "form-checkout__identificationType",
                              placeholder: "Tipo de documento"
                            },
                            identificationNumber: {
                              id: "form-checkout__identificationNumber",
                              placeholder: "Identificación"
                            },
                            issuer: {
                              id: "form-checkout__issuer",
                              placeholder: "Banco emisor"
                            }
                          },
                          callbacks: {
                            onFormMounted: function onFormMounted(error) {
                              if (error) return console.warn("Form Mounted handling error: ", error);
                              console.log("Form mounted");
                            },
                            onFormUnmounted: function onFormUnmounted(error) {
                              if (error) return console.log('Form Unmounted handling error ', error);
                              console.log('Form unmounted');
                            },
                            onCardTokenReceived: function onCardTokenReceived(error, token) {
                              if (error) {
                                alert(JSON.stringify(error));

                                _this5.util.showToast(error[0].message, 'danger', 'bottom');
                              }
                            },
                            onSubmit: function onSubmit(event) {
                              event.preventDefault();

                              _this5.util.show();

                              var _this5$cardForm$getCa = _this5.cardForm.getCardFormData(),
                                  payment_method_id = _this5$cardForm$getCa.paymentMethodId,
                                  issuer_id = _this5$cardForm$getCa.issuerId,
                                  email = _this5$cardForm$getCa.cardholderEmail,
                                  amount = _this5$cardForm$getCa.amount,
                                  token = _this5$cardForm$getCa.token,
                                  installments = _this5$cardForm$getCa.installments,
                                  identificationNumber = _this5$cardForm$getCa.identificationNumber,
                                  identificationType = _this5$cardForm$getCa.identificationType;

                              var data = {
                                token: token,
                                issuer_id: issuer_id,
                                payment_method_id: payment_method_id,
                                transaction_amount: Number(amount),
                                installments: Number(installments),
                                description: "Pago desde la aplicacion",
                                payer: {
                                  email: email,
                                  identification: {
                                    type: identificationType,
                                    number: identificationNumber
                                  }
                                }
                              };
                              var placeholder = {
                                card_number: _this5.card.card_number,
                                year: _this5.card.year,
                                month: _this5.card.month,
                                user_id: localStorage.getItem('uid')
                              };
                              var data_send = {
                                mp: data,
                                card: placeholder
                              };
                              fetch("https://api.mrmandados.xyz/mercadopago.php", {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json"
                                },
                                body: JSON.stringify(data_send)
                              }).then(function (res) {
                                return res.json();
                              }).then(function (res) {
                                if (res.status == 'approved') {
                                  _this5.makeOrder('mercadopago', 'fromApp');
                                } else {
                                  alert(JSON.stringify(res));

                                  _this5.errorMp(res);
                                }
                              })["catch"](function (err) {
                                console.log(err);
                              });
                            },
                            onFetching: function onFetching(resource) {
                              var progressBar = document.querySelector(".progress-bar");
                              progressBar.removeAttribute("value");
                              return function () {
                                progressBar.setAttribute("value", "0");
                              };
                            }
                          }
                        });
                      }, 500);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "errorMp",
          value: function errorMp(res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.util.findMessageByStatusDetail(res.status_detail, function (msg) {
                        _this6.util.hide();

                        _this6.util.showToast(msg ? msg : 'Algo salio mal', 'danger', 'bottom');
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var scheduleDataResponse;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      try {
                        scheduleDataResponse = JSON.parse(localStorage.getItem('scheduleData'));

                        if (!!scheduleDataResponse.time) {
                          this.scheduleData.time = scheduleDataResponse.time;
                        }
                      } catch (error) {}

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.cardForm.unmount();
          }
        }, {
          key: "filterItem",
          value: function filterItem() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var items;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      items = this.cart.cart.map(function (data) {
                        return {
                          name: data.name,
                          quantity: data.quantiy,
                          description: data.name,
                          unit_amount: {
                            currency_code: "MXN",
                            value: data.price
                          }
                        };
                      });
                      return _context7.abrupt("return", items);

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "jsonOrder",
          value: function jsonOrder() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.t0 = {
                        "email_address": this.util.userInfo.email,
                        "name": {
                          "given_name": this.util.userInfo.first_name,
                          "surname": this.util.userInfo.last_name
                        },
                        "phone": {
                          "phone_number": {
                            "national_number": this.util.userInfo.mobile
                          }
                        },
                        "address": {
                          "address_line_1": this.cart.deliveryAddress.address,
                          "address_line_2": this.cart.deliveryAddress.address,
                          "admin_area_2": "",
                          "admin_area_1": "",
                          "postal_code": "",
                          "country_code": "MX"
                        }
                      };
                      _context8.t1 = {
                        "currency_code": "MXN",
                        "value": this.cart.grandTotal,
                        "breakdown": {
                          "item_total": {
                            "currency_code": "MXN",
                            "value": this.cart.grandTotal
                          },
                          "discount": {
                            "value": this.cart.discount,
                            "currency_code": "MXN"
                          }
                        }
                      };
                      _context8.next = 4;
                      return this.filterItem();

                    case 4:
                      _context8.t2 = _context8.sent;
                      _context8.t3 = {
                        "amount": _context8.t1,
                        "items": _context8.t2
                      };
                      _context8.t4 = [_context8.t3];
                      return _context8.abrupt("return", {
                        payer: _context8.t0,
                        purchase_units: _context8.t4
                      });

                    case 8:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "hasSchedule",
          value: function hasSchedule() {
            return this.scheduleData.time !== null;
          }
        }, {
          key: "getPayments",
          value: function getPayments() {
            var _this7 = this;

            this.util.show();
            this.api.get('payments').then(function (data) {
              _this7.util.hide();

              if (data && data.status === 200 && data.data) {
                var info = data.data.filter(function (x) {
                  return x.status === '1';
                });

                if (info && info.length > 0) {
                  _this7.havePayment = true;
                  var stripe = info.filter(function (x) {
                    return x.id === '1';
                  });
                  _this7.haveStripe = stripe && stripe.length > 0 ? true : false;
                  var cod = info.filter(function (x) {
                    return x.id === '2';
                  });
                  _this7.haveCOD = cod && cod.length > 0 ? true : false;
                  var payPal = info.filter(function (x) {
                    return x.id === '3';
                  });
                  _this7.havePayPal = payPal && payPal.length > 0 ? true : false;
                  var razor = info.filter(function (x) {
                    return x.id === '4';
                  });
                  _this7.haveRazor = razor && razor.length > 0 ? true : false;
                  var paytm = info.filter(function (x) {
                    return x.id === '5';
                  });
                  _this7.havePayTM = paytm && paytm.length > 0 ? true : false;
                  var insta = info.filter(function (x) {
                    return x.id === '6';
                  });
                  _this7.haveInstamojo = insta && insta.length > 0 ? true : false;
                  var paystack = info.filter(function (x) {
                    return x.id === '7';
                  });
                  _this7.havepayStack = paystack && paystack.length > 0 ? true : false;
                  var flutterwave = info.filter(function (x) {
                    return x.id === '8';
                  });
                  _this7.haveflutterwave = flutterwave && flutterwave.length > 0 ? true : false;

                  if (_this7.haveStripe) {
                    if (stripe) {
                      var creds = JSON.parse(stripe[0].creds);

                      if (stripe[0].env === '1') {
                        _this7.util.stripe = creds.live;
                      } else {
                        _this7.util.stripe = creds.test;
                      }

                      _this7.util.stripeCode = creds && creds.code ? creds.code : 'MXN';
                    }
                  }

                  if (_this7.haveInstamojo) {
                    var datas = info.filter(function (x) {
                      return x.id === '6';
                    });
                    _this7.instaENV = datas[0].env;

                    if (insta) {
                      var instaPay = JSON.parse(datas[0].creds);
                      _this7.instamojo = instaPay;
                    }
                  }

                  if (_this7.haveRazor) {
                    var razorPay = info.filter(function (x) {
                      return x.id === '4';
                    });
                    var env = razorPay[0].env;

                    if (razorPay) {
                      var keys = JSON.parse(razorPay[0].creds);
                      _this7.razorKey = env === '0' ? keys.test : keys.live;
                    }
                  }

                  if (_this7.havepayStack) {
                    var _keys = JSON.parse(paystack[0].creds);

                    _this7.paystack = _keys;
                  }

                  if (_this7.haveflutterwave) {
                    var _keys2 = JSON.parse(flutterwave[0].creds);

                    _this7.flutterwave = _keys2;
                  }
                } else {
                  _this7.havePayment = false;

                  _this7.util.showToast(_this7.util.translate('No Payment Found'), 'danger', 'bottom');
                }
              } else {
                _this7.havePayment = false;

                _this7.util.showToast(_this7.util.translate('No Payment Found'), 'danger', 'bottom');
              }
            }, function (error) {
              _this7.util.hide();

              _this7.havePayment = false;

              _this7.util.showToast('Algo ha ido mal', 'danger', 'bottom');
            });
          }
        }, {
          key: "makeOrder",
          value: function makeOrder(method, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this8 = this;

              var param;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      param = {
                        address: JSON.stringify(this.cart.deliveryAddress),
                        applied_coupon: this.cart.coupon && this.cart.coupon.discount ? 1 : 0,
                        coupon_id: this.cart.coupon && this.cart.coupon.discount ? this.cart.coupon.id : 0,
                        pay_method: method,
                        did: '',
                        delivery_charge: this.cart.deliveryPrice,
                        discount: this.cart.discount,
                        grand_total: this.cart.grandTotal,
                        orders: JSON.stringify(this.cart.cart),
                        paid: key,
                        restId: this.cart.cartStoreInfo.uid,
                        serviceTax: this.cart.orderTax,
                        status: 'creada',
                        time: moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm:ss'),
                        total: this.cart.totalPrice,
                        uid: localStorage.getItem('uid'),
                        notes: this.cart.orderNotes,
                        schedule: this.hasSchedule() ? this.scheduleData.time : ''
                      };
                      this.api.post('orders/save', param).then(function (data) {
                        _this8.util.hide();

                        _this8.cart.orderNotes = '';

                        _this8.api.sendNotification('Nueva orden!', 'Nueva orden recibida', _this8.storeFCM);

                        _this8.util.publishNewOrder();

                        _this8.cart.clearCart();

                        var newProps = {};

                        if (_this8.hasSchedule()) {
                          newProps.schedule = true;
                        }

                        _this8.navCtrl.navigateRoot(['/success'], newProps);
                      }, function (error) {
                        _this8.util.hide();

                        _this8.util.showToast('Algo ha ido mal', 'danger', 'bottom');
                      });

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "getName",
          value: function getName() {
            return this.util.userInfo && this.util.userInfo.first_name ? this.util.userInfo.first_name + ' ' + this.util.userInfo.last_name : 'mr manda2';
          }
        }, {
          key: "getEmail",
          value: function getEmail() {
            return this.util.userInfo && this.util.userInfo.email ? this.util.userInfo.email : 'info@mrmandados.com';
          }
        }, {
          key: "createOrder",
          value: function createOrder() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this9 = this;

              var param;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      param = {
                        address: JSON.stringify(this.cart.deliveryAddress),
                        applied_coupon: this.cart.coupon && this.cart.coupon.discount ? 1 : 0,
                        coupon_id: this.cart.coupon && this.cart.coupon.discount ? this.cart.coupon.id : 0,
                        pay_method: 'cod',
                        did: '',
                        delivery_charge: this.cart.deliveryPrice,
                        discount: this.cart.discount,
                        grand_total: this.cart.grandTotal,
                        orders: JSON.stringify(this.cart.cart),
                        paid: 'none',
                        restId: this.cart.cartStoreInfo.uid,
                        serviceTax: this.cart.orderTax,
                        status: 'creada',
                        time: moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm:ss'),
                        total: this.cart.totalPrice,
                        uid: localStorage.getItem('uid'),
                        notes: this.cart.orderNotes
                      };
                      this.util.show();
                      this.api.post('orders/save', param).then(function (data) {
                        _this9.util.hide();

                        _this9.cart.orderNotes = '';

                        if (_this9.storeFCM && _this9.storeFCM !== '') {
                          _this9.api.sendNotification('Nueva orden recibida', 'Nueva orden!', _this9.storeFCM).subscribe(function (data) {}, function (error) {});

                          _this9.util.publishNewOrder();

                          _this9.cart.clearCart();

                          _this9.navCtrl.navigateRoot(['/success']);
                        }
                      }, function (error) {
                        _this9.util.hide();

                        _this9.util.showToast('Algo ha ido mal', 'danger', 'bottom');
                      });

                    case 3:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "back",
          value: function back() {
            this.util.back();
          }
        }, {
          key: "selectCard",
          value: function selectCard(type) {
            this.card.type = type;
            this.card.card_number = '';
            this.card.year = '';
            this.card.month = '';
            this.merchand();
          }
        }]);

        return PaymentsPage;
      }();

      PaymentsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }];
      };

      PaymentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payments',
        template: _raw_loader_payments_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payments_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])], PaymentsPage);
      /***/
    },

    /***/
    "cvkL":
    /*!***************************************************!*\
      !*** ./src/app/pages/payments/payments.module.ts ***!
      \***************************************************/

    /*! exports provided: PaymentsPageModule */

    /***/
    function cvkL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function () {
        return PaymentsPageModule;
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


      var _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./payments-routing.module */
      "WmLo");
      /* harmony import */


      var _payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./payments.page */
      "cKOx"); //


      var PaymentsPageModule = function PaymentsPageModule() {
        _classCallCheck(this, PaymentsPageModule);
      };

      PaymentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentsPageRoutingModule"]],
        declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsPage"]]
      })], PaymentsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-payments-payments-module-es5.js.map