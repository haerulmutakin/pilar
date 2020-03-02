/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/switch/switch.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SwitchComponent {
    constructor() {
        this.useOverlay = false;
        this.changed = new EventEmitter();
        this.changeEvent = new EventEmitter();
        this._checked = false;
        this._disabled = false;
    }
    /**
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set checked(val) {
        this._checked = val;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set disabled(val) {
        this._disabled = val;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onSwitchToggle() {
        this._checked = !this._checked;
        this.changed.emit(this._checked);
    }
    /**
     * @return {?}
     */
    onOverlayToggle() {
        this.changeEvent.emit(this._checked);
    }
}
SwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-switch',
                template: "<div class=\"ugw-switch-container\">\n  <label\n    for=\"ugw-switch\"\n    [class.switch-pane-checked]=\"_checked\"\n    class=\"ugw-switch-label-container\"\n    [class.disabled-switch]=\"_disabled\"\n    (click)=\"_disabled ? $event.preventDefault() : onSwitchToggle()\">\n    <label\n      for=\"ugw-switch\"\n      class=\"ugw-switch-ball\"\n      [class.switch-ball-checked]=\"_checked\"\n      [class.disabled-switch]=\"_disabled\">\n    </label>\n  </label>\n  <div\n    *ngIf=\"useOverlay\"\n    class=\"switch-overlay\"\n    [class.disabled-switch]=\"_disabled\"\n    (click)=\"_disabled ? $event.preventDefault() : onOverlayToggle()\"></div>\n    <ng-content></ng-content>\n</div>",
                styles: [".ugw-switch-container{position:relative;height:22px;width:40px;display:inline-block}.ugw-switch-container label.ugw-switch-label-container{border:1px solid #ccc;position:absolute;z-index:0;top:0;left:0;height:100%;width:100%;border-radius:12px;cursor:pointer;transition:background 150ms}.ugw-switch-container label.ugw-switch-label-container.switch-pane-checked{background:#093697}.ugw-switch-container label.ugw-switch-ball{position:absolute;top:-1px;left:-1px;height:23px;width:23px;background:#fff;border:1px solid #ccc;border-radius:50%;cursor:pointer;transition:left .5s}.ugw-switch-container label.ugw-switch-ball.switch-ball-checked{left:40%}.ugw-switch-container .switch-overlay{position:absolute;width:100%;height:100%;z-index:100;cursor:pointer}.ugw-switch-container .disabled-switch{cursor:not-allowed!important;opacity:.5}"]
            }] }
];
/** @nocollapse */
SwitchComponent.ctorParameters = () => [];
SwitchComponent.propDecorators = {
    useOverlay: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    changed: [{ type: Output }],
    changeEvent: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXRpbGl0aWVzL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sZUFBZTtJQXVCMUI7UUF0QlMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQWdCbEIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0IsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUVGLENBQUM7Ozs7SUFyQmpCLElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7OztJQUNELElBQUksT0FBTyxDQUFDLEdBQVk7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7SUFDdEIsQ0FBQzs7OztJQUNELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELElBQUksUUFBUSxDQUFDLEdBQVk7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQzs7OztJQVVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QiwrckJBQXNDOzthQUV2Qzs7Ozs7eUJBRUUsS0FBSztzQkFDTCxLQUFLO3VCQU9MLEtBQUs7c0JBUUwsTUFBTTswQkFDTixNQUFNOzs7O0lBakJQLHFDQUE0Qjs7SUFnQjVCLGtDQUF1Qzs7SUFDdkMsc0NBQTJDOztJQUUzQyxtQ0FBaUI7O0lBQ2pCLG9DQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLXN3aXRjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zd2l0Y2guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTd2l0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB1c2VPdmVybGF5ID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCBjaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG4gIHNldCBjaGVja2VkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoZWNrZWQgPSB2YWw7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWw7XG4gIH1cblxuICBAT3V0cHV0KCkgY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9jaGVja2VkID0gZmFsc2U7XG4gIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvblN3aXRjaFRvZ2dsZSgpIHtcbiAgICB0aGlzLl9jaGVja2VkID0gIXRoaXMuX2NoZWNrZWQ7XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQodGhpcy5fY2hlY2tlZCk7XG4gIH1cblxuICBvbk92ZXJsYXlUb2dnbGUoKSB7XG4gICAgdGhpcy5jaGFuZ2VFdmVudC5lbWl0KHRoaXMuX2NoZWNrZWQpO1xuICB9XG5cbn1cbiJdfQ==