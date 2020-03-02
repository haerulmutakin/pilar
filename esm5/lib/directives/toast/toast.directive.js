/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/toast/toast.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input, HostListener } from '@angular/core';
import { ToastService } from '../../services/toast.service';
var ToastDirective = /** @class */ (function () {
    function ToastDirective(renderer, hostElement, toastSvc) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.toastSvc = toastSvc;
        this.mouseClickCounter = 0;
        this.mouseOverCounter = 0;
    }
    /**
     * @return {?}
     */
    ToastDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.initToastInterval();
        this._fadeInTimeOut = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.renderer.setStyle(_this.hostElement.nativeElement, 'opacity', '1');
            _this.createToastFadeOutBehaviour(_this.timeOut);
        }), 50);
    };
    /**
     * @param {?} remainingTimeOut
     * @return {?}
     */
    ToastDirective.prototype.createToastFadeOutBehaviour = /**
     * @param {?} remainingTimeOut
     * @return {?}
     */
    function (remainingTimeOut) {
        var _this = this;
        this._fadeOutTimeout = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.renderer.setStyle(_this.hostElement.nativeElement, 'opacity', '0');
            _this._removeTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.toastSvc.removeToast(_this.toastIndex);
            }), 170);
        }), remainingTimeOut);
    };
    /**
     * @return {?}
     */
    ToastDirective.prototype.initToastInterval = /**
     * @return {?}
     */
    function () {
        this.start = new Date();
        this.remaining = this.timeOut;
    };
    /**
     * @return {?}
     */
    ToastDirective.prototype.pauseToastInterval = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var current = new Date();
        this.remaining = this.remaining - (current - this.start);
    };
    /**
     * @return {?}
     */
    ToastDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.removeOnClick) {
            if (this.mouseClickCounter < 1) {
                clearTimeout(this._fadeOutTimeout);
                this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '1');
            }
            else {
                this.createToastFadeOutBehaviour(1);
            }
            this.mouseClickCounter++;
        }
    };
    /**
     * @return {?}
     */
    ToastDirective.prototype.onMouseHover = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.hostElement.nativeElement, 'cursor', 'pointer');
        if (this.mouseOverCounter < 1) {
            clearTimeout(this._fadeOutTimeout);
            this.pauseToastInterval();
            this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '0.95');
        }
        this.mouseOverCounter++;
    };
    /**
     * @return {?}
     */
    ToastDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (!(this.mouseClickCounter > 0)) {
            this.renderer.setStyle(this.hostElement.nativeElement, 'cursor', 'default');
            this.mouseOverCounter = 0;
            this.createToastFadeOutBehaviour(this.remaining);
            this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '1');
        }
    };
    ToastDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uiiToast]'
                },] }
    ];
    /** @nocollapse */
    ToastDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ToastService }
    ]; };
    ToastDirective.propDecorators = {
        timeOut: [{ type: Input, args: ['timeOut',] }],
        toastIndex: [{ type: Input, args: ['toastIndex',] }],
        removeOnClick: [{ type: Input, args: ['removeOnClick',] }],
        onClick: [{ type: HostListener, args: ['click',] }],
        onMouseHover: [{ type: HostListener, args: ['mouseover',] }],
        onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return ToastDirective;
}());
export { ToastDirective };
if (false) {
    /** @type {?} */
    ToastDirective.prototype.timeOut;
    /** @type {?} */
    ToastDirective.prototype.toastIndex;
    /** @type {?} */
    ToastDirective.prototype.removeOnClick;
    /** @type {?} */
    ToastDirective.prototype.mouseClickCounter;
    /** @type {?} */
    ToastDirective.prototype.mouseOverCounter;
    /** @type {?} */
    ToastDirective.prototype._fadeInTimeOut;
    /** @type {?} */
    ToastDirective.prototype._fadeOutTimeout;
    /** @type {?} */
    ToastDirective.prototype._removeTimeout;
    /** @type {?} */
    ToastDirective.prototype.start;
    /** @type {?} */
    ToastDirective.prototype.remaining;
    /**
     * @type {?}
     * @private
     */
    ToastDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ToastDirective.prototype.hostElement;
    /**
     * @type {?}
     * @private
     */
    ToastDirective.prototype.toastSvc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90b2FzdC90b2FzdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFNUQ7SUFtQkUsd0JBQ1UsUUFBbUIsRUFDbkIsV0FBdUIsRUFDdkIsUUFBc0I7UUFGdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBYmhDLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixxQkFBZ0IsR0FBSSxDQUFDLENBQUM7SUFhbEIsQ0FBQzs7OztJQUVMLGlDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVOzs7UUFBQztZQUMvQixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdkUsS0FBSSxDQUFDLDJCQUEyQixDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDOzs7OztJQUVELG9EQUEyQjs7OztJQUEzQixVQUE0QixnQkFBcUI7UUFBakQsaUJBT0M7UUFOQyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVU7OztRQUFDO1lBQ2hDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFB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RCxJQW1GQztTQWhGWSxjQUFjOzs7SUFFekIsaUNBQWtDOztJQUNsQyxvQ0FBd0M7O0lBQ3hDLHVDQUErQzs7SUFFL0MsMkNBQXNCOztJQUN0QiwwQ0FBc0I7O0lBRXRCLHdDQUFvQjs7SUFDcEIseUNBQXFCOztJQUNyQix3Q0FBb0I7O0lBRXBCLCtCQUFXOztJQUNYLG1DQUFlOzs7OztJQUdiLGtDQUEyQjs7Ozs7SUFDM0IscUNBQStCOzs7OztJQUMvQixrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3VpaVRvYXN0XSdcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgndGltZU91dCcpIHRpbWVPdXQ6IG51bWJlcjtcbiAgQElucHV0KCd0b2FzdEluZGV4JykgdG9hc3RJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3JlbW92ZU9uQ2xpY2snKSByZW1vdmVPbkNsaWNrOiBib29sZWFuO1xuXG4gIG1vdXNlQ2xpY2tDb3VudGVyID0gMDtcbiAgbW91c2VPdmVyQ291bnRlciAgPSAwO1xuXG4gIF9mYWRlSW5UaW1lT3V0OiBhbnk7XG4gIF9mYWRlT3V0VGltZW91dDogYW55O1xuICBfcmVtb3ZlVGltZW91dDogYW55O1xuXG4gIHN0YXJ0OiBhbnk7XG4gIHJlbWFpbmluZzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdG9hc3RTdmM6IFRvYXN0U2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdFRvYXN0SW50ZXJ2YWwoKTtcbiAgICB0aGlzLl9mYWRlSW5UaW1lT3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ29wYWNpdHknLCAnMScpO1xuICAgICAgdGhpcy5jcmVhdGVUb2FzdEZhZGVPdXRCZWhhdmlvdXIodGhpcy50aW1lT3V0KTtcbiAgICB9LCA1MCk7XG4gIH1cblxuICBjcmVhdGVUb2FzdEZhZGVPdXRCZWhhdmlvdXIocmVtYWluaW5nVGltZU91dDogYW55KSB7XG4gICAgdGhpcy5fZmFkZU91dFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3BhY2l0eScsICcwJyk7XG4gICAgICB0aGlzLl9yZW1vdmVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudG9hc3RTdmMucmVtb3ZlVG9hc3QodGhpcy50b2FzdEluZGV4KTtcbiAgICAgIH0sIDE3MCk7XG4gICAgfSwgcmVtYWluaW5nVGltZU91dCk7XG4gIH1cblxuICBpbml0VG9hc3RJbnRlcnZhbCgpIHtcbiAgICB0aGlzLnN0YXJ0ID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnJlbWFpbmluZyA9IHRoaXMudGltZU91dDtcbiAgfVxuXG4gIHBhdXNlVG9hc3RJbnRlcnZhbCgpIHtcbiAgICBjb25zdCBjdXJyZW50OiBhbnkgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMucmVtYWluaW5nID0gdGhpcy5yZW1haW5pbmcgLSAoY3VycmVudCAtIHRoaXMuc3RhcnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbkNsaWNrKCkge1xuICAgIGlmICh0aGlzLnJlbW92ZU9uQ2xpY2spIHtcbiAgICAgIGlmICh0aGlzLm1vdXNlQ2xpY2tDb3VudGVyIDwgMSkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZmFkZU91dFRpbWVvdXQpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ29wYWNpdHknLCAnMScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jcmVhdGVUb2FzdEZhZGVPdXRCZWhhdmlvdXIoMSk7XG4gICAgICB9XG4gICAgICB0aGlzLm1vdXNlQ2xpY2tDb3VudGVyKys7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VvdmVyJykgb25Nb3VzZUhvdmVyKCkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnY3Vyc29yJywgJ3BvaW50ZXInKTtcbiAgICBpZiAodGhpcy5tb3VzZU92ZXJDb3VudGVyIDwgMSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2ZhZGVPdXRUaW1lb3V0KTtcbiAgICAgIHRoaXMucGF1c2VUb2FzdEludGVydmFsKCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ29wYWNpdHknLCAnMC45NScpO1xuICAgIH1cbiAgICB0aGlzLm1vdXNlT3ZlckNvdW50ZXIrKztcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSBvbk1vdXNlTGVhdmUoKSB7XG4gICAgaWYgKCEodGhpcy5tb3VzZUNsaWNrQ291bnRlciA+IDApKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsICdkZWZhdWx0Jyk7XG4gICAgICB0aGlzLm1vdXNlT3ZlckNvdW50ZXIgPSAwO1xuICAgICAgdGhpcy5jcmVhdGVUb2FzdEZhZGVPdXRCZWhhdmlvdXIodGhpcy5yZW1haW5pbmcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdvcGFjaXR5JywgJzEnKTtcbiAgICB9XG4gIH1cblxufVxuIl19