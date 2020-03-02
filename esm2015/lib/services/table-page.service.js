/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/table-page.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class TablePageService {
    constructor() {
        this.page = new BehaviorSubject({});
    }
    /**
     * @param {?} page
     * @return {?}
     */
    setTablePage(page) {
        this.page.next(page);
    }
    /**
     * @return {?}
     */
    getTablePage() {
        return this.page.asObservable();
    }
}
TablePageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TablePageService.ctorParameters = () => [];
/** @nocollapse */ TablePageService.ngInjectableDef = i0.defineInjectable({ factory: function TablePageService_Factory() { return new TablePageService(); }, token: TablePageService, providedIn: "root" });
if (false) {
    /** @type {?} */
    TablePageService.prototype.page;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdGFibGUtcGFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQU1uRCxNQUFNLE9BQU8sZ0JBQWdCO0lBSTNCO1FBRkEsU0FBSSxHQUF5QixJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztJQUcxRCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUFrQjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7WUFoQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7O0lBR0MsZ0NBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQaWxUYWJsZVBhZ2UgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVBhZ2VTZXJ2aWNlIHtcblxuICBwYWdlOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih7fSk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBzZXRUYWJsZVBhZ2UocGFnZTogUGlsVGFibGVQYWdlKSB7XG4gICAgdGhpcy5wYWdlLm5leHQocGFnZSk7XG4gIH1cblxuICBnZXRUYWJsZVBhZ2UoKTogT2JzZXJ2YWJsZTxQaWxUYWJsZVBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=