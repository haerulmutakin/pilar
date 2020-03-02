/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class TableComponent {
    constructor() {
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
    ngOnInit() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onEditClick(data) {
        this.editClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onDeleteClick(data) {
        this.deleteClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onDetailClick(data) {
        this.detailClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onInValidateClick(data) {
        this.inValidateClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onLimitChange(data) {
        this.limitChanged.emit(data);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onPrintClick(data) {
        this.printClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onPublishClick(data) {
        this.publishClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onRadioSelect(data) {
        this.radioChange.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onReloadClick(data) {
        this.reloadClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onRowSelect(data) {
        this.selectedRow.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onSearchChange(data) {
        this.searchChanged.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onSwitchChange(data) {
        this.switchChanged.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onValidateClick(data) {
        this.validateClicked.emit(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onVerifyClick(data) {
        this.verifyClicked.emit(data);
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-table',
                template: `
    <uii-server-table
      *ngIf="serverMode; else clientMode"
      [actionColumn]="actionColumn"
      [actionTitle]="actionTitle"
      [checkboxColumn]="checkboxColumn"
      [columns]="columns"
      [footerInfo]="footerInfo"
      [footerOptions]="footerOptions"
      [limitOptions]="limitOptions"
      [radioColumn]="radioColumn"
      [rows]="rows"
      [searchOptions]="searchOptions"
      [searchOptions]="searchOptions"
      (limitChanged)="onLimitChange($event)"
      (pageChanged)="onPageChange($event)"
      (editClicked)="onEditClick($event)"
      (deleteClicked)="onDeleteClick($event)"
      (detailClicked)="onDetailClick($event)"
      (inValidateClicked)="onInValidateClick($event)"
      (printClicked)="onPrintClick($event)"
      (publishClicked)="onPublishClick($event)"
      (reloadClicked)="onReloadClick($event)"
      (searchChanged)="onSearchChange($event)"
      (switchChanged)="onSwitchChange($event)"
      (validateClicked)="onValidateClick($event)"
      (verifyClicked)="onVerifyClick($event)"
      (selectedRows)="onRowSelect($event)"
      (inputTextValueChange)="inputTextValueChange.emit($event)"
      (inputRadioValueChange)="inputRadioValueChange.emit($event)">
    </uii-server-table>
    <ng-template #clientMode>
      <uii-client-table
        [actionColumn]="actionColumn"
        [actionInValidation]="actionInValidation"
        [actionTitle]="actionTitle"
        [checkboxColumn]="checkboxColumn"
        [columns]="columns"
        [footerInfo]="footerInfo"
        [footerOptions]="footerOptions"
        [limitOptions]="limitOptions"
        [radioColumn]="radioColumn"
        [searchOptions]="searchOptions"
        [rows]="rows"
        (editClicked)="onEditClick($event)"
        (deleteClicked)="onDeleteClick($event)"
        (detailClicked)="onDetailClick($event)"
        (inValidateClicked)="onInValidateClick($event)"
        (printClicked)="onPrintClick($event)"
        (publishClicked)="onPublishClick($event)"
        (radioSelect)="onRadioSelect($event)"
        (reloadClicked)="onReloadClick($event)"
        (switchChanged)="onSwitchChange($event)"
        (validateClicked)="onValidateClick($event)"
        (verifyClicked)="onVerifyClick($event)"
        (selectedRows)="onRowSelect($event)"
        (inputTextValueChange)="inputTextValueChange.emit($event)"
        (inputRadioValueChange)="inputRadioValueChange.emit($event)">
      </uii-client-table>
    </ng-template>`
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXRhL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFrRS9FLE1BQU0sT0FBTyxjQUFjO0lBaUN6QjtRQWhDUyxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxNQUFNLENBQUM7UUFDckIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLHNCQUFpQixHQUFJLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FB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S0FBSztpQ0FDTCxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFFTCxNQUFNOzRCQUNOLE1BQU07MEJBQ04sTUFBTTtnQ0FDTixNQUFNOzJCQUNOLE1BQU07MEJBQ04sTUFBTTsyQkFDTixNQUFNOzZCQUNOLE1BQU07MEJBQ04sTUFBTTs0QkFDTixNQUFNOzRCQUNOLE1BQU07MEJBQ04sTUFBTTs0QkFDTixNQUFNOzhCQUNOLE1BQU07NEJBQ04sTUFBTTttQ0FDTixNQUFNO29DQUNOLE1BQU07Ozs7SUE5QlAsc0NBQTZCOztJQUM3Qiw0Q0FBb0M7O0lBQ3BDLHFDQUE4Qjs7SUFDOUIsd0NBQWdDOztJQUNoQyxpQ0FBc0I7O0lBQ3RCLG9DQUEyQjs7SUFDM0IsdUNBQThCOztJQUM5QixzQ0FBNkI7O0lBQzdCLDJDQUFrQzs7SUFDbEMscUNBQTZCOztJQUM3Qiw4QkFBbUI7O0lBQ25CLHVDQUE4Qjs7SUFDOUIsb0NBQTRCOztJQUU1Qix1Q0FBNkM7O0lBQzdDLHVDQUE2Qzs7SUFDN0MscUNBQTJDOztJQUMzQywyQ0FBa0Q7O0lBQ2xELHNDQUE0Qzs7SUFDNUMscUNBQTJDOztJQUMzQyxzQ0FBNEM7O0lBQzVDLHdDQUE4Qzs7SUFDOUMscUNBQTJDOztJQUMzQyx1Q0FBNkM7O0lBQzdDLHVDQUE2Qzs7SUFDN0MscUNBQTJDOztJQUMzQyx1Q0FBNkM7O0lBQzdDLHlDQUErQzs7SUFDL0MsdUNBQTZDOztJQUM3Qyw4Q0FBb0Q7O0lBQ3BELCtDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBpbFRhYmxlUGFnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpaS10YWJsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHVpaS1zZXJ2ZXItdGFibGVcbiAgICAgICpuZ0lmPVwic2VydmVyTW9kZTsgZWxzZSBjbGllbnRNb2RlXCJcbiAgICAgIFthY3Rpb25Db2x1bW5dPVwiYWN0aW9uQ29sdW1uXCJcbiAgICAgIFthY3Rpb25UaXRsZV09XCJhY3Rpb25UaXRsZVwiXG4gICAgICBbY2hlY2tib3hDb2x1bW5dPVwiY2hlY2tib3hDb2x1bW5cIlxuICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICBbZm9vdGVySW5mb109XCJmb290ZXJJbmZvXCJcbiAgICAgIFtmb290ZXJPcHRpb25zXT1cImZvb3Rlck9wdGlvbnNcIlxuICAgICAgW2xpbWl0T3B0aW9uc109XCJsaW1pdE9wdGlvbnNcIlxuICAgICAgW3JhZGlvQ29sdW1uXT1cInJhZGlvQ29sdW1uXCJcbiAgICAgIFtyb3dzXT1cInJvd3NcIlxuICAgICAgW3NlYXJjaE9wdGlvbnNdPVwic2VhcmNoT3B0aW9uc1wiXG4gICAgICBbc2VhcmNoT3B0aW9uc109XCJzZWFyY2hPcHRpb25zXCJcbiAgICAgIChsaW1pdENoYW5nZWQpPVwib25MaW1pdENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChwYWdlQ2hhbmdlZCk9XCJvblBhZ2VDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAoZWRpdENsaWNrZWQpPVwib25FZGl0Q2xpY2soJGV2ZW50KVwiXG4gICAgICAoZGVsZXRlQ2xpY2tlZCk9XCJvbkRlbGV0ZUNsaWNrKCRldmVudClcIlxuICAgICAgKGRldGFpbENsaWNrZWQpPVwib25EZXRhaWxDbGljaygkZXZlbnQpXCJcbiAgICAgIChpblZhbGlkYXRlQ2xpY2tlZCk9XCJvbkluVmFsaWRhdGVDbGljaygkZXZlbnQpXCJcbiAgICAgIChwcmludENsaWNrZWQpPVwib25QcmludENsaWNrKCRldmVudClcIlxuICAgICAgKHB1Ymxpc2hDbGlja2VkKT1cIm9uUHVibGlzaENsaWNrKCRldmVudClcIlxuICAgICAgKHJlbG9hZENsaWNrZWQpPVwib25SZWxvYWRDbGljaygkZXZlbnQpXCJcbiAgICAgIChzZWFyY2hDaGFuZ2VkKT1cIm9uU2VhcmNoQ2hhbmdlKCRldmVudClcIlxuICAgICAgKHN3aXRjaENoYW5nZWQpPVwib25Td2l0Y2hDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAodmFsaWRhdGVDbGlja2VkKT1cIm9uVmFsaWRhdGVDbGljaygkZXZlbnQpXCJcbiAgICAgICh2ZXJpZnlDbGlja2VkKT1cIm9uVmVyaWZ5Q2xpY2soJGV2ZW50KVwiXG4gICAgICAoc2VsZWN0ZWRSb3dzKT1cIm9uUm93U2VsZWN0KCRldmVudClcIlxuICAgICAgKGlucHV0VGV4dFZhbHVlQ2hhbmdlKT1cImlucHV0VGV4dFZhbHVlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAoaW5wdXRSYWRpb1ZhbHVlQ2hhbmdlKT1cImlucHV0UmFkaW9WYWx1ZUNoYW5nZS5lbWl0KCRldmVudClcIj5cbiAgICA8L3VpaS1zZXJ2ZXItdGFibGU+XG4gICAgPG5nLXRlbXBsYXRlICNjbGllbnRNb2RlPlxuICAgICAgPHVpaS1jbGllbnQtdGFibGVcbiAgICAgICAgW2FjdGlvbkNvbHVtbl09XCJhY3Rpb25Db2x1bW5cIlxuICAgICAgICBbYWN0aW9uSW5WYWxpZGF0aW9uXT1cImFjdGlvbkluVmFsaWRhdGlvblwiXG4gICAgICAgIFthY3Rpb25UaXRsZV09XCJhY3Rpb25UaXRsZVwiXG4gICAgICAgIFtjaGVja2JveENvbHVtbl09XCJjaGVja2JveENvbHVtblwiXG4gICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICBbZm9vdGVySW5mb109XCJmb290ZXJJbmZvXCJcbiAgICAgICAgW2Zvb3Rlck9wdGlvbnNdPVwiZm9vdGVyT3B0aW9uc1wiXG4gICAgICAgIFtsaW1pdE9wdGlvbnNdPVwibGltaXRPcHRpb25zXCJcbiAgICAgICAgW3JhZGlvQ29sdW1uXT1cInJhZGlvQ29sdW1uXCJcbiAgICAgICAgW3NlYXJjaE9wdGlvbnNdPVwic2VhcmNoT3B0aW9uc1wiXG4gICAgICAgIFtyb3dzXT1cInJvd3NcIlxuICAgICAgICAoZWRpdENsaWNrZWQpPVwib25FZGl0Q2xpY2soJGV2ZW50KVwiXG4gICAgICAgIChkZWxldGVDbGlja2VkKT1cIm9uRGVsZXRlQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgIChkZXRhaWxDbGlja2VkKT1cIm9uRGV0YWlsQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgIChpblZhbGlkYXRlQ2xpY2tlZCk9XCJvbkluVmFsaWRhdGVDbGljaygkZXZlbnQpXCJcbiAgICAgICAgKHByaW50Q2xpY2tlZCk9XCJvblByaW50Q2xpY2soJGV2ZW50KVwiXG4gICAgICAgIChwdWJsaXNoQ2xpY2tlZCk9XCJvblB1Ymxpc2hDbGljaygkZXZlbnQpXCJcbiAgICAgICAgKHJhZGlvU2VsZWN0KT1cIm9uUmFkaW9TZWxlY3QoJGV2ZW50KVwiXG4gICAgICAgIChyZWxvYWRDbGlja2VkKT1cIm9uUmVsb2FkQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgIChzd2l0Y2hDaGFuZ2VkKT1cIm9uU3dpdGNoQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAodmFsaWRhdGVDbGlja2VkKT1cIm9uVmFsaWRhdGVDbGljaygkZXZlbnQpXCJcbiAgICAgICAgKHZlcmlmeUNsaWNrZWQpPVwib25WZXJpZnlDbGljaygkZXZlbnQpXCJcbiAgICAgICAgKHNlbGVjdGVkUm93cyk9XCJvblJvd1NlbGVjdCgkZXZlbnQpXCJcbiAgICAgICAgKGlucHV0VGV4dFZhbHVlQ2hhbmdlKT1cImlucHV0VGV4dFZhbHVlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgIChpbnB1dFJhZGlvVmFsdWVDaGFuZ2UpPVwiaW5wdXRSYWRpb1ZhbHVlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiPlxuICAgICAgPC91aWktY2xpZW50LXRhYmxlPlxuICAgIDwvbmctdGVtcGxhdGU+YCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhY3Rpb25Db2x1bW4gPSB0cnVlO1xuICBASW5wdXQoKSBhY3Rpb25JblZhbGlkYXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgYWN0aW9uVGl0bGUgPSAnQWtzaSc7XG4gIEBJbnB1dCgpIGNoZWNrYm94Q29sdW1uID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbHVtbnMgPSBbXTtcbiAgQElucHV0KCkgZm9vdGVySW5mbyA9IHRydWU7XG4gIEBJbnB1dCgpIGZvb3Rlck9wdGlvbnMgPSB0cnVlO1xuICBASW5wdXQoKSBsaW1pdE9wdGlvbnMgPSB0cnVlO1xuICBASW5wdXQoKSBwYWdpbmF0aW9uT3B0aW9ucyA9IHRydWU7XG4gIEBJbnB1dCgpIHJhZGlvQ29sdW1uID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJvd3MgPSBbXTtcbiAgQElucHV0KCkgc2VhcmNoT3B0aW9ucyA9IHRydWU7XG4gIEBJbnB1dCgpIHNlcnZlck1vZGUgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgZGVsZXRlQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRldGFpbENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlZGl0Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGluVmFsaWRhdGVDbGlja2VkID0gIG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxpbWl0Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHJpbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGlzaENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByYWRpb0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlbG9hZENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWFyY2hDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRSb3cgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzd2l0Y2hDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdmFsaWRhdGVDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdmVyaWZ5Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGlucHV0VGV4dFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaW5wdXRSYWRpb1ZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkVkaXRDbGljayhkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmVkaXRDbGlja2VkLmVtaXQoZGF0YSk7XG4gIH1cblxuICBvbkRlbGV0ZUNsaWNrKGRhdGE6IGFueSkge1xuICAgIHRoaXMuZGVsZXRlQ2xpY2tlZC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgb25EZXRhaWxDbGljayhkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmRldGFpbENsaWNrZWQuZW1pdChkYXRhKTtcbiAgfVxuXG4gIG9uSW5WYWxpZGF0ZUNsaWNrKGRhdGE6IGFueSkge1xuICAgIHRoaXMuaW5WYWxpZGF0ZUNsaWNrZWQuZW1pdChkYXRhKTtcbiAgfVxuXG4gIG9uTGltaXRDaGFuZ2UoZGF0YTogYW55KSB7XG4gICAgdGhpcy5saW1pdENoYW5nZWQuZW1pdChkYXRhKTtcbiAgfVxuXG4gIG9uUGFnZUNoYW5nZShwYWdlOiBQaWxUYWJsZVBhZ2UpIHtcbiAgICB0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZSk7XG4gIH1cblxuICBvblByaW50Q2xpY2soZGF0YTogYW55KSB7XG4gICAgdGhpcy5wcmludENsaWNrZWQuZW1pdChkYXRhKTtcbiAgfVxuXG4gIG9uUHVibGlzaENsaWNrKGRhdGE6IGFueSkge1xuICAgIHRoaXMucHVibGlzaENsaWNrZWQuZW1pdChkYXRhKTtcbiAgfVxuXG4gIG9uUmFkaW9TZWxlY3QoZGF0YTogYW55KSB7XG4gICAgdGhpcy5yYWRpb0NoYW5nZS5lbWl0KGRhdGEpO1xuICB9XG5cbiAgb25SZWxvYWRDbGljayhkYXRhOiBhbnkpIHtcbiAgICB0aGlzLnJlbG9hZENsaWNrZWQuZW1pdChkYXRhKTtcbiAgfVxuXG4gIG9uUm93U2VsZWN0KGRhdGE6IGFueSkge1xuICAgIHRoaXMuc2VsZWN0ZWRSb3cuZW1pdChkYXRhKTtcbiAgfVxuXG4gIG9uU2VhcmNoQ2hhbmdlKGRhdGE6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoQ2hhbmdlZC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgb25Td2l0Y2hDaGFuZ2UoZGF0YTogYW55KSB7XG4gICAgdGhpcy5zd2l0Y2hDaGFuZ2VkLmVtaXQoZGF0YSk7XG4gIH1cblxuICBvblZhbGlkYXRlQ2xpY2soZGF0YTogYW55KSB7XG4gICAgdGhpcy52YWxpZGF0ZUNsaWNrZWQuZW1pdChkYXRhKTtcbiAgfVxuXG4gIG9uVmVyaWZ5Q2xpY2soZGF0YTogYW55KSB7XG4gICAgdGhpcy52ZXJpZnlDbGlja2VkLmVtaXQoZGF0YSk7XG4gIH1cblxufVxuIl19