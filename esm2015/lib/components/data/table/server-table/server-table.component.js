/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/server-table/server-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PilTablePage } from '../../../../models';
import { TablePageService } from '../../../../services/table-page.service';
export class ServerTableComponent {
    /**
     * @param {?} _tablePageSvc
     */
    constructor(_tablePageSvc) {
        this._tablePageSvc = _tablePageSvc;
        this.editClicked = new EventEmitter();
        this.deleteClicked = new EventEmitter();
        this.detailClicked = new EventEmitter();
        this.inValidateClicked = new EventEmitter();
        this.pageChanged = new EventEmitter();
        this.printClicked = new EventEmitter();
        this.publishClicked = new EventEmitter();
        this.radioChanged = new EventEmitter();
        this.reloadClicked = new EventEmitter();
        this.selectedRows = new EventEmitter();
        this.switchChanged = new EventEmitter();
        this.validateClicked = new EventEmitter();
        this.verifyClicked = new EventEmitter();
        this.limitChanged = new EventEmitter();
        this.searchChanged = new EventEmitter();
        this.inputTextValueChange = new EventEmitter();
        this.inputRadioValueChange = new EventEmitter();
        this.page = new PilTablePage();
        this._isAllRowsSelected = false;
        this._columns = [];
        this._rows = [];
        this._rowsCollection = [];
        this._selectedRows = [];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set columns(data) {
        data.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            column.sort = '';
        }));
        this._columns = data;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set rows(data) {
        if (data) {
            this._rows = this.setDataNumber(data);
            this._rowsCollection = data;
            this._tablePageSvc.setTablePage(this.page);
        }
        this._selectedRows = [];
        this._isAllRowsSelected = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.page.size = 10;
        this.page.page = 0;
        this.onPageChange(this.page);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearInterval(this.sortTimerInterval);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    getEndPage(page) {
        /** @type {?} */
        let end = (page.pageNumber * page.size) + page.size;
        end = end > page.totalElements ? page.totalElements : end;
        return end;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    getStartPage(page) {
        return page.pageNumber * page.size + 1;
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    mapActions(prop) {
        /** @type {?} */
        const data = this._rowsCollection[prop.index];
        switch (prop.type) {
            case 'update':
                this.editClicked.emit(data);
                break;
            case 'delete':
                this.deleteClicked.emit(data);
                break;
            case 'detail':
                this.detailClicked.emit(data);
                break;
            case 'print':
                this.printClicked.emit(data);
                break;
            case 'reload':
                this.reloadClicked.emit(data);
                break;
            case 'verify':
                this.verifyClicked.emit(data);
                break;
            case 'validate':
                this.validateClicked.emit(data);
                break;
            case 'invalidate':
                this.inValidateClicked.emit(data);
                break;
            case 'publish':
                this.publishClicked.emit(data);
                break;
            case 'activate':
                this.switchChanged.emit({ value: prop.$event, data: data });
                break;
        }
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    onLimitChange(limit) {
        this.page.size = Number(limit);
        this.page.pageNumber = 0;
        this.limitChanged.emit(this.page);
    }
    /**
     * @param {?} rowIndex
     * @param {?} prop
     * @return {?}
     */
    onInputRadioChange(rowIndex, prop) {
        this._columns.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (item.type && item.type === 'input-radio') {
                this._rows[rowIndex][item.prop] = (item.prop === prop) ? 1 : 0;
            }
        }));
        this.inputRadioValueChange.emit(this._rows[rowIndex]);
    }
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    onInputTextChange(index, column) {
        this.inputTextValueChange.emit({
            index: index,
            column: column,
            data: this._rows[index]
        });
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageChange(page) {
        this.page.pageNumber = page.page;
        this.pageChanged.emit(this.page);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onRadioSelect(data) {
        this.reloadClicked.emit(data);
    }
    /**
     * @param {?} type
     * @param {?} $event
     * @param {?=} data
     * @return {?}
     */
    onRowSelect(type, $event, data) {
        if ($event.target.checked) {
            (type === 'single') ? this._selectedRows.push(data) : this._selectedRows = this._rowsCollection;
        }
        else {
            this._selectedRows = (type === 'single') ? this._selectedRows.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.number !== data.number)) : [];
        }
        this.selectedRows.emit(this._selectedRows);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onRowSelectMobile($event) {
        if ($event.target.checked) {
            this._isAllRowsSelected = true;
            this._selectedRows = this._rowsCollection;
        }
        else {
            this._isAllRowsSelected = false;
            this._selectedRows = [];
        }
        this.selectedRows.emit(this._selectedRows);
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    onSearchChange(keyword) {
        this.page.pageNumber = 0;
        this.page.keyword = keyword.toLowerCase();
        this.searchChanged.emit(this.page);
    }
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    setColumnSortDirection(column, index) {
        clearInterval(this.sortTimerInterval);
        this._columns.forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        (item, idx) => {
            if (idx !== index) {
                item.sort = '';
            }
        }));
        column.sort = (column.sort === 'asc') ? 'desc' : 'asc';
        this.sortTimerInterval = setTimeout((/**
         * @return {?}
         */
        () => {
            column.sort = '';
        }), 2000);
    }
    /**
     * @param {?} colleciton
     * @return {?}
     */
    setDataNumber(colleciton) {
        colleciton.forEach((/**
         * @param {?} element
         * @param {?} i
         * @return {?}
         */
        (element, i) => {
            element.hasAuth = this.setRowElementAuthStatus(element.auth);
            element.number = this.getStartPage(this.page) + i;
        }));
        return colleciton;
    }
    /**
     * @param {?} auth
     * @return {?}
     */
    setRowElementAuthStatus(auth) {
        if (auth) {
            /** @type {?} */
            const authValues = Object.keys(auth).map((/**
             * @param {?} key
             * @return {?}
             */
            key => auth[key]));
            return authValues.includes(true);
        }
        return false;
    }
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    sortTableColumn(column, index) {
        this.setColumnSortDirection(column, index);
        this._rows.sort(this.sortColumValue(column));
    }
    /**
     * @param {?} column
     * @return {?}
     */
    sortTableColumnMobile(column) {
        this._rows.sort(this.sortColumValue(column));
        column.sort = '';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    sortColumValue(data) {
        /** @type {?} */
        let sortOrder = 1;
        if (data.prop[0] === '-') {
            sortOrder = -1;
            data.prop = data.prop.substr(1);
        }
        return (/**
         * @param {?} currentValue
         * @param {?} nextValue
         * @return {?}
         */
        function (currentValue, nextValue) {
            /** @type {?} */
            let result;
            if (data.sort === 'asc') {
                result = (currentValue[data.prop] < nextValue[data.prop]) ? -1 : (currentValue[data.prop] > nextValue[data.prop]) ? 1 : 0;
            }
            else {
                result = (currentValue[data.prop] > nextValue[data.prop]) ? -1 : (currentValue[data.prop] < nextValue[data.prop]) ? 1 : 0;
            }
            return result * sortOrder;
        });
    }
}
ServerTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-server-table',
                template: "<uii-table-filter\n  [limitOptions]=\"limitOptions\"\n  [searchOptions]=\"searchOptions\"\n  (limitChanged)=\"onLimitChange($event)\"\n  (searchChanged)=\"onSearchChange($event)\">\n</uii-table-filter>\n<div class=\"gateway-table\">\n  <div class=\"gateway-table-header\">\n    <div class=\"header-cell cell-radio-checkbox\" *ngIf=\"checkboxColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"checkbox\" id=\"aba\" class=\"gateway-rcb-select\" [checked]=\"_isAllRowsSelected\" (change)=\"_isAllRowsSelected = !_isAllRowsSelected; onRowSelect('multiple', $event)\"/>\n        <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n      </div>\n    </div>\n    <div class=\"header-cell cell-radio-checkbox\" *ngIf=\"radioColumn\"></div>\n    <div *ngFor=\"let column of _columns; let idx = index;\" class=\"header-cell\" [class.cell-number]=\"column.prop === 'number'\">\n      <span\n        *ngIf=\"!column.hasOwnProperty('header-type')\"\n        class=\"cell order-able\"\n        (click)=\"sortTableColumn(column, idx)\"\n        [ngClass]=\"(column.sort === 'asc') ? 'icon-up' : column.sort === 'desc' ? 'icon-down' : ''\">{{column.name}}</span>\n        <span\n          *ngIf=\"column.hasOwnProperty('header-type') && column['header-type'] === 'html'\"\n          class=\"cell order-able\"\n          (click)=\"sortTableColumn(column, idx)\"\n          [ngClass]=\"(column.sort === 'asc') ? 'icon-up' : column.sort === 'desc' ? 'icon-down' : ''\" [innerHTML]=\"column.name\"></span>\n    </div>\n    <div *ngIf=\"actionColumn\" class=\"header-cell cell-action\">\n      <span>{{actionTitle}}</span>\n    </div>\n  </div>\n  <uii-mobile-filter\n    [checkboxColumn]=\"checkboxColumn\"\n    [columns]=\"_columns\"\n    [isAllRowsSelected]=\"_isAllRowsSelected\"\n    [limitOptions]=\"limitOptions\"\n    [searchOptions]=\"searchOptions\"\n    (limitChanged)=\"onLimitChange($event)\"\n    (searchChanged)=\"onSearchChange($event)\"\n    (allRowsOnMobileSelected)=\"onRowSelectMobile($event)\"\n    (columnSorted)=\"sortTableColumnMobile($event)\">\n  </uii-mobile-filter>\n  <div *ngFor=\"let item of _rows; let i = index\" class=\"row-container\">\n    <div class=\"cell-radio-checkbox-mobile\" *ngIf=\"checkboxColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"checkbox\" [checked]=\"_isAllRowsSelected\" (change)=\"onRowSelect('single', $event, item)\" class=\"gateway-rcb-select\" />\n        <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n      </div>\n    </div>\n    <div class=\"cell-radio-checkbox-mobile\" *ngIf=\"radioColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"radio\" name=\"mtable-radio-item\" [attr.id]=\"'mitem-'+ i\" [checked]=\"item.flag_aktif === '1'\" (change)=\"onRadioSelect(item)\" class=\"gateway-rcb-select\" />\n        <p class=\"gateway-rcb-label radio-label\"></p>\n      </div>\n    </div>\n    <div class=\"gateway-table-data\">\n      <div class=\"data-cell cell-radio-checkbox\" *ngIf=\"checkboxColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"checkbox\" [checked]=\"_isAllRowsSelected\" (change)=\"onRowSelect('single', $event, item)\" class=\"gateway-rcb-select\" />\n          <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n        </div>\n      </div>\n      <div class=\"data-cell cell-radio-checkbox\" *ngIf=\"radioColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"radio\" name=\"table-radio-item\" [attr.id]=\"'item-'+ i\" [checked]=\"item.flag_aktif === '1'\" (change)=\"onRadioSelect(item)\" class=\"gateway-rcb-select\" />\n          <p class=\"gateway-rcb-label radio-label\"></p>\n        </div>\n      </div>\n      <ng-container *ngFor=\"let column of _columns; let colIdx = index\">\n        <div class=\"data-cell\" [ngClass]=\"(actionColumn && item.hasAuth) ? 'inaction' : 'outaction'\" [class.hide-in-mobile]=\"column.hasOwnProperty('hide_in_mobile') && column.hide_in_mobile\">\n          <div class=\"mobile-view-header\">\n            <span *ngIf=\"!column.hasOwnProperty('header-type')\">{{column.name}}</span>\n            <span *ngIf=\"column.hasOwnProperty('header-type') && column['header-type'] === 'html'\" [innerHTML]=\"column.name\"></span>\n          </div>\n          <div class=\"table-small-content\">\n            <ng-container *ngIf=\"column.hasOwnProperty('type')\">\n              <span *ngIf=\"column.type === 'label'\" class=\"cell-label\" [ngClass]=\"item.class\">{{item[column.prop.toString()]}}</span>\n              <span *ngIf=\"column.type === 'html'\" class=\"cell-html\" [innerHTML]=\"item[column.prop.toString()]\"></span>\n              <span *ngIf=\"column.type === 'date' && !column.format\">{{item[column.prop.toString()] | date: 'dd MMMM y'}}</span>\n              <span *ngIf=\"column.type === 'input-text'\">\n                <input \n                  type=\"{{column.inputType}}\"\n                  maxlength=\"{{column.inputMaxLength}}\"\n                  class=\"table-input-text\" \n                  [class.uppercase]=\"column.textUppercase\"\n                  [class.lowercase]=\"column.textLowercase\"\n                  [(ngModel)]=\"item[column.prop.toString()]\" \n                  (change)=\"onInputTextChange(i, column.name)\">\n              </span>\n              <span *ngIf=\"column.type === 'input-radio'\">\n                <form>\n                  <div class=\"gateway-rcb\">\n                    <input type=\"radio\" \n                      [attr.name]=\"'radio-' + i\"\n                      [attr.id]=\"'radio-' + i + '-' + colIdx\"\n                      [checked]=\"item[column.prop] === 1\"\n                      (change)=\"onInputRadioChange(i, column.prop)\"\n                      class=\"gateway-rcb-select\" />\n                    <p class=\"gateway-rcb-label radio-label\"></p>\n                  </div>\n                </form>\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"!column.hasOwnProperty('type')\">\n              <span>{{item[column.prop.toString()]}}</span>\n            </ng-container>\n          </div>\n        </div>\n      </ng-container>\n      <div class=\"data-cell data-cell-action\" [ngClass]=\"(actionColumn && item.hasAuth) ? 'inaction' : 'outaction'\" *ngIf=\"actionColumn\">\n        <div class=\"mobile-view-header\"><span>{{actionTitle}}</span></div>\n        <div class=\"table-small-content\">\n          <span>\n            <uii-table-action\n              [index]=\"i\"\n              [item]=\"item\"\n              [auth]=\"item.auth\"\n              [actionInValidation]=\"actionInValidation\"\n              (emitAction)=\"mapActions($event)\">\n            </uii-table-action>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"gateway-empty-data\" *ngIf=\"_rowsCollection === undefined || _rowsCollection.length === 0\">\n  <span>Tidak ada data yang ditampilkan</span>\n</div>\n<uii-table-footer\n  [footerInfo]=\"footerInfo\"\n  [paginationOptions]=\"paginationOptions\"\n  [totalElements]=\"page.totalElements\"\n  [startPage]=\"getStartPage(page)\"\n  [endPage]=\"getEndPage(page)\"\n  (pageChanged)=\"onPageChange($event)\">\n</uii-table-footer>"
            }] }
];
/** @nocollapse */
ServerTableComponent.ctorParameters = () => [
    { type: TablePageService }
];
ServerTableComponent.propDecorators = {
    actionColumn: [{ type: Input }],
    actionTitle: [{ type: Input }],
    actionInValidation: [{ type: Input }],
    checkboxColumn: [{ type: Input }],
    footerInfo: [{ type: Input }],
    footerOptions: [{ type: Input }],
    limitOptions: [{ type: Input }],
    paginationOptions: [{ type: Input }],
    radioColumn: [{ type: Input }],
    searchOptions: [{ type: Input }],
    columns: [{ type: Input }],
    rows: [{ type: Input }],
    editClicked: [{ type: Output }],
    deleteClicked: [{ type: Output }],
    detailClicked: [{ type: Output }],
    inValidateClicked: [{ type: Output }],
    pageChanged: [{ type: Output }],
    printClicked: [{ type: Output }],
    publishClicked: [{ type: Output }],
    radioChanged: [{ type: Output }],
    reloadClicked: [{ type: Output }],
    selectedRows: [{ type: Output }],
    switchChanged: [{ type: Output }],
    validateClicked: [{ type: Output }],
    verifyClicked: [{ type: Output }],
    limitChanged: [{ type: Output }],
    searchChanged: [{ type: Output }],
    inputTextValueChange: [{ type: Output }],
    inputRadioValueChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ServerTableComponent.prototype.actionColumn;
    /** @type {?} */
    ServerTableComponent.prototype.actionTitle;
    /** @type {?} */
    ServerTableComponent.prototype.actionInValidation;
    /** @type {?} */
    ServerTableComponent.prototype.checkboxColumn;
    /** @type {?} */
    ServerTableComponent.prototype.footerInfo;
    /** @type {?} */
    ServerTableComponent.prototype.footerOptions;
    /** @type {?} */
    ServerTableComponent.prototype.limitOptions;
    /** @type {?} */
    ServerTableComponent.prototype.paginationOptions;
    /** @type {?} */
    ServerTableComponent.prototype.radioColumn;
    /** @type {?} */
    ServerTableComponent.prototype.searchOptions;
    /** @type {?} */
    ServerTableComponent.prototype.editClicked;
    /** @type {?} */
    ServerTableComponent.prototype.deleteClicked;
    /** @type {?} */
    ServerTableComponent.prototype.detailClicked;
    /** @type {?} */
    ServerTableComponent.prototype.inValidateClicked;
    /** @type {?} */
    ServerTableComponent.prototype.pageChanged;
    /** @type {?} */
    ServerTableComponent.prototype.printClicked;
    /** @type {?} */
    ServerTableComponent.prototype.publishClicked;
    /** @type {?} */
    ServerTableComponent.prototype.radioChanged;
    /** @type {?} */
    ServerTableComponent.prototype.reloadClicked;
    /** @type {?} */
    ServerTableComponent.prototype.selectedRows;
    /** @type {?} */
    ServerTableComponent.prototype.switchChanged;
    /** @type {?} */
    ServerTableComponent.prototype.validateClicked;
    /** @type {?} */
    ServerTableComponent.prototype.verifyClicked;
    /** @type {?} */
    ServerTableComponent.prototype.limitChanged;
    /** @type {?} */
    ServerTableComponent.prototype.searchChanged;
    /** @type {?} */
    ServerTableComponent.prototype.inputTextValueChange;
    /** @type {?} */
    ServerTableComponent.prototype.inputRadioValueChange;
    /** @type {?} */
    ServerTableComponent.prototype.page;
    /** @type {?} */
    ServerTableComponent.prototype._isAllRowsSelected;
    /** @type {?} */
    ServerTableComponent.prototype.sortTimerInterval;
    /** @type {?} */
    ServerTableComponent.prototype._columns;
    /** @type {?} */
    ServerTableComponent.prototype._rows;
    /** @type {?} */
    ServerTableComponent.prototype._rowsCollection;
    /** @type {?} */
    ServerTableComponent.prototype._selectedRows;
    /**
     * @type {?}
     * @private
     */
    ServerTableComponent.prototype._tablePageSvc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS90YWJsZS9zZXJ2ZXItdGFibGUvc2VydmVyLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQU0zRSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBdUQvQixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUExQnpDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLHNCQUFpQixHQUFJLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFD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OztJQUMzQyw0Q0FBNEM7O0lBQzVDLDhDQUE4Qzs7SUFDOUMsNENBQTRDOztJQUM1Qyw2Q0FBNkM7O0lBQzdDLDRDQUE0Qzs7SUFDNUMsNkNBQTZDOztJQUM3QywrQ0FBK0M7O0lBQy9DLDZDQUE2Qzs7SUFDN0MsNENBQTRDOztJQUM1Qyw2Q0FBNkM7O0lBQzdDLG9EQUFvRDs7SUFDcEQscURBQXFEOztJQUVyRCxvQ0FBMEI7O0lBQzFCLGtEQUEyQjs7SUFDM0IsaURBQXVCOztJQUN2Qix3Q0FBMEI7O0lBQzFCLHFDQUF1Qjs7SUFDdkIsK0NBQWlDOztJQUNqQyw2Q0FBK0I7Ozs7O0lBRW5CLDZDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGlsVGFibGVQYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IFRhYmxlUGFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy90YWJsZS1wYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWktc2VydmVyLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlcnZlci10YWJsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2VydmVyVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGFjdGlvbkNvbHVtbjogYm9vbGVhbjtcbiAgQElucHV0KCkgYWN0aW9uVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgYWN0aW9uSW5WYWxpZGF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBjaGVja2JveENvbHVtbjogYm9vbGVhbjtcbiAgQElucHV0KCkgZm9vdGVySW5mbzogYm9vbGVhbjtcbiAgQElucHV0KCkgZm9vdGVyT3B0aW9uczogYm9vbGVhbjtcbiAgQElucHV0KCkgbGltaXRPcHRpb25zOiBib29sZWFuO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uT3B0aW9uczogYm9vbGVhbjtcbiAgQElucHV0KCkgcmFkaW9Db2x1bW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlYXJjaE9wdGlvbnM6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCBjb2x1bW5zKGRhdGE6IGFueSkge1xuICAgIGRhdGEuZm9yRWFjaCgoY29sdW1uOiBhbnkpID0+IHtcbiAgICAgIGNvbHVtbi5zb3J0ID0gJyc7XG4gICAgfSk7XG4gICAgdGhpcy5fY29sdW1ucyA9IGRhdGE7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHJvd3MoZGF0YTogYW55KSB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuX3Jvd3MgPSB0aGlzLnNldERhdGFOdW1iZXIoZGF0YSk7XG4gICAgICB0aGlzLl9yb3dzQ29sbGVjdGlvbiA9IGRhdGE7XG4gICAgICB0aGlzLl90YWJsZVBhZ2VTdmMuc2V0VGFibGVQYWdlKHRoaXMucGFnZSk7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkUm93cyA9IFtdO1xuICAgIHRoaXMuX2lzQWxsUm93c1NlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZWxldGVDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGV0YWlsQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGluVmFsaWRhdGVDbGlja2VkID0gIG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHJpbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGlzaENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByYWRpb0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWxvYWRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRSb3dzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc3dpdGNoQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHZhbGlkYXRlQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHZlcmlmeUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsaW1pdENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWFyY2hDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaW5wdXRUZXh0VmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBpbnB1dFJhZGlvVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcGFnZSA9IG5ldyBQaWxUYWJsZVBhZ2UoKTtcbiAgX2lzQWxsUm93c1NlbGVjdGVkID0gZmFsc2U7XG4gIHNvcnRUaW1lckludGVydmFsOiBhbnk7XG4gIF9jb2x1bW5zOiBBcnJheTxhbnk+ID0gW107XG4gIF9yb3dzOiBBcnJheTxhbnk+ID0gW107XG4gIF9yb3dzQ29sbGVjdGlvbjogQXJyYXk8YW55PiA9IFtdO1xuICBfc2VsZWN0ZWRSb3dzOiBBcnJheTxhbnk+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFibGVQYWdlU3ZjOiBUYWJsZVBhZ2VTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2Uuc2l6ZSA9IDEwO1xuICAgIHRoaXMucGFnZS5wYWdlID0gMDtcbiAgICB0aGlzLm9uUGFnZUNoYW5nZSh0aGlzLnBhZ2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNvcnRUaW1lckludGVydmFsKTtcbiAgfVxuXG4gIGdldEVuZFBhZ2UocGFnZTogUGlsVGFibGVQYWdlKTogbnVtYmVyIHtcbiAgICBsZXQgZW5kID0gKHBhZ2UucGFnZU51bWJlciAqIHBhZ2Uuc2l6ZSkgKyBwYWdlLnNpemU7XG4gICAgZW5kID0gZW5kID4gcGFnZS50b3RhbEVsZW1lbnRzID8gcGFnZS50b3RhbEVsZW1lbnRzIDogZW5kO1xuICAgIHJldHVybiBlbmQ7XG4gIH1cblxuICBnZXRTdGFydFBhZ2UocGFnZTogUGlsVGFibGVQYWdlKSB7XG4gICAgcmV0dXJuIHBhZ2UucGFnZU51bWJlciAqIHBhZ2Uuc2l6ZSArIDE7XG4gIH1cblxuICBtYXBBY3Rpb25zKHByb3A6IGFueSkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9yb3dzQ29sbGVjdGlvbltwcm9wLmluZGV4XTtcbiAgICBzd2l0Y2ggKHByb3AudHlwZSkge1xuICAgICAgY2FzZSAndXBkYXRlJzpcbiAgICAgICAgdGhpcy5lZGl0Q2xpY2tlZC5lbWl0KGRhdGEpO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICB0aGlzLmRlbGV0ZUNsaWNrZWQuZW1pdChkYXRhKTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGV0YWlsJzpcbiAgICAgICAgdGhpcy5kZXRhaWxDbGlja2VkLmVtaXQoZGF0YSk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ByaW50JzpcbiAgICAgICAgdGhpcy5wcmludENsaWNrZWQuZW1pdChkYXRhKTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgdGhpcy5yZWxvYWRDbGlja2VkLmVtaXQoZGF0YSk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ZlcmlmeSc6XG4gICAgICAgIHRoaXMudmVyaWZ5Q2xpY2tlZC5lbWl0KGRhdGEpO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd2YWxpZGF0ZSc6XG4gICAgICAgIHRoaXMudmFsaWRhdGVDbGlja2VkLmVtaXQoZGF0YSk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ludmFsaWRhdGUnOlxuICAgICAgICB0aGlzLmluVmFsaWRhdGVDbGlja2VkLmVtaXQoZGF0YSk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3B1Ymxpc2gnOlxuICAgICAgICB0aGlzLnB1Ymxpc2hDbGlja2VkLmVtaXQoZGF0YSk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FjdGl2YXRlJzpcbiAgICAgICAgdGhpcy5zd2l0Y2hDaGFuZ2VkLmVtaXQoe3ZhbHVlOiBwcm9wLiRldmVudCwgZGF0YTogZGF0YX0pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgb25MaW1pdENoYW5nZShsaW1pdDogbnVtYmVyKSB7XG4gICAgdGhpcy5wYWdlLnNpemUgPSBOdW1iZXIobGltaXQpO1xuICAgIHRoaXMucGFnZS5wYWdlTnVtYmVyID0gMDtcbiAgICB0aGlzLmxpbWl0Q2hhbmdlZC5lbWl0KHRoaXMucGFnZSk7XG4gIH1cblxuICBvbklucHV0UmFkaW9DaGFuZ2Uocm93SW5kZXg6IGFueSwgcHJvcDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0udHlwZSAmJiBpdGVtLnR5cGUgPT09ICdpbnB1dC1yYWRpbycpIHtcbiAgICAgICAgdGhpcy5fcm93c1tyb3dJbmRleF1baXRlbS5wcm9wXSA9IChpdGVtLnByb3AgPT09IHByb3ApID8gMSA6IDA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pbnB1dFJhZGlvVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLl9yb3dzW3Jvd0luZGV4XSk7XG4gIH1cblxuICBvbklucHV0VGV4dENoYW5nZShpbmRleDogbnVtYmVyLCBjb2x1bW46IHN0cmluZykge1xuICAgIHRoaXMuaW5wdXRUZXh0VmFsdWVDaGFuZ2UuZW1pdCh7XG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgIGRhdGE6IHRoaXMuX3Jvd3NbaW5kZXhdXG4gICAgfSk7XG4gIH1cblxuICBvblBhZ2VDaGFuZ2UocGFnZTogUGlsVGFibGVQYWdlKSB7XG4gICAgdGhpcy5wYWdlLnBhZ2VOdW1iZXIgPSBwYWdlLnBhZ2U7XG4gICAgdGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHRoaXMucGFnZSk7XG4gIH1cblxuICBvblJhZGlvU2VsZWN0KGRhdGE6IGFueSkge1xuICAgIHRoaXMucmVsb2FkQ2xpY2tlZC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgb25Sb3dTZWxlY3QodHlwZTogc3RyaW5nLCAkZXZlbnQ6IGFueSwgZGF0YT86IGFueSkge1xuICAgIGlmICgkZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICh0eXBlID09PSAnc2luZ2xlJykgPyB0aGlzLl9zZWxlY3RlZFJvd3MucHVzaChkYXRhKSA6IHRoaXMuX3NlbGVjdGVkUm93cyA9IHRoaXMuX3Jvd3NDb2xsZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZFJvd3MgPSAodHlwZSA9PT0gJ3NpbmdsZScpID8gIHRoaXMuX3NlbGVjdGVkUm93cy5maWx0ZXIoaXRlbSA9PiBpdGVtLm51bWJlciAhPT0gZGF0YS5udW1iZXIpIDogW107XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmVtaXQodGhpcy5fc2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIG9uUm93U2VsZWN0TW9iaWxlKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuX2lzQWxsUm93c1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkUm93cyA9IHRoaXMuX3Jvd3NDb2xsZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pc0FsbFJvd3NTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRSb3dzID0gW107XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmVtaXQodGhpcy5fc2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKGtleXdvcmQ6IHN0cmluZykge1xuICAgIHRoaXMucGFnZS5wYWdlTnVtYmVyID0gMDtcbiAgICB0aGlzLnBhZ2Uua2V5d29yZCA9IGtleXdvcmQudG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnNlYXJjaENoYW5nZWQuZW1pdCh0aGlzLnBhZ2UpO1xuICB9XG5cbiAgc2V0Q29sdW1uU29ydERpcmVjdGlvbihjb2x1bW46IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zb3J0VGltZXJJbnRlcnZhbCk7XG4gICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKChpdGVtOiBhbnksIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaWR4ICE9PSBpbmRleCkgeyBpdGVtLnNvcnQgPSAnJzsgfVxuICAgIH0pO1xuICAgIGNvbHVtbi5zb3J0ID0gKGNvbHVtbi5zb3J0ID09PSAnYXNjJykgPyAnZGVzYycgOiAnYXNjJztcbiAgICB0aGlzLnNvcnRUaW1lckludGVydmFsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb2x1bW4uc29ydCA9ICcnO1xuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgc2V0RGF0YU51bWJlcihjb2xsZWNpdG9uOiBhbnkpIHtcbiAgICBjb2xsZWNpdG9uLmZvckVhY2goKGVsZW1lbnQ6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBlbGVtZW50Lmhhc0F1dGggPSB0aGlzLnNldFJvd0VsZW1lbnRBdXRoU3RhdHVzKGVsZW1lbnQuYXV0aCk7XG4gICAgICBlbGVtZW50Lm51bWJlciA9IHRoaXMuZ2V0U3RhcnRQYWdlKHRoaXMucGFnZSkgKyBpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb2xsZWNpdG9uO1xuICB9XG5cbiAgc2V0Um93RWxlbWVudEF1dGhTdGF0dXMoYXV0aDogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKGF1dGgpIHtcbiAgICAgIGNvbnN0IGF1dGhWYWx1ZXM6IGFueSA9IE9iamVjdC5rZXlzKGF1dGgpLm1hcChrZXkgPT4gYXV0aFtrZXldKTtcbiAgICAgIHJldHVybiBhdXRoVmFsdWVzLmluY2x1ZGVzKHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzb3J0VGFibGVDb2x1bW4oY29sdW1uOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnNldENvbHVtblNvcnREaXJlY3Rpb24oY29sdW1uLCBpbmRleCk7XG4gICAgdGhpcy5fcm93cy5zb3J0KHRoaXMuc29ydENvbHVtVmFsdWUoY29sdW1uKSk7XG4gIH1cblxuICBzb3J0VGFibGVDb2x1bW5Nb2JpbGUoY29sdW1uOiBhbnkpIHtcbiAgICB0aGlzLl9yb3dzLnNvcnQodGhpcy5zb3J0Q29sdW1WYWx1ZShjb2x1bW4pKTtcbiAgICBjb2x1bW4uc29ydCA9ICcnO1xuICB9XG5cbiAgc29ydENvbHVtVmFsdWUoZGF0YTogYW55KSB7XG4gICAgbGV0IHNvcnRPcmRlciA9IDE7XG4gICAgaWYgKGRhdGEucHJvcFswXSA9PT0gJy0nKSB7XG4gICAgICAgIHNvcnRPcmRlciA9IC0xO1xuICAgICAgICBkYXRhLnByb3AgPSBkYXRhLnByb3Auc3Vic3RyKDEpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGN1cnJlbnRWYWx1ZTogYW55LCBuZXh0VmFsdWU6IGFueSkge1xuICAgICAgbGV0IHJlc3VsdDtcbiAgICAgIGlmIChkYXRhLnNvcnQgPT09ICdhc2MnKSB7XG4gICAgICAgIHJlc3VsdCA9IChjdXJyZW50VmFsdWVbZGF0YS5wcm9wXSA8IG5leHRWYWx1ZVtkYXRhLnByb3BdKSA/IC0xIDogKGN1cnJlbnRWYWx1ZVtkYXRhLnByb3BdID4gbmV4dFZhbHVlW2RhdGEucHJvcF0pID8gMSA6IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAoY3VycmVudFZhbHVlW2RhdGEucHJvcF0gPiBuZXh0VmFsdWVbZGF0YS5wcm9wXSkgPyAtMSA6IChjdXJyZW50VmFsdWVbZGF0YS5wcm9wXSA8IG5leHRWYWx1ZVtkYXRhLnByb3BdKSA/IDEgOiAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdCAqIHNvcnRPcmRlcjtcbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==