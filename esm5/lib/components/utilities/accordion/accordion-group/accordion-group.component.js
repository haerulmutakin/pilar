/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/accordion/accordion-group/accordion-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { AccordionService } from './../../../../services/accordion.service';
import { AccordionComponent } from '../accordion.component';
var AccordionGroupComponent = /** @class */ (function () {
    function AccordionGroupComponent(accordionSvc, accordion) {
        this.accordionSvc = accordionSvc;
        /**
         * initialize accordion group condition
         */
        this.isOpen = false;
        /**
         * disable an accordion
         */
        this.isDisabled = false;
        /**
         * an emitter which will trigerred if user open/close a panel
         */
        this.isOpenChange = new EventEmitter();
        /**
         * enable/disable isAnimated for button
         */
        this.isAnimated = false;
        this.currentClass = 'uii-accordion-group-heading panel-default';
        this.accordion = accordion;
    }
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.accordion.addGroup(this);
        this.initIsAnimated();
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.initIsAnimated = /**
     * @return {?}
     */
    function () {
        this.isAnimated = this.accordionSvc.getIsAnimated();
    };
    /**
     * @return {?}
     */
    AccordionGroupComponent.prototype.panelClicked = /**
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
            this.accordionSvc.setIsOpen(this.isOpen);
            this.accordion.closeOthersPanels(this);
            this.isOpenChange.emit(this.isOpen);
        }
    };
    AccordionGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-accordion-group',
                    template: "\n    <div\n      class=\"uii-accordion-group panel-default\"\n      [ngClass]=\"{\n        'panel-primary': this.panelClass === 'panel-primary',\n        'panel-secondary': this.panelClass === 'panel-secondary',\n        'panel-tertiary': this.panelClass === 'panel-tertiary',\n        'panel-info': this.panelClass === 'panel-info',\n        'panel-warning': this.panelClass === 'panel-warning',\n        'panel-danger': this.panelClass === 'panel-danger'\n      }\">\n      <div (click)=\"panelClicked()\"\n           [class]=\"currentClass\"\n           [ngClass]=\"{\n              'disabled': isDisabled,\n              'panel-primary': this.panelClass === 'panel-primary',\n              'panel-secondary': this.panelClass === 'panel-secondary',\n              'panel-tertiary': this.panelClass === 'panel-tertiary',\n              'panel-info': this.panelClass === 'panel-info',\n              'panel-warning': this.panelClass === 'panel-warning',\n              'panel-danger': this.panelClass === 'panel-danger'\n            }\">\n        <h4 *ngIf=\"heading; else noHeading\">\n          {{ heading }}\n          <span class=\"animate-button\" *ngIf=\"isAnimated; else nonAnimate\">\n            <i class=\"fa fa-chevron-down\"\n               [ngClass]=\"{ 'open': isOpen }\"></i>\n          </span>\n          <ng-template #nonAnimate>\n            <span class=\"non-animate-button\">\n              <i class=\"fa fa-chevron-down\"\n                [ngClass]=\"{ 'open': isOpen }\"></i>\n            </span>\n          </ng-template>\n        </h4>\n        <ng-template #noHeading>\n          <h4>\n            <ng-content select=\"[uii-accordion-heading]\"></ng-content>\n          </h4>\n        </ng-template>\n      </div>\n      <div uiiCollapse [isOpen]=\"isOpen\" [selectedGroup]=\"isOpen\" class=\"uii-accordion-group-content uii-accordion-group-content-none uii-accordion-group-content-hide\">\n        <div>\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: [".relative{position:relative}.uii-accordion-group{padding:1px;box-shadow:0 6px 15px rgba(36,37,38,.08);margin-bottom:2rem}.uii-accordion-group-heading>h4{font-size:14px;color:#fff;padding:1.5rem;position:relative!important;margin:0}.uii-accordion-group-heading>h4>span.animate-button:first-child{position:absolute;top:30%;right:0;margin-right:2rem}.uii-accordion-group-heading>h4>span.animate-button:first-child>i{color:#fff;transition:.25s ease-in-out}.uii-accordion-group-heading>h4>span.animate-button:first-child>i.open{transform:rotate(180deg)}.uii-accordion-group-heading>h4>span.non-animate-button:first-child{position:absolute;top:30%;right:0;margin-right:2rem}.uii-accordion-group-heading>h4>span.non-animate-button:first-child>i{color:#fff}.uii-accordion-group-heading>h4>span.non-animate-button:first-child>i.open{transform:rotate(180deg)}.uii-accordion-group-heading:hover{cursor:pointer}.uii-accordion-group-heading.disabled{background-color:#bdbdbd!important}.uii-accordion-group-heading.disabled:hover{cursor:default!important}.uii-accordion-group-content{transition:.25s ease-in-out;background-color:#f5f5f5}.uii-accordion-group-content-none{display:none}.uii-accordion-group-content-none>div{padding:15px}.uii-accordion-group-content-hide{max-height:0;overflow:hidden}.uii-accordion-group-content-hide>div{padding:15px}.panel-default{background-color:#bdbdbd}.panel-primary{background-color:#093697!important}.panel-secondary{background-color:#29b6f6!important}.panel-tertiary{background-color:#c0ca33!important}.panel-info{background-color:#01579b!important}.panel-warning{background-color:#f9a825!important}.panel-danger{background-color:#d32f2f!important}"]
                }] }
    ];
    /** @nocollapse */
    AccordionGroupComponent.ctorParameters = function () { return [
        { type: AccordionService },
        { type: AccordionComponent, decorators: [{ type: Inject, args: [AccordionComponent,] }] }
    ]; };
    AccordionGroupComponent.propDecorators = {
        isOpen: [{ type: Input, args: ['isOpen',] }],
        heading: [{ type: Input, args: ['heading',] }],
        isDisabled: [{ type: Input, args: ['isDisabled',] }],
        panelClass: [{ type: Input, args: ['panelClass',] }],
        isOpenChange: [{ type: Output, args: ['isOpenChange',] }],
        panelColor: [{ type: Input, args: ['panelColor',] }]
    };
    return AccordionGroupComponent;
}());
export { AccordionGroupComponent };
if (false) {
    /**
     * initialize accordion group condition
     * @type {?}
     */
    AccordionGroupComponent.prototype.isOpen;
    /**
     * initialize displayed heading
     * @type {?}
     */
    AccordionGroupComponent.prototype.heading;
    /**
     * disable an accordion
     * @type {?}
     */
    AccordionGroupComponent.prototype.isDisabled;
    /**
     * attach custom panel class
     * @type {?}
     */
    AccordionGroupComponent.prototype.panelClass;
    /**
     * an emitter which will trigerred if user open/close a panel
     * @type {?}
     */
    AccordionGroupComponent.prototype.isOpenChange;
    /**
     * panel's color option
     * @type {?}
     */
    AccordionGroupComponent.prototype.panelColor;
    /**
     * enable/disable isAnimated for button
     * @type {?}
     */
    AccordionGroupComponent.prototype.isAnimated;
    /**
     * @type {?}
     * @protected
     */
    AccordionGroupComponent.prototype.accordion;
    /** @type {?} */
    AccordionGroupComponent.prototype.currentClass;
    /**
     * @type {?}
     * @private
     */
    AccordionGroupComponent.prototype.accordionSvc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXRpbGl0aWVzL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAvYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVEO0lBdUVFLGlDQUNVLFlBQThCLEVBQ1YsU0FBNkI7UUFEakQsaUJBQVksR0FBWixZQUFZLENBQWtCOzs7O1FBbEJ2QixXQUFNLEdBQUcsS0FBSyxDQUFDOzs7O1FBSVgsZUFBVSxHQUFHLEtBQUssQ0FBQzs7OztRQUloQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7Ozs7UUFJbkUsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUc1QixpQkFBWSxHQUFHLDJDQUEyQyxDQUFDO1FBTXpELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELGdEQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsOENBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Z0JBOUZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsZytEQStDVDs7aUJBRUY7Ozs7Z0JBdERRLGdCQUFnQjtnQkFDaEIsa0JBQWtCLHVCQTJFdEIsTUFBTSxTQUFDLGtCQUFrQjs7O3lCQW5CM0IsS0FBSyxTQUFDLFFBQVE7MEJBRWQsS0FBSyxTQUFDLFNBQVM7NkJBRWYsS0FBSyxTQUFDLFlBQVk7NkJBRWxCLEtBQUssU0FBQyxZQUFZOytCQUVsQixNQUFNLFNBQUMsY0FBYzs2QkFFckIsS0FBSyxTQUFDLFlBQVk7O0lBZ0NyQiw4QkFBQztDQUFBLEFBaEdELElBZ0dDO1NBNUNZLHVCQUF1Qjs7Ozs7O0lBRWxDLHlDQUFnQzs7Ozs7SUFFaEMsMENBQWtDOzs7OztJQUVsQyw2Q0FBd0M7Ozs7O0lBRXhDLDZDQUF3Qzs7Ozs7SUFFeEMsK0NBQW1FOzs7OztJQUVuRSw2Q0FBd0M7Ozs7O0lBRXhDLDZDQUE0Qjs7Ozs7SUFFNUIsNENBQXdDOztJQUN4QywrQ0FBMkQ7Ozs7O0lBR3pELCtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vc2VydmljZXMvYWNjb3JkaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYWNjb3JkaW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpaS1hY2NvcmRpb24tZ3JvdXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwidWlpLWFjY29yZGlvbi1ncm91cCBwYW5lbC1kZWZhdWx0XCJcbiAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgJ3BhbmVsLXByaW1hcnknOiB0aGlzLnBhbmVsQ2xhc3MgPT09ICdwYW5lbC1wcmltYXJ5JyxcbiAgICAgICAgJ3BhbmVsLXNlY29uZGFyeSc6IHRoaXMucGFuZWxDbGFzcyA9PT0gJ3BhbmVsLXNlY29uZGFyeScsXG4gICAgICAgICdwYW5lbC10ZXJ0aWFyeSc6IHRoaXMucGFuZWxDbGFzcyA9PT0gJ3BhbmVsLXRlcnRpYXJ5JyxcbiAgICAgICAgJ3BhbmVsLWluZm8nOiB0aGlzLnBhbmVsQ2xhc3MgPT09ICdwYW5lbC1pbmZvJyxcbiAgICAgICAgJ3BhbmVsLXdhcm5pbmcnOiB0aGlzLnBhbmVsQ2xhc3MgPT09ICdwYW5lbC13YXJuaW5nJyxcbiAgICAgICAgJ3BhbmVsLWRhbmdlcic6IHRoaXMucGFuZWxDbGFzcyA9PT0gJ3BhbmVsLWRhbmdlcidcbiAgICAgIH1cIj5cbiAgICAgIDxkaXYgKGNsaWNrKT1cInBhbmVsQ2xpY2tlZCgpXCJcbiAgICAgICAgICAgW2NsYXNzXT1cImN1cnJlbnRDbGFzc1wiXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgJ2Rpc2FibGVkJzogaXNEaXNhYmxlZCxcbiAgICAgICAgICAgICAgJ3BhbmVsLXByaW1hcnknOiB0aGlzLnBhbmVsQ2xhc3MgPT09ICdwYW5lbC1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgJ3BhbmVsLXNlY29uZGFyeSc6IHRoaXMucGFuZWxDbGFzcyA9PT0gJ3BhbmVsLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICdwYW5lbC10ZXJ0aWFyeSc6IHRoaXMucGFuZWxDbGFzcyA9PT0gJ3BhbmVsLXRlcnRpYXJ5JyxcbiAgICAgICAgICAgICAgJ3BhbmVsLWluZm8nOiB0aGlzLnBhbmVsQ2xhc3MgPT09ICdwYW5lbC1pbmZvJyxcbiAgICAgICAgICAgICAgJ3BhbmVsLXdhcm5pbmcnOiB0aGlzLnBhbmVsQ2xhc3MgPT09ICdwYW5lbC13YXJuaW5nJyxcbiAgICAgICAgICAgICAgJ3BhbmVsLWRhbmdlcic6IHRoaXMucGFuZWxDbGFzcyA9PT0gJ3BhbmVsLWRhbmdlcidcbiAgICAgICAgICAgIH1cIj5cbiAgICAgICAgPGg0ICpuZ0lmPVwiaGVhZGluZzsgZWxzZSBub0hlYWRpbmdcIj5cbiAgICAgICAgICB7eyBoZWFkaW5nIH19XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbmltYXRlLWJ1dHRvblwiICpuZ0lmPVwiaXNBbmltYXRlZDsgZWxzZSBub25BbmltYXRlXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93blwiXG4gICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdvcGVuJzogaXNPcGVuIH1cIj48L2k+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm9uQW5pbWF0ZT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibm9uLWFuaW1hdGUtYnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1kb3duXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdvcGVuJzogaXNPcGVuIH1cIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNub0hlYWRpbmc+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3VpaS1hY2NvcmRpb24taGVhZGluZ11cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB1aWlDb2xsYXBzZSBbaXNPcGVuXT1cImlzT3BlblwiIFtzZWxlY3RlZEdyb3VwXT1cImlzT3BlblwiIGNsYXNzPVwidWlpLWFjY29yZGlvbi1ncm91cC1jb250ZW50IHVpaS1hY2NvcmRpb24tZ3JvdXAtY29udGVudC1ub25lIHVpaS1hY2NvcmRpb24tZ3JvdXAtY29udGVudC1oaWRlXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKiBpbml0aWFsaXplIGFjY29yZGlvbiBncm91cCBjb25kaXRpb24gKi9cbiAgQElucHV0KCdpc09wZW4nKSBpc09wZW4gPSBmYWxzZTtcbiAgLyoqIGluaXRpYWxpemUgZGlzcGxheWVkIGhlYWRpbmcgKi9cbiAgQElucHV0KCdoZWFkaW5nJykgaGVhZGluZzogc3RyaW5nO1xuICAvKiogZGlzYWJsZSBhbiBhY2NvcmRpb24gKi9cbiAgQElucHV0KCdpc0Rpc2FibGVkJykgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAvKiogYXR0YWNoIGN1c3RvbSBwYW5lbCBjbGFzcyAqL1xuICBASW5wdXQoJ3BhbmVsQ2xhc3MnKSBwYW5lbENsYXNzOiBzdHJpbmc7XG4gIC8qKiBhbiBlbWl0dGVyIHdoaWNoIHdpbGwgdHJpZ2VycmVkIGlmIHVzZXIgb3Blbi9jbG9zZSBhIHBhbmVsICovXG4gIEBPdXRwdXQoJ2lzT3BlbkNoYW5nZScpIGlzT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgLyoqIHBhbmVsJ3MgY29sb3Igb3B0aW9uICovXG4gIEBJbnB1dCgncGFuZWxDb2xvcicpIHBhbmVsQ29sb3I6IHN0cmluZztcbiAgLyoqIGVuYWJsZS9kaXNhYmxlIGlzQW5pbWF0ZWQgZm9yIGJ1dHRvbiAqL1xuICBpc0FuaW1hdGVkOiBCb29sZWFuID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIGFjY29yZGlvbjogQWNjb3JkaW9uQ29tcG9uZW50O1xuICBjdXJyZW50Q2xhc3MgPSAndWlpLWFjY29yZGlvbi1ncm91cC1oZWFkaW5nIHBhbmVsLWRlZmF1bHQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWNjb3JkaW9uU3ZjOiBBY2NvcmRpb25TZXJ2aWNlLFxuICAgIEBJbmplY3QoQWNjb3JkaW9uQ29tcG9uZW50KSBhY2NvcmRpb246IEFjY29yZGlvbkNvbXBvbmVudFxuICApIHtcbiAgICB0aGlzLmFjY29yZGlvbiA9IGFjY29yZGlvbjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWNjb3JkaW9uLmFkZEdyb3VwKHRoaXMpO1xuICAgIHRoaXMuaW5pdElzQW5pbWF0ZWQoKTtcbiAgfVxuXG4gIGluaXRJc0FuaW1hdGVkKCkge1xuICAgIHRoaXMuaXNBbmltYXRlZCA9IHRoaXMuYWNjb3JkaW9uU3ZjLmdldElzQW5pbWF0ZWQoKTtcbiAgfVxuXG4gIHBhbmVsQ2xpY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgICB0aGlzLmFjY29yZGlvblN2Yy5zZXRJc09wZW4odGhpcy5pc09wZW4pO1xuICAgICAgdGhpcy5hY2NvcmRpb24uY2xvc2VPdGhlcnNQYW5lbHModGhpcyk7XG4gICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHRoaXMuaXNPcGVuKTtcbiAgICB9XG4gIH1cblxufVxuIl19