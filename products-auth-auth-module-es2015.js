(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-auth-auth-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/products/auth/login/login.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/shaale/Desktop/shaale-projects/shaale/node_modules/raw-loader/dist/cjs.js!./src/app/products/auth/login/login.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"auth-wrapper\">\n    <div class=\"container\">\n        <div class=\"row justify-content-md-center align-items-center\">\n            <div class=\"col-lg-8\">\n                <div class=\"auth-heading\">\n                    <h1>Log In</h1>\n                    <p>New to Shaale? <a href=\"auth/signup\">Sign Up</a></p>\n                </div>\n                <div class=\"auth-outer\">\n                    <div class=\"row justify-content-md-center align-items-center\">\n                        <div class=\"col-lg-6 form-section\">\n                            <mat-form-field appearance=\"outline\">\n                                <mat-label>Email ID / User Name</mat-label>\n                                <input matInput placeholder=\"Enter your Email ID / User Name\">\n                                <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                            </mat-form-field>\n                            <mat-form-field appearance=\"outline\">\n                                <mat-label>Password</mat-label>\n                                <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\n                                <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n                                    [attr.aria-pressed]=\"hide\">\n                                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                </button>\n                            </mat-form-field>\n                            <button mat-raised-button class=\"login-button\">Log in</button>\n                        </div>\n                        <div class=\"col-lg-6 social-section\">\n                            <button mat-raised-button class=\"google-login-button\">Continue with Google</button>\n                            <button mat-raised-button class=\"facebook-login-button\">Continue with Facebook</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/products/auth/signup/signup.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/shaale/Desktop/shaale-projects/shaale/node_modules/raw-loader/dist/cjs.js!./src/app/products/auth/signup/signup.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"auth-wrapper\">\n    <div class=\"container\">\n        <div class=\"row justify-content-md-center align-items-center\">\n            <div class=\"col-lg-8\">\n                <div class=\"auth-heading\">\n                    <h1>Sign up</h1>\n                    <p>Already have a Shaale account? <a href=\"auth/login\">Log In</a></p>\n                </div>\n                <div class=\"auth-outer\">\n                    <div class=\"row justify-content-md-center align-items-center\">\n                        <div class=\"col-lg-6 form-section\">\n                            <mat-form-field appearance=\"outline\">\n                                <mat-label>Name</mat-label>\n                                <input matInput placeholder=\"Enter your Name\">\n                                <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                            </mat-form-field>\n                            <mat-form-field appearance=\"outline\">\n                                <mat-label>Email ID</mat-label>\n                                <input matInput placeholder=\"Enter your Email ID\">\n                                <mat-icon matSuffix>email</mat-icon>\n                            </mat-form-field>\n                            <mat-form-field appearance=\"outline\">\n                                <mat-label>Phone</mat-label>\n                                <input matInput placeholder=\"Enter your Number\">\n                                <mat-icon matSuffix>phone</mat-icon>\n                            </mat-form-field>\n                            <mat-form-field appearance=\"outline\">\n                                <mat-label>Password</mat-label>\n                                <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\n                                <button mat-icon-button matSuffix (click)=\"hide = !hide\"\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                </button>\n                            </mat-form-field>\n                            <button mat-raised-button class=\"login-button\">Sign up</button>\n                        </div>\n                        <div class=\"col-lg-6 social-section\">\n                            <button mat-raised-button class=\"google-login-button\">Continue with Google</button>\n                            <button mat-raised-button class=\"facebook-login-button\">Continue with Facebook</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./src/app/products/auth/auth-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/products/auth/auth-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/products/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/products/auth/signup/signup.component.ts");





const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: { title: 'Login' }
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
        data: { title: 'Signup' }
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

/***/ "./src/app/products/auth/auth.module.ts":
/*!**********************************************!*\
  !*** ./src/app/products/auth/auth.module.ts ***!
  \**********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/products/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/products/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/products/auth/signup/signup.component.ts");







let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/products/auth/login/login.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/products/auth/login/login.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zaGFhbGUvc3JjL2FwcC9wcm9kdWN0cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/products/auth/login/login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/products/auth/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() {
        this.hide = true;
    }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shaale-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/products/auth/login/login.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/products/auth/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoginComponent);



/***/ }),

/***/ "./src/app/products/auth/signup/signup.component.scss":
/*!************************************************************!*\
  !*** ./src/app/products/auth/signup/signup.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zaGFhbGUvc3JjL2FwcC9wcm9kdWN0cy9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/products/auth/signup/signup.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/products/auth/signup/signup.component.ts ***!
  \**********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let SignupComponent = class SignupComponent {
    constructor() {
        this.hide = true;
    }
    ngOnInit() {
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shaale-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/products/auth/signup/signup.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/products/auth/signup/signup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SignupComponent);



/***/ })

}]);
//# sourceMappingURL=products-auth-auth-module-es2015.js.map