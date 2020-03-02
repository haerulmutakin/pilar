/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/accordion/accordion-group/accordion-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { AccordionService } from './../../../../services/accordion.service';
import { AccordionComponent } from '../accordion.component';
export class AccordionGroupComponent {
    /**
     * @param {?} accordionSvc
     * @param {?} accordion
     */
    constructor(accordionSvc, accordion) {
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
    ngOnInit() {
        this.accordion.addGroup(this);
        this.initIsAnimated();
    }
    /**
     * @return {?}
     */
    initIsAnimated() {
        this.isAnimated = this.accordionSvc.getIsAnimated();
    }
    /**
     * @return {?}
     */
    panelClicked() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
            this.accordionSvc.setIsOpen(this.isOpen);
            this.accordion.closeOthersPanels(this);
            this.isOpenChange.emit(this.isOpen);
        }
    }
}
AccordionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-accordion-group',
                template: `
    <div
      class="uii-accordion-group panel-default"
      [ngClass]="{
        'panel-primary': this.panelClass === 'panel-primary',
        'panel-secondary': this.panelClass === 'panel-secondary',
        'panel-tertiary': this.panelClass === 'panel-tertiary',
        'panel-info': this.panelClass === 'panel-info',
        'panel-warning': this.panelClass === 'panel-warning',
        'panel-danger': this.panelClass === 'panel-danger'
      }">
      <div (click)="panelClicked()"
           [class]="currentClass"
           [ngClass]="{
              'disabled': isDisabled,
              'panel-primary': this.panelClass === 'panel-primary',
              'panel-secondary': this.panelClass === 'panel-secondary',
              'panel-tertiary': this.panelClass === 'panel-tertiary',
              'panel-info': this.panelClass === 'panel-info',
              'panel-warning': this.panelClass === 'panel-warning',
              'panel-danger': this.panelClass === 'panel-danger'
            }">
        <h4 *ngIf="heading; else noHeading">
          {{ heading }}
          <span class="animate-button" *ngIf="isAnimated; else nonAnimate">
            <i class="fa fa-chevron-down"
               [ngClass]="{ 'open': isOpen }"></i>
          </span>
          <ng-template #nonAnimate>
            <span class="non-animate-button">
              <i class="fa fa-chevron-down"
                [ngClass]="{ 'open': isOpen }"></i>
            </span>
          </ng-template>
        </h4>
        <ng-template #noHeading>
          <h4>
            <ng-content select="[uii-accordion-heading]"></ng-content>
          </h4>
        </ng-template>
      </div>
      <div uiiCollapse [isOpen]="isOpen" [selectedGroup]="isOpen" class="uii-accordion-group-content uii-accordion-group-content-none uii-accordion-group-content-hide">
        <div>
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
                styles: [".relative{position:relative}.uii-accordion-group{padding:1px;box-shadow:0 6px 15px rgba(36,37,38,.08);margin-bottom:2rem}.uii-accordion-group-heading>h4{font-size:14px;color:#fff;padding:1.5rem;position:relative!important;margin:0}.uii-accordion-group-heading>h4>span.animate-button:first-child{position:absolute;top:30%;right:0;margin-right:2rem}.uii-accordion-group-heading>h4>span.animate-button:first-child>i{color:#fff;transition:.25s ease-in-out}.uii-accordion-group-heading>h4>span.animate-button:first-child>i.open{transform:rotate(180deg)}.uii-accordion-group-heading>h4>span.non-animate-button:first-child{position:absolute;top:30%;right:0;margin-right:2rem}.uii-accordion-group-heading>h4>span.non-animate-button:first-child>i{color:#fff}.uii-accordion-group-heading>h4>span.non-animate-button:first-child>i.open{transform:rotate(180deg)}.uii-accordion-group-heading:hover{cursor:pointer}.uii-accordion-group-heading.disabled{background-color:#bdbdbd!important}.uii-accordion-group-heading.disabled:hover{cursor:default!important}.uii-accordion-group-content{transition:.25s ease-in-out;background-color:#f5f5f5}.uii-accordion-group-content-none{display:none}.uii-accordion-group-content-none>div{padding:15px}.uii-accordion-group-content-hide{max-height:0;overflow:hidden}.uii-accordion-group-content-hide>div{padding:15px}.panel-default{background-color:#bdbdbd}.panel-primary{background-color:#093697!important}.panel-secondary{background-color:#29b6f6!important}.panel-tertiary{background-color:#c0ca33!important}.panel-info{background-color:#01579b!important}.panel-warning{background-color:#f9a825!important}.panel-danger{background-color:#d32f2f!important}"]
            }] }
];
/** @nocollapse */
AccordionGroupComponent.ctorParameters = () => [
    { type: AccordionService },
    { type: AccordionComponent, decorators: [{ type: Inject, args: [AccordionComponent,] }] }
];
AccordionGroupComponent.propDecorators = {
    isOpen: [{ type: Input, args: ['isOpen',] }],
    heading: [{ type: Input, args: ['heading',] }],
    isDisabled: [{ type: Input, args: ['isDisabled',] }],
    panelClass: [{ type: Input, args: ['panelClass',] }],
    isOpenChange: [{ type: Output, args: ['isOpenChange',] }],
    panelColor: [{ type: Input, args: ['panelColor',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXRpbGl0aWVzL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAvYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBc0Q1RCxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQW1CbEMsWUFDVSxZQUE4QixFQUNWLFNBQTZCO1FBRGpELGlCQUFZLEdBQVosWUFBWSxDQUFrQjs7OztRQWxCdkIsV0FBTSxHQUFHLEtBQUssQ0FBQzs7OztRQUlYLGVBQVUsR0FBRyxLQUFLLENBQUM7Ozs7UUFJaEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDOzs7O1FBSW5FLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsaUJBQVksR0FBRywyQ0FBMkMsQ0FBQztRQU16RCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7OztZQTlGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStDVDs7YUFFRjs7OztZQXREUSxnQkFBZ0I7WUFDaEIsa0JBQWtCLHVCQTJFdEIsTUFBTSxTQUFDLGtCQUFrQjs7O3FCQW5CM0IsS0FBSyxTQUFDLFFBQVE7c0JBRWQsS0FBSyxTQUFDLFNBQVM7eUJBRWYsS0FBSyxTQUFDLFlBQVk7eUJBRWxCLEtBQUssU0FBQyxZQUFZOzJCQUVsQixNQUFNLFNBQUMsY0FBYzt5QkFFckIsS0FBSyxTQUFDLFlBQVk7Ozs7Ozs7SUFWbkIseUNBQWdDOzs7OztJQUVoQywwQ0FBa0M7Ozs7O0lBRWxDLDZDQUF3Qzs7Ozs7SUFFeEMsNkNBQXdDOzs7OztJQUV4QywrQ0FBbUU7Ozs7O0lBRW5FLDZDQUF3Qzs7Ozs7SUFFeEMsNkNBQTRCOzs7OztJQUU1Qiw0Q0FBd0M7O0lBQ3hDLCtDQUEyRDs7Ozs7SUFHekQsK0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuLi9hY2NvcmRpb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLWFjY29yZGlvbi1ncm91cCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJ1aWktYWNjb3JkaW9uLWdyb3VwIHBhbmVsLWRlZmF1bHRcIlxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAncGFuZWwtcHJpbWFyeSc6IHRoaXMucGFuZWxDbGFzcyA9PT0gJ3BhbmVsLXByaW1hcnknLFxuICAgICAgICAncGFuZWwtc2Vjb25kYXJ5JzogdGhpcy5wYW5lbENsYXNzID09PSAncGFuZWwtc2Vjb25kYXJ5JyxcbiAgICAgICAgJ3BhbmVsLXRlcnRpYXJ5JzogdGhpcy5wYW5lbENsYXNzID09PSAncGFuZWwtdGVydGlhcnknLFxuICAgICAgICAncGFuZWwtaW5mbyc6IHRoaXMucGFuZWxDbGFzcyA9PT0gJ3BhbmVsLWluZm8nLFxuICAgICAgICAncGFuZWwtd2FybmluZyc6IHRoaXMucGFuZWxDbGFzcyA9PT0gJ3BhbmVsLXdhcm5pbmcnLFxuICAgICAgICAncGFuZWwtZGFuZ2VyJzogdGhpcy5wYW5lbENsYXNzID09PSAncGFuZWwtZGFuZ2VyJ1xuICAgICAgfVwiPlxuICAgICAgPGRpdiAoY2xpY2spPVwicGFuZWxDbGlja2VkKClcIlxuICAgICAgICAgICBbY2xhc3NdPVwiY3VycmVudENsYXNzXCJcbiAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAnZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgICAgICAgICAncGFuZWwtcHJpbWFyeSc6IHRoaXMucGFuZWxDbGFzcyA9PT0gJ3BhbmVsLXByaW1hcnknLFxuICAgICAgICAgICAgICAncGFuZWwtc2Vjb25kYXJ5JzogdGhpcy5wYW5lbENsYXNzID09PSAncGFuZWwtc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgJ3BhbmVsLXRlcnRpYXJ5JzogdGhpcy5wYW5lbENsYXNzID09PSAncGFuZWwtdGVydGlhcnknLFxuICAgICAgICAgICAgICAncGFuZWwtaW5mbyc6IHRoaXMucGFuZWxDbGFzcyA9PT0gJ3BhbmVsLWluZm8nLFxuICAgICAgICAgICAgICAncGFuZWwtd2FybmluZyc6IHRoaXMucGFuZWxDbGFzcyA9PT0gJ3BhbmVsLXdhcm5pbmcnLFxuICAgICAgICAgICAgICAncGFuZWwtZGFuZ2VyJzogdGhpcy5wYW5lbENsYXNzID09PSAncGFuZWwtZGFuZ2VyJ1xuICAgICAgICAgICAgfVwiPlxuICAgICAgICA8aDQgKm5nSWY9XCJoZWFkaW5nOyBlbHNlIG5vSGVhZGluZ1wiPlxuICAgICAgICAgIHt7IGhlYWRpbmcgfX1cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFuaW1hdGUtYnV0dG9uXCIgKm5nSWY9XCJpc0FuaW1hdGVkOyBlbHNlIG5vbkFuaW1hdGVcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1kb3duXCJcbiAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ29wZW4nOiBpc09wZW4gfVwiPjwvaT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNub25BbmltYXRlPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJub24tYW5pbWF0ZS1idXR0b25cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWRvd25cIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ29wZW4nOiBpc09wZW4gfVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2g0PlxuICAgICAgICA8bmctdGVtcGxhdGUgI25vSGVhZGluZz5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdWlpLWFjY29yZGlvbi1oZWFkaW5nXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHVpaUNvbGxhcHNlIFtpc09wZW5dPVwiaXNPcGVuXCIgW3NlbGVjdGVkR3JvdXBdPVwiaXNPcGVuXCIgY2xhc3M9XCJ1aWktYWNjb3JkaW9uLWdyb3VwLWNvbnRlbnQgdWlpLWFjY29yZGlvbi1ncm91cC1jb250ZW50LW5vbmUgdWlpLWFjY29yZGlvbi1ncm91cC1jb250ZW50LWhpZGVcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqIGluaXRpYWxpemUgYWNjb3JkaW9uIGdyb3VwIGNvbmRpdGlvbiAqL1xuICBASW5wdXQoJ2lzT3BlbicpIGlzT3BlbiA9IGZhbHNlO1xuICAvKiogaW5pdGlhbGl6ZSBkaXNwbGF5ZWQgaGVhZGluZyAqL1xuICBASW5wdXQoJ2hlYWRpbmcnKSBoZWFkaW5nOiBzdHJpbmc7XG4gIC8qKiBkaXNhYmxlIGFuIGFjY29yZGlvbiAqL1xuICBASW5wdXQoJ2lzRGlzYWJsZWQnKSBpc0Rpc2FibGVkID0gZmFsc2U7XG4gIC8qKiBhdHRhY2ggY3VzdG9tIHBhbmVsIGNsYXNzICovXG4gIEBJbnB1dCgncGFuZWxDbGFzcycpIHBhbmVsQ2xhc3M6IHN0cmluZztcbiAgLyoqIGFuIGVtaXR0ZXIgd2hpY2ggd2lsbCB0cmlnZXJyZWQgaWYgdXNlciBvcGVuL2Nsb3NlIGEgcGFuZWwgKi9cbiAgQE91dHB1dCgnaXNPcGVuQ2hhbmdlJykgaXNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAvKiogcGFuZWwncyBjb2xvciBvcHRpb24gKi9cbiAgQElucHV0KCdwYW5lbENvbG9yJykgcGFuZWxDb2xvcjogc3RyaW5nO1xuICAvKiogZW5hYmxlL2Rpc2FibGUgaXNBbmltYXRlZCBmb3IgYnV0dG9uICovXG4gIGlzQW5pbWF0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgYWNjb3JkaW9uOiBBY2NvcmRpb25Db21wb25lbnQ7XG4gIGN1cnJlbnRDbGFzcyA9ICd1aWktYWNjb3JkaW9uLWdyb3VwLWhlYWRpbmcgcGFuZWwtZGVmYXVsdCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY2NvcmRpb25TdmM6IEFjY29yZGlvblNlcnZpY2UsXG4gICAgQEluamVjdChBY2NvcmRpb25Db21wb25lbnQpIGFjY29yZGlvbjogQWNjb3JkaW9uQ29tcG9uZW50XG4gICkge1xuICAgIHRoaXMuYWNjb3JkaW9uID0gYWNjb3JkaW9uO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hY2NvcmRpb24uYWRkR3JvdXAodGhpcyk7XG4gICAgdGhpcy5pbml0SXNBbmltYXRlZCgpO1xuICB9XG5cbiAgaW5pdElzQW5pbWF0ZWQoKSB7XG4gICAgdGhpcy5pc0FuaW1hdGVkID0gdGhpcy5hY2NvcmRpb25TdmMuZ2V0SXNBbmltYXRlZCgpO1xuICB9XG5cbiAgcGFuZWxDbGlja2VkKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICAgIHRoaXMuYWNjb3JkaW9uU3ZjLnNldElzT3Blbih0aGlzLmlzT3Blbik7XG4gICAgICB0aGlzLmFjY29yZGlvbi5jbG9zZU90aGVyc1BhbmVscyh0aGlzKTtcbiAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodGhpcy5pc09wZW4pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=