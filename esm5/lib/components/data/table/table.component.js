/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.actionColumn = true;
        this.actionInValidation = false;
        this.actionTitle = 'Aksi';
        this.checkboxColumn = false;
        this.columns = [];
        this.footerInfo = true;
        this.footerOptions = true;
        this.limitOptions = true;
        this.paginationOptions = true;
        this.radioColumn = false;
        this.rows = [];
        this.searchOptions = true;
        this.serverMode = false;
        this.deleteClicked = new EventEmitter();
        this.detailClicked = new EventEmitter();
        this.editClicked = new EventEmitter();
        this.inValidateClicked = new EventEmitter();
        this.limitChanged = new EventEmitter();
        this.pageChanged = new EventEmitter();
        this.printClicked = new EventEmitter();
        this.publishClicked = new EventEmitter();
        this.radioChange = new EventEmitter();
        this.reloadClicked = new EventEmitter();
        this.searchChanged = new EventEmitter();
        this.selectedRow = new EventEmitter();
        this.switchChanged = new EventEmitter();
        this.validateClicked = new EventEmitter();
        this.verifyClicked = new EventEmitter();
        this.inputTextValueChange = new EventEmitter();
        this.inputRadioValueChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onEditClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.editClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onDeleteClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.deleteClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onDetailClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.detailClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onInValidateClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.inValidateClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onLimitChange = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.limitChanged.emit(data);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    TableComponent.prototype.onPageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageChanged.emit(page);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onPrintClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.printClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onPublishClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.publishClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onRadioSelect = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.radioChange.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onReloadClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.reloadClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onRowSelect = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.selectedRow.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onSearchChange = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.searchChanged.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onSwitchChange = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.switchChanged.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onValidateClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.validateClicked.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.onVerifyClick = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.verifyClicked.emit(data);
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-table',
                    template: "\n    <uii-server-table\n      *ngIf=\"serverMode; else clientMode\"\n      [actionColumn]=\"actionColumn\"\n      [actionTitle]=\"actionTitle\"\n      [checkboxColumn]=\"checkboxColumn\"\n      [columns]=\"columns\"\n      [footerInfo]=\"footerInfo\"\n      [footerOptions]=\"footerOptions\"\n      [limitOptions]=\"limitOptions\"\n      [radioColumn]=\"radioColumn\"\n      [rows]=\"rows\"\n      [searchOptions]=\"searchOptions\"\n      [searchOptions]=\"searchOptions\"\n      (limitChanged)=\"onLimitChange($event)\"\n      (pageChanged)=\"onPageChange($event)\"\n      (editClicked)=\"onEditClick($event)\"\n      (deleteClicked)=\"onDeleteClick($event)\"\n      (detailClicked)=\"onDetailClick($event)\"\n      (inValidateClicked)=\"onInValidateClick($event)\"\n      (printClicked)=\"onPrintClick($event)\"\n      (publishClicked)=\"onPublishClick($event)\"\n      (reloadClicked)=\"onReloadClick($event)\"\n      (searchChanged)=\"onSearchChange($event)\"\n      (switchChanged)=\"onSwitchChange($event)\"\n      (validateClicked)=\"onValidateClick($event)\"\n      (verifyClicked)=\"onVerifyClick($event)\"\n      (selectedRows)=\"onRowSelect($event)\"\n      (inputTextValueChange)=\"inputTextValueChange.emit($event)\"\n      (inputRadioValueChange)=\"inputRadioValueChange.emit($event)\">\n    </uii-server-table>\n    <ng-template #clientMode>\n      <uii-client-table\n        [actionColumn]=\"actionColumn\"\n        [actionInValidation]=\"actionInValidation\"\n        [actionTitle]=\"actionTitle\"\n        [checkboxColumn]=\"checkboxColumn\"\n        [columns]=\"columns\"\n        [footerInfo]=\"footerInfo\"\n        [footerOptions]=\"footerOptions\"\n        [limitOptions]=\"limitOptions\"\n        [radioColumn]=\"radioColumn\"\n        [searchOptions]=\"searchOptions\"\n        [rows]=\"rows\"\n        (editClicked)=\"onEditClick($event)\"\n        (deleteClicked)=\"onDeleteClick($event)\"\n        (detailClicked)=\"onDetailClick($event)\"\n        (inValidateClicked)=\"onInValidateClick($event)\"\n        (printClicked)=\"onPrintClick($event)\"\n        (publishClicked)=\"onPublishClick($event)\"\n        (radioSelect)=\"onRadioSelect($event)\"\n        (reloadClicked)=\"onReloadClick($event)\"\n        (switchChanged)=\"onSwitchChange($event)\"\n        (validateClicked)=\"onValidateClick($event)\"\n        (verifyClicked)=\"onVerifyClick($event)\"\n        (selectedRows)=\"onRowSelect($event)\"\n        (inputTextValueChange)=\"inputTextValueChange.emit($event)\"\n        (inputRadioValueChange)=\"inputRadioValueChange.emit($event)\">\n      </uii-client-table>\n    </ng-template>"
                }] }
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return []; };
    TableComponent.propDecorators = {
        actionColumn: [{ type: Input }],
        actionInValidation: [{ type: Input }],
        actionTitle: [{ type: Input }],
        checkboxColumn: [{ type: Input }],
        columns: [{ type: Input }],
        footerInfo: [{ type: Input }],
        footerOptions: [{ type: Input }],
        limitOptions: [{ type: Input }],
        paginationOptions: [{ type: Input }],
        radioColumn: [{ type: Input }],
        rows: [{ type: Input }],
        searchOptions: [{ type: Input }],
        serverMode: [{ type: Input }],
        deleteClicked: [{ type: Output }],
        detailClicked: [{ type: Output }],
        editClicked: [{ type: Output }],
        inValidateClicked: [{ type: Output }],
        limitChanged: [{ type: Output }],
        pageChanged: [{ type: Output }],
        printClicked: [{ type: Output }],
        publishClicked: [{ type: Output }],
        radioChange: [{ type: Output }],
        reloadClicked: [{ type: Output }],
        searchChanged: [{ type: Output }],
        selectedRow: [{ type: Output }],
        switchChanged: [{ type: Output }],
        validateClicked: [{ type: Output }],
        verifyClicked: [{ type: Output }],
        inputTextValueChange: [{ type: Output }],
        inputRadioValueChange: [{ type: Output }]
    };
    return TableComponent;
}());
export { TableComponent };
if (false) {
    /** @type {?} */
    TableComponent.prototype.actionColumn;
    /** @type {?} */
    TableComponent.prototype.actionInValidation;
    /** @type {?} */
    TableComponent.prototype.actionTitle;
    /** @type {?} */
    TableComponent.prototype.checkboxColumn;
    /** @type {?} */
    TableComponent.prototype.columns;
    /** @type {?} */
    TableComponent.prototype.footerInfo;
    /** @type {?} */
    TableComponent.prototype.footerOptions;
    /** @type {?} */
    TableComponent.prototype.limitOptions;
    /** @type {?} */
    TableComponent.prototype.paginationOptions;
    /** @type {?} */
    TableComponent.prototype.radioColumn;
    /** @type {?} */
    TableComponent.prototype.rows;
    /** @type {?} */
    TableComponent.prototype.searchOptions;
    /** @type {?} */
    TableComponent.prototype.serverMode;
    /** @type {?} */
    TableComponent.prototype.deleteClicked;
    /** @type {?} */
    TableComponent.prototype.detailClicked;
    /** @type {?} */
    TableComponent.prototype.editClicked;
    /** @type {?} */
    TableComponent.prototype.inValidateClicked;
    /** @type {?} */
    TableComponent.prototype.limitChanged;
    /** @type {?} */
    TableComponent.prototype.pageChanged;
    /** @type {?} */
    TableComponent.prototype.printClicked;
    /** @type {?} */
    TableComponent.prototype.publishClicked;
    /** @type {?} */
    TableComponent.prototype.radioChange;
    /** @type {?} */
    TableComponent.prototype.reloadClicked;
    /** @type {?} */
    TableComponent.prototype.searchChanged;
    /** @type {?} */
    TableComponent.prototype.selectedRow;
    /** @type {?} */
    TableComponent.prototype.switchChanged;
    /** @type {?} */
    TableComponent.prototype.validateClicked;
    /** @type {?} */
    TableComponent.prototype.verifyClicked;
    /** @type {?} */
    TableComponent.prototype.inputTextValueChange;
    /** @type {?} */
    TableComponent.prototype.inputRadioValueChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRhL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0U7SUFnR0U7UUFoQ1MsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1Ysa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVsQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxzQkFBaUIsR0FBSSxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxnQkFBVyxHQUFHLElB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SW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQaWxUYWJsZVBhZ2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWktdGFibGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx1aWktc2VydmVyLXRhYmxlXG4gICAgICAqbmdJZj1cInNlcnZlck1vZGU7IGVsc2UgY2xpZW50TW9kZVwiXG4gICAgICBbYWN0aW9uQ29sdW1uXT1cImFjdGlvbkNvbHVtblwiXG4gICAgICBbYWN0aW9uVGl0bGVdPVwiYWN0aW9uVGl0bGVcIlxuICAgICAgW2NoZWNrYm94Q29sdW1uXT1cImNoZWNrYm94Q29sdW1uXCJcbiAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgW2Zvb3RlckluZm9dPVwiZm9vdGVySW5mb1wiXG4gICAgICBbZm9vdGVyT3B0aW9uc109XCJmb290ZXJPcHRpb25zXCJcbiAgICAgIFtsaW1pdE9wdGlvbnNdPVwibGltaXRPcHRpb25zXCJcbiAgICAgIFtyYWRpb0NvbHVtbl09XCJyYWRpb0NvbHVtblwiXG4gICAgICBbcm93c109XCJyb3dzXCJcbiAgICAgIFtzZWFyY2hPcHRpb25zXT1cInNlYXJjaE9wdGlvbnNcIlxuICAgICAgW3NlYXJjaE9wdGlvbnNdPVwic2VhcmNoT3B0aW9uc1wiXG4gICAgICAobGltaXRDaGFuZ2VkKT1cIm9uTGltaXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAocGFnZUNoYW5nZWQpPVwib25QYWdlQ2hhbmdlKCRldmVudClcIlxuICAgICAgKGVkaXRDbGlja2VkKT1cIm9uRWRpdENsaWNrKCRldmVudClcIlxuICAgICAgKGRlbGV0ZUNsaWNrZWQpPVwib25EZWxldGVDbGljaygkZXZlbnQpXCJcbiAgICAgIChkZXRhaWxDbGlja2VkKT1cIm9uRGV0YWlsQ2xpY2soJGV2ZW50KVwiXG4gICAgICAoaW5WYWxpZGF0ZUNsaWNrZWQpPVwib25JblZhbGlkYXRlQ2xpY2soJGV2ZW50KVwiXG4gICAgICAocHJpbnRDbGlja2VkKT1cIm9uUHJpbnRDbGljaygkZXZlbnQpXCJcbiAgICAgIChwdWJsaXNoQ2xpY2tlZCk9XCJvblB1Ymxpc2hDbGljaygkZXZlbnQpXCJcbiAgICAgIChyZWxvYWRDbGlja2VkKT1cIm9uUmVsb2FkQ2xpY2soJGV2ZW50KVwiXG4gICAgICAoc2VhcmNoQ2hhbmdlZCk9XCJvblNlYXJjaENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChzd2l0Y2hDaGFuZ2VkKT1cIm9uU3dpdGNoQ2hhbmdlKCRldmVudClcIlxuICAgICAgKHZhbGlkYXRlQ2xpY2tlZCk9XCJvblZhbGlkYXRlQ2xpY2soJGV2ZW50KVwiXG4gICAgICAodmVyaWZ5Q2xpY2tlZCk9XCJvblZlcmlmeUNsaWNrKCRldmVudClcIlxuICAgICAgKHNlbGVjdGVkUm93cyk9XCJvblJvd1NlbGVjdCgkZXZlbnQpXCJcbiAgICAgIChpbnB1dFRleHRWYWx1ZUNoYW5nZSk9XCJpbnB1dFRleHRWYWx1ZUNoYW5nZS5lbWl0KCRldmVudClcIlxuICAgICAgKGlucHV0UmFkaW9WYWx1ZUNoYW5nZSk9XCJpbnB1dFJhZGlvVmFsdWVDaGFuZ2UuZW1pdCgkZXZlbnQpXCI+XG4gICAgPC91aWktc2VydmVyLXRhYmxlPlxuICAgIDxuZy10ZW1wbGF0ZSAjY2xpZW50TW9kZT5cbiAgICAgIDx1aWktY2xpZW50LXRhYmxlXG4gICAgICAgIFthY3Rpb25Db2x1bW5dPVwiYWN0aW9uQ29sdW1uXCJcbiAgICAgICAgW2FjdGlvbkluVmFsaWRhdGlvbl09XCJhY3Rpb25JblZhbGlkYXRpb25cIlxuICAgICAgICBbYWN0aW9uVGl0bGVdPVwiYWN0aW9uVGl0bGVcIlxuICAgICAgICBbY2hlY2tib3hDb2x1bW5dPVwiY2hlY2tib3hDb2x1bW5cIlxuICAgICAgICBbY29sdW1uc109XCJjb2x1bW5zXCJcbiAgICAgICAgW2Zvb3RlckluZm9dPVwiZm9vdGVySW5mb1wiXG4gICAgICAgIFtmb290ZXJPcHRpb25zXT1cImZvb3Rlck9wdGlvbnNcIlxuICAgICAgICBbbGltaXRPcHRpb25zXT1cImxpbWl0T3B0aW9uc1wiXG4gICAgICAgIFtyYWRpb0NvbHVtbl09XCJyYWRpb0NvbHVtblwiXG4gICAgICAgIFtzZWFyY2hPcHRpb25zXT1cInNlYXJjaE9wdGlvbnNcIlxuICAgICAgICBbcm93c109XCJyb3dzXCJcbiAgICAgICAgKGVkaXRDbGlja2VkKT1cIm9uRWRpdENsaWNrKCRldmVudClcIlxuICAgICAgICAoZGVsZXRlQ2xpY2tlZCk9XCJvbkRlbGV0ZUNsaWNrKCRldmVudClcIlxuICAgICAgICAoZGV0YWlsQ2xpY2tlZCk9XCJvbkRldGFpbENsaWNrKCRldmVudClcIlxuICAgICAgICAoaW5WYWxpZGF0ZUNsaWNrZWQpPVwib25JblZhbGlkYXRlQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgIChwcmludENsaWNrZWQpPVwib25QcmludENsaWNrKCRldmVudClcIlxuICAgICAgICAocHVibGlzaENsaWNrZWQpPVwib25QdWJsaXNoQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgIChyYWRpb1NlbGVjdCk9XCJvblJhZGlvU2VsZWN0KCRldmVudClcIlxuICAgICAgICAocmVsb2FkQ2xpY2tlZCk9XCJvblJlbG9hZENsaWNrKCRldmVudClcIlxuICAgICAgICAoc3dpdGNoQ2hhbmdlZCk9XCJvblN3aXRjaENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgKHZhbGlkYXRlQ2xpY2tlZCk9XCJvblZhbGlkYXRlQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICh2ZXJpZnlDbGlja2VkKT1cIm9uVmVyaWZ5Q2xpY2soJGV2ZW50KVwiXG4gICAgICAgIChzZWxlY3RlZFJvd3MpPVwib25Sb3dTZWxlY3QoJGV2ZW50KVwiXG4gICAgICAgIChpbnB1dFRleHRWYWx1ZUNoYW5nZSk9XCJpbnB1dFRleHRWYWx1ZUNoYW5nZS5lbWl0KCRldmVudClcIlxuICAgICAgICAoaW5wdXRSYWRpb1ZhbHVlQ2hhbmdlKT1cImlucHV0UmFkaW9WYWx1ZUNoYW5nZS5lbWl0KCRldmVudClcIj5cbiAgICAgIDwvdWlpLWNsaWVudC10YWJsZT5cbiAgICA8L25nLXRlbXBsYXRlPmAsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYWN0aW9uQ29sdW1uID0gdHJ1ZTtcbiAgQElucHV0KCkgYWN0aW9uSW5WYWxpZGF0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFjdGlvblRpdGxlID0gJ0Frc2knO1xuICBASW5wdXQoKSBjaGVja2JveENvbHVtbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb2x1bW5zID0gW107XG4gIEBJbnB1dCgpIGZvb3RlckluZm8gPSB0cnVlO1xuICBASW5wdXQoKSBmb290ZXJPcHRpb25zID0gdHJ1ZTtcbiAgQElucHV0KCkgbGltaXRPcHRpb25zID0gdHJ1ZTtcbiAgQElucHV0KCkgcGFnaW5hdGlvbk9wdGlvbnMgPSB0cnVlO1xuICBASW5wdXQoKSByYWRpb0NvbHVtbiA9IGZhbHNlO1xuICBASW5wdXQoKSByb3dzID0gW107XG4gIEBJbnB1dCgpIHNlYXJjaE9wdGlvbnMgPSB0cnVlO1xuICBASW5wdXQoKSBzZXJ2ZXJNb2RlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGRlbGV0ZUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZXRhaWxDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBpblZhbGlkYXRlQ2xpY2tlZCA9ICBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsaW1pdENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHByaW50Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1Ymxpc2hDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmFkaW9DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWxvYWRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VhcmNoQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkUm93ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc3dpdGNoQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHZhbGlkYXRlQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHZlcmlmeUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBpbnB1dFRleHRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGlucHV0UmFkaW9WYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25FZGl0Q2xpY2soZGF0YTogYW55KSB7XG4gICAgdGhpcy5lZGl0Q2xpY2tlZC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgb25EZWxldGVDbGljayhkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmRlbGV0ZUNsaWNrZWQuZW1pdChkYXRhKTtcbiAgfVxuXG4gIG9uRGV0YWlsQ2xpY2soZGF0YTogYW55KSB7XG4gICAgdGhpcy5kZXRhaWxDbGlja2VkLmVtaXQoZGF0YSk7XG4gIH1cblxuICBvbkluVmFsaWRhdGVDbGljayhkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmluVmFsaWRhdGVDbGlja2VkLmVtaXQoZGF0YSk7XG4gIH1cblxuICBvbkxpbWl0Q2hhbmdlKGRhdGE6IGFueSkge1xuICAgIHRoaXMubGltaXRDaGFuZ2VkLmVtaXQoZGF0YSk7XG4gIH1cblxuICBvblBhZ2VDaGFuZ2UocGFnZTogUGlsVGFibGVQYWdlKSB7XG4gICAgdGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHBhZ2UpO1xuICB9XG5cbiAgb25QcmludENsaWNrKGRhdGE6IGFueSkge1xuICAgIHRoaXMucHJpbnRDbGlja2VkLmVtaXQoZGF0YSk7XG4gIH1cblxuICBvblB1Ymxpc2hDbGljayhkYXRhOiBhbnkpIHtcbiAgICB0aGlzLnB1Ymxpc2hDbGlja2VkLmVtaXQoZGF0YSk7XG4gIH1cblxuICBvblJhZGlvU2VsZWN0KGRhdGE6IGFueSkge1xuICAgIHRoaXMucmFkaW9DaGFuZ2UuZW1pdChkYXRhKTtcbiAgfVxuXG4gIG9uUmVsb2FkQ2xpY2soZGF0YTogYW55KSB7XG4gICAgdGhpcy5yZWxvYWRDbGlja2VkLmVtaXQoZGF0YSk7XG4gIH1cblxuICBvblJvd1NlbGVjdChkYXRhOiBhbnkpIHtcbiAgICB0aGlzLnNlbGVjdGVkUm93LmVtaXQoZGF0YSk7XG4gIH1cblxuICBvblNlYXJjaENoYW5nZShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaENoYW5nZWQuZW1pdChkYXRhKTtcbiAgfVxuXG4gIG9uU3dpdGNoQ2hhbmdlKGRhdGE6IGFueSkge1xuICAgIHRoaXMuc3dpdGNoQ2hhbmdlZC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgb25WYWxpZGF0ZUNsaWNrKGRhdGE6IGFueSkge1xuICAgIHRoaXMudmFsaWRhdGVDbGlja2VkLmVtaXQoZGF0YSk7XG4gIH1cblxuICBvblZlcmlmeUNsaWNrKGRhdGE6IGFueSkge1xuICAgIHRoaXMudmVyaWZ5Q2xpY2tlZC5lbWl0KGRhdGEpO1xuICB9XG5cbn1cbiJdfQ==