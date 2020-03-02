/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/tabset-tab/tabset.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostBinding, ElementRef, Output, EventEmitter } from '@angular/core';
import { TabsetComponent } from './../../components/utilities/tabset/tabset.component';
var TabsetDirective = /** @class */ (function () {
    function TabsetDirective(tabset, elRef) {
        this.elRef = elRef;
        this.addClass = true;
        this.selected = new EventEmitter();
        this.deselected = new EventEmitter();
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabsetDirective.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            if (this._active && !active) {
                this.deselected.emit(this);
            }
            this._active = active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetDirective.prototype, "selectedTab", {
        set: /**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            this.selected.emit(tab);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabsetDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TabsetDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'uiiTabItem, [uiiTabItem]'
                },] }
    ];
    /** @nocollapse */
    TabsetDirective.ctorParameters = function () { return [
        { type: TabsetComponent },
        { type: ElementRef }
    ]; };
    TabsetDirective.propDecorators = {
        title: [{ type: Input }],
        tabIcon: [{ type: Input }],
        active: [{ type: HostBinding, args: ['class.tab-active',] }, { type: Input }],
        selectedTab: [{ type: Input }],
        addClass: [{ type: HostBinding, args: ['class.tab-pane',] }],
        selected: [{ type: Output }],
        deselected: [{ type: Output }]
    };
    return TabsetDirective;
}());
export { TabsetDirective };
if (false) {
    /** @type {?} */
    TabsetDirective.prototype.title;
    /** @type {?} */
    TabsetDirective.prototype.tabIcon;
    /** @type {?} */
    TabsetDirective.prototype.addClass;
    /** @type {?} */
    TabsetDirective.prototype.selected;
    /** @type {?} */
    TabsetDirective.prototype.deselected;
    /** @type {?} */
    TabsetDirective.prototype.tabset;
    /**
     * @type {?}
     * @protected
     */
    TabsetDirective.prototype._active;
    /** @type {?} */
    TabsetDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdGFic2V0LXRhYi90YWJzZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUV2RjtJQThCRSx5QkFBWSxNQUF1QixFQUFTLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFQOUIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQyxhQUFRLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEQsZUFBVSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBTTVELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUExQkQsc0JBRUksbUNBQU07Ozs7UUFGVjtZQUdFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQUNELFVBQVcsTUFBZTtZQUN4QixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1lBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDeEIsQ0FBQzs7O09BTkE7SUFPRCxzQkFDSSx3Q0FBVzs7Ozs7UUFEZixVQUNnQixHQUFTO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUM7OztPQUFBOzs7O0lBY0Qsa0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2lCQUNyQzs7OztnQkFKUSxlQUFlO2dCQURnQixVQUFVOzs7d0JBTy9DLEtBQUs7MEJBQ0wsS0FBSzt5QkFFTCxXQUFXLFNBQUMsa0JBQWtCLGNBQzlCLEtBQUs7OEJBVUwsS0FBSzsyQkFLTCxXQUFXLFNBQUMsZ0JBQWdCOzJCQUM1QixNQUFNOzZCQUNOLE1BQU07O0lBYVQsc0JBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQW5DWSxlQUFlOzs7SUFDMUIsZ0NBQXVCOztJQUN2QixrQ0FBeUI7O0lBa0J6QixtQ0FBK0M7O0lBQy9DLG1DQUE0RDs7SUFDNUQscUNBQThEOztJQUU5RCxpQ0FBd0I7Ozs7O0lBQ3hCLGtDQUEyQjs7SUFFVSxnQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFic2V0Q29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL3V0aWxpdGllcy90YWJzZXQvdGFic2V0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3VpaVRhYkl0ZW0sIFt1aWlUYWJJdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgVGFic2V0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgdGFiSWNvbjogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFiLWFjdGl2ZScpXG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgIWFjdGl2ZSkge1xuICAgICAgdGhpcy5kZXNlbGVjdGVkLmVtaXQodGhpcyk7XG4gIH1cbiAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkVGFiKHRhYjogdGhpcykge1xuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh0YWIpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItcGFuZScpIGFkZENsYXNzID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8dGhpcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZXNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8dGhpcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdGFic2V0OiBUYWJzZXRDb21wb25lbnQ7XG4gIHByb3RlY3RlZCBfYWN0aXZlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHRhYnNldDogVGFic2V0Q29tcG9uZW50LCBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLnRhYnNldCA9IHRhYnNldDtcbiAgICB0aGlzLnRhYnNldC5hZGRUYWIodGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=