/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/wizard/wizard.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { WizardStepComponent } from './wizard-step.component';
import { Subject } from 'rxjs';
export class WizardComponent {
    constructor() {
        this._steps = [];
        this._isCompleted = false;
        this.cancelLbl = 'Cancel';
        this.previousLbl = 'Previous';
        this.nextLbl = 'Next';
        this.doneLbl = 'Done';
        this.clickTabEnable = true;
        this.formSubmitting = false;
        // tslint:disable-next-line:no-output-on-prefix
        this.onStepChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.wizardSteps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        step => this._steps.push(step)));
        if (this.steps.length) {
            this.steps[0].isActive = true;
        }
        if (this.wizardNextTrigger) {
            this.wizardNextTrigger.subscribe((/**
             * @param {?} step
             * @return {?}
             */
            step => {
                /** @type {?} */
                const nextStep = this.steps[step];
                nextStep.isDisabled = false;
                this.activeStep = nextStep;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.forceStep) {
            // this.revertToStep(this.forceStep);
        }
    }
    /**
     * @return {?}
     */
    get steps() {
        return this._steps.filter((/**
         * @param {?} step
         * @return {?}
         */
        step => !step.hidden));
    }
    /**
     * @return {?}
     */
    get isCompleted() {
        return this._isCompleted;
    }
    /**
     * @return {?}
     */
    get activeStep() {
        return this.steps.find((/**
         * @param {?} step
         * @return {?}
         */
        step => step.isActive));
    }
    /**
     * @param {?} step
     * @return {?}
     */
    set activeStep(step) {
        if (step !== this.activeStep && !step.isDisabled) {
            this.activeStep.isActive = false;
            step.isActive = true;
            step.activeStepIndex = this.activeStepIndex;
            this.onStepChanged.emit(step);
        }
    }
    /**
     * @return {?}
     */
    get activeStepIndex() {
        return this.steps.indexOf(this.activeStep);
    }
    /**
     * @return {?}
     */
    get hasNextStep() {
        return this.activeStepIndex < this.steps.length - 1;
    }
    /**
     * @return {?}
     */
    get hasPrevStep() {
        return this.activeStepIndex > 0;
    }
    /**
     * @param {?} step
     * @return {?}
     */
    goToStep(step) {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
    }
    /**
     * @param {?} stepIndex
     * @return {?}
     */
    revertToStep(stepIndex) {
        this._isCompleted = false;
        /** @type {?} */
        const nextStep = this.steps[stepIndex];
        this.goToStep(nextStep);
    }
    /**
     * @return {?}
     */
    next() {
        if (this.hasNextStep) {
            this.activeStep.onNext.emit(this.activeStepIndex);
            if (this.wizardNextTrigger) {
                this.wizardNextTrigger.subscribe((/**
                 * @param {?} step
                 * @return {?}
                 */
                step => {
                    /** @type {?} */
                    const nextStep = this.steps[step];
                    nextStep.isDisabled = false;
                    this.activeStep = nextStep;
                }));
            }
            else {
                /** @type {?} */
                const nextStep = this.steps[this.activeStepIndex + 1];
                nextStep.isDisabled = false;
                this.activeStep = nextStep;
            }
        }
    }
    /**
     * @return {?}
     */
    previous() {
        if (this.hasPrevStep) {
            this.activeStep.onPrev.emit();
            /** @type {?} */
            const prevStep = this.steps[this.activeStepIndex - 1];
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
    }
    /**
     * @return {?}
     */
    complete() {
        this.activeStep.onComplete.emit();
        if (this.forceStep) {
            this.revertToStep(this.forceStep);
        }
        else {
            this._isCompleted = true;
        }
    }
    /**
     * @return {?}
     */
    cancel() {
        this.activeStep.onCancel.emit();
    }
}
WizardComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-form-wizard',
                template: `<div class="card">
    <div class="card-header">
      <ul class="nav nav-justified nav-wizard">
        <li
          class="nav-item"
          *ngFor="let step of steps"
          [ngClass]="{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled, 'completed': isCompleted}">
          <a (click)="clickTabEnable ? goToStep(step) : false;">
            <h3>{{step.title}}</h3>
            <p *ngIf="step.subtitle">{{step.subtitle}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="card-block">
      <ng-content></ng-content>
    </div>
    <div class="card-footer" [hidden]="isCompleted">
        <button type="button" class="btn btn-default float-left" (click)="cancel()">{{ pagingLabel.cancel }}</button>
        <button
          type="button"
          class="btn btn-success pull-right"
          (click)="complete()"
          [disabled]="!activeStep.isValid || formSubmitting"
          [hidden]="hasNextStep">
            {{ pagingLabel.done }}
        </button>
        <button
          type="button"
          class="btn btn-primary pull-right"
          (click)="next()"
          [disabled]="!activeStep.isValid"
          [hidden]="!hasNextStep || !activeStep.showNext">
            {{ pagingLabel.next }} <span class="fa fa-arrow-right"></span>
        </button>
        <button
          type="button"
          class="btn btn-default pull-right"
          (click)="previous()"
          [hidden]="!hasPrevStep || !activeStep.showPrev">
            <span class="fa fa-arrow-left"></span> {{ pagingLabel.previous }}
        </button>
    </div>
  </div>`,
                styles: ['.card { height: 100%; }',
                    '.card-header { background-color: #fff; padding: 0; font-size: 1.25rem; }',
                    '.card-footer { background-color: #fff; border-top: 0 none; }',
                    '.active { font-weight: bold; color: black; border-bottom-color: #1976D2 !important; }',
                    '.enabled { cursor: pointer; border-bottom-color: rgb(88, 162, 234); }',
                    '.disabled { color: #ccc; }',
                    '.completed { cursor: default; }']
            }] }
];
/** @nocollapse */
WizardComponent.ctorParameters = () => [];
WizardComponent.propDecorators = {
    wizardSteps: [{ type: ContentChildren, args: [WizardStepComponent,] }],
    cancelLbl: [{ type: Input }],
    previousLbl: [{ type: Input }],
    nextLbl: [{ type: Input }],
    doneLbl: [{ type: Input }],
    clickTabEnable: [{ type: Input }],
    forceStep: [{ type: Input }],
    formSubmitting: [{ type: Input }],
    pagingLabel: [{ type: Input }],
    wizardNextTrigger: [{ type: Input }],
    onStepChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    WizardComponent.prototype.wizardSteps;
    /** @type {?} */
    WizardComponent.prototype._steps;
    /** @type {?} */
    WizardComponent.prototype._isCompleted;
    /** @type {?} */
    WizardComponent.prototype.cancelLbl;
    /** @type {?} */
    WizardComponent.prototype.previousLbl;
    /** @type {?} */
    WizardComponent.prototype.nextLbl;
    /** @type {?} */
    WizardComponent.prototype.doneLbl;
    /** @type {?} */
    WizardComponent.prototype.clickTabEnable;
    /** @type {?} */
    WizardComponent.prototype.forceStep;
    /** @type {?} */
    WizardComponent.prototype.formSubmitting;
    /** @type {?} */
    WizardComponent.prototype.pagingLabel;
    /** @type {?} */
    WizardComponent.prototype.wizardNextTrigger;
    /** @type {?} */
    WizardComponent.prototype.onStepChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXRpbGl0aWVzL3dpemFyZC93aXphcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUN4SSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBNEQvQixNQUFNLE9BQU8sZUFBZTtJQW9CMUI7UUFoQk8sV0FBTSxHQUErQixFQUFFLENBQUM7UUFDeEMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNyQixnQkFBVyxHQUFHLFVBQVUsQ0FBQztRQUN6QixZQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxNQUFNLENBQUM7UUFDakIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFFdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7O1FBS3RCLGtCQUFhLEdBQXNDLElBQUksWUFBWSxFQUF1QixDQUFDO0lBRXJGLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQy9CO1FBRUQsSUFBSSxJ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Qzs7Ozs7MEJBRUUsZUFBZSxTQUFDLG1CQUFtQjt3QkFNbkMsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7NEJBR0wsTUFBTTs7OztJQWpCUCxzQ0FDNEM7O0lBRTVDLGlDQUErQzs7SUFDL0MsdUNBQTRCOztJQUU1QixvQ0FBOEI7O0lBQzlCLHNDQUFrQzs7SUFDbEMsa0NBQTBCOztJQUMxQixrQ0FBMEI7O0lBQzFCLHlDQUErQjs7SUFDL0Isb0NBQTJCOztJQUMzQix5Q0FBZ0M7O0lBQ2hDLHNDQUEwQjs7SUFDMUIsNENBQXlDOztJQUd6Qyx3Q0FBcUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaXphcmRTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi93aXphcmQtc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWktZm9ybS13aXphcmQnLFxuICB0ZW1wbGF0ZTpcbiAgYDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LWp1c3RpZmllZCBuYXYtd2l6YXJkXCI+XG4gICAgICAgIDxsaVxuICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IHN0ZXAuaXNBY3RpdmUsICdlbmFibGVkJzogIXN0ZXAuaXNEaXNhYmxlZCwgJ2Rpc2FibGVkJzogc3RlcC5pc0Rpc2FibGVkLCAnY29tcGxldGVkJzogaXNDb21wbGV0ZWR9XCI+XG4gICAgICAgICAgPGEgKGNsaWNrKT1cImNsaWNrVGFiRW5hYmxlID8gZ29Ub1N0ZXAoc3RlcCkgOiBmYWxzZTtcIj5cbiAgICAgICAgICAgIDxoMz57e3N0ZXAudGl0bGV9fTwvaDM+XG4gICAgICAgICAgICA8cCAqbmdJZj1cInN0ZXAuc3VidGl0bGVcIj57e3N0ZXAuc3VidGl0bGV9fTwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJsb2NrXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCIgW2hpZGRlbl09XCJpc0NvbXBsZXRlZFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBmbG9hdC1sZWZ0XCIgKGNsaWNrKT1cImNhbmNlbCgpXCI+e3sgcGFnaW5nTGFiZWwuY2FuY2VsIH19PC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBwdWxsLXJpZ2h0XCJcbiAgICAgICAgICAoY2xpY2spPVwiY29tcGxldGUoKVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIiFhY3RpdmVTdGVwLmlzVmFsaWQgfHwgZm9ybVN1Ym1pdHRpbmdcIlxuICAgICAgICAgIFtoaWRkZW5dPVwiaGFzTmV4dFN0ZXBcIj5cbiAgICAgICAgICAgIHt7IHBhZ2luZ0xhYmVsLmRvbmUgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBwdWxsLXJpZ2h0XCJcbiAgICAgICAgICAoY2xpY2spPVwibmV4dCgpXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiIWFjdGl2ZVN0ZXAuaXNWYWxpZFwiXG4gICAgICAgICAgW2hpZGRlbl09XCIhaGFzTmV4dFN0ZXAgfHwgIWFjdGl2ZVN0ZXAuc2hvd05leHRcIj5cbiAgICAgICAgICAgIHt7IHBhZ2luZ0xhYmVsLm5leHQgfX0gPHNwYW4gY2xhc3M9XCJmYSBmYS1hcnJvdy1yaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0XCJcbiAgICAgICAgICAoY2xpY2spPVwicHJldmlvdXMoKVwiXG4gICAgICAgICAgW2hpZGRlbl09XCIhaGFzUHJldlN0ZXAgfHwgIWFjdGl2ZVN0ZXAuc2hvd1ByZXZcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdFwiPjwvc3Bhbj4ge3sgcGFnaW5nTGFiZWwucHJldmlvdXMgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmBcbiAgLFxuICBzdHlsZXM6IFtcbiAgICAnLmNhcmQgeyBoZWlnaHQ6IDEwMCU7IH0nLFxuICAgICcuY2FyZC1oZWFkZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBwYWRkaW5nOiAwOyBmb250LXNpemU6IDEuMjVyZW07IH0nLFxuICAgICcuY2FyZC1mb290ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBib3JkZXItdG9wOiAwIG5vbmU7IH0nLFxuICAgICcuYWN0aXZlIHsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiBibGFjazsgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzE5NzZEMiAhaW1wb3J0YW50OyB9JyxcbiAgICAnLmVuYWJsZWQgeyBjdXJzb3I6IHBvaW50ZXI7IGJvcmRlci1ib3R0b20tY29sb3I6IHJnYig4OCwgMTYyLCAyMzQpOyB9JyxcbiAgICAnLmRpc2FibGVkIHsgY29sb3I6ICNjY2M7IH0nLFxuICAgICcuY29tcGxldGVkIHsgY3Vyc29yOiBkZWZhdWx0OyB9J1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgQENvbnRlbnRDaGlsZHJlbihXaXphcmRTdGVwQ29tcG9uZW50KVxuICB3aXphcmRTdGVwczogUXVlcnlMaXN0PFdpemFyZFN0ZXBDb21wb25lbnQ+O1xuXG4gIHB1YmxpYyBfc3RlcHM6IEFycmF5PFdpemFyZFN0ZXBDb21wb25lbnQ+ID0gW107XG4gIHB1YmxpYyBfaXNDb21wbGV0ZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKSBjYW5jZWxMYmwgPSAnQ2FuY2VsJztcbiAgQElucHV0KCkgcHJldmlvdXNMYmwgPSAnUHJldmlvdXMnO1xuICBASW5wdXQoKSBuZXh0TGJsID0gJ05leHQnO1xuICBASW5wdXQoKSBkb25lTGJsID0gJ0RvbmUnO1xuICBASW5wdXQoKSBjbGlja1RhYkVuYWJsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGZvcmNlU3RlcDogbnVtYmVyO1xuICBASW5wdXQoKSBmb3JtU3VibWl0dGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBwYWdpbmdMYWJlbDogYW55O1xuICBASW5wdXQoKSB3aXphcmROZXh0VHJpZ2dlcjogU3ViamVjdDxhbnk+O1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBvblN0ZXBDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8V2l6YXJkU3RlcENvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFdpemFyZFN0ZXBDb21wb25lbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLndpemFyZFN0ZXBzLmZvckVhY2goc3RlcCA9PiB0aGlzLl9zdGVwcy5wdXNoKHN0ZXApKTtcbiAgICBpZiAodGhpcy5zdGVwcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3RlcHNbMF0uaXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLndpemFyZE5leHRUcmlnZ2VyKSB7XG4gICAgICB0aGlzLndpemFyZE5leHRUcmlnZ2VyLnN1YnNjcmliZShzdGVwID0+IHtcbiAgICAgICAgY29uc3QgbmV4dFN0ZXA6IFdpemFyZFN0ZXBDb21wb25lbnQgPSB0aGlzLnN0ZXBzW3N0ZXBdO1xuICAgICAgICBuZXh0U3RlcC5pc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcCA9IG5leHRTdGVwO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuZm9yY2VTdGVwKSB7XG4gICAgICAvLyB0aGlzLnJldmVydFRvU3RlcCh0aGlzLmZvcmNlU3RlcCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzdGVwcygpOiBBcnJheTxXaXphcmRTdGVwQ29tcG9uZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXBzLmZpbHRlcihzdGVwID0+ICFzdGVwLmhpZGRlbik7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ29tcGxldGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0NvbXBsZXRlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWN0aXZlU3RlcCgpOiBXaXphcmRTdGVwQ29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5pc0FjdGl2ZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0IGFjdGl2ZVN0ZXAoc3RlcDogV2l6YXJkU3RlcENvbXBvbmVudCkge1xuICAgIGlmIChzdGVwICE9PSB0aGlzLmFjdGl2ZVN0ZXAgJiYgIXN0ZXAuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5hY3RpdmVTdGVwLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICBzdGVwLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgIHN0ZXAuYWN0aXZlU3RlcEluZGV4ID0gdGhpcy5hY3RpdmVTdGVwSW5kZXg7XG4gICAgICB0aGlzLm9uU3RlcENoYW5nZWQuZW1pdChzdGVwKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFjdGl2ZVN0ZXBJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzLmluZGV4T2YodGhpcy5hY3RpdmVTdGVwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzTmV4dFN0ZXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlU3RlcEluZGV4IDwgdGhpcy5zdGVwcy5sZW5ndGggLSAxO1xuICB9XG5cbiAgcHVibGljIGdldCBoYXNQcmV2U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVTdGVwSW5kZXggPiAwO1xuICB9XG5cbiAgZ29Ub1N0ZXAoc3RlcDogV2l6YXJkU3RlcENvbXBvbmVudCkge1xuICAgIGlmICghdGhpcy5pc0NvbXBsZXRlZCkge1xuICAgICAgdGhpcy5hY3RpdmVTdGVwID0gc3RlcDtcbiAgICB9XG4gIH1cblxuICByZXZlcnRUb1N0ZXAoc3RlcEluZGV4OiBhbnkpIHtcbiAgICB0aGlzLl9pc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IG5leHRTdGVwOiBXaXphcmRTdGVwQ29tcG9uZW50ID0gdGhpcy5zdGVwc1tzdGVwSW5kZXhdO1xuICAgIHRoaXMuZ29Ub1N0ZXAobmV4dFN0ZXApO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBpZiAodGhpcy5oYXNOZXh0U3RlcCkge1xuICAgICAgdGhpcy5hY3RpdmVTdGVwLm9uTmV4dC5lbWl0KHRoaXMuYWN0aXZlU3RlcEluZGV4KTtcblxuICAgICAgaWYgKHRoaXMud2l6YXJkTmV4dFRyaWdnZXIpIHtcbiAgICAgICAgdGhpcy53aXphcmROZXh0VHJpZ2dlci5zdWJzY3JpYmUoc3RlcCA9PiB7XG4gICAgICAgICAgY29uc3QgbmV4dFN0ZXA6IFdpemFyZFN0ZXBDb21wb25lbnQgPSB0aGlzLnN0ZXBzW3N0ZXBdO1xuICAgICAgICAgIG5leHRTdGVwLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSBuZXh0U3RlcDtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXh0U3RlcDogV2l6YXJkU3RlcENvbXBvbmVudCA9IHRoaXMuc3RlcHNbdGhpcy5hY3RpdmVTdGVwSW5kZXggKyAxXTtcbiAgICAgICAgbmV4dFN0ZXAuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSBuZXh0U3RlcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcmV2aW91cygpIHtcbiAgICBpZiAodGhpcy5oYXNQcmV2U3RlcCkge1xuICAgICAgdGhpcy5hY3RpdmVTdGVwLm9uUHJldi5lbWl0KCk7XG5cbiAgICAgIGNvbnN0IHByZXZTdGVwOiBXaXphcmRTdGVwQ29tcG9uZW50ID0gdGhpcy5zdGVwc1t0aGlzLmFjdGl2ZVN0ZXBJbmRleCAtIDFdO1xuICAgICAgcHJldlN0ZXAuaXNEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSBwcmV2U3RlcDtcbiAgICB9XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLmFjdGl2ZVN0ZXAub25Db21wbGV0ZS5lbWl0KCk7XG4gICAgaWYgKHRoaXMuZm9yY2VTdGVwKSB7XG4gICAgICB0aGlzLnJldmVydFRvU3RlcCh0aGlzLmZvcmNlU3RlcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2lzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5hY3RpdmVTdGVwLm9uQ2FuY2VsLmVtaXQoKTtcbiAgfVxuXG59XG4iXX0=