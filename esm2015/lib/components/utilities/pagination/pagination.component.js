/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/pagination/pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class PaginationComponent {
    constructor() {
        this.paginationALign = 'center';
        this.pageChanged = new EventEmitter();
        this.currentPageChange = new EventEmitter();
        this.selectedPage = 1;
        this.isInitilized = false;
        this._dataPerPage = 10;
    }
    /**
     * @return {?}
     */
    get dataPerPage() {
        return this._dataPerPage;
    }
    /**
     * @param {?} total
     * @return {?}
     */
    set dataPerPage(total) {
        this._dataPerPage = total;
        if (this.isDefined) {
            this.pageTotal = this.countPageTotal();
        }
    }
    /**
     * @return {?}
     */
    get amountOfData() {
        return this._amountOfData;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set amountOfData(data) {
        this._amountOfData = data;
        if (this.isDefined) {
            this.pageTotal = this.countPageTotal();
        }
    }
    /**
     * @return {?}
     */
    get pageTotal() {
        return this._pageTotal;
    }
    /**
     * @param {?} total
     * @return {?}
     */
    set pageTotal(total) {
        this._pageTotal = total;
        if (this.isInitilized) {
            this.doSelectPage(this.selectedPage);
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    set currentPage(page) {
        if (page !== undefined) {
            this.doSelectPage(page);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.pages = this.renderPage(1, this._pageTotal);
        this.isInitilized = true;
    }
    /**
     * @return {?}
     */
    countPageTotal() {
        return Math.ceil(this.amountOfData / this.dataPerPage);
    }
    /**
     * @param {?} currentPage
     * @param {?} pageTotal
     * @return {?}
     */
    renderPage(currentPage, pageTotal) {
        /** @type {?} */
        let startPage = 1;
        /** @type {?} */
        let endPage = pageTotal;
        if (pageTotal > 5) {
            startPage = Math.max(currentPage - Math.floor(5 / 2), 1);
            endPage = startPage + 5 - 1;
        }
        if (endPage > pageTotal) {
            endPage = pageTotal;
            startPage = endPage - 5 + 1;
        }
        /** @type {?} */
        const _pages = [];
        for (let num = startPage; num <= endPage; num++) {
            /** @type {?} */
            const page = this.makePage(num.toString(), num, num === currentPage);
            _pages.push(page);
        }
        return _pages;
    }
    /**
     * @param {?} label
     * @param {?} value
     * @param {?} active
     * @return {?}
     */
    makePage(label, value, active) {
        return { label, value, active };
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    onPageSelect(pageNumber) {
        this.doSelectPage(pageNumber);
        this.pageChanged.emit({ page: this.selectedPage - 1, dataPerPage: this._dataPerPage });
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    doSelectPage(pageNumber) {
        this.selectedPage = pageNumber;
        this.pages = this.renderPage(this.selectedPage, this.pageTotal);
        this.currentPageChange.emit(this.selectedPage);
    }
    /**
     * @return {?}
     */
    isDefined() {
        return this.amountOfData !== undefined && this.dataPerPage !== undefined;
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-pagination',
                template: "<div *ngIf=\"amountOfData > dataPerPage\" class=\"ugw-pagination-container\" [ngClass]=\"paginationALign\">\n  <ul class=\"ugw-pagination-list\">\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === 1\" (click)=\"onPageSelect(1)\">\n      <span class=\"nav-icon ugw-page-first fa fa-angle-double-left\"></span>\n    </li>\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === 1\" (click)=\"onPageSelect(selectedPage - 1)\">\n      <span class=\"nav-icon ugw-page-prev fa fa-angle-left\"></span>\n    </li>\n    <ng-container *ngFor=\"let page of pages; let i = index\">\n      <li class=\"page-box\" [class.active]=\"page.active\" (click)=\"onPageSelect(page.value)\">\n        <span>{{page.label}}</span>\n      </li>\n    </ng-container>\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === pageTotal\" (click)=\"onPageSelect(selectedPage + 1)\">\n      <span class=\"nav-icon ugw-page-next fa fa-angle-right\"></span>\n    </li>\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === pageTotal\" (click)=\"onPageSelect(pageTotal)\">\n      <span class=\"nav-icon ugw-page-last fa fa-angle-double-right\"></span>\n    </li>\n  </ul>\n</div>\n",
                styles: [".ugw-pagination-container{display:flex}.ugw-pagination-container.left{justify-content:flex-start}.ugw-pagination-container.center{justify-content:center}.ugw-pagination-container.right{justify-content:flex-end}.ugw-pagination-container ul.ugw-pagination-list{display:flex;list-style:none;padding:0}.ugw-pagination-container li.page-box{cursor:pointer;color:#093697;display:flex;align-items:center;justify-content:center;font-size:16px;min-width:40px;height:40px;border-width:1px 1px 1px 0;border-color:#ddd;border-style:solid}.ugw-pagination-container li.page-box:first-child{border-left:1px solid #ddd}.ugw-pagination-container li.page-box:last-child{border-right:1px solid #ddd}.ugw-pagination-container li.page-box.active,.ugw-pagination-container li.page-box:hover{background:#093697;color:#fff;border-color:#093697}.ugw-pagination-container li.page-box.disabled-box{pointer-events:none}.ugw-pagination-container li.page-box.disabled-box span{opacity:.4}.ugw-pagination-container .nav-icon{padding:0 7px;font-size:15px}"]
            }] }
];
/** @nocollapse */
PaginationComponent.ctorParameters = () => [];
PaginationComponent.propDecorators = {
    dataPerPage: [{ type: Input }],
    amountOfData: [{ type: Input }],
    currentPage: [{ type: Input }],
    paginationALign: [{ type: Input }],
    pageChanged: [{ type: Output }],
    currentPageChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PaginationComponent.prototype.paginationALign;
    /** @type {?} */
    PaginationComponent.prototype.pageChanged;
    /** @type {?} */
    PaginationComponent.prototype.currentPageChange;
    /** @type {?} */
    PaginationComponent.prototype._amountOfData;
    /** @type {?} */
    PaginationComponent.prototype._dataPerPage;
    /** @type {?} */
    PaginationComponent.prototype._pageTotal;
    /** @type {?} */
    PaginationComponent.prototype.selectedPage;
    /** @type {?} */
    PaginationComponent.prototype.isInitilized;
    /** @type {?} */
    PaginationComponent.prototype.pages;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3V0aWxpdGllcy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVEvRSxNQUFNLE9BQU8sbUJBQW1CO0lBZ0Q5QjtRQVhTLG9CQUFlLEdBQUcsUUFBUSxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFDakQsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUt6RCxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUluQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBakRELElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7OztJQUNELElBQUksV0FBVyxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7OztJQUNELElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7OztJQUNELElBQUksWUFBWSxDQUFDLElBQVk7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFB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SSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLENBQUM7SUFDM0UsQ0FBQzs7O1lBdEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiw2ckNBQTBDOzthQUUzQzs7Ozs7MEJBRUUsS0FBSzsyQkFVTCxLQUFLOzBCQW1CTCxLQUFLOzhCQU9MLEtBQUs7MEJBQ0wsTUFBTTtnQ0FDTixNQUFNOzs7O0lBRlAsOENBQW9DOztJQUNwQywwQ0FBMkQ7O0lBQzNELGdEQUF5RDs7SUFFekQsNENBQXNCOztJQUN0QiwyQ0FBcUI7O0lBQ3JCLHlDQUFtQjs7SUFDbkIsMkNBQWlCOztJQUNqQiwyQ0FBcUI7O0lBQ3JCLG9DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VNb2RlbCwgUGFnZUV2ZW50TW9kZWwgfSBmcm9tICcuLy4uLy4uLy4uL21vZGVscy9wYWdpbmF0aW9uLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2luYXRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZ2V0IGRhdGFQZXJQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFQZXJQYWdlO1xuICB9XG4gIHNldCBkYXRhUGVyUGFnZSh0b3RhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGF0YVBlclBhZ2UgPSB0b3RhbDtcbiAgICBpZiAodGhpcy5pc0RlZmluZWQpIHtcbiAgICAgIHRoaXMucGFnZVRvdGFsID0gdGhpcy5jb3VudFBhZ2VUb3RhbCgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBnZXQgYW1vdW50T2ZEYXRhKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Ftb3VudE9mRGF0YTtcbiAgfVxuICBzZXQgYW1vdW50T2ZEYXRhKGRhdGE6IG51bWJlcikge1xuICAgIHRoaXMuX2Ftb3VudE9mRGF0YSA9IGRhdGE7XG4gICAgaWYgKHRoaXMuaXNEZWZpbmVkKSB7XG4gICAgICB0aGlzLnBhZ2VUb3RhbCA9IHRoaXMuY291bnRQYWdlVG90YWwoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHBhZ2VUb3RhbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlVG90YWw7XG4gIH1cbiAgc2V0IHBhZ2VUb3RhbCh0b3RhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZVRvdGFsID0gdG90YWw7XG4gICAgaWYgKHRoaXMuaXNJbml0aWxpemVkKSB7XG4gICAgICB0aGlzLmRvU2VsZWN0UGFnZSh0aGlzLnNlbGVjdGVkUGFnZSk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjdXJyZW50UGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAocGFnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRvU2VsZWN0UGFnZShwYWdlKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKSBwYWdpbmF0aW9uQUxpZ24gPSAnY2VudGVyJztcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlRXZlbnRNb2RlbD4oKTtcbiAgQE91dHB1dCgpIGN1cnJlbnRQYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgX2Ftb3VudE9mRGF0YTogbnVtYmVyO1xuICBfZGF0YVBlclBhZ2U6IG51bWJlcjtcbiAgX3BhZ2VUb3RhbDogbnVtYmVyO1xuICBzZWxlY3RlZFBhZ2UgPSAxO1xuICBpc0luaXRpbGl6ZWQgPSBmYWxzZTtcbiAgcGFnZXM6IFBhZ2VNb2RlbFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2RhdGFQZXJQYWdlID0gMTA7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5yZW5kZXJQYWdlKDEsIHRoaXMuX3BhZ2VUb3RhbCk7XG4gICAgdGhpcy5pc0luaXRpbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgY291bnRQYWdlVG90YWwoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmFtb3VudE9mRGF0YSAvIHRoaXMuZGF0YVBlclBhZ2UpO1xuICB9XG5cbiAgcmVuZGVyUGFnZShjdXJyZW50UGFnZTogbnVtYmVyLCBwYWdlVG90YWw6IG51bWJlcikge1xuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xuICAgIGxldCBlbmRQYWdlID0gcGFnZVRvdGFsO1xuICAgIGlmIChwYWdlVG90YWwgPiA1KSB7XG4gICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IoNSAvIDIpLCAxKTtcbiAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyA1IC0gMTtcbiAgICB9XG4gICAgaWYgKGVuZFBhZ2UgPiBwYWdlVG90YWwpIHtcbiAgICAgIGVuZFBhZ2UgPSBwYWdlVG90YWw7XG4gICAgICBzdGFydFBhZ2UgPSBlbmRQYWdlIC0gNSArIDE7XG4gICAgfVxuICAgIGNvbnN0IF9wYWdlcyA9IFtdO1xuICAgIGZvciAobGV0IG51bSA9IHN0YXJ0UGFnZTsgbnVtIDw9IGVuZFBhZ2U7IG51bSsrKSB7XG4gICAgICBjb25zdCBwYWdlID0gdGhpcy5tYWtlUGFnZShudW0udG9TdHJpbmcoKSwgbnVtLCBudW0gPT09IGN1cnJlbnRQYWdlKTtcbiAgICAgIF9wYWdlcy5wdXNoKHBhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gX3BhZ2VzO1xuICB9XG5cbiAgbWFrZVBhZ2UobGFiZWw6IHN0cmluZywgdmFsdWU6IG51bWJlciwgYWN0aXZlOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHtsYWJlbCwgdmFsdWUsIGFjdGl2ZX07XG4gIH1cblxuICBvblBhZ2VTZWxlY3QocGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgdGhpcy5kb1NlbGVjdFBhZ2UocGFnZU51bWJlcik7XG4gICAgdGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHtwYWdlOiB0aGlzLnNlbGVjdGVkUGFnZSAtIDEsIGRhdGFQZXJQYWdlOiB0aGlzLl9kYXRhUGVyUGFnZX0pO1xuICB9XG5cbiAgZG9TZWxlY3RQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRQYWdlID0gcGFnZU51bWJlcjtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5yZW5kZXJQYWdlKHRoaXMuc2VsZWN0ZWRQYWdlLCB0aGlzLnBhZ2VUb3RhbCk7XG4gICAgdGhpcy5jdXJyZW50UGFnZUNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRQYWdlKTtcbiAgfVxuXG4gIGlzRGVmaW5lZCgpIHtcbiAgICByZXR1cm4gdGhpcy5hbW91bnRPZkRhdGEgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmRhdGFQZXJQYWdlICE9PSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==