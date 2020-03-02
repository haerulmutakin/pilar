/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TranslateService } from './translate.service';
var ConfigService = /** @class */ (function () {
    function ConfigService(translateSvc) {
        this.translateSvc = translateSvc;
    }
    /**
     * @return {?}
     */
    ConfigService.prototype.paginateConfig = /**
     * @return {?}
     */
    function () {
        return {
            previous: this.translateSvc.instant('previous'),
            next: this.translateSvc.instant('next'),
            cancel: this.translateSvc.instant('cancel'),
            done: this.translateSvc.instant('done')
        };
    };
    ConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
    return ConfigService;
}());
export { ConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.translateSvc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQ7SUFHSSx1QkFDWSxZQUE4QjtRQUE5QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7SUFDdEMsQ0FBQzs7OztJQUVMLHNDQUFjOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQy9DLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDdkMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUMzQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQ3hDLENBQUM7SUFDSixDQUFDOztnQkFkSixVQUFVOzs7O2dCQUZGLGdCQUFnQjs7SUFpQnpCLG9CQUFDO0NBQUEsQUFmRCxJQWVDO1NBZFksYUFBYTs7Ozs7O0lBR2xCLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRlIH0gZnJvbSAnLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGVTdmM6IFRyYW5zbGF0ZVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgcGFnaW5hdGVDb25maWcoKTogUGFnaW5hdGUge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJldmlvdXM6IHRoaXMudHJhbnNsYXRlU3ZjLmluc3RhbnQoJ3ByZXZpb3VzJyksXG4gICAgICAgIG5leHQ6IHRoaXMudHJhbnNsYXRlU3ZjLmluc3RhbnQoJ25leHQnKSxcbiAgICAgICAgY2FuY2VsOiB0aGlzLnRyYW5zbGF0ZVN2Yy5pbnN0YW50KCdjYW5jZWwnKSxcbiAgICAgICAgZG9uZTogdGhpcy50cmFuc2xhdGVTdmMuaW5zdGFudCgnZG9uZScpXG4gICAgICB9O1xuICAgIH1cbn1cbiJdfQ==