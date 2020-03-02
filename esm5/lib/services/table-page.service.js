/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/table-page.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var TablePageService = /** @class */ (function () {
    function TablePageService() {
        this.page = new BehaviorSubject({});
    }
    /**
     * @param {?} page
     * @return {?}
     */
    TablePageService.prototype.setTablePage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.page.next(page);
    };
    /**
     * @return {?}
     */
    TablePageService.prototype.getTablePage = /**
     * @return {?}
     */
    function () {
        return this.page.asObservable();
    };
    TablePageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TablePageService.ctorParameters = function () { return []; };
    /** @nocollapse */ TablePageService.ngInjectableDef = i0.defineInjectable({ factory: function TablePageService_Factory() { return new TablePageService(); }, token: TablePageService, providedIn: "root" });
    return TablePageService;
}());
export { TablePageService };
if (false) {
    /** @type {?} */
    TablePageService.prototype.page;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdGFibGUtcGFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUduRDtJQU9FO1FBRkEsU0FBSSxHQUF5QixJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztJQUcxRCxDQUFDOzs7OztJQUVELHVDQUFZOzs7O0lBQVosVUFBYSxJQUFrQjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsdUNBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xDLENBQUM7O2dCQWhCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzsyQkFORDtDQXFCQyxBQWpCRCxJQWlCQztTQWRZLGdCQUFnQjs7O0lBRTNCLGdDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGlsVGFibGVQYWdlIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVQYWdlU2VydmljZSB7XG5cbiAgcGFnZTogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oe30pO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgc2V0VGFibGVQYWdlKHBhZ2U6IFBpbFRhYmxlUGFnZSkge1xuICAgIHRoaXMucGFnZS5uZXh0KHBhZ2UpO1xuICB9XG5cbiAgZ2V0VGFibGVQYWdlKCk6IE9ic2VydmFibGU8UGlsVGFibGVQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZS5hc09ic2VydmFibGUoKTtcbiAgfVxufVxuIl19