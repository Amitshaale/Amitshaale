(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["abhyas-abhyas-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/abhyas/abhyas/abhyas.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/abhyas/abhyas/abhyas.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Shaale landing content -->\n<div class=\"shaale-abhyas-landing-content\">\n\n    <section class=\"content-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"abhyas-banner-section\">\n                        <div class=\"row justify-content-center align-items-center\">\n                            <div class=\"col-md-6 padding-right-50\">\n                                <h4>Practice. Perform.</h4>\n                                <p>Abhyas suite of mobile apps is developed to enable and support practice for performing\n                                    arts.</p>\n                            </div>\n                            <div class=\"col-md-6 padding-left-50\">\n                                <img src=\"assets/img/landing/abhyasMockup.png\" />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"content-section\">\n        <div class=\"box-slider\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <ngx-slick-carousel class=\"carousel ngx-silck-slider\" #slickModal=\"slick-carousel\"\n                            [config]=\"boxSliderConfig\" (init)=\"slickInit($event)\">\n        \n                            <div ngxSlickItem class=\"box-slider-content slide\" *ngFor=\"let video of videos\">\n                                <div class=\"box-slider-image-container\">\n                                    <img class=\"owl-lazy\" src=\"{{video.img}}\" alt=\"\">\n                                </div>\n                            </div>\n                        </ngx-slick-carousel>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"content-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <!-- <mat-card class=\"card-style\" style=\"background-image: url('assets/img/landing/background-1.png')\">\n                        <div class=\"card-content\">\n                            <mat-card-title>\n                                Live\n                            </mat-card-title>\n                            <mat-card-subtitle>\n                                Get inspired<br>\n                                by watching the masters\n                            </mat-card-subtitle>\n                            <button mat-raised-button class=\"shaale-red\" routerLink=\"./live\">Watch</button>\n                        </div>\n                    </mat-card> -->\n                    <mat-card class=\"card-style\">\n                        <mat-card-header>\n                            <div class=\"card-header-image\" mat-card-avatar style=\"background-image: url('assets/img/abhyas/carnatic.png')\"></div>\n                            <mat-card-title>for <br> <span>Carnatic</span></mat-card-title>\n                        </mat-card-header>\n                        <mat-card-content>\n                            <p>\n                                Abhyas for Carnatic Music is a practice tool featuring a vast and growing library of Carnatic (South Indian) music solos\n                                that music enthusiasts can enjoy listening to, and percussionists or accompanists can use to rehearse.\n                            </p>\n                            <p>\n                                The app aims to assist music students in learning and mastering accompaniment, while also spreading the joy of classical\n                                music.\n                            </p>\n                            <!-- <a routerLink=\".\">Know more</a> -->\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <div class=\"row justify-content-center align-items-center\">\n                                <div class=\"col-md-5\">\n                                    <p>Get the app.</p>\n                                </div>\n                                <div class=\"col-md-7\">\n                                    <ul>\n                                        <li class=\"\">\n                                            <a href=\"#\">\n                                                <img src=\"assets/img/icons/app-store-48.png\">\n                                            </a>\n                                        </li>\n                                        <li class=\"\">\n                                            <a href=\"#\">\n                                                <img src=\"assets/img/icons/google-play-48.png\">\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </mat-card-actions>\n                    </mat-card>\n                </div>\n                <div class=\"col-md-6\">\n                    <mat-card class=\"card-style\">\n                        <mat-card-header>\n                            <div class=\"card-header-image\" mat-card-avatar style=\"background-image: url('assets/img/abhyas/bharatanatyam.png')\"></div>\n                            <mat-card-title>for <br> <span>BHARATANATYAM</span></mat-card-title>\n                        </mat-card-header>\n                        <mat-card-content>\n                            <p>\n                                Abhyas for Bharatanatyam is designed to support students and practitioners of Bharatanatyam to rehearse as well as\n                                perform.\n                            </p>\n                            <p>\n                                To perform on stage, a Bharatanatyam dancer has to depend on accompanying msuicians; this is not always possible to\n                                manage or afford. The Abhyas for Bharatanatyam app will fill this gap and enable dancers to perform by using its immense\n                                library of classical Bharatanatyam music that is easy to access, search, and play anywhere.\n\n                            </p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <div class=\"row justify-content-center align-items-center\">\n                                <div class=\"col-md-5\">\n                                    <p>Coming Soon.</p>\n                                </div>\n                                <div class=\"col-md-7\">\n                                    <ul>\n                                        <li class=\"disabled\">\n                                            <a href=\"#\">\n                                                <img src=\"assets/img/icons/app-store-48.png\">\n                                            </a>\n                                        </li>\n                                        <li class=\"disabled\">\n                                            <a href=\"#\">\n                                                <img src=\"assets/img/icons/google-play-48.png\">\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </mat-card-actions>\n                    </mat-card>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"content-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <h1 class=\"heading-v1\">How to Videos</h1>\n                    <ngx-slick-carousel class=\"carousel ngx-silck-slider\" #slickModal=\"slick-carousel\"\n                        [config]=\"videoSlideConfig\" (init)=\"slickInit($event)\">\n\n                        <div ngxSlickItem class=\"slider-content-container slide\" *ngFor=\"let video of videos\"\n                            (click)=\"selectEvent(video)\">\n                            <div class=\"slider-image-container\">\n                                <img class=\"owl-lazy\" src=\"{{video.img}}\" alt=\"\">\n                            </div>\n                        </div>\n                    </ngx-slick-carousel>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"content-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <h1 class=\"heading-v1\">Demos</h1>\n                    <ngx-slick-carousel class=\"carousel ngx-silck-slider\" #slickModal=\"slick-carousel\"\n                        [config]=\"videoSlideConfig\" (init)=\"slickInit($event)\">\n\n                        <div ngxSlickItem class=\"slider-content-container slide\" *ngFor=\"let video of videos\"\n                            (click)=\"selectEvent(video)\">\n                            <div class=\"slider-image-container\">\n                                <img class=\"owl-lazy\" src=\"{{video.img}}\" alt=\"\">\n                            </div>\n                        </div>\n                    </ngx-slick-carousel>\n                </div>\n            </div>\n        </div>\n    </section>\n\n</div>\n<!-- Shaale landing content -->");
            /***/ 
        }),
        /***/ "./src/app/products/abhyas/abhyas-routing.module.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/products/abhyas/abhyas-routing.module.ts ***!
          \**********************************************************/
        /*! exports provided: AbhyasRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbhyasRoutingModule", function () { return AbhyasRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _abhyas_abhyas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abhyas/abhyas.component */ "./src/app/products/abhyas/abhyas/abhyas.component.ts");
            var routes = [
                {
                    path: '',
                    component: _abhyas_abhyas_component__WEBPACK_IMPORTED_MODULE_3__["AbhyasComponent"],
                    data: { title: 'shaale.menu.abhyas' }
                }
            ];
            var AbhyasRoutingModule = /** @class */ (function () {
                function AbhyasRoutingModule() {
                }
                return AbhyasRoutingModule;
            }());
            AbhyasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AbhyasRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/products/abhyas/abhyas.module.ts": 
        /*!**************************************************!*\
          !*** ./src/app/products/abhyas/abhyas.module.ts ***!
          \**************************************************/
        /*! exports provided: AbhyasModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbhyasModule", function () { return AbhyasModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
            /* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");
            /* harmony import */ var _abhyas_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abhyas-routing.module */ "./src/app/products/abhyas/abhyas-routing.module.ts");
            /* harmony import */ var _abhyas_abhyas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./abhyas/abhyas.component */ "./src/app/products/abhyas/abhyas/abhyas.component.ts");
            var AbhyasModule = /** @class */ (function () {
                function AbhyasModule() {
                }
                return AbhyasModule;
            }());
            AbhyasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_abhyas_abhyas_component__WEBPACK_IMPORTED_MODULE_7__["AbhyasComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _abhyas_routing_module__WEBPACK_IMPORTED_MODULE_6__["AbhyasRoutingModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"],
                        _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__["ScrollToModule"].forRoot()
                    ]
                })
            ], AbhyasModule);
            /***/ 
        }),
        /***/ "./src/app/products/abhyas/abhyas/abhyas.component.scss": 
        /*!**************************************************************!*\
          !*** ./src/app/products/abhyas/abhyas/abhyas.component.scss ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".shaale-abhyas-landing-content .content-section {\n  padding-bottom: 100px;\n}\n.shaale-abhyas-landing-content .content-section .heading-v1 {\n  font-size: 48px;\n  letter-spacing: -0.05px;\n  font-weight: 700;\n  margin-bottom: 30px;\n  text-align: left;\n  text-transform: capitalize;\n}\n.shaale-abhyas-landing-content .card-style {\n  position: relative;\n  padding: 80px 60px;\n  min-height: 300px;\n  background: #131415;\n  box-shadow: 4px 4px 16px 0 rgba(0, 0, 0, 0.16);\n  border-radius: 5px;\n  border-radius: 5px;\n}\n.shaale-abhyas-landing-content .card-style mat-card-header {\n  margin-bottom: 50px;\n}\n.shaale-abhyas-landing-content .card-style mat-card-header .card-header-image {\n  height: 90px;\n  width: 90px;\n  border-radius: 10px;\n  text-align: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 100% 100%;\n  margin-right: 15px;\n}\n.shaale-abhyas-landing-content .card-style mat-card-header mat-card-title {\n  font-size: 42px;\n  color: #FFFFFF;\n  text-align: left;\n  line-height: 48px;\n  margin: 0;\n  text-transform: uppercase;\n}\n.shaale-abhyas-landing-content .card-style mat-card-header mat-card-title span {\n  color: #e34245;\n}\n.shaale-abhyas-landing-content .card-style mat-card-content {\n  min-height: 240px;\n}\n.shaale-abhyas-landing-content .card-style mat-card-content p {\n  font-size: 16px;\n  color: #FFFFFF;\n  text-align: justify;\n}\n.shaale-abhyas-landing-content .card-style mat-card-content a {\n  font-weight: 300;\n  font-size: 16px;\n  color: #e34245;\n  text-align: justify;\n  line-height: 20px;\n  text-decoration: underline;\n}\n.shaale-abhyas-landing-content .card-style mat-card-actions {\n  margin: 0;\n}\n.shaale-abhyas-landing-content .card-style mat-card-actions p {\n  margin: 0;\n  font-size: 21px;\n  color: #FFFFFF;\n  font-weight: 300;\n}\n.shaale-abhyas-landing-content .card-style mat-card-actions ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.shaale-abhyas-landing-content .card-style mat-card-actions ul li {\n  display: inline-block;\n  padding: 5px 25px;\n}\n.shaale-abhyas-landing-content .card-style mat-card-actions ul li:first-child {\n  border-right: 1px solid #808080;\n}\n.shaale-abhyas-landing-content .card-style mat-card-actions ul li a {\n  display: block;\n}\n.shaale-abhyas-landing-content .card-style mat-card-actions ul .disabled {\n  -webkit-filter: grayscale(100%);\n  /* Safari 6.0 - 9.0 */\n  filter: grayscale(100%);\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFhbGUvRGVza3RvcC93b3JraW5nLXByb2plY3Qvc2hhYWxlLXNzci9zaGFhbGUvc3JjL2FwcC9wcm9kdWN0cy9hYmh5YXMvYWJoeWFzL2FiaHlhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvYWJoeWFzL2FiaHlhcy9hYmh5YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxxQkFBQTtBQ0RSO0FER1E7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0RaO0FES0k7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES1E7RUFDSSxtQkFBQTtBQ0haO0FESVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ0ZoQjtBRElZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FDRmhCO0FESWdCO0VBQ0ksY0FBQTtBQ0ZwQjtBRE1RO0VBQ0ksaUJBQUE7QUNKWjtBREtZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0hoQjtBRE1ZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ0poQjtBRFFRO0VBQ0ksU0FBQTtBQ05aO0FET1k7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0xoQjtBRE9ZO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0xoQjtBRE9nQjtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUNMcEI7QURPb0I7RUFDSSwrQkFBQTtBQ0x4QjtBRFFvQjtFQUNJLGNBQUE7QUNOeEI7QURXZ0I7RUFDSSwrQkFBQTtFQUFpQyxxQkFBQTtFQUNqQyx1QkFBQTtFQUNBLG9CQUFBO0FDUnBCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvYWJoeWFzL2FiaHlhcy9hYmh5YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hhYWxlLWFiaHlhcy1sYW5kaW5nLWNvbnRlbnQge1xuXG4gICAgLmNvbnRlbnQtc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcblxuICAgICAgICAuaGVhZGluZy12MSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmQtc3R5bGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDgwcHggNjBweDtcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxMzE0MTU7XG4gICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTZweCAwIHJnYmEoMCwwLDAsMC4xNik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgIG1hdC1jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgLmNhcmQtaGVhZGVyLWltYWdlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXQtY2FyZC10aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMzQyNDU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgbWluLWhlaWdodDogMjQwcHg7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNlMzQyNDU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1jYXJkLWFjdGlvbnMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDI1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODA4MDgwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7IC8qIFNhZmFyaSA2LjAgLSA5LjAgKi9cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XG5cbiAgICBcbn1cblxuQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIGFuZCAoaG92ZXI6IG5vbmUpIHtcblxuICAgIFxuXG59IiwiLnNoYWFsZS1hYmh5YXMtbGFuZGluZy1jb250ZW50IC5jb250ZW50LXNlY3Rpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG4uc2hhYWxlLWFiaHlhcy1sYW5kaW5nLWNvbnRlbnQgLmNvbnRlbnQtc2VjdGlvbiAuaGVhZGluZy12MSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnNoYWFsZS1hYmh5YXMtbGFuZGluZy1jb250ZW50IC5jYXJkLXN0eWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA4MHB4IDYwcHg7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTMxNDE1O1xuICBib3gtc2hhZG93OiA0cHggNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5zaGFhbGUtYWJoeWFzLWxhbmRpbmctY29udGVudCAuY2FyZC1zdHlsZSBtYXQtY2FyZC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLnNoYWFsZS1hYmh5YXMtbGFuZGluZy1jb250ZW50IC5jYXJkLXN0eWxlIG1hdC1jYXJkLWhlYWRlciAuY2FyZC1oZWFkZXItaW1hZ2Uge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLnNoYWFsZS1hYmh5YXMtbGFuZGluZy1jb250ZW50IC5jYXJkLXN0eWxlIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uc2hhYWxlLWFiaHlhcy1sYW5kaW5nLWNvbnRlbnQgLmNhcmQtc3R5bGUgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxlIHNwYW4ge1xuICBjb2xvcjogI2UzNDI0NTtcbn1cbi5zaGFhbGUtYWJoeWFzLWxhbmRpbmctY29udGVudCAuY2FyZC1zdHlsZSBtYXQtY2FyZC1jb250ZW50IHtcbiAgbWluLWhlaWdodDogMjQwcHg7XG59XG4uc2hhYWxlLWFiaHlhcy1sYW5kaW5nLWNvbnRlbnQgLmNhcmQtc3R5bGUgbWF0LWNhcmQtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5zaGFhbGUtYWJoeWFzLWxhbmRpbmctY29udGVudCAuY2FyZC1zdHlsZSBtYXQtY2FyZC1jb250ZW50IGEge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZTM0MjQ1O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2hhYWxlLWFiaHlhcy1sYW5kaW5nLWNvbnRlbnQgLmNhcmQtc3R5bGUgbWF0LWNhcmQtYWN0aW9ucyB7XG4gIG1hcmdpbjogMDtcbn1cbi5zaGFhbGUtYWJoeWFzLWxhbmRpbmctY29udGVudCAuY2FyZC1zdHlsZSBtYXQtY2FyZC1hY3Rpb25zIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc2hhYWxlLWFiaHlhcy1sYW5kaW5nLWNvbnRlbnQgLmNhcmQtc3R5bGUgbWF0LWNhcmQtYWN0aW9ucyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5zaGFhbGUtYWJoeWFzLWxhbmRpbmctY29udGVudCAuY2FyZC1zdHlsZSBtYXQtY2FyZC1hY3Rpb25zIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMjVweDtcbn1cbi5zaGFhbGUtYWJoeWFzLWxhbmRpbmctY29udGVudCAuY2FyZC1zdHlsZSBtYXQtY2FyZC1hY3Rpb25zIHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzgwODA4MDtcbn1cbi5zaGFhbGUtYWJoeWFzLWxhbmRpbmctY29udGVudCAuY2FyZC1zdHlsZSBtYXQtY2FyZC1hY3Rpb25zIHVsIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zaGFhbGUtYWJoeWFzLWxhbmRpbmctY29udGVudCAuY2FyZC1zdHlsZSBtYXQtY2FyZC1hY3Rpb25zIHVsIC5kaXNhYmxlZCB7XG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIC8qIFNhZmFyaSA2LjAgLSA5LjAgKi9cbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/products/abhyas/abhyas/abhyas.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/products/abhyas/abhyas/abhyas.component.ts ***!
          \************************************************************/
        /*! exports provided: AbhyasComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbhyasComponent", function () { return AbhyasComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AbhyasComponent = /** @class */ (function () {
                function AbhyasComponent(router) {
                    this.router = router;
                    this.videos = [
                        {
                            img: 'assets/img/placeholder.png',
                            name: 'Rationalist s dramas and comedies of social suffering ',
                            description: 'GIPA'
                        },
                        {
                            img: 'assets/img/placeholder.png',
                            name: 'naraharikaviya torave ramayanada reading- definition program',
                            description: 'GIPA'
                        },
                        {
                            img: 'assets/img/placeholder.png',
                            name: 'd. V. G. Literary Awakening - Dr. R. Ganesh',
                            description: 'GIPA'
                        },
                        {
                            img: 'assets/img/placeholder.png',
                            name: 'naraharikaviya torave ramayanada reading- definition program',
                            description: 'GIPA'
                        },
                        {
                            img: 'assets/img/placeholder.png',
                            name: 'd. V. G. Literary Awakening - Dr. R. Ganesh',
                            description: 'GIPA'
                        },
                        {
                            img: 'assets/img/placeholder.png',
                            name: 'd. V. G. Literary Awakening - Dr. R. Ganesh',
                            description: 'GIPA'
                        }
                    ];
                    this.boxSliderConfig = {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dragScroll: false,
                        swipe: false,
                        nav: false,
                        autoplay: true,
                        autoplaySpeed: 5000,
                        nextArrow: '<div class="nav-btn next-slide"><img src="assets/img/icons/arrow-right.png"></div>',
                        prevArrow: '<div class="nav-btn prev-slide"><img src="assets/img/icons/arrow-left.png"></div>',
                        dots: true,
                        loop: true,
                        lazyLoad: "progressive",
                        fade: true,
                    };
                    this.videoSlideConfig = {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        nextArrow: '<div class="nav-btn next-slide"><img src="assets/img/icons/right-arrow-icon.png"></div>',
                        prevArrow: '<div class="nav-btn prev-slide"><img src="assets/img/icons/left-arrow-icon.png"></div>',
                        dots: false,
                        infinite: false,
                        dragScroll: true,
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            },
                            {
                                breakpoint: 991,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    };
                }
                AbhyasComponent.prototype.slickInit = function (e) {
                    console.log('slick initialized');
                };
                AbhyasComponent.prototype.selectEvent = function (data) {
                    console.log(data);
                    // let heroId = data ? data : null;
                    // Pass along the hero id if available
                    // so that the HeroList component can select that hero.
                    // Include a junk 'foo' property for fun.
                    this.router.navigate(['live/event']);
                };
                AbhyasComponent.prototype.changeSlide = function (index) {
                    this.slickModal.slickGoTo(index);
                };
                AbhyasComponent.prototype.ngOnInit = function () { };
                return AbhyasComponent;
            }());
            AbhyasComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slickModal", { static: true })
            ], AbhyasComponent.prototype, "slickModal", void 0);
            AbhyasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'shaale-abhyas',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./abhyas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/abhyas/abhyas/abhyas.component.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./abhyas.component.scss */ "./src/app/products/abhyas/abhyas/abhyas.component.scss")).default]
                })
            ], AbhyasComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=abhyas-abhyas-module-es2015.js.map
//# sourceMappingURL=abhyas-abhyas-module-es5.js.map
//# sourceMappingURL=abhyas-abhyas-module-es5.js.map