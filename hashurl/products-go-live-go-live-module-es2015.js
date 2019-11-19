(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-go-live-go-live-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/products/go-live/go-live/go-live.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/shaale/Desktop/shaale-projects/shaale/node_modules/raw-loader/dist/cjs.js!./src/app/products/go-live/go-live/go-live.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-layout go-live bg-color\">\n    <div class=\"section\" id=\"go-live\">\n        <div class=\"wrapper-prallax\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-12 d-md-none\">\n                        <img src=\"assets/img/live/go-live.png\" class=\"img-responsive\">\n                    </div>\n                    <div class=\"col-md-6 col-12 offset-md-6\">\n                        <div class=\"inner-content\">\n                            <h1 class=\"\">Go <span class=\"red-text\">Live</span> with Shaale</h1>\n                            <p class=\"\">If you are an artiste or event host, you can create an exclusive live stream or\n                                webcast of\n                                your event with our Live service. We can broadcast your event online by producing\n                                uninterrupted live\n                                streaming for unlimited viewers who can access your event on any device in any location.\n                            </p>\n                            <p class=\"\">You can take any kind of event live – a performance, a festival, marquee event,\n                                conference or\n                                a workshop.</p>\n                            <ul>\n                                <li>\n                                    Your event can be made public or privately viewable\n                                </li>\n                                <li>\n                                    You can choose to run it as a free or paid-to-view live stream\n                                </li>\n                            </ul>\n                            <p class=\"\">Our cutting-edge technology and skilled team assure high-quality delivery and a\n                                great\n                                experience for audiences, every time.</p>\n\n                            <a class=\"btn know-more\" href=\"assets/pdf/Shaale-Proposal-for-premium-live-streaming.pdf\"\n                                download>Download\n                                Proposal</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"section\" id=\"app\">\n        <div class=\"container\">\n            <div class=\"wrapper-prallax\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-12 d-md-none\">\n                        <img src=\"assets/img/live/live-app.png\" class=\"img-responsive\">\n                    </div>\n                    <div class=\"col-md-6 col-12\">\n                        <div class=\"inner-content\">\n                            <p class=\"\">Use the Shaale Live mobile app to book and manage the services we offer,\n                                communicate with our\n                                team, get real-time updates and support on your project, and do a lot more from the ease\n                                of your phone.</p>\n                            <h4 class=\"\">Use the Shaale Live App to:</h4>\n                            <p class=\"\">Book our services - Live streaming, video production, still photography, live\n                                sound,\n                                multitrack audio recording, and more, to broadcast and disseminate events related to\n                                traditional Indian\n                                arts and literature, to a global audience.\n                                <ul>\n                                    <li>Manage public livestreams that connect to geographically dispersed audiences.\n                                    </li>\n                                    <li>Connect with our team to tailor the service to your specific needs.</li>\n                                    <li>Monitor the progress of your project.</li>\n                                    <li>Get realtime updates and support.</li>\n                                </ul>\n                                <div class=\"download-app\">\n                                    <a href=\"https://bit.ly/shaaleliveios\">\n                                        <img src=\"assets/img/app-store.png\">\n                                    </a>\n                                    <a href=\"https://bit.ly/shaaleliveandroid\">\n                                        <img src=\"assets/img/google-play.png\">\n                                    </a>\n                                </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/products/go-live/go-live-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/products/go-live/go-live-routing.module.ts ***!
  \************************************************************/
/*! exports provided: GoLiveRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoLiveRoutingModule", function() { return GoLiveRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _go_live_go_live_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./go-live/go-live.component */ "./src/app/products/go-live/go-live/go-live.component.ts");




const routes = [
    {
        path: '',
        component: _go_live_go_live_component__WEBPACK_IMPORTED_MODULE_3__["GoLiveComponent"],
        data: { title: 'Organisation about' }
    }
];
let GoLiveRoutingModule = class GoLiveRoutingModule {
};
GoLiveRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GoLiveRoutingModule);



/***/ }),

/***/ "./src/app/products/go-live/go-live.module.ts":
/*!****************************************************!*\
  !*** ./src/app/products/go-live/go-live.module.ts ***!
  \****************************************************/
/*! exports provided: GoLiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoLiveModule", function() { return GoLiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _go_live_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./go-live-routing.module */ "./src/app/products/go-live/go-live-routing.module.ts");
/* harmony import */ var _go_live_go_live_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./go-live/go-live.component */ "./src/app/products/go-live/go-live/go-live.component.ts");





let GoLiveModule = class GoLiveModule {
};
GoLiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_go_live_go_live_component__WEBPACK_IMPORTED_MODULE_4__["GoLiveComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _go_live_routing_module__WEBPACK_IMPORTED_MODULE_3__["GoLiveRoutingModule"]
        ]
    })
], GoLiveModule);



/***/ }),

/***/ "./src/app/products/go-live/go-live/go-live.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/products/go-live/go-live/go-live.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".go-live.bg-color {\n  background: #4a1c3d;\n}\n\n.go-live .section {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.go-live .section .wrapper-prallax {\n  width: 100%;\n  padding: 50px 0;\n}\n\n.go-live .section .wrapper-prallax .inner-content img {\n  max-width: 100%;\n}\n\n.go-live .section .wrapper-prallax .inner-content ul {\n  padding-left: 17px;\n}\n\n.go-live .section .wrapper-prallax .inner-content ul li {\n  color: #ffffff;\n  font-weight: 300;\n  margin-bottom: 10px;\n  font-size: 1rem;\n}\n\n.go-live .section .wrapper-prallax h1 {\n  font-size: 3rem;\n  color: #ffffff;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 25px;\n}\n\n.go-live .section .wrapper-prallax h1 .red-text {\n  color: #e14146;\n}\n\n.go-live .section .wrapper-prallax p {\n  color: #ffffff;\n  font-weight: 300;\n  margin-bottom: 25px;\n  font-size: 1rem;\n  line-height: 29px;\n}\n\n.go-live .section .wrapper-prallax .btn.know-more {\n  background: #e24146;\n  color: #ffffff;\n  font-size: 18px;\n  padding: 10px 50px;\n  border-radius: 25px;\n  margin-top: 25px;\n}\n\n.go-live .section .wrapper-prallax h4 {\n  font-size: 22px;\n  color: #ffffff;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n}\n\n.go-live .section .wrapper-prallax .download-app {\n  display: flex;\n  width: 100%;\n  justify-content: left;\n  padding: 50px 0 0 0;\n  flex-direction: row;\n}\n\n.go-live .section .wrapper-prallax .download-app a {\n  display: block;\n  margin-right: 30px;\n}\n\n.go-live .section .wrapper-prallax .download-app a img {\n  max-height: 60px;\n}\n\n.go-live .section .wrapper-prallax .img-responsive {\n  max-width: 100%;\n}\n\n#go-live {\n  background-image: url('go-live-bg.png');\n  background-size: contain;\n  background-position: bottom left;\n  box-shadow: 0 0 black;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  padding: 0;\n}\n\n#app {\n  background-image: url('live-app-bg.png');\n  background-size: contain;\n  background-position: bottom right;\n  box-shadow: 0 0 black;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  padding: 0;\n}\n\n@media (max-width: 768px) {\n  .go-live .section .wrapper-prallax h1 {\n    font-size: 2rem;\n    margin-bottom: 10px;\n  }\n  .go-live .section .wrapper-prallax p {\n    margin-bottom: 15px;\n  }\n  .go-live .section .wrapper-prallax .inner-content {\n    padding-top: 30px;\n  }\n  .go-live .section .wrapper-prallax .btn.know-more {\n    padding: 5px 40px;\n    margin-top: 10px;\n    font-size: 16px;\n  }\n\n  #go-live {\n    background-image: none;\n  }\n\n  #app {\n    background-image: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFhbGUvRGVza3RvcC9zaGFhbGUtcHJvamVjdHMvc2hhYWxlL3Byb2plY3RzL3NoYWFsZS9zcmMvYXBwL3Byb2R1Y3RzL2dvLWxpdmUvZ28tbGl2ZS9nby1saXZlLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc2hhYWxlL3NyYy9hcHAvcHJvZHVjdHMvZ28tbGl2ZS9nby1saXZlL2dvLWxpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURDUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQ1o7O0FERWdCO0VBQ0ksZUFBQTtBQ0FwQjs7QURFZ0I7RUFDSSxrQkFBQTtBQ0FwQjs7QURDb0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDeEI7O0FESVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0ZoQjs7QURHZ0I7RUFDSSxjQUFBO0FDRHBCOztBREtZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNIaEI7O0FETVk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSmhCOztBRE9ZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDTGhCOztBRFFZO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNOaEI7O0FEUWdCO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDTnBCOztBRE9vQjtFQUNJLGdCQUFBO0FDTHhCOztBRFVZO0VBQ0ksZUFBQTtBQ1JoQjs7QURjQTtFQUNJLHVDQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUNYSjs7QURjQTtFQUNJLHdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUNYSjs7QURlQTtFQUlnQjtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQ2ZsQjtFRGtCYztJQUNJLG1CQUFBO0VDaEJsQjtFRG1CYztJQUNJLGlCQUFBO0VDakJsQjtFRG9CYztJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VDbEJsQjs7RUR3QkU7SUFDSSxzQkFBQTtFQ3JCTjs7RUR3QkU7SUFDSSxzQkFBQTtFQ3JCTjtBQUNGIiwiZmlsZSI6InByb2plY3RzL3NoYWFsZS9zcmMvYXBwL3Byb2R1Y3RzL2dvLWxpdmUvZ28tbGl2ZS9nby1saXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvLWxpdmUuYmctY29sb3Ige1xuICAgIGJhY2tncm91bmQ6ICM0YTFjM2Q7XG59XG4uZ28tbGl2ZSB7XG4gICAgLnNlY3Rpb24ge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC53cmFwcGVyLXByYWxsYXgge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XG5cbiAgICAgICAgICAgIC5pbm5lci1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgICAgICAucmVkLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2UxNDE0NjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuYnRuLmtub3ctbW9yZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UyNDE0NjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuZG93bmxvYWQtYXBwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuaW1nLXJlc3BvbnNpdmUge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuI2dvLWxpdmUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9saXZlL2dvLWxpdmUtYmcucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBsZWZ0O1xuICAgIGJveC1zaGFkb3c6IDAgMCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgcGFkZGluZzogMDtcbn1cblxuI2FwcCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2xpdmUvbGl2ZS1hcHAtYmcucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodDtcbiAgICBib3gtc2hhZG93OiAwIDAgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmdvLWxpdmUge1xuICAgICAgICAuc2VjdGlvbiB7XG4gICAgICAgICAgICAud3JhcHBlci1wcmFsbGF4IHtcbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW5uZXItY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5idG4ua25vdy1tb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgI2dvLWxpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIH1cbiAgICBcbiAgICAjYXBwIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICB9ICBcbn0iLCIuZ28tbGl2ZS5iZy1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICM0YTFjM2Q7XG59XG5cbi5nby1saXZlIC5zZWN0aW9uIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5nby1saXZlIC5zZWN0aW9uIC53cmFwcGVyLXByYWxsYXgge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuLmdvLWxpdmUgLnNlY3Rpb24gLndyYXBwZXItcHJhbGxheCAuaW5uZXItY29udGVudCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uZ28tbGl2ZSAuc2VjdGlvbiAud3JhcHBlci1wcmFsbGF4IC5pbm5lci1jb250ZW50IHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxN3B4O1xufVxuLmdvLWxpdmUgLnNlY3Rpb24gLndyYXBwZXItcHJhbGxheCAuaW5uZXItY29udGVudCB1bCBsaSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG4uZ28tbGl2ZSAuc2VjdGlvbiAud3JhcHBlci1wcmFsbGF4IGgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uZ28tbGl2ZSAuc2VjdGlvbiAud3JhcHBlci1wcmFsbGF4IGgxIC5yZWQtdGV4dCB7XG4gIGNvbG9yOiAjZTE0MTQ2O1xufVxuLmdvLWxpdmUgLnNlY3Rpb24gLndyYXBwZXItcHJhbGxheCBwIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG4uZ28tbGl2ZSAuc2VjdGlvbiAud3JhcHBlci1wcmFsbGF4IC5idG4ua25vdy1tb3JlIHtcbiAgYmFja2dyb3VuZDogI2UyNDE0NjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTBweCA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLmdvLWxpdmUgLnNlY3Rpb24gLndyYXBwZXItcHJhbGxheCBoNCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZ28tbGl2ZSAuc2VjdGlvbiAud3JhcHBlci1wcmFsbGF4IC5kb3dubG9hZC1hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBwYWRkaW5nOiA1MHB4IDAgMCAwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmdvLWxpdmUgLnNlY3Rpb24gLndyYXBwZXItcHJhbGxheCAuZG93bmxvYWQtYXBwIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLmdvLWxpdmUgLnNlY3Rpb24gLndyYXBwZXItcHJhbGxheCAuZG93bmxvYWQtYXBwIGEgaW1nIHtcbiAgbWF4LWhlaWdodDogNjBweDtcbn1cbi5nby1saXZlIC5zZWN0aW9uIC53cmFwcGVyLXByYWxsYXggLmltZy1yZXNwb25zaXZlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4jZ28tbGl2ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbGl2ZS9nby1saXZlLWJnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gbGVmdDtcbiAgYm94LXNoYWRvdzogMCAwIGJsYWNrO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwYWRkaW5nOiAwO1xufVxuXG4jYXBwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9saXZlL2xpdmUtYXBwLWJnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XG4gIGJveC1zaGFkb3c6IDAgMCBibGFjaztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5nby1saXZlIC5zZWN0aW9uIC53cmFwcGVyLXByYWxsYXggaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5nby1saXZlIC5zZWN0aW9uIC53cmFwcGVyLXByYWxsYXggcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuZ28tbGl2ZSAuc2VjdGlvbiAud3JhcHBlci1wcmFsbGF4IC5pbm5lci1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgfVxuICAuZ28tbGl2ZSAuc2VjdGlvbiAud3JhcHBlci1wcmFsbGF4IC5idG4ua25vdy1tb3JlIHtcbiAgICBwYWRkaW5nOiA1cHggNDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gICNnby1saXZlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICB9XG5cbiAgI2FwcCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/products/go-live/go-live/go-live.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/products/go-live/go-live/go-live.component.ts ***!
  \***************************************************************/
/*! exports provided: GoLiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoLiveComponent", function() { return GoLiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let GoLiveComponent = class GoLiveComponent {
    constructor() { }
    ngOnInit() {
    }
};
GoLiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shaale-go-live',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./go-live.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/products/go-live/go-live/go-live.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./go-live.component.scss */ "./src/app/products/go-live/go-live/go-live.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GoLiveComponent);



/***/ })

}]);
//# sourceMappingURL=products-go-live-go-live-module-es2015.js.map