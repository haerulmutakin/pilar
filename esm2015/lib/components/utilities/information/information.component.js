/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/information/information.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class InformationComponent {
    constructor() {
        this.type = 'info';
        this.message = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
InformationComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-information',
                template: `
    <div class="uii-information container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 padding-0">
          <p class="uii-information-message uii-information-message-success margin-0" *ngIf="type === 'success'">{{ message }}</p>
          <p class="uii-information-message uii-information-message-warning margin-0" *ngIf="type === 'warning'">{{ message }}</p>
          <p class="uii-information-message uii-information-message-error margin-0" *ngIf="type === 'error'">{{ message }}</p>
          <p class="uii-information-message uii-information-message-info margin-0" *ngIf="type === 'info'">{{ message }}</p>
        </div>
      </div>
    </div>
  `,
                styles: [".border{border:1px dashed #00f}.padding-0{padding:0}.margin-0{margin:0}.uii-information-message{font-size:1.5rem;padding:1.5rem;font-weight:500;color:#555}.uii-information-message-success{background-color:#e0f2f1;border:1px solid #009688}.uii-information-message-warning{background-color:#fff9c4;border:1px solid #f9a825}.uii-information-message-error{background-color:#ffcdd2;border:1px solid #d32f2f}.uii-information-message-info{background-color:#e1f5fe;border:1px solid #01579b}"]
            }] }
];
/** @nocollapse */
InformationComponent.ctorParameters = () => [];
InformationComponent.propDecorators = {
    type: [{ type: Input, args: ['type',] }],
    message: [{ type: Input, args: ['message',] }]
};
if (false) {
    /** @type {?} */
    InformationComponent.prototype.type;
    /** @type {?} */
    InformationComponent.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb3JtYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91dGlsaXRpZXMvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFrQnpELE1BQU0sT0FBTyxvQkFBb0I7SUFLL0I7UUFIZSxTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ1gsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUVmLENBQUM7Ozs7SUFFakIsUUFBUSxLQUFJLENBQUM7OztZQXZCZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUOzthQUVGOzs7OzttQkFHRSxLQUFLLFNBQUMsTUFBTTtzQkFDWixLQUFLLFNBQUMsU0FBUzs7OztJQURoQixvQ0FBNkI7O0lBQzdCLHVDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWktaW5mb3JtYXRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ1aWktaW5mb3JtYXRpb24gY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctMTIgcGFkZGluZy0wXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ1aWktaW5mb3JtYXRpb24tbWVzc2FnZSB1aWktaW5mb3JtYXRpb24tbWVzc2FnZS1zdWNjZXNzIG1hcmdpbi0wXCIgKm5nSWY9XCJ0eXBlID09PSAnc3VjY2VzcydcIj57eyBtZXNzYWdlIH19PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwidWlpLWluZm9ybWF0aW9uLW1lc3NhZ2UgdWlpLWluZm9ybWF0aW9uLW1lc3NhZ2Utd2FybmluZyBtYXJnaW4tMFwiICpuZ0lmPVwidHlwZSA9PT0gJ3dhcm5pbmcnXCI+e3sgbWVzc2FnZSB9fTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInVpaS1pbmZvcm1hdGlvbi1tZXNzYWdlIHVpaS1pbmZvcm1hdGlvbi1tZXNzYWdlLWVycm9yIG1hcmdpbi0wXCIgKm5nSWY9XCJ0eXBlID09PSAnZXJyb3InXCI+e3sgbWVzc2FnZSB9fTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInVpaS1pbmZvcm1hdGlvbi1tZXNzYWdlIHVpaS1pbmZvcm1hdGlvbi1tZXNzYWdlLWluZm8gbWFyZ2luLTBcIiAqbmdJZj1cInR5cGUgPT09ICdpbmZvJ1wiPnt7IG1lc3NhZ2UgfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2luZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5mb3JtYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgndHlwZScpIHR5cGUgPSAnaW5mbyc7XG4gIEBJbnB1dCgnbWVzc2FnZScpIG1lc3NhZ2UgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge31cblxufVxuIl19