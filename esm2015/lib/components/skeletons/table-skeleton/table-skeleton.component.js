/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/skeletons/table-skeleton/table-skeleton.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
import { trigger } from '@angular/animations';
import { fadeIn, fadeOut } from '../../../helpers/animations';
export class TableSkeletonComponent {
    constructor() {
        this.columnCount = 3;
        this.rowCount = 10;
        this.showActionColumn = true;
        this.showButtonCreate = true;
        this.showCheckButton = false;
        this.showLimitOptions = true;
        this.showMobileLimitOptions = true;
        this.showNumberColumn = true;
        this.showRadioButton = false;
        this.showSearchOptions = true;
        this.useCustomElement = false;
        this.rows = Array;
        this.columns = Array;
    }
}
TableSkeletonComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-table-skeleton',
                template: "<div [@fadeIn]=\"'in'\">\n  <div *ngIf=\"showButtonCreate\" class=\"button-action-right\">\n      <button class=\"btn btn-skeleton\"></button>\n  </div>\n  <div *ngIf=\"showMobileLimitOptions\" class=\"search-limit-mobile-options\"></div>\n  <div class=\"mobile-skeleton-container\">\n    <div *ngFor=\"let row of rows(rowCount)\" class=\"table-skeleton-mobile\">\n      <div class=\"cell-left\">\n          <ul class=\"mobile-cell-container\">\n            <li *ngIf=\"showNumberColumn\"></li>\n            <li *ngFor=\"let colum of columns(columnCount)\"></li>\n          </ul>\n        </div>\n      <div class=\"cell-right\">\n          <ul class=\"mobile-cell-container\">\n            <li *ngIf=\"showNumberColumn\"></li>\n            <li *ngFor=\"let colum of columns(columnCount)\"></li>\n          </ul>\n        </div>\n    </div>\n  </div>\n  <div class=\"row search-limit-options\" *ngIf=\"showSearchOptions || showLimitOptions\">\n      <div class=\"col-sm-6 skeleton\">\n        <div *ngIf=\"showLimitOptions\" class=\"linear-lg pull-left\"></div>\n      </div>\n      <div class=\"col-sm-6 skeleton\">\n        <div *ngIf=\"showSearchOptions\" class=\"linear-xl pull-right\"></div>\n      </div>\n  </div>\n  <table class=\"table table-skeleton table-striped\">\n    <thead>\n      <tr>\n        <th *ngIf=\"showNumberColumn\" width=\"40\"><label class=\"header-number\"></label></th>\n        <th *ngIf=\"showCheckButton || showRadioButton\" width=\"40\"><label class=\"header-number\"></label></th>\n        <th *ngFor=\"let colum of columns(columnCount)\"><label></label></th>\n        <th *ngIf=\"showActionColumn\" class=\"header-action\"><label></label></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let row of rows(rowCount)\">\n        <td *ngIf=\"showNumberColumn\"><label class=\"body-number\"></label></td>\n        <td *ngIf=\"showCheckButton || showRadioButton\"><label class=\"body-number\"></label></td>\n        <td *ngFor=\"let colum of columns(columnCount)\"><label class=\"body-label\"></label></td>\n        <td *ngIf=\"showActionColumn\" class=\"body-action\"><label class=\"body-label\"></label></td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
                animations: [
                    trigger('fadeIn', fadeIn()),
                    trigger('fadeOut', fadeOut())
                ]
            }] }
];
TableSkeletonComponent.propDecorators = {
    customElement: [{ type: Input }],
    columnCount: [{ type: Input }],
    rowCount: [{ type: Input }],
    showActionColumn: [{ type: Input }],
    showButtonCreate: [{ type: Input }],
    showCheckButton: [{ type: Input }],
    showLimitOptions: [{ type: Input }],
    showMobileLimitOptions: [{ type: Input }],
    showNumberColumn: [{ type: Input }],
    showRadioButton: [{ type: Input }],
    showSearchOptions: [{ type: Input }],
    useCustomElement: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TableSkeletonComponent.prototype.customElement;
    /** @type {?} */
    TableSkeletonComponent.prototype.columnCount;
    /** @type {?} */
    TableSkeletonComponent.prototype.rowCount;
    /** @type {?} */
    TableSkeletonComponent.prototype.showActionColumn;
    /** @type {?} */
    TableSkeletonComponent.prototype.showButtonCreate;
    /** @type {?} */
    TableSkeletonComponent.prototype.showCheckButton;
    /** @type {?} */
    TableSkeletonComponent.prototype.showLimitOptions;
    /** @type {?} */
    TableSkeletonComponent.prototype.showMobileLimitOptions;
    /** @type {?} */
    TableSkeletonComponent.prototype.showNumberColumn;
    /** @type {?} */
    TableSkeletonComponent.prototype.showRadioButton;
    /** @type {?} */
    TableSkeletonComponent.prototype.showSearchOptions;
    /** @type {?} */
    TableSkeletonComponent.prototype.useCustomElement;
    /** @type {?} */
    TableSkeletonComponent.prototype.rows;
    /** @type {?} */
    TableSkeletonComponent.prototype.columns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9za2VsZXRvbnMvdGFibGUtc2tlbGV0b24vdGFibGUtc2tlbGV0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBVzlELE1BQU0sT0FBTyxzQkFBc0I7SUFSbkM7UUFVVyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ2xCLENBQUM7OztZQXZCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsdXFFQUE4QztnQkFDOUMsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUM7aUJBQzlCO2FBQ0Y7Ozs0QkFFRSxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzsrQkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3FDQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSzs7OztJQVhOLCtDQUF5Qzs7SUFDekMsNkNBQXlCOztJQUN6QiwwQ0FBdUI7O0lBQ3ZCLGtEQUFpQzs7SUFDakMsa0RBQWlDOztJQUNqQyxpREFBaUM7O0lBQ2pDLGtEQUFpQzs7SUFDakMsd0RBQXVDOztJQUN2QyxrREFBaUM7O0lBQ2pDLGlEQUFpQzs7SUFDakMsbURBQWtDOztJQUNsQyxrREFBa0M7O0lBQ2xDLHNDQUFhOztJQUNiLHlDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2FuaW1hdGlvbnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpaS10YWJsZS1za2VsZXRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1za2VsZXRvbi5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmYWRlSW4nLCBmYWRlSW4oKSksXG4gICAgdHJpZ2dlcignZmFkZU91dCcsIGZhZGVPdXQoKSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVNrZWxldG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY3VzdG9tRWxlbWVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgY29sdW1uQ291bnQgPSAzO1xuICBASW5wdXQoKSByb3dDb3VudCA9IDEwO1xuICBASW5wdXQoKSBzaG93QWN0aW9uQ29sdW1uID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd0J1dHRvbkNyZWF0ZSA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dDaGVja0J1dHRvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93TGltaXRPcHRpb25zID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd01vYmlsZUxpbWl0T3B0aW9ucyA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dOdW1iZXJDb2x1bW4gPSB0cnVlO1xuICBASW5wdXQoKSBzaG93UmFkaW9CdXR0b24gPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd1NlYXJjaE9wdGlvbnMgPSB0cnVlO1xuICBASW5wdXQoKSB1c2VDdXN0b21FbGVtZW50ID0gZmFsc2U7XG4gIHJvd3MgPSBBcnJheTtcbiAgY29sdW1ucyA9IEFycmF5O1xufVxuIl19