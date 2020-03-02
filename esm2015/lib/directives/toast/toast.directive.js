/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/toast/toast.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input, HostListener } from '@angular/core';
import { ToastService } from '../../services/toast.service';
export class ToastDirective {
    /**
     * @param {?} renderer
     * @param {?} hostElement
     * @param {?} toastSvc
     */
    constructor(renderer, hostElement, toastSvc) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.toastSvc = toastSvc;
        this.mouseClickCounter = 0;
        this.mouseOverCounter = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initToastInterval();
        this._fadeInTimeOut = setTimeout((/**
         * @return {?}
         */
        () => {
            this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '1');
            this.createToastFadeOutBehaviour(this.timeOut);
        }), 50);
    }
    /**
     * @param {?} remainingTimeOut
     * @return {?}
     */
    createToastFadeOutBehaviour(remainingTimeOut) {
        this._fadeOutTimeout = setTimeout((/**
         * @return {?}
         */
        () => {
            this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '0');
            this._removeTimeout = setTimeout((/**
             * @return {?}
             */
            () => {
                this.toastSvc.removeToast(this.toastIndex);
            }), 170);
        }), remainingTimeOut);
    }
    /**
     * @return {?}
     */
    initToastInterval() {
        this.start = new Date();
        this.remaining = this.timeOut;
    }
    /**
     * @return {?}
     */
    pauseToastInterval() {
        /** @type {?} */
        const current = new Date();
        this.remaining = this.remaining - (current - this.start);
    }
    /**
     * @return {?}
     */
    onClick() {
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
    }
    /**
     * @return {?}
     */
    onMouseHover() {
        this.renderer.setStyle(this.hostElement.nativeElement, 'cursor', 'pointer');
        if (this.mouseOverCounter < 1) {
            clearTimeout(this._fadeOutTimeout);
            this.pauseToastInterval();
            this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '0.95');
        }
        this.mouseOverCounter++;
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        if (!(this.mouseClickCounter > 0)) {
            this.renderer.setStyle(this.hostElement.nativeElement, 'cursor', 'default');
            this.mouseOverCounter = 0;
            this.createToastFadeOutBehaviour(this.remaining);
            this.renderer.setStyle(this.hostElement.nativeElement, 'opacity', '1');
        }
    }
}
ToastDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uiiToast]'
            },] }
];
/** @nocollapse */
ToastDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ToastService }
];
ToastDirective.propDecorators = {
    timeOut: [{ type: Input, args: ['timeOut',] }],
    toastIndex: [{ type: Input, args: ['toastIndex',] }],
    removeOnClick: [{ type: Input, args: ['removeOnClick',] }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onMouseHover: [{ type: HostListener, args: ['mouseover',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90b2FzdC90b2FzdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLNUQsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQWdCekIsWUFDVSxRQUFtQixFQUNuQixXQUF1QixFQUN2QixRQUFzQjtRQUZ0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFiaEMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLHFCQUFnQixHQUFJLENBQUMsQ0FBQztJQWFsQixDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7Ozs7O0lBRUQsMkJBQTJCLENBQUMsZ0JBQXFCO1FBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFB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c0I7O0lBQ3RCLDBDQUFzQjs7SUFFdEIsd0NBQW9COztJQUNwQix5Q0FBcUI7O0lBQ3JCLHdDQUFvQjs7SUFFcEIsK0JBQVc7O0lBQ1gsbUNBQWU7Ozs7O0lBR2Isa0NBQTJCOzs7OztJQUMzQixxQ0FBK0I7Ozs7O0lBQy9CLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RvYXN0LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdWlpVG9hc3RdJ1xufSlcbmV4cG9ydCBjbGFzcyBUb2FzdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCd0aW1lT3V0JykgdGltZU91dDogbnVtYmVyO1xuICBASW5wdXQoJ3RvYXN0SW5kZXgnKSB0b2FzdEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgncmVtb3ZlT25DbGljaycpIHJlbW92ZU9uQ2xpY2s6IGJvb2xlYW47XG5cbiAgbW91c2VDbGlja0NvdW50ZXIgPSAwO1xuICBtb3VzZU92ZXJDb3VudGVyICA9IDA7XG5cbiAgX2ZhZGVJblRpbWVPdXQ6IGFueTtcbiAgX2ZhZGVPdXRUaW1lb3V0OiBhbnk7XG4gIF9yZW1vdmVUaW1lb3V0OiBhbnk7XG5cbiAgc3RhcnQ6IGFueTtcbiAgcmVtYWluaW5nOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0b2FzdFN2YzogVG9hc3RTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0VG9hc3RJbnRlcnZhbCgpO1xuICAgIHRoaXMuX2ZhZGVJblRpbWVPdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3BhY2l0eScsICcxJyk7XG4gICAgICB0aGlzLmNyZWF0ZVRvYXN0RmFkZU91dEJlaGF2aW91cih0aGlzLnRpbWVPdXQpO1xuICAgIH0sIDUwKTtcbiAgfVxuXG4gIGNyZWF0ZVRvYXN0RmFkZU91dEJlaGF2aW91cihyZW1haW5pbmdUaW1lT3V0OiBhbnkpIHtcbiAgICB0aGlzLl9mYWRlT3V0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdvcGFjaXR5JywgJzAnKTtcbiAgICAgIHRoaXMuX3JlbW92ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy50b2FzdFN2Yy5yZW1vdmVUb2FzdCh0aGlzLnRvYXN0SW5kZXgpO1xuICAgICAgfSwgMTcwKTtcbiAgICB9LCByZW1haW5pbmdUaW1lT3V0KTtcbiAgfVxuXG4gIGluaXRUb2FzdEludGVydmFsKCkge1xuICAgIHRoaXMuc3RhcnQgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMucmVtYWluaW5nID0gdGhpcy50aW1lT3V0O1xuICB9XG5cbiAgcGF1c2VUb2FzdEludGVydmFsKCkge1xuICAgIGNvbnN0IGN1cnJlbnQ6IGFueSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5yZW1haW5pbmcgPSB0aGlzLnJlbWFpbmluZyAtIChjdXJyZW50IC0gdGhpcy5zdGFydCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMucmVtb3ZlT25DbGljaykge1xuICAgICAgaWYgKHRoaXMubW91c2VDbGlja0NvdW50ZXIgPCAxKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9mYWRlT3V0VGltZW91dCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3BhY2l0eScsICcxJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNyZWF0ZVRvYXN0RmFkZU91dEJlaGF2aW91cigxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubW91c2VDbGlja0NvdW50ZXIrKztcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKSBvbk1vdXNlSG92ZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCAncG9pbnRlcicpO1xuICAgIGlmICh0aGlzLm1vdXNlT3ZlckNvdW50ZXIgPCAxKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZmFkZU91dFRpbWVvdXQpO1xuICAgICAgdGhpcy5wYXVzZVRvYXN0SW50ZXJ2YWwoKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3BhY2l0eScsICcwLjk1Jyk7XG4gICAgfVxuICAgIHRoaXMubW91c2VPdmVyQ291bnRlcisrO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIG9uTW91c2VMZWF2ZSgpIHtcbiAgICBpZiAoISh0aGlzLm1vdXNlQ2xpY2tDb3VudGVyID4gMCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnY3Vyc29yJywgJ2RlZmF1bHQnKTtcbiAgICAgIHRoaXMubW91c2VPdmVyQ291bnRlciA9IDA7XG4gICAgICB0aGlzLmNyZWF0ZVRvYXN0RmFkZU91dEJlaGF2aW91cih0aGlzLnJlbWFpbmluZyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ29wYWNpdHknLCAnMScpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=