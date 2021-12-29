(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"],{

/***/ "ADuP":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-content>\n  <div class=\"mainContent\">\n\n    <div class=\"restContent\" [ngStyle]=\"{'background-image':'url('+api.mediaURL+cover+'),url(assets/placeholder.jpg)'}\">\n      <div class=\"btnss\">\n        <ion-icon (click)=\"back()\" class=\"backIcon\" color=\"light\" slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n      </div>\n      \n    </div>\n\n\n    <div class=\"foodsContent\">\n      <ion-label class=\"restname\">{{name}}</ion-label>\n      <div class=\"informacion\">\n        <p class=\"horario\">Horario</p>\n        <p class=\"horario2\">{{openTime}} - {{closeTime}}  </p>\n        <p class=\"horario\">Tiempo</p>\n        <p class=\"horario2\">{{time}} min</p>\n      </div>\n  \n<div class=\"div_searchbar\">\n      <ion-searchbar \n       animated=\"true\" mode=\"ios\"\n      type=\"text\"\n      class=\"search\"\n      name=\"search-product\"\n      [placeholder]=\"'Buscar productos'\"\n      [(ngModel)]=\"searchByProduct\"\n      (ngModelChange)=\"changeFilters()\"\n      >\n\n      </ion-searchbar>\n</div>\n\n\n\n\n      <div *ngIf=\"categories?.length\">\n        <ion-segment #content (ionChange)=\"segmentChanged()\" scrollable [(ngModel)]=\"caetId\" mode=\"md\">\n          <ion-segment-button [value]=\"item.id\" [id]=\"item.id\" *ngFor=\"let item of categories\">\n            <ion-label> {{item.name}} </ion-label>\n          </ion-segment-button>\n        </ion-segment>\n        \n\n        <div class=\"card_div\">\n          <div class=\"card\" *ngFor=\"let item of filteredProducts;let i = index\">\n            <div class=\"mainCat\">\n              <img ionImgViewer [src]=\"api.mediaURL+item.cover\" class=\"image_div\" onError=\"this.src='assets/placeholder.jpg'\"\n                [alt]=\"item.name\">\n              <div class=\"desc_div\">\n                <ion-label class=\"heading_lbl\">\n                  {{ (item.name.length>20)? (item.name | slice:0:20)+'..':(item.name) }}\n                </ion-label>\n                <ion-label class=\"small_lbl\">\n                  {{ (item.details.length>30)? (item.details | slice:0:30)+'..':(item.details) }}\n                </ion-label>\n                <ion-label class=\"heading_lbl\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{item.price}}</ion-label>\n                <ion-label class=\"heading_lbl\" *ngIf=\"util.cside ==='right'\"> {{item.price}} {{util.currecny}}\n                </ion-label>\n              </div>\n              <div class=\"cartBtn\" *ngIf=\"!cart.itemId.includes(item.id)\">\n                <ion-label class=\"btns\" (click)=\"add(i)\">Añadir</ion-label>\n                <ion-label *ngIf=\"item && item.variations && item.variations?.length\" style=\"font-size: 8px;\">\n                  Personalizable</ion-label>\n              </div>\n              <div class=\"cartBtn2\" *ngIf=\"cart.itemId.includes(item.id)\">\n                <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"remove\"></ion-icon>\n                </ion-button>\n                <p class=\"qunitity\">{{item.quantiy}}</p>\n                <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n\n\n      \n      <div *ngFor=\"let item of dummy\">\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n\n    </div>\n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"presentPopover($event)\">\n    <ion-fab-button color=\"light\" mode=\"ios\">\n      <ion-icon name=\"list\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">{{util.translate('Menu')}}</ion-label>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n<ion-footer *ngIf=\"cart.cart.length && cart.cart.length > 0\" (click)=\"viewCart()\">\n  <ion-toolbar color=\"primary\">\n    <ion-label color=\"light\">{{cart.totalItem}} Productos</ion-label>\n    <ion-label color=\"light\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{cart.totalPrice}} total</ion-label>\n    <ion-label color=\"light\" *ngIf=\"util.cside ==='right'\">{{cart.totalPrice}} {{util.currecny}} total</ion-label>\n    <ion-button slot=\"end\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\n      Continuar\n    </ion-button>\n    <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "FTWP":
/*!*************************************************!*\
  !*** ./src/app/pages/category/category.page.ts ***!
  \*************************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category.page.html */ "ADuP");
/* harmony import */ var _category_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.page.scss */ "cJis");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/menu/menu.component */ "0oYm");
/* harmony import */ var _variations_variations_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../variations/variations.page */ "blxb");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");



//









let CategoryPage = class CategoryPage {
    constructor(route, api, util, navCtrl, alertController, router, popoverController, modalCtrl, cart, chMod) {
        this.route = route;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.router = router;
        this.popoverController = popoverController;
        this.modalCtrl = modalCtrl;
        this.cart = cart;
        this.chMod = chMod;
        this.cover = '';
        this.cusine = [];
        this.foods = [];
        this.dummyFoods = [];
        this.categories = [];
        this.dummy = Array(5);
        this.deliveryAddress = '';
        this.closeTime = '';
        this.openTime = '';
        this.searchByProduct = '';
        this.filteredProducts = [];
        this.noVariantCart = [];
        this.route.queryParams.subscribe(data => {
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.getVenueDetails();
            }
        });
    }
    ngOnInit() {
    }
    changeFilters() {
        const raw = this.foods;
        const value = this.searchByProduct.trim().toLowerCase();
        const newData = raw.filter((item) => {
            let validation = false;
            try {
                validation = (!!(new RegExp(value, 'g')).exec(item.name));
            }
            catch (error) {
            }
            return validation;
        });
        this.filteredProducts = value !== '' ? newData : raw;
    }
    getVenueDetails() {
        const body = {
            id: this.id
        };
        this.api.post('stores/getByUid', body).then((datas) => {
            if (datas && datas.status === 200 && datas.data.length > 0) {
                const data = datas.data[0];
                if (data) {
                    this.cart.cartStoreInfo = data;
                    this.name = data.name;
                    this.descritions = data.descriptions;
                    this.cover = data.cover;
                    this.address = data.address;
                    this.ratting = data.rating ? data.rating : 0;
                    this.totalRatting = data.total_rating ? data.total_rating : 0;
                    this.dishPrice = data.dish;
                    this.time = data.time;
                    if (data.cusine && data.cusine !== '') {
                        this.cusine = JSON.parse(data.cusine);
                    }
                    else {
                        this.cusine = [];
                    }
                    this.chMod.detectChanges();
                    this.getCates();
                }
                else {
                    this.util.errorToast('Restaurant not found');
                    this.navCtrl.back();
                }
            }
            else {
                this.dummy = [];
            }
        }, error => {
            this.util.errorToast('Algo ha ido mal');
        }).catch(error => {
            this.util.errorToast('Algo ha ido mal');
        });
    }
    getCates() {
        const param = {
            id: this.id
        };
        this.api.post('categories/getByRestId', param).then((data) => {
            if (data && data.status === 200 && data.data.length) {
                data.data = data.data.filter(x => x.status === '1');
                this.categories = data.data;
                this.caetId = this.categories[0].id;
                this.getFoodByCid();
            }
            else {
                this.dummy = [];
            }
        }, error => {
            this.dummy = [];
            this.util.errorToast('Algo ha ido mal');
        }).catch(error => {
            this.dummy = [];
            this.util.errorToast('Algo ha ido mal');
        });
    }
    getFoodByCid() {
        const param = {
            id: this.id,
            cid: this.caetId
        };
        this.dummy = Array(5);
        this.foods = [];
        this.api.post('products/getFoodByCid', param).then((data) => {
            this.dummy = [];
            if (data && data.status === 200 && data.data.length > 0) {
                data.data = data.data.filter(x => x.status === '1');
                data.data.forEach(element => {
                    if (element.variations && element.variations !== '' && typeof element.variations === 'string') {
                        element.variations = JSON.parse(element.variations);
                    }
                    else {
                        element.variations = [];
                    }
                    if (this.cart.itemId.includes(element.id)) {
                        const index = this.cart.cart.filter(x => x.id === element.id);
                        if (index && index.length) {
                            element['quantiy'] = index[0].quantiy;
                            element['selectedItem'] = index[0].selectedItem;
                        }
                        else {
                            element['quantiy'] = 0;
                            element['selectedItem'] = [];
                        }
                    }
                    else {
                        element['quantiy'] = 0;
                        element['selectedItem'] = [];
                    }
                });
                this.foods = data.data;
                this.filteredProducts = this.foods;
                this.dummyFoods = data.data;
                this.chMod.detectChanges();
            }
        }, error => {
            this.dummy = [];
            this.util.errorToast('Algo ha ido mal');
        }).catch(error => {
            this.dummy = [];
            this.util.errorToast('Algo ha ido mal');
        });
    }
    segmentChanged() {
        this.getFoodByCid();
    }
    getFoods() {
    }
    back() {
        this.navCtrl.back();
    }
    getCusine(cusine) {
        return cusine.join('-');
    }
    add(index) {
        const uid = localStorage.getItem('uid');
        if (uid && uid != null && uid !== 'null') {
            if (this.cart.cart.length === 0) {
                if (this.foods[index].variations && this.foods[index].variations.length) {
                    this.openVariations(index);
                }
                else {
                    this.foods[index].quantiy = 1;
                    this.cart.addItem(this.foods[index]);
                }
            }
            else {
                const restIds = this.cart.cart.filter(x => x.restId === this.id);
                if (restIds && restIds.length > 0) {
                    if (this.foods[index].variations && this.foods[index].variations.length) {
                        this.openVariations(index);
                    }
                    else {
                        this.foods[index].quantiy = 1;
                        this.cart.addItem(this.foods[index]);
                    }
                }
                else {
                    this.dummy = [];
                    this.presentAlertConfirm();
                }
            }
            this.chMod.detectChanges();
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    getQuanity(id) {
        const data = this.cart.cart.filter(x => x.id === id);
        return data[0].quantiy;
    }
    statusChange() {
        const value = this.veg === true ? '1' : '0';
        this.changeStatus(value);
    }
    changeStatus(value) {
        this.foods = this.dummyFoods.filter(x => x.veg === value);
        this.chMod.detectChanges();
    }
    addQ(index) {
        if (this.foods[index].variations && this.foods[index].variations.length) {
            if (this.foods[index].quantiy !== 0) {
            }
            this.openVariations(index);
        }
        else {
            this.foods[index].quantiy = this.foods[index].quantiy + 1;
            this.cart.addQuantity(this.foods[index].quantiy, this.foods[index].id);
            this.chMod.detectChanges();
        }
    }
    removeQ(index) {
        if (this.foods[index].quantiy !== 0) {
            if (this.foods[index].quantiy >= 1 && !this.foods[index].variations.length) {
                this.foods[index].quantiy = this.foods[index].quantiy - 1;
                if (this.foods[index].quantiy === 0) {
                    this.foods[index].quantiy = 0;
                    this.cart.removeItem(this.foods[index].id);
                }
                else {
                    this.cart.addQuantity(this.foods[index].quantiy, this.foods[index].id);
                }
                this.chMod.detectChanges();
            }
            else {
                this.openVariations(index);
            }
        }
        else {
            this.foods[index].quantiy = 0;
            this.cart.removeItem(this.foods[index].id);
            this.chMod.detectChanges();
        }
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.util.translate('Warning'),
                message: this.util.translate(`Ya tienes artículos en el carrito con un restaurante diferente`),
                buttons: [
                    {
                        text: this.util.translate('Cancelar'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: this.util.translate('Vaciar carrito'),
                        handler: () => {
                            this.cart.clearCart();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openVariations(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _variations_variations_page__WEBPACK_IMPORTED_MODULE_9__["VariationsPage"],
                cssClass: 'custom_modal2',
                componentProps: {
                    name: this.name,
                    food: this.foods[index]
                }
            });
            modal.onDidDismiss().then((data) => {
                let isValid = false;
                if (data.role === 'new') {
                    this.foods[index].quantiy = 1;
                    const carts = {
                        item: data.data,
                        total: 1
                    };
                    this.foods[index].selectedItem.push(carts);
                    this.cart.addVariations(this.foods[index], carts, data.role);
                    isValid = true;
                }
                else if (data.role === 'sameChoice') {
                    this.foods[index].selectedItem = data.data;
                    this.foods[index].quantiy = this.foods[index].selectedItem.length;
                    if (this.foods[index].quantiy === 0) {
                        this.foods[index].quantiy = 0;
                        this.cart.removeItem(this.foods[index].id);
                    }
                    else {
                        this.cart.addVariations(this.foods[index], 'carts', data.role);
                        isValid = true;
                    }
                }
                else if (data.role === 'newCustom') {
                    const carts = {
                        item: data.data,
                        total: 1
                    };
                    this.foods[index].selectedItem.push(carts);
                    this.foods[index].quantiy = this.foods[index].quantiy + 1;
                    this.cart.addVariations(this.foods[index], carts, data.role);
                    isValid = true;
                }
                else if (data.role === 'remove') {
                    this.foods[index].quantiy = 0;
                    this.foods[index].selectedItem = [];
                    isValid = true;
                }
                else if (data.role === 'dismissed') {
                    this.foods[index].quantiy = 1;
                    const carts = {
                        item: data.data,
                        total: 1
                    };
                    this.foods[index].selectedItem.push(carts);
                    this.cart.addVariations(this.foods[index], carts, 'new');
                    isValid = true;
                }
                if (isValid) {
                    this.cart.calcuate();
                }
            });
            return yield modal.present();
        });
    }
    viewCart() {
        this.navCtrl.navigateRoot(['tabs/tab3']);
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.categories.length <= 0) {
                return false;
            }
            const popover = yield this.popoverController.create({
                component: src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                event: ev,
                componentProps: { data: this.categories, id: this.caetId },
                mode: 'ios',
            });
            popover.onDidDismiss().then(data => {
                if (data && data.data) {
                    this.caetId = data.data.id;
                    document.getElementById(this.caetId).scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                }
            });
            yield popover.present();
        });
    }
    openDetails() {
        const navData = {
            queryParams: {
                id: this.id
            }
        };
        this.router.navigate(['rest-details'], navData);
    }
    category() {
        const param = {
            id: localStorage.getItem('uid')
        };
        this.api.post('categories/getByRestId', param).then((data) => {
            if (data && data.status === 200 && data.data.length) {
                this.categories = data.data;
                this.caetId = this.categories[0].id;
                this.getFoodByCid();
            }
            else {
                this.dummy = [];
            }
        }, error => {
            this.dummy = [];
            this.util.errorToast('Algo ha ido mal');
        }).catch(error => {
            this.dummy = [];
            this.util.errorToast('Algo ha ido mal');
        });
    }
    onSearchChange(event) {
        if (event.detail.value) {
        }
        else {
            this.category();
        }
    }
};
CategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
CategoryPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['content', { static: true },] }]
};
CategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category',
        template: _raw_loader_category_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], CategoryPage);



/***/ }),

/***/ "GxF5":
/*!***********************************************************!*\
  !*** ./src/app/pages/category/category-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function() { return CategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.page */ "FTWP");

//



const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryPageRoutingModule);



/***/ }),

/***/ "cJis":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button {\n  --border-radius: 10px;\n  --padding: 10px;\n  width: 80px;\n}\n\nion-label {\n  display: block;\n}\n\nion-toolbar {\n  padding: 0px 10px;\n  font-weight: bold;\n}\n\nion-toolbar ion-button {\n  font-weight: bold;\n}\n\n.div_searchbar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 8px;\n}\n\n.div_searchbar .search_bar {\n  padding: 0px;\n  width: 100%;\n}\n\n.wrapper-search {\n  margin-bottom: 30px;\n}\n\n.wrapper-search .search {\n  position: relative;\n  border: 0;\n  height: 40px;\n  border-radius: 3px;\n  padding-left: 15px;\n  box-shadow: 0 0 0 0.15rem rgba(0, 0, 0, 0.05);\n  width: 100%;\n}\n\n.mainContent .restContent {\n  width: 100%;\n  height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.mainContent .restContent .btnss {\n  background-image: linear-gradient(-230deg, #17181a63, #827777) !important;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  padding: 10px;\n  height: 150px;\n}\n\n.mainContent .restContent .btnss .backIcon {\n  font-size: 2rem;\n}\n\n.mainContent .restContent .btnss .moreInfo {\n  color: white;\n  font-weight: bold;\n}\n\n.mainContent .foodsContent {\n  position: absolute;\n  background: white;\n  height: 100%;\n  top: 100px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  width: 100%;\n  padding: 10px;\n}\n\n.mainContent .foodsContent .restname {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .cusine {\n  font-size: 1rem;\n  color: lightgray;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .ratting {\n  font-size: 1rem;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .deliveryAddress {\n  display: flex;\n  padding: 20px 10px 0px 10px;\n}\n\n.mainContent .foodsContent .deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .foodsContent .deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.mainContent .foodsContent .vegSection {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.mainContent .foodsContent .cateTitle {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .card_div .card {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  padding: 5px 10px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat {\n  display: flex;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 80px !important;\n  height: 80px !important;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div {\n  margin-left: 20px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .heading_lbl {\n  font-size: 13px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .ratting {\n  font-size: 10px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .small_lbl {\n  margin-top: 8px;\n  font-size: 12px;\n  color: gray;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn {\n  position: absolute;\n  right: 15px;\n  width: 60px;\n  background: white;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn .btns {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 10px;\n  padding: 2px;\n  font-size: 12px;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: flex;\n  background: transparent;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n\n.informacion {\n  display: flex;\n  padding: 0px 50px 0px 10px;\n}\n\n.informacion .horario {\n  color: gray;\n  font-size: 0.8rem;\n  margin-left: 15px;\n}\n\n.informacion .horario2 {\n  font-size: 0.7rem;\n  margin-left: 15px;\n  margin-top: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRztFQUNDLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFESTtFQUNJLGlCQUFBO0FBR1I7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDUjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBRUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsV0FBQTtBQUFOOztBQUtJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFGUjs7QUFHUTtFQUNJLHlFQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBRFo7O0FBRVk7RUFJSSxlQUFBO0FBSGhCOztBQUtZO0VBSUksWUFBQTtFQUNBLGlCQUFBO0FBTmhCOztBQVVJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBVFI7O0FBVVE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUlo7O0FBVVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVJaOztBQVVRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBUlo7O0FBVVE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7QUFSWjs7QUFTWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBUGhCOztBQVNZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFQaEI7O0FBVVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBUlo7O0FBVVE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUlo7O0FBV1k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFUaEI7O0FBVWdCO0VBQ0ksYUFBQTtBQVJwQjs7QUFTb0I7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFQeEI7O0FBU29CO0VBQ0ksaUJBQUE7QUFQeEI7O0FBUXdCO0VBRUksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVA1Qjs7QUFTd0I7RUFFSSxlQUFBO0FBUjVCOztBQVV3QjtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVI1Qjs7QUFXb0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFUeEI7O0FBVXdCO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQVI1Qjs7QUFXb0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBVHhCOztBQVV3QjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQVI1Qjs7QUFtQkE7RUFFSSxhQUFBO0VBQ0EsMEJBQUE7QUFqQko7O0FBb0JJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFsQlI7O0FBb0JJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBbEJSIiwiZmlsZSI6ImNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgIC8vXG4gICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC0tcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogODBweDtcbn1cbmlvbi1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuLmRpdl9zZWFyY2hiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuXG4gICAgLnNlYXJjaF9iYXIge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLndyYXBwZXItc2VhcmNoIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBcbiAgICAuc2VhcmNoIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIC4xNXJlbSByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuLm1haW5Db250ZW50IHtcbiAgICAucmVzdENvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAuYnRuc3Mge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0yMzBkZWcsICMxNzE4MWE2MywgIzgyNzc3NykgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAuYmFja0ljb24ge1xuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAvLyBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIC8vIHRvcDogNDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9yZUluZm8ge1xuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAvLyByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAvLyB0b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5mb29kc0NvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC8vIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLnJlc3RuYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmN1c2luZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yYXR0aW5nIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZGVsaXZlcnlBZGRyZXNzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgICAgICAgICAucGluIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWRkcmVzcyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC52ZWdTZWN0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXRlVGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZF9kaXYge1xuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgICAubWFpbkNhdCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZV9kaXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kZXNjX2RpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nX2xibCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJhdHRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbWFsbF9sYmwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FydEJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnRucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FydEJ0bjIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdW5pdGl0eSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLmluZm9ybWFjaW9ue1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwcHggNTBweCAwcHggMTBweDtcblxuICAgIFxuICAgIC5ob3Jhcmlve1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIH1cbiAgICAuaG9yYXJpbzJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICB9IFxufVxuXG5cblxuIl19 */");

/***/ }),

/***/ "iCz4":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-routing.module */ "GxF5");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "FTWP");
/* harmony import */ var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/menu/menu.component */ "0oYm");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "6g0+");

//









let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_9__["NgxIonicImageViewerModule"]
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
    })
], CategoryPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-category-category-module-es2015.js.map