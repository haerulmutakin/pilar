/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/info-box/info-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class InfoBoxComponent {
    constructor() {
        this.title = 'Title';
        this.subtitle = 'Subtitle';
        this.infoIcon = '';
        this.type = 'default';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
InfoBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-info-box',
                template: "<div [class]=\"'ugw-info-box info-box-' + type\" role=\"info-box\">\n  <h5 class=\"title\">{{title}}</h5>\n  <h6 class=\"subtitle\">{{subtitle}}</h6>\n  <i class=\"info-icon\">\n    <span class=\"{{infoIcon}}\"></span>\n  </i>\n  <ng-content></ng-content>\n</div>\n",
                styles: [".ugw-info-box{position:relative;padding:10px;width:100%;justify-content:space-between;margin:0;list-style:none;color:#fff;min-height:85px}.ugw-info-box h5.title{font-size:larger}.ugw-info-box h6.subtitle{font-weight:300;font-size:small}.ugw-info-box.info-box-default{background-color:#093697}.ugw-info-box.info-box-success{background-color:#00796b}.ugw-info-box.info-box-info{background-color:#4db6ac}.ugw-info-box.info-box-danger{background-color:#ff5252}.ugw-info-box.info-box-warning{background-color:#fbc02d}.ugw-info-box.info-box-primary{background-color:#007bff}.ugw-info-box.info-box-dark{background-color:#343a40}.ugw-info-box.info-box-secondary{background-color:#6c757d}.ugw-info-box.info-box-oc-pink{background-color:#e91e63}.ugw-info-box.info-box-oc-purple{background-color:#9c27b0}.ugw-info-box.info-box-oc-deep-purple{background-color:#673ab7}.ugw-info-box.info-box-oc-cyan{background-color:#00bcd4}.ugw-info-box.info-box-oc-green{background-color:#4caf50}.ugw-info-box.info-box-oc-lime{background-color:#cddc39}.ugw-info-box.info-box-oc-orange{background-color:#ff9800}.ugw-info-box.info-box-oc-deep-orange{background-color:#ff5722}.ugw-info-box.info-box-oc-brown{background-color:#795548}.ugw-info-box.info-box-oc-blue-grey{background-color:#607d8b}.ugw-info-box i.info-icon{transition:.3s linear;position:absolute;top:-10px;right:10px;z-index:0;font-size:65px;color:rgba(0,0,0,.15)}.ugw-info-box:hover{transition:.3s linear}.ugw-info-box:hover i{font-size:70px}"]
            }] }
];
/** @nocollapse */
InfoBoxComponent.ctorParameters = () => [];
InfoBoxComponent.propDecorators = {
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    infoIcon: [{ type: Input }],
    type: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InfoBoxComponent.prototype.title;
    /** @type {?} */
    InfoBoxComponent.prototype.subtitle;
    /** @type {?} */
    InfoBoxComponent.prototype.infoIcon;
    /** @type {?} */
    InfoBoxComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91dGlsaXRpZXMvaW5mby1ib3gvaW5mby1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQsTUFBTSxPQUFPLGdCQUFnQjtJQU8zQjtRQUxTLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsU0FBSSxHQUFHLFNBQVMsQ0FBQztJQUVWLENBQUM7Ozs7SUFFakIsUUFBUTtJQUVSLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHFSQUF3Qzs7YUFFekM7Ozs7O29CQUdFLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7Ozs7SUFITixpQ0FBeUI7O0lBQ3pCLG9DQUErQjs7SUFDL0Isb0NBQXVCOztJQUN2QixnQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpaS1pbmZvLWJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbmZvLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2luZm8tYm94LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5mb0JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGl0bGUgPSAnVGl0bGUnO1xuICBASW5wdXQoKSBzdWJ0aXRsZSA9ICdTdWJ0aXRsZSc7XG4gIEBJbnB1dCgpIGluZm9JY29uID0gJyc7XG4gIEBJbnB1dCgpIHR5cGUgPSAnZGVmYXVsdCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbn1cbiJdfQ==