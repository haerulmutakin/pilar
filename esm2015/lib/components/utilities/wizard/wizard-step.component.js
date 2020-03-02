/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/wizard/wizard-step.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class WizardStepComponent {
    constructor() {
        this.hidden = false;
        this.isValid = true;
        this.isAllowed = -1;
        this.showNext = true;
        this.showPrev = true;
        // tslint:disable-next-line:no-output-on-prefix
        this.onNext = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.onPrev = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.onComplete = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.onCancel = new EventEmitter();
        this._isActive = false;
        this.isDisabled = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} isActive
     * @return {?}
     */
    set isActive(isActive) {
        this._isActive = isActive;
        this.isDisabled = false;
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this._isActive;
    }
}
WizardStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-wizard-step',
                template: `
    <div [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `
            }] }
];
/** @nocollapse */
WizardStepComponent.ctorParameters = () => [];
WizardStepComponent.propDecorators = {
    activeStepIndex: [{ type: Input }],
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    hidden: [{ type: Input }],
    isValid: [{ type: Input }],
    isAllowed: [{ type: Input }],
    showNext: [{ type: Input }],
    showPrev: [{ type: Input }],
    onNext: [{ type: Output }],
    onPrev: [{ type: Output }],
    onComplete: [{ type: Output }],
    onCancel: [{ type: Output }],
    isActive: [{ type: Input, args: ['isActive',] }]
};
if (false) {
    /** @type {?} */
    WizardStepComponent.prototype.activeStepIndex;
    /** @type {?} */
    WizardStepComponent.prototype.title;
    /** @type {?} */
    WizardStepComponent.prototype.subtitle;
    /** @type {?} */
    WizardStepComponent.prototype.hidden;
    /** @type {?} */
    WizardStepComponent.prototype.isValid;
    /** @type {?} */
    WizardStepComponent.prototype.isAllowed;
    /** @type {?} */
    WizardStepComponent.prototype.showNext;
    /** @type {?} */
    WizardStepComponent.prototype.showPrev;
    /** @type {?} */
    WizardStepComponent.prototype.onNext;
    /** @type {?} */
    WizardStepComponent.prototype.onPrev;
    /** @type {?} */
    WizardStepComponent.prototype.onComplete;
    /** @type {?} */
    WizardStepComponent.prototype.onCancel;
    /** @type {?} */
    WizardStepComponent.prototype._isActive;
    /** @type {?} */
    WizardStepComponent.prototype.isDisabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91dGlsaXRpZXMvd2l6YXJkL3dpemFyZC1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXL0UsTUFBTSxPQUFPLG1CQUFtQjtJQXNCOUI7UUFsQlMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixjQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxJQUFJLENBQUM7O1FBR2YsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDOztRQUVwRCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7O1FBRXBELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7UUFFeEQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXpELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsZUFBVSxHQUFHLElBQUksQ0FBQztJQUVGLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsSUFBdUIsUUFBUSxDQUFDLFFBQWlCO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQ1I7Ozs7R0FJQzthQUNGOzs7Ozs4QkFFRSxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBR0wsTUFBTTtxQkFFTixNQUFNO3lCQUVOLE1BQU07dUJBRU4sTUFBTTt1QkFVTixLQUFLLFNBQUMsVUFBVTs7OztJQTFCakIsOENBQWlDOztJQUNqQyxvQ0FBdUI7O0lBQ3ZCLHVDQUEwQjs7SUFDMUIscUNBQXdCOztJQUN4QixzQ0FBd0I7O0lBQ3hCLHdDQUF3Qjs7SUFDeEIsdUNBQXlCOztJQUN6Qix1Q0FBeUI7O0lBR3pCLHFDQUE4RDs7SUFFOUQscUNBQThEOztJQUU5RCx5Q0FBa0U7O0lBRWxFLHVDQUFnRTs7SUFFaEUsd0NBQXlCOztJQUN6Qix5Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpaS13aXphcmQtc3RlcCcsXG4gIHRlbXBsYXRlOlxuICBgXG4gICAgPGRpdiBbaGlkZGVuXT1cIiFpc0FjdGl2ZVwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZFN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhY3RpdmVTdGVwSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc3VidGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgaGlkZGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzVmFsaWQgPSB0cnVlO1xuICBASW5wdXQoKSBpc0FsbG93ZWQgPSAtMTtcbiAgQElucHV0KCkgc2hvd05leHQgPSB0cnVlO1xuICBASW5wdXQoKSBzaG93UHJldiA9IHRydWU7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uTmV4dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uUHJldjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBvbkNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgX2lzQWN0aXZlID0gZmFsc2U7XG4gIGlzRGlzYWJsZWQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBASW5wdXQoJ2lzQWN0aXZlJykgc2V0IGlzQWN0aXZlKGlzQWN0aXZlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNBY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gIH1cblxufVxuIl19