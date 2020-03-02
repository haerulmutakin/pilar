/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/tabset-tab/tabset.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostBinding, ElementRef, Output, EventEmitter } from '@angular/core';
import { TabsetComponent } from './../../components/utilities/tabset/tabset.component';
export class TabsetDirective {
    /**
     * @param {?} tabset
     * @param {?} elRef
     */
    constructor(tabset, elRef) {
        this.elRef = elRef;
        this.addClass = true;
        this.selected = new EventEmitter();
        this.deselected = new EventEmitter();
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        if (this._active && !active) {
            this.deselected.emit(this);
        }
        this._active = active;
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    set selectedTab(tab) {
        this.selected.emit(tab);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TabsetDirective.decorators = [
    { type: Directive, args: [{
                selector: 'uiiTabItem, [uiiTabItem]'
            },] }
];
/** @nocollapse */
TabsetDirective.ctorParameters = () => [
    { type: TabsetComponent },
    { type: ElementRef }
];
TabsetDirective.propDecorators = {
    title: [{ type: Input }],
    tabIcon: [{ type: Input }],
    active: [{ type: HostBinding, args: ['class.tab-active',] }, { type: Input }],
    selectedTab: [{ type: Input }],
    addClass: [{ type: HostBinding, args: ['class.tab-pane',] }],
    selected: [{ type: Output }],
    deselected: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdGFic2V0LXRhYi90YWJzZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUt2RixNQUFNLE9BQU8sZUFBZTs7Ozs7SUEyQjFCLFlBQVksTUFBdUIsRUFBUyxLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBUDlCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckMsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xELGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU01RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBMUJELElBRUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQUksTUFBTSxDQUFDLE1BQWU7UUFDeEIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFDRCxJQUNJLFdBQVcsQ0FBQyxHQUFTO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFjRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2FBQ3JDOzs7O1lBSlEsZUFBZTtZQURnQixVQUFVOzs7b0JBTy9DLEtBQUs7c0JBQ0wsS0FBSztxQkFFTCxXQUFXLFNBQUMsa0JBQWtCLGNBQzlCLEtBQUs7MEJBVUwsS0FBSzt1QkFLTCxXQUFXLFNBQUMsZ0JBQWdCO3VCQUM1QixNQUFNO3lCQUNOLE1BQU07Ozs7SUFyQlAsZ0NBQXVCOztJQUN2QixrQ0FBeUI7O0lBa0J6QixtQ0FBK0M7O0lBQy9DLG1DQUE0RDs7SUFDNUQscUNBQThEOztJQUU5RCxpQ0FBd0I7Ozs7O0lBQ3hCLGtDQUEyQjs7SUFFVSxnQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFic2V0Q29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL3V0aWxpdGllcy90YWJzZXQvdGFic2V0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3VpaVRhYkl0ZW0sIFt1aWlUYWJJdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgVGFic2V0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgdGFiSWNvbjogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFiLWFjdGl2ZScpXG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgIWFjdGl2ZSkge1xuICAgICAgdGhpcy5kZXNlbGVjdGVkLmVtaXQodGhpcyk7XG4gIH1cbiAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkVGFiKHRhYjogdGhpcykge1xuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh0YWIpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItcGFuZScpIGFkZENsYXNzID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8dGhpcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZXNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8dGhpcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdGFic2V0OiBUYWJzZXRDb21wb25lbnQ7XG4gIHByb3RlY3RlZCBfYWN0aXZlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHRhYnNldDogVGFic2V0Q29tcG9uZW50LCBwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLnRhYnNldCA9IHRhYnNldDtcbiAgICB0aGlzLnRhYnNldC5hZGRUYWIodGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=