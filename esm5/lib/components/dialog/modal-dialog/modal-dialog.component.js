/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dialog/modal-dialog/modal-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
var ModalDialogComponent = /** @class */ (function () {
    function ModalDialogComponent(_activeModal) {
        this._activeModal = _activeModal;
        this.title = 'Information';
        this.message = 'Check what your done';
    }
    ModalDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-infodialog',
                    template: "<div class=\"modal-header\">\n</div>\n<div class=\"modal-body\">\n  <div class=\"modal-icon\">\n    <span class=\"fa fa-info icon-modal-info\" aria-hidden=\"true\"></span>\n    <span class=\"fa fa-check icon-modal-success\" aria-hidden=\"true\"></span>\n    <span class=\"material-icons icon-modal-warning\">priority_high</span>\n    <span class=\"fa fa-times icon-modal-danger\" aria-hidden=\"true\"></span>\n  </div>\n  <h4 class=\"modal-title\">{{ title }}</h4>\n  <div class=\"modal-message\">\n    <p>{{ message }}</p>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-confirm btn-info\" (click)=\"_activeModal.hide()\">{{ 'OK' | translate }}</button>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ModalDialogComponent.ctorParameters = function () { return [
        { type: BsModalRef }
    ]; };
    return ModalDialogComponent;
}());
export { ModalDialogComponent };
if (false) {
    /** @type {?} */
    ModalDialogComponent.prototype.title;
    /** @type {?} */
    ModalDialogComponent.prototype.message;
    /** @type {?} */
    ModalDialogComponent.prototype._activeModal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGlhbG9nL21vZGFsLWRpYWxvZy9tb2RhbC1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakQ7SUFRRSw4QkFBbUIsWUFBd0I7UUFBeEIsaUJBQVksR0FBWixZQUFZLENBQVk7UUFIcEMsVUFBSyxHQUFHLGFBQWEsQ0FBQztRQUN0QixZQUFPLEdBQUcsc0JBQXNCLENBQUM7SUFFTyxDQUFDOztnQkFSakQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLCtzQkFBNEM7aUJBQzdDOzs7O2dCQUxRLFVBQVU7O0lBV25CLDJCQUFDO0NBQUEsQUFURCxJQVNDO1NBTFksb0JBQW9COzs7SUFDL0IscUNBQTZCOztJQUM3Qix1Q0FBd0M7O0lBRTVCLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWktaW5mb2RpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsRGlhbG9nQ29tcG9uZW50IHtcbiAgcHVibGljIHRpdGxlID0gJ0luZm9ybWF0aW9uJztcbiAgcHVibGljIG1lc3NhZ2UgPSAnQ2hlY2sgd2hhdCB5b3VyIGRvbmUnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfYWN0aXZlTW9kYWw6IEJzTW9kYWxSZWYpIHsgfVxufVxuIl19