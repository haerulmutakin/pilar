/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dialog/confirm-dialog/confirm-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
var ConfirmdialogComponent = /** @class */ (function () {
    function ConfirmdialogComponent(_activeModal) {
        this._activeModal = _activeModal;
        this.active = false;
    }
    /**
     * @return {?}
     */
    ConfirmdialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onClose = new Subject();
    };
    /**
     * @return {?}
     */
    ConfirmdialogComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onCancel();
    };
    /**
     * @param {?} config
     * @return {?}
     */
    ConfirmdialogComponent.prototype.showConfirmationModal = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.title = config.title ? config.title : '';
        this.message = config.message ? config.message : '';
        this.confirmBtnlabel = config.confirmBtnlabel ? config.confirmBtnlabel : '';
        this.cancelBtnLabel = config.cancelBtnLabel ? config.cancelBtnLabel : '';
        this.active = true;
    };
    /**
     * @return {?}
     */
    ConfirmdialogComponent.prototype.onConfirm = /**
     * @return {?}
     */
    function () {
        this.active = false;
        this.onClose.next(true);
        this._activeModal.hide();
    };
    /**
     * @return {?}
     */
    ConfirmdialogComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.active = false;
        this.onClose.next(false);
        this._activeModal.hide();
    };
    /**
     * @return {?}
     */
    ConfirmdialogComponent.prototype.hideConfirmationModal = /**
     * @return {?}
     */
    function () {
        this.active = false;
        this.onClose.next(null);
        this._activeModal.hide();
    };
    ConfirmdialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-confirmdialog',
                    template: "<div class=\"modal-header\">\n</div>\n<div class=\"modal-body\">\n    <div class=\"modal-icon\">\n        <span class=\"fa fa-info icon-modal-info\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-check icon-modal-success\" aria-hidden=\"true\"></span>\n        <span class=\"material-icons icon-modal-warning\">priority_high</span>\n        <span class=\"fa fa-times icon-modal-danger\" aria-hidden=\"true\"></span>\n    </div>\n    <h3 class=\"modal-title\">{{ title || 'Konfirmasi' }}</h3>\n    <div class=\"modal-message\">\n        <p>{{ message }}</p>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancel()\">{{ cancelBtnLabel || 'Tidak, batalkan' }}</button>\n    <button type=\"button\" class=\"btn btn-confirm\" (click)=\"onConfirm()\">{{ confirmBtnlabel || 'Ya, lanjutkan' }}</button>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ConfirmdialogComponent.ctorParameters = function () { return [
        { type: BsModalRef }
    ]; };
    return ConfirmdialogComponent;
}());
export { ConfirmdialogComponent };
if (false) {
    /** @type {?} */
    ConfirmdialogComponent.prototype.confirmBtnlabel;
    /** @type {?} */
    ConfirmdialogComponent.prototype.cancelBtnLabel;
    /** @type {?} */
    ConfirmdialogComponent.prototype.active;
    /** @type {?} */
    ConfirmdialogComponent.prototype.message;
    /** @type {?} */
    ConfirmdialogComponent.prototype.title;
    /** @type {?} */
    ConfirmdialogComponent.prototype.onClose;
    /** @type {?} */
    ConfirmdialogComponent.prototype._activeModal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kaWFsb2cvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0I7SUFZRSxnQ0FDUyxZQUF3QjtRQUF4QixpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQU4xQixXQUFNLEdBQUcsS0FBSyxDQUFDO0lBUXRCLENBQUM7Ozs7SUFFTSx5Q0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVNLHNEQUFxQjs7OztJQUE1QixVQUE2QixNQUFXO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVFLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFTSwwQ0FBUzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRU0seUNBQVE7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRU0sc0RBQXFCOzs7SUFBNUI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQWpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsKzNCQUE4QztpQkFDL0M7Ozs7Z0JBTlEsVUFBVTs7SUFzRG5CLDZCQUFDO0NBQUEsQUFuREQsSUFtREM7U0EvQ1ksc0JBQXNCOzs7SUFDakMsaURBQStCOztJQUMvQixnREFBOEI7O0lBQzlCLHdDQUFzQjs7SUFDdEIseUNBQXVCOztJQUN2Qix1Q0FBcUI7O0lBQ3JCLHlDQUFpQzs7SUFHL0IsOENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWktY29uZmlybWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybWRpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIGNvbmZpcm1CdG5sYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgY2FuY2VsQnRuTGFiZWw6IHN0cmluZztcbiAgcHVibGljIGFjdGl2ZSA9IGZhbHNlO1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgcHVibGljIG9uQ2xvc2U6IFN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9hY3RpdmVNb2RhbDogQnNNb2RhbFJlZlxuICApIHtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2xvc2UgPSBuZXcgU3ViamVjdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vbkNhbmNlbCgpO1xuICB9XG5cbiAgcHVibGljIHNob3dDb25maXJtYXRpb25Nb2RhbChjb25maWc6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGUgPyBjb25maWcudGl0bGUgOiAnJztcbiAgICB0aGlzLm1lc3NhZ2UgPSAgY29uZmlnLm1lc3NhZ2UgPyBjb25maWcubWVzc2FnZSA6ICcnO1xuICAgIHRoaXMuY29uZmlybUJ0bmxhYmVsID0gY29uZmlnLmNvbmZpcm1CdG5sYWJlbCA/IGNvbmZpZy5jb25maXJtQnRubGFiZWwgOiAnJztcbiAgICB0aGlzLmNhbmNlbEJ0bkxhYmVsID0gY29uZmlnLmNhbmNlbEJ0bkxhYmVsID8gY29uZmlnLmNhbmNlbEJ0bkxhYmVsIDogJyc7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIG9uQ29uZmlybSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMub25DbG9zZS5uZXh0KHRydWUpO1xuICAgIHRoaXMuX2FjdGl2ZU1vZGFsLmhpZGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMub25DbG9zZS5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLl9hY3RpdmVNb2RhbC5oaWRlKCk7XG4gIH1cblxuICBwdWJsaWMgaGlkZUNvbmZpcm1hdGlvbk1vZGFsKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5vbkNsb3NlLm5leHQobnVsbCk7XG4gICAgdGhpcy5fYWN0aXZlTW9kYWwuaGlkZSgpO1xuICB9XG5cbn1cbiJdfQ==