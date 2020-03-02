/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/common/mobile-filter/mobile-filter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
export class MobileFilterComponent {
    constructor() {
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
    ngOnInit() {
        this.selectedLimit = this.limitOpts[0].value;
    }
    /**
     * @return {?}
     */
    emitColumnSort() {
        this.selectedColumn.sort = this.isSortAsc ? 'asc' : 'desc';
        this.columnSorted.emit(this.selectedColumn);
    }
    /**
     * @param {?} column
     * @return {?}
     */
    onColumnSelect(column) {
        this.selectedColumn = column;
        this.emitColumnSort();
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    onLimitChange(limit) {
        this.selectedLimit = Number(limit);
        this.limitChanged.emit(Number(limit));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onRowSelect($event) {
        this.allRowsOnMobileSelected.emit($event);
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    onSearchChange(keyword) {
        this.searchChanged.emit(keyword);
    }
    /**
     * @return {?}
     */
    onSortTypeChange() {
        this.isSortAsc = !this.isSortAsc;
        if (this.selectedColumn !== undefined && this.selectedColumn !== null) {
            this.emitColumnSort();
        }
    }
}
MobileFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-mobile-filter',
                template: "<div *ngIf=\"limitOptions || searchOptions\" class=\"mobile-filter-container\">\n  <div class=\"limit-check-container\">\n    <ul>\n      <li class=\"mobile-checkbox-container\" *ngIf=\"checkboxColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"checkbox\" [checked]=\"isAllRowsSelected\" class=\"gateway-rcb-select\" (change)=\"onRowSelect($event)\" />\n          <label class=\"gateway-rcb-label\"></label>\n          <p>&nbsp;Semua &nbsp;&nbsp;</p>\n        </div>\n      </li>\n      <li *ngIf=\"limitOptions\" class=\"mobile-limit-container\">\n        <div class=\"limiting\">\n          <span class=\"filter-select\" (click)=\"toggleLimit = !toggleLimit; toogleSearch = false; toggleSort = false;\">{{selectedLimit}} ditampilkan</span>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div *ngIf=\"searchOptions\" class=\"mobile-search-container\">\n    <ul>\n      <li (click)=\"toggleSort = true; toggleLimit = false; toogleSearch = false\">\n        <span class=\"ikon fa fa-sort\"></span>\n        <span>&nbsp;urutkan &nbsp;</span>\n      </li>\n      <li (click)=\"toogleSearch = !toogleSearch; toggleLimit = false; toggleSort = false\">\n        <span class=\"ikon fa\" [ngClass]=\"toogleSearch ? 'fa-times' : 'fa-search'\" ></span>\n      </li>\n    </ul>\n  </div>\n  <div class=\"mobile-limit-overlay\" [ngClass]=\"toggleLimit ? '' : 'hide-limit-select'\">\n    <ol class=\"limit-item\">\n      <li *ngFor=\"let limit of limitOpts\" (click)=\"onLimitChange(limit.value) ;toggleLimit = !toggleLimit\" >{{limit.label}}</li>\n    </ol>\n  </div>\n</div>\n<div class=\"mobile-searching\" [ngClass]=\"toogleSearch ? '' : 'hide-search'\">\n  <input #searchKeyword type=\"text\" placeholder=\"Cari...\" (keyup.enter)=\"onSearchChange(searchKeyword.value)\" />\n  <div class=\"erase-keyword\" (click)=\"onSearchChange(''); searchKeyword.value = ''\" >\n    <p *ngIf=\"searchKeyword.value !== ''\">&times;</p>\n  </div>\n</div>\n<div class=\"mobile-sorting\" [ngClass]=\"toggleSort ? '' : 'hide-sort'\">\n  <div class=\"close-sort-container\" (click)=\"toggleSort = false;\">\n    <span class=\"fa fa-times\" ></span>\n  </div>\n  <div class=\"sort-type-container\">\n    <p><b>Jenis urutan</b></p>\n    <input type=\"checkbox\" id=\"sort-toggle\" (change)=\"onSortTypeChange()\" />\n    <label for=\"sort-toggle\">\n      <span class=\"fa\" [ngClass]=\"isSortAsc ? 'fa-sort-amount-desc' : 'fa-sort-amount-asc'\"></span>&nbsp;\n      Urut {{isSortAsc ? 'naik' : 'turun'}}\n    </label>\n  </div>\n  <div class=\"column-container\">\n    <p><b>Pilih kolom</b></p>\n    <ul class=\"column-list\">\n      <li *ngFor=\"let item of columns; let i = index\">\n        <input type=\"radio\" [attr.id]=\"'item-' + i\" name=\"radio-culoumn-filter\" (change)=\"onColumnSelect(item)\" />\n        <label class=\"radio-col\" [attr.for]=\"'item-' + i\" for>{{item.name}}</label>\n      </li>\n    </ul>\n  </div>\n</div>",
                styles: [".gateway-rcb{height:15px!important;position:relative;display:flex;align-items:center}.gateway-rcb .gateway-rcb-select{position:absolute;top:0;opacity:0}.gateway-rcb .gateway-rcb-select:checked+.gateway-rcb-label:before{content:\"\\f00c\";display:flex;justify-content:space-around;background:#4db6ac;border-color:#4db6ac}.gateway-rcb .gateway-rcb-label::before{content:\"\";margin:5px 0 0;padding:0;display:block;width:15px;height:15px;color:#fff;font-size:10px!important;font-family:FontAwesome;text-rendering:auto;border:1px solid #bdbdbd}.gateway-rcb .radio-label::before{border-radius:50%}.gateway-rcb p{font-size:13px;padding:0;margin:0}.mobile-filter-container,.mobile-searching,.mobile-sorting{display:none}@media screen and (max-width:770px){.mobile-filter-container{position:relative;display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;border-bottom:1px solid #ccc}.mobile-filter-container ul{list-style:none;padding:0;margin:0;display:flex;align-items:center}.mobile-filter-container ul li{height:35px;display:flex;align-items:center;justify-content:space-around;cursor:pointer}.mobile-filter-container .mobile-limit-container .filter-select{cursor:pointer}.mobile-filter-container .mobile-limit-container .filter-select::after{content:\"\\f078\";margin-left:5px;font-family:FontAwesome;text-rendering:auto;font-size:10px}.mobile-filter-container .mobile-search-container{width:auto}.mobile-filter-container .mobile-search-container ul .ikon{font-size:18px}.mobile-filter-container .mobile-search-container ul li:last-child{width:35px}.mobile-filter-container .mobile-search-overlay{position:absolute;left:0;top:35px;z-index:100;display:flex;align-items:center;width:100%}.mobile-filter-container .mobile-search-overlay input{height:35px;padding-left:5px;width:100%;outline:0;border-width:1px 1px 0;border-style:solid;border-color:#ccc}.mobile-filter-container .mobile-search-overlay button{width:35px;height:35px;font-size:18px;background:#093697;color:#fff;outline:0;border:none}.mobile-filter-container .mobile-search-overlay.hide-search{display:none!important}.mobile-filter-container .mobile-limit-overlay{position:absolute;display:block;left:0;top:35px;z-index:100;background:#fff;width:100%;border:1px solid #ccc}.mobile-filter-container .mobile-limit-overlay ol.limit-item{list-style:none;padding:0;margin:0}.mobile-filter-container .mobile-limit-overlay li{cursor:pointer;line-height:35px;padding-left:5px}.mobile-filter-container .mobile-limit-overlay li:hover{color:#fff;background:#093697}.mobile-filter-container .mobile-limit-overlay.hide-limit-select{display:none!important}.mobile-searching{position:relative;display:flex;align-items:center;width:100%;margin:-12px 0 15px}.mobile-searching input{height:35px;padding-left:5px;width:100%;outline:0;border-width:0 0 1px;border-style:solid;border-color:#ccc}.mobile-searching .erase-keyword{position:absolute;z-index:20;top:0;right:0;font-size:30px;cursor:pointer;color:#bdbdbd;background:#fff;height:33px;width:21px}.mobile-searching .erase-keyword p{margin:-4px 0 0;padding:0}.mobile-searching.hide-search{display:none!important}.mobile-sorting{padding:.75rem .75rem 0;width:100%;border:1px solid #bdbdbd;margin:-16px 0 15px;position:relative;display:block}.mobile-sorting div.close-sort-container{position:absolute;z-index:10;top:4px;right:0;font-size:14px;height:20px;width:20px;color:#bdbdbd}.mobile-sorting .sort-type-container{position:relative}.mobile-sorting .sort-type-container label{cursor:pointer;font-weight:400;border:2px solid #bdbdbd;padding:4px 0;width:90px;text-align:center}.mobile-sorting .sort-type-container input{position:absolute;opacity:0}.mobile-sorting .column-container{margin-top:5px}.mobile-sorting .column-container ul.column-list{list-style:none;padding:0}.mobile-sorting .column-container ul.column-list li{display:inline-block;position:relative}.mobile-sorting .column-container ul.column-list li .radio-col{cursor:pointer;border:2px solid #bdbdbd;padding:4px 7px;border-radius:10px;margin:3px 5px 3px 0;font-weight:400}.mobile-sorting .column-container ul.column-list li input{position:absolute;opacity:0;width:100%}.mobile-sorting .column-container ul.column-list li input:checked+.radio-col{background:#093697;border-color:#093697;color:#fff}.mobile-sorting.hide-sort{display:none}}"]
            }] }
];
/** @nocollapse */
MobileFilterComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEvdGFibGUvY29tbW9uL21vYmlsZS1maWx0ZXIvbW9iaWxlLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxxQkFBcUI7SUFxQ2hDO1FBaENTLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUN6QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsNEJBQXVCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVDLGNBQVMsR0FBRztZQUNWO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLEtBQUssRUFBRSxFQUFFO2FBQ1Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsRUFBRTthQUNWO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNEO2dCQUNFLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxHQUFHO2FBQ1g7U0FDRixDQUFDO1FBR0YsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBR0gsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxNQUFNO1FBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE1BQVc7UUFDckIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxPQUFlO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO1lBQ3JFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7OztZQTVFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsczRGQUE2Qzs7YUFFOUM7Ozs7OzZCQUVFLEtBQUs7c0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSzsyQkFDTCxNQUFNO3NDQUNOLE1BQU07NEJBQ04sTUFBTTsyQkFDTixNQUFNOzs7O0lBUlAsK0NBQWlDOztJQUNqQyx3Q0FBNkI7O0lBQzdCLDZDQUErQjs7SUFDL0IsOENBQWdDOztJQUNoQyxrREFBbUM7O0lBQ25DLDZDQUE0Qzs7SUFDNUMsd0RBQXVEOztJQUN2RCw4Q0FBNkM7O0lBQzdDLDZDQUE0Qzs7SUFFNUMsMENBaUJFOztJQUVGLDhDQUFzQjs7SUFDdEIsNkNBQXFCOztJQUNyQiw0Q0FBb0I7O0lBQ3BCLDBDQUFpQjs7SUFDakIsMkNBQW1COztJQUNuQiwrQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpaS1tb2JpbGUtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vYmlsZS1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb2JpbGUtZmlsdGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9iaWxlRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2hlY2tib3hDb2x1bW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvbHVtbnM6IEFycmF5PGFueT47XG4gIEBJbnB1dCgpIGxpbWl0T3B0aW9uczogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VhcmNoT3B0aW9uczogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNBbGxSb3dzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGxpbWl0Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFsbFJvd3NPbk1vYmlsZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VhcmNoQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNvbHVtblNvcnRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBsaW1pdE9wdHMgPSBbXG4gICAge1xuICAgICAgbGFiZWw6ICcxMCcsXG4gICAgICB2YWx1ZTogMTBcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnMjUnLFxuICAgICAgdmFsdWU6IDI1XG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJzUwJyxcbiAgICAgIHZhbHVlOiA1MFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICcxMDAnLFxuICAgICAgdmFsdWU6IDEwMFxuICAgIH1cbiAgXTtcblxuICBzZWxlY3RlZExpbWl0OiBudW1iZXI7XG4gIHRvb2dsZVNlYXJjaCA9IGZhbHNlO1xuICB0b2dnbGVMaW1pdCA9IGZhbHNlO1xuICBpc1NvcnRBc2MgPSB0cnVlO1xuICB0b2dnbGVTb3J0ID0gZmFsc2U7XG4gIHNlbGVjdGVkQ29sdW1uOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkTGltaXQgPSB0aGlzLmxpbWl0T3B0c1swXS52YWx1ZTtcbiAgfVxuXG4gIGVtaXRDb2x1bW5Tb3J0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWRDb2x1bW4uc29ydCA9IHRoaXMuaXNTb3J0QXNjID8gJ2FzYycgOiAnZGVzYyc7XG4gICAgdGhpcy5jb2x1bW5Tb3J0ZWQuZW1pdCh0aGlzLnNlbGVjdGVkQ29sdW1uKTtcbiAgfVxuXG4gIG9uQ29sdW1uU2VsZWN0KGNvbHVtbikge1xuICAgIHRoaXMuc2VsZWN0ZWRDb2x1bW4gPSBjb2x1bW47XG4gICAgdGhpcy5lbWl0Q29sdW1uU29ydCgpO1xuICB9XG5cbiAgb25MaW1pdENoYW5nZShsaW1pdDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZExpbWl0ID0gTnVtYmVyKGxpbWl0KTtcbiAgICB0aGlzLmxpbWl0Q2hhbmdlZC5lbWl0KE51bWJlcihsaW1pdCkpO1xuICB9XG5cbiAgb25Sb3dTZWxlY3QoJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmFsbFJvd3NPbk1vYmlsZVNlbGVjdGVkLmVtaXQoJGV2ZW50KTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKGtleXdvcmQ6IHN0cmluZykge1xuICAgIHRoaXMuc2VhcmNoQ2hhbmdlZC5lbWl0KGtleXdvcmQpO1xuICB9XG5cbiAgb25Tb3J0VHlwZUNoYW5nZSgpIHtcbiAgICB0aGlzLmlzU29ydEFzYyA9ICF0aGlzLmlzU29ydEFzYztcbiAgICBpZiAodGhpcy5zZWxlY3RlZENvbHVtbiAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc2VsZWN0ZWRDb2x1bW4gIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZW1pdENvbHVtblNvcnQoKTtcbiAgICB9XG4gIH1cblxufVxuIl19