/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/translate.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslateService } from '../services/translate.service';
export class TranslatePipe {
    /**
     * @param {?} translateSvc
     */
    constructor(translateSvc) {
        this.translateSvc = translateSvc;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        if (!value) {
            return;
        }
        return this.translateSvc.instant(value, args);
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate',
                pure: false // impure pipe, update value when change language
            },] }
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslateService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.translateSvc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waWxhci8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBTWpFLE1BQU0sT0FBTyxhQUFhOzs7O0lBRXhCLFlBQW9CLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUV0RCxTQUFTLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU87U0FBRTtRQUV2QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUFaRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLElBQUksRUFBRSxLQUFLLENBQUMsaURBQWlEO2FBQzlEOzs7O1lBTFEsZ0JBQWdCOzs7Ozs7O0lBUVgscUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndHJhbnNsYXRlJyxcbiAgcHVyZTogZmFsc2UgLy8gaW1wdXJlIHBpcGUsIHVwZGF0ZSB2YWx1ZSB3aGVuIGNoYW5nZSBsYW5ndWFnZVxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGVTdmM6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZ3M/OiBhbnlbXSk6IGFueSB7XG4gICAgaWYgKCF2YWx1ZSkgeyByZXR1cm47IH1cblxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVN2Yy5pbnN0YW50KHZhbHVlLCBhcmdzKTtcbiAgfVxuXG59XG4iXX0=