/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/common/table-filter/table-filter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
var TableFilterComponent = /** @class */ (function () {
    function TableFilterComponent() {
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
    TableFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} keyword
     * @return {?}
     */
    TableFilterComponent.prototype.onSearchChange = /**
     * @param {?} keyword
     * @return {?}
     */
    function (keyword) {
        this.searchChanged.emit(keyword);
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    TableFilterComponent.prototype.onLimitChange = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        this.limitChanged.emit(limit);
    };
    TableFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-table-filter',
                    template: "<div class=\"filter-options\" *ngIf=\"limitOptions || searchOptions\">\n  <div class=\"limit-options\" *ngIf=\"limitOptions\">\n    <span>\n      Tampilkan\n      <select (change)=\"onLimitChange($event.target.value)\">\n        <option *ngFor=\"let option of limitOpts\" [value]=\"option.value\">{{ option.label }}</option>\n      </select>\n      data\n    </span>\n  </div>\n  <div class=\"search-options\" *ngIf=\"searchOptions\">\n    <div class=\"input-container\">\n        <input #searchInput class=\"search-input\" type=\"text\" placeholder=\"Cari...\" (keyup.enter)=\"onSearchChange(searchInput.value)\"/>\n        <button><span class=\"fa fa-search\" (click)=\"onSearchChange(searchInput.value)\"></span></button>\n      </div>\n  </div>\n</div>",
                    styles: [".filter-options{width:100%;height:40px;position:relative;margin-bottom:15px}.filter-options .limit-options{font-size:12px}.filter-options .limit-options select{width:55px;height:40px;font-size:13px;background:#fff;outline:0}.filter-options .search-options{position:absolute;top:0;right:0;z-index:20}.filter-options .search-options .input-container{display:flex;align-items:center}.filter-options .search-options .search-input{height:40px;width:384px;margin:0;padding:0 10px;border:1px solid #ccc;outline:0}.filter-options .search-options button{background:#093697;box-shadow:none;color:#fff;height:40px;width:40px;border:none;outline:0;margin:0;font-size:20px}@media screen and (max-width:770px){.filter-options{display:none}}"]
                }] }
    ];
    /** @nocollapse */
    TableFilterComponent.ctorParameters = function () { return []; };
    TableFilterComponent.propDecorators = {
        limitOptions: [{ type: Input }],
        searchOptions: [{ type: Input }],
        limitChanged: [{ type: Output }],
        searchChanged: [{ type: Output }]
    };
    return TableFilterComponent;
}());
export { TableFilterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS90YWJsZS9jb21tb24vdGFibGUtZmlsdGVyL3RhYmxlLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBNkJFO1FBckJVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0MsY0FBUyxHQUFHO1lBQ1Y7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsRUFBRTthQUNWO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLEdBQUc7YUFDWDtTQUNGLENBQUM7SUFDYyxDQUFDOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsNkNBQWM7Ozs7SUFBZCxVQUFlLE9BQWU7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCw0Q0FBYTs7OztJQUFiLFVBQWMsS0FBYTtRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGd3QkFBNEM7O2lCQUU3Qzs7Ozs7K0JBRUUsS0FBSztnQ0FDTCxLQUFLOytCQUNMLE1BQU07Z0NBQ04sTUFBTTs7SUFpQ1QsMkJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXJDWSxvQkFBb0I7OztJQUMvQiw0Q0FBK0I7O0lBQy9CLDZDQUFnQzs7SUFDaEMsNENBQTRDOztJQUM1Qyw2Q0FBNkM7O0lBRTdDLHlDQWlCRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLXRhYmxlLWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1maWx0ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxpbWl0T3B0aW9uczogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VhcmNoT3B0aW9uczogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGxpbWl0Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlYXJjaENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbGltaXRPcHRzID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnMTAnLFxuICAgICAgdmFsdWU6IDEwXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJzI1JyxcbiAgICAgIHZhbHVlOiAyNVxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICc1MCcsXG4gICAgICB2YWx1ZTogNTBcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnMTAwJyxcbiAgICAgIHZhbHVlOiAxMDBcbiAgICB9XG4gIF07XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvblNlYXJjaENoYW5nZShrZXl3b3JkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlYXJjaENoYW5nZWQuZW1pdChrZXl3b3JkKTtcbiAgfVxuXG4gIG9uTGltaXRDaGFuZ2UobGltaXQ6IG51bWJlcikge1xuICAgIHRoaXMubGltaXRDaGFuZ2VkLmVtaXQobGltaXQpO1xuICB9XG5cbn1cbiJdfQ==