(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-forgot-module"],{

/***/ "EK+f":
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  padding: 30px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  padding: 10px;\n}\n.main_content_div .iconDiv {\n  text-align: center;\n}\n.main_content_div .iconDiv .icon {\n  width: 60px;\n}\n.main_content_div .form_div {\n  padding: 25px;\n  position: relative;\n}\n.main_content_div .form_div .main_head {\n  display: block;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n  font-size: 30px;\n  margin: 10px;\n}\n.main_content_div .form_div ion-label {\n  font-size: 12px;\n  color: white;\n}\n.main_content_div .form_div .forgot {\n  display: block;\n  text-align: center;\n  color: white;\n}\n.main_content_div .form_div ion-input {\n  border-radius: 20px;\n  margin-bottom: 15px;\n  --padding-start: 8px;\n  --padding-end: 10px;\n  border: 1px solid lightgray;\n}\n.main_content_div .form_div ion-button {\n  margin-top: 20px;\n  --border-radius: 20px;\n  --background: var(--ion-color-primary);\n  --color: white;\n}\n.main_content_div .form_div .tri {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 15px solid white;\n  position: absolute;\n  top: -15px;\n}\n.main_content_div .form_div .lbl {\n  margin-top: 20px;\n  color: white;\n  display: block;\n  text-align: center;\n}\n.main_content_div .form_div .signup_span {\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUFKO0FBRUk7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQVI7QUFFSTtFQUVJLGtCQUFBO0FBRFI7QUFFUTtFQUVJLFdBQUE7QUFEWjtBQUtJO0VBQ0ksYUFBQTtFQUVBLGtCQUFBO0FBSlI7QUFLUTtFQUNJLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFIWjtBQUtRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFIWjtBQU1RO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUpaO0FBTVE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBSlo7QUFPUTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QUFMWjtBQU9RO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFMWjtBQU9RO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTFo7QUFPUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFMWiIsImZpbGUiOiJmb3Jnb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgLy9cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ1JTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgLmljb25EaXYge1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiA4MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIC8vIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZvcm1fZGl2IHtcbiAgICAgICAgcGFkZGluZzogMjVweDtcblxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5tYWluX2hlYWQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcmdvdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC50cmkge1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtMTVweDtcbiAgICAgICAgfVxuICAgICAgICAubGJsIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc2lnbnVwX3NwYW4ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "GRmH":
/*!*********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.ts ***!
  \*********************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgot_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgot.page.html */ "svYT");
/* harmony import */ var _forgot_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot.page.scss */ "EK+f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../select-country/select-country.page */ "hxji");
/* harmony import */ var _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../verify/verify.page */ "TCp9");



//






let ForgotPage = class ForgotPage {
    constructor(api, util, navCtrl, menuController, modalController, alertController) {
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.menuController = menuController;
        this.modalController = modalController;
        this.alertController = alertController;
        this.cc = '+91';
        this.ccCode = '+91';
        this.div_type = 1;
        this.sent = false;
        this.email = '';
        this.otp = '';
        this.password = '';
        this.repass = '';
        this.verified = false;
    }
    ngOnInit() {
    }
    sendOTP() {
        // console.log(this.email, ';sendOTPDriver');
        if (!this.email) {
            this.util.showToast(this.util.translate('email is required'), 'dark', 'bottom');
            return false;
        }
        const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailfilter.test(this.email)) {
            this.util.showToast(this.util.translate('Please enter valid email'), 'dark', 'bottom');
            return false;
        }
        this.loggedIn = true;
        const param = {
            email: this.email
        };
        this.api.post('users/sendOTP', param).then((data) => {
            // console.log(data);
            this.loggedIn = false;
            if (data && data.status === 200) {
                this.id = data.data.id;
                this.loggedIn = false;
                this.div_type = 2;
            }
            else {
                if (data && data.status === 500 && data.data && data.data.message) {
                    this.util.errorToast(data.data.message);
                    return false;
                }
                this.util.errorToast('Algo ha ido mal');
                return false;
            }
        }, error => {
            // console.log(error);
            this.loggedIn = false;
            this.util.errorToast('Algo ha ido mal');
        });
    }
    verifyOTP() {
        // this.div_type = 3;
        if (!this.otp || this.otp === '') {
            this.util.showToast(this.util.translate('otp is required'), 'dark', 'bottom');
            return false;
        }
        this.loggedIn = true;
        const param = {
            id: this.id,
            otp: this.otp
        };
        this.api.post('users/verifyOTP', param).then((data) => {
            // console.log(data);
            this.loggedIn = false;
            if (data && data.status === 200) {
                this.loggedIn = false;
                this.div_type = 3;
            }
            else {
                if (data && data.status === 500 && data.data && data.data.message) {
                    this.util.errorToast(data.data.message);
                    return false;
                }
                this.util.errorToast('Algo ha ido mal');
                return false;
            }
        }, error => {
            // console.log(error);
            this.loggedIn = false;
            this.util.errorToast('Algo ha ido mal');
        });
    }
    sendEmail() {
        // console.log('pwddd0<<<<<<', this.password);
        if (!this.password || !this.repass || this.password === '' || this.repass === '') {
            this.util.errorToast(this.util.translate('All Field are required'));
            return false;
        }
        const param = {
            email: this.email,
            pwd: this.password
        };
        this.loggedIn = true;
        this.api.post('users/update_password', param).then((data) => {
            // console.log(data);
            this.loggedIn = false;
            if (data && data.status === 200) {
                this.loggedIn = false;
                this.util.errorToast(this.util.translate('Password Updated'));
                this.back();
            }
            else {
                if (data && data.status === 500 && data.data && data.data.message) {
                    this.util.errorToast(data.data.message);
                    return false;
                }
                this.util.errorToast('Algo ha ido mal');
                return false;
            }
        }, error => {
            // console.log(error);
            this.loggedIn = false;
            this.util.errorToast('Algo ha ido mal');
        });
    }
    resetPasswordWithPhone() {
        // console.log('pwddd0<<<<<<', this.password);
        if (!this.password || !this.repass || this.password === '' || this.repass === '') {
            this.util.errorToast(this.util.translate('All Field are required'));
            return false;
        }
        const param = {
            phone: this.phone,
            pwd: this.password
        };
        this.loggedIn = true;
        this.api.post('users/resetPasswordWithPhone', param).then((data) => {
            // console.log(data);
            this.loggedIn = false;
            if (data && data.status === 200) {
                this.loggedIn = false;
                this.util.errorToast(this.util.translate('Password Updated'));
                this.back();
            }
            else {
                if (data && data.status === 500 && data.data && data.data.message) {
                    this.util.errorToast(data.data.message);
                    return false;
                }
                this.util.errorToast('Algo ha ido mal');
                return false;
            }
        }, error => {
            // console.log(error);
            this.loggedIn = false;
            this.util.errorToast('Algo ha ido mal');
        });
    }
    back() {
        this.navCtrl.back();
    }
    ionViewWillEnter() {
        this.menuController.enable(false);
    }
    ionViewWillLeave() {
        this.menuController.enable(true);
    }
    openCountry() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('open ccode');
            const modal = yield this.modalController.create({
                component: _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_7__["SelectCountryPage"],
                backdropDismiss: false,
                showBackdrop: true,
            });
            modal.onDidDismiss().then((data) => {
                // console.log(data);
                if (data && data.role === 'selected') {
                    // console.log('ok');
                    this.cc = '+' + data.data;
                    this.ccCode = '+' + data.data;
                }
            });
            yield modal.present();
        });
    }
    sendOTPOnMobile() {
        const param = {
            phone: this.phone
        };
        this.loggedIn = true;
        this.api.post('users/validatePhoneForReset', param).then((data) => {
            this.loggedIn = false;
            // console.log('data', data);
            if (data && data.status === 200) {
                // console.log('all done...');
                this.presentAlertConfirm();
            }
            else if (data && data.status === 500) {
                this.util.errorToast(data.data.message);
            }
            else {
                this.util.errorToast('Algo ha ido mal');
            }
        }, error => {
            // console.log(error);
            this.loggedIn = false;
            this.util.errorToast('Algo ha ido mal');
        }).catch(error => {
            // console.log(error);
            this.loggedIn = false;
            this.util.errorToast('Algo ha ido mal');
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm Informations',
                message: 'We will send verification code to your mobile number  ' + this.ccCode + this.phone,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Send',
                        handler: () => {
                            // console.log('Confirm Okay');
                            this.openModal();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__["VerifyPage"],
                componentProps: { code: this.ccCode, phone: this.phone }
            });
            modal.onDidDismiss().then((data) => {
                // console.log(data);
                if (data && data.role === 'ok') {
                    // console.log('verification done...');
                    this.div_type = 3;
                }
            });
            modal.present();
        });
    }
};
ForgotPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ForgotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot',
        template: _raw_loader_forgot_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], ForgotPage);

// validatePhoneForReset


/***/ }),

/***/ "Ityv":
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.module.ts ***!
  \***********************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-routing.module */ "XRev");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "GRmH");

//






let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"],
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })
], ForgotPageModule);



/***/ }),

/***/ "XRev":
/*!*******************************************************!*\
  !*** ./src/app/pages/forgot/forgot-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ForgotPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function() { return ForgotPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot.page */ "GRmH");

//



const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
    }
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPageRoutingModule);



/***/ }),

/***/ "svYT":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Restaurar contraseña</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"iconDiv\">\n      <img src=\"assets/icon.png\" alt=\"\" class=\"icon\">\n    </div>\n    <div class=\"form_div\" *ngIf=\"util.reset_pwd ==='0'\">\n      <ion-label class=\"main_head\"> Restaurar contraseña</ion-label>\n      <div *ngIf=\"div_type === 1\">\n        <ion-input type=\"email\" [placeholder]=\"('Correo')\" [(ngModel)]=\"email\">\n          <ion-icon name=\"mail\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"sendOTP()\">\n          <span *ngIf=\"!loggedIn\"> Restaurar </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n\n      <div *ngIf=\"div_type === 2\">\n        <ion-input type=\"number\" [placeholder]=\"('Código')\" [(ngModel)]=\"otp\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"verifyOTP()\">\n          <span *ngIf=\"!loggedIn\"> Verificar </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n\n      <div *ngIf=\"div_type === 3\">\n        <ion-input type=\"password\" [placeholder]=\"('Nueva contraseá')\" [(ngModel)]=\"password\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n        <ion-input type=\"password\" [placeholder]=\"('Confirmar contraseña')\" [(ngModel)]=\"repass\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"sendEmail()\">\n          <span *ngIf=\"!loggedIn\"> Restaurar </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n    </div>\n\n    <div class=\"form_div\" *ngIf=\"util.reset_pwd === '1'\">\n      <ion-label class=\"main_head\"> {{util.translate('Reset Password')}} </ion-label>\n      <div *ngIf=\"div_type === 1\">\n        <ion-row>\n          <ion-col size=\"3\" (click)=\"openCountry()\">\n            <ion-input style=\"font-size: 12px;\" [(ngModel)]=\"cc\" disabled=\"true\" type=\"text\">\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"9\">\n            <ion-input [(ngModel)]=\"phone\" type=\"number\" [placeholder]=\"('Teléfono')\">\n            </ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"sendOTPOnMobile()\">\n          <span *ngIf=\"!loggedIn\"> Enviar código </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n\n      <div *ngIf=\"div_type === 3\">\n        <ion-input type=\"password\" [placeholder]=\"util.translate('New Password')\" [(ngModel)]=\"password\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n        <ion-input type=\"password\" [placeholder]=\"util.translate('Confirm Password')\" [(ngModel)]=\"repass\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"resetPasswordWithPhone()\">\n          <span *ngIf=\"!loggedIn\"> {{util.translate('Reset Password')}} </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-forgot-forgot-module-es2015.js.map