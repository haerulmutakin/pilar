/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/collapse/collapse.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input, HostListener } from '@angular/core';
import { AccordionService } from '../../services/accordion.service';
export class CollapseDirective {
    /**
     * @param {?} renderer
     * @param {?} hostElement
     * @param {?} accordionSvc
     */
    constructor(renderer, hostElement, accordionSvc) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.accordionSvc = accordionSvc;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * styles which will be applied if isAnimated = false
         */
        this.DISPLAY_SHOW_VALUE = 'block';
        this.DISPLAY_HIDE_VALUE = 'none';
        /**
         * a class which will be applied if isAnimated = false
         */
        this.DISPLAY_NONE_CLASS = 'uii-accordion-group-content-none';
        /**
         * a class which will be applied if isAnimated = true
         */
        this.DISPLAY_ANIMATED_CLASS = 'uii-accordion-group-content-hide';
        /**
         * store temporary changing height
         */
        this.tempHeight = 0;
    }
    /**
     * update accordion group condition
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        this.initOpenStatus(this.accordionSvc.getIsAnimated(), value);
        this.changeOpenStatus(this.accordionSvc.getIsAnimated(), value);
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.hostElement.nativeElement.clientHeight !== this.tempHeight) {
            this.tempHeight = this.hostElement.nativeElement.clientHeight;
        }
    }
    /**
     * @param {?} isAnimated
     * @param {?} isOpen
     * @return {?}
     */
    initOpenStatus(isAnimated, isOpen) {
        if (!isAnimated) {
            this.renderer.removeClass(this.hostElement.nativeElement, 'uii-accordion-group-content-hide');
            if (isOpen) {
                this.renderer.setStyle(this.hostElement.nativeElement, 'display', this.DISPLAY_SHOW_VALUE);
            }
            else {
                this.renderer.setStyle(this.hostElement.nativeElement, 'display', this.DISPLAY_HIDE_VALUE);
            }
        }
        else {
            this.renderer.removeClass(this.hostElement.nativeElement, 'uii-accordion-group-content-none');
            if (isOpen) {
                /** @type {?} */
                const content = this.hostElement.nativeElement.scrollHeight;
                this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', content + 'px');
            }
            else {
                this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', 0 + 'px');
            }
        }
    }
    /**
     * @param {?} isAnimated
     * @param {?} isOpen
     * @return {?}
     */
    changeOpenStatus(isAnimated, isOpen) {
        if (!isAnimated) {
            this.renderer.removeClass(this.hostElement.nativeElement, 'uii-accordion-group-content-hide');
            if (isOpen) {
                this.renderer.setStyle(this.hostElement.nativeElement, 'display', this.DISPLAY_SHOW_VALUE);
            }
            else {
                this.renderer.setStyle(this.hostElement.nativeElement, 'display', this.DISPLAY_HIDE_VALUE);
            }
        }
        else {
            this.renderer.removeClass(this.hostElement.nativeElement, 'uii-accordion-group-content-none');
            if (isOpen) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.renderer.setStyle(this.hostElement.nativeElement, 'overflow', 'hidden');
                }), 1);
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const content = this.hostElement.nativeElement.scrollHeight;
                    this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', content + 'px');
                }), 2);
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.renderer.setStyle(this.hostElement.nativeElement, 'overflow', 'hidden');
                }), 1);
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', 0 + 'px');
                }), 2);
                this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', this.tempHeight + 'px');
            }
        }
    }
    /**
     * @return {?}
     */
    onTransitionEnd() {
        if (this.selectedGroup) {
            this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', 'none');
            this.renderer.setStyle(this.hostElement.nativeElement, 'overflow', 'visible');
        }
    }
}
CollapseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uiiCollapse]'
            },] }
];
/** @nocollapse */
CollapseDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: AccordionService }
];
CollapseDirective.propDecorators = {
    isOpen: [{ type: Input }],
    selectedGroup: [{ type: Input }],
    onTransitionEnd: [{ type: HostListener, args: ['transitionend',] }]
};
if (false) {
    /**
     * if closeOther(s) is true, then prevent the closed groups to execute onTransitionEnd
     * @type {?}
     */
    CollapseDirective.prototype.selectedGroup;
    /**
     * turn on/off animation
     * @type {?}
     */
    CollapseDirective.prototype.isAnimated;
    /**
     * styles which will be applied if isAnimated = false
     * @type {?}
     */
    CollapseDirective.prototype.DISPLAY_SHOW_VALUE;
    /** @type {?} */
    CollapseDirective.prototype.DISPLAY_HIDE_VALUE;
    /**
     * a class which will be applied if isAnimated = false
     * @type {?}
     */
    CollapseDirective.prototype.DISPLAY_NONE_CLASS;
    /**
     * a class which will be applied if isAnimated = true
     * @type {?}
     */
    CollapseDirective.prototype.DISPLAY_ANIMATED_CLASS;
    /**
     * store temporary changing height
     * @type {?}
     */
    CollapseDirective.prototype.tempHeight;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype.hostElement;
    /**
     * @type {?}
     * @private
     */
    CollapseDirective.prototype.accordionSvc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jb2xsYXBzZS9jb2xsYXBzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFLcEUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBcUI1QixZQUNVLFFBQW1CLEVBQ25CLFdBQXVCLEVBQ3ZCLFlBQThCO1FBRjlCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWtCOzs7O1FBZHhDLGVBQVUsR0FBRyxLQUFLLENBQUM7Ozs7UUFFbkIsdUJBQWtCLEdBQUcsT0FBTyxDQUFDO1FBQzdCLHVCQUFrQixHQUFHLE1BQU0sQ0FBQzs7OztRQUU1Qix1QkFBa0IsR0FBRyxrQ0FBa0MsQ0FBQzs7OztRQUV4RCwyQkFBc0IsR0FBRyxrQ0FBa0MsQ0FBQzs7OztRQUU1RCxlQUFVLEdBQUcsQ0FBQyxDQUFDO0lBTVosQ0FBQzs7Ozs7O0lBdkJKLElBQ00sTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7SUFxQkgsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsWUFBWSxLQUFLLElBQUksQ0FB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ZTs7Ozs7SUFHYixxQ0FBMkI7Ozs7O0lBQzNCLHdDQUErQjs7Ozs7SUFDL0IseUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIElucHV0LCBBZnRlclZpZXdDaGVja2VkLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjY29yZGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t1aWlDb2xsYXBzZV0nXG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIC8qKiB1cGRhdGUgYWNjb3JkaW9uIGdyb3VwIGNvbmRpdGlvbiAqL1xuICBASW5wdXQoKVxuICAgIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuaW5pdE9wZW5TdGF0dXModGhpcy5hY2NvcmRpb25TdmMuZ2V0SXNBbmltYXRlZCgpLCB2YWx1ZSk7XG4gICAgICB0aGlzLmNoYW5nZU9wZW5TdGF0dXModGhpcy5hY2NvcmRpb25TdmMuZ2V0SXNBbmltYXRlZCgpLCB2YWx1ZSk7XG4gICAgfVxuICAvKiogaWYgY2xvc2VPdGhlcihzKSBpcyB0cnVlLCB0aGVuIHByZXZlbnQgdGhlIGNsb3NlZCBncm91cHMgdG8gZXhlY3V0ZSBvblRyYW5zaXRpb25FbmQgKi9cbiAgQElucHV0KCkgc2VsZWN0ZWRHcm91cDogQm9vbGVhbjtcbiAgLyoqIHR1cm4gb24vb2ZmIGFuaW1hdGlvbiAqL1xuICBpc0FuaW1hdGVkID0gZmFsc2U7XG4gIC8qKiBzdHlsZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIGlmIGlzQW5pbWF0ZWQgPSBmYWxzZSAqL1xuICBESVNQTEFZX1NIT1dfVkFMVUUgPSAnYmxvY2snO1xuICBESVNQTEFZX0hJREVfVkFMVUUgPSAnbm9uZSc7XG4gIC8qKiBhIGNsYXNzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCBpZiBpc0FuaW1hdGVkID0gZmFsc2UgKi9cbiAgRElTUExBWV9OT05FX0NMQVNTID0gJ3VpaS1hY2NvcmRpb24tZ3JvdXAtY29udGVudC1ub25lJztcbiAgLyoqIGEgY2xhc3Mgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIGlmIGlzQW5pbWF0ZWQgPSB0cnVlICovXG4gIERJU1BMQVlfQU5JTUFURURfQ0xBU1MgPSAndWlpLWFjY29yZGlvbi1ncm91cC1jb250ZW50LWhpZGUnO1xuICAvKiogc3RvcmUgdGVtcG9yYXJ5IGNoYW5naW5nIGhlaWdodCAqL1xuICB0ZW1wSGVpZ2h0ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGFjY29yZGlvblN2YzogQWNjb3JkaW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIGlmICh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0ICE9PSB0aGlzLnRlbXBIZWlnaHQpIHtcbiAgICAgIHRoaXMudGVtcEhlaWdodCA9IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgaW5pdE9wZW5TdGF0dXMoaXNBbmltYXRlZDogYm9vbGVhbiwgaXNPcGVuOiBib29sZWFuKSB7XG4gICAgaWYgKCFpc0FuaW1hdGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3VpaS1hY2NvcmRpb24tZ3JvdXAtY29udGVudC1oaWRlJyk7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuRElTUExBWV9TSE9XX1ZBTFVFKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuRElTUExBWV9ISURFX1ZBTFVFKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd1aWktYWNjb3JkaW9uLWdyb3VwLWNvbnRlbnQtbm9uZScpO1xuICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtYXgtaGVpZ2h0JywgY29udGVudCArICdweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtYXgtaGVpZ2h0JywgMCArICdweCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZU9wZW5TdGF0dXMoaXNBbmltYXRlZDogYm9vbGVhbiwgaXNPcGVuOiBib29sZWFuKSB7XG4gICAgaWYgKCFpc0FuaW1hdGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3VpaS1hY2NvcmRpb24tZ3JvdXAtY29udGVudC1oaWRlJyk7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuRElTUExBWV9TSE9XX1ZBTFVFKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuRElTUExBWV9ISURFX1ZBTFVFKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd1aWktYWNjb3JkaW9uLWdyb3VwLWNvbnRlbnQtbm9uZScpO1xuICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICB9LCAxKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtYXgtaGVpZ2h0JywgY29udGVudCArICdweCcpO1xuICAgICAgICB9LCAyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgIH0sIDEpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21heC1oZWlnaHQnLCAwICsgJ3B4Jyk7XG4gICAgICAgIH0sIDIpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21heC1oZWlnaHQnLCB0aGlzLnRlbXBIZWlnaHQgKyAncHgnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJykgb25UcmFuc2l0aW9uRW5kKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkR3JvdXApIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbWF4LWhlaWdodCcsICdub25lJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcbiAgICB9XG4gIH1cblxufVxuIl19