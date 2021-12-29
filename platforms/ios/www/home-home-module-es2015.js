(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "/rnz":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.animated {\n  background-repeat: no-repeat;\n  background-position: left top;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.deliveryAddress {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px 10px 0px 10px;\n}\n\n.deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.deliveryAddress .userPhoto {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.div_searchbar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 8px;\n}\n\n.div_searchbar .search_bar {\n  padding: 0px;\n  width: 100%;\n}\n\n.chips_div {\n  display: flex;\n  flex-direction: row;\n  overflow: scroll;\n  scrollbar-width: none;\n  /* Firefox */\n  -ms-overflow-style: none;\n  /* Internet Explorer 10+ */\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.chips_div ::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n}\n\n.chips_div ::-webkit-scrollbar-thumb {\n  background: transparent;\n}\n\n.chips_div .chip {\n  border-radius: 3px;\n  padding: 5px 20px;\n  margin-right: 10px;\n  white-space: nowrap;\n  color: lightgray;\n  font-size: 12px;\n  font-weight: bold;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.chips_div .selected {\n  border-radius: 3px;\n  padding: 5px 20px;\n  margin-right: 10px;\n  white-space: nowrap;\n  background: var(--ion-color-primary);\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.heading {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  margin-bottom: 10px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.heading .heading_lbl {\n  font-size: 20px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-primary);\n}\n\n.heading .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div {\n  padding: 16px;\n}\n\n.main_content_div .back_image {\n  height: 165px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  border-radius: 20px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div .noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n\n.main_content_div .heading {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.main_content_div .heading .heading_lbl {\n  font-size: 20px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-primary);\n}\n\n.main_content_div .heading .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div .slider_div .card {\n  margin-top: 15px;\n}\n\n.main_content_div .slider_div .card .back_image {\n  height: 200px;\n  width: 250px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  position: relative;\n}\n\n.main_content_div .slider_div .card .back_image .time_lbl {\n  padding: 10px;\n  position: absolute;\n  background: white;\n  bottom: 15px;\n  right: 15px;\n  border-radius: 25px;\n  font-size: 12px;\n}\n\n.main_content_div .slider_div .card .heading_lbl {\n  font-size: 20px;\n  display: block;\n  margin-top: 10px;\n  text-align: left;\n}\n\n.main_content_div .slider_div .card .price_rating {\n  display: flex;\n  height: 25px;\n  align-items: flex-start;\n}\n\n.main_content_div .slider_div .card .price_rating .rating {\n  color: var(--ion-color-primary);\n  font-size: 15px;\n  margin-left: 10px;\n}\n\n.main_content_div .slider_div .card .price_rating .red_lbl {\n  color: var(--ion-color-primary);\n  font-size: 12px;\n}\n\n.main_content_div .slider_div .card .price_rating .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div .card_div .heading {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.main_content_div .card_div .heading .heading_lbl {\n  font-size: 20px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-primary);\n}\n\n.main_content_div .card_div .heading .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div .card_div .card {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n}\n\n.main_content_div .card_div .card .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.main_content_div .card_div .card .desc_div .heading_lbl {\n  font-size: 1rem;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card_div .card .desc_div .small_lbl {\n  font-size: 0.8rem;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card_div .card .ratting {\n  background: #00b3f0;\n  padding: 2px 5px;\n  text-align: center;\n}\n\n.main_content_div .card_div .card .ratting .rateNumber {\n  color: white;\n  font-size: 0.8rem;\n}\n\n.main_content_div .card_div .cardClosed {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  background: #ebebeb;\n  margin: 10px 0px;\n  border-radius: 15px;\n}\n\n.main_content_div .card_div .cardClosed .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.main_content_div .card_div .cardClosed .desc_div .heading_lbl {\n  font-size: 1rem;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card_div .cardClosed .desc_div .small_lbl {\n  font-size: 0.8rem;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card_div .cardClosed .ratting {\n  background: green;\n  padding: 2px 5px;\n  text-align: center;\n}\n\n.main_content_div .card_div .cardClosed .ratting .rateNumber {\n  color: white;\n  font-size: 0.8rem;\n}\n\n.main_content_div .card_div .cardClosed .closed {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  border-radius: 5px;\n  font-size: 1rem;\n  padding: 5px;\n}\n\n.card-background-page ion-card {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  display: relative;\n  position: relative;\n  text-align: center;\n  margin: 0;\n  width: 100%;\n  height: 98%;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 76%;\n  font-size: 1em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.column {\n  padding-top: -9x !important;\n  margin-top: -9px !important;\n}\n\n.usernane {\n  text-align: left;\n  font-weight: 600;\n  font-size: 20px;\n  margin-left: 10px;\n}\n\n.color {\n  color: #00b3f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7QUFBSjs7QUFFQztFQUNHLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVJO0VBQ0k7SUFDSSxVQUFBO0lBQ0Esb0NBQUE7RUFDVjtFQUNNO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0VBQ1Y7QUFDRjs7QUFFSTtFQUNBO0lBQ0ksVUFBQTtJQUNBLDRCQUFBO0VBQU47RUFFRTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFQUFOO0FBQ0Y7O0FBR0k7RUFDSSxrQ0FBQTtFQUNBLDBCQUFBO0FBRFI7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRVI7O0FBQUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUVSOztBQUFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUVSOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ1I7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQXVCLFlBQUE7RUFDdkIsd0JBQUE7RUFBMkIsMEJBQUE7RUFDM0Isa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFBSTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtBQUVSOztBQUFJO0VBQ0ksdUJBQUE7QUFFUjs7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFB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RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBcEJwQjs7QUF3Qlk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF0QmhCOztBQXVCZ0I7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFyQnBCOztBQXdCWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQXRCaEI7O0FBNkJJO0VBQ0kseUJBQUE7RUFDTSwwQkFBQTtFQUNSLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQTFCTjs7QUE2Qkk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQTNCTjs7QUFrQ0E7RUFFSSwyQkFBQTtFQUNBLDJCQUFBO0FBaENKOztBQXFDRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0MsaUJBQUE7QUFsQ0w7O0FBcUNBO0VBQ0ksY0FBQTtBQWxDSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cbiAuYW5pbWF0ZWQge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgfVxuICAgIFxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBAa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgfVxuICAgIFxuICAgIC5mYWRlSW5Eb3duIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG59XG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmRlbGl2ZXJ5QWRkcmVzc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgLnBpbntcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gICAgLmFkZHJlc3N7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICAgIC51c2VyUGhvdG97XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbn1cbi5kaXZfc2VhcmNoYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuXG4gICAgLnNlYXJjaF9iYXJ7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgXG59XG5cbi5jaGlwc19kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwcHg7IFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuY2hpcHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLnNlbGVjdGVke1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG59XG5cbi5oZWFkaW5ne1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXG4gICAgLmhlYWRpbmdfbGJse1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIC8vZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIC5zbWFsbF9sYmx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgLy8vL2ZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgfVxufVxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICAuYmFja19pbWFnZXtcbiAgICAgICAgaGVpZ2h0OiAxNjVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5ub0RhdGF7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICB9XG4gICAgLmhlYWRpbmd7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgLy9mb250LWZhbWlseTogb3Blbi1ib2xkO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zbGlkZXJfZGl2e1xuICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgLnRpbWVfbGJse1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpY2VfcmF0aW5ne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7ICAgICBcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7OyAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnJhdGluZ3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlZF9sYmx7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgLy9mb250LWZhbWlseTogb3Blbi1yZWd1bGFyOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmRfZGl2e1xuICAgICAgICAuaGVhZGluZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgLy8gcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY19kaXZ7XG4gICAgICAgICAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdHRpbmd7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwYjNmMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAucmF0ZU51bWJlcntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmRDbG9zZWR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgLmltYWdlX2RpdntcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNjX2RpdntcbiAgICAgICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0dGluZ3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAucmF0ZU51bWJlcntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xvc2Vke1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZXtcbiAgICBpb24tY2FyZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjAgIWltcG9ydGFudDtcbiAgICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOjA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogOTglO1xuICAgIH1cbiAgXG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA3NiU7XG4gICAgICBmb250LXNpemU6IDEuMGVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG5cblxuXG4uY29sdW1uIHtcblxuICAgIHBhZGRpbmctdG9wOiAtIDl4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogLTlweCFpbXBvcnRhbnQ7XG4gIFxuICBcbiAgfVxuXG4gIC51c2VybmFuZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmNvbG9ye1xuICAgIGNvbG9yOiAjMDBiM2YwO1xuXG59Il19 */");

/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "hsj+");

//






let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "hsj+");

//



const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "eUf4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <!-- <ion-toolbar [hidden]=\"headerHidden\" class=\"animated fadeInDown\" *ngIf=\"haveLocation\"> -->\n  <ion-toolbar>\n    <div class=\"deliveryAddress\">\n      <img src=\"assets/pin.png\" alt=\"\" class=\"pin\" (click)=\"changeLocation()\">\n      <p class=\"address\" (click)=\"changeLocation()\">{{util.cityAddress}}</p>\n\n      <div class=\"userPhoto\" [style.backgroundImage]=\"'url('+ profile +')'\" *ngIf=\"profile\"></div>\n      <div class=\"userPhoto\" [style.backgroundImage]=\"'url(assets/user.png)'\" *ngIf=\"!profile\"></div>\n    </div>\n\n\n    <div class=\"div_searchbar\">\n      <ion-searchbar animated=\"true\" mode=\"ios\" [placeholder]=\"('Buscar comercios') || '&nbsp;'\"\n        (ionFocus)=\"onFocusEvent(this)\" (ionBlur)=\"onBlurEvent(this)\" [debounce]=\"250\" class=\"search_bar\"></ion-searchbar>\n    </div>\n\n\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [scrollEvents]=\"true\" >\n\n\n  <ion-grid class=\"card-background-page\">\n    <ion-row >\n      <ion-col >\n       <ion-card (click)=\"comida()\">\n         <img src=\"assets/imgs/comida.png\">\n         <div class=\"card-title\"></div>\n\n       </ion-card>\n      </ion-col >\n      <ion-col > \n       <ion-card (click)=\"bebidas()\">\n        <img src=\"assets/imgs/bebidas.png\">\n        <div class=\"card-title\"></div>\n\n       </ion-card>\n      </ion-col>\n  \n    \n    </ion-row>\n  </ion-grid>\n\n\n\n  <ion-grid class=\"card-background-page column\">\n    <ion-row >\n      <ion-col >\n       <ion-card (click)=\"cafeypan()\">\n         <img src=\"assets/imgs/cafeypan.png\">\n         <div class=\"card-title\"></div>\n\n       </ion-card>\n      </ion-col >\n      <ion-col > \n       <ion-card (click)=\"supermercado()\">\n        <img src=\"assets/imgs/supermercado.png\">\n        <div class=\"card-title\"></div>\n\n       </ion-card>\n      </ion-col>\n     \n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"card-background-page column\">\n    <ion-row >\n      <ion-col >\n       <ion-card (click)=\"salud()\">\n         <img src=\"assets/imgs/salud.png\">\n         <div class=\"card-title\"></div>\n\n       </ion-card>\n      </ion-col >\n      <ion-col > \n       <ion-card (click)=\"hogaryferreteria()\">\n        <img src=\"assets/imgs/hogaryferreteria.png\">\n        <div class=\"card-title\"></div>\n\n       </ion-card>\n      </ion-col>\n     \n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"card-background-page column\">\n    <ion-row >\n      <ion-col >\n       <ion-card (click)=\"conveniencia()\">\n         <img src=\"assets/imgs/conveniencia.png\">\n         <div class=\"card-title\"></div>\n\n       </ion-card>\n      </ion-col >\n\n     \n    </ion-row>\n  </ion-grid>\n\n\n\n  <div class=\"usernane\">\n    Promociones para ti \n    <ion-label class=\"color\">{{getName()}}</ion-label>\n  </div>\n\n  \n  <div class=\"main_content_div\">\n\n    <ion-slides [options]=\"slideOpts\" *ngIf=\"banners?.length && allRest?.length\">\n      <ion-slide *ngFor=\"let item of banners\" (click)=\"openOffers(item)\">\n        <div class=\"back_image\" [style.backgroundImage]=\"'url('+api.mediaURL+ item.banner+')'\"></div>\n      </ion-slide>\n    </ion-slides>\n    <ion-slides [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let item of dummyBanners\">\n        <ion-skeleton-text animated style=\"width: 100%;height: 100px;margin-left: 10px;border-radius: 5px;\">\n        </ion-skeleton-text>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "hsj+":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "eUf4");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "/rnz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");



//








let HomePage = class HomePage {
    constructor(platform, router, api, util, modalController, chMod, iab) {
        this.platform = platform;
        this.router = router;
        this.api = api;
        this.util = util;
        this.modalController = modalController;
        this.chMod = chMod;
        this.iab = iab;
        this.allRest = [];
        this.chips = [];
        this.dummyRest = [];
        this.dummy = Array(5);
        this.banners = [];
        this.dummyBanners = Array(2);
        this.slideOpts = {
            slidesPerView: 1.2,
            pagination: true
        };
        this.chips = [
            this.util.translate('Calificación 4.0+'),
            this.util.translate('Tiempo de entrega'),
            this.util.translate('Costo'),
        ];
        this.haveLocation = false;
        if (this.platform.is('ios')) {
            this.plt = 'ios';
        }
        else {
            this.plt = 'android';
        }
        this.util.subscribeLocation().subscribe(data => {
            // console.log('changedd----->>>');
            this.dummyRest = [];
            this.allRest = [];
            this.banners = [];
            this.dummyBanners = Array(2);
            this.dummy = Array(5);
            this.getRestaurants();
        });
        this.getRestaurants();
    }
    getName() {
        return this.util.userInfo && this.util.userInfo.first_name ?
            this.util.userInfo.first_name : '';
    }
    getRestaurants() {
        const param = {
            lat: localStorage.getItem('lat'),
            lng: localStorage.getItem('lng'),
            distance: 10,
            type: 1
        };
        this.api.post('stores/nearMe', param).then((data) => {
            this.dummyBanners = [];
            this.dummy = [];
            // console.log(data);
            if (data && data.status === 200 && data.data.length > 0) {
                this.allRest = [];
                this.dummyRest = [];
                data.data = data.data.filter(x => x.status === '1');
                data.data.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    element.rating = parseFloat(element.rating);
                    element.time = parseInt(element.time);
                    element.dish = parseInt(element.dish);
                    element['isOpen'] = this.isOpen(element.open_time, element.close_time);
                    if (element.cusine && element.cusine !== '') {
                        element.cusine = JSON.parse(element.cusine).join();
                    }
                    this.allRest.push(element);
                    this.dummyRest.push(element);
                }));
                const info = [...new Set(this.allRest.map(item => item.id))];
                // console.log(info);
                this.getBanners(info);
                // console.log(this.allRest);
                this.chMod.detectChanges();
            }
            else {
                this.allRest = [];
                this.dummy = [];
            }
        }, error => {
            // console.log(error);
            this.dummyRest = [];
            this.dummyBanners = [];
        }).catch(error => {
            // console.log(error);
            this.dummyRest = [];
            this.dummyBanners = [];
        });
    }
    onFocusEvent(event) {
        this.router.navigate(['buscador', { useFocusOnSearch: true }]);
    }
    onBlurEvent(event) {
    }
    getBanners(ids) {
        // console.log(ids);
        this.api.get('banners').then((data) => {
            // console.log('banners-->>', data);
            this.dummyBanners = [];
            this.banners = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                this.dummyBanners = [];
                this.banners = [];
                data.data.forEach(element => {
                    // console.log(element);
                    // console.log(element.type === '0' && ids.includes(element.value));
                    if (element.type === '0' && ids.includes(element.value)) {
                        this.banners.push(element);
                    }
                    else if (element.type === '0') {
                        this.banners.push(element);
                    }
                });
            }
        }).catch((error) => {
            // console.log('error=>', error);
        });
    }
    isOpen(open, close) {
        const format = 'HH:mm:ss';
        const currentTime = moment__WEBPACK_IMPORTED_MODULE_8__().format(format);
        const time = moment__WEBPACK_IMPORTED_MODULE_8__(currentTime, format);
        const beforeTime = moment__WEBPACK_IMPORTED_MODULE_8__(open, format);
        const afterTime = moment__WEBPACK_IMPORTED_MODULE_8__(close, format);
        if (time.isBetween(beforeTime, afterTime)) {
            return true;
        }
        return false;
    }
    addFilter(index) {
        // console.log(index);
        if (index === 0) {
            // console.log('rating');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'rating', 'desc');
        }
        else if (index === 1) {
            // console.log('fast');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'time', 'asc');
        }
        else if (index === 2) {
            // console.log('cost');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'dish', 'asc');
        }
        else if (index === 3) {
            // console.log('A-Z');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'name', 'asc');
        }
        else if (index === 4) {
            // console.log('Z-A');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["orderBy"])(this.allRest, 'name', 'desc');
        }
    }
    ngOnInit() {
        // console.log('init');
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['choose-address']);
        });
    }
    openMenu(item) {
        // console.log(item);
        if (item.isOpen === false || item.isClosed === '0') {
            return false;
        }
        const navData = {
            queryParams: {
                id: item.uid
            }
        };
        this.router.navigate(['category'], navData);
    }
    openOffers(item) {
        if (item.type === '0') {
            const navData = {
                queryParams: {
                    id: item.value
                }
            };
            this.router.navigate(['category'], navData);
        }
        else {
            this.iab.create(item.value);
        }
    }
    onSearchChange(event) {
        // console.log(event.detail.value);
        if (event.detail.value && event.detail.value !== '') {
            this.allRest = this.dummyRest.filter((ele) => {
                return ele.name.toLowerCase().includes(event.detail.value.toLowerCase());
            });
        }
        else {
            this.allRest = this.dummyRest;
        }
    }
    chipChange(item) {
        this.allRest = this.dummyRest;
        // console.log(item);
        if (item === 'Fastest Delivery') {
            this.allRest.sort((a, b) => {
                a = new Date(a.time);
                b = new Date(b.time);
                return a > b ? -1 : a < b ? 1 : 0;
            });
        }
        if (item === 'Ratting 4.0+') {
            this.allRest = [];
            this.dummyRest.forEach(ele => {
                if (ele.ratting >= 4) {
                    this.allRest.push(ele);
                }
            });
        }
        if (item === 'Cost') {
            this.allRest.sort((a, b) => {
                a = a.time;
                b = b.time;
                return a > b ? -1 : a < b ? 1 : 0;
            });
        }
    }
    changeLocation() {
        this.router.navigate(['pick-location']);
    }
    bebidas() {
        this.router.navigate(['bebidas']);
    }
    comida() {
        this.router.navigate(['comida']);
    }
    conveniencia() {
        this.router.navigate(['conveniencia']);
    }
    hogaryferreteria() {
        this.router.navigate(['hogaryferreteria']);
    }
    cafeypan() {
        this.router.navigate(['cafeypan']);
    }
    supermercado() {
        this.router.navigate(['supermercado']);
    }
    salud() {
        this.router.navigate(['salud']);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map