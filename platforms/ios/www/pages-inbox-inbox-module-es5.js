(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inbox-inbox-module"], {
    /***/
    "+duN":
    /*!*********************************************!*\
      !*** ./src/app/pages/inbox/inbox.module.ts ***!
      \*********************************************/

    /*! exports provided: InboxPageModule */

    /***/
    function duN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InboxPageModule", function () {
        return InboxPageModule;
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


      var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inbox-routing.module */
      "LBzs");
      /* harmony import */


      var _inbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inbox.page */
      "6/Vj"); //


      var InboxPageModule = function InboxPageModule() {
        _classCallCheck(this, InboxPageModule);
      };

      InboxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__["InboxPageRoutingModule"]],
        declarations: [_inbox_page__WEBPACK_IMPORTED_MODULE_6__["InboxPage"]]
      })], InboxPageModule);
      /***/
    },

    /***/
    "6/Vj":
    /*!*******************************************!*\
      !*** ./src/app/pages/inbox/inbox.page.ts ***!
      \*******************************************/

    /*! exports provided: InboxPage */

    /***/
    function Vj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InboxPage", function () {
        return InboxPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inbox_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inbox.page.html */
      "g/jL");
      /* harmony import */


      var _inbox_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inbox.page.scss */
      "D3f4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc"); //


      var InboxPage = /*#__PURE__*/function () {
        function InboxPage(route, navCtrl, api, util) {
          var _this = this;

          _classCallCheck(this, InboxPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.api = api;
          this.util = util;
          this.msg = '';
          this.messages = [];
          this.route.queryParams.subscribe(function (data) {
            // console.log(data);
            if (data && data.id && data.name) {
              _this.uid = data.uid;
              _this.id = data.id;
              _this.loaded = false;
              _this.name = data.name;

              _this.getChats();

              _this.interval = setInterval(function () {
                // console.log('calling in interval');
                _this.getChats();
              }, 12000);
            } else {
              _this.navCtrl.back();
            }
          });
        }

        _createClass(InboxPage, [{
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            // console.log('leaae');
            clearInterval(this.interval);
          } // ScrollToBottom() {
          // }

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getChats",
          value: function getChats() {
            var _this2 = this;

            // store _ opponent
            var param = {
              id: this.id + '_' + this.uid,
              oid: this.id
            };
            this.api.post('chats/getById', param).then(function (data) {
              // console.log(data);
              _this2.loaded = true;
              _this2.yourMessage = true;

              if (data && data.status === 200) {
                _this2.messages = data.data;

                _this2.myContent.scrollToBottom(300);
              }
            }, function (error) {
              // console.log(error);
              _this2.loaded = true;
              _this2.yourMessage = true;

              _this2.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.back();
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            var _this3 = this;

            // store to opponent
            // console.log(this.msg);
            if (!this.msg || this.msg === '') {
              return false;
            }

            var msg = this.msg;
            this.msg = '';
            var param = {
              room_id: this.id,
              uid: this.id + '_' + this.uid,
              from_id: this.uid,
              message: msg,
              message_type: 'users',
              status: 1,
              timestamp: moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD HH:mm:ss')
            };
            this.myContent.scrollToBottom(300);
            this.yourMessage = false;
            this.api.post('chats/save', param).then(function (data) {
              // console.log(data);
              if (data && data.status === 200) {
                _this3.getChats();
              } else {
                _this3.yourMessage = true;
              }
            }, function (error) {
              // console.log(error);
              _this3.yourMessage = true;

              _this3.util.errorToast('Algo ha ido mal');
            });
          }
        }]);

        return InboxPage;
      }();

      InboxPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_8__["ApisService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }];
      };

      InboxPage.propDecorators = {
        myContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], {
            read: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"],
            "static": false
          }]
        }]
      };
      InboxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inbox',
        template: _raw_loader_inbox_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inbox_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_8__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])], InboxPage);
      /***/
    },

    /***/
    "D3f4":
    /*!*********************************************!*\
      !*** ./src/app/pages/inbox/inbox.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function D3f4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header_div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  height: 65px;\n  border-bottom: 1px solid lightgray;\n  background-color: var(--ion-color-primary);\n}\n.header_div .first_div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: white;\n  font-weight: bold;\n}\n.header_div .back_image {\n  width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n  margin-right: 10px;\n}\n.header_div .username {\n  font-weight: 600;\n  color: white;\n}\n.header_div ion-icon {\n  color: white;\n}\n.main_content_div {\n  width: 100%;\n  padding: 15px;\n}\n.main_content_div .back_image {\n  width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n}\n.main_content_div .left_div {\n  width: 100%;\n  display: flex;\n  margin-bottom: 15px;\n}\n.main_content_div .left_div .inner_div {\n  width: 70%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n.main_content_div .left_div .msg_div {\n  background: #f0eff5;\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n  border-radius: 25px;\n  margin-left: 5px;\n}\n.main_content_div .right_div {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n  justify-content: flex-end;\n}\n.main_content_div .right_div .inner_div {\n  width: 70%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.main_content_div .right_div .msg_div {\n  background: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n  border-radius: 25px;\n  margin-right: 5px;\n  color: white;\n}\nion-footer .footer_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n}\nion-footer ion-input {\n  border-radius: 25px;\n  border: 1px solid lightgray;\n  --padding-start: 8px;\n}\nion-footer .chat_div {\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  height: 35px;\n  width: 35px;\n  position: relative;\n  margin-left: 10px;\n}\nion-footer .chat_div ion-icon {\n  color: var(--ion-color-primary);\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-55%, -45%);\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2luYm94LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7QUFBSjtBQUVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQURSO0FBSUk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFGUjtBQUlJO0VBQ0ksWUFBQTtBQUZSO0FBS0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUZKO0FBSUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUZSO0FBS0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSFI7QUFLUTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUhaO0FBTVE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUpaO0FBT0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFMUjtBQU9RO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBTFo7QUFRUTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQU5aO0FBV0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUlI7QUFVSTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQVJSO0FBVUk7RUFDSSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBUlI7QUFTUTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQVBaIiwiZmlsZSI6ImluYm94LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgIC8vXG4uaGVhZGVyX2RpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogNjVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICAgIC5maXJzdF9kaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5iYWNrX2ltYWdlIHtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtaW4td2lkdGg6IDQ1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAudXNlcm5hbWUge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgLmJhY2tfaW1hZ2Uge1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1pbi13aWR0aDogNDVweDtcbiAgICB9XG5cbiAgICAubGVmdF9kaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgICAgICAuaW5uZXJfZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tc2dfZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGVmZjU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodF9kaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICAuaW5uZXJfZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAubXNnX2RpdiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1mb290ZXIge1xuICAgIC5mb290ZXJfZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgfVxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgfVxuICAgIC5jaGF0X2RpdiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTUlLCAtNDUlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "LBzs":
    /*!*****************************************************!*\
      !*** ./src/app/pages/inbox/inbox-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: InboxPageRoutingModule */

    /***/
    function LBzs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InboxPageRoutingModule", function () {
        return InboxPageRoutingModule;
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


      var _inbox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inbox.page */
      "6/Vj"); //


      var routes = [{
        path: '',
        component: _inbox_page__WEBPACK_IMPORTED_MODULE_3__["InboxPage"]
      }];

      var InboxPageRoutingModule = function InboxPageRoutingModule() {
        _classCallCheck(this, InboxPageRoutingModule);
      };

      InboxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InboxPageRoutingModule);
      /***/
    },

    /***/
    "g/jL":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbox/inbox.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function gJL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{name}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"loaded\">\n\n    <span *ngFor=\"let item of messages\">\n      <div class=\"left_div\" *ngIf=\"item.from_id != uid\">\n        <div class=\"inner_div\">\n          <div class=\"msg_div\">\n            <ion-label>{{item.message}}</ion-label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"right_div\" *ngIf=\"item.from_id == uid\">\n        <div class=\"inner_div\">\n          <div class=\"msg_div\">\n            <ion-label>{{item.message}}</ion-label>\n          </div>\n        </div>\n\n      </div>\n    </span>\n  </div>\n  <div *ngIf=\"!yourMessage && loaded\" style=\"display: flex;flex-direction: row-reverse;padding: 20px;\">\n    <ion-spinner name=\"dots\"></ion-spinner>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class=\"footer_div\">\n    <ion-input type=\"text\" [(ngModel)]=\"msg\" (keyup.enter)=\"sendMessage()\"\n      [placeholder]=\"util.translate('Type Here..')\"></ion-input>\n    <div class=\"chat_div\" (click)=\"sendMessage()\">\n      <ion-icon name=\"navigate\"></ion-icon>\n    </div>\n  </div>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-inbox-inbox-module-es5.js.map