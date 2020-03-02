/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/collapse/collapse.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input, HostListener } from '@angular/core';
import { AccordionService } from '../../services/accordion.service';
var CollapseDirective = /** @class */ (function () {
    function CollapseDirective(renderer, hostElement, accordionSvc) {
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
    Object.defineProperty(CollapseDirective.prototype, "isOpen", {
        /** update accordion group condition */
        set: /**
         * update accordion group condition
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.initOpenStatus(this.accordionSvc.getIsAnimated(), value);
            this.changeOpenStatus(this.accordionSvc.getIsAnimated(), value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CollapseDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this.hostElement.nativeElement.clientHeight !== this.tempHeight) {
            this.tempHeight = this.hostElement.nativeElement.clientHeight;
        }
    };
    /**
     * @param {?} isAnimated
     * @param {?} isOpen
     * @return {?}
     */
    CollapseDirective.prototype.initOpenStatus = /**
     * @param {?} isAnimated
     * @param {?} isOpen
     * @return {?}
     */
    function (isAnimated, isOpen) {
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
                var content = this.hostElement.nativeElement.scrollHeight;
                this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', content + 'px');
            }
            else {
                this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', 0 + 'px');
            }
        }
    };
    /**
     * @param {?} isAnimated
     * @param {?} isOpen
     * @return {?}
     */
    CollapseDirective.prototype.changeOpenStatus = /**
     * @param {?} isAnimated
     * @param {?} isOpen
     * @return {?}
     */
    function (isAnimated, isOpen) {
        var _this = this;
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
                function () {
                    _this.renderer.setStyle(_this.hostElement.nativeElement, 'overflow', 'hidden');
                }), 1);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var content = _this.hostElement.nativeElement.scrollHeight;
                    _this.renderer.setStyle(_this.hostElement.nativeElement, 'max-height', content + 'px');
                }), 2);
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.renderer.setStyle(_this.hostElement.nativeElement, 'overflow', 'hidden');
                }), 1);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.renderer.setStyle(_this.hostElement.nativeElement, 'max-height', 0 + 'px');
                }), 2);
                this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', this.tempHeight + 'px');
            }
        }
    };
    /**
     * @return {?}
     */
    CollapseDirective.prototype.onTransitionEnd = /**
     * @return {?}
     */
    function () {
        if (this.selectedGroup) {
            this.renderer.setStyle(this.hostElement.nativeElement, 'max-height', 'none');
            this.renderer.setStyle(this.hostElement.nativeElement, 'overflow', 'visible');
        }
    };
    CollapseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uiiCollapse]'
                },] }
    ];
    /** @nocollapse */
    CollapseDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: AccordionService }
    ]; };
    CollapseDirective.propDecorators = {
        isOpen: [{ type: Input }],
        selectedGroup: [{ type: Input }],
        onTransitionEnd: [{ type: HostListener, args: ['transitionend',] }]
    };
    return CollapseDirective;
}());
export { CollapseDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jb2xsYXBzZS9jb2xsYXBzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFcEU7SUF3QkUsMkJBQ1UsUUFBbUIsRUFDbkIsV0FBdUIsRUFDdkIsWUFBOEI7UUFGOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7Ozs7UUFkeEMsZUFBVSxHQUFHLEtBQUssQ0FBQzs7OztRQUVuQix1QkFBa0IsR0FBRyxPQUFPLENBQUM7UUFDN0IsdUJBQWtCLEdBQUcsTUFBTSxDQUFDOzs7O1FBRTVCLHVCQUFrQixHQUFHLGtDQUFrQyxDQUFDOzs7O1FBRXhELDJCQUFzQixHQUFHLGtDQUFrQyxDQUFDOzs7O1FBRTVELGVBQVUsR0FBRyxDQUFDLENBQUM7SUFNWixDQUFDO0lBdkJKLHNCQUNNLHFDQUFNO1FBRlosdUNBQXVDOzs7Ozs7UUFDdkMsVUFDYSxLQUFjO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRSxDQUFDOzs7T0FBQTs7OztJQXFCSCw4Q0FBa0I7OztJQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsWUFBWSxL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QzdCLCtDQUE0Qjs7Ozs7SUFFNUIsK0NBQXdEOzs7OztJQUV4RCxtREFBNEQ7Ozs7O0lBRTVELHVDQUFlOzs7OztJQUdiLHFDQUEyQjs7Ozs7SUFDM0Isd0NBQStCOzs7OztJQUMvQix5Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5wdXQsIEFmdGVyVmlld0NoZWNrZWQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjY29yZGlvbi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3VpaUNvbGxhcHNlXSdcbn0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcbiAgLyoqIHVwZGF0ZSBhY2NvcmRpb24gZ3JvdXAgY29uZGl0aW9uICovXG4gIEBJbnB1dCgpXG4gICAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgICAgdGhpcy5pbml0T3BlblN0YXR1cyh0aGlzLmFjY29yZGlvblN2Yy5nZXRJc0FuaW1hdGVkKCksIHZhbHVlKTtcbiAgICAgIHRoaXMuY2hhbmdlT3BlblN0YXR1cyh0aGlzLmFjY29yZGlvblN2Yy5nZXRJc0FuaW1hdGVkKCksIHZhbHVlKTtcbiAgICB9XG4gIC8qKiBpZiBjbG9zZU90aGVyKHMpIGlzIHRydWUsIHRoZW4gcHJldmVudCB0aGUgY2xvc2VkIGdyb3VwcyB0byBleGVjdXRlIG9uVHJhbnNpdGlvbkVuZCAqL1xuICBASW5wdXQoKSBzZWxlY3RlZEdyb3VwOiBCb29sZWFuO1xuICAvKiogdHVybiBvbi9vZmYgYW5pbWF0aW9uICovXG4gIGlzQW5pbWF0ZWQgPSBmYWxzZTtcbiAgLyoqIHN0eWxlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgaWYgaXNBbmltYXRlZCA9IGZhbHNlICovXG4gIERJU1BMQVlfU0hPV19WQUxVRSA9ICdibG9jayc7XG4gIERJU1BMQVlfSElERV9WQUxVRSA9ICdub25lJztcbiAgLyoqIGEgY2xhc3Mgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIGlmIGlzQW5pbWF0ZWQgPSBmYWxzZSAqL1xuICBESVNQTEFZX05PTkVfQ0xBU1MgPSAndWlpLWFjY29yZGlvbi1ncm91cC1jb250ZW50LW5vbmUnO1xuICAvKiogYSBjbGFzcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgaWYgaXNBbmltYXRlZCA9IHRydWUgKi9cbiAgRElTUExBWV9BTklNQVRFRF9DTEFTUyA9ICd1aWktYWNjb3JkaW9uLWdyb3VwLWNvbnRlbnQtaGlkZSc7XG4gIC8qKiBzdG9yZSB0ZW1wb3JhcnkgY2hhbmdpbmcgaGVpZ2h0ICovXG4gIHRlbXBIZWlnaHQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgYWNjb3JkaW9uU3ZjOiBBY2NvcmRpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgIT09IHRoaXMudGVtcEhlaWdodCkge1xuICAgICAgdGhpcy50ZW1wSGVpZ2h0ID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBpbml0T3BlblN0YXR1cyhpc0FuaW1hdGVkOiBib29sZWFuLCBpc09wZW46IGJvb2xlYW4pIHtcbiAgICBpZiAoIWlzQW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAndWlpLWFjY29yZGlvbi1ncm91cC1jb250ZW50LWhpZGUnKTtcbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgdGhpcy5ESVNQTEFZX1NIT1dfVkFMVUUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgdGhpcy5ESVNQTEFZX0hJREVfVkFMVUUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3VpaS1hY2NvcmRpb24tZ3JvdXAtY29udGVudC1ub25lJyk7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21heC1oZWlnaHQnLCBjb250ZW50ICsgJ3B4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21heC1oZWlnaHQnLCAwICsgJ3B4Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlT3BlblN0YXR1cyhpc0FuaW1hdGVkOiBib29sZWFuLCBpc09wZW46IGJvb2xlYW4pIHtcbiAgICBpZiAoIWlzQW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAndWlpLWFjY29yZGlvbi1ncm91cC1jb250ZW50LWhpZGUnKTtcbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgdGhpcy5ESVNQTEFZX1NIT1dfVkFMVUUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgdGhpcy5ESVNQTEFZX0hJREVfVkFMVUUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3VpaS1hY2NvcmRpb24tZ3JvdXAtY29udGVudC1ub25lJyk7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgIH0sIDEpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21heC1oZWlnaHQnLCBjb250ZW50ICsgJ3B4Jyk7XG4gICAgICAgIH0sIDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgfSwgMSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbWF4LWhlaWdodCcsIDAgKyAncHgnKTtcbiAgICAgICAgfSwgMik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbWF4LWhlaWdodCcsIHRoaXMudGVtcEhlaWdodCArICdweCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnKSBvblRyYW5zaXRpb25FbmQoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRHcm91cCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtYXgtaGVpZ2h0JywgJ25vbmUnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=