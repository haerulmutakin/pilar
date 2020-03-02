/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/common/table-footer/table-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TablePageService } from '../../../../../services/table-page.service';
var TableFooterComponent = /** @class */ (function () {
    function TableFooterComponent(_tablePageSvc) {
        this._tablePageSvc = _tablePageSvc;
        this.pageChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TableFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setPageInfo();
    };
    /**
     * @return {?}
     */
    TableFooterComponent.prototype.setPageInfo = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._tablePageSvc.getTablePage().subscribe((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            _this._page = page;
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TableFooterComponent.prototype.selectedPageChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.pageChanged.emit($event);
    };
    TableFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-table-footer',
                    template: "\n    <div class=\"table-footer\" *ngIf=\"footerInfo && totalElements > 0\">\n      <span>Menampilkan {{startPage}} sampai {{endPage}} dari {{totalElements}} data</span>\n    </div>\n    <ng-container *ngIf=\"true\">\n      <uii-pagination\n        [currentPage]=\"(_page.pageNumber + 1)\"\n        [dataPerPage]=\"_page.size\"\n        [amountOfData]=\"totalElements\"\n        (pageChanged)=\"selectedPageChange($event)\">\n      </uii-pagination>\n    </ng-container>",
                    styles: ["\n    .table-footer {\n      font-size: 12px;\n      margin: 20px 0;\n    }"]
                }] }
    ];
    /** @nocollapse */
    TableFooterComponent.ctorParameters = function () { return [
        { type: TablePageService }
    ]; };
    TableFooterComponent.propDecorators = {
        footerInfo: [{ type: Input }],
        footerOptions: [{ type: Input }],
        paginationOptions: [{ type: Input }],
        pageChanged: [{ type: Output }],
        totalElements: [{ type: Input }],
        startPage: [{ type: Input }],
        endPage: [{ type: Input }]
    };
    return TableFooterComponent;
}());
export { TableFooterComponent };
if (false) {
    /** @type {?} */
    TableFooterComponent.prototype.footerInfo;
    /** @type {?} */
    TableFooterComponent.prototype.footerOptions;
    /** @type {?} */
    TableFooterComponent.prototype.paginationOptions;
    /** @type {?} */
    TableFooterComponent.prototype.pageChanged;
    /** @type {?} */
    TableFooterComponent.prototype.totalElements;
    /** @type {?} */
    TableFooterComponent.prototype.startPage;
    /** @type {?} */
    TableFooterComponent.prototype.endPage;
    /** @type {?} */
    TableFooterComponent.prototype._page;
    /**
     * @type {?}
     * @private
     */
    TableFooterComponent.prototype._tablePageSvc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS90YWJsZS9jb21tb24vdGFibGUtZm9vdGVyL3RhYmxlLWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTlFO0lBOEJFLDhCQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFOekMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTVksQ0FBQzs7OztJQUV4RCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFrQjtZQUM3RCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsaURBQWtCOzs7O0lBQWxCLFVBQW1CLE1BQVc7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBNUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsd2RBV1E7NkJBQ1QsNkVBSUw7aUJBQ0w7Ozs7Z0JBckJRLGdCQUFnQjs7OzZCQXVCdEIsS0FBSztnQ0FDTCxLQUFLO29DQUNMLEtBQUs7OEJBQ0wsTUFBTTtnQ0FDTixLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7SUFtQlIsMkJBQUM7Q0FBQSxBQTlDRCxJQThDQztTQTFCWSxvQkFBb0I7OztJQUMvQiwwQ0FBNkI7O0lBQzdCLDZDQUFnQzs7SUFDaEMsaURBQW9DOztJQUNwQywyQ0FBMkM7O0lBQzNDLDZDQUErQjs7SUFDL0IseUNBQTJCOztJQUMzQix1Q0FBeUI7O0lBQ3pCLHFDQUFvQjs7Ozs7SUFFUiw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQaWxUYWJsZVBhZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgVGFibGVQYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NlcnZpY2VzL3RhYmxlLXBhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpaS10YWJsZS1mb290ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1mb290ZXJcIiAqbmdJZj1cImZvb3RlckluZm8gJiYgdG90YWxFbGVtZW50cyA+IDBcIj5cbiAgICAgIDxzcGFuPk1lbmFtcGlsa2FuIHt7c3RhcnRQYWdlfX0gc2FtcGFpIHt7ZW5kUGFnZX19IGRhcmkge3t0b3RhbEVsZW1lbnRzfX0gZGF0YTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHJ1ZVwiPlxuICAgICAgPHVpaS1wYWdpbmF0aW9uXG4gICAgICAgIFtjdXJyZW50UGFnZV09XCIoX3BhZ2UucGFnZU51bWJlciArIDEpXCJcbiAgICAgICAgW2RhdGFQZXJQYWdlXT1cIl9wYWdlLnNpemVcIlxuICAgICAgICBbYW1vdW50T2ZEYXRhXT1cInRvdGFsRWxlbWVudHNcIlxuICAgICAgICAocGFnZUNoYW5nZWQpPVwic2VsZWN0ZWRQYWdlQ2hhbmdlKCRldmVudClcIj5cbiAgICAgIDwvdWlpLXBhZ2luYXRpb24+XG4gICAgPC9uZy1jb250YWluZXI+YCxcbiAgc3R5bGVzOiBbYFxuICAgIC50YWJsZS1mb290ZXIge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgfWBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZm9vdGVySW5mbzogYm9vbGVhbjtcbiAgQElucHV0KCkgZm9vdGVyT3B0aW9uczogYm9vbGVhbjtcbiAgQElucHV0KCkgcGFnaW5hdGlvbk9wdGlvbnM6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBwYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgdG90YWxFbGVtZW50czogbnVtYmVyO1xuICBASW5wdXQoKSBzdGFydFBhZ2U6IG51bWJlcjtcbiAgQElucHV0KCkgZW5kUGFnZTogbnVtYmVyO1xuICBfcGFnZTogUGlsVGFibGVQYWdlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RhYmxlUGFnZVN2YzogVGFibGVQYWdlU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRQYWdlSW5mbygpO1xuICB9XG5cbiAgc2V0UGFnZUluZm8oKSB7XG4gICAgdGhpcy5fdGFibGVQYWdlU3ZjLmdldFRhYmxlUGFnZSgpLnN1YnNjcmliZSgocGFnZTogUGlsVGFibGVQYWdlKSA9PiB7XG4gICAgICB0aGlzLl9wYWdlID0gcGFnZTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdGVkUGFnZUNoYW5nZSgkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMucGFnZUNoYW5nZWQuZW1pdCgkZXZlbnQpO1xuICB9XG5cbn1cbiJdfQ==