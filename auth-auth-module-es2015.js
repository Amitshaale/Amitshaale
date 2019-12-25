(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/angularx-social-login/angularx-social-login.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angularx-social-login/angularx-social-login.js ***!
  \*********************************************************************/
/*! exports provided: AuthService, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule, SocialUser, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceConfig", function() { return AuthServiceConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginProvider", function() { return FacebookLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginProvider", function() { return GoogleLoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginModule", function() { return SocialLoginModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialUser", function() { return SocialUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return BaseLoginProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthServiceConfig {
    /**
     * @param {?} providers
     */
    constructor(providers) {
        this.lazyLoad = false;
        this.providers = new Map();
        for (let i = 0; i < providers.length; i++) {
            /** @type {?} */
            let element = providers[i];
            this.providers.set(element.id, element.provider);
            this.lazyLoad = this.lazyLoad || element.lazyLoad;
        }
    }
}
class AuthService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this._user = null;
        this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this._readyState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.initialized = false;
        this.providers = config.providers;
        if (!config.lazyLoad) {
            this.initialize();
        }
    }
    /**
     * @return {?}
     */
    get authState() {
        return this._authState.asObservable();
    }
    /**
     * Provides an array of provider ID's as they become ready
     * @return {?}
     */
    get readyState() {
        return this._readyState.asObservable();
    }
    /**
     * @private
     * @return {?}
     */
    initialize() {
        this.initialized = true;
        this.providers.forEach((/**
         * @param {?} provider
         * @param {?} key
         * @return {?}
         */
        (provider, key) => {
            provider.initialize().then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let readyProviders = this._readyState.getValue();
                readyProviders.push(key);
                this._readyState.next(readyProviders);
                provider.getLoginStatus().then((/**
                 * @param {?} user
                 * @return {?}
                 */
                (user) => {
                    user.provider = key;
                    this._user = user;
                    this._authState.next(user);
                })).catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    this._authState.next(null);
                }));
            }));
        }));
    }
    /**
     * @param {?} providerId
     * @param {?=} opt
     * @return {?}
     */
    signIn(providerId, opt) {
        if (!this.initialized) {
            this.initialize();
        }
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            let providerObject = this.providers.get(providerId);
            if (providerObject) {
                providerObject.signIn(opt).then((/**
                 * @param {?} user
                 * @return {?}
                 */
                (user) => {
                    user.provider = providerId;
                    resolve(user);
                    this._user = user;
                    this._authState.next(user);
                })).catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                err => {
                    reject(err);
                }));
            }
            else {
                reject(AuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
            }
        }));
    }
    /**
     * @param {?=} revoke
     * @return {?}
     */
    signOut(revoke = false) {
        if (!this.initialized) {
            this.initialize();
        }
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (!this._user) {
                reject(AuthService.ERR_NOT_LOGGED_IN);
            }
            else {
                /** @type {?} */
                let providerId = this._user.provider;
                /** @type {?} */
                let providerObject = this.providers.get(providerId);
                if (providerObject) {
                    providerObject.signOut(revoke).then((/**
                     * @return {?}
                     */
                    () => {
                        resolve();
                        this._user = null;
                        this._authState.next(null);
                    })).catch((/**
                     * @param {?} err
                     * @return {?}
                     */
                    (err) => {
                        reject(err);
                    }));
                }
                else {
                    reject(AuthService.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
            }
        }));
    }
}
AuthService.ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
AuthService.ERR_NOT_LOGGED_IN = 'Not logged in';
AuthService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: AuthServiceConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SocialLoginModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static initialize(config) {
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
    }
}
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
class SocialUser {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class BaseLoginProvider {
    constructor() {
        this._readyState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    /**
     * @protected
     * @return {?}
     */
    onReady() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this._readyState.subscribe((/**
             * @param {?} isReady
             * @return {?}
             */
            (isReady) => {
                if (isReady) {
                    resolve();
                }
            }));
        }));
    }
    /**
     * @param {?} id
     * @param {?} src
     * @param {?} onload
     * @param {?=} async
     * @param {?=} inner_text_content
     * @return {?}
     */
    loadScript(id, src, onload, async = true, inner_text_content = '') {
        // get document if platform is only browser
        if (typeof document !== 'undefined' && !document.getElementById(id)) {
            /** @type {?} */
            let signInJS = document.createElement('script');
            signInJS.async = async;
            signInJS.src = src;
            signInJS.onload = onload;
            /*
            if (inner_text_content) // LinkedIn
                signInJS.text = inner_text_content;
            */
            document.head.appendChild(signInJS);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleLoginProvider extends BaseLoginProvider {
    /**
     * @param {?} clientId
     * @param {?=} opt
     */
    constructor(clientId, opt = { scope: 'email' }) {
        super();
        this.clientId = clientId;
        this.opt = opt;
    }
    /**
     * @return {?}
     */
    initialize() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.loadScript(GoogleLoginProvider.PROVIDER_ID, 'https://apis.google.com/js/platform.js', (/**
             * @return {?}
             */
            () => {
                gapi.load('auth2', (/**
                 * @return {?}
                 */
                () => {
                    this.auth2 = gapi.auth2.init(Object.assign({}, this.opt, { client_id: this.clientId }));
                    this.auth2.then((/**
                     * @return {?}
                     */
                    () => {
                        this._readyState.next(true);
                        resolve();
                    })).catch((/**
                     * @param {?} err
                     * @return {?}
                     */
                    (err) => {
                        reject(err);
                    }));
                }));
            }));
        }));
    }
    /**
     * @return {?}
     */
    getLoginStatus() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.onReady().then((/**
             * @return {?}
             */
            () => {
                if (this.auth2.isSignedIn.get()) {
                    /** @type {?} */
                    let user = new SocialUser();
                    /** @type {?} */
                    let profile = this.auth2.currentUser.get().getBasicProfile();
                    /** @type {?} */
                    let token = this.auth2.currentUser.get().getAuthResponse(true).access_token;
                    /** @type {?} */
                    let backendToken = this.auth2.currentUser.get().getAuthResponse(true).id_token;
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
    }
    /**
     * @param {?=} opt
     * @return {?}
     */
    signIn(opt) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.onReady().then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const offlineAccess = (opt && opt.offline_access) || (this.opt && this.opt.offline_access);
                /** @type {?} */
                let promise = !offlineAccess ? this.auth2.signIn(opt) : this.auth2.grantOfflineAccess(opt);
                promise.then((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    /** @type {?} */
                    let user = new SocialUser();
                    /** @type {?} */
                    let profile = this.auth2.currentUser.get().getBasicProfile();
                    /** @type {?} */
                    let token = this.auth2.currentUser.get().getAuthResponse(true).access_token;
                    /** @type {?} */
                    let backendToken = this.auth2.currentUser.get().getAuthResponse(true).id_token;
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
                }), (/**
                 * @param {?} closed
                 * @return {?}
                 */
                (closed) => {
                    reject('User cancelled login or did not fully authorize.');
                })).catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    reject(err);
                }));
            }));
        }));
    }
    /**
     * @param {?=} revoke
     * @return {?}
     */
    signOut(revoke) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.onReady().then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let signOutPromise;
                if (revoke) {
                    signOutPromise = this.auth2.disconnect();
                }
                else {
                    signOutPromise = this.auth2.signOut();
                }
                signOutPromise.then((/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                })).catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    reject(err);
                }));
            }));
        }));
    }
}
GoogleLoginProvider.PROVIDER_ID = 'GOOGLE';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FacebookLoginProvider extends BaseLoginProvider {
    /**
     * @param {?} clientId
     * @param {?=} opt
     * @param {?=} locale
     * @param {?=} fields
     * @param {?=} version
     */
    constructor(clientId, opt = { scope: 'email,public_profile' }, locale = 'en_US', fields = 'name,email,picture,first_name,last_name', version = 'v4.0') {
        super();
        this.clientId = clientId;
        this.opt = opt;
        this.locale = locale;
        this.fields = fields;
        this.version = version;
    }
    /**
     * @return {?}
     */
    initialize() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.loadScript(FacebookLoginProvider.PROVIDER_ID, `//connect.facebook.net/${this.locale}/sdk.js`, (/**
             * @return {?}
             */
            () => {
                FB.init({
                    appId: this.clientId,
                    autoLogAppEvents: true,
                    cookie: true,
                    xfbml: true,
                    version: this.version
                });
                // FB.AppEvents.logPageView(); #FIX for #18
                this._readyState.next(true);
                resolve();
            }));
        }));
    }
    /**
     * @return {?}
     */
    getLoginStatus() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.onReady().then((/**
             * @return {?}
             */
            () => {
                FB.getLoginStatus((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    if (response.status === 'connected') {
                        /** @type {?} */
                        let authResponse = response.authResponse;
                        FB.api(`/me?fields=${this.fields}`, (/**
                         * @param {?} fbUser
                         * @return {?}
                         */
                        (fbUser) => {
                            /** @type {?} */
                            let user = new SocialUser();
                            user.id = fbUser.id;
                            user.name = fbUser.name;
                            user.email = fbUser.email;
                            user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal';
                            user.firstName = fbUser.first_name;
                            user.lastName = fbUser.last_name;
                            user.authToken = authResponse.accessToken;
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
    }
    /**
     * @param {?=} opt
     * @return {?}
     */
    signIn(opt) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.onReady().then((/**
             * @return {?}
             */
            () => {
                FB.login((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    if (response.authResponse) {
                        /** @type {?} */
                        let authResponse = response.authResponse;
                        FB.api(`/me?fields=${this.fields}`, (/**
                         * @param {?} fbUser
                         * @return {?}
                         */
                        (fbUser) => {
                            /** @type {?} */
                            let user = new SocialUser();
                            user.id = fbUser.id;
                            user.name = fbUser.name;
                            user.email = fbUser.email;
                            user.photoUrl = 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal';
                            user.firstName = fbUser.first_name;
                            user.lastName = fbUser.last_name;
                            user.authToken = authResponse.accessToken;
                            user.facebook = fbUser;
                            resolve(user);
                        }));
                    }
                    else {
                        reject('User cancelled login or did not fully authorize.');
                    }
                }), this.opt);
            }));
        }));
    }
    /**
     * @return {?}
     */
    signOut() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.onReady().then((/**
             * @return {?}
             */
            () => {
                FB.logout((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    resolve();
                }));
            }));
        }));
    }
}
FacebookLoginProvider.PROVIDER_ID = 'FACEBOOK';


//# sourceMappingURL=angularx-social-login.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-header\">\n    <div class=\"header-inner\">\n        <img src=\"assets/img/logo.png\" routerLink=\"/\">\n        <button mat-stroked-button routerLink=\"/auth/signup\">Sign up</button>\n    </div>\n</div>\n\n<section class=\"auth-wrapper\">\n    <div class=\"container\">\n        <div class=\"row justify-content-md-center align-items-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"auth-heading\">\n                    <h1>Forgot Password</h1>\n                    <p>You will get reset password link in your email</p>\n                </div>\n                <div class=\"auth-outer\">\n                    <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onSubmit()\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Email ID</mat-label>\n                            <input matInput formControlName=\"email\" placeholder=\"Enter your Email ID\" required>\n                            <mat-icon matSuffix>email</mat-icon>\n                            <mat-error *ngIf=\"hasError('email', 'required')\">Email is required</mat-error>\n                            <mat-error *ngIf=\"hasError('email', 'email')\">Email is not valid</mat-error>\n                        </mat-form-field>\n                        <button mat-raised-button class=\"login-button\" [disabled]=\"forgotPasswordForm.invalid\">Submit</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-header\">\n    <div class=\"header-inner\">\n        <img src=\"assets/img/logo.png\" routerLink=\"/\">\n        <button mat-stroked-button routerLink=\"/auth/signup\">Sign up</button>\n    </div>\n</div>\n<section class=\"auth-wrapper\">\n    <div class=\"container\">\n        <div class=\"row justify-content-md-center align-items-center\">\n            <div class=\"col-lg-8\">\n                <div class=\"auth-heading\">\n                    <h1>Log In</h1>\n                    <p>New to Shaale? <a href=\"#\" routerLink=\"/auth/signup\">Sign Up</a></p>\n                </div>\n                <div class=\"auth-outer\">\n                    <div class=\"row justify-content-md-center align-items-center\">\n                        <div class=\"col-md-6 form-section\">\n                            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Email ID</mat-label>\n                                    <input matInput formControlName=\"email\" placeholder=\"Enter your Email ID\" required>\n                                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                                    <mat-error *ngIf=\"hasError('email', 'required')\">Email is required</mat-error>\n                                    <mat-error *ngIf=\"hasError('email', 'email')\">Email is not valid</mat-error>\n                                </mat-form-field>\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Password</mat-label>\n                                    <input matInput placeholder=\"Enter your password\"\n                                        [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" required>\n                                    <mat-error *ngIf=\"hasError('password', 'required')\">Password is required</mat-error>\n                                    <mat-error *ngIf=\"hasError('password', 'minlength')\">Password is not valid\n                                    </mat-error>\n                                    <mat-error *ngIf=\"hasError('password', 'pattern')\">Valid characters are A-Z a-z 0-9\n                                        . _ -.</mat-error>\n                                    <button mat-icon-button type=\"button\" matSuffix (click)=\"hide = !hide\"\n                                        [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                    </button>\n                                </mat-form-field>\n                                <p class=\"forgot-password\"><a routerLink=\"/auth/forgot-password\">Forgot password?</a></p>\n                                <button mat-raised-button class=\"login-button\" [disabled]=\"loginForm.invalid\">Log\n                                    in</button>\n                            </form>\n                        </div>\n                        <div class=\"col-md-6 social-section\">\n                            <button mat-raised-button class=\"google-login-button\" (click)=\"signInWithGoogle()\">\n                                <img src=\"assets/img/icons/social-google.png\">\n                                Continue with Google\n                            </button>\n                            <button mat-raised-button class=\"facebook-login-button\" (click)=\"signInWithFB()\">\n                                <img src=\"assets/img/icons/social-facebook.png\">\n                                Continue with Facebook\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-header\">\n    <div class=\"header-inner\">\n        <img src=\"assets/img/logo.png\" routerLink=\"/\">\n        <button mat-stroked-button routerLink=\"/auth/login\">Log in</button>\n    </div>\n</div>\n<section class=\"auth-wrapper\">\n    <div class=\"container\">\n        <div class=\"row justify-content-md-center align-items-center\">\n            <div class=\"col-lg-8\">\n                <div class=\"auth-heading\">\n                    <h1>Sign up</h1>\n                    <p>Already have a Shaale account? <a href=\"#\" routerLink=\"/auth/login\">Log In</a></p>\n                </div>\n                <div class=\"auth-outer\">\n                    <div class=\"row justify-content-md-center align-items-center\">\n                        <div class=\"col-md-6 form-section\">\n                            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Name</mat-label>\n                                    <input matInput formControlName=\"name\" placeholder=\"Enter your Name\" required>\n                                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                                    <mat-error *ngIf=\"hasError('name', 'required')\">Name is required</mat-error>\n                                    <mat-error *ngIf=\"hasError('name', 'pattern')\">Name is not valid</mat-error>\n                                </mat-form-field>\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Email ID</mat-label>\n                                    <input matInput formControlName=\"email\" placeholder=\"Enter your Email ID\" required>\n                                    <mat-icon matSuffix>email</mat-icon>\n                                    <mat-error *ngIf=\"hasError('email', 'required')\">Email is required</mat-error>\n                                    <mat-error *ngIf=\"hasError('email', 'email')\">Email is not valid</mat-error>\n                                </mat-form-field>\n                                <div class=\"mat-phone-field\">\n                                    <ngx-intl-tel-input [cssClass]=\"'custom-phone-input'\"\n                                        [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\"\n                                        [enablePlaceholder]=\"true\" [searchCountryFlag]=\"true\"\n                                        [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\n                                        [selectFirstCountry]=\"false\" [selectedCountryISO]=\"CountryISO.India\"\n                                        [maxLength]=\"15\" [tooltipField]=\"TooltipLabel.Name\" [phoneValidation]=\"true\"\n                                        [separateDialCode]=\"separateDialCode\" name=\"phone\" formControlName=\"phone\">\n                                    </ngx-intl-tel-input>\n                                    <div *ngIf=\"registerForm.controls['phone'].touched\">\n                                        <mat-error *ngIf=\"hasError('phone', 'required')\">Phone is required </mat-error>\n                                        <mat-error *ngIf=\"hasError('phone', 'validatePhoneNumber')\">Phone is not valid\n                                        </mat-error>\n                                    </div>\n                                </div>\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-label>Password</mat-label>\n                                    <input matInput formControlName=\"password\" placeholder=\"Enter your password\"\n                                        [type]=\"hide ? 'password' : 'text'\" required>\n                                    <button mat-icon-button matSuffix type=\"button\" (click)=\"hide = !hide\"\n                                        [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                    </button>\n                                    <mat-error *ngIf=\"hasError('password', 'required')\">Password is required</mat-error>\n                                    <mat-error *ngIf=\"hasError('password', 'minlength')\">Password is not valid\n                                    </mat-error>\n                                    <mat-error *ngIf=\"hasError('password', 'pattern')\">Valid characters are A-Z a-z 0-9\n                                        . _ -.</mat-error>\n                                </mat-form-field>\n                                <button mat-raised-button class=\"login-button\" [disabled]=\"registerForm.invalid\">Sign\n                                    up</button>\n                            </form>\n                        </div>\n                        <div class=\"col-md-6 social-section\">\n                            <button mat-raised-button class=\"google-login-button\" (click)=\"signInWithGoogle()\">\n                                <img src=\"assets/img/icons/social-google.png\">\n                                Continue with Google\n                            </button>\n                            <button mat-raised-button class=\"facebook-login-button\" (click)=\"signInWithFB()\">\n                                <img src=\"assets/img/icons/social-facebook.png\">\n                                Continue with Facebook\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/update-phone/update-phone.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/update-phone/update-phone.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-header\">\n    <div class=\"header-inner\">\n        <img src=\"assets/img/logo.png\" routerLink=\"/\">\n        <button mat-stroked-button routerLink=\"/auth/signup\">Sign up</button>\n    </div>\n</div>\n\n<section class=\"auth-wrapper\">\n    <div class=\"container\">\n        <div class=\"row justify-content-md-center align-items-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"auth-heading\">\n                    <h1>Update Phone Number</h1>\n                    <p>New to Shaale? <a href=\"auth/signup\">Sign Up</a></p>\n                </div>\n                <div class=\"auth-outer\">\n                    <form [formGroup]=\"updatePhoneForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"mat-phone-field\">\n                            <ngx-intl-tel-input [cssClass]=\"'custom-phone-input'\"\n                                [preferredCountries]=\"preferredCountries\" [enableAutoCountrySelect]=\"false\"\n                                [enablePlaceholder]=\"true\" [searchCountryFlag]=\"true\"\n                                [searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\n                                [selectFirstCountry]=\"false\" [selectedCountryISO]=\"CountryISO.India\" [maxLength]=\"15\"\n                                [tooltipField]=\"TooltipLabel.Name\" [phoneValidation]=\"true\"\n                                [separateDialCode]=\"separateDialCode\" name=\"phone\" formControlName=\"phone\">\n                            </ngx-intl-tel-input>\n                            <div *ngIf=\"updatePhoneForm.controls['phone'].touched\">\n                                <mat-error *ngIf=\"hasError('phone', 'required')\">Phone is required </mat-error>\n                                <mat-error *ngIf=\"hasError('phone', 'validatePhoneNumber')\">Phone is not valid\n                                </mat-error>\n                            </div>\n                        </div>\n                        <button mat-raised-button class=\"login-button\" [disabled]=\"updatePhoneForm.invalid\">Update</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/verify/verify.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/verify/verify.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-header\">\n    <div class=\"header-inner\">\n        <img src=\"assets/img/logo.png\" routerLink=\"/\">\n        <button mat-stroked-button routerLink=\"/auth/signup\">Sign up</button>\n    </div>\n</div>\n\n<section class=\"auth-wrapper\">\n    <div class=\"container\">\n        <div class=\"row justify-content-md-center align-items-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"auth-heading\">\n                    <h1>Verify Phone Number</h1>\n                    <p>Didn't receive OTP? <a>Resend</a></p>\n                </div>\n                <div class=\"auth-outer\">\n                    <form [formGroup]=\"verifyForm\" (ngSubmit)=\"onSubmit()\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Enter OTP</mat-label>\n                            <input matInput formControlName=\"otp\" placeholder=\"Enter OTP\" required>\n                            <mat-icon matSuffix>verified_user</mat-icon>\n                            <mat-error *ngIf=\"hasError('otp', 'required')\">OTP is required</mat-error>\n                            <mat-error *ngIf=\"hasError('otp', 'minlength')\">OTP is not valid</mat-error>\n                        </mat-form-field>\n                        <button mat-raised-button class=\"login-button\" [disabled]=\"verifyForm.invalid\">Submit</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/auth/verify/verify.component.ts");
/* harmony import */ var _update_phone_update_phone_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-phone/update-phone.component */ "./src/app/auth/update-phone/update-phone.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/auth/forgot-password/forgot-password.component.ts");








const routes = [
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
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: provideConfig, AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
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













const config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"]("242880965663-qn8m5e9kfi2s88iegb6kbjmo7rna9ren.apps.googleusercontent.com")
    },
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"]("483715322266021")
    }
]);
function provideConfig() {
    return config;
}
let AuthModule = class AuthModule {
};
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



/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(formBuilder, restApi, router) {
        this.formBuilder = formBuilder;
        this.restApi = restApi;
        this.router = router;
        this.hasError = (controlName, errorName) => {
            return this.forgotPasswordForm.controls[controlName].hasError(errorName);
        };
    }
    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    }
    onSubmit() {
        console.log(this.forgotPasswordForm.value);
        this.restApi.forgotPassword(this.forgotPasswordForm.value.email)
            .subscribe((onSuccess) => {
            console.log(onSuccess);
            this.router.navigateByUrl('/auth/login');
        }, (onError) => {
            console.log(onError);
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shaale-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/auth/forgot-password/forgot-password.component.scss")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let LoginComponent = class LoginComponent {
    constructor(formBuilder, restApi, authService, store, router) {
        this.formBuilder = formBuilder;
        this.restApi = restApi;
        this.authService = authService;
        this.store = store;
        this.router = router;
        this.hide = true;
        this.hasError = (controlName, errorName) => {
            return this.loginForm.controls[controlName].hasError(errorName);
        };
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9]*$')]]
        });
        this.authService.authState.subscribe((user) => {
            this.user = user;
            console.log(user);
        });
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID)
            .then((response) => {
            console.log(response);
            let socialUser = {
                provider: response.provider.toLowerCase(),
                token: response.idToken,
            };
            console.log(socialUser);
            this.submitSocialDetails(socialUser);
        })
            .catch(err => alert(err));
    }
    signInWithFB() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"].PROVIDER_ID)
            .then((response) => {
            console.log(response);
            let socialUser = {
                provider: response.provider.toLowerCase(),
                token: response.authToken,
            };
            console.log(socialUser);
            this.submitSocialDetails(socialUser);
        })
            .catch(err => alert(err));
    }
    // login form submit
    onSubmit() {
        console.log(this.loginForm.value);
        this.restApi.loginUser(this.loginForm.value)
            .subscribe((onSuccess) => {
            console.log(onSuccess);
            localStorage.setItem("token", onSuccess.token);
            this.getUserInfo();
        }, (onError) => {
            console.log(onError);
        });
    }
    // social login/signup
    submitSocialDetails(socialData) {
        this.restApi.loginUserSocial(socialData)
            .subscribe((onSuccess) => {
            console.log(onSuccess);
            localStorage.setItem("token", onSuccess.token);
            this.getUserInfo();
        }, (onError) => {
            console.log(onError);
        });
    }
    // Get user details
    getUserInfo() {
        this.restApi.getUserDetails()
            .subscribe((onSuccess) => {
            console.log(onSuccess);
            if (onSuccess.isPhoneVerified == false) {
                if ((onSuccess.phone == "") || (onSuccess.phone == null)) {
                    console.log(onSuccess.phone != "", onSuccess.phone != null);
                    this.router.navigateByUrl("/auth/update-phone");
                }
                else {
                    this.router.navigateByUrl("/auth/verify");
                }
            }
            else {
                this.store.dispatch(Object(_core_core_module__WEBPACK_IMPORTED_MODULE_5__["authLogin"])());
                this.router.navigateByUrl("/home");
            }
        }, (onError) => {
            console.log(onError);
        });
    }
    signOut() {
        this.authService.signOut();
    }
    forgotPassword() {
        console.log('Sent forgot password link to your email');
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shaale-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm2015/ngx-intl-tel-input.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let SignupComponent = class SignupComponent {
    constructor(formBuilder, restApi, authService, store, router) {
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
        this.hasError = (controlName, errorName) => {
            return this.registerForm.controls[controlName].hasError(errorName);
        };
    }
    changePreferredCountries() {
        this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"].India];
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('.*\\S.*[a-zA-z0-9 ]')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9]*$')]]
        });
        this.isAuthenticated$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["select"])(_core_core_module__WEBPACK_IMPORTED_MODULE_6__["selectIsAuthenticated"]));
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID)
            .then((response) => {
            console.log(response);
            let socialUser = {
                provider: response.provider.toLowerCase(),
                token: response.idToken,
            };
            console.log(socialUser);
            this.submitSocialDetails(socialUser);
        })
            .catch(err => alert(err));
    }
    signInWithFB() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"].PROVIDER_ID)
            .then((response) => {
            console.log(response);
            let socialUser = {
                provider: response.provider.toLowerCase(),
                token: response.authToken,
            };
            console.log(socialUser);
            this.submitSocialDetails(socialUser);
        })
            .catch(err => alert(err));
    }
    // signup form submit
    onSubmit() {
        console.log(this.registerForm.value);
        let phoneFormat = this.registerForm.value.phone.internationalNumber.replace(/[- )(]/g, '');
        console.log(phoneFormat);
        this.registerForm.value.name = this.registerForm.value.name.trim();
        this.registerForm.value.phone = phoneFormat;
        this.restApi.createUser(this.registerForm.value)
            .subscribe((onSuccess) => {
            console.log(onSuccess);
            localStorage.setItem("token", onSuccess.token);
            this.getUserInfo();
        }, (onError) => {
            console.log(onError);
        });
    }
    // social login/signup
    submitSocialDetails(socialData) {
        this.restApi.loginUserSocial(socialData)
            .subscribe((onSuccess) => {
            console.log(onSuccess);
            localStorage.setItem("token", onSuccess.token);
            this.getUserInfo();
        }, (onError) => {
            console.log(onError);
        });
    }
    // Get user details
    getUserInfo() {
        this.restApi.getUserDetails()
            .subscribe((onSuccess) => {
            console.log(onSuccess);
            if (onSuccess.isPhoneVerified == false) {
                if ((onSuccess.phone == "") || (onSuccess.phone == null)) {
                    console.log(onSuccess.phone != "", onSuccess.phone != null);
                    this.router.navigateByUrl("/auth/update-phone");
                }
                else {
                    this.router.navigateByUrl("/auth/verify");
                }
            }
            else {
                this.store.dispatch(Object(_core_core_module__WEBPACK_IMPORTED_MODULE_6__["authLogin"])());
                this.router.navigateByUrl("/home");
            }
        }, (onError) => {
            console.log(onError);
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shaale-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/auth/update-phone/update-phone.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/auth/update-phone/update-phone.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvdXBkYXRlLXBob25lL3VwZGF0ZS1waG9uZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/update-phone/update-phone.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/update-phone/update-phone.component.ts ***!
  \*************************************************************/
/*! exports provided: UpdatePhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePhoneComponent", function() { return UpdatePhoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm2015/ngx-intl-tel-input.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UpdatePhoneComponent = class UpdatePhoneComponent {
    constructor(formBuilder, restApi, router) {
        this.formBuilder = formBuilder;
        this.restApi = restApi;
        this.router = router;
        this.separateDialCode = true;
        this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["SearchCountryField"];
        this.TooltipLabel = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["TooltipLabel"];
        this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"];
        this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"].India];
        this.hasError = (controlName, errorName) => {
            return this.updatePhoneForm.controls[controlName].hasError(errorName);
        };
    }
    changePreferredCountries() {
        this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_3__["CountryISO"].India];
    }
    ngOnInit() {
        this.updatePhoneForm = this.formBuilder.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onSubmit() {
        console.log(this.updatePhoneForm.value);
        // let phoneFormat = this.updatePhoneForm.value.phone.dialCode.concat('-', this.updatePhoneForm.value.phone.number);
        let phoneFormat = this.updatePhoneForm.value.phone.internationalNumber.replace(/[- )(]/g, '');
        console.log(phoneFormat);
        this.updatePhoneForm.value.phone = phoneFormat;
        this.restApi.updatePhone(this.updatePhoneForm.value).subscribe((onSuccess) => {
            console.log(onSuccess);
            this.router.navigateByUrl('/auth/verify');
        }, (onError) => {
            console.log(onError);
        });
    }
};
UpdatePhoneComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UpdatePhoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shaale-update-phone',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-phone.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/update-phone/update-phone.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-phone.component.scss */ "./src/app/auth/update-phone/update-phone.component.scss")).default]
    })
], UpdatePhoneComponent);



/***/ }),

/***/ "./src/app/auth/verify/verify.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/verify/verify.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvdmVyaWZ5L3ZlcmlmeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/verify/verify.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/verify/verify.component.ts ***!
  \*************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");




let VerifyComponent = class VerifyComponent {
    constructor(formBuilder, restApi) {
        this.formBuilder = formBuilder;
        this.restApi = restApi;
        this.hasError = (controlName, errorName) => {
            return this.verifyForm.controls[controlName].hasError(errorName);
        };
    }
    ngOnInit() {
        this.verifyForm = this.formBuilder.group({
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]]
        });
    }
    onSubmit() {
        console.log(this.verifyForm.value);
        this.restApi.verifyMobile(this.verifyForm.value).subscribe((data) => {
            console.log('data');
        });
    }
};
VerifyComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] }
];
VerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shaale-verify',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/verify/verify.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify.component.scss */ "./src/app/auth/verify/verify.component.scss")).default]
    })
], VerifyComponent);



/***/ }),

/***/ "./src/app/shared/rest-api.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/rest-api.service.ts ***!
  \********************************************/
/*! exports provided: RestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApiService", function() { return RestApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






let RestApiService = class RestApiService {
    // localToken = JSON.parse(localStorage.getItem("token"));
    constructor(http) {
        this.http = http;
        // Define API
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        /*========================================
          CRUD Methods for consuming RESTful API
        =========================================*/
        /* ===========
         All Post Method
        ===================*/
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // HttpClient API for email signup
    createUser(newUser) {
        return this.http.post(this.apiURL + '/auth/signup/email', newUser, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API for email Login
    loginUser(newUser) {
        return this.http.post(this.apiURL + '/auth/login/email', newUser, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API for social login
    loginUserSocial(socialUserDetails) {
        return this.http.post(this.apiURL + '/auth/login/social/' + socialUserDetails.provider, {
            token: socialUserDetails.token
        }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API for verify email
    emailVerify(newUser) {
        return this.http.post(this.apiURL + '/auth/verify/email', newUser, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API for verify mobile
    verifyMobile(newUser) {
        return this.http.post(this.apiURL + '/auth/verify/mobile', newUser, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API for send mobile otp
    sendOtp(newUser) {
        return this.http.post(this.apiURL + '/auth/verify/send-otp', newUser, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API for send email verification
    sendEmailVerification(newUser) {
        return this.http.post(this.apiURL + '/auth/verify/send-otp', newUser, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    purchaseDetails(newUser) {
        return this.http.post(this.apiURL + '/live/events/by-id/{eventID}/purchase', newUser, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    /* ===========
    All Put Method
    ===================*/
    updatePhone(updateUserDetails) {
        return this.http.post(this.apiURL + '/auth/me', updateUserDetails, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateIsValid(newUser) {
        return this.http.put(this.apiURL + '/auth/me/sessions/watch/is-valid', newUser, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    /* ===========
    All Get Method
    ===================*/
    // HttpClient API for Forgot Password
    forgotPassword(data) {
        return this.http.get(this.apiURL + '/auth/me/forgot-password/' + data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API for User details
    getUserDetails() {
        return this.http.get(this.apiURL + '/auth/me', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API for Sessions
    getSessions() {
        return this.http.get(this.apiURL + '/auth/me/sessions', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API for Sessions with id
    getSessionsWIthID() {
        return this.http.get(this.apiURL + '/auth/me/sessions/{sessionId}', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getIsValid() {
        return this.http.get(this.apiURL + '/auth/me/sessions/watch/is-valid', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getLiveEvents() {
        return this.http.get(this.apiURL + '/live/events', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getLiveEventDetails() {
        return this.http.get(this.apiURL + '/live/events/by-slug/{eventSlug}', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getLiveEventVideo() {
        return this.http.get(this.apiURL + '/live/events/by-id/{eventID}/video', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getCouponCode() {
        return this.http.get(this.apiURL + '/live/events/by-id/{eventID}/coupons/{couponCode}', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // Error handling 
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
RestApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RestApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RestApiService);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map