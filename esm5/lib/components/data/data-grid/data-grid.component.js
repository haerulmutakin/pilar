/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/data-grid/data-grid.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var UiiDataGridComponent = /** @class */ (function () {
    function UiiDataGridComponent() {
        this.gridTitle = '';
        this.columnTitle = [];
        this.rowTitle = [];
        this.data = [];
        this.itemClick = new EventEmitter();
        this._enableItemClick = false;
    }
    Object.defineProperty(UiiDataGridComponent.prototype, "enableItemCLick", {
        set: /**
         * @param {?} enable
         * @return {?}
         */
        function (enable) {
            this._enableItemClick = enable;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    UiiDataGridComponent.prototype.onItemClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (this._enableItemClick) {
            this.itemClick.emit(data);
        }
    };
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
    return UiiDataGridComponent;
}());
export { UiiDataGridComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS9kYXRhLWdyaWQvZGF0YS1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkU7SUFBQTtRQU1XLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixnQkFBVyxHQUFlLEVBQUUsQ0FBQztRQUM3QixhQUFRLEdBQWUsRUFBRSxDQUFDO1FBQzFCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFNckIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO0lBUTNCLENBQUM7SUFmQyxzQkFDSSxpREFBZTs7Ozs7UUFEbkIsVUFDb0IsTUFBZTtZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBOzs7OztJQU1ELDBDQUFXOzs7O0lBQVgsVUFBWSxJQUFTO1FBQ25CLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsMnNDQUF5Qzs7aUJBRTFDOzs7NEJBRUUsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSztrQ0FDTCxLQUFLOzRCQUtMLE1BQU07O0lBVVQsMkJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXBCWSxvQkFBb0I7OztJQUMvQix5Q0FBd0I7O0lBQ3hCLDJDQUFzQzs7SUFDdEMsd0NBQW1DOztJQUNuQyxvQ0FBK0I7O0lBTS9CLHlDQUF5Qzs7SUFFekMsZ0RBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLWRhdGFncmlkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtZ3JpZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVpaURhdGFHcmlkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZ3JpZFRpdGxlID0gJyc7XG4gIEBJbnB1dCgpIGNvbHVtblRpdGxlOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIHJvd1RpdGxlOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIGRhdGE6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KClcbiAgc2V0IGVuYWJsZUl0ZW1DTGljayhlbmFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lbmFibGVJdGVtQ2xpY2sgPSBlbmFibGU7XG4gIH1cblxuICBAT3V0cHV0KCkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9lbmFibGVJdGVtQ2xpY2sgPSBmYWxzZTtcblxuICBvbkl0ZW1DbGljayhkYXRhOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fZW5hYmxlSXRlbUNsaWNrKSB7XG4gICAgICB0aGlzLml0ZW1DbGljay5lbWl0KGRhdGEpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=