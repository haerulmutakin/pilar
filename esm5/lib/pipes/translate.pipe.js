/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/translate.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslateService } from '../services/translate.service';
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translateSvc) {
        this.translateSvc = translateSvc;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        if (!value) {
            return;
        }
        return this.translateSvc.instant(value, args);
    };
    TranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'translate',
                    pure: false // impure pipe, update value when change language
                },] }
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
    return TranslatePipe;
}());
export { TranslatePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.translateSvc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waWxhci8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWpFO0lBTUUsdUJBQW9CLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUV0RCxpQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQWEsRUFBRSxJQUFZO1FBQ25DLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFdkIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBWkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxXQUFXO29CQUNqQixJQUFJLEVBQUUsS0FBSyxDQUFDLGlEQUFpRDtpQkFDOUQ7Ozs7Z0JBTFEsZ0JBQWdCOztJQWdCekIsb0JBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxhQUFhOzs7Ozs7SUFFWixxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0cmFuc2xhdGUnLFxuICBwdXJlOiBmYWxzZSAvLyBpbXB1cmUgcGlwZSwgdXBkYXRlIHZhbHVlIHdoZW4gY2hhbmdlIGxhbmd1YWdlXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVN2YzogVHJhbnNsYXRlU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJncz86IGFueVtdKTogYW55IHtcbiAgICBpZiAoIXZhbHVlKSB7IHJldHVybjsgfVxuXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU3ZjLmluc3RhbnQodmFsdWUsIGFyZ3MpO1xuICB9XG5cbn1cbiJdfQ==