/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/loadingBar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/** @enum {number} */
const LoadingBarEventType = {
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
export class LoadingBarEvent {
    /**
     * @param {?} type
     * @param {?} value
     */
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}
if (false) {
    /** @type {?} */
    LoadingBarEvent.prototype.type;
    /** @type {?} */
    LoadingBarEvent.prototype.value;
}
export class LoadingBarService {
    constructor() {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set progress(value) {
        if (isPresent(value)) {
            if (value > 0) {
                this.visible = true;
            }
            this._progress = value;
            this.emitEvent(new LoadingBarEvent(LoadingBarEventType.PROGRESS, this._progress));
        }
    }
    /**
     * @return {?}
     */
    get progress() {
        return this._progress;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        if (isPresent(value)) {
            this._height = value;
            this.emitEvent(new LoadingBarEvent(LoadingBarEventType.HEIGHT, this._height));
        }
    }
    /**
     * @return {?}
     */
    get height() {
        return this._height;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        if (isPresent(value)) {
            this._color = value;
            this.emitEvent(new LoadingBarEvent(LoadingBarEventType.COLOR, this._color));
        }
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set visible(value) {
        if (isPresent(value)) {
            this._visible = value;
            this.emitEvent(new LoadingBarEvent(LoadingBarEventType.VISIBLE, this._visible));
        }
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    emitEvent(event) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    }
    /**
     * @param {?=} onCompleted
     * @return {?}
     */
    start(onCompleted = null) {
        // Stop current timer
        this.stop();
        // Make it visible for sure
        this.visible = true;
        // Run the timer with milliseconds iterval
        this._intervalCounterId = setInterval((/**
         * @return {?}
         */
        () => {
            // Increment the progress and update view component
            this.progress++;
            // If the progress is 100% - call complete
            if (this.progress === 100) {
                this.complete(onCompleted);
            }
        }), this.interval);
    }
    /**
     * @return {?}
     */
    stop() {
        if (this._intervalCounterId) {
            clearInterval(this._intervalCounterId);
            this._intervalCounterId = null;
        }
    }
    /**
     * @return {?}
     */
    reset() {
        this.stop();
        this.progress = 0;
    }
    /**
     * @param {?=} onCompleted
     * @return {?}
     */
    complete(onCompleted = null) {
        this.progress = 100;
        this.stop();
        setTimeout((/**
         * @return {?}
         */
        () => {
            // Hide it away
            this.visible = false;
            setTimeout((/**
             * @return {?}
             */
            () => {
                // Drop to 0
                this.progress = 0;
                if (onCompleted) {
                    onCompleted();
                }
            }), 250);
        }), 250);
    }
}
LoadingBarService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoadingBarService.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZ0Jhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9hZGluZ0Jhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUMsT0FBTyxFQUFhLE1BQU0sTUFBTSxDQUFDOztBQUV6QyxNQUFZLG1CQUFtQjtJQUMzQixRQUFRLEdBQUE7SUFDUixNQUFNLEdBQUE7SUFDTixLQUFLLEdBQUE7SUFDTCxPQUFPLEdBQUE7RUFDVjs7Ozs7Ozs7OztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsR0FBUTtJQUM5QixPQUFPLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQztBQUM3QyxDQUFDO0FBRUQsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBQ3hCLFlBQW1CLElBQXlCLEVBQVMsS0FBVTtRQUE1QyxTQUFJLEdBQUosSUFBSSxDQUFxQjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQUs7SUFBRyxDQUFDO0NBQ3RFOzs7SUFEZSwrQkFBZ0M7O0lBQUUsZ0NBQWlCOztBQUluRSxNQUFNLE9BQU8saUJBQWlCO0lBYTFCO1FBWFEsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLFdBQVcsQ0FBQztRQUNyQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLHVCQUFrQixHQUFRLENBQUMsQ0FBQztRQUM3QixhQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsa0JBQWtCOztRQUVqQyxnQkFBVyxHQUE2QixJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUN4RSxXQUFNLEdBQWdDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFOUQsQ0FBQzs7Ozs7SUFFaEIsSUFBSSxRQUFRLENBQUMsS0FBYTtRQUN0QixJ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LElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsY0FBd0IsSUFBSTtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDWixlQUFlO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNaLFlBQVk7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLElBQUksV0FBVyxFQUFFO29CQUNiLFdBQVcsRUFBRSxDQUFDO2lCQUNqQjtZQUNMLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUNaLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7OztZQWxISixVQUFVOzs7Ozs7Ozs7SUFHUCxzQ0FBc0I7Ozs7O0lBQ3RCLG9DQUF3Qjs7Ozs7SUFDeEIsbUNBQTZCOzs7OztJQUM3QixxQ0FBd0I7Ozs7O0lBRXhCLCtDQUFvQzs7SUFDcEMscUNBQXNCOzs7OztJQUV0Qix3Q0FBK0U7O0lBQy9FLG1DQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gTG9hZGluZ0JhckV2ZW50VHlwZSB7XG4gICAgUFJPR1JFU1MsXG4gICAgSEVJR0hULFxuICAgIENPTE9SLFxuICAgIFZJU0lCTEVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJlc2VudChvYmo6IGFueSkge1xuICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkaW5nQmFyRXZlbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0eXBlOiBMb2FkaW5nQmFyRXZlbnRUeXBlLCBwdWJsaWMgdmFsdWU6IGFueSkge31cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvYWRpbmdCYXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX3Byb2dyZXNzID0gMDtcbiAgICBwcml2YXRlIF9oZWlnaHQgPSAnMnB4JztcbiAgICBwcml2YXRlIF9jb2xvciA9ICdmaXJlYnJpY2snO1xuICAgIHByaXZhdGUgX3Zpc2libGUgPSB0cnVlO1xuXG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWxDb3VudGVySWQ6IGFueSA9IDA7XG4gICAgcHVibGljIGludGVydmFsID0gNTAwOyAvLyBpbiBtaWxsaXNlY29uZHNcblxuICAgIHByaXZhdGUgZXZlbnRTb3VyY2U6IFN1YmplY3Q8TG9hZGluZ0JhckV2ZW50PiA9IG5ldyBTdWJqZWN0PExvYWRpbmdCYXJFdmVudD4oKTtcbiAgICBwdWJsaWMgZXZlbnRzOiBPYnNlcnZhYmxlPExvYWRpbmdCYXJFdmVudD4gPSB0aGlzLmV2ZW50U291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc2V0IHByb2dyZXNzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGlzUHJlc2VudCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3MgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KG5ldyBMb2FkaW5nQmFyRXZlbnQoTG9hZGluZ0JhckV2ZW50VHlwZS5QUk9HUkVTUywgdGhpcy5fcHJvZ3Jlc3MpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBwcm9ncmVzcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3M7XG4gICAgfVxuXG5cbiAgICBzZXQgaGVpZ2h0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGlzUHJlc2VudCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQobmV3IExvYWRpbmdCYXJFdmVudChMb2FkaW5nQmFyRXZlbnRUeXBlLkhFSUdIVCwgdGhpcy5faGVpZ2h0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gICAgfVxuXG4gICAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGlzUHJlc2VudCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmVtaXRFdmVudChuZXcgTG9hZGluZ0JhckV2ZW50KExvYWRpbmdCYXJFdmVudFR5cGUuQ09MT1IsIHRoaXMuX2NvbG9yKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY29sb3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICAgIH1cblxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChpc1ByZXNlbnQodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmVtaXRFdmVudChuZXcgTG9hZGluZ0JhckV2ZW50KExvYWRpbmdCYXJFdmVudFR5cGUuVklTSUJMRSwgdGhpcy5fdmlzaWJsZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZW1pdEV2ZW50KGV2ZW50OiBMb2FkaW5nQmFyRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRTb3VyY2UpIHtcbiAgICAgICAgICAgIC8vIFB1c2ggdXAgYSBuZXcgZXZlbnRcbiAgICAgICAgICAgIHRoaXMuZXZlbnRTb3VyY2UubmV4dChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHN0YXJ0KG9uQ29tcGxldGVkOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgLy8gU3RvcCBjdXJyZW50IHRpbWVyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAvLyBNYWtlIGl0IHZpc2libGUgZm9yIHN1cmVcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8gUnVuIHRoZSB0aW1lciB3aXRoIG1pbGxpc2Vjb25kcyBpdGVydmFsXG4gICAgICAgIHRoaXMuX2ludGVydmFsQ291bnRlcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgLy8gSW5jcmVtZW50IHRoZSBwcm9ncmVzcyBhbmQgdXBkYXRlIHZpZXcgY29tcG9uZW50XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzKys7XG4gICAgICAgICAgICAvLyBJZiB0aGUgcHJvZ3Jlc3MgaXMgMTAwJSAtIGNhbGwgY29tcGxldGVcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzID09PSAxMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKG9uQ29tcGxldGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ludGVydmFsQ291bnRlcklkKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsQ291bnRlcklkKTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVydmFsQ291bnRlcklkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgfVxuXG4gICAgY29tcGxldGUob25Db21wbGV0ZWQ6IEZ1bmN0aW9uID0gbnVsbCkge1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBIaWRlIGl0IGF3YXlcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRHJvcCB0byAwXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKG9uQ29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICB9XG5cblxufVxuIl19