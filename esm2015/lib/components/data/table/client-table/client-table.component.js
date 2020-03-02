/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/client-table/client-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PilTablePage } from '../../../../models/';
import { TablePageService } from '../../../../services/table-page.service';
export class ClientTableComponent {
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
        this.radioSelect = new EventEmitter();
        this.reloadClicked = new EventEmitter();
        this.selectedRows = new EventEmitter();
        this.switchChanged = new EventEmitter();
        this.validateClicked = new EventEmitter();
        this.verifyClicked = new EventEmitter();
        this.limitChanged = new EventEmitter();
        this.inputTextValueChange = new EventEmitter();
        this.inputRadioValueChange = new EventEmitter();
        this.page = new PilTablePage();
        this._isAllRowsSelected = false;
        this._columns = [];
        this._rows = [];
        this._rowsCollection = [];
        this._rowsTemp = [];
        this._selectedRows = [];
        this.previousRadioItem = [];
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
        this._rowsCollection = data;
        this._rowsTemp = data;
        this.page.totalElements = data.length;
        this._isAllRowsSelected = false;
        this._selectedRows = [];
        this._rows = this.getDataOfCurrentPage(data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.page.size = 10;
        this.page.totalElements = this._rowsCollection.length;
        this._rows = this.getDataOfCurrentPage(this._rowsCollection);
        this._tablePageSvc.setTablePage(this.page);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearInterval(this.sortTimerInterval);
    }
    /**
     * @param {?} colleciton
     * @return {?}
     */
    getDataOfCurrentPage(colleciton) {
        /** @type {?} */
        const data = colleciton.slice((this.getStartPage(this.page) - 1), this.getEndPage(this.page));
        data.forEach((/**
         * @param {?} element
         * @param {?} i
         * @return {?}
         */
        (element, i) => {
            element.hasAuth = this.setRowElementAuthStatus(element.auth);
            element.number = this.getStartPage(this.page) + i;
        }));
        return data;
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
        const data = this._rows[prop.index];
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
        this._rows = this.getDataOfCurrentPage(this._rowsCollection);
        this._tablePageSvc.setTablePage(this.page);
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
     * @param {?} $event
     * @return {?}
     */
    onPageChange($event) {
        this.page.pageNumber = $event.page;
        this._rows = this.getDataOfCurrentPage(this._rowsTemp);
        this._tablePageSvc.setTablePage(this.page);
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
            (type === 'single') ? this._selectedRows.push(data) : this._selectedRows = this.getDataOfCurrentPage(this._rowsTemp);
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
            this._selectedRows = this.getDataOfCurrentPage(this._rowsTemp);
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
        /** @type {?} */
        const filteredKeyword = keyword.toLowerCase();
        /** @type {?} */
        const columnsFiltered = this._columns;
        /** @type {?} */
        let tempFiltered = [];
        if (!filteredKeyword) {
            tempFiltered = this._rowsCollection;
        }
        else {
            tempFiltered = this._rowsCollection.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                for (const key in columnsFiltered) {
                    if (columnsFiltered.hasOwnProperty(key)) {
                        /** @type {?} */
                        const value = item[columnsFiltered[key].prop];
                        if (value !== undefined && String(value).toLowerCase().includes(filteredKeyword)) {
                            return true;
                        }
                    }
                }
                return false;
            }));
        }
        this._rowsTemp = tempFiltered;
        this.page.pageNumber = 0;
        this.page.totalElements = this._rowsTemp.length;
        this._tablePageSvc.setTablePage(this.page);
        this._rows = this.getDataOfCurrentPage(this._rowsTemp);
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
ClientTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-client-table',
                template: "<uii-table-filter\n  [limitOptions]=\"limitOptions\"\n  [searchOptions]=\"searchOptions\"\n  (limitChanged)=\"onLimitChange($event)\"\n  (searchChanged)=\"onSearchChange($event)\">\n</uii-table-filter>\n<div class=\"gateway-table\">\n  <div class=\"gateway-table-header\">\n    <div class=\"header-cell cell-radio-checkbox\" *ngIf=\"checkboxColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"checkbox\" id=\"aba\" class=\"gateway-rcb-select\" [checked]=\"_isAllRowsSelected\" (change)=\"_isAllRowsSelected = !_isAllRowsSelected; onRowSelect('multiple', $event)\" />\n        <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n      </div>\n    </div>\n    <div class=\"header-cell cell-radio-checkbox\" *ngIf=\"radioColumn\"></div>\n    <div *ngFor=\"let column of _columns; let idx = index;\" class=\"header-cell\" [class.cell-number]=\"column.prop === 'number'\">\n      <span\n        *ngIf=\"!column.hasOwnProperty('header-type')\"\n        class=\"cell order-able\"\n        (click)=\"sortTableColumn(column, idx)\"\n        [ngClass]=\"(column.sort === 'asc') ? 'icon-up' : column.sort === 'desc' ? 'icon-down' : ''\">{{column.name}}</span>\n      <span\n        *ngIf=\"column.hasOwnProperty('header-type') && column['header-type'] === 'html'\"\n        class=\"cell order-able\"\n        (click)=\"sortTableColumn(column, idx)\"\n        [ngClass]=\"(column.sort === 'asc') ? 'icon-up' : column.sort === 'desc' ? 'icon-down' : ''\" [innerHTML]=\"column.name\"></span>\n    </div>\n    <div *ngIf=\"actionColumn\" class=\"header-cell cell-action\">\n      <span>{{actionTitle}}</span>\n    </div>\n  </div>\n  <uii-mobile-filter\n    [checkboxColumn]=\"checkboxColumn\"\n    [columns]=\"_columns\"\n    [isAllRowsSelected]=\"_isAllRowsSelected\"\n    [limitOptions]=\"limitOptions\"\n    [searchOptions]=\"searchOptions\"\n    (limitChanged)=\"onLimitChange($event)\"\n    (searchChanged)=\"onSearchChange($event)\"\n    (allRowsOnMobileSelected)=\"onRowSelectMobile($event)\"\n    (columnSorted)=\"sortTableColumnMobile($event)\">\n  </uii-mobile-filter>\n  <div *ngFor=\"let item of _rows; let i = index\" class=\"row-container\">\n    <div class=\"cell-radio-checkbox-mobile\" *ngIf=\"checkboxColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"checkbox\" [checked]=\"_isAllRowsSelected\" (change)=\"onRowSelect('single', $event, item)\" class=\"gateway-rcb-select\" />\n        <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n      </div>\n    </div>\n    <div class=\"cell-radio-checkbox-mobile\" *ngIf=\"radioColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"radio\" name=\"mtable-radio-item\" [attr.id]=\"'mitem-'+ i\" [checked]=\"item.flag_aktif === '1'\" (change)=\"onRadioSelect(item)\" class=\"gateway-rcb-select\" />\n        <p class=\"gateway-rcb-label radio-label\"></p>\n      </div>\n    </div>\n    <div class=\"gateway-table-data\">\n      <div class=\"data-cell cell-radio-checkbox\" *ngIf=\"checkboxColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"checkbox\" [checked]=\"_isAllRowsSelected\" (change)=\"onRowSelect('single', $event, item)\" class=\"gateway-rcb-select\" />\n          <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n        </div>\n      </div>\n      <div class=\"data-cell cell-radio-checkbox\" *ngIf=\"radioColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"radio\" name=\"table-radio-item\" [attr.id]=\"'item-'+ i\" [checked]=\"item.flag_aktif === '1'\" (change)=\"onRadioSelect(item)\" class=\"gateway-rcb-select\" />\n          <p class=\"gateway-rcb-label radio-label\"></p>\n        </div>\n      </div>\n      <ng-container *ngFor=\"let column of _columns; let colIdx = index\">\n        <div class=\"data-cell\" [ngClass]=\"(actionColumn && item.hasAuth) ? 'inaction' : 'outaction'\" [class.hide-in-mobile]=\"column.hasOwnProperty('hide_in_mobile') && column.hide_in_mobile\">\n          <div class=\"mobile-view-header\">\n            <span *ngIf=\"!column.hasOwnProperty('header-type')\">{{column.name}}</span>\n            <span *ngIf=\"column.hasOwnProperty('header-type') && column['header-type'] === 'html'\" [innerHTML]=\"column.name\"></span>\n          </div>\n          <div class=\"table-small-content\">\n            <ng-container *ngIf=\"column.hasOwnProperty('type')\">\n              <span *ngIf=\"column.type === 'label'\" class=\"cell-label\" [ngClass]=\"item.class\">{{item[column.prop.toString()]}}</span>\n              <span *ngIf=\"column.type === 'html'\" class=\"cell-html\" [innerHTML]=\"item[column.prop.toString()]\"></span>\n              <span *ngIf=\"column.type === 'date' && !column.format\">{{item[column.prop.toString()] | date: 'dd MMMM y'}}</span>\n              <span *ngIf=\"column.type === 'input-text'\">\n                <input \n                  type=\"{{column.inputType}}\"\n                  maxlength=\"{{column.inputMaxLength}}\"\n                  class=\"table-input-text\"\n                  [class.uppercase]=\"column.textUppercase\"\n                  [class.lowercase]=\"column.textLowercase\"\n                  [(ngModel)]=\"item[column.prop.toString()]\" \n                  (change)=\"onInputTextChange(i, column.name)\">\n              </span>\n              <span *ngIf=\"column.type === 'input-radio'\">\n                <form>\n                  <div class=\"gateway-rcb\">\n                    <input type=\"radio\" \n                      [attr.name]=\"'radio-' + i\"\n                      [attr.id]=\"'radio-' + i + '-' + colIdx\"\n                      [checked]=\"item[column.prop] === 1\"\n                      (change)=\"onInputRadioChange(i, column.prop)\"\n                      class=\"gateway-rcb-select\" />\n                    <p class=\"gateway-rcb-label radio-label\"></p>\n                  </div>\n                </form>\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"!column.hasOwnProperty('type')\">\n              <span class=\"cell\">{{item[column.prop.toString()]}}</span>\n            </ng-container>\n          </div>\n        </div>\n      </ng-container>\n      <div class=\"data-cell data-cell-action\" [ngClass]=\"(actionColumn && item.hasAuth) ? 'inaction' : 'outaction'\" *ngIf=\"actionColumn\">\n        <div class=\"mobile-view-header\"><span>{{actionTitle}}</span></div>\n        <div class=\"table-small-content\">\n          <span>\n            <uii-table-action\n              [index]=\"i\"\n              [item]=\"item\"\n              [auth]=\"item.auth\"\n              [actionInValidation]=\"actionInValidation\"\n              (emitAction)=\"mapActions($event)\">\n            </uii-table-action>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"gateway-empty-data\" *ngIf=\"_rowsTemp === undefined || _rowsTemp.length === 0\">\n  <span>Tidak ada data yang ditampilkan</span>\n</div>\n<uii-table-footer\n  [footerInfo]=\"footerInfo\"\n  [paginationOptions]=\"paginationOptions\"\n  [totalElements]=\"page.totalElements\"\n  [startPage]=\"getStartPage(page)\"\n  [endPage]=\"getEndPage(page)\"\n  (pageChanged)=\"onPageChange($event)\">\n</uii-table-footer>"
            }] }
];
/** @nocollapse */
ClientTableComponent.ctorParameters = () => [
    { type: TablePageService }
];
ClientTableComponent.propDecorators = {
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
    radioSelect: [{ type: Output }],
    reloadClicked: [{ type: Output }],
    selectedRows: [{ type: Output }],
    switchChanged: [{ type: Output }],
    validateClicked: [{ type: Output }],
    verifyClicked: [{ type: Output }],
    limitChanged: [{ type: Output }],
    inputTextValueChange: [{ type: Output }],
    inputRadioValueChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ClientTableComponent.prototype.actionColumn;
    /** @type {?} */
    ClientTableComponent.prototype.actionTitle;
    /** @type {?} */
    ClientTableComponent.prototype.actionInValidation;
    /** @type {?} */
    ClientTableComponent.prototype.checkboxColumn;
    /** @type {?} */
    ClientTableComponent.prototype.footerInfo;
    /** @type {?} */
    ClientTableComponent.prototype.footerOptions;
    /** @type {?} */
    ClientTableComponent.prototype.limitOptions;
    /** @type {?} */
    ClientTableComponent.prototype.paginationOptions;
    /** @type {?} */
    ClientTableComponent.prototype.radioColumn;
    /** @type {?} */
    ClientTableComponent.prototype.searchOptions;
    /** @type {?} */
    ClientTableComponent.prototype.editClicked;
    /** @type {?} */
    ClientTableComponent.prototype.deleteClicked;
    /** @type {?} */
    ClientTableComponent.prototype.detailClicked;
    /** @type {?} */
    ClientTableComponent.prototype.inValidateClicked;
    /** @type {?} */
    ClientTableComponent.prototype.pageChanged;
    /** @type {?} */
    ClientTableComponent.prototype.printClicked;
    /** @type {?} */
    ClientTableComponent.prototype.publishClicked;
    /** @type {?} */
    ClientTableComponent.prototype.radioSelect;
    /** @type {?} */
    ClientTableComponent.prototype.reloadClicked;
    /** @type {?} */
    ClientTableComponent.prototype.selectedRows;
    /** @type {?} */
    ClientTableComponent.prototype.switchChanged;
    /** @type {?} */
    ClientTableComponent.prototype.validateClicked;
    /** @type {?} */
    ClientTableComponent.prototype.verifyClicked;
    /** @type {?} */
    ClientTableComponent.prototype.limitChanged;
    /** @type {?} */
    ClientTableComponent.prototype.inputTextValueChange;
    /** @type {?} */
    ClientTableComponent.prototype.inputRadioValueChange;
    /** @type {?} */
    ClientTableComponent.prototype.page;
    /** @type {?} */
    ClientTableComponent.prototype._isAllRowsSelected;
    /** @type {?} */
    ClientTableComponent.prototype.sortTimerInterval;
    /** @type {?} */
    ClientTableComponent.prototype._columns;
    /** @type {?} */
    ClientTableComponent.prototype._rows;
    /** @type {?} */
    ClientTableComponent.prototype._rowsCollection;
    /** @type {?} */
    ClientTableComponent.prototype._rowsTemp;
    /** @type {?} */
    ClientTableComponent.prototype._selectedRows;
    /** @type {?} */
    ClientTableComponent.prototype.previousRadioItem;
    /**
     * @type {?}
     * @private
     */
    ClientTableComponent.prototype._tablePageSvc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS90YWJsZS9jbGllbnQtdGFibGUvY2xpZW50LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFhLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBTTNFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUF1RC9CLFlBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQTNCekMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsc0JBQWlCLEdBQUksSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNu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LE1BQU07b0NBQ04sTUFBTTs7OztJQTFDUCw0Q0FBK0I7O0lBQy9CLDJDQUE2Qjs7SUFDN0Isa0RBQXFDOztJQUNyQyw4Q0FBaUM7O0lBQ2pDLDBDQUE2Qjs7SUFDN0IsNkNBQWdDOztJQUNoQyw0Q0FBK0I7O0lBQy9CLGlEQUFvQzs7SUFDcEMsMkNBQThCOztJQUM5Qiw2Q0FBZ0M7O0lBa0JoQywyQ0FBMkM7O0lBQzNDLDZDQUE2Qzs7SUFDN0MsNkNBQTZDOztJQUM3QyxpREFBa0Q7O0lBQ2xELDJDQUEyQzs7SUFDM0MsNENBQTRDOztJQUM1Qyw4Q0FBOEM7O0lBQzlDLDJDQUEyQzs7SUFDM0MsNkNBQTZDOztJQUM3Qyw0Q0FBNEM7O0lBQzVDLDZDQUE2Qzs7SUFDN0MsK0NBQStDOztJQUMvQyw2Q0FBNkM7O0lBQzdDLDRDQUE0Qzs7SUFDNUMsb0RBQW9EOztJQUNwRCxxREFBcUQ7O0lBRXJELG9DQUEwQjs7SUFDMUIsa0RBQTJCOztJQUMzQixpREFBdUI7O0lBQ3ZCLHdDQUEwQjs7SUFDMUIscUNBQXVCOztJQUN2QiwrQ0FBaUM7O0lBQ2pDLHlDQUEyQjs7SUFDM0IsNkNBQStCOztJQUMvQixpREFBdUI7Ozs7O0lBRVgsNkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQaWxUYWJsZVBhZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvJztcbmltcG9ydCB7IFRhYmxlUGFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy90YWJsZS1wYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWktY2xpZW50LXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NsaWVudC10YWJsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2xpZW50VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGFjdGlvbkNvbHVtbjogYm9vbGVhbjtcbiAgQElucHV0KCkgYWN0aW9uVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgYWN0aW9uSW5WYWxpZGF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBjaGVja2JveENvbHVtbjogYm9vbGVhbjtcbiAgQElucHV0KCkgZm9vdGVySW5mbzogYm9vbGVhbjtcbiAgQElucHV0KCkgZm9vdGVyT3B0aW9uczogYm9vbGVhbjtcbiAgQElucHV0KCkgbGltaXRPcHRpb25zOiBib29sZWFuO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uT3B0aW9uczogYm9vbGVhbjtcbiAgQElucHV0KCkgcmFkaW9Db2x1bW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlYXJjaE9wdGlvbnM6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCBjb2x1bW5zKGRhdGE6IGFueSkge1xuICAgIGRhdGEuZm9yRWFjaCgoY29sdW1uOiBhbnkpID0+IHtcbiAgICAgIGNvbHVtbi5zb3J0ID0gJyc7XG4gICAgfSk7XG4gICAgdGhpcy5fY29sdW1ucyA9IGRhdGE7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHJvd3MoZGF0YTogYW55KSB7XG4gICAgdGhpcy5fcm93c0NvbGxlY3Rpb24gPSBkYXRhO1xuICAgIHRoaXMuX3Jvd3NUZW1wID0gZGF0YTtcbiAgICB0aGlzLnBhZ2UudG90YWxFbGVtZW50cyA9IGRhdGEubGVuZ3RoO1xuICAgIHRoaXMuX2lzQWxsUm93c1NlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fc2VsZWN0ZWRSb3dzID0gW107XG4gICAgdGhpcy5fcm93cyA9IHRoaXMuZ2V0RGF0YU9mQ3VycmVudFBhZ2UoZGF0YSk7XG4gIH1cblxuICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZWxldGVDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGV0YWlsQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGluVmFsaWRhdGVDbGlja2VkID0gIG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHJpbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGlzaENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByYWRpb1NlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlbG9hZENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFJvd3MgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzd2l0Y2hDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdmFsaWRhdGVDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdmVyaWZ5Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxpbWl0Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGlucHV0VGV4dFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaW5wdXRSYWRpb1ZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHBhZ2UgPSBuZXcgUGlsVGFibGVQYWdlKCk7XG4gIF9pc0FsbFJvd3NTZWxlY3RlZCA9IGZhbHNlO1xuICBzb3J0VGltZXJJbnRlcnZhbDogYW55O1xuICBfY29sdW1uczogQXJyYXk8YW55PiA9IFtdO1xuICBfcm93czogQXJyYXk8YW55PiA9IFtdO1xuICBfcm93c0NvbGxlY3Rpb246IEFycmF5PGFueT4gPSBbXTtcbiAgX3Jvd3NUZW1wOiBBcnJheTxhbnk+ID0gW107XG4gIF9zZWxlY3RlZFJvd3M6IEFycmF5PGFueT4gPSBbXTtcbiAgcHJldmlvdXNSYWRpb0l0ZW0gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90YWJsZVBhZ2VTdmM6IFRhYmxlUGFnZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFnZS5zaXplID0gMTA7XG4gICAgdGhpcy5wYWdlLnRvdGFsRWxlbWVudHMgPSB0aGlzLl9yb3dzQ29sbGVjdGlvbi5sZW5ndGg7XG4gICAgdGhpcy5fcm93cyA9IHRoaXMuZ2V0RGF0YU9mQ3VycmVudFBhZ2UodGhpcy5fcm93c0NvbGxlY3Rpb24pO1xuICAgIHRoaXMuX3RhYmxlUGFnZVN2Yy5zZXRUYWJsZVBhZ2UodGhpcy5wYWdlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zb3J0VGltZXJJbnRlcnZhbCk7XG4gIH1cblxuICBnZXREYXRhT2ZDdXJyZW50UGFnZShjb2xsZWNpdG9uOiBhbnkpIHtcbiAgICBjb25zdCBkYXRhID0gY29sbGVjaXRvbi5zbGljZShcbiAgICAgICh0aGlzLmdldFN0YXJ0UGFnZSh0aGlzLnBhZ2UpIC0gMSksIHRoaXMuZ2V0RW5kUGFnZSh0aGlzLnBhZ2UpXG4gICAgKTtcblxuICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudDogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgIGVsZW1lbnQuaGFzQXV0aCA9IHRoaXMuc2V0Um93RWxlbWVudEF1dGhTdGF0dXMoZWxlbWVudC5hdXRoKTtcbiAgICAgIGVsZW1lbnQubnVtYmVyID0gdGhpcy5nZXRTdGFydFBhZ2UodGhpcy5wYWdlKSArIGk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGdldEVuZFBhZ2UocGFnZTogUGlsVGFibGVQYWdlKTogbnVtYmVyIHtcbiAgICBsZXQgZW5kID0gKHBhZ2UucGFnZU51bWJlciAqIHBhZ2Uuc2l6ZSkgKyBwYWdlLnNpemU7XG4gICAgZW5kID0gZW5kID4gcGFnZS50b3RhbEVsZW1lbnRzID8gcGFnZS50b3RhbEVsZW1lbnRzIDogZW5kO1xuICAgIHJldHVybiBlbmQ7XG4gIH1cblxuICBnZXRTdGFydFBhZ2UocGFnZTogUGlsVGFibGVQYWdlKSB7XG4gICAgcmV0dXJuIHBhZ2UucGFnZU51bWJlciAqIHBhZ2Uuc2l6ZSArIDE7XG4gIH1cblxuICBtYXBBY3Rpb25zKHByb3A6IGFueSkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9yb3dzW3Byb3AuaW5kZXhdO1xuICAgIHN3aXRjaCAocHJvcC50eXBlKSB7XG4gICAgICBjYXNlICd1cGRhdGUnOlxuICAgICAgICB0aGlzLmVkaXRDbGlja2VkLmVtaXQoZGF0YSk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgIHRoaXMuZGVsZXRlQ2xpY2tlZC5lbWl0KGRhdGEpO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXRhaWwnOlxuICAgICAgICB0aGlzLmRldGFpbENsaWNrZWQuZW1pdChkYXRhKTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncHJpbnQnOlxuICAgICAgICB0aGlzLnByaW50Q2xpY2tlZC5lbWl0KGRhdGEpO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICB0aGlzLnJlbG9hZENsaWNrZWQuZW1pdChkYXRhKTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndmVyaWZ5JzpcbiAgICAgICAgdGhpcy52ZXJpZnlDbGlja2VkLmVtaXQoZGF0YSk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ZhbGlkYXRlJzpcbiAgICAgICAgdGhpcy52YWxpZGF0ZUNsaWNrZWQuZW1pdChkYXRhKTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaW52YWxpZGF0ZSc6XG4gICAgICAgIHRoaXMuaW5WYWxpZGF0ZUNsaWNrZWQuZW1pdChkYXRhKTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncHVibGlzaCc6XG4gICAgICAgIHRoaXMucHVibGlzaENsaWNrZWQuZW1pdChkYXRhKTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYWN0aXZhdGUnOlxuICAgICAgICB0aGlzLnN3aXRjaENoYW5nZWQuZW1pdCh7dmFsdWU6IHByb3AuJGV2ZW50LCBkYXRhOiBkYXRhfSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBvbkxpbWl0Q2hhbmdlKGxpbWl0OiBudW1iZXIpIHtcbiAgICB0aGlzLnBhZ2Uuc2l6ZSA9IE51bWJlcihsaW1pdCk7XG4gICAgdGhpcy5wYWdlLnBhZ2VOdW1iZXIgPSAwO1xuICAgIHRoaXMuX3Jvd3MgPSB0aGlzLmdldERhdGFPZkN1cnJlbnRQYWdlKHRoaXMuX3Jvd3NDb2xsZWN0aW9uKTtcbiAgICB0aGlzLl90YWJsZVBhZ2VTdmMuc2V0VGFibGVQYWdlKHRoaXMucGFnZSk7XG4gIH1cblxuICBvbklucHV0UmFkaW9DaGFuZ2Uocm93SW5kZXg6IGFueSwgcHJvcDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0udHlwZSAmJiBpdGVtLnR5cGUgPT09ICdpbnB1dC1yYWRpbycpIHtcbiAgICAgICAgdGhpcy5fcm93c1tyb3dJbmRleF1baXRlbS5wcm9wXSA9IChpdGVtLnByb3AgPT09IHByb3ApID8gMSA6IDA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pbnB1dFJhZGlvVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLl9yb3dzW3Jvd0luZGV4XSk7XG4gIH1cblxuICBvbklucHV0VGV4dENoYW5nZShpbmRleDogbnVtYmVyLCBjb2x1bW46IHN0cmluZykge1xuICAgIHRoaXMuaW5wdXRUZXh0VmFsdWVDaGFuZ2UuZW1pdCh7XG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgIGRhdGE6IHRoaXMuX3Jvd3NbaW5kZXhdXG4gICAgfSk7XG4gIH1cblxuICBvblBhZ2VDaGFuZ2UoJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnBhZ2UucGFnZU51bWJlciA9ICRldmVudC5wYWdlO1xuICAgIHRoaXMuX3Jvd3MgPSB0aGlzLmdldERhdGFPZkN1cnJlbnRQYWdlKHRoaXMuX3Jvd3NUZW1wKTtcbiAgICB0aGlzLl90YWJsZVBhZ2VTdmMuc2V0VGFibGVQYWdlKHRoaXMucGFnZSk7XG4gIH1cblxuICBvblJhZGlvU2VsZWN0KGRhdGE6IGFueSkge1xuICAgIHRoaXMucmVsb2FkQ2xpY2tlZC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgb25Sb3dTZWxlY3QodHlwZTogc3RyaW5nLCAkZXZlbnQ6IGFueSwgZGF0YT86IGFueSkge1xuICAgIGlmICgkZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICh0eXBlID09PSAnc2luZ2xlJykgPyB0aGlzLl9zZWxlY3RlZFJvd3MucHVzaChkYXRhKSA6IHRoaXMuX3NlbGVjdGVkUm93cyA9IHRoaXMuZ2V0RGF0YU9mQ3VycmVudFBhZ2UodGhpcy5fcm93c1RlbXApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZFJvd3MgPSAodHlwZSA9PT0gJ3NpbmdsZScpID8gIHRoaXMuX3NlbGVjdGVkUm93cy5maWx0ZXIoaXRlbSA9PiBpdGVtLm51bWJlciAhPT0gZGF0YS5udW1iZXIpIDogW107XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmVtaXQodGhpcy5fc2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIG9uUm93U2VsZWN0TW9iaWxlKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuX2lzQWxsUm93c1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkUm93cyA9IHRoaXMuZ2V0RGF0YU9mQ3VycmVudFBhZ2UodGhpcy5fcm93c1RlbXApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pc0FsbFJvd3NTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRSb3dzID0gW107XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmVtaXQodGhpcy5fc2VsZWN0ZWRSb3dzKTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKGtleXdvcmQ6IHN0cmluZykge1xuICAgIGNvbnN0IGZpbHRlcmVkS2V5d29yZCA9IGtleXdvcmQudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBjb2x1bW5zRmlsdGVyZWQgPSB0aGlzLl9jb2x1bW5zO1xuXG4gICAgbGV0IHRlbXBGaWx0ZXJlZCA9IFtdO1xuICAgIGlmICghZmlsdGVyZWRLZXl3b3JkKSB7XG4gICAgICB0ZW1wRmlsdGVyZWQgPSB0aGlzLl9yb3dzQ29sbGVjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcEZpbHRlcmVkID0gdGhpcy5fcm93c0NvbGxlY3Rpb24uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbHVtbnNGaWx0ZXJlZCkge1xuICAgICAgICAgIGlmIChjb2x1bW5zRmlsdGVyZWQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtW2NvbHVtbnNGaWx0ZXJlZFtrZXldLnByb3BdO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgU3RyaW5nKHZhbHVlKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlcmVkS2V5d29yZCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9yb3dzVGVtcCA9IHRlbXBGaWx0ZXJlZDtcbiAgICB0aGlzLnBhZ2UucGFnZU51bWJlciA9IDA7XG4gICAgdGhpcy5wYWdlLnRvdGFsRWxlbWVudHMgPSB0aGlzLl9yb3dzVGVtcC5sZW5ndGg7XG4gICAgdGhpcy5fdGFibGVQYWdlU3ZjLnNldFRhYmxlUGFnZSh0aGlzLnBhZ2UpO1xuICAgIHRoaXMuX3Jvd3MgPSB0aGlzLmdldERhdGFPZkN1cnJlbnRQYWdlKHRoaXMuX3Jvd3NUZW1wKTtcbiAgfVxuXG4gIHNldENvbHVtblNvcnREaXJlY3Rpb24oY29sdW1uOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuc29ydFRpbWVySW50ZXJ2YWwpO1xuICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaCgoaXRlbTogYW55LCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGlkeCAhPT0gaW5kZXgpIHsgaXRlbS5zb3J0ID0gJyc7IH1cbiAgICB9KTtcbiAgICBjb2x1bW4uc29ydCA9IChjb2x1bW4uc29ydCA9PT0gJ2FzYycpID8gJ2Rlc2MnIDogJ2FzYyc7XG4gICAgdGhpcy5zb3J0VGltZXJJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29sdW1uLnNvcnQgPSAnJztcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIHNldFJvd0VsZW1lbnRBdXRoU3RhdHVzKGF1dGg6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmIChhdXRoKSB7XG4gICAgICBjb25zdCBhdXRoVmFsdWVzOiBhbnkgPSBPYmplY3Qua2V5cyhhdXRoKS5tYXAoa2V5ID0+IGF1dGhba2V5XSk7XG4gICAgICByZXR1cm4gYXV0aFZhbHVlcy5pbmNsdWRlcyh0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc29ydFRhYmxlQ29sdW1uKGNvbHVtbjogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRDb2x1bW5Tb3J0RGlyZWN0aW9uKGNvbHVtbiwgaW5kZXgpO1xuXG4gICAgdGhpcy5fcm93cy5zb3J0KHRoaXMuc29ydENvbHVtVmFsdWUoY29sdW1uKSk7XG4gIH1cblxuICBzb3J0VGFibGVDb2x1bW5Nb2JpbGUoY29sdW1uOiBhbnkpIHtcbiAgICB0aGlzLl9yb3dzLnNvcnQodGhpcy5zb3J0Q29sdW1WYWx1ZShjb2x1bW4pKTtcbiAgICBjb2x1bW4uc29ydCA9ICcnO1xuICB9XG5cbiAgc29ydENvbHVtVmFsdWUoZGF0YTogYW55KSB7XG4gICAgbGV0IHNvcnRPcmRlciA9IDE7XG4gICAgaWYgKGRhdGEucHJvcFswXSA9PT0gJy0nKSB7XG4gICAgICAgIHNvcnRPcmRlciA9IC0xO1xuICAgICAgICBkYXRhLnByb3AgPSBkYXRhLnByb3Auc3Vic3RyKDEpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGN1cnJlbnRWYWx1ZTogYW55LCBuZXh0VmFsdWU6IGFueSkge1xuICAgICAgbGV0IHJlc3VsdDtcbiAgICAgIGlmIChkYXRhLnNvcnQgPT09ICdhc2MnKSB7XG4gICAgICAgIHJlc3VsdCA9IChjdXJyZW50VmFsdWVbZGF0YS5wcm9wXSA8IG5leHRWYWx1ZVtkYXRhLnByb3BdKSA/IC0xIDogKGN1cnJlbnRWYWx1ZVtkYXRhLnByb3BdID4gbmV4dFZhbHVlW2RhdGEucHJvcF0pID8gMSA6IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAoY3VycmVudFZhbHVlW2RhdGEucHJvcF0gPiBuZXh0VmFsdWVbZGF0YS5wcm9wXSkgPyAtMSA6IChjdXJyZW50VmFsdWVbZGF0YS5wcm9wXSA8IG5leHRWYWx1ZVtkYXRhLnByb3BdKSA/IDEgOiAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdCAqIHNvcnRPcmRlcjtcbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==