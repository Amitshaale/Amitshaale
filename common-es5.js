(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
        /***/ "./src/app/shared/rest-api.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/shared/rest-api.service.ts ***!
          \********************************************/
        /*! exports provided: RestApiService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApiService", function () { return RestApiService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var RestApiService = /** @class */ (function () {
                // localToken = JSON.parse(localStorage.getItem("token"));
                function RestApiService(http) {
                    this.http = http;
                    // Define API
                    this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
                    this.razorPayKey = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].key;
                    this.razorPaySecretKey = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].key_secret;
                    /*========================================
                      CRUD Methods for consuming RESTful API
                    =========================================*/
                    /* ===========
                     Auth API
                    ===================*/
                    // Http Options
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json'
                        })
                    };
                }
                // HttpClient API for email signup
                RestApiService.prototype.createUser = function (newUser) {
                    return this.http.post(this.apiURL + '/auth/signup/email', newUser, this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                // HttpClient API for email Login
                RestApiService.prototype.loginUser = function (newUser) {
                    return this.http.post(this.apiURL + '/auth/login/email', newUser, this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                // HttpClient API for social login
                RestApiService.prototype.loginUserSocial = function (socialUserDetails) {
                    return this.http.post(this.apiURL + '/auth/login/social/' + socialUserDetails.provider, {
                        token: socialUserDetails.token
                    }, this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                // HttpClient API for verify email
                RestApiService.prototype.emailVerify = function (newUser) {
                    return this.http.post(this.apiURL + '/auth/verify/email', newUser, this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                // HttpClient API for verify mobile
                RestApiService.prototype.verifyMobile = function (newUser) {
                    return this.http.post(this.apiURL + '/auth/verify/phone', newUser, this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                // HttpClient API for send mobile otp
                RestApiService.prototype.sendOtp = function (newUser) {
                    return this.http.post(this.apiURL + '/auth/verify/send-otp', newUser, this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                // HttpClient API for send email verification
                RestApiService.prototype.sendEmailVerification = function (newUser) {
                    return this.http.post(this.apiURL + '/auth/verify/send-otp', newUser, this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                RestApiService.prototype.updatePhone = function (updateUserDetails) {
                    return this.http.post(this.apiURL + '/auth/me', updateUserDetails, this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                RestApiService.prototype.updateIsValid = function (newUser) {
                    return this.http.put(this.apiURL + '/auth/me/sessions/watch/is-valid', newUser, this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                // HttpClient API for Forgot Password
                RestApiService.prototype.forgotPassword = function (data) {
                    return this.http.get(this.apiURL + '/auth/me/forgot-password/' + data, this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                // HttpClient API for User details
                RestApiService.prototype.getUserDetails = function () {
                    return this.http.get(this.apiURL + '/auth/me', this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                // HttpClient API for Sessions
                RestApiService.prototype.getSessions = function () {
                    return this.http.get(this.apiURL + '/auth/me/sessions', this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                // HttpClient API for Sessions with id
                RestApiService.prototype.getSessionsWIthID = function () {
                    return this.http.get(this.apiURL + '/auth/me/sessions/{sessionId}', this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                RestApiService.prototype.getIsValid = function () {
                    return this.http.get(this.apiURL + '/auth/me/sessions/watch/is-valid', this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                /* ===========
                live API
                ===================*/
                RestApiService.prototype.getLiveEvents = function () {
                    return this.http.get(this.apiURL + '/live/events', this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                RestApiService.prototype.getLiveEventDetails = function (eventUrl) {
                    return this.http.get(this.apiURL + '/live/events/by-url/' + eventUrl, this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                RestApiService.prototype.getLiveEventVideo = function () {
                    return this.http.get(this.apiURL + '/live/events/by-id/{eventID}/video', this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                RestApiService.prototype.getCouponCode = function () {
                    return this.http.get(this.apiURL + '/live/events/by-id/{eventID}/coupons/{couponCode}', this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                RestApiService.prototype.purchaseDetails = function (eventPurchaseData) {
                    return this.http.post(this.apiURL + '/live/events/by-id/' + eventPurchaseData.eventId + '/purchase', eventPurchaseData.orderId, this.httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
                };
                return RestApiService;
            }());
            RestApiService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            RestApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RestApiService);
            /***/ 
        })
    }]);
//# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map
//# sourceMappingURL=common-es5.js.map