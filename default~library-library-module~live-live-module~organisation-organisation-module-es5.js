(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~library-library-module~live-live-module~organisation-organisation-module"], {
        /***/ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js": 
        /*!*************************************************************************!*\
          !*** ./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js ***!
          \*************************************************************************/
        /*! exports provided: InfiniteScrollDirective, InfiniteScrollModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function () { return InfiniteScrollDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollModule", function () { return InfiniteScrollModule; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} selector
             * @param {?} scrollWindow
             * @param {?} defaultElement
             * @param {?} fromRoot
             * @return {?}
             */
            function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
                /** @type {?} */
                var hasWindow = window && !!window.document && window.document.documentElement;
                /** @type {?} */
                var container = hasWindow && scrollWindow ? window : defaultElement;
                if (selector) {
                    /** @type {?} */
                    var containerIsString = selector && hasWindow && typeof selector === 'string';
                    container = containerIsString
                        ? findElement(selector, defaultElement.nativeElement, fromRoot)
                        : selector;
                    if (!container) {
                        throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
                    }
                }
                return container;
            }
            /**
             * @param {?} selector
             * @param {?} customRoot
             * @param {?} fromRoot
             * @return {?}
             */
            function findElement(selector, customRoot, fromRoot) {
                /** @type {?} */
                var rootEl = fromRoot ? window.document : customRoot;
                return rootEl.querySelector(selector);
            }
            /**
             * @param {?} prop
             * @return {?}
             */
            function inputPropChanged(prop) {
                return prop && !prop.firstChange;
            }
            /**
             * @return {?}
             */
            function hasWindowDefined() {
                return typeof window !== 'undefined';
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var VerticalProps = {
                clientHeight: "clientHeight",
                offsetHeight: "offsetHeight",
                scrollHeight: "scrollHeight",
                pageYOffset: "pageYOffset",
                offsetTop: "offsetTop",
                scrollTop: "scrollTop",
                top: "top"
            };
            /** @type {?} */
            var HorizontalProps = {
                clientHeight: "clientWidth",
                offsetHeight: "offsetWidth",
                scrollHeight: "scrollWidth",
                pageYOffset: "pageXOffset",
                offsetTop: "offsetLeft",
                scrollTop: "scrollLeft",
                top: "left"
            };
            var AxisResolver = /** @class */ (function () {
                /**
                 * @param {?=} vertical
                 */
                function AxisResolver(vertical) {
                    if (vertical === void 0) { vertical = true; }
                    this.vertical = vertical;
                    this.propsMap = vertical ? VerticalProps : HorizontalProps;
                }
                /**
                 * @return {?}
                 */
                AxisResolver.prototype.clientHeightKey = function () {
                    return this.propsMap.clientHeight;
                };
                /**
                 * @return {?}
                 */
                AxisResolver.prototype.offsetHeightKey = function () {
                    return this.propsMap.offsetHeight;
                };
                /**
                 * @return {?}
                 */
                AxisResolver.prototype.scrollHeightKey = function () {
                    return this.propsMap.scrollHeight;
                };
                /**
                 * @return {?}
                 */
                AxisResolver.prototype.pageYOffsetKey = function () {
                    return this.propsMap.pageYOffset;
                };
                /**
                 * @return {?}
                 */
                AxisResolver.prototype.offsetTopKey = function () {
                    return this.propsMap.offsetTop;
                };
                /**
                 * @return {?}
                 */
                AxisResolver.prototype.scrollTopKey = function () {
                    return this.propsMap.scrollTop;
                };
                /**
                 * @return {?}
                 */
                AxisResolver.prototype.topKey = function () {
                    return this.propsMap.top;
                };
                return AxisResolver;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @record
             */
            /**
             * @record
             */
            /**
             * @record
             */
            /**
             * @record
             */
            /**
             * @param {?} alwaysCallback
             * @param {?} shouldFireScrollEvent
             * @param {?} isTriggeredCurrentTotal
             * @return {?}
             */
            function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
                if (alwaysCallback && shouldFireScrollEvent) {
                    return true;
                }
                if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
                    return true;
                }
                return false;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} __0
             * @return {?}
             */
            function createResolver(_a) {
                var windowElement = _a.windowElement, axis = _a.axis;
                return createResolverWithContainer({ axis: axis, isWindow: isElementWindow(windowElement) }, windowElement);
            }
            /**
             * @param {?} resolver
             * @param {?} windowElement
             * @return {?}
             */
            function createResolverWithContainer(resolver, windowElement) {
                /** @type {?} */
                var container = resolver.isWindow || (windowElement && !windowElement.nativeElement)
                    ? windowElement
                    : windowElement.nativeElement;
                return Object.assign({}, resolver, { container: container });
            }
            /**
             * @param {?} windowElement
             * @return {?}
             */
            function isElementWindow(windowElement) {
                /** @type {?} */
                var isWindow = ['Window', 'global'].some(function (obj) { return Object.prototype.toString.call(windowElement).includes(obj); });
                return isWindow;
            }
            /**
             * @param {?} isContainerWindow
             * @param {?} windowElement
             * @return {?}
             */
            function getDocumentElement(isContainerWindow, windowElement) {
                return isContainerWindow ? windowElement.document.documentElement : null;
            }
            /**
             * @param {?} element
             * @param {?} resolver
             * @return {?}
             */
            function calculatePoints(element, resolver) {
                /** @type {?} */
                var height = extractHeightForElement(resolver);
                return resolver.isWindow
                    ? calculatePointsForWindow(height, element, resolver)
                    : calculatePointsForElement(height, element, resolver);
            }
            /**
             * @param {?} height
             * @param {?} element
             * @param {?} resolver
             * @return {?}
             */
            function calculatePointsForWindow(height, element, resolver) {
                var axis = resolver.axis, container = resolver.container, isWindow = resolver.isWindow;
                var _a = extractHeightPropKeys(axis), offsetHeightKey = _a.offsetHeightKey, clientHeightKey = _a.clientHeightKey;
                // scrolled until now / current y point
                /** @type {?} */
                var scrolled = height +
                    getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
                // total height / most bottom y point
                /** @type {?} */
                var nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
                /** @type {?} */
                var totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) +
                    nativeElementHeight;
                return { height: height, scrolled: scrolled, totalToScroll: totalToScroll, isWindow: isWindow };
            }
            /**
             * @param {?} height
             * @param {?} element
             * @param {?} resolver
             * @return {?}
             */
            function calculatePointsForElement(height, element, resolver) {
                var axis = resolver.axis, container = resolver.container;
                // perhaps use container.offsetTop instead of 'scrollTop'
                /** @type {?} */
                var scrolled = container[axis.scrollTopKey()];
                /** @type {?} */
                var totalToScroll = container[axis.scrollHeightKey()];
                return { height: height, scrolled: scrolled, totalToScroll: totalToScroll, isWindow: false };
            }
            /**
             * @param {?} axis
             * @return {?}
             */
            function extractHeightPropKeys(axis) {
                return {
                    offsetHeightKey: axis.offsetHeightKey(),
                    clientHeightKey: axis.clientHeightKey()
                };
            }
            /**
             * @param {?} __0
             * @return {?}
             */
            function extractHeightForElement(_a) {
                var container = _a.container, isWindow = _a.isWindow, axis = _a.axis;
                var _b = extractHeightPropKeys(axis), offsetHeightKey = _b.offsetHeightKey, clientHeightKey = _b.clientHeightKey;
                return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
            }
            /**
             * @param {?} elem
             * @param {?} isWindow
             * @param {?} offsetHeightKey
             * @param {?} clientHeightKey
             * @return {?}
             */
            function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
                if (isNaN(elem[offsetHeightKey])) {
                    /** @type {?} */
                    var docElem = getDocumentElement(isWindow, elem);
                    return docElem ? docElem[clientHeightKey] : 0;
                }
                else {
                    return elem[offsetHeightKey];
                }
            }
            /**
             * @param {?} elem
             * @param {?} axis
             * @param {?} isWindow
             * @return {?}
             */
            function getElementOffsetTop(elem, axis, isWindow) {
                /** @type {?} */
                var topKey = axis.topKey();
                // elem = elem.nativeElement;
                if (!elem.getBoundingClientRect) {
                    // || elem.css('none')) {
                    return;
                }
                return (elem.getBoundingClientRect()[topKey] +
                    getElementPageYOffset(elem, axis, isWindow));
            }
            /**
             * @param {?} elem
             * @param {?} axis
             * @param {?} isWindow
             * @return {?}
             */
            function getElementPageYOffset(elem, axis, isWindow) {
                /** @type {?} */
                var pageYOffset = axis.pageYOffsetKey();
                /** @type {?} */
                var scrollTop = axis.scrollTopKey();
                /** @type {?} */
                var offsetTop = axis.offsetTopKey();
                if (isNaN(window[pageYOffset])) {
                    return getDocumentElement(isWindow, elem)[scrollTop];
                }
                else if (elem.ownerDocument) {
                    return elem.ownerDocument.defaultView[pageYOffset];
                }
                else {
                    return elem[offsetTop];
                }
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} container
             * @param {?} distance
             * @param {?} scrollingDown
             * @return {?}
             */
            function shouldFireScrollEvent(container, distance, scrollingDown) {
                /** @type {?} */
                var remaining;
                /** @type {?} */
                var containerBreakpoint;
                if (container.totalToScroll <= 0) {
                    return false;
                }
                /** @type {?} */
                var scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;
                if (scrollingDown) {
                    remaining =
                        (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
                    containerBreakpoint = distance.down / 10;
                }
                else {
                    /** @type {?} */
                    var totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
                    remaining = container.scrolled / totalHiddenContentHeight;
                    containerBreakpoint = distance.up / 10;
                }
                /** @type {?} */
                var shouldFireEvent = remaining <= containerBreakpoint;
                return shouldFireEvent;
            }
            /**
             * @param {?} lastScrollPosition
             * @param {?} container
             * @return {?}
             */
            function isScrollingDownwards(lastScrollPosition, container) {
                return lastScrollPosition < container.scrolled;
            }
            /**
             * @param {?} lastScrollPosition
             * @param {?} container
             * @param {?} distance
             * @return {?}
             */
            function getScrollStats(lastScrollPosition, container, distance) {
                /** @type {?} */
                var scrollDown = isScrollingDownwards(lastScrollPosition, container);
                return {
                    fire: shouldFireScrollEvent(container, distance, scrollDown),
                    scrollDown: scrollDown
                };
            }
            /**
             * @param {?} position
             * @param {?} scrollState
             * @return {?}
             */
            /**
             * @param {?} totalToScroll
             * @param {?} scrollState
             * @return {?}
             */
            /**
             * @param {?} scrollState
             * @return {?}
             */
            /**
             * @param {?} scroll
             * @param {?} scrollState
             * @param {?} triggered
             * @param {?} isScrollingDown
             * @return {?}
             */
            /**
             * @param {?} totalToScroll
             * @param {?} scrollState
             * @param {?} isScrollingDown
             * @return {?}
             */
            /**
             * @param {?} scrollState
             * @param {?} scrolledUntilNow
             * @param {?} totalToScroll
             * @return {?}
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var ScrollState = /** @class */ (function () {
                /**
                 * @param {?} __0
                 */
                function ScrollState(_a) {
                    var totalToScroll = _a.totalToScroll;
                    this.lastScrollPosition = 0;
                    this.lastTotalToScroll = 0;
                    this.totalToScroll = 0;
                    this.triggered = {
                        down: 0,
                        up: 0
                    };
                    this.totalToScroll = totalToScroll;
                }
                /**
                 * @param {?} position
                 * @return {?}
                 */
                ScrollState.prototype.updateScrollPosition = function (position) {
                    return (this.lastScrollPosition = position);
                };
                /**
                 * @param {?} totalToScroll
                 * @return {?}
                 */
                ScrollState.prototype.updateTotalToScroll = function (totalToScroll) {
                    if (this.lastTotalToScroll !== totalToScroll) {
                        this.lastTotalToScroll = this.totalToScroll;
                        this.totalToScroll = totalToScroll;
                    }
                };
                /**
                 * @param {?} scrolledUntilNow
                 * @param {?} totalToScroll
                 * @return {?}
                 */
                ScrollState.prototype.updateScroll = function (scrolledUntilNow, totalToScroll) {
                    this.updateScrollPosition(scrolledUntilNow);
                    this.updateTotalToScroll(totalToScroll);
                };
                /**
                 * @param {?} scroll
                 * @param {?} isScrollingDown
                 * @return {?}
                 */
                ScrollState.prototype.updateTriggeredFlag = function (scroll, isScrollingDown) {
                    if (isScrollingDown) {
                        this.triggered.down = scroll;
                    }
                    else {
                        this.triggered.up = scroll;
                    }
                };
                /**
                 * @param {?} totalToScroll
                 * @param {?} isScrollingDown
                 * @return {?}
                 */
                ScrollState.prototype.isTriggeredScroll = function (totalToScroll, isScrollingDown) {
                    return isScrollingDown
                        ? this.triggered.down === totalToScroll
                        : this.triggered.up === totalToScroll;
                };
                return ScrollState;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} config
             * @return {?}
             */
            function createScroller(config) {
                var scrollContainer = config.scrollContainer, scrollWindow = config.scrollWindow, element = config.element, fromRoot = config.fromRoot;
                /** @type {?} */
                var resolver = createResolver({
                    axis: new AxisResolver(!config.horizontal),
                    windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
                });
                /** @type {?} */
                var scrollState = new ScrollState({
                    totalToScroll: calculatePoints(element, resolver)
                });
                /** @type {?} */
                var options = {
                    container: resolver.container,
                    throttle: config.throttle
                };
                /** @type {?} */
                var distance = {
                    up: config.upDistance,
                    down: config.downDistance
                };
                return attachScrollEvent(options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(calculatePoints(element, resolver)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (positionStats) { return toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
                    var stats = _a.stats;
                    return scrollState.updateScroll(stats.scrolled, stats.totalToScroll);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_a) {
                    var fire = _a.fire, scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
                    return shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown));
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
                    var scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
                    scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(toInfiniteScrollAction));
            }
            /**
             * @param {?} options
             * @return {?}
             */
            function attachScrollEvent(options) {
                /** @type {?} */
                var obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(options.container, 'scroll');
                // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
                // Let's avoid calling the function unless needed.
                // See https://github.com/orizens/ngx-infinite-scroll/issues/198
                if (options.throttle) {
                    obs = obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sampleTime"])(options.throttle));
                }
                return obs;
            }
            /**
             * @param {?} lastScrollPosition
             * @param {?} stats
             * @param {?} distance
             * @return {?}
             */
            function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
                var _a = getScrollStats(lastScrollPosition, stats, distance), scrollDown = _a.scrollDown, fire = _a.fire;
                return {
                    scrollDown: scrollDown,
                    fire: fire,
                    stats: stats
                };
            }
            /** @type {?} */
            var InfiniteScrollActions = {
                DOWN: '[NGX_ISE] DOWN',
                UP: '[NGX_ISE] UP'
            };
            /**
             * @param {?} response
             * @return {?}
             */
            function toInfiniteScrollAction(response) {
                var scrollDown = response.scrollDown, currentScrollPosition = response.stats.scrolled;
                return {
                    type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
                    payload: {
                        currentScrollPosition: currentScrollPosition
                    }
                };
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var InfiniteScrollDirective = /** @class */ (function () {
                /**
                 * @param {?} element
                 * @param {?} zone
                 */
                function InfiniteScrollDirective(element, zone) {
                    this.element = element;
                    this.zone = zone;
                    this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this.infiniteScrollDistance = 2;
                    this.infiniteScrollUpDistance = 1.5;
                    this.infiniteScrollThrottle = 150;
                    this.infiniteScrollDisabled = false;
                    this.infiniteScrollContainer = null;
                    this.scrollWindow = true;
                    this.immediateCheck = false;
                    this.horizontal = false;
                    this.alwaysCallback = false;
                    this.fromRoot = false;
                }
                /**
                 * @return {?}
                 */
                InfiniteScrollDirective.prototype.ngAfterViewInit = function () {
                    if (!this.infiniteScrollDisabled) {
                        this.setup();
                    }
                };
                /**
                 * @param {?} __0
                 * @return {?}
                 */
                InfiniteScrollDirective.prototype.ngOnChanges = function (_a) {
                    var infiniteScrollContainer = _a.infiniteScrollContainer, infiniteScrollDisabled = _a.infiniteScrollDisabled, infiniteScrollDistance = _a.infiniteScrollDistance;
                    /** @type {?} */
                    var containerChanged = inputPropChanged(infiniteScrollContainer);
                    /** @type {?} */
                    var disabledChanged = inputPropChanged(infiniteScrollDisabled);
                    /** @type {?} */
                    var distanceChanged = inputPropChanged(infiniteScrollDistance);
                    /** @type {?} */
                    var shouldSetup = (!disabledChanged && !this.infiniteScrollDisabled) ||
                        (disabledChanged && !infiniteScrollDisabled.currentValue) || distanceChanged;
                    if (containerChanged || disabledChanged || distanceChanged) {
                        this.destroyScroller();
                        if (shouldSetup) {
                            this.setup();
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                InfiniteScrollDirective.prototype.setup = function () {
                    var _this = this;
                    if (hasWindowDefined()) {
                        this.zone.runOutsideAngular(function () {
                            _this.disposeScroller = createScroller({
                                fromRoot: _this.fromRoot,
                                alwaysCallback: _this.alwaysCallback,
                                disable: _this.infiniteScrollDisabled,
                                downDistance: _this.infiniteScrollDistance,
                                element: _this.element,
                                horizontal: _this.horizontal,
                                scrollContainer: _this.infiniteScrollContainer,
                                scrollWindow: _this.scrollWindow,
                                throttle: _this.infiniteScrollThrottle,
                                upDistance: _this.infiniteScrollUpDistance
                            }).subscribe(function (payload) { return _this.zone.run(function () { return _this.handleOnScroll(payload); }); });
                        });
                    }
                };
                /**
                 * @param {?} __0
                 * @return {?}
                 */
                InfiniteScrollDirective.prototype.handleOnScroll = function (_a) {
                    var type = _a.type, payload = _a.payload;
                    switch (type) {
                        case InfiniteScrollActions.DOWN:
                            return this.scrolled.emit(payload);
                        case InfiniteScrollActions.UP:
                            return this.scrolledUp.emit(payload);
                        default:
                            return;
                    }
                };
                /**
                 * @return {?}
                 */
                InfiniteScrollDirective.prototype.ngOnDestroy = function () {
                    this.destroyScroller();
                };
                /**
                 * @return {?}
                 */
                InfiniteScrollDirective.prototype.destroyScroller = function () {
                    if (this.disposeScroller) {
                        this.disposeScroller.unsubscribe();
                    }
                };
                return InfiniteScrollDirective;
            }());
            InfiniteScrollDirective.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
                        },] },
            ];
            /** @nocollapse */
            InfiniteScrollDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
            ]; };
            InfiniteScrollDirective.propDecorators = {
                scrolled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                scrolledUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                infiniteScrollDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                infiniteScrollUpDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                infiniteScrollThrottle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                infiniteScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                infiniteScrollContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                scrollWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                immediateCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                alwaysCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                fromRoot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var InfiniteScrollModule = /** @class */ (function () {
                function InfiniteScrollModule() {
                }
                return InfiniteScrollModule;
            }());
            InfiniteScrollModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: [InfiniteScrollDirective],
                            exports: [InfiniteScrollDirective],
                            imports: [],
                            providers: []
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Angular library starter.
             * Build an Angular library compatible with AoT compilation & Tree shaking.
             * Written by Roberto Simonetti.
             * MIT license.
             * https://github.com/robisim74/angular-library-starter
             */
            /**
             * Entry point for all public APIs of the package.
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Generated bundle index. Do not edit.
             */
            //# sourceMappingURL=ngx-infinite-scroll.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~library-library-module~live-live-module~organisation-organisation-module-es2015.js.map
//# sourceMappingURL=default~library-library-module~live-live-module~organisation-organisation-module-es5.js.map
//# sourceMappingURL=default~library-library-module~live-live-module~organisation-organisation-module-es5.js.map