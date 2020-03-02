/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/switch/switch.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SwitchComponent = /** @class */ (function () {
    function SwitchComponent() {
        this.useOverlay = false;
        this.changed = new EventEmitter();
        this.changeEvent = new EventEmitter();
        this._checked = false;
        this._disabled = false;
    }
    Object.defineProperty(SwitchComponent.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._checked = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._disabled = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SwitchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SwitchComponent.prototype.onSwitchToggle = /**
     * @return {?}
     */
    function () {
        this._checked = !this._checked;
        this.changed.emit(this._checked);
    };
    /**
     * @return {?}
     */
    SwitchComponent.prototype.onOverlayToggle = /**
     * @return {?}
     */
    function () {
        this.changeEvent.emit(this._checked);
    };
    SwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-switch',
                    template: "<div class=\"ugw-switch-container\">\n  <label\n    for=\"ugw-switch\"\n    [class.switch-pane-checked]=\"_checked\"\n    class=\"ugw-switch-label-container\"\n    [class.disabled-switch]=\"_disabled\"\n    (click)=\"_disabled ? $event.preventDefault() : onSwitchToggle()\">\n    <label\n      for=\"ugw-switch\"\n      class=\"ugw-switch-ball\"\n      [class.switch-ball-checked]=\"_checked\"\n      [class.disabled-switch]=\"_disabled\">\n    </label>\n  </label>\n  <div\n    *ngIf=\"useOverlay\"\n    class=\"switch-overlay\"\n    [class.disabled-switch]=\"_disabled\"\n    (click)=\"_disabled ? $event.preventDefault() : onOverlayToggle()\"></div>\n    <ng-content></ng-content>\n</div>",
                    styles: [".ugw-switch-container{position:relative;height:22px;width:40px;display:inline-block}.ugw-switch-container label.ugw-switch-label-container{border:1px solid #ccc;position:absolute;z-index:0;top:0;left:0;height:100%;width:100%;border-radius:12px;cursor:pointer;transition:background 150ms}.ugw-switch-container label.ugw-switch-label-container.switch-pane-checked{background:#093697}.ugw-switch-container label.ugw-switch-ball{position:absolute;top:-1px;left:-1px;height:23px;width:23px;background:#fff;border:1px solid #ccc;border-radius:50%;cursor:pointer;transition:left .5s}.ugw-switch-container label.ugw-switch-ball.switch-ball-checked{left:40%}.ugw-switch-container .switch-overlay{position:absolute;width:100%;height:100%;z-index:100;cursor:pointer}.ugw-switch-container .disabled-switch{cursor:not-allowed!important;opacity:.5}"]
                }] }
    ];
    /** @nocollapse */
    SwitchComponent.ctorParameters = function () { return []; };
    SwitchComponent.propDecorators = {
        useOverlay: [{ type: Input }],
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        changed: [{ type: Output }],
        changeEvent: [{ type: Output }]
    };
    return SwitchComponent;
}());
export { SwitchComponent };
if (false) {
    /** @type {?} */
    SwitchComponent.prototype.useOverlay;
    /** @type {?} */
    SwitchComponent.prototype.changed;
    /** @type {?} */
    SwitchComponent.prototype.changeEvent;
    /** @type {?} */
    SwitchComponent.prototype._checked;
    /** @type {?} */
    SwitchComponent.prototype._disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXRpbGl0aWVzL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQTRCRTtRQXRCUyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBZ0JsQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0MsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBRUYsQ0FBQztJQXJCakIsc0JBQ0ksb0NBQU87Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQUNELFVBQVksR0FBWTtZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUN0QixDQUFDOzs7T0FIQTtJQUlELHNCQUNJLHFDQUFROzs7O1FBRFo7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFDRCxVQUFhLEdBQVk7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQzs7O09BSEE7Ozs7SUFhRCxrQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsd0NBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCx5Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0JBeENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsK3JCQUFzQzs7aUJBRXZDOzs7Ozs2QkFFRSxLQUFLOzBCQUNMLEtBQUs7MkJBT0wsS0FBSzswQkFRTCxNQUFNOzhCQUNOLE1BQU07O0lBbUJULHNCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0FyQ1ksZUFBZTs7O0lBQzFCLHFDQUE0Qjs7SUFnQjVCLGtDQUF1Qzs7SUFDdkMsc0NBQTJDOztJQUUzQyxtQ0FBaUI7O0lBQ2pCLG9DQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLXN3aXRjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zd2l0Y2guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTd2l0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB1c2VPdmVybGF5ID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCBjaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG4gIHNldCBjaGVja2VkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoZWNrZWQgPSB2YWw7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWw7XG4gIH1cblxuICBAT3V0cHV0KCkgY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9jaGVja2VkID0gZmFsc2U7XG4gIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvblN3aXRjaFRvZ2dsZSgpIHtcbiAgICB0aGlzLl9jaGVja2VkID0gIXRoaXMuX2NoZWNrZWQ7XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQodGhpcy5fY2hlY2tlZCk7XG4gIH1cblxuICBvbk92ZXJsYXlUb2dnbGUoKSB7XG4gICAgdGhpcy5jaGFuZ2VFdmVudC5lbWl0KHRoaXMuX2NoZWNrZWQpO1xuICB9XG5cbn1cbiJdfQ==