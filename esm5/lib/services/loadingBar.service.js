/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/loadingBar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/** @enum {number} */
var LoadingBarEventType = {
    PROGRESS: 0,
    HEIGHT: 1,
    COLOR: 2,
    VISIBLE: 3,
};
export { LoadingBarEventType };
LoadingBarEventType[LoadingBarEventType.PROGRESS] = 'PROGRESS';
LoadingBarEventType[LoadingBarEventType.HEIGHT] = 'HEIGHT';
LoadingBarEventType[LoadingBarEventType.COLOR] = 'COLOR';
LoadingBarEventType[LoadingBarEventType.VISIBLE] = 'VISIBLE';
/**
 * @param {?} obj
 * @return {?}
 */
export function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
var LoadingBarEvent = /** @class */ (function () {
    function LoadingBarEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return LoadingBarEvent;
}());
export { LoadingBarEvent };
if (false) {
    /** @type {?} */
    LoadingBarEvent.prototype.type;
    /** @type {?} */
    LoadingBarEvent.prototype.value;
}
var LoadingBarService = /** @class */ (function () {
    function LoadingBarService() {
        this._progress = 0;
        this._height = '2px';
        this._color = 'firebrick';
        this._visible = true;
        this._intervalCounterId = 0;
        this.interval = 500; // in milliseconds
        // in milliseconds
        this.eventSource = new Subject();
        this.events = this.eventSource.asObservable();
    }
    Object.defineProperty(LoadingBarService.prototype, "progress", {
        get: /**
         * @return {?}
         */
        function () {
            return this._progress;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isPresent(value)) {
                if (value > 0) {
                    this.visible = true;
                }
                this._progress = value;
                this.emitEvent(new LoadingBarEvent(LoadingBarEventType.PROGRESS, this._progress));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingBarService.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return this._height;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isPresent(value)) {
                this._height = value;
                this.emitEvent(new LoadingBarEvent(LoadingBarEventType.HEIGHT, this._height));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingBarService.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isPresent(value)) {
                this._color = value;
                this.emitEvent(new LoadingBarEvent(LoadingBarEventType.COLOR, this._color));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingBarService.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isPresent(value)) {
                this._visible = value;
                this.emitEvent(new LoadingBarEvent(LoadingBarEventType.VISIBLE, this._visible));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    LoadingBarService.prototype.emitEvent = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    };
    /**
     * @param {?=} onCompleted
     * @return {?}
     */
    LoadingBarService.prototype.start = /**
     * @param {?=} onCompleted
     * @return {?}
     */
    function (onCompleted) {
        var _this = this;
        if (onCompleted === void 0) { onCompleted = null; }
        // Stop current timer
        this.stop();
        // Make it visible for sure
        this.visible = true;
        // Run the timer with milliseconds iterval
        this._intervalCounterId = setInterval((/**
         * @return {?}
         */
        function () {
            // Increment the progress and update view component
            _this.progress++;
            // If the progress is 100% - call complete
            if (_this.progress === 100) {
                _this.complete(onCompleted);
            }
        }), this.interval);
    };
    /**
     * @return {?}
     */
    LoadingBarService.prototype.stop = /**
     * @return {?}
     */
    function () {
        if (this._intervalCounterId) {
            clearInterval(this._intervalCounterId);
            this._intervalCounterId = null;
        }
    };
    /**
     * @return {?}
     */
    LoadingBarService.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.stop();
        this.progress = 0;
    };
    /**
     * @param {?=} onCompleted
     * @return {?}
     */
    LoadingBarService.prototype.complete = /**
     * @param {?=} onCompleted
     * @return {?}
     */
    function (onCompleted) {
        var _this = this;
        if (onCompleted === void 0) { onCompleted = null; }
        this.progress = 100;
        this.stop();
        setTimeout((/**
         * @return {?}
         */
        function () {
            // Hide it away
            _this.visible = false;
            setTimeout((/**
             * @return {?}
             */
            function () {
                // Drop to 0
                _this.progress = 0;
                if (onCompleted) {
                    onCompleted();
                }
            }), 250);
        }), 250);
    };
    LoadingBarService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LoadingBarService.ctorParameters = function () { return []; };
    return LoadingBarService;
}());
export { LoadingBarService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype._progress;
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype._height;
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype._color;
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype._visible;
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype._intervalCounterId;
    /** @type {?} */
    LoadingBarService.prototype.interval;
    /**
     * @type {?}
     * @private
     */
    LoadingBarService.prototype.eventSource;
    /** @type {?} */
    LoadingBarService.prototype.events;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZ0Jhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9hZGluZ0Jhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUMsT0FBTyxFQUFhLE1BQU0sTUFBTSxDQUFDOztBQUV6QyxJQUFZLG1CQUFtQjtJQUMzQixRQUFRLEdBQUE7SUFDUixNQUFNLEdBQUE7SUFDTixLQUFLLEdBQUE7SUFDTCxPQUFPLEdBQUE7RUFDVjs7Ozs7Ozs7OztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsR0FBUTtJQUM5QixPQUFPLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQztBQUM3QyxDQUFDO0FBRUQ7SUFDSSx5QkFBbUIsSUFBeUIsRUFBUyxLQUFVO1FBQTVDLFNBQUksR0FBSixJQUFJLENBQXFCO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBSztJQUFHLENBQUM7SUFDdkUsc0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURlLCtCQUFnQzs7SUFBRSxnQ0FBaUI7O0FBR25FO0lBY0k7UUFYUSxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsV0FBVyxDQUFDO1FBQ3JCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsdUJBQWtCLEdBQVEsQ0FBQyxDQUFDO1FBQzdCLGFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxrQkFBa0I7O1FBRWpDLGdCQUFXLEdBQTZCLElBQUksT0FBTyxFQUFtQixDQUFDO1FBQ3hFLFdBQU0sR0FBZ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUU5RCxDQUFDO0lBRWhCLHNCQUFJLHVDQUFROzs7O1FBVVo7WUFDSSxPQUFPLElBQUksQ0FBQyxT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a0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQzs7OztJQUVELGlDQUFLOzs7SUFBTDtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsb0NBQVE7Ozs7SUFBUixVQUFTLFdBQTRCO1FBQXJDLGlCQWNDO1FBZFEsNEJBQUEsRUFBQSxrQkFBNEI7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osVUFBVTs7O1FBQUM7WUFDUCxlQUFlO1lBQ2YsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsVUFBVTs7O1lBQUM7Z0JBQ1AsWUFBWTtnQkFDWixLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxXQUFXLEVBQUU7b0JBQ2IsV0FBVyxFQUFFLENBQUM7aUJBQ2pCO1lBQ0wsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQzs7Z0JBbEhKLFVBQVU7Ozs7SUFxSFgsd0JBQUM7Q0FBQSxBQXJIRCxJQXFIQztTQXBIWSxpQkFBaUI7Ozs7OztJQUUxQixzQ0FBc0I7Ozs7O0lBQ3RCLG9DQUF3Qjs7Ozs7SUFDeEIsbUNBQTZCOzs7OztJQUM3QixxQ0FBd0I7Ozs7O0lBRXhCLCtDQUFvQzs7SUFDcEMscUNBQXNCOzs7OztJQUV0Qix3Q0FBK0U7O0lBQy9FLG1DQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gTG9hZGluZ0JhckV2ZW50VHlwZSB7XG4gICAgUFJPR1JFU1MsXG4gICAgSEVJR0hULFxuICAgIENPTE9SLFxuICAgIFZJU0lCTEVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJlc2VudChvYmo6IGFueSkge1xuICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkaW5nQmFyRXZlbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0eXBlOiBMb2FkaW5nQmFyRXZlbnRUeXBlLCBwdWJsaWMgdmFsdWU6IGFueSkge31cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvYWRpbmdCYXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX3Byb2dyZXNzID0gMDtcbiAgICBwcml2YXRlIF9oZWlnaHQgPSAnMnB4JztcbiAgICBwcml2YXRlIF9jb2xvciA9ICdmaXJlYnJpY2snO1xuICAgIHByaXZhdGUgX3Zpc2libGUgPSB0cnVlO1xuXG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWxDb3VudGVySWQ6IGFueSA9IDA7XG4gICAgcHVibGljIGludGVydmFsID0gNTAwOyAvLyBpbiBtaWxsaXNlY29uZHNcblxuICAgIHByaXZhdGUgZXZlbnRTb3VyY2U6IFN1YmplY3Q8TG9hZGluZ0JhckV2ZW50PiA9IG5ldyBTdWJqZWN0PExvYWRpbmdCYXJFdmVudD4oKTtcbiAgICBwdWJsaWMgZXZlbnRzOiBPYnNlcnZhYmxlPExvYWRpbmdCYXJFdmVudD4gPSB0aGlzLmV2ZW50U291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc2V0IHByb2dyZXNzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGlzUHJlc2VudCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3MgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KG5ldyBMb2FkaW5nQmFyRXZlbnQoTG9hZGluZ0JhckV2ZW50VHlwZS5QUk9HUkVTUywgdGhpcy5fcHJvZ3Jlc3MpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBwcm9ncmVzcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3M7XG4gICAgfVxuXG5cbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGlzUHJlc2VudCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQobmV3IExvYWRpbmdCYXJFdmVudChMb2FkaW5nQmFyRXZlbnRUeXBlLkhFSUdIVCwgdGhpcy5faGVpZ2h0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gICAgfVxuXG4gICAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGlzUHJlc2VudCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmVtaXRFdmVudChuZXcgTG9hZGluZ0JhckV2ZW50KExvYWRpbmdCYXJFdmVudFR5cGUuQ09MT1IsIHRoaXMuX2NvbG9yKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY29sb3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICAgIH1cblxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChpc1ByZXNlbnQodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmVtaXRFdmVudChuZXcgTG9hZGluZ0JhckV2ZW50KExvYWRpbmdCYXJFdmVudFR5cGUuVklTSUJMRSwgdGhpcy5fdmlzaWJsZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW1pdEV2ZW50KGV2ZW50OiBMb2FkaW5nQmFyRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRTb3VyY2UpIHtcbiAgICAgICAgICAgIC8vIFB1c2ggdXAgYSBuZXcgZXZlbnRcbiAgICAgICAgICAgIHRoaXMuZXZlbnRTb3VyY2UubmV4dChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXJ0KG9uQ29tcGxldGVkOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgLy8gU3RvcCBjdXJyZW50IHRpbWVyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAvLyBNYWtlIGl0IHZpc2libGUgZm9yIHN1cmVcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8gUnVuIHRoZSB0aW1lciB3aXRoIG1pbGxpc2Vjb25kcyBpdGVydmFsXG4gICAgICAgIHRoaXMuX2ludGVydmFsQ291bnRlcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgLy8gSW5jcmVtZW50IHRoZSBwcm9ncmVzcyBhbmQgdXBkYXRlIHZpZXcgY29tcG9uZW50XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzKys7XG4gICAgICAgICAgICAvLyBJZiB0aGUgcHJvZ3Jlc3MgaXMgMTAwJSAtIGNhbGwgY29tcGxldGVcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzID09PSAxMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKG9uQ29tcGxldGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ludGVydmFsQ291bnRlcklkKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsQ291bnRlcklkKTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVydmFsQ291bnRlcklkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgfVxuXG4gICAgY29tcGxldGUob25Db21wbGV0ZWQ6IEZ1bmN0aW9uID0gbnVsbCkge1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBIaWRlIGl0IGF3YXlcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRHJvcCB0byAwXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKG9uQ29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICB9XG5cblxufVxuIl19