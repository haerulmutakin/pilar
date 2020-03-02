/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/accordion/accordion.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AccordionService } from './../../../services/accordion.service';
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent(accordionSvc) {
        this.accordionSvc = accordionSvc;
        this.groups = [];
    }
    Object.defineProperty(AccordionComponent.prototype, "isAnimated", {
        /** turn on/off animation */
        set: /**
         * turn on/off animation
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.accordionSvc.setIsAnimated(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "closeOthers", {
        /** if 'true', expanding one item will close others */
        set: /**
         * if 'true', expanding one item will close others
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.accordionSvc.setCloseOthers(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} openGroup
     * @return {?}
     */
    AccordionComponent.prototype.closeOthersPanels = /**
     * @param {?} openGroup
     * @return {?}
     */
    function (openGroup) {
        if (!this.accordionSvc.getCloseOthers()) {
            return;
        }
        this.groups.forEach((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        }));
    };
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.addGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        this.groups.push(group);
    };
    AccordionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-accordion',
                    template: "<ng-content></ng-content>",
                    providers: [AccordionService]
                }] }
    ];
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () { return [
        { type: AccordionService }
    ]; };
    AccordionComponent.propDecorators = {
        isAnimated: [{ type: Input, args: ['isAnimated',] }],
        closeOthers: [{ type: Input, args: ['closeOthers',] }]
    };
    return AccordionComponent;
}());
export { AccordionComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AccordionComponent.prototype.groups;
    /**
     * @type {?}
     * @private
     */
    AccordionComponent.prototype.accordionSvc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXRpbGl0aWVzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHekU7SUFvQkUsNEJBQW9CLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUZ4QyxXQUFNLEdBQThCLEVBQUUsQ0FBQztJQUVJLENBQUM7SUFadEQsc0JBQ00sMENBQVU7UUFGaEIsNEJBQTRCOzs7Ozs7UUFDNUIsVUFDaUIsS0FBYztZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUVILHNCQUNNLDJDQUFXO1FBRmpCLHNEQUFzRDs7Ozs7O1FBQ3RELFVBQ2tCLEtBQWM7WUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7Ozs7O0lBTUgsOENBQWlCOzs7O0lBQWpCLFVBQWtCLFNBQWtDO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ3ZDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBOEI7WUFDakQsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUN2QixLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN0QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxxQ0FBUTs7OztJQUFSLFVBQVMsS0FBOEI7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzlCOzs7O2dCQVBRLGdCQUFnQjs7OzZCQVd0QixLQUFLLFNBQUMsWUFBWTs4QkFLbEIsS0FBSyxTQUFDLGFBQWE7O0lBeUJ0Qix5QkFBQztDQUFBLEFBdENELElBc0NDO1NBaENZLGtCQUFrQjs7Ozs7O0lBWTdCLG9DQUFpRDs7Ozs7SUFFckMsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vc2VydmljZXMvYWNjb3JkaW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWNjb3JkaW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi1ncm91cC9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHByb3ZpZGVyczogW0FjY29yZGlvblNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IHtcbiAgLyoqIHR1cm4gb24vb2ZmIGFuaW1hdGlvbiAqL1xuICBASW5wdXQoJ2lzQW5pbWF0ZWQnKVxuICAgIHNldCBpc0FuaW1hdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICB0aGlzLmFjY29yZGlvblN2Yy5zZXRJc0FuaW1hdGVkKHZhbHVlKTtcbiAgICB9XG4gIC8qKiBpZiAndHJ1ZScsIGV4cGFuZGluZyBvbmUgaXRlbSB3aWxsIGNsb3NlIG90aGVycyAqL1xuICBASW5wdXQoJ2Nsb3NlT3RoZXJzJylcbiAgICBzZXQgY2xvc2VPdGhlcnModmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuYWNjb3JkaW9uU3ZjLnNldENsb3NlT3RoZXJzKHZhbHVlKTtcbiAgICB9XG5cbiAgcHJvdGVjdGVkIGdyb3VwczogQWNjb3JkaW9uR3JvdXBDb21wb25lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWNjb3JkaW9uU3ZjOiBBY2NvcmRpb25TZXJ2aWNlKSB7fVxuXG4gIGNsb3NlT3RoZXJzUGFuZWxzKG9wZW5Hcm91cDogQWNjb3JkaW9uR3JvdXBDb21wb25lbnQpIHtcbiAgICBpZiAoIXRoaXMuYWNjb3JkaW9uU3ZjLmdldENsb3NlT3RoZXJzKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKChncm91cDogQWNjb3JkaW9uR3JvdXBDb21wb25lbnQpID0+IHtcbiAgICAgIGlmIChncm91cCAhPT0gb3Blbkdyb3VwKSB7XG4gICAgICAgIGdyb3VwLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkR3JvdXAoZ3JvdXA6IEFjY29yZGlvbkdyb3VwQ29tcG9uZW50KSB7XG4gICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XG4gIH1cblxufVxuIl19