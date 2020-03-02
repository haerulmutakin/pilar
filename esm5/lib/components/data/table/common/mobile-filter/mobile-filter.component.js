/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/common/mobile-filter/mobile-filter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
var MobileFilterComponent = /** @class */ (function () {
    function MobileFilterComponent() {
        this.isAllRowsSelected = false;
        this.limitChanged = new EventEmitter();
        this.allRowsOnMobileSelected = new EventEmitter();
        this.searchChanged = new EventEmitter();
        this.columnSorted = new EventEmitter();
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
        this.toogleSearch = false;
        this.toggleLimit = false;
        this.isSortAsc = true;
        this.toggleSort = false;
    }
    /**
     * @return {?}
     */
    MobileFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selectedLimit = this.limitOpts[0].value;
    };
    /**
     * @return {?}
     */
    MobileFilterComponent.prototype.emitColumnSort = /**
     * @return {?}
     */
    function () {
        this.selectedColumn.sort = this.isSortAsc ? 'asc' : 'desc';
        this.columnSorted.emit(this.selectedColumn);
    };
    /**
     * @param {?} column
     * @return {?}
     */
    MobileFilterComponent.prototype.onColumnSelect = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.selectedColumn = column;
        this.emitColumnSort();
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    MobileFilterComponent.prototype.onLimitChange = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        this.selectedLimit = Number(limit);
        this.limitChanged.emit(Number(limit));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    MobileFilterComponent.prototype.onRowSelect = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.allRowsOnMobileSelected.emit($event);
    };
    /**
     * @param {?} keyword
     * @return {?}
     */
    MobileFilterComponent.prototype.onSearchChange = /**
     * @param {?} keyword
     * @return {?}
     */
    function (keyword) {
        this.searchChanged.emit(keyword);
    };
    /**
     * @return {?}
     */
    MobileFilterComponent.prototype.onSortTypeChange = /**
     * @return {?}
     */
    function () {
        this.isSortAsc = !this.isSortAsc;
        if (this.selectedColumn !== undefined && this.selectedColumn !== null) {
            this.emitColumnSort();
        }
    };
    MobileFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-mobile-filter',
                    template: "<div *ngIf=\"limitOptions || searchOptions\" class=\"mobile-filter-container\">\n  <div class=\"limit-check-container\">\n    <ul>\n      <li class=\"mobile-checkbox-container\" *ngIf=\"checkboxColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"checkbox\" [checked]=\"isAllRowsSelected\" class=\"gateway-rcb-select\" (change)=\"onRowSelect($event)\" />\n          <label class=\"gateway-rcb-label\"></label>\n          <p>&nbsp;Semua &nbsp;&nbsp;</p>\n        </div>\n      </li>\n      <li *ngIf=\"limitOptions\" class=\"mobile-limit-container\">\n        <div class=\"limiting\">\n          <span class=\"filter-select\" (click)=\"toggleLimit = !toggleLimit; toogleSearch = false; toggleSort = false;\">{{selectedLimit}} ditampilkan</span>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div *ngIf=\"searchOptions\" class=\"mobile-search-container\">\n    <ul>\n      <li (click)=\"toggleSort = true; toggleLimit = false; toogleSearch = false\">\n        <span class=\"ikon fa fa-sort\"></span>\n        <span>&nbsp;urutkan &nbsp;</span>\n      </li>\n      <li (click)=\"toogleSearch = !toogleSearch; toggleLimit = false; toggleSort = false\">\n        <span class=\"ikon fa\" [ngClass]=\"toogleSearch ? 'fa-times' : 'fa-search'\" ></span>\n      </li>\n    </ul>\n  </div>\n  <div class=\"mobile-limit-overlay\" [ngClass]=\"toggleLimit ? '' : 'hide-limit-select'\">\n    <ol class=\"limit-item\">\n      <li *ngFor=\"let limit of limitOpts\" (click)=\"onLimitChange(limit.value) ;toggleLimit = !toggleLimit\" >{{limit.label}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"mobile-searching\" [ngClass]=\"toogleSearch ? '' : 'hide-search'\">\n  <input #searchKeyword type=\"text\" placeholder=\"Cari...\" (keyup.enter)=\"onSearchChange(searchKeyword.value)\" />\n  <div class=\"erase-keyword\" (click)=\"onSearchChange(''); searchKeyword.value = ''\" >\n    <p *ngIf=\"searchKeyword.value !== ''\">&times;</p>\n  </div>\n</div>\n<div class=\"mobile-sorting\" [ngClass]=\"toggleSort ? '' : 'hide-sort'\">\n  <div class=\"close-sort-container\" (click)=\"toggleSort = false;\">\n    <span class=\"fa fa-times\" ></span>\n  </div>\n  <div class=\"sort-type-container\">\n    <p><b>Jenis urutan</b></p>\n    <input type=\"checkbox\" id=\"sort-toggle\" (change)=\"onSortTypeChange()\" />\n    <label for=\"sort-toggle\">\n      <span class=\"fa\" [ngClass]=\"isSortAsc ? 'fa-sort-amount-desc' : 'fa-sort-amount-asc'\"></span>&nbsp;\n      Urut {{isSortAsc ? 'naik' : 'turun'}}\n    </label>\n  </div>\n  <div class=\"column-container\">\n    <p><b>Pilih kolom</b></p>\n    <ul class=\"column-list\">\n      <li *ngFor=\"let item of columns; let i = index\">\n        <input type=\"radio\" [attr.id]=\"'item-' + i\" name=\"radio-culoumn-filter\" (change)=\"onColumnSelect(item)\" />\n        <label class=\"radio-col\" [attr.for]=\"'item-' + i\" for>{{item.name}}</label>\n      </li>\n    </ul>\n  </div>\n</div>",
                    styles: [".gateway-rcb{height:15px!important;position:relative;display:flex;align-items:center}.gateway-rcb .gateway-rcb-select{position:absolute;top:0;opacity:0}.gateway-rcb .gateway-rcb-select:checked+.gateway-rcb-label:before{content:\"\\f00c\";display:flex;justify-content:space-around;background:#4db6ac;border-color:#4db6ac}.gateway-rcb .gateway-rcb-label::before{content:\"\";margin:5px 0 0;padding:0;display:block;width:15px;height:15px;color:#fff;font-size:10px!important;font-family:FontAwesome;text-rendering:auto;border:1px solid #bdbdbd}.gateway-rcb .radio-label::before{border-radius:50%}.gateway-rcb p{font-size:13px;padding:0;margin:0}.mobile-filter-container,.mobile-searching,.mobile-sorting{display:none}@media screen and (max-width:770px){.mobile-filter-container{position:relative;display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;border-bottom:1px solid #ccc}.mobile-filter-container ul{list-style:none;padding:0;margin:0;display:flex;align-items:center}.mobile-filter-container ul li{height:35px;display:flex;align-items:center;justify-content:space-around;cursor:pointer}.mobile-filter-container .mobile-limit-container .filter-select{cursor:pointer}.mobile-filter-container .mobile-limit-container .filter-select::after{content:\"\\f078\";margin-left:5px;font-family:FontAwesome;text-rendering:auto;font-size:10px}.mobile-filter-container .mobile-search-container{width:auto}.mobile-filter-container .mobile-search-container ul .ikon{font-size:18px}.mobile-filter-container .mobile-search-container ul li:last-child{width:35px}.mobile-filter-container .mobile-search-overlay{position:absolute;left:0;top:35px;z-index:100;display:flex;align-items:center;width:100%}.mobile-filter-container .mobile-search-overlay input{height:35px;padding-left:5px;width:100%;outline:0;border-width:1px 1px 0;border-style:solid;border-color:#ccc}.mobile-filter-container .mobile-search-overlay button{width:35px;height:35px;font-size:18px;background:#093697;color:#fff;outline:0;border:none}.mobile-filter-container .mobile-search-overlay.hide-search{display:none!important}.mobile-filter-container .mobile-limit-overlay{position:absolute;display:block;left:0;top:35px;z-index:100;background:#fff;width:100%;border:1px solid #ccc}.mobile-filter-container .mobile-limit-overlay ol.limit-item{list-style:none;padding:0;margin:0}.mobile-filter-container .mobile-limit-overlay li{cursor:pointer;line-height:35px;padding-left:5px}.mobile-filter-container .mobile-limit-overlay li:hover{color:#fff;background:#093697}.mobile-filter-container .mobile-limit-overlay.hide-limit-select{display:none!important}.mobile-searching{position:relative;display:flex;align-items:center;width:100%;margin:-12px 0 15px}.mobile-searching input{height:35px;padding-left:5px;width:100%;outline:0;border-width:0 0 1px;border-style:solid;border-color:#ccc}.mobile-searching .erase-keyword{position:absolute;z-index:20;top:0;right:0;font-size:30px;cursor:pointer;color:#bdbdbd;background:#fff;height:33px;width:21px}.mobile-searching .erase-keyword p{margin:-4px 0 0;padding:0}.mobile-searching.hide-search{display:none!important}.mobile-sorting{padding:.75rem .75rem 0;width:100%;border:1px solid #bdbdbd;margin:-16px 0 15px;position:relative;display:block}.mobile-sorting div.close-sort-container{position:absolute;z-index:10;top:4px;right:0;font-size:14px;height:20px;width:20px;color:#bdbdbd}.mobile-sorting .sort-type-container{position:relative}.mobile-sorting .sort-type-container label{cursor:pointer;font-weight:400;border:2px solid #bdbdbd;padding:4px 0;width:90px;text-align:center}.mobile-sorting .sort-type-container input{position:absolute;opacity:0}.mobile-sorting .column-container{margin-top:5px}.mobile-sorting .column-container ul.column-list{list-style:none;padding:0}.mobile-sorting .column-container ul.column-list li{display:inline-block;position:relative}.mobile-sorting .column-container ul.column-list li .radio-col{cursor:pointer;border:2px solid #bdbdbd;padding:4px 7px;border-radius:10px;margin:3px 5px 3px 0;font-weight:400}.mobile-sorting .column-container ul.column-list li input{position:absolute;opacity:0;width:100%}.mobile-sorting .column-container ul.column-list li input:checked+.radio-col{background:#093697;border-color:#093697;color:#fff}.mobile-sorting.hide-sort{display:none}}"]
                }] }
    ];
    /** @nocollapse */
    MobileFilterComponent.ctorParameters = function () { return []; };
    MobileFilterComponent.propDecorators = {
        checkboxColumn: [{ type: Input }],
        columns: [{ type: Input }],
        limitOptions: [{ type: Input }],
        searchOptions: [{ type: Input }],
        isAllRowsSelected: [{ type: Input }],
        limitChanged: [{ type: Output }],
        allRowsOnMobileSelected: [{ type: Output }],
        searchChanged: [{ type: Output }],
        columnSorted: [{ type: Output }]
    };
    return MobileFilterComponent;
}());
export { MobileFilterComponent };
if (false) {
    /** @type {?} */
    MobileFilterComponent.prototype.checkboxColumn;
    /** @type {?} */
    MobileFilterComponent.prototype.columns;
    /** @type {?} */
    MobileFilterComponent.prototype.limitOptions;
    /** @type {?} */
    MobileFilterComponent.prototype.searchOptions;
    /** @type {?} */
    MobileFilterComponent.prototype.isAllRowsSelected;
    /** @type {?} */
    MobileFilterComponent.prototype.limitChanged;
    /** @type {?} */
    MobileFilterComponent.prototype.allRowsOnMobileSelected;
    /** @type {?} */
    MobileFilterComponent.prototype.searchChanged;
    /** @type {?} */
    MobileFilterComponent.prototype.columnSorted;
    /** @type {?} */
    MobileFilterComponent.prototype.limitOpts;
    /** @type {?} */
    MobileFilterComponent.prototype.selectedLimit;
    /** @type {?} */
    MobileFilterComponent.prototype.toogleSearch;
    /** @type {?} */
    MobileFilterComponent.prototype.toggleLimit;
    /** @type {?} */
    MobileFilterComponent.prototype.isSortAsc;
    /** @type {?} */
    MobileFilterComponent.prototype.toggleSort;
    /** @type {?} */
    MobileFilterComponent.prototype.selectedColumn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEvdGFibGUvY29tbW9uL21vYmlsZS1maWx0ZXIvbW9iaWxlLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBMENFO1FBaENTLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUN6QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsNEJBQXVCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVDLGNBQVMsR0FBRztZQUNWO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsRUFBRTthQUNWO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNEO2dCQUNFLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxHQUFHO2FBQ1g7U0FDRixDQUFDO1FBR0YsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBR0gsQ0FBQzs7OztJQUVqQix3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCw4Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCw4Q0FBYzs7OztJQUFkLFVBQWUsTUFBTTtRQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCw2Q0FBYTs7OztJQUFiLFVBQWMsS0FBYTtRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxNQUFXO1FBQ3JCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCw4Q0FBYzs7OztJQUFkLFVBQWUsT0FBZTtRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsZ0RBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO1lBQ3JFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7O2dCQTVFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsczRGQUE2Qzs7aUJBRTlDOzs7OztpQ0FFRSxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO29DQUNMLEtBQUs7K0JBQ0wsTUFBTTswQ0FDTixNQUFNO2dDQUNOLE1BQU07K0JBQ04sTUFBTTs7SUFnRVQsNEJBQUM7Q0FBQSxBQTlFRCxJQThFQztTQXpFWSxxQkFBcUI7OztJQUNoQywrQ0FBaUM7O0lBQ2pDLHdDQUE2Qjs7SUFDN0IsNkNBQStCOztJQUMvQiw4Q0FBZ0M7O0lBQ2hDLGtEQUFtQzs7SUFDbkMsNkNBQTRDOztJQUM1Qyx3REFBdUQ7O0lBQ3ZELDhDQUE2Qzs7SUFDN0MsNkNBQTRDOztJQUU1QywwQ0FpQkU7O0lBRUYsOENBQXNCOztJQUN0Qiw2Q0FBcUI7O0lBQ3JCLDRDQUFvQjs7SUFDcEIsMENBQWlCOztJQUNqQiwyQ0FBbUI7O0lBQ25CLCtDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLW1vYmlsZS1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9iaWxlLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21vYmlsZS1maWx0ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2JpbGVGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjaGVja2JveENvbHVtbjogYm9vbGVhbjtcbiAgQElucHV0KCkgY29sdW1uczogQXJyYXk8YW55PjtcbiAgQElucHV0KCkgbGltaXRPcHRpb25zOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWFyY2hPcHRpb25zOiBib29sZWFuO1xuICBASW5wdXQoKSBpc0FsbFJvd3NTZWxlY3RlZCA9IGZhbHNlO1xuICBAT3V0cHV0KCkgbGltaXRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYWxsUm93c09uTW9iaWxlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWFyY2hDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY29sdW1uU29ydGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGxpbWl0T3B0cyA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogJzEwJyxcbiAgICAgIHZhbHVlOiAxMFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICcyNScsXG4gICAgICB2YWx1ZTogMjVcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnNTAnLFxuICAgICAgdmFsdWU6IDUwXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJzEwMCcsXG4gICAgICB2YWx1ZTogMTAwXG4gICAgfVxuICBdO1xuXG4gIHNlbGVjdGVkTGltaXQ6IG51bWJlcjtcbiAgdG9vZ2xlU2VhcmNoID0gZmFsc2U7XG4gIHRvZ2dsZUxpbWl0ID0gZmFsc2U7XG4gIGlzU29ydEFzYyA9IHRydWU7XG4gIHRvZ2dsZVNvcnQgPSBmYWxzZTtcbiAgc2VsZWN0ZWRDb2x1bW46IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWRMaW1pdCA9IHRoaXMubGltaXRPcHRzWzBdLnZhbHVlO1xuICB9XG5cbiAgZW1pdENvbHVtblNvcnQoKSB7XG4gICAgdGhpcy5zZWxlY3RlZENvbHVtbi5zb3J0ID0gdGhpcy5pc1NvcnRBc2MgPyAnYXNjJyA6ICdkZXNjJztcbiAgICB0aGlzLmNvbHVtblNvcnRlZC5lbWl0KHRoaXMuc2VsZWN0ZWRDb2x1bW4pO1xuICB9XG5cbiAgb25Db2x1bW5TZWxlY3QoY29sdW1uKSB7XG4gICAgdGhpcy5zZWxlY3RlZENvbHVtbiA9IGNvbHVtbjtcbiAgICB0aGlzLmVtaXRDb2x1bW5Tb3J0KCk7XG4gIH1cblxuICBvbkxpbWl0Q2hhbmdlKGxpbWl0OiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkTGltaXQgPSBOdW1iZXIobGltaXQpO1xuICAgIHRoaXMubGltaXRDaGFuZ2VkLmVtaXQoTnVtYmVyKGxpbWl0KSk7XG4gIH1cblxuICBvblJvd1NlbGVjdCgkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuYWxsUm93c09uTW9iaWxlU2VsZWN0ZWQuZW1pdCgkZXZlbnQpO1xuICB9XG5cbiAgb25TZWFyY2hDaGFuZ2Uoa2V5d29yZDogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWFyY2hDaGFuZ2VkLmVtaXQoa2V5d29yZCk7XG4gIH1cblxuICBvblNvcnRUeXBlQ2hhbmdlKCkge1xuICAgIHRoaXMuaXNTb3J0QXNjID0gIXRoaXMuaXNTb3J0QXNjO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkQ29sdW1uICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zZWxlY3RlZENvbHVtbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5lbWl0Q29sdW1uU29ydCgpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=