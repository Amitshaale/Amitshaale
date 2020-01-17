var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
        /***/ "./node_modules/angularx-social-login/angularx-social-login.js": 
        /*!*********************************************************************!*\
          !*** ./node_modules/angularx-social-login/angularx-social-login.js ***!
          \*********************************************************************/
        /*! exports provided: AuthService, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule, SocialUser, ɵa */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceConfig", function () { return AuthServiceConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginProvider", function () { return FacebookLoginProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginProvider", function () { return GoogleLoginProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginModule", function () { return SocialLoginModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialUser", function () { return SocialUser; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function () { return BaseLoginProvider; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var AuthServiceConfig = /** @class */ (function () {
                /**
                 * @param {?} providers
                 */
                function AuthServiceConfig(providers) {
                    this.lazyLoad = false;
                    this.providers = new Map();
                    for (var i = 0; i < providers.length; i++) {
                        /** @type {?} */
                        var element = providers[i];
                        this.providers.set(element.id, element.provider);
                        this.lazyLoad = this.lazyLoad || element.lazyLoad;
                    }
                }
                return AuthServiceConfig;
            }());
            var AuthService = /** @class */ (function () {
                /**
                 * @param {?} config
                 */
                function AuthService(config) {
                    this._user = null;
                    this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
                    this._readyState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
                    this.initialized = false;
                    this.providers = config.providers;
                    if (!config.lazyLoad) {
                        this.initialize();
                    }
                }
                Object.defineProperty(AuthService.prototype, "authState", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._authState.asObservable();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AuthService.prototype, "readyState", {
                    /**
                     * Provides an array of provider ID's as they become ready
                     * @return {?}
                     */
                    get: function () {
                        return this._readyState.asObservable();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @private
                 * @return {?}
                 */
                AuthService.prototype.initialize = function () {
                    var _this = this;
                    this.initialized = true;
                    this.providers.forEach(( /**
                     * @param {?} provider
                     * @param {?} key
                     * @return {?}
                     */function (provider, key) {
                        provider.initialize().then(( /**
                         * @return {?}
                         */function () {
                            /** @type {?} */
                            var readyProviders = _this._readyState.getValue();
                            readyProviders.push(key);
                            _this._readyState.next(readyProviders);
                            provider.getLoginStatus().then(( /**
                             * @param {?} user
                             * @return {?}
                             */function (user) {
                                user.provider = key;
                                _this._user = user;
                                _this._authState.next(user);
                            })).catch(( /**
                             * @param {?} err
                             * @return {?}
                             */function (err) {
                                _this._authState.next(null);
                            }));
                        }));
                    }));
                };
                /**
                 * @param {?} providerId
                 * @param {?=} opt
                 * @return {?}
                 */
                AuthService.prototype.signIn = function (providerId, opt) {
                    var _this = this;
                    if (!this.initialized) {
                        this.initialize();
                    }
                    return new Promise(( /**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */function (resolve, reject) {
                        /** @type {?} */
                        var providerObject = _this.providers.get(providerId);
                        if (providerObject) {
                            providerObject.signIn(opt).then(( /**
                             * @param {?} user
                             * @return {?}
                             */function (user) {
                                user.provider = providerId;
                                resolve(user);
                                _this._user = user;
                                _this._authState.next(user);
                            })).catch(( /**
                             * @param {?} err
                             * @return {?}
                             */function (/**
                             * @param {?} err
                             * @return {?}
                             */ err) {
                                reject(err);
                            }));
                        }
                        else {
                            reject(AuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                        }
                    }));
                };
                /**
                 * @param {?=} revoke
                 * @return {?}
                 */
                AuthService.prototype.signOut = function (revoke) {
                    var _this = this;
                    if (revoke === void 0) { revoke = false; }
                    if (!this.initialized) {
                        this.initialize();
                    }
                    return new Promise(( /**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */function (resolve, reject) {
                        if (!_this._user) {
                            reject(AuthService.ERR_NOT_LOGGED_IN);
                        }
                        else {
                            /** @type {?} */
                            var providerId = _this._user.provider;
                            /** @type {?} */
                            var providerObject = _this.providers.get(providerId);
                            if (providerObject) {
                                providerObject.signOut(revoke).then(( /**
                                 * @return {?}
                                 */function () {
                                    resolve();
                                    _this._user = null;
                                    _this._authState.next(null);
                                })).catch(( /**
                                 * @param {?} err
                                 * @return {?}
                                 */function (err) {
                                    reject(err);
                                }));
                            }
                            else {
                                reject(AuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                            }
                        }
                    }));
                };
                return AuthService;
            }());
            AuthService.ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
            AuthService.ERR_NOT_LOGGED_IN = 'Not logged in';
            AuthService.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
            ];
            /** @nocollapse */
            AuthService.ctorParameters = function () { return [
                { type: AuthServiceConfig }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var SocialLoginModule = /** @class */ (function () {
                function SocialLoginModule() {
                }
                /**
                 * @param {?} config
                 * @return {?}
                 */
                SocialLoginModule.initialize = function (config) {
                    return {
                        ngModule: SocialLoginModule,
                        providers: [
                            AuthService,
                            {
                                provide: AuthServiceConfig,
                                useValue: config
                            }
                        ]
                    };
                };
                return SocialLoginModule;
            }());
            SocialLoginModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                            ],
                            providers: [
                                AuthService
                            ]
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var SocialUser = /** @class */ (function () {
                function SocialUser() {
                }
                return SocialUser;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @abstract
             */
            var BaseLoginProvider = /** @class */ (function () {
                function BaseLoginProvider() {
                    this._readyState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
                }
                /**
                 * @protected
                 * @return {?}
                 */
                BaseLoginProvider.prototype.onReady = function () {
                    var _this = this;
                    return new Promise(( /**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */function (resolve, reject) {
                        _this._readyState.subscribe(( /**
                         * @param {?} isReady
                         * @return {?}
                         */function (isReady) {
                            if (isReady) {
                                resolve();
                            }
                        }));
                    }));
                };
                /**
                 * @param {?} id
                 * @param {?} src
                 * @param {?} onload
                 * @param {?=} async
                 * @param {?=} inner_text_content
                 * @return {?}
                 */
                BaseLoginProvider.prototype.loadScript = function (id, src, onload, async, inner_text_content) {
                    if (async === void 0) { async = true; }
                    if (inner_text_content === void 0) { inner_text_content = ''; }
                    // get document if platform is only browser
                    if (typeof document !== 'undefined' && !document.getElementById(id)) {
                        /** @type {?} */
                        var signInJS = document.createElement('script');
                        signInJS.async = async;
                        signInJS.src = src;
                        signInJS.onload = onload;
                        /*
                        if (inner_text_content) // LinkedIn
                            signInJS.text = inner_text_content;
                        */
                        document.head.appendChild(signInJS);
                    }
                };
                return BaseLoginProvider;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var GoogleLoginProvider = /** @class */ (function (_super) {
                __extends(GoogleLoginProvider, _super);
                /**
                 * @param {?} clientId
                 * @param {?=} opt
                 */
                function GoogleLoginProvider(clientId, opt) {
                    if (opt === void 0) { opt = { scope: 'email' }; }
                    var _this = _super.call(this) || this;
                    _this.clientId = clientId;
                    _this.opt = opt;
                    return _this;
                }
                /**
                 * @return {?}
                 */
                GoogleLoginProvider.prototype.initialize = function () {
                    var _this = this;
                    return new Promise(( /**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */function (resolve, reject) {
                        _this.loadScript(GoogleLoginProvider.PROVIDER_ID, 'https://apis.google.com/js/platform.js', ( /**
                         * @return {?}
                         */function () {
                            gapi.load('auth2', ( /**
                             * @return {?}
                             */function () {
                                _this.auth2 = gapi.auth2.init(Object.assign({}, _this.opt, { client_id: _this.clientId }));
                                _this.auth2.then(( /**
                                 * @return {?}
                                 */function () {
                                    _this._readyState.next(true);
                                    resolve();
                                })).catch(( /**
                                 * @param {?} err
                                 * @return {?}
                                 */function (err) {
                                    reject(err);
                                }));
                            }));
                        }));
                    }));
                };
                /**
                 * @return {?}
                 */
                GoogleLoginProvider.prototype.getLoginStatus = function () {
                    var _this = this;
                    return new Promise(( /**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */function (resolve, reject) {
                        _this.onReady().then(( /**
                         * @return {?}
                         */function () {
                            if (_this.auth2.isSignedIn.get()) {
                                /** @type {?} */
                                var user = new SocialUser();
                                /** @type {?} */
                                var profile = _this.auth2.currentUser.get().getBasicProfile();
                                /** @type {?} */
                                var token = _this.auth2.currentUser.get().getAuthResponse(true).access_token;
                                /** @type {?} */
                                var backendToken = _this.auth2.currentUser.get().getAuthResponse(true).id_token;
                                user.id = profile.getId();
                                user.name = profile.getName();
                                user.email = profile.getEmail();
                                user.photoUrl = profile.getImageUrl();
                                user.firstName = profile.getGivenName();
                                user.lastName = profile.getFamilyName();
                                user.authToken = token;
                                user.idToken = backendToken;
                                resolve(user);
                            }
                            else {
                                reject('No user is currently logged in.');
                            }
                        }));
                    }));
                };
                /**
                 * @param {?=} opt
                 * @return {?}
                 */
                GoogleLoginProvider.prototype.signIn = function (opt) {
                    var _this = this;
                    return new Promise(( /**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */function (resolve, reject) {
                        _this.onReady().then(( /**
                         * @return {?}
                         */function () {
                            /** @type {?} */
                            var offlineAccess = (opt && opt.offline_access) || (_this.opt && _this.opt.offline_access);
                            /** @type {?} */
                            var promise = !offlineAccess ? _this.auth2.signIn(opt) : _this.auth2.grantOfflineAccess(opt);
                            promise.then(( /**
                             * @param {?} response
                             * @return {?}
                             */function (response) {
                                /** @type {?} */
                                var user = new SocialUser();
                                /** @type {?} */
                                var profile = _this.auth2.currentUser.get().getBasicProfile();
                                /** @type {?} */
                                var token = _this.auth2.currentUser.get().getAuthResponse(true).access_token;
                                /** @type {?} */
                                var backendToken = _this.auth2.currentUser.get().getAuthResponse(true).id_token;
                                user.id = profile.getId();
                                user.name = profile.getName();
                                user.email = profile.getEmail();
                                user.photoUrl = profile.getImageUrl();
                                user.firstName = profile.getGivenName();
                                user.lastName = profile.getFamilyName();
                                user.authToken = token;
                                user.idToken = backendToken;
                                if (response && response.code) {
                                    user.authorizationCode = response.code;
                                }
                                resolve(user);
                            }), ( /**
                             * @param {?} closed
                             * @return {?}
                             */function (closed) {
                                reject('User cancelled login or did not fully authorize.');
                            })).catch(( /**
                             * @param {?} err
                             * @return {?}
                             */function (err) {
                                reject(err);
                            }));
                        }));
                    }));
                };
                /**
                 * @param {?=} revoke
                 * @return {?}
                 */
                GoogleLoginProvider.prototype.signOut = function (revoke) {
                    var _this = this;
                    return new Promise(( /**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */function (resolve, reject) {
                        _this.onReady().then(( /**
                         * @return {?}
                         */function () {
                            /** @type {?} */
                            var signOutPromise;
                            if (revoke) {
                                signOutPromise = _this.auth2.disconnect();
                            }
                            else {
                                signOutPromise = _this.auth2.signOut();
                            }
                            signOutPromise.then(( /**
                             * @param {?} err
                             * @return {?}
                             */function (err) {
                                if (err) {
                                    reject(err);
                                }
                                else {
                                    resolve();
                                }
                            })).catch(( /**
                             * @param {?} err
                             * @return {?}
                             */function (err) {
                                reject(err);
                            }));
                        }));
                    }));
                };
                return GoogleLoginProvider;
            }(BaseLoginProvider));
            GoogleLoginProvider.PROVIDER_ID = 'GOOGLE';
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FacebookLoginProvider = /** @class */ (function (_super) {
                __extends(FacebookLoginProvider, _super);
                /**
                 * @param {?} clientId
                 * @param {?=} opt
                 * @param {?=} locale
                 * @param {?=} fields
                 * @param {?=} version
                 */
                function FacebookLoginProvider(clientId, opt, locale, fields, version) {
                    if (opt === void 0) { opt = { scope: 'email,public_profile' }; }
                    if (locale === void 0) { locale = 'en_US'; }
                    if (fields === void 0) { fields = 'name,email,picture,first_name,last_name'; }
                    if (version === void 0) { version = 'v4.0'; }
                    var _this = _super.call(this) || this;
                    _this.clientId = clientId;
                    _this.opt = opt;
                    _this.locale = locale;
                    _this.fields = fields;
                    _this.version = version;
                    return _this;
                }
                /**
                 * @return {?}
                 */
                FacebookLoginProvider.prototype.initialize = function () {
                    var _this = this;
                    return new Promise(( /**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */function (resolve, reject) {
                        _this.loadScript(FacebookLoginProvider.PROVIDER_ID, "//connect.facebook.net/" + _this.locale + "/sdk.js", ( /**
                         * @return {?}
                         */function () {
                            FB.init({
                                appId: _this.clientId,
                                autoLogAppEvents: true,
                                cookie: true,
                                xfbml: true,
                                version: _this.version
                            });
                            // FB.AppEvents.logPageView(); #FIX for #18
                            _this._readyState.next(true);
                            resolve();
                        }));
                    }));
                };
                /**
                 * @return {?}
                 */
                FacebookLoginProvider.prototype.getLoginStatus = function () {
                    var _this = this;
                    return new Promise(( /**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */function (resolve, reject) {
                        _this.onReady().then(( /**
                         * @return {?}
                         */function () {
                            FB.getLoginStatus(( /**
                             * @param {?} response
                             * @return {?}
                             */function (response) {
                                if (response.status === 'connected') {
                                    /** @type {?} */
                                    var authResponse_1 = response.authResponse;
                                    FB.api("/me?fields=" + _this.fields, ( /**
                                     * @param {?} fbUser
                                     * @return {?}
                                     */function (fbUser) {
                                        /** @type {?} */
                                        var user = new SocialUser();
                                        user.id = fbUser.id;
                                        user.name = fbUser.name;
                                        user.email = fbUser.email;
                                        user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal';
                                        user.firstName = fbUser.first_name;
                                        user.lastName = fbUser.last_name;
                                        user.authToken = authResponse_1.accessToken;
                                        user.facebook = fbUser;
                                        resolve(user);
                                    }));
                                }
                                else {
                                    reject('No user is currently logged in.');
                                }
                            }));
                        }));
                    }));
                };
                /**
                 * @param {?=} opt
                 * @return {?}
                 */
                FacebookLoginProvider.prototype.signIn = function (opt) {
                    var _this = this;
                    return new Promise(( /**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */function (resolve, reject) {
                        _this.onReady().then(( /**
                         * @return {?}
                         */function () {
                            FB.login(( /**
                             * @param {?} response
                             * @return {?}
                             */function (response) {
                                if (response.authResponse) {
                                    /** @type {?} */
                                    var authResponse_2 = response.authResponse;
                                    FB.api("/me?fields=" + _this.fields, ( /**
                                     * @param {?} fbUser
                                     * @return {?}
                                     */function (fbUser) {
                                        /** @type {?} */
                                        var user = new SocialUser();
                                        user.id = fbUser.id;
                                        user.name = fbUser.name;
                                        user.email = fbUser.email;
                                        user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal';
                                        user.firstName = fbUser.first_name;
                                        user.lastName = fbUser.last_name;
                                        user.authToken = authResponse_2.accessToken;
                                        user.facebook = fbUser;
                                        resolve(user);
                                    }));
                                }
                                else {
                                    reject('User cancelled login or did not fully authorize.');
                                }
                            }), _this.opt);
                        }));
                    }));
                };
                /**
                 * @return {?}
                 */
                FacebookLoginProvider.prototype.signOut = function () {
                    var _this = this;
                    return new Promise(( /**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */function (resolve, reject) {
                        _this.onReady().then(( /**
                         * @return {?}
                         */function () {
                            FB.logout(( /**
                             * @param {?} response
                             * @return {?}
                             */function (response) {
                                resolve();
                            }));
                        }));
                    }));
                };
                return FacebookLoginProvider;
            }(BaseLoginProvider));
            FacebookLoginProvider.PROVIDER_ID = 'FACEBOOK';
            //# sourceMappingURL=angularx-social-login.js.map
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-header\">\n    <div class=\"header-inner\">\n        <img src=\"assets/img/logo.png\" routerLink=\"/\">\n        <button mat-stroked-button routerLink=\"/auth/signup\">Sign up</button>\n    </div>\n</div>\n\n<section class=\"auth-wrapper\">\n    <div class=\"container\">\n        <div class=\"row justify-content-md-center align-items-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"auth-heading\">\n                    <h1>Forgot Password</h1>\n                    <p>You will get reset password link in your email</p>\n                </div>\n                <div class=\"auth-outer\">\n                    <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onSubmit()\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Email ID</mat-label>\n                            <input matInput formControlName=\"email\" placeholder=\"Enter your Email ID\" required>\n                            <mat-icon matSuffix>email</mat-icon>\n                            <mat-error *ngIf=\"hasError('email', 'required')\">Email is required</mat-error>\n                            <mat-error *ngIf=\"hasError('email', 'email')\">Email is not valid</mat-error>\n                        </mat-form-field>\n                        <button mat-raised-button class=\"login-button\" [disabled]=\"forgotPasswordForm.invalid || isLoading\">\n                            <i class=\"fa\" [ngClass]=\"{'fa-spin fa-spinner': isLoading}\"></i>\n                            {{ button }}\n                        </button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-header\">\n    <div class=\"header-inner\">\n        <img src=\"assets/img/logo.png\" routerLink=\"/\">\n        <button mat-stroked-button routerLink=\"/auth/signup\">Sign up</button>\n    </div>\n</div>\n<section class=\"auth-wrapper\">\n    <div class=\"container\">\n        <div class=\"row justify-content-md-center align-items-center\">\n            <div class=\"col-lg-8\">\n                <div class=\"auth-heading\">\n                    <h1>Log In</h1>\n                    <p>New to Shaale? <a href=\"#\" routerLink=\"/auth/signup\">Sign Up</a></p>\n                </div>\n                <div class=\"auth-outer\">\n                    <div class=\"row justify-content-md-center align-items-center\">\n                        <div class=\"col-md-6 form-section\">\n                            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Email ID</mat-label>\n                                    <input matInput formControlName=\"email\" placeholder=\"Enter your Email ID\" required>\n                                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                                    <mat-error *ngIf=\"hasError('email', 'required')\">Email is required</mat-error>\n                                    <mat-error *ngIf=\"hasError('email', 'email')\">Email is not valid</mat-error>\n                                </mat-form-field>\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Password</mat-label>\n                                    <input matInput placeholder=\"Enter your password\"\n                                        [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" required>\n                                    <mat-error *ngIf=\"hasError('password', 'required')\">Password is required</mat-error>\n                                    <mat-error *ngIf=\"hasError('password', 'minlength')\">Password is not valid\n                                    </mat-error>\n                                    <mat-error *ngIf=\"hasError('password', 'pattern')\">Valid characters are A-Z a-z 0-9\n                                        . _ -.</mat-error>\n                                    <button mat-icon-button type=\"button\" matSuffix (click)=\"hide = !hide\"\n                                        [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                    </button>\n                                </mat-form-field>\n                                <p class=\"forgot-password\"><a routerLink=\"/auth/forgot-password\">Forgot password?</a></p>\n                                <button mat-raised-button class=\"login-button\" [disabled]=\"loginForm.invalid || isLoading\">\n                                    <i class=\"fa\" [ngClass]=\"{'fa-spin fa-spinner': isLoading}\"></i>\n                                    {{ button }}\n                                </button>\n                            </form>\n                        </div>\n                        <div class=\"col-md-6 social-section\">\n                            <button mat-raised-button class=\"google-login-button\" (click)=\"signInWithGoogle()\">\n                                <img src=\"assets/img/icons/social-google.png\">\n                                Continue with Google\n                            </button>\n                            <button mat-raised-button class=\"facebook-login-button\" (click)=\"signInWithFB()\">\n                                <img src=\"assets/img/icons/social-facebook.png\">\n                                Continue with Facebook\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-header\">\n    <div class=\"header-inner\">\n        <img src=\"assets/img/logo.png\" routerLink=\"/\">\n        <button mat-stroked-button routerLink=\"/auth/login\">Log in</button>\n    </div>\n</div>\n<section class=\"auth-wrapper\">\n    <div class=\"container\">\n        <div class=\"row justify-content-md-center align-items-center\">\n            <div class=\"col-lg-8\">\n                <div class=\"auth-heading\">\n                    <h1>Sign up</h1>\n                    <p>Already have a Shaale account? <a href=\"#\" routerLink=\"/auth/login\">Log In</a></p>\n                </div>\n                <div class=\"auth-outer\">\n                    <div class=\"row justify-content-md-center align-items-center\">\n                        <div class=\"col-md-6 form-section\">\n                            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Name</mat-label>\n                                    <input matInput formControlName=\"name\" placeholder=\"Enter your Name\" required>\n                                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                                    <mat-error *ngIf=\"hasError('name', 'required')\">Name is required</mat-error>\n                                    <mat-error *ngIf=\"hasError('name', 'pattern')\">Name is not valid</mat-error>\n                                </mat-form-field>\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Email ID</mat-label>\n                                    <input matInput formControlName=\"email\" placeholder=\"Enter your Email ID\" required>\n                                    <mat-icon matSuffix>email</mat-icon>\n                                    <mat-error *ngIf=\"hasError('email', 'required')\">Email is required</mat-error>\n                                    <mat-error *ngIf=\"hasError('email', 'email')\">Email is not valid</mat-error>\n                                </mat-form-field>\n                                <div class=\"mat-phone-field\">\n                                    <ngx-intl-tel-input [cssClass]=\"'custom-phone-input'\"\n                                        [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\"\n                                        [enablePlaceholder]=\"true\" [searchCountryFlag]=\"true\"\n                                        [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\n                                        [selectFirstCountry]=\"false\" [selectedCountryISO]=\"CountryISO.India\"\n                                        [maxLength]=\"15\" [tooltipField]=\"TooltipLabel.Name\" [phoneValidation]=\"true\"\n                                        [separateDialCode]=\"separateDialCode\" name=\"phone\" formControlName=\"phone\">\n                                    </ngx-intl-tel-input>\n                                    <div *ngIf=\"registerForm.controls['phone'].touched\">\n                                        <mat-error *ngIf=\"hasError('phone', 'required')\">Phone is required </mat-error>\n                                        <mat-error *ngIf=\"hasError('phone', 'validatePhoneNumber')\">Phone is not valid\n                                        </mat-error>\n                                    </div>\n                                </div>\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Password</mat-label>\n                                    <input matInput formControlName=\"password\" placeholder=\"Enter your password\"\n                                        [type]=\"hide ? 'password' : 'text'\" required>\n                                    <button mat-icon-button matSuffix type=\"button\" (click)=\"hide = !hide\"\n                                        [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                    </button>\n                                    <mat-error *ngIf=\"hasError('password', 'required')\">Password is required</mat-error>\n                                    <mat-error *ngIf=\"hasError('password', 'minlength')\">Password is not valid\n                                    </mat-error>\n                                    <mat-error *ngIf=\"hasError('password', 'pattern')\">Valid characters are A-Z a-z 0-9\n                                        . _ -.</mat-error>\n                                </mat-form-field>\n                                <button mat-raised-button class=\"login-button\" [disabled]=\"registerForm.invalid || isLoading\">\n                                    <i class=\"fa\" [ngClass]=\"{'fa-spin fa-spinner': isLoading}\"></i>\n                                    {{ button }}\n                                </button>\n                            </form>\n                        </div>\n                        <div class=\"col-md-6 social-section\">\n                            <button mat-raised-button class=\"google-login-button\" (click)=\"signInWithGoogle()\">\n                                <img src=\"assets/img/icons/social-google.png\">\n                                Continue with Google\n                            </button>\n                            <button mat-raised-button class=\"facebook-login-button\" (click)=\"signInWithFB()\">\n                                <img src=\"assets/img/icons/social-facebook.png\">\n                                Continue with Facebook\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/update-phone/update-phone.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/update-phone/update-phone.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-header\">\n    <div class=\"header-inner\">\n        <img src=\"assets/img/logo.png\" routerLink=\"/\">\n        <button mat-stroked-button routerLink=\"/auth/signup\">Sign up</button>\n    </div>\n</div>\n\n<section class=\"auth-wrapper\">\n    <div class=\"container\">\n        <div class=\"row justify-content-md-center align-items-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"auth-heading\">\n                    <h1>Update Phone Number</h1>\n                    <p>New to Shaale? <a href=\"auth/signup\">Sign Up</a></p>\n                </div>\n                <div class=\"auth-outer\">\n                    <form [formGroup]=\"updatePhoneForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"mat-phone-field\">\n                            <ngx-intl-tel-input [cssClass]=\"'custom-phone-input'\"\n                                [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\"\n                                [enablePlaceholder]=\"true\" [searchCountryFlag]=\"true\"\n                                [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\n                                [selectFirstCountry]=\"false\" [selectedCountryISO]=\"CountryISO.India\" [maxLength]=\"15\"\n                                [tooltipField]=\"TooltipLabel.Name\" [phoneValidation]=\"true\"\n                                [separateDialCode]=\"separateDialCode\" name=\"phone\" formControlName=\"phone\">\n                            </ngx-intl-tel-input>\n                            <div *ngIf=\"updatePhoneForm.controls['phone'].touched\">\n                                <mat-error *ngIf=\"hasError('phone', 'required')\">Phone is required </mat-error>\n                                <mat-error *ngIf=\"hasError('phone', 'validatePhoneNumber')\">Phone is not valid\n                                </mat-error>\n                            </div>\n                        </div>\n                        <button mat-raised-button class=\"login-button\" [disabled]=\"updatePhoneForm.invalid || isLoading\">\n                            <i class=\"fa\" [ngClass]=\"{'fa-spin fa-spinner': isLoading}\"></i>\n                            {{ button }}\n                        </button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/verify/verify.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/verify/verify.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-header\">\n    <div class=\"header-inner\">\n        <img src=\"assets/img/logo.png\" routerLink=\"/\">\n        <button mat-stroked-button routerLink=\"/auth/signup\">Sign up</button>\n    </div>\n</div>\n\n<section class=\"auth-wrapper\">\n    <div class=\"container\">\n        <div class=\"row justify-content-md-center align-items-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"auth-heading\">\n                    <h1>Verify Phone Number</h1>\n                    <p>Didn't receive OTP? <a>Resend</a></p>\n                </div>\n                <div class=\"auth-outer\">\n                    <form [formGroup]=\"verifyForm\" (ngSubmit)=\"onSubmit()\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Enter OTP</mat-label>\n                            <input matInput formControlName=\"otp\" placeholder=\"Enter OTP\" required>\n                            <mat-icon matSuffix>verified_user</mat-icon>\n                            <mat-error *ngIf=\"hasError('otp', 'required')\">OTP is required</mat-error>\n                            <mat-error *ngIf=\"hasError('otp', 'minlength')\">OTP is not valid</mat-error>\n                        </mat-form-field>\n                        <button mat-raised-button class=\"login-button\" [disabled]=\"verifyForm.invalid || isLoading\">\n                            <i class=\"fa\" [ngClass]=\"{'fa-spin fa-spinner': isLoading}\"></i>\n                            {{ button }}\n                        </button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");
            /***/ 
        }),
        /***/ "./src/app/auth/auth-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/auth/auth-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: AuthRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () { return AuthRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
            /* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/auth/verify/verify.component.ts");
            /* harmony import */ var _update_phone_update_phone_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-phone/update-phone.component */ "./src/app/auth/update-phone/update-phone.component.ts");
            /* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/auth/forgot-password/forgot-password.component.ts");
            var routes = [
                {
                    path: '',
                    redirectTo: 'login',
                    pathMatch: 'full'
                },
                {
                    path: 'login',
                    component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                    data: { title: 'Login' }
                },
                {
                    path: 'signup',
                    component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                    data: { title: 'Signup' }
                },
                {
                    path: 'verify',
                    component: _verify_verify_component__WEBPACK_IMPORTED_MODULE_5__["VerifyComponent"],
                    data: { title: 'Verify' }
                },
                {
                    path: 'update-phone',
                    component: _update_phone_update_phone_component__WEBPACK_IMPORTED_MODULE_6__["UpdatePhoneComponent"],
                    data: { title: 'Update Phone' }
                },
                {
                    path: 'forgot-password',
                    component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"],
                    data: { title: 'Forgot Password' }
                }
            ];
            var AuthRoutingModule = /** @class */ (function () {
                function AuthRoutingModule() {
                }
                return AuthRoutingModule;
            }());
            AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AuthRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/auth/auth.module.ts ***!
          \*************************************/
        /*! exports provided: provideConfig, AuthModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function () { return provideConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function () { return AuthModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm2015/ngx-intl-tel-input.js");
            /* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
            /* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
            /* harmony import */ var _update_phone_update_phone_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-phone/update-phone.component */ "./src/app/auth/update-phone/update-phone.component.ts");
            /* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/auth/verify/verify.component.ts");
            /* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/auth/forgot-password/forgot-password.component.ts");
            var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthServiceConfig"]([
                {
                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID,
                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"]("242880965663-u1gd2hhcl41247f26qds0c5n2f14jk65.apps.googleusercontent.com")
                },
                {
                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"].PROVIDER_ID,
                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"]("483715322266021")
                }
            ]);
            function provideConfig() {
                return config;
            }
            var AuthModule = /** @class */ (function () {
                function AuthModule() {
                }
                return AuthModule;
            }());
            AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _update_phone_update_phone_component__WEBPACK_IMPORTED_MODULE_9__["UpdatePhoneComponent"], _verify_verify_component__WEBPACK_IMPORTED_MODULE_10__["VerifyComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_4__["NgxIntlTelInputModule"],
                        ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_4__["NgxIntlTelInputModule"],
                        angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["SocialLoginModule"],
                        _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    ],
                    providers: [
                        {
                            provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthServiceConfig"],
                            useFactory: provideConfig
                        }
                    ]
                })
            ], AuthModule);
            /***/ 
        }),
        /***/ "./src/app/auth/forgot-password/forgot-password.component.scss": 
        /*!*********************************************************************!*\
          !*** ./src/app/auth/forgot-password/forgot-password.component.scss ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/auth/forgot-password/forgot-password.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
          \*******************************************************************/
        /*! exports provided: ForgotPasswordComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () { return ForgotPasswordComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ForgotPasswordComponent = /** @class */ (function () {
                function ForgotPasswordComponent(formBuilder, restApi, router) {
                    var _this = this;
                    this.formBuilder = formBuilder;
                    this.restApi = restApi;
                    this.router = router;
                    this.button = 'Submit';
                    this.isLoading = false;
                    this.hasError = function (controlName, errorName) {
                        return _this.forgotPasswordForm.controls[controlName].hasError(errorName);
                    };
                }
                ForgotPasswordComponent.prototype.ngOnInit = function () {
                    this.forgotPasswordForm = this.formBuilder.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
                    });
                };
                ForgotPasswordComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log(this.forgotPasswordForm.value);
                    this.button = 'Please wait...';
                    this.isLoading = true;
                    this.restApi.forgotPassword(this.forgotPasswordForm.value.email)
                        .subscribe(function (onSuccess) {
                        console.log(onSuccess);
                        _this.router.navigateByUrl('/auth/login');
                    }, function (onError) {
                        console.log(onError);
                        _this.button = 'Submit';
                        _this.isLoading = false;
                    });
                };
                return ForgotPasswordComponent;
            }());
            ForgotPasswordComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: src_app_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'shaale-forgot-password',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/auth/forgot-password/forgot-password.component.scss")).default]
                })
            ], ForgotPasswordComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.scss": 
        /*!*************************************************!*\
          !*** ./src/app/auth/login/login.component.scss ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/auth/login/login.component.ts ***!
          \***********************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
            /* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
            /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(formBuilder, restApi, authService, store, router) {
                    var _this = this;
                    this.formBuilder = formBuilder;
                    this.restApi = restApi;
                    this.authService = authService;
                    this.store = store;
                    this.router = router;
                    this.hide = true;
                    this.button = 'Log in';
                    this.isLoading = false;
                    this.hasError = function (controlName, errorName) {
                        return _this.loginForm.controls[controlName].hasError(errorName);
                    };
                }
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loginForm = this.formBuilder.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9]*$')]]
                    });
                    this.authService.authState.subscribe(function (user) {
                        _this.user = user;
                        console.log(user);
                    });
                };
                LoginComponent.prototype.signInWithGoogle = function () {
                    var _this = this;
                    this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID)
                        .then(function (response) {
                        console.log(response);
                        var socialUser = {
                            provider: response.provider.toLowerCase(),
                            token: response.idToken,
                        };
                        console.log(socialUser);
                        _this.submitSocialDetails(socialUser);
                    })
                        .catch(function (err) { return alert(err); });
                };
                LoginComponent.prototype.signInWithFB = function () {
                    var _this = this;
                    this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"].PROVIDER_ID)
                        .then(function (response) {
                        console.log(response);
                        var socialUser = {
                            provider: response.provider.toLowerCase(),
                            token: response.authToken,
                        };
                        console.log(socialUser);
                        _this.submitSocialDetails(socialUser);
                    })
                        .catch(function (err) { return alert(err); });
                };
                // login form submit
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log(this.loginForm.value);
                    this.isLoading = true;
                    this.button = 'Please wait...';
                    this.restApi.loginUser(this.loginForm.value)
                        .subscribe(function (onSuccess) {
                        console.log(onSuccess);
                        _this.store.dispatch(Object(_core_core_module__WEBPACK_IMPORTED_MODULE_5__["authLogin"])());
                        localStorage.setItem("token", onSuccess.token);
                        _this.getUserInfo();
                    }, function (onError) {
                        _this.isLoading = false;
                        _this.button = 'Log in';
                        console.log(onError);
                    });
                };
                // social login/signup
                LoginComponent.prototype.submitSocialDetails = function (socialData) {
                    var _this = this;
                    this.restApi.loginUserSocial(socialData)
                        .subscribe(function (onSuccess) {
                        console.log(onSuccess);
                        _this.store.dispatch(Object(_core_core_module__WEBPACK_IMPORTED_MODULE_5__["authLogin"])());
                        localStorage.setItem("token", onSuccess.token);
                        _this.getUserInfo();
                    }, function (onError) {
                        console.log(onError);
                    });
                };
                // Get user details
                LoginComponent.prototype.getUserInfo = function () {
                    var _this = this;
                    this.restApi.getUserDetails()
                        .subscribe(function (onSuccess) {
                        // console.log(onSuccess);
                        _this.isLoading = false;
                        _this.button = 'Log in';
                        localStorage.setItem('loggedinUserData', JSON.stringify(onSuccess));
                        if (onSuccess.isPhoneVerified == false) {
                            _this.router.navigateByUrl("/auth/update-phone");
                        }
                        else {
                            _this.router.navigateByUrl("/home");
                        }
                    }, function (onError) {
                        _this.isLoading = false;
                        _this.button = 'Log in';
                        console.log(onError);
                    });
                };
                LoginComponent.prototype.signOut = function () {
                    this.authService.signOut();
                };
                LoginComponent.prototype.forgotPassword = function () {
                    console.log('Sent forgot password link to your email');
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] },
                { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'shaale-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/signup/signup.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/auth/signup/signup.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/auth/signup/signup.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/auth/signup/signup.component.ts ***!
          \*************************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm2015/ngx-intl-tel-input.js");
            /* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
            /* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
            /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(formBuilder, restApi, authService, store, router) {
                    var _this = this;
                    this.formBuilder = formBuilder;
                    this.restApi = restApi;
                    this.authService = authService;
                    this.store = store;
                    this.router = router;
                    this.separateDialCode = true;
                    this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["SearchCountryField"];
                    this.TooltipLabel = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["TooltipLabel"];
                    this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"];
                    this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"].India];
                    this.hide = true;
                    this.isLoading = false;
                    this.button = 'Sign up';
                    this.hasError = function (controlName, errorName) {
                        return _this.registerForm.controls[controlName].hasError(errorName);
                    };
                }
                SignupComponent.prototype.changePreferredCountries = function () {
                    this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"].India];
                };
                SignupComponent.prototype.ngOnInit = function () {
                    this.registerForm = this.formBuilder.group({
                        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('.*\\S.*[a-zA-z0-9 ]')]],
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9]*$')]]
                    });
                    this.isAuthenticated$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["select"])(_core_core_module__WEBPACK_IMPORTED_MODULE_6__["selectIsAuthenticated"]));
                };
                SignupComponent.prototype.signInWithGoogle = function () {
                    var _this = this;
                    this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID)
                        .then(function (response) {
                        console.log(response);
                        var socialUser = {
                            provider: response.provider.toLowerCase(),
                            token: response.idToken,
                        };
                        console.log(socialUser);
                        _this.submitSocialDetails(socialUser);
                    })
                        .catch(function (err) { return alert(err); });
                };
                SignupComponent.prototype.signInWithFB = function () {
                    var _this = this;
                    this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"].PROVIDER_ID)
                        .then(function (response) {
                        console.log(response);
                        var socialUser = {
                            provider: response.provider.toLowerCase(),
                            token: response.authToken,
                        };
                        console.log(socialUser);
                        _this.submitSocialDetails(socialUser);
                    })
                        .catch(function (err) { return alert(err); });
                };
                // signup form submit
                SignupComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log(this.registerForm.value);
                    this.isLoading = true;
                    this.button = 'Please wait...';
                    var phoneFormat = this.registerForm.value.phone.internationalNumber.replace(/[- )(]/g, '');
                    console.log(phoneFormat);
                    this.registerForm.value.name = this.registerForm.value.name.trim();
                    this.registerForm.value.phone = phoneFormat;
                    this.restApi.createUser(this.registerForm.value)
                        .subscribe(function (onSuccess) {
                        console.log(onSuccess);
                        _this.store.dispatch(Object(_core_core_module__WEBPACK_IMPORTED_MODULE_6__["authLogin"])());
                        localStorage.setItem("token", onSuccess.token);
                        _this.getUserInfo();
                    }, function (onError) {
                        console.log(onError);
                        _this.isLoading = false;
                        _this.button = 'Sign up';
                    });
                };
                // social login/signup
                SignupComponent.prototype.submitSocialDetails = function (socialData) {
                    var _this = this;
                    this.restApi.loginUserSocial(socialData)
                        .subscribe(function (onSuccess) {
                        console.log(onSuccess);
                        _this.store.dispatch(Object(_core_core_module__WEBPACK_IMPORTED_MODULE_6__["authLogin"])());
                        localStorage.setItem("token", onSuccess.token);
                        _this.getUserInfo();
                    }, function (onError) {
                        console.log(onError);
                    });
                };
                // Get user details
                SignupComponent.prototype.getUserInfo = function () {
                    var _this = this;
                    this.restApi.getUserDetails()
                        .subscribe(function (onSuccess) {
                        console.log(onSuccess);
                        _this.isLoading = false;
                        _this.button = 'Sign up';
                        localStorage.setItem('loggedinUserData', JSON.stringify(onSuccess));
                        if (onSuccess.isPhoneVerified == false) {
                            if ((onSuccess.phone == "") || (onSuccess.phone == null)) {
                                console.log(onSuccess.phone != "", onSuccess.phone != null);
                                _this.router.navigateByUrl("/auth/update-phone");
                            }
                            else {
                                _this.router.navigateByUrl("/auth/verify");
                            }
                        }
                        else {
                            _this.router.navigateByUrl("/home");
                        }
                    }, function (onError) {
                        console.log(onError);
                        _this.isLoading = false;
                        _this.button = 'Sign up';
                    });
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"] },
                { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'shaale-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/update-phone/update-phone.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/auth/update-phone/update-phone.component.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvdXBkYXRlLXBob25lL3VwZGF0ZS1waG9uZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/auth/update-phone/update-phone.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/auth/update-phone/update-phone.component.ts ***!
          \*************************************************************/
        /*! exports provided: UpdatePhoneComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePhoneComponent", function () { return UpdatePhoneComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm2015/ngx-intl-tel-input.js");
            /* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var UpdatePhoneComponent = /** @class */ (function () {
                function UpdatePhoneComponent(formBuilder, restApi, router) {
                    var _this = this;
                    this.formBuilder = formBuilder;
                    this.restApi = restApi;
                    this.router = router;
                    this.separateDialCode = true;
                    this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["SearchCountryField"];
                    this.TooltipLabel = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["TooltipLabel"];
                    this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"];
                    this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"].India];
                    this.isLoading = false;
                    this.button = 'Send OTP';
                    this.hasError = function (controlName, errorName) {
                        return _this.updatePhoneForm.controls[controlName].hasError(errorName);
                    };
                }
                UpdatePhoneComponent.prototype.changePreferredCountries = function () {
                    this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"].India];
                };
                UpdatePhoneComponent.prototype.ngOnInit = function () {
                    this.updatePhoneForm = this.formBuilder.group({
                        phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                };
                UpdatePhoneComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log(this.updatePhoneForm.value);
                    this.isLoading = true;
                    this.button = 'Please wait...';
                    // let phoneFormat = this.updatePhoneForm.value.phone.dialCode.concat('-', this.updatePhoneForm.value.phone.number);
                    var phoneFormat = this.updatePhoneForm.value.phone.internationalNumber.replace(/[- )(]/g, '');
                    console.log(phoneFormat);
                    this.updatePhoneForm.value.phone = phoneFormat;
                    this.restApi.updatePhone(this.updatePhoneForm.value).subscribe(function (onSuccess) {
                        console.log(onSuccess);
                        _this.router.navigateByUrl('/auth/verify');
                    }, function (onError) {
                        console.log(onError);
                        _this.isLoading = false;
                        _this.button = 'Send OTP';
                    });
                };
                return UpdatePhoneComponent;
            }());
            UpdatePhoneComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            UpdatePhoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'shaale-update-phone',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-phone.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/update-phone/update-phone.component.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-phone.component.scss */ "./src/app/auth/update-phone/update-phone.component.scss")).default]
                })
            ], UpdatePhoneComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/verify/verify.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/auth/verify/verify.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvdmVyaWZ5L3ZlcmlmeS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/auth/verify/verify.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/auth/verify/verify.component.ts ***!
          \*************************************************/
        /*! exports provided: VerifyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function () { return VerifyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var VerifyComponent = /** @class */ (function () {
                function VerifyComponent(formBuilder, restApi, router) {
                    var _this = this;
                    this.formBuilder = formBuilder;
                    this.restApi = restApi;
                    this.router = router;
                    this.button = 'Verify';
                    this.isLoading = false;
                    this.hasError = function (controlName, errorName) {
                        return _this.verifyForm.controls[controlName].hasError(errorName);
                    };
                }
                VerifyComponent.prototype.ngOnInit = function () {
                    this.verifyForm = this.formBuilder.group({
                        otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]]
                    });
                };
                VerifyComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log(this.verifyForm.value);
                    this.button = 'Please wait...';
                    this.isLoading = true;
                    var verifyPhone = {
                        code: this.verifyForm.value.otp
                    };
                    this.restApi.verifyMobile(verifyPhone).subscribe(function (onSuccess) {
                        console.log(onSuccess);
                        if (onSuccess.status) {
                            _this.router.navigateByUrl('/home');
                        }
                    }, function (onError) {
                        console.log(onError);
                        _this.button = 'Verify';
                        _this.isLoading = false;
                    });
                };
                return VerifyComponent;
            }());
            VerifyComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            VerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'shaale-verify',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/verify/verify.component.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify.component.scss */ "./src/app/auth/verify/verify.component.scss")).default]
                })
            ], VerifyComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=auth-auth-module-es2015.js.map
//# sourceMappingURL=auth-auth-module-es5.js.map
//# sourceMappingURL=auth-auth-module-es5.js.map