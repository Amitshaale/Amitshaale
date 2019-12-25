(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~products-abhyas-abhyas-module~products-home-home-module~products-landing-landing-module~prod~cf9e88a9"],{

/***/ "../../node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/shaale/Desktop/shaale-projects/shaale/node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: ScrollToDirective, ScrollToModule, ScrollToService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function() { return ScrollToDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToModule", function() { return ScrollToModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToService", function() { return ScrollToService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default values for Component Input
 * @type {?}
 */
const DEFAULTS = {
    target: null,
    action: 'click',
    duration: 650,
    easing: 'easeInOutQuad',
    offset: 0,
    offsetMap: new Map()
};
const ɵ0 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time * time;
}, ɵ1 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time * (2 - time);
}, ɵ2 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
}, ɵ3 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time * time * time;
}, ɵ4 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return (--time) * time * time + 1;
}, ɵ5 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
}, ɵ6 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time * time * time * time;
}, ɵ7 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return 1 - (--time) * time * time * time;
}, ɵ8 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time;
}, ɵ9 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time * time * time * time * time;
}, ɵ10 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return 1 + (--time) * time * time * time * time;
}, ɵ11 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time;
}, ɵ12 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return Math.pow(2, -10 * time) * Math.sin((time - 1 / 4) * (2 * Math.PI) / 1) + 1;
};
/**
 * Easing Colleciton
 * @type {?}
 */
const EASING = {
    easeInQuad: (ɵ0),
    easeOutQuad: (ɵ1),
    easeInOutQuad: (ɵ2),
    easeInCubic: (ɵ3),
    easeOutCubic: (ɵ4),
    easeInOutCubic: (ɵ5),
    easeInQuart: (ɵ6),
    easeOutQuart: (ɵ7),
    easeInOutQuart: (ɵ8),
    easeInQuint: (ɵ9),
    easeOutQuint: (ɵ10),
    easeInOutQuint: (ɵ11),
    easeOutElastic: (ɵ12)
};
/**
 * Set of allowed events as triggers
 * for the Animation to start.
 * @type {?}
 */
const EVENTS = [
    'click',
    'mouseenter',
    'mouseover',
    'mousedown',
    'mouseup',
    'dblclick',
    'contextmenu',
    'wheel',
    'mouseleave',
    'mouseout'
];
/**
 * Strip hash (#) from value.
 *
 * @param {?} value 				The given string value
 * @return {?} 					The stripped string value
 */
function stripHash(value) {
    return value.substring(0, 1) === '#' ? value.substring(1) : value;
}
/**
 * Test if a given value is a string.
 *
 * @param {?} value 					The given value
 * @return {?} 						Whether the given value is a string
 */
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
/**
 * Test if a given Element is the Window.
 *
 * @param {?} container 				The given Element
 * @return {?} 						Whether the given Element is Window
 */
function isWindow(container) {
    return container === window;
}
/**
 * Test if a given value is of type ElementRef.
 *
 * @param {?} value 					The given value
 * @return {?} Whether the given value is a number
 */
function isElementRef(value) {
    return value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"];
}
/**
 * Whether or not the given value is a Native Element.
 *
 * @param {?} value           The given value
 * @return {?} Whether or not the value is a Native Element
 */
function isNativeElement(value) {
    return value instanceof HTMLElement;
}
/**
 * Test if a given value is type number.
 *
 * @param {?} value 					The given value
 * @return {?} 						Whether the given value is a number
 */
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Scroll To Animation
 */
class ScrollToAnimation {
    /**
     * Class Constructor.
     *
     * @param {?} _container            The Container
     * @param {?} _listenerTarget       The Element that listens for DOM Events
     * @param {?} _isWindow             Whether or not the listener is the Window
     * @param {?} _to                   Position to scroll to
     * @param {?} _options              Additional options for scrolling
     * @param {?} _isBrowser            Whether or not execution runs in the browser
     *                              (as opposed to the server)
     */
    constructor(_container, _listenerTarget, _isWindow, _to, _options, _isBrowser) {
        this._container = _container;
        this._listenerTarget = _listenerTarget;
        this._isWindow = _isWindow;
        this._to = _to;
        this._options = _options;
        this._isBrowser = _isBrowser;
        /**
         * Recursively loop over the Scroll Animation
         */
        this._loop = (/**
         * @return {?}
         */
        () => {
            this._timeLapsed += this._tick;
            this._percentage = (this._timeLapsed / this._options.duration);
            this._percentage = (this._percentage > 1) ? 1 : this._percentage;
            // Position Update
            this._position = this._startPosition +
                ((this._startPosition - this._to <= 0 ? 1 : -1) *
                    this._distance *
                    EASING[this._options.easing](this._percentage));
            if (this._lastPosition !== null && this._position === this._lastPosition) {
                this.stop();
            }
            else {
                this._source$.next(this._position);
                this._isWindow
                    ? this._listenerTarget.scrollTo(0, Math.floor(this._position))
                    : this._container.scrollTop = Math.floor(this._position);
                this._lastPosition = this._position;
            }
        });
        this._tick = 16;
        this._interval = null;
        this._lastPosition = null;
        this._timeLapsed = 0;
        this._windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (!this._container) {
            this._startPosition = this._windowScrollTop;
        }
        else {
            this._startPosition = this._isWindow ? this._windowScrollTop : this._container.scrollTop;
        }
        // Correction for Starting Position of nested HTML Elements
        if (this._container && !this._isWindow) {
            this._to = this._to - this._container.getBoundingClientRect().top + this._startPosition;
        }
        // Set Distance
        /** @type {?} */
        const directionalDistance = this._startPosition - this._to;
        this._distance = this._container ? Math.abs(this._startPosition - this._to) : this._to;
        this._mappedOffset = this._options.offset;
        // Set offset from Offset Map
        if (this._isBrowser) {
            this._options
                .offsetMap
                .forEach((/**
             * @param {?} value
             * @param {?} key
             * @return {?}
             */
            (value, key) => this._mappedOffset = window.innerWidth > key ? value : this._mappedOffset));
        }
        this._distance += this._mappedOffset * (directionalDistance <= 0 ? 1 : -1);
        this._source$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
    }
    /**
     * Start the new Scroll Animation.
     *
     * @return {?} Observable containing a number
     */
    start() {
        clearInterval(this._interval);
        this._interval = setInterval(this._loop, this._tick);
        return this._source$.asObservable();
    }
    /**
     * Stop the current Scroll Animation Loop.
     *
     * @return {?} Void
     */
    stop() {
        clearInterval(this._interval);
        this._interval = null;
        this._source$.complete();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The Scroll To Service handles starting, interrupting
 * and ending the actual Scroll Animation. It provides
 * some utilities to find the proper HTML Element on a
 * given page to setup Event Listeners and calculate
 * distances for the Animation.
 */
class ScrollToService {
    /**
     * Construct and setup required paratemeters.
     *
     * @param {?} _document         A Reference to the Document
     * @param {?} _platformId       Angular Platform ID
     */
    constructor(_document, _platformId) {
        this._document = _document;
        this._platformId = _platformId;
        this._interruptiveEvents = ['mousewheel', 'DOMMouseScroll', 'touchstart'];
    }
    /**
     * Target an Element to scroll to. Notice that the `TimeOut` decorator
     * ensures the executing to take place in the next Angular lifecycle.
     * This allows for scrolling to elements that are e.g. initially hidden
     * by means of `*ngIf`, but ought to be scrolled to eventually.
     *
     * \@todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
     * 	- https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
     *
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    scrollTo(options) {
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this._platformId))
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]().asObservable();
        return this._start(options);
    }
    /**
     * Start a new Animation.
     *
     * \@todo Emit proper events from subscription
     *
     * @private
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    _start(options) {
        // Merge config with default values
        /** @type {?} */
        const mergedConfigOptions = (/** @type {?} */ (Object.assign({}, (/** @type {?} */ (DEFAULTS)), options)));
        if (this._animation)
            this._animation.stop();
        /** @type {?} */
        const targetNode = this._getNode(mergedConfigOptions.target);
        if (mergedConfigOptions.target && !targetNode)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Unable to find Target Element');
        /** @type {?} */
        const container = this._getContainer(mergedConfigOptions, targetNode);
        if (mergedConfigOptions.container && !container)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Unable to find Container Element');
        /** @type {?} */
        const listenerTarget = this._getListenerTarget(container) || window;
        /** @type {?} */
        let to = container ? container.getBoundingClientRect().top : 0;
        if (targetNode) {
            to = isWindow(listenerTarget) ? targetNode.offsetTop : targetNode.getBoundingClientRect().top;
        }
        // Create Animation
        this._animation = new ScrollToAnimation(container, listenerTarget, isWindow(listenerTarget), to, mergedConfigOptions, Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this._platformId));
        /** @type {?} */
        const onInterrupt = (/**
         * @return {?}
         */
        () => this._animation.stop());
        this._addInterruptiveEventListeners(listenerTarget, onInterrupt);
        // Start Animation
        /** @type {?} */
        const animation$ = this._animation.start();
        this._subscribeToAnimation(animation$, listenerTarget, onInterrupt);
        return animation$;
    }
    /**
     * Subscribe to the events emitted from the Scrolling
     * Animation. Events might be used for e.g. unsubscribing
     * once finished.
     *
     * @private
     * @param {?} animation$              The Animation Observable
     * @param {?} listenerTarget          The Listener Target for events
     * @param {?} onInterrupt             The handler for Interruptive Events
     * @return {?} Void
     */
    _subscribeToAnimation(animation$, listenerTarget, onInterrupt) {
        /** @type {?} */
        const subscription = animation$
            .subscribe((/**
         * @return {?}
         */
        () => { }), (/**
         * @return {?}
         */
        () => { }), (/**
         * @return {?}
         */
        () => {
            this._removeInterruptiveEventListeners(this._interruptiveEvents, listenerTarget, onInterrupt);
            subscription.unsubscribe();
        }));
    }
    /**
     * Get the container HTML Element in which
     * the scrolling should happen.
     *
     * @private
     * @param {?} options         The Merged Configuration Object
     * @param {?} targetNode    the targeted HTMLElement
     * @return {?}
     */
    _getContainer(options, targetNode) {
        /** @type {?} */
        let container = null;
        if (options.container) {
            container = this._getNode(options.container, true);
        }
        else if (targetNode) {
            container = this._getFirstScrollableParent(targetNode);
        }
        return container;
    }
    /**
     * Add listeners for the Animation Interruptive Events
     * to the Listener Target.
     *
     * @private
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    _addInterruptiveEventListeners(listenerTarget, handler) {
        if (!listenerTarget)
            listenerTarget = window;
        this._interruptiveEvents
            .forEach((/**
         * @param {?} event
         * @return {?}
         */
        event => listenerTarget
            .addEventListener(event, handler, this._supportPassive() ? { passive: true } : false)));
    }
    /**
     * Feature-detect support for passive event listeners.
     *
     * @private
     * @return {?} Whether or not passive event listeners are supported
     */
    _supportPassive() {
        /** @type {?} */
        let supportsPassive = false;
        try {
            /** @type {?} */
            const opts = Object.defineProperty({}, 'passive', {
                get: (/**
                 * @return {?}
                 */
                function () {
                    supportsPassive = true;
                })
            });
            window.addEventListener('testPassive', null, opts);
            window.removeEventListener('testPassive', null, opts);
        }
        catch (e) { }
        return supportsPassive;
    }
    /**
     * Remove listeners for the Animation Interrupt Event from
     * the Listener Target. Specifying the correct handler prevents
     * memory leaks and makes the allocated memory available for
     * Garbage Collection.
     *
     * @private
     * @param {?} events            List of Interruptive Events to remove
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    _removeInterruptiveEventListeners(events, listenerTarget, handler) {
        if (!listenerTarget)
            listenerTarget = window;
        events.forEach((/**
         * @param {?} event
         * @return {?}
         */
        event => listenerTarget.removeEventListener(event, handler)));
    }
    /**
     * Find the first scrollable parent Node of a given
     * Element. The DOM Tree gets searched upwards
     * to find this first scrollable parent. Parents might
     * be ignored by CSS styles applied to the HTML Element.
     *
     * @private
     * @param {?} nativeElement     The Element to search the DOM Tree upwards from
     * @return {?} The first scrollable parent HTML Element
     */
    _getFirstScrollableParent(nativeElement) {
        /** @type {?} */
        let style = window.getComputedStyle(nativeElement);
        /** @type {?} */
        const overflowRegex = /(auto|scroll|overlay)/;
        if (style.position === 'fixed')
            return null;
        for (let parent = nativeElement; parent = parent.parentElement; null) {
            style = window.getComputedStyle(parent);
            if (style.position === 'absolute'
                || style.overflow === 'hidden'
                || style.overflowY === 'hidden')
                continue;
            if (overflowRegex.test(style.overflow + style.overflowY)
                || parent.tagName === 'BODY')
                return parent;
        }
        return null;
    }
    /**
     * Get the Target Node to scroll to.
     *
     * @private
     * @param {?} id              The given ID of the node, either a string or
     *                        an element reference
     * @param {?=} allowBodyTag    Indicate whether or not the Document Body is
     *                        considered a valid Target Node
     * @return {?} The Target Node to scroll to
     */
    _getNode(id, allowBodyTag = false) {
        /** @type {?} */
        let targetNode;
        if (isString(id)) {
            if (allowBodyTag && (id === 'body' || id === 'BODY')) {
                targetNode = this._document.body;
            }
            else {
                targetNode = this._document.getElementById(stripHash(id));
            }
        }
        else if (isNumber(id)) {
            targetNode = this._document.getElementById(String(id));
        }
        else if (isElementRef(id)) {
            targetNode = id.nativeElement;
        }
        else if (isNativeElement(id)) {
            targetNode = id;
        }
        return targetNode;
    }
    /**
     * Retrieve the Listener target. This Listener Target is used
     * to attach Event Listeners on. In case of the target being
     * the Document Body, we need the actual `window` to listen
     * for events.
     *
     * @private
     * @param {?} container           The HTML Container element
     * @return {?} The Listener Target to attach events on
     */
    _getListenerTarget(container) {
        if (!container)
            return null;
        return this._isDocumentBody(container) ? window : container;
    }
    /**
     * Test if a given HTML Element is the Document Body.
     *
     * @private
     * @param {?} element             The given HTML Element
     * @return {?} Whether or not the Element is the
     *                            Document Body Element
     */
    _isDocumentBody(element) {
        return element.tagName.toUpperCase() === 'BODY';
    }
}
ScrollToService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
];
/** @nocollapse */
ScrollToService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
class ScrollToDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _scrollToService
     * @param {?} _renderer2
     */
    constructor(_elementRef, _scrollToService, _renderer2) {
        this._elementRef = _elementRef;
        this._scrollToService = _scrollToService;
        this._renderer2 = _renderer2;
        this.ngxScrollTo = DEFAULTS.target;
        this.ngxScrollToEvent = DEFAULTS.action;
        this.ngxScrollToDuration = DEFAULTS.duration;
        this.ngxScrollToEasing = DEFAULTS.easing;
        this.ngxScrollToOffset = DEFAULTS.offset;
        this.ngxScrollToOffsetMap = DEFAULTS.offsetMap;
    }
    /**
     * Angular Lifecycle Hook - After View Init
     *
     * \@todo Implement Subscription for Events
     *
     * @return {?} void
     */
    ngAfterViewInit() {
        // Test Event Support
        if (EVENTS.indexOf(this.ngxScrollToEvent) === -1)
            throw new Error(`Unsupported Event '${this.ngxScrollToEvent}'`);
        // Listen for the trigger...
        this._renderer2.listen(this._elementRef.nativeElement, this.ngxScrollToEvent, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._options = {
                target: this.ngxScrollTo,
                duration: this.ngxScrollToDuration,
                easing: this.ngxScrollToEasing,
                offset: this.ngxScrollToOffset,
                offsetMap: this.ngxScrollToOffsetMap
            };
            this._scrollToService.scrollTo(this._options);
        }));
    }
}
ScrollToDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                selector: '[ngx-scroll-to]'
            },] }
];
/** @nocollapse */
ScrollToDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: ScrollToService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
];
ScrollToDirective.propDecorators = {
    ngxScrollTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['ngx-scroll-to',] }],
    ngxScrollToEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['ngx-scroll-to-event',] }],
    ngxScrollToDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['ngx-scroll-to-duration',] }],
    ngxScrollToEasing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['ngx-scroll-to-easing',] }],
    ngxScrollToOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['ngx-scroll-to-offset',] }],
    ngxScrollToOffsetMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['ngx-scroll-to-offset-map',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Scroll To Module
 */
class ScrollToModule {
    /**
     * Guaranteed singletons for provided Services across App.
     *
     * @return {?} An Angular Module with Providers
     */
    static forRoot() {
        return {
            ngModule: ScrollToModule,
            providers: [
                ScrollToService
            ]
        };
    }
}
ScrollToModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                declarations: [
                    ScrollToDirective
                ],
                exports: [
                    ScrollToDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=nicky-lenaers-ngx-scroll-to.js.map

/***/ })

}]);
//# sourceMappingURL=default~products-abhyas-abhyas-module~products-home-home-module~products-landing-landing-module~prod~cf9e88a9-es2015.js.map