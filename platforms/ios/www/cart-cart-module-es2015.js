(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "2Cor":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\">\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"mainContent\">\n    <div class=\"noData\" *ngIf=\"!cart.cart?.length\">\n      <img src=\"assets/runing.gif\" alt=\"\" class=\"noDataImg\">\n  \n      <ion-button (click)=\"getCart()\" expand=\"block\" fill=\"outline\">\n        Explora tus comercios favoritos\n      </ion-button>\n    </div>\n    <div *ngIf=\"cart.cart?.length\">\n      <ion-row style=\"padding-bottom: 10px; border-bottom: 1px solid lightgray;\"\n        *ngIf=\"cart.cartStoreInfo && cart.cartStoreInfo.cover && cart.cart[0].restId === cart.cartStoreInfo.uid\">\n        <ion-col size=\"4\">\n          <div class=\"image_div\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+cart.cartStoreInfo.cover+'),url(assets/placeholder.jpg)'}\">\n          </div>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"restname\">{{cart.cartStoreInfo.name}}</ion-label>\n          <ion-label class=\"address\">{{cart.cartStoreInfo.address}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <div class=\"card_div\">\n        <div class=\"card\" *ngFor=\"let item of cart.cart;let i = index\">\n          <div class=\"mainCat\" *ngIf=\"item.quantiy > 0 && !item.selectedItem?.length\">\n            <div class=\"image_div\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/placeholder.jpg)'}\"></div>\n            <div class=\"desc_div\">\n              <ion-label class=\"heading_lbl\">\n                {{ (item.name.length>20)? (item.name | slice:0:20)+'..':(item.name) }}\n              </ion-label>\n              <div class=\"ratting\">\n                <ion-icon [name]=\"item.ratting >= 1 ? 'star-outline':'star'\"\n                  [color]=\"item.ratting >= 1 ? 'warning':'medium'\">\n                </ion-icon>\n                <ion-icon [name]=\"item.ratting >= 2 ? 'star-outline':'star'\"\n                  [color]=\"item.ratting >= 2 ? 'warning':'medium'\">\n                </ion-icon>\n                <ion-icon [name]=\"item.ratting >= 3 ? 'star-outline':'star'\"\n                  [color]=\"item.ratting >= 3 ? 'warning':'medium'\">\n                </ion-icon>\n                <ion-icon [name]=\"item.ratting >= 4 ? 'star-outline':'star'\"\n                  [color]=\"item.ratting >= 4 ? 'warning':'medium'\">\n                </ion-icon>\n                <ion-icon [name]=\"item.ratting >= 5 ? 'star-outline':'star'\"\n                  [color]=\"item.ratting >= 5 ? 'warning':'medium'\">\n                </ion-icon>\n                ( {{totalRatting}} Calificaciones )\n              </div>\n              <ion-label class=\"small_lbl\">\n                {{ (item.details.length>30)? (item.details | slice:0:30)+'..':(item.details) }}\n              </ion-label>\n              <ion-label class=\"heading_lbl\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{item.price}}</ion-label>\n              <ion-label class=\"heading_lbl\" *ngIf=\"util.cside ==='right'\"> {{item.price}} {{util.currecny}}</ion-label>\n            </div>\n            <div class=\"cartBtn2\">\n              <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n                <ion-icon name=\"remove\"></ion-icon>\n              </ion-button>\n              <p class=\"qunitity\">{{item.quantiy}}</p>\n              <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n                <ion-icon name=\"add\"></ion-icon>\n              </ion-button>\n            </div>\n          </div>\n\n          <div *ngIf=\"item.quantiy > 0 && item.selectedItem?.length\">\n            <div class=\"mainCat\" *ngFor=\"let subItems of item.selectedItem;let j = index\"\n              style=\"margin: 10px 0px !important;\">\n              <div class=\"image_div\"\n                [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/placeholder.jpg)'}\">\n              </div>\n              <div class=\"desc_div\">\n                <ion-label class=\"heading_lbl\">{{item.name}}</ion-label>\n                <p *ngFor=\"let addods of subItems.item\" style=\"margin: 0px;font-size: 10px;color: black;\">\n                  - {{addods.name}}\n                  <span style=\"color: black;\" *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{addods.value}}</span>\n                  <span style=\"color: black;\" *ngIf=\"util.cside ==='right'\"> {{addods.value}} {{util.currecny}}</span>\n                </p>\n              </div>\n              <div class=\"cartBtn2\">\n                <ion-button (click)=\"removeQAddos(i,j)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"remove\"></ion-icon>\n                </ion-button>\n                <p class=\"qunitity\">{{subItems.total}}</p>\n                <ion-button (click)=\"addQAddos(i,j)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <ion-textarea style=\"font-size: 12px;background: #f3f3f3; padding-left: 1%;\" [(ngModel)]=\"cart.orderNotes\"\n        [placeholder]=\"('Instrucciones especializadas para tu pedido (Ejemplo: Quiero mi hamburguesa sin mayonesa...)')\" rows=\"5\"></ion-textarea>\n      <div class=\"coupones\" (click)=\"openCoupon()\" *ngIf=\"!cart.coupon\">\n        <img src=\"assets/discount.png\" class=\"badge\" />\n        <ion-label class=\"title\">Cupones <br>\n        </ion-label>\n      </div>\n\n      <div class=\"coupones\" *ngIf=\"cart.coupon && cart.coupon.code\">\n        <ion-label class=\"title\" *ngIf=\"cart.coupon && cart.coupon.code\">Cupón aplicado<br>\n        </ion-label>\n        <ion-icon name=\"close-circle-outline\" (click)=\"cart.coupon = null;cart.calcuate()\" class=\"closedIcon\">\n        </ion-icon>\n      </div>\n\n      <div class=\"billing\">\n        <div class=\"singleRow\">\n          <ion-label class=\"headerTitle\">Total productos</ion-label>\n          <ion-label class=\"price\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{cart.totalPrice}}</ion-label>\n          <ion-label class=\"price\" *ngIf=\"util.cside ==='right'\"> {{cart.totalPrice}} {{util.currecny}}</ion-label>\n        </div>\n        <div class=\"singleRow\" *ngIf=\"cart.discount && cart.coupon\">\n          <ion-label class=\"headerTitle\">Descuento</ion-label>\n          <ion-label class=\"price\" *ngIf=\"util.cside ==='left'\"> - {{util.currecny}} {{cart.discount}}</ion-label>\n          <ion-label class=\"price\" *ngIf=\"util.cside ==='right'\"> - {{cart.discount}} {{util.currecny}} </ion-label>\n        </div>\n     \n\n      </div>\n      <p class=\"instructions\">\n      \n      </p>\n    </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"cart.cart?.length\" (click)=\"checkout()\">\n  <ion-toolbar color=\"primary\">\n    <ion-label color=\"light\">{{cart.totalItem}} Productos</ion-label>\n    <ion-label color=\"light\" *ngIf=\"util.cside ==='left'\"> {{util.currecny}}{{cart.grandTotal}}\n      Total</ion-label>\n    <ion-label color=\"light\" *ngIf=\"util.cside ==='right'\">\n      {{cart.totalPrice}} {{util.currecny}} Total</ion-label>\n    <ion-button slot=\"end\" fill=\"clear\" color=\"light\">\n      Continuar\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "Y+Iu":
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.page */ "rqSi");

//



const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CartPageRoutingModule);



/***/ }),

/***/ "rqSi":
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.page.html */ "2Cor");
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.page.scss */ "vwaP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");



//






let CartPage = class CartPage {
    constructor(api, router, util, navCtrl, chMod, cart) {
        this.api = api;
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.chMod = chMod;
        this.cart = cart;
        this.totalRatting = 0;
        this.util.getCouponObservable().subscribe(data => {
            if (data) {
                // console.log('------------->>', data);
            }
        });
        this.cart.orderNotes = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        setTimeout(() => {
            if (this.cart.cart.length) {
                this.getVenueDetails();
            }
        }, 1500);
    }
    validate() {
    }
    getVenueDetails() {
        const body = {
            id: this.cart.cart[0].restId
        };
        this.api.post('stores/getByUid', body).then((datas) => {
            // console.log(datas);
            if (datas && datas.status === 200 && datas.data.length > 0) {
                const data = datas.data[0];
                this.cart.cartStoreInfo = data;
                // console.log('data-->>');
                this.name = data.name;
                this.descritions = data.descritions;
                this.cover = data.cover;
                this.address = data.address;
                this.time = data.time;
                this.totalRatting = data.totalRatting;
            }
        }, error => {
            // console.log(error);
            this.util.errorToast('Algo ha ido mal');
        }).catch(error => {
            // console.log(error);
            this.util.errorToast('Algo ha ido mal');
        });
    }
    getCart() {
        this.navCtrl.navigateRoot(['tabs/tab1']);
    }
    addQ(index) {
        // console.log(this.cart.cart[index]);
        this.cart.cart[index].quantiy = this.cart.cart[index].quantiy + 1;
        this.cart.calcuate();
    }
    removeQ(index) {
        if (this.cart.cart[index].quantiy !== 0) {
            this.cart.cart[index].quantiy = this.cart.cart[index].quantiy - 1;
            if (this.cart.cart[index].quantiy === 0) {
                this.cart.removeItem(this.cart.cart[index].id);
            }
        }
        else {
            this.cart.cart[index].quantiy = 0;
            if (this.cart.cart[index].quantiy === 0) {
                this.cart.removeItem(this.cart.cart[index].id);
            }
        }
        this.cart.calcuate();
    }
    changeAddress() {
        if (this.cart.totalPrice < this.cart.minOrderPrice) {
            let text;
            if (this.util.cside === 'left') {
                text = this.util.currecny + ' ' + this.cart.minOrderPrice;
            }
            else {
                text = this.cart.minOrderPrice + ' ' + this.util.currecny;
            }
            this.util.errorToast(this.util.translate('Minimum order amount must be ') + text + this.util.translate(' or more'));
            return false;
        }
        const navData = {
            queryParams: {
                from: 'cart'
            }
        };
        this.router.navigate(['choose-address'], navData);
    }
    checkout() {
        if (this.cart.totalPrice < this.cart.minOrderPrice) {
            let text;
            if (this.util.cside === 'left') {
                text = this.util.currecny + ' ' + this.cart.minOrderPrice;
            }
            else {
                text = this.cart.minOrderPrice + ' ' + this.util.currecny;
            }
            this.util.errorToast('El valor mínimo de compra es de:' + text + 'o más');
            return false;
        }
        const navData = {
            queryParams: {
                from: 'cart'
            }
        };
        this.router.navigate(['choose-address'], navData);
        // this.router.navigate(['payments']);
    }
    openCoupon() {
        const navData = {
            queryParams: {
                restId: this.cart.cart[0].restId,
                name: this.name,
                totalPrice: this.cart.totalPrice
            }
        };
        this.router.navigate(['coupons'], navData);
    }
    removeQAddos(i, j) {
        // console.log(this.cart.cart[i].selectedItem[j]);
        if (this.cart.cart[i].selectedItem[j].total !== 0) {
            this.cart.cart[i].selectedItem[j].total = this.cart.cart[i].selectedItem[j].total - 1;
            if (this.cart.cart[i].selectedItem[j].total === 0) {
                const newCart = [];
                this.cart.cart[i].selectedItem.forEach(element => {
                    if (element.total > 0) {
                        newCart.push(element);
                    }
                });
                // console.log('newCart', newCart);
                this.cart.cart[i].selectedItem = newCart;
                this.cart.cart[i].quantiy = newCart.length;
                if (this.cart.cart[i].quantiy === 0) {
                    this.cart.removeItem(this.cart.cart[i].id);
                }
            }
        }
        this.cart.calcuate();
    }
    addQAddos(i, j) {
        // console.log(this.cart.cart[i].selectedItem[j]);
        this.cart.cart[i].selectedItem[j].total = this.cart.cart[i].selectedItem[j].total + 1;
        this.cart.calcuate();
    }
};
CartPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"] }
];
CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]])
], CartPage);



/***/ }),

/***/ "sFz8":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-routing.module */ "Y+Iu");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "rqSi");

//






let CartPageModule = class CartPageModule {
};
CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"],
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })
], CartPageModule);



/***/ }),

/***/ "vwaP":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  display: block;\n}\n\nion-toolbar {\n  padding: 0px 10px;\n  font-weight: bold;\n}\n\nion-toolbar ion-button {\n  font-weight: bold;\n}\n\n.mainContent {\n  padding: 20px 0px;\n}\n\n.mainContent ion-label {\n  display: block;\n}\n\n.mainContent .noData {\n  text-align: center;\n  margin-top: 30%;\n}\n\n.mainContent .noData .noDataImg {\n  width: 100%;\n}\n\n.mainContent .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.mainContent .restname {\n  margin-top: 10px;\n  font-size: 1rem;\n  color: black;\n  font-weight: bold;\n}\n\n.mainContent .address {\n  font-size: 0.8rem;\n  color: lightgray;\n}\n\n.mainContent .deliveryAddress {\n  display: flex;\n  padding: 20px 10px 0px 10px;\n  background: #f3f3f3;\n  margin-top: 10px;\n}\n\n.mainContent .deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.mainContent .deliveryAddress .changeAddress {\n  color: var(--ion-color-primary);\n}\n\n.mainContent .card_div {\n  padding-top: 10px;\n}\n\n.mainContent .card_div .card {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  padding: 5px 10px;\n}\n\n.mainContent .card_div .card .mainCat {\n  display: flex;\n}\n\n.mainContent .card_div .card .mainCat .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 80px;\n  height: 80px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div {\n  margin-left: 20px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .heading_lbl {\n  font-size: 14px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .ratting {\n  font-size: 10px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .small_lbl {\n  font-size: 8px;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn {\n  position: absolute;\n  right: 15px;\n  width: 60px;\n  background: white;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: flex;\n  background: white;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n\n.mainContent .coupones {\n  display: flex;\n  padding: 20px 10px;\n  background: #f3f3f3;\n  margin-top: 10px;\n}\n\n.mainContent .coupones .badge {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .coupones .closedIcon {\n  position: absolute;\n  right: 10px;\n}\n\n.mainContent .coupones .title {\n  padding: 0px 10px;\n  color: var(--ion-color-primary);\n}\n\n.mainContent .billing {\n  padding: 5px 10px;\n}\n\n.mainContent .billing .singleRow {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0px;\n  border-bottom: 1px dashed lightgray;\n}\n\n.mainContent .billing .singleRow .headerTitle {\n  font-size: 0.8rem;\n}\n\n.mainContent .billing .singleRow .boldClass {\n  font-weight: bold;\n}\n\n.mainContent .billing .singleRow .headerTotal {\n  font-size: 1rem;\n}\n\n.mainContent .billing .singleRow .priceTotal {\n  font-size: 1rem;\n}\n\n.mainContent .billing .singleRow .price {\n  font-size: 0.8rem;\n}\n\n.mainContent .instructions {\n  color: var(--ion-color-primary);\n  padding: 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUFJO0VBQ0ksaUJBQUE7QUFFUjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBREk7RUFDSSxjQUFBO0FBR1I7O0FBREk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFHUjs7QUFEUTtFQUNJLFdBQUE7QUFHWjs7QUFBSTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFFUjs7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUVSOztBQUFJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUVSOztBQUFJO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVSOztBQURRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFHWjs7QUFEUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBR1o7O0FBRFE7RUFDSSwrQkFBQTtBQUdaOztBQUFJO0VBQ0ksaUJBQUE7QUFFUjs7QUFEUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUdaOztBQUZZO0VBQ0ksYUFBQTtBQUloQjs7QUFGZ0I7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSXBCOztBQUZnQjtFQUNJLGlCQUFBO0FBSXBCOztBQUhvQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFLeEI7O0FBSG9CO0VBQ0ksZUFBQTtBQUt4Qjs7QUFIb0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFLeEI7O0FBRmdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSXBCOztBQUZnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFJcEI7O0FBSG9CO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBS3hCOztBQUNJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUFRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFWjs7QUFBUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUVaOztBQUFRO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtBQUVaOztBQUNJO0VBQ0ksaUJBQUE7QUFDUjs7QUFBUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7QUFFWjs7QUFEWTtFQUNJLGlCQUFBO0FBR2hCOztBQURZO0VBQ0ksaUJBQUE7QUFHaEI7O0FBRFk7RUFDSSxlQUFBO0FBR2hCOztBQURZO0VBQ0ksZUFBQTtBQUdoQjs7QUFEWTtFQUNJLGlCQUFBO0FBR2hCOztBQUNJO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtBQUNSIiwiZmlsZSI6ImNhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgLy9cbmlvbi1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbi5tYWluQ29udGVudCB7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5ub0RhdGEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwJTtcblxuICAgICAgICAubm9EYXRhSW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pbWFnZV9kaXYge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgICAucmVzdG5hbWUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5hZGRyZXNzIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgfVxuICAgIC5kZWxpdmVyeUFkZHJlc3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIC5waW4ge1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFkZHJlc3Mge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYW5nZUFkZHJlc3Mge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZF9kaXYge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgLm1haW5DYXQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICAuaW1hZ2VfZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGVzY19kaXYge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmdfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucmF0dGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNtYWxsX2xibCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNhcnRCdG4ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jYXJ0QnRuMiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgLnF1bml0aXR5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jb3Vwb25lcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgLmJhZGdlIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZWRJY29uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJpbGxpbmcge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgLnNpbmdsZVJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIC5oZWFkZXJUaXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm9sZENsYXNzIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXJUb3RhbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaWNlVG90YWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmluc3RydWN0aW9ucyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map