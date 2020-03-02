/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/common/table-footer/table-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TablePageService } from '../../../../../services/table-page.service';
export class TableFooterComponent {
    /**
     * @param {?} _tablePageSvc
     */
    constructor(_tablePageSvc) {
        this._tablePageSvc = _tablePageSvc;
        this.pageChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setPageInfo();
    }
    /**
     * @return {?}
     */
    setPageInfo() {
        this._tablePageSvc.getTablePage().subscribe((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            this._page = page;
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectedPageChange($event) {
        this.pageChanged.emit($event);
    }
}
TableFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-table-footer',
                template: `
    <div class="table-footer" *ngIf="footerInfo && totalElements > 0">
      <span>Menampilkan {{startPage}} sampai {{endPage}} dari {{totalElements}} data</span>
    </div>
    <ng-container *ngIf="true">
      <uii-pagination
        [currentPage]="(_page.pageNumber + 1)"
        [dataPerPage]="_page.size"
        [amountOfData]="totalElements"
        (pageChanged)="selectedPageChange($event)">
      </uii-pagination>
    </ng-container>`,
                styles: [`
    .table-footer {
      font-size: 12px;
      margin: 20px 0;
    }`]
            }] }
];
/** @nocollapse */
TableFooterComponent.ctorParameters = () => [
    { type: TablePageService }
];
TableFooterComponent.propDecorators = {
    footerInfo: [{ type: Input }],
    footerOptions: [{ type: Input }],
    paginationOptions: [{ type: Input }],
    pageChanged: [{ type: Output }],
    totalElements: [{ type: Input }],
    startPage: [{ type: Input }],
    endPage: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS90YWJsZS9jb21tb24vdGFibGUtZm9vdGVyL3RhYmxlLWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBc0I5RSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBVS9CLFlBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQU56QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNWSxDQUFDOzs7O0lBRXhELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQWtCLEVBQUUsRUFBRTtZQUNqRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsTUFBVztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7b0JBV1E7eUJBQ1Q7Ozs7TUFJTDthQUNMOzs7O1lBckJRLGdCQUFnQjs7O3lCQXVCdEIsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsTUFBTTs0QkFDTixLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQU5OLDBDQUE2Qjs7SUFDN0IsNkNBQWdDOztJQUNoQyxpREFBb0M7O0lBQ3BDLDJDQUEyQzs7SUFDM0MsNkNBQStCOztJQUMvQix5Q0FBMkI7O0lBQzNCLHVDQUF5Qjs7SUFDekIscUNBQW9COzs7OztJQUVSLDZDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBpbFRhYmxlUGFnZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZGVscyc7XG5pbXBvcnQgeyBUYWJsZVBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2VydmljZXMvdGFibGUtcGFnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLXRhYmxlLWZvb3RlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLWZvb3RlclwiICpuZ0lmPVwiZm9vdGVySW5mbyAmJiB0b3RhbEVsZW1lbnRzID4gMFwiPlxuICAgICAgPHNwYW4+TWVuYW1waWxrYW4ge3tzdGFydFBhZ2V9fSBzYW1wYWkge3tlbmRQYWdlfX0gZGFyaSB7e3RvdGFsRWxlbWVudHN9fSBkYXRhPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0cnVlXCI+XG4gICAgICA8dWlpLXBhZ2luYXRpb25cbiAgICAgICAgW2N1cnJlbnRQYWdlXT1cIihfcGFnZS5wYWdlTnVtYmVyICsgMSlcIlxuICAgICAgICBbZGF0YVBlclBhZ2VdPVwiX3BhZ2Uuc2l6ZVwiXG4gICAgICAgIFthbW91bnRPZkRhdGFdPVwidG90YWxFbGVtZW50c1wiXG4gICAgICAgIChwYWdlQ2hhbmdlZCk9XCJzZWxlY3RlZFBhZ2VDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgPC91aWktcGFnaW5hdGlvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5gLFxuICBzdHlsZXM6IFtgXG4gICAgLnRhYmxlLWZvb3RlciB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBtYXJnaW46IDIwcHggMDtcbiAgICB9YF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb290ZXJJbmZvOiBib29sZWFuO1xuICBASW5wdXQoKSBmb290ZXJPcHRpb25zOiBib29sZWFuO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uT3B0aW9uczogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSB0b3RhbEVsZW1lbnRzOiBudW1iZXI7XG4gIEBJbnB1dCgpIHN0YXJ0UGFnZTogbnVtYmVyO1xuICBASW5wdXQoKSBlbmRQYWdlOiBudW1iZXI7XG4gIF9wYWdlOiBQaWxUYWJsZVBhZ2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFibGVQYWdlU3ZjOiBUYWJsZVBhZ2VTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFBhZ2VJbmZvKCk7XG4gIH1cblxuICBzZXRQYWdlSW5mbygpIHtcbiAgICB0aGlzLl90YWJsZVBhZ2VTdmMuZ2V0VGFibGVQYWdlKCkuc3Vic2NyaWJlKChwYWdlOiBQaWxUYWJsZVBhZ2UpID0+IHtcbiAgICAgIHRoaXMuX3BhZ2UgPSBwYWdlO1xuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0ZWRQYWdlQ2hhbmdlKCRldmVudDogYW55KSB7XG4gICAgdGhpcy5wYWdlQ2hhbmdlZC5lbWl0KCRldmVudCk7XG4gIH1cblxufVxuIl19