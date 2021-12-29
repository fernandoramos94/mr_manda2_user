(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contacts-module"], {
    /***/
    "EWb5":
    /*!***************************************************!*\
      !*** ./src/app/pages/contacts/contacts.module.ts ***!
      \***************************************************/

    /*! exports provided: ContactsPageModule */

    /***/
    function EWb5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function () {
        return ContactsPageModule;
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


      var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contacts-routing.module */
      "rUYa");
      /* harmony import */


      var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contacts.page */
      "Tett"); //


      var ContactsPageModule = function ContactsPageModule() {
        _classCallCheck(this, ContactsPageModule);
      };

      ContactsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsPageRoutingModule"]],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]]
      })], ContactsPageModule);
      /***/
    },

    /***/
    "O6Z6":
    /*!***************************************************!*\
      !*** ./src/app/pages/contacts/contacts.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function O6Z6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 200px;\n}\n\n.flex_box {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 10px;\n}\n\n.flex_box label {\n  margin-bottom: 0;\n  font-weight: 500;\n  margin-left: 10px;\n}\n\n.main_content_div {\n  padding: 20px;\n}\n\n.main_content_div .main_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.main_content_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n\n.main_content_div .name {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  justify-content: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.main_content_div .name .image_div {\n  width: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.main_content_div .name .icn {\n  max-width: 15px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.main_content_div .name .content_div {\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  margin-left: 15px;\n}\n\n.main_content_div .name .content_div span {\n  font-size: 11px;\n  color: #8992aa;\n  padding-top: 5px;\n}\n\n.main_content_div .name .content_div ion-input {\n  font-size: 11px;\n  color: #454d62;\n}\n\n.main_content_div .btn_div {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n\n.main_content_div ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 3px;\n  --color: white;\n  font-weight: bold;\n  font-size: 12px;\n  height: 40px;\n  width: 150px;\n  text-transform: capitalize;\n  --background-activated: rgba(159, 201, 165, 0.5);\n  --color-actived: white;\n}\n\n.main_content_div ion-button .logout_icon {\n  width: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhY3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ1I7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUNSOztBQUNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxrQkFBQTtFQUNBLG9EQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNSOztBQUNRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNaOztBQUNRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ1o7O0FBQ1E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDWjs7QUFDWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDaEI7O0FBQ1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNoQjs7QUFJSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFGUjs7QUFJSTtFQUNJLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdEQUFBO0VBQ0Esc0JBQUE7QUFGUjs7QUFHUTtFQUNJLFdBQUE7QUFEWiIsImZpbGUiOiJjb250YWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAvL1xuI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmZsZXhfYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIC5tYWluX2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLnVzZXJfaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLm5hbWUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtM3B4IHJnYmEoMzAsIDk4LCAyNTUsIDAuMyk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIC5pbWFnZV9kaXYge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuaWNuIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50X2RpdiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODk5MmFhO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ1NGQ2MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5idG5fZGl2IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMTU5LCAyMDEsIDE2NSwgMC41KTtcbiAgICAgICAgLS1jb2xvci1hY3RpdmVkOiB3aGl0ZTtcbiAgICAgICAgLmxvZ291dF9pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "Tett":
    /*!*************************************************!*\
      !*** ./src/app/pages/contacts/contacts.page.ts ***!
      \*************************************************/

    /*! exports provided: ContactsPage */

    /***/
    function Tett(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsPage", function () {
        return ContactsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contacts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contacts.page.html */
      "vIa4");
      /* harmony import */


      var _contacts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contacts.page.scss */
      "O6Z6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc"); //


      var ContactsPage = /*#__PURE__*/function () {
        function ContactsPage(navCtrl, util, api) {
          var _this = this;

          _classCallCheck(this, ContactsPage);

          this.navCtrl = navCtrl;
          this.util = util;
          this.api = api;
          this.contact = {
            name: '',
            email: '',
            message: '',
            status: '0',
            date: moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD')
          }; // console.log('address-->>', this.util.general);

          if (this.util.general && this.util.general.address) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              address: this.util.general.address + ' ' + this.util.general.city + ' ' + this.util.general.state + ' ' + this.util.general.country + ' ' + this.util.general.zip
            }, function (results, status) {
              // console.log(results, status);
              if (status === 'OK' && results && results.length) {
                _this.latOri = results[0].geometry.location.lat();
                _this.longOri = results[0].geometry.location.lng();

                _this.loadMap(_this.latOri, _this.longOri);
              }
            });
          }
        }

        _createClass(ContactsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.back();
          }
        }, {
          key: "loadMap",
          value: function loadMap(lat, lng) {
            var latLng = new google.maps.LatLng(lat, lng);
            var mapOptions = {
              center: latLng,
              zoom: 12,
              scaleControl: false,
              streetViewControl: false,
              zoomControl: false,
              overviewMapControl: false,
              mapTypeControl: false,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
              map: this.map,
              position: latLng
            });
            var sunCircle = {
              strokeColor: '#49befc',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#49befc',
              fillOpacity: 0.35,
              map: this.map,
              center: latLng
            };
            this.circle = new google.maps.Circle(sunCircle);
            this.circle.bindTo('center', marker, 'position');
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            // console.log('contact', this.contact);
            if (this.contact.name === '' || this.contact.email === '' || this.contact.message === '') {
              this.util.errorToast(this.util.translate('All Fields are required'));
              return false;
            }

            var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

            if (!emailfilter.test(this.contact.email)) {
              this.util.errorToast(this.util.translate('Please enter valid email'));
              return false;
            }

            this.util.show();
            this.api.post('contacts/save', this.contact).then(function (data) {
              _this2.util.hide();

              var param = {
                email: _this2.contact.email
              };

              _this2.api.post('users/contactResponse', param).then(function (data) {// console.log(data);
              }, function (error) {// console.log(error);
              });

              _this2.contact.email = '';
              _this2.contact.name = '';
              _this2.contact.message = '';

              if (data && data.status === 200) {
                _this2.success();
              } else {
                _this2.util.errorToast('Algo ha ido mal');
              }
            }, function (error) {
              // console.log(error);
              _this2.util.hide();

              _this2.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "success",
          value: function success() {
            var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              onOpen: function onOpen(toast) {
                toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.stopTimer);
                toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.resumeTimer);
              }
            });
            Toast.fire({
              icon: 'success',
              title: this.util.translate('message sent successfully')
            });
            this.navCtrl.back();
          }
        }]);

        return ContactsPage;
      }();

      ContactsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_8__["ApisService"]
        }];
      };

      ContactsPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map', {
            "static": true
          }]
        }]
      };
      ContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contacts',
        template: _raw_loader_contacts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contacts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_8__["ApisService"]])], ContactsPage);
      /***/
    },

    /***/
    "rUYa":
    /*!***********************************************************!*\
      !*** ./src/app/pages/contacts/contacts-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ContactsPageRoutingModule */

    /***/
    function rUYa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsPageRoutingModule", function () {
        return ContactsPageRoutingModule;
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


      var _contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contacts.page */
      "Tett"); //


      var routes = [{
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_3__["ContactsPage"]
      }];

      var ContactsPageRoutingModule = function ContactsPageRoutingModule() {
        _classCallCheck(this, ContactsPageRoutingModule);
      };

      ContactsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ContactsPageRoutingModule);
      /***/
    },

    /***/
    "vIa4":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacts/contacts.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function vIa4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.translate('Contact us')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"main_div\">\n\n      <div class=\"info_div\">\n\n        <div class=\"name\">\n          <div class=\"image_div\">\n            <ion-icon name=\"person-outline\"></ion-icon>\n          </div>\n          <div class=\"content_div\">\n            <ion-input type=\"text\" [placeholder]=\"util.translate('Full name')\" [(ngModel)]=\"contact.name\">\n            </ion-input>\n          </div>\n        </div>\n\n\n        <div class=\"name\">\n          <div class=\"image_div\">\n            <ion-icon name=\"mail-outline\"></ion-icon>\n          </div>\n          <div class=\"content_div\">\n            <ion-input type=\"text\" [placeholder]=\"util.translate('Email')\" [(ngModel)]=\"contact.email\">\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"name\">\n          <div class=\"content_div\">\n            <ion-textarea row=\"8\" type=\"text\" [placeholder]=\"util.translate('Message')\" [(ngModel)]=\"contact.message\">\n            </ion-textarea>\n          </div>\n        </div>\n        <ion-button (click)=\"submit()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          {{util.translate('Submit')}}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n  <div class=\"flex_box\" *ngIf=\"util.general && util.general.address\">\n    <ion-icon name=\"home-outline\"></ion-icon>\n    <label> {{util.general.address}}\n    </label>\n  </div>\n  <div class=\"flex_box\" *ngIf=\"util.general && util.general.address\">\n    <ion-icon name=\"home-outline\"></ion-icon>\n    <label> {{util.general.city}} - {{util.general.country}} - {{util.general.zip}}\n    </label>\n  </div>\n  <div class=\"flex_box\" *ngIf=\"util.general && util.general.address\">\n    <ion-icon name=\"mail-open-outline\"></ion-icon>\n    <label> {{util.general.email}} </label>\n  </div>\n  <div class=\"flex_box\" *ngIf=\"util.general && util.general.address\">\n    <ion-icon name=\"call-outline\"></ion-icon>\n    <label> {{util.general.mobile}} </label>\n  </div>\n  <div class=\"flex_box\" *ngIf=\"util.general && util.general.address\">\n    <ion-icon name=\"print-outline\"></ion-icon>\n    <label for=\"\"> {{util.general.email}} </label>\n  </div>\n  <div #map id=\"map\"></div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=contacts-contacts-module-es5.js.map