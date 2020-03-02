/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/data-grid/data-grid.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class UiiDataGridComponent {
    constructor() {
        this.gridTitle = '';
        this.columnTitle = [];
        this.rowTitle = [];
        this.data = [];
        this.itemClick = new EventEmitter();
        this._enableItemClick = false;
    }
    /**
     * @param {?} enable
     * @return {?}
     */
    set enableItemCLick(enable) {
        this._enableItemClick = enable;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onItemClick(data) {
        if (this._enableItemClick) {
            this.itemClick.emit(data);
        }
    }
}
UiiDataGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-datagrid',
                template: "<div class=\"datagrid\">\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr class=\"active\">\n        <th style=\"width: 100px\">\n          <div class=\"text-center\" style=\"margin: auto; width: 100px\">{{ gridTitle }}</div>\n        </th>\n        <th *ngFor=\"let colTitle of columnTitle\">\n          <div class=\"text-center\" style=\"width: 250px;\">{{ colTitle }}</div>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let rTitle of rowTitle\" style=\"height: 100px;\">\n        <th class=\"text-center active\" style=\"vertical-align: middle;\">{{ rTitle }}</th>\n        <td *ngFor=\"let colTitle of columnTitle\" style=\"width: 300px; font-size: 13px\">\n          <ng-container *ngIf=\"data[rTitle]\">\n            <ng-container *ngIf=\"data[rTitle][colTitle]\" >\n              <div class=\"grid-item-wrapper\" [ngStyle]=\"_enableItemClick && {'cursor' : 'pointer'}\" (click)=\"onItemClick(data[rTitle][colTitle].value)\">\n                <span class=\"text-center\" [innerHTML]=\"data[rTitle][colTitle].label\"></span>\n              </div>\n            </ng-container>\n          </ng-container>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
                styles: [".datagrid{overflow:scroll;width:100%;max-height:35em}.datagrid thead th{position:-webkit-sticky;position:sticky;top:0}.datagrid thead th:first-child{left:0;z-index:1}.datagrid tbody th{position:-webkit-sticky;position:sticky;left:0;background:#f0f0f0}.datagrid table{border-collapse:collapse;width:100%}"]
            }] }
];
UiiDataGridComponent.propDecorators = {
    gridTitle: [{ type: Input }],
    columnTitle: [{ type: Input }],
    rowTitle: [{ type: Input }],
    data: [{ type: Input }],
    enableItemCLick: [{ type: Input }],
    itemClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiiDataGridComponent.prototype.gridTitle;
    /** @type {?} */
    UiiDataGridComponent.prototype.columnTitle;
    /** @type {?} */
    UiiDataGridComponent.prototype.rowTitle;
    /** @type {?} */
    UiiDataGridComponent.prototype.data;
    /** @type {?} */
    UiiDataGridComponent.prototype.itemClick;
    /** @type {?} */
    UiiDataGridComponent.prototype._enableItemClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS9kYXRhLWdyaWQvZGF0YS1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdkUsTUFBTSxPQUFPLG9CQUFvQjtJQUxqQztRQU1XLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixnQkFBVyxHQUFlLEVBQUUsQ0FBQztRQUM3QixhQUFRLEdBQWUsRUFBRSxDQUFDO1FBQzFCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFNckIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO0lBUTNCLENBQUM7Ozs7O0lBZkMsSUFDSSxlQUFlLENBQUMsTUFBZTtRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBTUQsV0FBVyxDQUFDLElBQVM7UUFDbkIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiwyc0NBQXlDOzthQUUxQzs7O3dCQUVFLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7OEJBQ0wsS0FBSzt3QkFLTCxNQUFNOzs7O0lBVFAseUNBQXdCOztJQUN4QiwyQ0FBc0M7O0lBQ3RDLHdDQUFtQzs7SUFDbkMsb0NBQStCOztJQU0vQix5Q0FBeUM7O0lBRXpDLGdEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpaS1kYXRhZ3JpZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWdyaWQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVaWlEYXRhR3JpZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGdyaWRUaXRsZSA9ICcnO1xuICBASW5wdXQoKSBjb2x1bW5UaXRsZTogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKSByb3dUaXRsZTogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKSBkYXRhOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpXG4gIHNldCBlbmFibGVJdGVtQ0xpY2soZW5hYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZW5hYmxlSXRlbUNsaWNrID0gZW5hYmxlO1xuICB9XG5cbiAgQE91dHB1dCgpIGl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfZW5hYmxlSXRlbUNsaWNrID0gZmFsc2U7XG5cbiAgb25JdGVtQ2xpY2soZGF0YTogYW55KSB7XG4gICAgaWYgKHRoaXMuX2VuYWJsZUl0ZW1DbGljaykge1xuICAgICAgdGhpcy5pdGVtQ2xpY2suZW1pdChkYXRhKTtcbiAgICB9XG4gIH1cblxufVxuIl19