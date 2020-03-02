/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TranslateService } from './translate.service';
export class ConfigService {
    /**
     * @param {?} translateSvc
     */
    constructor(translateSvc) {
        this.translateSvc = translateSvc;
    }
    /**
     * @return {?}
     */
    paginateConfig() {
        return {
            previous: this.translateSvc.instant('previous'),
            next: this.translateSvc.instant('next'),
            cancel: this.translateSvc.instant('cancel'),
            done: this.translateSvc.instant('done')
        };
    }
}
ConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: TranslateService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.translateSvc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdkQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFdEIsWUFDWSxZQUE4QjtRQUE5QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7SUFDdEMsQ0FBQzs7OztJQUVMLGNBQWM7UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUMvQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDM0MsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUN4QyxDQUFDO0lBQ0osQ0FBQzs7O1lBZEosVUFBVTs7OztZQUZGLGdCQUFnQjs7Ozs7OztJQU1qQixxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0ZSB9IGZyb20gJy4vLi4vbW9kZWxzJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdHJhbnNsYXRlU3ZjOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIHBhZ2luYXRlQ29uZmlnKCk6IFBhZ2luYXRlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByZXZpb3VzOiB0aGlzLnRyYW5zbGF0ZVN2Yy5pbnN0YW50KCdwcmV2aW91cycpLFxuICAgICAgICBuZXh0OiB0aGlzLnRyYW5zbGF0ZVN2Yy5pbnN0YW50KCduZXh0JyksXG4gICAgICAgIGNhbmNlbDogdGhpcy50cmFuc2xhdGVTdmMuaW5zdGFudCgnY2FuY2VsJyksXG4gICAgICAgIGRvbmU6IHRoaXMudHJhbnNsYXRlU3ZjLmluc3RhbnQoJ2RvbmUnKVxuICAgICAgfTtcbiAgICB9XG59XG4iXX0=