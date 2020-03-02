/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/pagination/pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.paginationALign = 'center';
        this.pageChanged = new EventEmitter();
        this.currentPageChange = new EventEmitter();
        this.selectedPage = 1;
        this.isInitilized = false;
        this._dataPerPage = 10;
    }
    Object.defineProperty(PaginationComponent.prototype, "dataPerPage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataPerPage;
        },
        set: /**
         * @param {?} total
         * @return {?}
         */
        function (total) {
            this._dataPerPage = total;
            if (this.isDefined) {
                this.pageTotal = this.countPageTotal();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "amountOfData", {
        get: /**
         * @return {?}
         */
        function () {
            return this._amountOfData;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._amountOfData = data;
            if (this.isDefined) {
                this.pageTotal = this.countPageTotal();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "pageTotal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageTotal;
        },
        set: /**
         * @param {?} total
         * @return {?}
         */
        function (total) {
            this._pageTotal = total;
            if (this.isInitilized) {
                this.doSelectPage(this.selectedPage);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "currentPage", {
        set: /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            if (page !== undefined) {
                this.doSelectPage(page);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.pages = this.renderPage(1, this._pageTotal);
        this.isInitilized = true;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.countPageTotal = /**
     * @return {?}
     */
    function () {
        return Math.ceil(this.amountOfData / this.dataPerPage);
    };
    /**
     * @param {?} currentPage
     * @param {?} pageTotal
     * @return {?}
     */
    PaginationComponent.prototype.renderPage = /**
     * @param {?} currentPage
     * @param {?} pageTotal
     * @return {?}
     */
    function (currentPage, pageTotal) {
        /** @type {?} */
        var startPage = 1;
        /** @type {?} */
        var endPage = pageTotal;
        if (pageTotal > 5) {
            startPage = Math.max(currentPage - Math.floor(5 / 2), 1);
            endPage = startPage + 5 - 1;
        }
        if (endPage > pageTotal) {
            endPage = pageTotal;
            startPage = endPage - 5 + 1;
        }
        /** @type {?} */
        var _pages = [];
        for (var num = startPage; num <= endPage; num++) {
            /** @type {?} */
            var page = this.makePage(num.toString(), num, num === currentPage);
            _pages.push(page);
        }
        return _pages;
    };
    /**
     * @param {?} label
     * @param {?} value
     * @param {?} active
     * @return {?}
     */
    PaginationComponent.prototype.makePage = /**
     * @param {?} label
     * @param {?} value
     * @param {?} active
     * @return {?}
     */
    function (label, value, active) {
        return { label: label, value: value, active: active };
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    PaginationComponent.prototype.onPageSelect = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.doSelectPage(pageNumber);
        this.pageChanged.emit({ page: this.selectedPage - 1, dataPerPage: this._dataPerPage });
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    PaginationComponent.prototype.doSelectPage = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this.selectedPage = pageNumber;
        this.pages = this.renderPage(this.selectedPage, this.pageTotal);
        this.currentPageChange.emit(this.selectedPage);
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.isDefined = /**
     * @return {?}
     */
    function () {
        return this.amountOfData !== undefined && this.dataPerPage !== undefined;
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-pagination',
                    template: "<div *ngIf=\"amountOfData > dataPerPage\" class=\"ugw-pagination-container\" [ngClass]=\"paginationALign\">\n  <ul class=\"ugw-pagination-list\">\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === 1\" (click)=\"onPageSelect(1)\">\n      <span class=\"nav-icon ugw-page-first fa fa-angle-double-left\"></span>\n    </li>\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === 1\" (click)=\"onPageSelect(selectedPage - 1)\">\n      <span class=\"nav-icon ugw-page-prev fa fa-angle-left\"></span>\n    </li>\n    <ng-container *ngFor=\"let page of pages; let i = index\">\n      <li class=\"page-box\" [class.active]=\"page.active\" (click)=\"onPageSelect(page.value)\">\n        <span>{{page.label}}</span>\n      </li>\n    </ng-container>\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === pageTotal\" (click)=\"onPageSelect(selectedPage + 1)\">\n      <span class=\"nav-icon ugw-page-next fa fa-angle-right\"></span>\n    </li>\n    <li class=\"page-box\" [class.disabled-box]=\"selectedPage === pageTotal\" (click)=\"onPageSelect(pageTotal)\">\n      <span class=\"nav-icon ugw-page-last fa fa-angle-double-right\"></span>\n    </li>\n  </ul>\n</div>\n",
                    styles: [".ugw-pagination-container{display:flex}.ugw-pagination-container.left{justify-content:flex-start}.ugw-pagination-container.center{justify-content:center}.ugw-pagination-container.right{justify-content:flex-end}.ugw-pagination-container ul.ugw-pagination-list{display:flex;list-style:none;padding:0}.ugw-pagination-container li.page-box{cursor:pointer;color:#093697;display:flex;align-items:center;justify-content:center;font-size:16px;min-width:40px;height:40px;border-width:1px 1px 1px 0;border-color:#ddd;border-style:solid}.ugw-pagination-container li.page-box:first-child{border-left:1px solid #ddd}.ugw-pagination-container li.page-box:last-child{border-right:1px solid #ddd}.ugw-pagination-container li.page-box.active,.ugw-pagination-container li.page-box:hover{background:#093697;color:#fff;border-color:#093697}.ugw-pagination-container li.page-box.disabled-box{pointer-events:none}.ugw-pagination-container li.page-box.disabled-box span{opacity:.4}.ugw-pagination-container .nav-icon{padding:0 7px;font-size:15px}"]
                }] }
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return []; };
    PaginationComponent.propDecorators = {
        dataPerPage: [{ type: Input }],
        amountOfData: [{ type: Input }],
        currentPage: [{ type: Input }],
        paginationALign: [{ type: Input }],
        pageChanged: [{ type: Output }],
        currentPageChange: [{ type: Output }]
    };
    return PaginationComponent;
}());
export { PaginationComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3V0aWxpdGllcy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRTtJQXFERTtRQVhTLG9CQUFlLEdBQUcsUUFBUSxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFDakQsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUt6RCxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUluQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBakRELHNCQUNJLDRDQUFXOzs7O1FBRGY7WUFFRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7Ozs7UUFDRCxVQUFnQixLQUFhO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDeEM7UUFDSCxDQUFDOzs7T0FOQTtJQU9ELHNCQUNJLDZDQUFZOzs7O1FBRGhCO1lBRUUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBQ0QsVUFBaUIsSUFBWTtZQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hD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QyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCx1Q0FBUzs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxDQUFDO0lBQzNFLENBQUM7O2dCQXRHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsNnJDQUEwQzs7aUJBRTNDOzs7Ozs4QkFFRSxLQUFLOytCQVVMLEtBQUs7OEJBbUJMLEtBQUs7a0NBT0wsS0FBSzs4QkFDTCxNQUFNO29DQUNOLE1BQU07O0lBMkRULDBCQUFDO0NBQUEsQUF2R0QsSUF1R0M7U0FsR1ksbUJBQW1COzs7SUFxQzlCLDhDQUFvQzs7SUFDcEMsMENBQTJEOztJQUMzRCxnREFBeUQ7O0lBRXpELDRDQUFzQjs7SUFDdEIsMkNBQXFCOztJQUNyQix5Q0FBbUI7O0lBQ25CLDJDQUFpQjs7SUFDakIsMkNBQXFCOztJQUNyQixvQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlTW9kZWwsIFBhZ2VFdmVudE1vZGVsIH0gZnJvbSAnLi8uLi8uLi8uLi9tb2RlbHMvcGFnaW5hdGlvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpaS1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGdldCBkYXRhUGVyUGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kYXRhUGVyUGFnZTtcbiAgfVxuICBzZXQgZGF0YVBlclBhZ2UodG90YWw6IG51bWJlcikge1xuICAgIHRoaXMuX2RhdGFQZXJQYWdlID0gdG90YWw7XG4gICAgaWYgKHRoaXMuaXNEZWZpbmVkKSB7XG4gICAgICB0aGlzLnBhZ2VUb3RhbCA9IHRoaXMuY291bnRQYWdlVG90YWwoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGFtb3VudE9mRGF0YSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9hbW91bnRPZkRhdGE7XG4gIH1cbiAgc2V0IGFtb3VudE9mRGF0YShkYXRhOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hbW91bnRPZkRhdGEgPSBkYXRhO1xuICAgIGlmICh0aGlzLmlzRGVmaW5lZCkge1xuICAgICAgdGhpcy5wYWdlVG90YWwgPSB0aGlzLmNvdW50UGFnZVRvdGFsKCk7XG4gICAgfVxuICB9XG4gIGdldCBwYWdlVG90YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVRvdGFsO1xuICB9XG4gIHNldCBwYWdlVG90YWwodG90YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VUb3RhbCA9IHRvdGFsO1xuICAgIGlmICh0aGlzLmlzSW5pdGlsaXplZCkge1xuICAgICAgdGhpcy5kb1NlbGVjdFBhZ2UodGhpcy5zZWxlY3RlZFBhZ2UpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY3VycmVudFBhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgaWYgKHBhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kb1NlbGVjdFBhZ2UocGFnZSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgcGFnaW5hdGlvbkFMaWduID0gJ2NlbnRlcic7XG4gIEBPdXRwdXQoKSBwYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZUV2ZW50TW9kZWw+KCk7XG4gIEBPdXRwdXQoKSBjdXJyZW50UGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIF9hbW91bnRPZkRhdGE6IG51bWJlcjtcbiAgX2RhdGFQZXJQYWdlOiBudW1iZXI7XG4gIF9wYWdlVG90YWw6IG51bWJlcjtcbiAgc2VsZWN0ZWRQYWdlID0gMTtcbiAgaXNJbml0aWxpemVkID0gZmFsc2U7XG4gIHBhZ2VzOiBQYWdlTW9kZWxbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9kYXRhUGVyUGFnZSA9IDEwO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMucmVuZGVyUGFnZSgxLCB0aGlzLl9wYWdlVG90YWwpO1xuICAgIHRoaXMuaXNJbml0aWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvdW50UGFnZVRvdGFsKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5hbW91bnRPZkRhdGEgLyB0aGlzLmRhdGFQZXJQYWdlKTtcbiAgfVxuXG4gIHJlbmRlclBhZ2UoY3VycmVudFBhZ2U6IG51bWJlciwgcGFnZVRvdGFsOiBudW1iZXIpIHtcbiAgICBsZXQgc3RhcnRQYWdlID0gMTtcbiAgICBsZXQgZW5kUGFnZSA9IHBhZ2VUb3RhbDtcbiAgICBpZiAocGFnZVRvdGFsID4gNSkge1xuICAgICAgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSBNYXRoLmZsb29yKDUgLyAyKSwgMSk7XG4gICAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgNSAtIDE7XG4gICAgfVxuICAgIGlmIChlbmRQYWdlID4gcGFnZVRvdGFsKSB7XG4gICAgICBlbmRQYWdlID0gcGFnZVRvdGFsO1xuICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIDUgKyAxO1xuICAgIH1cbiAgICBjb25zdCBfcGFnZXMgPSBbXTtcbiAgICBmb3IgKGxldCBudW0gPSBzdGFydFBhZ2U7IG51bSA8PSBlbmRQYWdlOyBudW0rKykge1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMubWFrZVBhZ2UobnVtLnRvU3RyaW5nKCksIG51bSwgbnVtID09PSBjdXJyZW50UGFnZSk7XG4gICAgICBfcGFnZXMucHVzaChwYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIF9wYWdlcztcbiAgfVxuXG4gIG1ha2VQYWdlKGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIGFjdGl2ZTogYm9vbGVhbikge1xuICAgIHJldHVybiB7bGFiZWwsIHZhbHVlLCBhY3RpdmV9O1xuICB9XG5cbiAgb25QYWdlU2VsZWN0KHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIHRoaXMuZG9TZWxlY3RQYWdlKHBhZ2VOdW1iZXIpO1xuICAgIHRoaXMucGFnZUNoYW5nZWQuZW1pdCh7cGFnZTogdGhpcy5zZWxlY3RlZFBhZ2UgLSAxLCBkYXRhUGVyUGFnZTogdGhpcy5fZGF0YVBlclBhZ2V9KTtcbiAgfVxuXG4gIGRvU2VsZWN0UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkUGFnZSA9IHBhZ2VOdW1iZXI7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMucmVuZGVyUGFnZSh0aGlzLnNlbGVjdGVkUGFnZSwgdGhpcy5wYWdlVG90YWwpO1xuICAgIHRoaXMuY3VycmVudFBhZ2VDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkUGFnZSk7XG4gIH1cblxuICBpc0RlZmluZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1vdW50T2ZEYXRhICE9PSB1bmRlZmluZWQgJiYgdGhpcy5kYXRhUGVyUGFnZSAhPT0gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=