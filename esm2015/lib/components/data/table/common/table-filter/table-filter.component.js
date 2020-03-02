/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/common/table-filter/table-filter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
export class TableFilterComponent {
    constructor() {
        this.limitChanged = new EventEmitter();
        this.searchChanged = new EventEmitter();
        this.limitOpts = [
            {
                label: '10',
                value: 10
            },
            {
                label: '25',
                value: 25
            },
            {
                label: '50',
                value: 50
            },
            {
                label: '100',
                value: 100
            }
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    onSearchChange(keyword) {
        this.searchChanged.emit(keyword);
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    onLimitChange(limit) {
        this.limitChanged.emit(limit);
    }
}
TableFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-table-filter',
                template: "<div class=\"filter-options\" *ngIf=\"limitOptions || searchOptions\">\n  <div class=\"limit-options\" *ngIf=\"limitOptions\">\n    <span>\n      Tampilkan\n      <select (change)=\"onLimitChange($event.target.value)\">\n        <option *ngFor=\"let option of limitOpts\" [value]=\"option.value\">{{ option.label }}</option>\n      </select>\n      data\n    </span>\n  </div>\n  <div class=\"search-options\" *ngIf=\"searchOptions\">\n    <div class=\"input-container\">\n        <input #searchInput class=\"search-input\" type=\"text\" placeholder=\"Cari...\" (keyup.enter)=\"onSearchChange(searchInput.value)\"/>\n        <button><span class=\"fa fa-search\" (click)=\"onSearchChange(searchInput.value)\"></span></button>\n      </div>\n  </div>\n</div>",
                styles: [".filter-options{width:100%;height:40px;position:relative;margin-bottom:15px}.filter-options .limit-options{font-size:12px}.filter-options .limit-options select{width:55px;height:40px;font-size:13px;background:#fff;outline:0}.filter-options .search-options{position:absolute;top:0;right:0;z-index:20}.filter-options .search-options .input-container{display:flex;align-items:center}.filter-options .search-options .search-input{height:40px;width:384px;margin:0;padding:0 10px;border:1px solid #ccc;outline:0}.filter-options .search-options button{background:#093697;box-shadow:none;color:#fff;height:40px;width:40px;border:none;outline:0;margin:0;font-size:20px}@media screen and (max-width:770px){.filter-options{display:none}}"]
            }] }
];
/** @nocollapse */
TableFilterComponent.ctorParameters = () => [];
TableFilterComponent.propDecorators = {
    limitOptions: [{ type: Input }],
    searchOptions: [{ type: Input }],
    limitChanged: [{ type: Output }],
    searchChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TableFilterComponent.prototype.limitOptions;
    /** @type {?} */
    TableFilterComponent.prototype.searchOptions;
    /** @type {?} */
    TableFilterComponent.prototype.limitChanged;
    /** @type {?} */
    TableFilterComponent.prototype.searchChanged;
    /** @type {?} */
    TableFilterComponent.prototype.limitOpts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS90YWJsZS9jb21tb24vdGFibGUtZmlsdGVyL3RhYmxlLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxvQkFBb0I7SUF3Qi9CO1FBckJVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0MsY0FBUyxHQUFHO1lBQ1Y7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsRUFBRTthQUNWO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLEdBQUc7YUFDWDtTQUNGLENBQUM7SUFDYyxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxPQUFlO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBeENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qixnd0JBQTRDOzthQUU3Qzs7Ozs7MkJBRUUsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLE1BQU07NEJBQ04sTUFBTTs7OztJQUhQLDRDQUErQjs7SUFDL0IsNkNBQWdDOztJQUNoQyw0Q0FBNEM7O0lBQzVDLDZDQUE2Qzs7SUFFN0MseUNBaUJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWktdGFibGUtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLWZpbHRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGltaXRPcHRpb25zOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWFyY2hPcHRpb25zOiBib29sZWFuO1xuICBAT3V0cHV0KCkgbGltaXRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VhcmNoQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBsaW1pdE9wdHMgPSBbXG4gICAge1xuICAgICAgbGFiZWw6ICcxMCcsXG4gICAgICB2YWx1ZTogMTBcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnMjUnLFxuICAgICAgdmFsdWU6IDI1XG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJzUwJyxcbiAgICAgIHZhbHVlOiA1MFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICcxMDAnLFxuICAgICAgdmFsdWU6IDEwMFxuICAgIH1cbiAgXTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKGtleXdvcmQ6IHN0cmluZykge1xuICAgIHRoaXMuc2VhcmNoQ2hhbmdlZC5lbWl0KGtleXdvcmQpO1xuICB9XG5cbiAgb25MaW1pdENoYW5nZShsaW1pdDogbnVtYmVyKSB7XG4gICAgdGhpcy5saW1pdENoYW5nZWQuZW1pdChsaW1pdCk7XG4gIH1cblxufVxuIl19