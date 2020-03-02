/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/accordion.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var AccordionService = /** @class */ (function () {
    function AccordionService() {
        /**
         * isOpen subscription
         */
        this.subject = new Subject();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    AccordionService.prototype.setIsOpen = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.subject.next(value);
    };
    /**
     * @return {?}
     */
    AccordionService.prototype.getIsOpen = /**
     * @return {?}
     */
    function () {
        return this.subject.asObservable();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AccordionService.prototype.setIsAnimated = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._isAnimated = value;
    };
    /**
     * @return {?}
     */
    AccordionService.prototype.getIsAnimated = /**
     * @return {?}
     */
    function () {
        return this._isAnimated;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AccordionService.prototype.setCloseOthers = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._closeOthers = value;
    };
    /**
     * @return {?}
     */
    AccordionService.prototype.getCloseOthers = /**
     * @return {?}
     */
    function () {
        return this._closeOthers;
    };
    AccordionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AccordionService.ctorParameters = function () { return []; };
    /** @nocollapse */ AccordionService.ngInjectableDef = i0.defineInjectable({ factory: function AccordionService_Factory() { return new AccordionService(); }, token: AccordionService, providedIn: "root" });
    return AccordionService;
}());
export { AccordionService };
if (false) {
    /**
     * turn on/off animation
     * @type {?}
     * @protected
     */
    AccordionService.prototype._isAnimated;
    /**
     * if 'true', expanding one item will close other panels
     * @type {?}
     * @protected
     */
    AccordionService.prototype._closeOthers;
    /**
     * isOpen subscription
     * @type {?}
     */
    AccordionService.prototype.subject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0I7SUFZRTs7OztRQUZBLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO0lBRWxCLENBQUM7Ozs7O0lBRWhCLG9DQUFTOzs7O0lBQVQsVUFBVSxLQUFjO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxvQ0FBUzs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCx3Q0FBYTs7OztJQUFiLFVBQWMsS0FBYztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsd0NBQWE7OztJQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQseUNBQWM7Ozs7SUFBZCxVQUFlLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELHlDQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOztnQkFwQ0YsVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7Ozs7MkJBTEQ7Q0F5Q0MsQUF0Q0QsSUFzQ0M7U0FsQ1ksZ0JBQWdCOzs7Ozs7O0lBRTNCLHVDQUErQjs7Ozs7O0lBRS9CLHdDQUFnQzs7Ozs7SUFFaEMsbUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uU2VydmljZSB7XG4gIC8qKiB0dXJuIG9uL29mZiBhbmltYXRpb24gKi9cbiAgcHJvdGVjdGVkIF9pc0FuaW1hdGVkOiBib29sZWFuO1xuICAvKiogaWYgJ3RydWUnLCBleHBhbmRpbmcgb25lIGl0ZW0gd2lsbCBjbG9zZSBvdGhlciBwYW5lbHMgKi9cbiAgcHJvdGVjdGVkIF9jbG9zZU90aGVyczogYm9vbGVhbjtcbiAgLyoqIGlzT3BlbiBzdWJzY3JpcHRpb24gKi9cbiAgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNldElzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIGdldElzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0SXNBbmltYXRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzQW5pbWF0ZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldElzQW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQW5pbWF0ZWQ7XG4gIH1cblxuICBzZXRDbG9zZU90aGVycyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Nsb3NlT3RoZXJzID0gdmFsdWU7XG4gIH1cblxuICBnZXRDbG9zZU90aGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvc2VPdGhlcnM7XG4gIH1cblxufVxuIl19