/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/wizard/wizard.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { WizardStepComponent } from './wizard-step.component';
import { Subject } from 'rxjs';
var WizardComponent = /** @class */ (function () {
    function WizardComponent() {
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
    WizardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    WizardComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.wizardSteps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return _this._steps.push(step); }));
        if (this.steps.length) {
            this.steps[0].isActive = true;
        }
        if (this.wizardNextTrigger) {
            this.wizardNextTrigger.subscribe((/**
             * @param {?} step
             * @return {?}
             */
            function (step) {
                /** @type {?} */
                var nextStep = _this.steps[step];
                nextStep.isDisabled = false;
                _this.activeStep = nextStep;
            }));
        }
    };
    /**
     * @return {?}
     */
    WizardComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.forceStep) {
            // this.revertToStep(this.forceStep);
        }
    };
    Object.defineProperty(WizardComponent.prototype, "steps", {
        get: /**
         * @return {?}
         */
        function () {
            return this._steps.filter((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return !step.hidden; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "isCompleted", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this.steps.find((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.isActive; }));
        },
        set: /**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            if (step !== this.activeStep && !step.isDisabled) {
                this.activeStep.isActive = false;
                step.isActive = true;
                step.activeStepIndex = this.activeStepIndex;
                this.onStepChanged.emit(step);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStepIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.steps.indexOf(this.activeStep);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasNextStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeStepIndex < this.steps.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasPrevStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeStepIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} step
     * @return {?}
     */
    WizardComponent.prototype.goToStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
    };
    /**
     * @param {?} stepIndex
     * @return {?}
     */
    WizardComponent.prototype.revertToStep = /**
     * @param {?} stepIndex
     * @return {?}
     */
    function (stepIndex) {
        this._isCompleted = false;
        /** @type {?} */
        var nextStep = this.steps[stepIndex];
        this.goToStep(nextStep);
    };
    /**
     * @return {?}
     */
    WizardComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.hasNextStep) {
            this.activeStep.onNext.emit(this.activeStepIndex);
            if (this.wizardNextTrigger) {
                this.wizardNextTrigger.subscribe((/**
                 * @param {?} step
                 * @return {?}
                 */
                function (step) {
                    /** @type {?} */
                    var nextStep = _this.steps[step];
                    nextStep.isDisabled = false;
                    _this.activeStep = nextStep;
                }));
            }
            else {
                /** @type {?} */
                var nextStep = this.steps[this.activeStepIndex + 1];
                nextStep.isDisabled = false;
                this.activeStep = nextStep;
            }
        }
    };
    /**
     * @return {?}
     */
    WizardComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        if (this.hasPrevStep) {
            this.activeStep.onPrev.emit();
            /** @type {?} */
            var prevStep = this.steps[this.activeStepIndex - 1];
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
    };
    /**
     * @return {?}
     */
    WizardComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        this.activeStep.onComplete.emit();
        if (this.forceStep) {
            this.revertToStep(this.forceStep);
        }
        else {
            this._isCompleted = true;
        }
    };
    /**
     * @return {?}
     */
    WizardComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.activeStep.onCancel.emit();
    };
    WizardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-form-wizard',
                    template: "<div class=\"card\">\n    <div class=\"card-header\">\n      <ul class=\"nav nav-justified nav-wizard\">\n        <li\n          class=\"nav-item\"\n          *ngFor=\"let step of steps\"\n          [ngClass]=\"{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled, 'completed': isCompleted}\">\n          <a (click)=\"clickTabEnable ? goToStep(step) : false;\">\n            <h3>{{step.title}}</h3>\n            <p *ngIf=\"step.subtitle\">{{step.subtitle}}</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"card-block\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"card-footer\" [hidden]=\"isCompleted\">\n        <button type=\"button\" class=\"btn btn-default float-left\" (click)=\"cancel()\">{{ pagingLabel.cancel }}</button>\n        <button\n          type=\"button\"\n          class=\"btn btn-success pull-right\"\n          (click)=\"complete()\"\n          [disabled]=\"!activeStep.isValid || formSubmitting\"\n          [hidden]=\"hasNextStep\">\n            {{ pagingLabel.done }}\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary pull-right\"\n          (click)=\"next()\"\n          [disabled]=\"!activeStep.isValid\"\n          [hidden]=\"!hasNextStep || !activeStep.showNext\">\n            {{ pagingLabel.next }} <span class=\"fa fa-arrow-right\"></span>\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-default pull-right\"\n          (click)=\"previous()\"\n          [hidden]=\"!hasPrevStep || !activeStep.showPrev\">\n            <span class=\"fa fa-arrow-left\"></span> {{ pagingLabel.previous }}\n        </button>\n    </div>\n  </div>",
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
    WizardComponent.ctorParameters = function () { return []; };
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
    return WizardComponent;
}());
export { WizardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXRpbGl0aWVzL3dpemFyZC93aXphcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUN4SSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CO0lBOEVFO1FBaEJPLFdBQU0sR0FBK0IsRUFBRSxDQUFDO1FBQ3hDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGNBQVMsR0FBRyxRQUFRLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxVQUFVLENBQUM7UUFDekIsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQUNqQixZQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBRXRCLG1CQUFjLEdBQUcsS0FBSyxDQUFDOztRQUt0QixrQkFBYSxHQUFzQyxJQUFJLFlBQVksRUFBdUIsQ0FBQztJQUVyRixDQUFDOzs7O0lBRWpCLGtDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCw0Q0FBa0I7OztJQUFsQjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxD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QVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFDUiwrckRBMkNPOzZCQUdMLHlCQUF5Qjt3QkFDekIsMEVBQTBFO3dCQUMxRSw4REFBOEQ7d0JBQzlELHVGQUF1Rjt3QkFDdkYsdUVBQXVFO3dCQUN2RSw0QkFBNEI7d0JBQzVCLGlDQUFpQztpQkFFcEM7Ozs7OzhCQUVFLGVBQWUsU0FBQyxtQkFBbUI7NEJBTW5DLEtBQUs7OEJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7aUNBQ0wsS0FBSzs0QkFDTCxLQUFLO2lDQUNMLEtBQUs7OEJBQ0wsS0FBSztvQ0FDTCxLQUFLO2dDQUdMLE1BQU07O0lBbUhULHNCQUFDO0NBQUEsQUEvTEQsSUErTEM7U0FySVksZUFBZTs7O0lBQzFCLHNDQUM0Qzs7SUFFNUMsaUNBQStDOztJQUMvQyx1Q0FBNEI7O0lBRTVCLG9DQUE4Qjs7SUFDOUIsc0NBQWtDOztJQUNsQyxrQ0FBMEI7O0lBQzFCLGtDQUEwQjs7SUFDMUIseUNBQStCOztJQUMvQixvQ0FBMkI7O0lBQzNCLHlDQUFnQzs7SUFDaEMsc0NBQTBCOztJQUMxQiw0Q0FBeUM7O0lBR3pDLHdDQUFxRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpemFyZFN0ZXBDb21wb25lbnQgfSBmcm9tICcuL3dpemFyZC1zdGVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpaS1mb3JtLXdpemFyZCcsXG4gIHRlbXBsYXRlOlxuICBgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtanVzdGlmaWVkIG5hdi13aXphcmRcIj5cbiAgICAgICAgPGxpXG4gICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHNcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogc3RlcC5pc0FjdGl2ZSwgJ2VuYWJsZWQnOiAhc3RlcC5pc0Rpc2FibGVkLCAnZGlzYWJsZWQnOiBzdGVwLmlzRGlzYWJsZWQsICdjb21wbGV0ZWQnOiBpc0NvbXBsZXRlZH1cIj5cbiAgICAgICAgICA8YSAoY2xpY2spPVwiY2xpY2tUYWJFbmFibGUgPyBnb1RvU3RlcChzdGVwKSA6IGZhbHNlO1wiPlxuICAgICAgICAgICAgPGgzPnt7c3RlcC50aXRsZX19PC9oMz5cbiAgICAgICAgICAgIDxwICpuZ0lmPVwic3RlcC5zdWJ0aXRsZVwiPnt7c3RlcC5zdWJ0aXRsZX19PC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYmxvY2tcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIiBbaGlkZGVuXT1cImlzQ29tcGxldGVkXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGZsb2F0LWxlZnRcIiAoY2xpY2spPVwiY2FuY2VsKClcIj57eyBwYWdpbmdMYWJlbC5jYW5jZWwgfX08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHB1bGwtcmlnaHRcIlxuICAgICAgICAgIChjbGljayk9XCJjb21wbGV0ZSgpXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiIWFjdGl2ZVN0ZXAuaXNWYWxpZCB8fCBmb3JtU3VibWl0dGluZ1wiXG4gICAgICAgICAgW2hpZGRlbl09XCJoYXNOZXh0U3RlcFwiPlxuICAgICAgICAgICAge3sgcGFnaW5nTGFiZWwuZG9uZSB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHRcIlxuICAgICAgICAgIChjbGljayk9XCJuZXh0KClcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCIhYWN0aXZlU3RlcC5pc1ZhbGlkXCJcbiAgICAgICAgICBbaGlkZGVuXT1cIiFoYXNOZXh0U3RlcCB8fCAhYWN0aXZlU3RlcC5zaG93TmV4dFwiPlxuICAgICAgICAgICAge3sgcGFnaW5nTGFiZWwubmV4dCB9fSA8c3BhbiBjbGFzcz1cImZhIGZhLWFycm93LXJpZ2h0XCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHB1bGwtcmlnaHRcIlxuICAgICAgICAgIChjbGljayk9XCJwcmV2aW91cygpXCJcbiAgICAgICAgICBbaGlkZGVuXT1cIiFoYXNQcmV2U3RlcCB8fCAhYWN0aXZlU3RlcC5zaG93UHJldlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1hcnJvdy1sZWZ0XCI+PC9zcGFuPiB7eyBwYWdpbmdMYWJlbC5wcmV2aW91cyB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YFxuICAsXG4gIHN0eWxlczogW1xuICAgICcuY2FyZCB7IGhlaWdodDogMTAwJTsgfScsXG4gICAgJy5jYXJkLWhlYWRlciB7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7IHBhZGRpbmc6IDA7IGZvbnQtc2l6ZTogMS4yNXJlbTsgfScsXG4gICAgJy5jYXJkLWZvb3RlciB7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci10b3A6IDAgbm9uZTsgfScsXG4gICAgJy5hY3RpdmUgeyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6IGJsYWNrOyBib3JkZXItYm90dG9tLWNvbG9yOiAjMTk3NkQyICFpbXBvcnRhbnQ7IH0nLFxuICAgICcuZW5hYmxlZCB7IGN1cnNvcjogcG9pbnRlcjsgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDg4LCAxNjIsIDIzNCk7IH0nLFxuICAgICcuZGlzYWJsZWQgeyBjb2xvcjogI2NjYzsgfScsXG4gICAgJy5jb21wbGV0ZWQgeyBjdXJzb3I6IGRlZmF1bHQ7IH0nXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICBAQ29udGVudENoaWxkcmVuKFdpemFyZFN0ZXBDb21wb25lbnQpXG4gIHdpemFyZFN0ZXBzOiBRdWVyeUxpc3Q8V2l6YXJkU3RlcENvbXBvbmVudD47XG5cbiAgcHVibGljIF9zdGVwczogQXJyYXk8V2l6YXJkU3RlcENvbXBvbmVudD4gPSBbXTtcbiAgcHVibGljIF9pc0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNhbmNlbExibCA9ICdDYW5jZWwnO1xuICBASW5wdXQoKSBwcmV2aW91c0xibCA9ICdQcmV2aW91cyc7XG4gIEBJbnB1dCgpIG5leHRMYmwgPSAnTmV4dCc7XG4gIEBJbnB1dCgpIGRvbmVMYmwgPSAnRG9uZSc7XG4gIEBJbnB1dCgpIGNsaWNrVGFiRW5hYmxlID0gdHJ1ZTtcbiAgQElucHV0KCkgZm9yY2VTdGVwOiBudW1iZXI7XG4gIEBJbnB1dCgpIGZvcm1TdWJtaXR0aW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBhZ2luZ0xhYmVsOiBhbnk7XG4gIEBJbnB1dCgpIHdpemFyZE5leHRUcmlnZ2VyOiBTdWJqZWN0PGFueT47XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uU3RlcENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxXaXphcmRTdGVwQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8V2l6YXJkU3RlcENvbXBvbmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMud2l6YXJkU3RlcHMuZm9yRWFjaChzdGVwID0+IHRoaXMuX3N0ZXBzLnB1c2goc3RlcCkpO1xuICAgIGlmICh0aGlzLnN0ZXBzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdGVwc1swXS5pc0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMud2l6YXJkTmV4dFRyaWdnZXIpIHtcbiAgICAgIHRoaXMud2l6YXJkTmV4dFRyaWdnZXIuc3Vic2NyaWJlKHN0ZXAgPT4ge1xuICAgICAgICBjb25zdCBuZXh0U3RlcDogV2l6YXJkU3RlcENvbXBvbmVudCA9IHRoaXMuc3RlcHNbc3RlcF07XG4gICAgICAgIG5leHRTdGVwLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmVTdGVwID0gbmV4dFN0ZXA7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5mb3JjZVN0ZXApIHtcbiAgICAgIC8vIHRoaXMucmV2ZXJ0VG9TdGVwKHRoaXMuZm9yY2VTdGVwKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0ZXBzKCk6IEFycmF5PFdpemFyZFN0ZXBDb21wb25lbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcHMuZmlsdGVyKHN0ZXAgPT4gIXN0ZXAuaGlkZGVuKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNDb21wbGV0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQ29tcGxldGVkO1xuICB9XG5cbiAgcHVibGljIGdldCBhY3RpdmVTdGVwKCk6IFdpemFyZFN0ZXBDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmlzQWN0aXZlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgYWN0aXZlU3RlcChzdGVwOiBXaXphcmRTdGVwQ29tcG9uZW50KSB7XG4gICAgaWYgKHN0ZXAgIT09IHRoaXMuYWN0aXZlU3RlcCAmJiAhc3RlcC5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZVN0ZXAuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHN0ZXAuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgc3RlcC5hY3RpdmVTdGVwSW5kZXggPSB0aGlzLmFjdGl2ZVN0ZXBJbmRleDtcbiAgICAgIHRoaXMub25TdGVwQ2hhbmdlZC5lbWl0KHN0ZXApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWN0aXZlU3RlcEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHMuaW5kZXhPZih0aGlzLmFjdGl2ZVN0ZXApO1xuICB9XG5cbiAgcHVibGljIGdldCBoYXNOZXh0U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVTdGVwSW5kZXggPCB0aGlzLnN0ZXBzLmxlbmd0aCAtIDE7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhhc1ByZXZTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVN0ZXBJbmRleCA+IDA7XG4gIH1cblxuICBnb1RvU3RlcChzdGVwOiBXaXphcmRTdGVwQ29tcG9uZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzQ29tcGxldGVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSBzdGVwO1xuICAgIH1cbiAgfVxuXG4gIHJldmVydFRvU3RlcChzdGVwSW5kZXg6IGFueSkge1xuICAgIHRoaXMuX2lzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgY29uc3QgbmV4dFN0ZXA6IFdpemFyZFN0ZXBDb21wb25lbnQgPSB0aGlzLnN0ZXBzW3N0ZXBJbmRleF07XG4gICAgdGhpcy5nb1RvU3RlcChuZXh0U3RlcCk7XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGlmICh0aGlzLmhhc05leHRTdGVwKSB7XG4gICAgICB0aGlzLmFjdGl2ZVN0ZXAub25OZXh0LmVtaXQodGhpcy5hY3RpdmVTdGVwSW5kZXgpO1xuXG4gICAgICBpZiAodGhpcy53aXphcmROZXh0VHJpZ2dlcikge1xuICAgICAgICB0aGlzLndpemFyZE5leHRUcmlnZ2VyLnN1YnNjcmliZShzdGVwID0+IHtcbiAgICAgICAgICBjb25zdCBuZXh0U3RlcDogV2l6YXJkU3RlcENvbXBvbmVudCA9IHRoaXMuc3RlcHNbc3RlcF07XG4gICAgICAgICAgbmV4dFN0ZXAuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYWN0aXZlU3RlcCA9IG5leHRTdGVwO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5leHRTdGVwOiBXaXphcmRTdGVwQ29tcG9uZW50ID0gdGhpcy5zdGVwc1t0aGlzLmFjdGl2ZVN0ZXBJbmRleCArIDFdO1xuICAgICAgICBuZXh0U3RlcC5pc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcCA9IG5leHRTdGVwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByZXZpb3VzKCkge1xuICAgIGlmICh0aGlzLmhhc1ByZXZTdGVwKSB7XG4gICAgICB0aGlzLmFjdGl2ZVN0ZXAub25QcmV2LmVtaXQoKTtcblxuICAgICAgY29uc3QgcHJldlN0ZXA6IFdpemFyZFN0ZXBDb21wb25lbnQgPSB0aGlzLnN0ZXBzW3RoaXMuYWN0aXZlU3RlcEluZGV4IC0gMV07XG4gICAgICBwcmV2U3RlcC5pc0Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuYWN0aXZlU3RlcCA9IHByZXZTdGVwO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHRoaXMuYWN0aXZlU3RlcC5vbkNvbXBsZXRlLmVtaXQoKTtcbiAgICBpZiAodGhpcy5mb3JjZVN0ZXApIHtcbiAgICAgIHRoaXMucmV2ZXJ0VG9TdGVwKHRoaXMuZm9yY2VTdGVwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLmFjdGl2ZVN0ZXAub25DYW5jZWwuZW1pdCgpO1xuICB9XG5cbn1cbiJdfQ==