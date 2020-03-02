/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/info-box/info-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var InfoBoxComponent = /** @class */ (function () {
    function InfoBoxComponent() {
        this.title = 'Title';
        this.subtitle = 'Subtitle';
        this.infoIcon = '';
        this.type = 'default';
    }
    /**
     * @return {?}
     */
    InfoBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    InfoBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-info-box',
                    template: "<div [class]=\"'ugw-info-box info-box-' + type\" role=\"info-box\">\n  <h5 class=\"title\">{{title}}</h5>\n  <h6 class=\"subtitle\">{{subtitle}}</h6>\n  <i class=\"info-icon\">\n    <span class=\"{{infoIcon}}\"></span>\n  </i>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".ugw-info-box{position:relative;padding:10px;width:100%;justify-content:space-between;margin:0;list-style:none;color:#fff;min-height:85px}.ugw-info-box h5.title{font-size:larger}.ugw-info-box h6.subtitle{font-weight:300;font-size:small}.ugw-info-box.info-box-default{background-color:#093697}.ugw-info-box.info-box-success{background-color:#00796b}.ugw-info-box.info-box-info{background-color:#4db6ac}.ugw-info-box.info-box-danger{background-color:#ff5252}.ugw-info-box.info-box-warning{background-color:#fbc02d}.ugw-info-box.info-box-primary{background-color:#007bff}.ugw-info-box.info-box-dark{background-color:#343a40}.ugw-info-box.info-box-secondary{background-color:#6c757d}.ugw-info-box.info-box-oc-pink{background-color:#e91e63}.ugw-info-box.info-box-oc-purple{background-color:#9c27b0}.ugw-info-box.info-box-oc-deep-purple{background-color:#673ab7}.ugw-info-box.info-box-oc-cyan{background-color:#00bcd4}.ugw-info-box.info-box-oc-green{background-color:#4caf50}.ugw-info-box.info-box-oc-lime{background-color:#cddc39}.ugw-info-box.info-box-oc-orange{background-color:#ff9800}.ugw-info-box.info-box-oc-deep-orange{background-color:#ff5722}.ugw-info-box.info-box-oc-brown{background-color:#795548}.ugw-info-box.info-box-oc-blue-grey{background-color:#607d8b}.ugw-info-box i.info-icon{transition:.3s linear;position:absolute;top:-10px;right:10px;z-index:0;font-size:65px;color:rgba(0,0,0,.15)}.ugw-info-box:hover{transition:.3s linear}.ugw-info-box:hover i{font-size:70px}"]
                }] }
    ];
    /** @nocollapse */
    InfoBoxComponent.ctorParameters = function () { return []; };
    InfoBoxComponent.propDecorators = {
        title: [{ type: Input }],
        subtitle: [{ type: Input }],
        infoIcon: [{ type: Input }],
        type: [{ type: Input }]
    };
    return InfoBoxComponent;
}());
export { InfoBoxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91dGlsaXRpZXMvaW5mby1ib3gvaW5mby1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQ7SUFZRTtRQUxTLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsU0FBSSxHQUFHLFNBQVMsQ0FBQztJQUVWLENBQUM7Ozs7SUFFakIsbUNBQVE7OztJQUFSO0lBRUEsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIscVJBQXdDOztpQkFFekM7Ozs7O3dCQUdFLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7O0lBUVIsdUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWJZLGdCQUFnQjs7O0lBRTNCLGlDQUF5Qjs7SUFDekIsb0NBQStCOztJQUMvQixvQ0FBdUI7O0lBQ3ZCLGdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLWluZm8tYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2luZm8tYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5mby1ib3guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbmZvQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0aXRsZSA9ICdUaXRsZSc7XG4gIEBJbnB1dCgpIHN1YnRpdGxlID0gJ1N1YnRpdGxlJztcbiAgQElucHV0KCkgaW5mb0ljb24gPSAnJztcbiAgQElucHV0KCkgdHlwZSA9ICdkZWZhdWx0JztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxufVxuIl19