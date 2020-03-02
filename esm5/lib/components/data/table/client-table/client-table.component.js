/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/client-table/client-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PilTablePage } from '../../../../models/';
import { TablePageService } from '../../../../services/table-page.service';
var ClientTableComponent = /** @class */ (function () {
    function ClientTableComponent(_tablePageSvc) {
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
    Object.defineProperty(ClientTableComponent.prototype, "columns", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            data.forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                column.sort = '';
            }));
            this._columns = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientTableComponent.prototype, "rows", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._rowsCollection = data;
            this._rowsTemp = data;
            this.page.totalElements = data.length;
            this._isAllRowsSelected = false;
            this._selectedRows = [];
            this._rows = this.getDataOfCurrentPage(data);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClientTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.page.size = 10;
        this.page.totalElements = this._rowsCollection.length;
        this._rows = this.getDataOfCurrentPage(this._rowsCollection);
        this._tablePageSvc.setTablePage(this.page);
    };
    /**
     * @return {?}
     */
    ClientTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearInterval(this.sortTimerInterval);
    };
    /**
     * @param {?} colleciton
     * @return {?}
     */
    ClientTableComponent.prototype.getDataOfCurrentPage = /**
     * @param {?} colleciton
     * @return {?}
     */
    function (colleciton) {
        var _this = this;
        /** @type {?} */
        var data = colleciton.slice((this.getStartPage(this.page) - 1), this.getEndPage(this.page));
        data.forEach((/**
         * @param {?} element
         * @param {?} i
         * @return {?}
         */
        function (element, i) {
            element.hasAuth = _this.setRowElementAuthStatus(element.auth);
            element.number = _this.getStartPage(_this.page) + i;
        }));
        return data;
    };
    /**
     * @param {?} page
     * @return {?}
     */
    ClientTableComponent.prototype.getEndPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var end = (page.pageNumber * page.size) + page.size;
        end = end > page.totalElements ? page.totalElements : end;
        return end;
    };
    /**
     * @param {?} page
     * @return {?}
     */
    ClientTableComponent.prototype.getStartPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return page.pageNumber * page.size + 1;
    };
    /**
     * @param {?} prop
     * @return {?}
     */
    ClientTableComponent.prototype.mapActions = /**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        /** @type {?} */
        var data = this._rows[prop.index];
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
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    ClientTableComponent.prototype.onLimitChange = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        this.page.size = Number(limit);
        this.page.pageNumber = 0;
        this._rows = this.getDataOfCurrentPage(this._rowsCollection);
        this._tablePageSvc.setTablePage(this.page);
    };
    /**
     * @param {?} rowIndex
     * @param {?} prop
     * @return {?}
     */
    ClientTableComponent.prototype.onInputRadioChange = /**
     * @param {?} rowIndex
     * @param {?} prop
     * @return {?}
     */
    function (rowIndex, prop) {
        var _this = this;
        this._columns.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.type && item.type === 'input-radio') {
                _this._rows[rowIndex][item.prop] = (item.prop === prop) ? 1 : 0;
            }
        }));
        this.inputRadioValueChange.emit(this._rows[rowIndex]);
    };
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    ClientTableComponent.prototype.onInputTextChange = /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    function (index, column) {
        this.inputTextValueChange.emit({
            index: index,
            column: column,
            data: this._rows[index]
        });
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ClientTableComponent.prototype.onPageChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.page.pageNumber = $event.page;
        this._rows = this.getDataOfCurrentPage(this._rowsTemp);
        this._tablePageSvc.setTablePage(this.page);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ClientTableComponent.prototype.onRadioSelect = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.reloadClicked.emit(data);
    };
    /**
     * @param {?} type
     * @param {?} $event
     * @param {?=} data
     * @return {?}
     */
    ClientTableComponent.prototype.onRowSelect = /**
     * @param {?} type
     * @param {?} $event
     * @param {?=} data
     * @return {?}
     */
    function (type, $event, data) {
        if ($event.target.checked) {
            (type === 'single') ? this._selectedRows.push(data) : this._selectedRows = this.getDataOfCurrentPage(this._rowsTemp);
        }
        else {
            this._selectedRows = (type === 'single') ? this._selectedRows.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.number !== data.number; })) : [];
        }
        this.selectedRows.emit(this._selectedRows);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ClientTableComponent.prototype.onRowSelectMobile = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.target.checked) {
            this._isAllRowsSelected = true;
            this._selectedRows = this.getDataOfCurrentPage(this._rowsTemp);
        }
        else {
            this._isAllRowsSelected = false;
            this._selectedRows = [];
        }
        this.selectedRows.emit(this._selectedRows);
    };
    /**
     * @param {?} keyword
     * @return {?}
     */
    ClientTableComponent.prototype.onSearchChange = /**
     * @param {?} keyword
     * @return {?}
     */
    function (keyword) {
        /** @type {?} */
        var filteredKeyword = keyword.toLowerCase();
        /** @type {?} */
        var columnsFiltered = this._columns;
        /** @type {?} */
        var tempFiltered = [];
        if (!filteredKeyword) {
            tempFiltered = this._rowsCollection;
        }
        else {
            tempFiltered = this._rowsCollection.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                for (var key in columnsFiltered) {
                    if (columnsFiltered.hasOwnProperty(key)) {
                        /** @type {?} */
                        var value = item[columnsFiltered[key].prop];
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
    };
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    ClientTableComponent.prototype.setColumnSortDirection = /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    function (column, index) {
        clearInterval(this.sortTimerInterval);
        this._columns.forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        function (item, idx) {
            if (idx !== index) {
                item.sort = '';
            }
        }));
        column.sort = (column.sort === 'asc') ? 'desc' : 'asc';
        this.sortTimerInterval = setTimeout((/**
         * @return {?}
         */
        function () {
            column.sort = '';
        }), 2000);
    };
    /**
     * @param {?} auth
     * @return {?}
     */
    ClientTableComponent.prototype.setRowElementAuthStatus = /**
     * @param {?} auth
     * @return {?}
     */
    function (auth) {
        if (auth) {
            /** @type {?} */
            var authValues = Object.keys(auth).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return auth[key]; }));
            return authValues.includes(true);
        }
        return false;
    };
    /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    ClientTableComponent.prototype.sortTableColumn = /**
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    function (column, index) {
        this.setColumnSortDirection(column, index);
        this._rows.sort(this.sortColumValue(column));
    };
    /**
     * @param {?} column
     * @return {?}
     */
    ClientTableComponent.prototype.sortTableColumnMobile = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this._rows.sort(this.sortColumValue(column));
        column.sort = '';
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ClientTableComponent.prototype.sortColumValue = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var sortOrder = 1;
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
            var result;
            if (data.sort === 'asc') {
                result = (currentValue[data.prop] < nextValue[data.prop]) ? -1 : (currentValue[data.prop] > nextValue[data.prop]) ? 1 : 0;
            }
            else {
                result = (currentValue[data.prop] > nextValue[data.prop]) ? -1 : (currentValue[data.prop] < nextValue[data.prop]) ? 1 : 0;
            }
            return result * sortOrder;
        });
    };
    ClientTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-client-table',
                    template: "<uii-table-filter\n  [limitOptions]=\"limitOptions\"\n  [searchOptions]=\"searchOptions\"\n  (limitChanged)=\"onLimitChange($event)\"\n  (searchChanged)=\"onSearchChange($event)\">\n</uii-table-filter>\n<div class=\"gateway-table\">\n  <div class=\"gateway-table-header\">\n    <div class=\"header-cell cell-radio-checkbox\" *ngIf=\"checkboxColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"checkbox\" id=\"aba\" class=\"gateway-rcb-select\" [checked]=\"_isAllRowsSelected\" (change)=\"_isAllRowsSelected = !_isAllRowsSelected; onRowSelect('multiple', $event)\" />\n        <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n      </div>\n    </div>\n    <div class=\"header-cell cell-radio-checkbox\" *ngIf=\"radioColumn\"></div>\n    <div *ngFor=\"let column of _columns; let idx = index;\" class=\"header-cell\" [class.cell-number]=\"column.prop === 'number'\">\n      <span\n        *ngIf=\"!column.hasOwnProperty('header-type')\"\n        class=\"cell order-able\"\n        (click)=\"sortTableColumn(column, idx)\"\n        [ngClass]=\"(column.sort === 'asc') ? 'icon-up' : column.sort === 'desc' ? 'icon-down' : ''\">{{column.name}}</span>\n      <span\n        *ngIf=\"column.hasOwnProperty('header-type') && column['header-type'] === 'html'\"\n        class=\"cell order-able\"\n        (click)=\"sortTableColumn(column, idx)\"\n        [ngClass]=\"(column.sort === 'asc') ? 'icon-up' : column.sort === 'desc' ? 'icon-down' : ''\" [innerHTML]=\"column.name\"></span>\n    </div>\n    <div *ngIf=\"actionColumn\" class=\"header-cell cell-action\">\n      <span>{{actionTitle}}</span>\n    </div>\n  </div>\n  <uii-mobile-filter\n    [checkboxColumn]=\"checkboxColumn\"\n    [columns]=\"_columns\"\n    [isAllRowsSelected]=\"_isAllRowsSelected\"\n    [limitOptions]=\"limitOptions\"\n    [searchOptions]=\"searchOptions\"\n    (limitChanged)=\"onLimitChange($event)\"\n    (searchChanged)=\"onSearchChange($event)\"\n    (allRowsOnMobileSelected)=\"onRowSelectMobile($event)\"\n    (columnSorted)=\"sortTableColumnMobile($event)\">\n  </uii-mobile-filter>\n  <div *ngFor=\"let item of _rows; let i = index\" class=\"row-container\">\n    <div class=\"cell-radio-checkbox-mobile\" *ngIf=\"checkboxColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"checkbox\" [checked]=\"_isAllRowsSelected\" (change)=\"onRowSelect('single', $event, item)\" class=\"gateway-rcb-select\" />\n        <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n      </div>\n    </div>\n    <div class=\"cell-radio-checkbox-mobile\" *ngIf=\"radioColumn\">\n      <div class=\"gateway-rcb\">\n        <input type=\"radio\" name=\"mtable-radio-item\" [attr.id]=\"'mitem-'+ i\" [checked]=\"item.flag_aktif === '1'\" (change)=\"onRadioSelect(item)\" class=\"gateway-rcb-select\" />\n        <p class=\"gateway-rcb-label radio-label\"></p>\n      </div>\n    </div>\n    <div class=\"gateway-table-data\">\n      <div class=\"data-cell cell-radio-checkbox\" *ngIf=\"checkboxColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"checkbox\" [checked]=\"_isAllRowsSelected\" (change)=\"onRowSelect('single', $event, item)\" class=\"gateway-rcb-select\" />\n          <p for=\"aba\" class=\"gateway-rcb-label\"></p>\n        </div>\n      </div>\n      <div class=\"data-cell cell-radio-checkbox\" *ngIf=\"radioColumn\">\n        <div class=\"gateway-rcb\">\n          <input type=\"radio\" name=\"table-radio-item\" [attr.id]=\"'item-'+ i\" [checked]=\"item.flag_aktif === '1'\" (change)=\"onRadioSelect(item)\" class=\"gateway-rcb-select\" />\n          <p class=\"gateway-rcb-label radio-label\"></p>\n        </div>\n      </div>\n      <ng-container *ngFor=\"let column of _columns; let colIdx = index\">\n        <div class=\"data-cell\" [ngClass]=\"(actionColumn && item.hasAuth) ? 'inaction' : 'outaction'\" [class.hide-in-mobile]=\"column.hasOwnProperty('hide_in_mobile') && column.hide_in_mobile\">\n          <div class=\"mobile-view-header\">\n            <span *ngIf=\"!column.hasOwnProperty('header-type')\">{{column.name}}</span>\n            <span *ngIf=\"column.hasOwnProperty('header-type') && column['header-type'] === 'html'\" [innerHTML]=\"column.name\"></span>\n          </div>\n          <div class=\"table-small-content\">\n            <ng-container *ngIf=\"column.hasOwnProperty('type')\">\n              <span *ngIf=\"column.type === 'label'\" class=\"cell-label\" [ngClass]=\"item.class\">{{item[column.prop.toString()]}}</span>\n              <span *ngIf=\"column.type === 'html'\" class=\"cell-html\" [innerHTML]=\"item[column.prop.toString()]\"></span>\n              <span *ngIf=\"column.type === 'date' && !column.format\">{{item[column.prop.toString()] | date: 'dd MMMM y'}}</span>\n              <span *ngIf=\"column.type === 'input-text'\">\n                <input \n                  type=\"{{column.inputType}}\"\n                  maxlength=\"{{column.inputMaxLength}}\"\n                  class=\"table-input-text\"\n                  [class.uppercase]=\"column.textUppercase\"\n                  [class.lowercase]=\"column.textLowercase\"\n                  [(ngModel)]=\"item[column.prop.toString()]\" \n                  (change)=\"onInputTextChange(i, column.name)\">\n              </span>\n              <span *ngIf=\"column.type === 'input-radio'\">\n                <form>\n                  <div class=\"gateway-rcb\">\n                    <input type=\"radio\" \n                      [attr.name]=\"'radio-' + i\"\n                      [attr.id]=\"'radio-' + i + '-' + colIdx\"\n                      [checked]=\"item[column.prop] === 1\"\n                      (change)=\"onInputRadioChange(i, column.prop)\"\n                      class=\"gateway-rcb-select\" />\n                    <p class=\"gateway-rcb-label radio-label\"></p>\n                  </div>\n                </form>\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"!column.hasOwnProperty('type')\">\n              <span class=\"cell\">{{item[column.prop.toString()]}}</span>\n            </ng-container>\n          </div>\n        </div>\n      </ng-container>\n      <div class=\"data-cell data-cell-action\" [ngClass]=\"(actionColumn && item.hasAuth) ? 'inaction' : 'outaction'\" *ngIf=\"actionColumn\">\n        <div class=\"mobile-view-header\"><span>{{actionTitle}}</span></div>\n        <div class=\"table-small-content\">\n          <span>\n            <uii-table-action\n              [index]=\"i\"\n              [item]=\"item\"\n              [auth]=\"item.auth\"\n              [actionInValidation]=\"actionInValidation\"\n              (emitAction)=\"mapActions($event)\">\n            </uii-table-action>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"gateway-empty-data\" *ngIf=\"_rowsTemp === undefined || _rowsTemp.length === 0\">\n  <span>Tidak ada data yang ditampilkan</span>\n</div>\n<uii-table-footer\n  [footerInfo]=\"footerInfo\"\n  [paginationOptions]=\"paginationOptions\"\n  [totalElements]=\"page.totalElements\"\n  [startPage]=\"getStartPage(page)\"\n  [endPage]=\"getEndPage(page)\"\n  (pageChanged)=\"onPageChange($event)\">\n</uii-table-footer>"
                }] }
    ];
    /** @nocollapse */
    ClientTableComponent.ctorParameters = function () { return [
        { type: TablePageService }
    ]; };
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
    return ClientTableComponent;
}());
export { ClientTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS90YWJsZS9jbGllbnQtdGFibGUvY2xpZW50LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFhLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFO0lBMkRFLDhCQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUEzQnpDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLHNCQUFpQixHQUFJLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsaUJBQVksR0FBRyxJQUFJLFlB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O2dDQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFPTCxLQUFLOzhCQVVMLE1BQU07Z0NBQ04sTUFBTTtnQ0FDTixNQUFNO29DQUNOLE1BQU07OEJBQ04sTUFBTTsrQkFDTixNQUFNO2lDQUNOLE1BQU07OEJBQ04sTUFBTTtnQ0FDTixNQUFNOytCQUNOLE1BQU07Z0NBQ04sTUFBTTtrQ0FDTixNQUFNO2dDQUNOLE1BQU07K0JBQ04sTUFBTTt1Q0FDTixNQUFNO3dDQUNOLE1BQU07O0lBb05ULDJCQUFDO0NBQUEsQUFuUUQsSUFtUUM7U0EvUFksb0JBQW9COzs7SUFDL0IsNENBQStCOztJQUMvQiwyQ0FBNkI7O0lBQzdCLGtEQUFxQzs7SUFDckMsOENBQWlDOztJQUNqQywwQ0FBNkI7O0lBQzdCLDZDQUFnQzs7SUFDaEMsNENBQStCOztJQUMvQixpREFBb0M7O0lBQ3BDLDJDQUE4Qjs7SUFDOUIsNkNBQWdDOztJQWtCaEMsMkNBQTJDOztJQUMzQyw2Q0FBNkM7O0lBQzdDLDZDQUE2Qzs7SUFDN0MsaURBQWtEOztJQUNsRCwyQ0FBMkM7O0lBQzNDLDRDQUE0Qzs7SUFDNUMsOENBQThDOztJQUM5QywyQ0FBMkM7O0lBQzNDLDZDQUE2Qzs7SUFDN0MsNENBQTRDOztJQUM1Qyw2Q0FBNkM7O0lBQzdDLCtDQUErQzs7SUFDL0MsNkNBQTZDOztJQUM3Qyw0Q0FBNEM7O0lBQzVDLG9EQUFvRDs7SUFDcEQscURBQXFEOztJQUVyRCxvQ0FBMEI7O0lBQzFCLGtEQUEyQjs7SUFDM0IsaURBQXVCOztJQUN2Qix3Q0FBMEI7O0lBQzFCLHFDQUF1Qjs7SUFDdkIsK0NBQWlDOztJQUNqQyx5Q0FBMkI7O0lBQzNCLDZDQUErQjs7SUFDL0IsaURBQXVCOzs7OztJQUVYLDZDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGlsVGFibGVQYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzLyc7XG5pbXBvcnQgeyBUYWJsZVBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdGFibGUtcGFnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLWNsaWVudC10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jbGllbnQtdGFibGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENsaWVudFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBhY3Rpb25Db2x1bW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFjdGlvblRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFjdGlvbkluVmFsaWRhdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgY2hlY2tib3hDb2x1bW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZvb3RlckluZm86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZvb3Rlck9wdGlvbnM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxpbWl0T3B0aW9uczogYm9vbGVhbjtcbiAgQElucHV0KCkgcGFnaW5hdGlvbk9wdGlvbnM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJhZGlvQ29sdW1uOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWFyY2hPcHRpb25zOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzZXQgY29sdW1ucyhkYXRhOiBhbnkpIHtcbiAgICBkYXRhLmZvckVhY2goKGNvbHVtbjogYW55KSA9PiB7XG4gICAgICBjb2x1bW4uc29ydCA9ICcnO1xuICAgIH0pO1xuICAgIHRoaXMuX2NvbHVtbnMgPSBkYXRhO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCByb3dzKGRhdGE6IGFueSkge1xuICAgIHRoaXMuX3Jvd3NDb2xsZWN0aW9uID0gZGF0YTtcbiAgICB0aGlzLl9yb3dzVGVtcCA9IGRhdGE7XG4gICAgdGhpcy5wYWdlLnRvdGFsRWxlbWVudHMgPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLl9pc0FsbFJvd3NTZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3NlbGVjdGVkUm93cyA9IFtdO1xuICAgIHRoaXMuX3Jvd3MgPSB0aGlzLmdldERhdGFPZkN1cnJlbnRQYWdlKGRhdGEpO1xuICB9XG5cbiAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVsZXRlQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRldGFpbENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBpblZhbGlkYXRlQ2xpY2tlZCA9ICBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHByaW50Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1Ymxpc2hDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmFkaW9TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWxvYWRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRSb3dzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc3dpdGNoQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHZhbGlkYXRlQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHZlcmlmeUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsaW1pdENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBpbnB1dFRleHRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGlucHV0UmFkaW9WYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwYWdlID0gbmV3IFBpbFRhYmxlUGFnZSgpO1xuICBfaXNBbGxSb3dzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgc29ydFRpbWVySW50ZXJ2YWw6IGFueTtcbiAgX2NvbHVtbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgX3Jvd3M6IEFycmF5PGFueT4gPSBbXTtcbiAgX3Jvd3NDb2xsZWN0aW9uOiBBcnJheTxhbnk+ID0gW107XG4gIF9yb3dzVGVtcDogQXJyYXk8YW55PiA9IFtdO1xuICBfc2VsZWN0ZWRSb3dzOiBBcnJheTxhbnk+ID0gW107XG4gIHByZXZpb3VzUmFkaW9JdGVtID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFibGVQYWdlU3ZjOiBUYWJsZVBhZ2VTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2Uuc2l6ZSA9IDEwO1xuICAgIHRoaXMucGFnZS50b3RhbEVsZW1lbnRzID0gdGhpcy5fcm93c0NvbGxlY3Rpb24ubGVuZ3RoO1xuICAgIHRoaXMuX3Jvd3MgPSB0aGlzLmdldERhdGFPZkN1cnJlbnRQYWdlKHRoaXMuX3Jvd3NDb2xsZWN0aW9uKTtcbiAgICB0aGlzLl90YWJsZVBhZ2VTdmMuc2V0VGFibGVQYWdlKHRoaXMucGFnZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuc29ydFRpbWVySW50ZXJ2YWwpO1xuICB9XG5cbiAgZ2V0RGF0YU9mQ3VycmVudFBhZ2UoY29sbGVjaXRvbjogYW55KSB7XG4gICAgY29uc3QgZGF0YSA9IGNvbGxlY2l0b24uc2xpY2UoXG4gICAgICAodGhpcy5nZXRTdGFydFBhZ2UodGhpcy5wYWdlKSAtIDEpLCB0aGlzLmdldEVuZFBhZ2UodGhpcy5wYWdlKVxuICAgICk7XG5cbiAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQ6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBlbGVtZW50Lmhhc0F1dGggPSB0aGlzLnNldFJvd0VsZW1lbnRBdXRoU3RhdHVzKGVsZW1lbnQuYXV0aCk7XG4gICAgICBlbGVtZW50Lm51bWJlciA9IHRoaXMuZ2V0U3RhcnRQYWdlKHRoaXMucGFnZSkgKyBpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBnZXRFbmRQYWdlKHBhZ2U6IFBpbFRhYmxlUGFnZSk6IG51bWJlciB7XG4gICAgbGV0IGVuZCA9IChwYWdlLnBhZ2VOdW1iZXIgKiBwYWdlLnNpemUpICsgcGFnZS5zaXplO1xuICAgIGVuZCA9IGVuZCA+IHBhZ2UudG90YWxFbGVtZW50cyA/IHBhZ2UudG90YWxFbGVtZW50cyA6IGVuZDtcbiAgICByZXR1cm4gZW5kO1xuICB9XG5cbiAgZ2V0U3RhcnRQYWdlKHBhZ2U6IFBpbFRhYmxlUGFnZSkge1xuICAgIHJldHVybiBwYWdlLnBhZ2VOdW1iZXIgKiBwYWdlLnNpemUgKyAxO1xuICB9XG5cbiAgbWFwQWN0aW9ucyhwcm9wOiBhbnkpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fcm93c1twcm9wLmluZGV4XTtcbiAgICBzd2l0Y2ggKHByb3AudHlwZSkge1xuICAgICAgY2FzZSAndXBkYXRlJzpcbiAgICAgICAgdGhpcy5lZGl0Q2xpY2tlZC5lbWl0KGRhdGEpO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICB0aGlzLmRlbGV0ZUNsaWNrZWQuZW1pdChkYXRhKTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGV0YWlsJzpcbiAgICAgICAgdGhpcy5kZXRhaWxDbGlja2VkLmVtaXQoZGF0YSk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ByaW50JzpcbiAgICAgICAgdGhpcy5wcmludENsaWNrZWQuZW1pdChkYXRhKTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgdGhpcy5yZWxvYWRDbGlja2VkLmVtaXQoZGF0YSk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ZlcmlmeSc6XG4gICAgICAgIHRoaXMudmVyaWZ5Q2xpY2tlZC5lbWl0KGRhdGEpO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd2YWxpZGF0ZSc6XG4gICAgICAgIHRoaXMudmFsaWRhdGVDbGlja2VkLmVtaXQoZGF0YSk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ludmFsaWRhdGUnOlxuICAgICAgICB0aGlzLmluVmFsaWRhdGVDbGlja2VkLmVtaXQoZGF0YSk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3B1Ymxpc2gnOlxuICAgICAgICB0aGlzLnB1Ymxpc2hDbGlja2VkLmVtaXQoZGF0YSk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FjdGl2YXRlJzpcbiAgICAgICAgdGhpcy5zd2l0Y2hDaGFuZ2VkLmVtaXQoe3ZhbHVlOiBwcm9wLiRldmVudCwgZGF0YTogZGF0YX0pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgb25MaW1pdENoYW5nZShsaW1pdDogbnVtYmVyKSB7XG4gICAgdGhpcy5wYWdlLnNpemUgPSBOdW1iZXIobGltaXQpO1xuICAgIHRoaXMucGFnZS5wYWdlTnVtYmVyID0gMDtcbiAgICB0aGlzLl9yb3dzID0gdGhpcy5nZXREYXRhT2ZDdXJyZW50UGFnZSh0aGlzLl9yb3dzQ29sbGVjdGlvbik7XG4gICAgdGhpcy5fdGFibGVQYWdlU3ZjLnNldFRhYmxlUGFnZSh0aGlzLnBhZ2UpO1xuICB9XG5cbiAgb25JbnB1dFJhZGlvQ2hhbmdlKHJvd0luZGV4OiBhbnksIHByb3A6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnR5cGUgJiYgaXRlbS50eXBlID09PSAnaW5wdXQtcmFkaW8nKSB7XG4gICAgICAgIHRoaXMuX3Jvd3Nbcm93SW5kZXhdW2l0ZW0ucHJvcF0gPSAoaXRlbS5wcm9wID09PSBwcm9wKSA/IDEgOiAwO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuaW5wdXRSYWRpb1ZhbHVlQ2hhbmdlLmVtaXQodGhpcy5fcm93c1tyb3dJbmRleF0pO1xuICB9XG5cbiAgb25JbnB1dFRleHRDaGFuZ2UoaW5kZXg6IG51bWJlciwgY29sdW1uOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlucHV0VGV4dFZhbHVlQ2hhbmdlLmVtaXQoe1xuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICBkYXRhOiB0aGlzLl9yb3dzW2luZGV4XVxuICAgIH0pO1xuICB9XG5cbiAgb25QYWdlQ2hhbmdlKCRldmVudDogYW55KSB7XG4gICAgdGhpcy5wYWdlLnBhZ2VOdW1iZXIgPSAkZXZlbnQucGFnZTtcbiAgICB0aGlzLl9yb3dzID0gdGhpcy5nZXREYXRhT2ZDdXJyZW50UGFnZSh0aGlzLl9yb3dzVGVtcCk7XG4gICAgdGhpcy5fdGFibGVQYWdlU3ZjLnNldFRhYmxlUGFnZSh0aGlzLnBhZ2UpO1xuICB9XG5cbiAgb25SYWRpb1NlbGVjdChkYXRhOiBhbnkpIHtcbiAgICB0aGlzLnJlbG9hZENsaWNrZWQuZW1pdChkYXRhKTtcbiAgfVxuXG4gIG9uUm93U2VsZWN0KHR5cGU6IHN0cmluZywgJGV2ZW50OiBhbnksIGRhdGE/OiBhbnkpIHtcbiAgICBpZiAoJGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAodHlwZSA9PT0gJ3NpbmdsZScpID8gdGhpcy5fc2VsZWN0ZWRSb3dzLnB1c2goZGF0YSkgOiB0aGlzLl9zZWxlY3RlZFJvd3MgPSB0aGlzLmdldERhdGFPZkN1cnJlbnRQYWdlKHRoaXMuX3Jvd3NUZW1wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRSb3dzID0gKHR5cGUgPT09ICdzaW5nbGUnKSA/ICB0aGlzLl9zZWxlY3RlZFJvd3MuZmlsdGVyKGl0ZW0gPT4gaXRlbS5udW1iZXIgIT09IGRhdGEubnVtYmVyKSA6IFtdO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkUm93cy5lbWl0KHRoaXMuX3NlbGVjdGVkUm93cyk7XG4gIH1cblxuICBvblJvd1NlbGVjdE1vYmlsZSgkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICB0aGlzLl9pc0FsbFJvd3NTZWxlY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLl9zZWxlY3RlZFJvd3MgPSB0aGlzLmdldERhdGFPZkN1cnJlbnRQYWdlKHRoaXMuX3Jvd3NUZW1wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXNBbGxSb3dzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkUm93cyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkUm93cy5lbWl0KHRoaXMuX3NlbGVjdGVkUm93cyk7XG4gIH1cblxuICBvblNlYXJjaENoYW5nZShrZXl3b3JkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBmaWx0ZXJlZEtleXdvcmQgPSBrZXl3b3JkLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgY29sdW1uc0ZpbHRlcmVkID0gdGhpcy5fY29sdW1ucztcblxuICAgIGxldCB0ZW1wRmlsdGVyZWQgPSBbXTtcbiAgICBpZiAoIWZpbHRlcmVkS2V5d29yZCkge1xuICAgICAgdGVtcEZpbHRlcmVkID0gdGhpcy5fcm93c0NvbGxlY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBGaWx0ZXJlZCA9IHRoaXMuX3Jvd3NDb2xsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb2x1bW5zRmlsdGVyZWQpIHtcbiAgICAgICAgICBpZiAoY29sdW1uc0ZpbHRlcmVkLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaXRlbVtjb2x1bW5zRmlsdGVyZWRba2V5XS5wcm9wXTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJlZEtleXdvcmQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fcm93c1RlbXAgPSB0ZW1wRmlsdGVyZWQ7XG4gICAgdGhpcy5wYWdlLnBhZ2VOdW1iZXIgPSAwO1xuICAgIHRoaXMucGFnZS50b3RhbEVsZW1lbnRzID0gdGhpcy5fcm93c1RlbXAubGVuZ3RoO1xuICAgIHRoaXMuX3RhYmxlUGFnZVN2Yy5zZXRUYWJsZVBhZ2UodGhpcy5wYWdlKTtcbiAgICB0aGlzLl9yb3dzID0gdGhpcy5nZXREYXRhT2ZDdXJyZW50UGFnZSh0aGlzLl9yb3dzVGVtcCk7XG4gIH1cblxuICBzZXRDb2x1bW5Tb3J0RGlyZWN0aW9uKGNvbHVtbjogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNvcnRUaW1lckludGVydmFsKTtcbiAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goKGl0ZW06IGFueSwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpZHggIT09IGluZGV4KSB7IGl0ZW0uc29ydCA9ICcnOyB9XG4gICAgfSk7XG4gICAgY29sdW1uLnNvcnQgPSAoY29sdW1uLnNvcnQgPT09ICdhc2MnKSA/ICdkZXNjJyA6ICdhc2MnO1xuICAgIHRoaXMuc29ydFRpbWVySW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbHVtbi5zb3J0ID0gJyc7XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBzZXRSb3dFbGVtZW50QXV0aFN0YXR1cyhhdXRoOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoYXV0aCkge1xuICAgICAgY29uc3QgYXV0aFZhbHVlczogYW55ID0gT2JqZWN0LmtleXMoYXV0aCkubWFwKGtleSA9PiBhdXRoW2tleV0pO1xuICAgICAgcmV0dXJuIGF1dGhWYWx1ZXMuaW5jbHVkZXModHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNvcnRUYWJsZUNvbHVtbihjb2x1bW46IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2V0Q29sdW1uU29ydERpcmVjdGlvbihjb2x1bW4sIGluZGV4KTtcblxuICAgIHRoaXMuX3Jvd3Muc29ydCh0aGlzLnNvcnRDb2x1bVZhbHVlKGNvbHVtbikpO1xuICB9XG5cbiAgc29ydFRhYmxlQ29sdW1uTW9iaWxlKGNvbHVtbjogYW55KSB7XG4gICAgdGhpcy5fcm93cy5zb3J0KHRoaXMuc29ydENvbHVtVmFsdWUoY29sdW1uKSk7XG4gICAgY29sdW1uLnNvcnQgPSAnJztcbiAgfVxuXG4gIHNvcnRDb2x1bVZhbHVlKGRhdGE6IGFueSkge1xuICAgIGxldCBzb3J0T3JkZXIgPSAxO1xuICAgIGlmIChkYXRhLnByb3BbMF0gPT09ICctJykge1xuICAgICAgICBzb3J0T3JkZXIgPSAtMTtcbiAgICAgICAgZGF0YS5wcm9wID0gZGF0YS5wcm9wLnN1YnN0cigxKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjdXJyZW50VmFsdWU6IGFueSwgbmV4dFZhbHVlOiBhbnkpIHtcbiAgICAgIGxldCByZXN1bHQ7XG4gICAgICBpZiAoZGF0YS5zb3J0ID09PSAnYXNjJykge1xuICAgICAgICByZXN1bHQgPSAoY3VycmVudFZhbHVlW2RhdGEucHJvcF0gPCBuZXh0VmFsdWVbZGF0YS5wcm9wXSkgPyAtMSA6IChjdXJyZW50VmFsdWVbZGF0YS5wcm9wXSA+IG5leHRWYWx1ZVtkYXRhLnByb3BdKSA/IDEgOiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gKGN1cnJlbnRWYWx1ZVtkYXRhLnByb3BdID4gbmV4dFZhbHVlW2RhdGEucHJvcF0pID8gLTEgOiAoY3VycmVudFZhbHVlW2RhdGEucHJvcF0gPCBuZXh0VmFsdWVbZGF0YS5wcm9wXSkgPyAxIDogMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQgKiBzb3J0T3JkZXI7XG4gICAgfTtcbiAgfVxuXG59XG4iXX0=