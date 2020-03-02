/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toast.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Subject } from 'rxjs';
import { Toast } from '../models/toast';
import { ToastComponent } from '../components/utilities/toast/toast.component';
import * as i0 from "@angular/core";
var ToastService = /** @class */ (function () {
    function ToastService(factoryResolver) {
        this.factoryResolver = factoryResolver;
        this.toasts = [];
        this.subject = new Subject();
        this.toastHovered = false;
    }
    /**
     * @param {?} viewContainerRef
     * @return {?}
     */
    ToastService.prototype.setToastRootViewContainerRef = /**
     * @param {?} viewContainerRef
     * @return {?}
     */
    function (viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    };
    /**
     * @return {?}
     */
    ToastService.prototype.addToastDynamicComponent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = this.factoryResolver.resolveComponentFactory(ToastComponent);
        /** @type {?} */
        var component = factory.create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
    };
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    ToastService.prototype.error = /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    function (description, title, config, callback) {
        /** @type {?} */
        var message = new Toast('error', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    };
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    ToastService.prototype.info = /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    function (description, title, config, callback) {
        /** @type {?} */
        var message = new Toast('info', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    };
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    ToastService.prototype.success = /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    function (description, title, config, callback) {
        /** @type {?} */
        var message = new Toast('success', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    };
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    ToastService.prototype.warning = /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    function (description, title, config, callback) {
        /** @type {?} */
        var message = new Toast('warning', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    };
    /**
     * @private
     * @param {?} message
     * @return {?}
     */
    ToastService.prototype.pushToast = /**
     * @private
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.toasts.push(message);
        this.subject.next(this.toasts);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ToastService.prototype.removeToast = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.toasts = this.toasts.filter((/**
         * @param {?} toast
         * @return {?}
         */
        function (toast) {
            return toast.index !== index;
        }));
        this.subject.next(this.toasts);
    };
    /**
     * @return {?}
     */
    ToastService.prototype.retrieveToast = /**
     * @return {?}
     */
    function () {
        return this.subject.asObservable();
    };
    ToastService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ToastService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    /** @nocollapse */ ToastService.ngInjectableDef = i0.defineInjectable({ factory: function ToastService_Factory() { return new ToastService(i0.inject(i0.ComponentFactoryResolver)); }, token: ToastService, providedIn: "root" });
    return ToastService;
}());
export { ToastService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastService.prototype.toasts;
    /**
     * @type {?}
     * @private
     */
    ToastService.prototype.subject;
    /**
     * @type {?}
     * @private
     */
    ToastService.prototype.rootViewContainer;
    /** @type {?} */
    ToastService.prototype.toastHovered;
    /** @type {?} */
    ToastService.prototype.factoryResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7QUFFL0U7SUFZSSxzQkFBbUIsZUFBeUM7UUFBekMsb0JBQWUsR0FBZixlQUFlLENBQTBCO1FBTnBELFdBQU0sR0FBaUIsRUFBRSxDQUFDO1FBQzFCLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBR3JDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBRTBDLENBQUM7Ozs7O0lBRWhFLG1EQUE0Qjs7OztJQUE1QixVQUE2QixnQkFBcUI7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCwrQ0FBd0I7OztJQUF4Qjs7WUFDVSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUM7O1lBQ3RFLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7UUFDdkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7Ozs7SUFFRCw0QkFBSzs7Ozs7OztJQUFMLFVBQU0sV0FBbUIsRUFBRSxLQUFjLEVBQUUsTUFHMUMsRUFBRSxRQUFxQjs7WUFDZCxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUNULEtB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RU8sZ0NBQVM7Ozs7O0lBQWpCLFVBQWtCLE9BQVk7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsa0NBQVc7Ozs7SUFBWCxVQUFZLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLEtBQUs7WUFDbEMsT0FBTyxLQUFLLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsb0NBQWE7OztJQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7O2dCQTFHSixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBvQix3QkFBd0I7Ozt1QkFBN0M7Q0FnSEMsQUEzR0QsSUEyR0M7U0F2R1ksWUFBWTs7Ozs7O0lBRXJCLDhCQUFrQzs7Ozs7SUFDbEMsK0JBQXFDOzs7OztJQUNyQyx5Q0FBK0I7O0lBRS9CLG9DQUFxQjs7SUFFVCx1Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnLi4vbW9kZWxzL3RvYXN0JztcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy91dGlsaXRpZXMvdG9hc3QvdG9hc3QuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSB0b2FzdHM6IEFycmF5PFRvYXN0PiA9IFtdO1xuICAgIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICBwcml2YXRlIHJvb3RWaWV3Q29udGFpbmVyOiBhbnk7XG5cbiAgICB0b2FzdEhvdmVyZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cblxuICAgIHNldFRvYXN0Um9vdFZpZXdDb250YWluZXJSZWYodmlld0NvbnRhaW5lclJlZjogYW55KSB7XG4gICAgICAgIHRoaXMucm9vdFZpZXdDb250YWluZXIgPSB2aWV3Q29udGFpbmVyUmVmO1xuICAgIH1cblxuICAgIGFkZFRvYXN0RHluYW1pY0NvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuZmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFRvYXN0Q29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUodGhpcy5yb290Vmlld0NvbnRhaW5lci5wYXJlbnRJbmplY3Rvcik7XG4gICAgICAgIHRoaXMucm9vdFZpZXdDb250YWluZXIuaW5zZXJ0KGNvbXBvbmVudC5ob3N0Vmlldyk7XG4gICAgfVxuXG4gICAgZXJyb3IoZGVzY3JpcHRpb246IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIGNvbmZpZz86IHtcbiAgICAgICAgdGltZU91dD86IG51bWJlcixcbiAgICAgICAgcmVtb3ZlT25DbGljaz86IGJvb2xlYW5cbiAgICB9LCBjYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBUb2FzdCgnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA/IHRpdGxlIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID8gZGVzY3JpcHRpb24gOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnID8gY29uZmlnLnRpbWVPdXQgOiA1MDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0cy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZyA/IGNvbmZpZy5yZW1vdmVPbkNsaWNrIDogZmFsc2UpO1xuICAgICAgICB0aGlzLnB1c2hUb2FzdChtZXNzYWdlKTtcbiAgICAgICAgLy8gYW4gb3B0aW9uYWwgY2FsbGJhY2sgcHJvdmlkZWQgaWYgb25seSBkZXZlbG9wZXJzIHdhbnQgdG8gZXhlY3V0ZSBzb21ldGhpbmcgYWZ0ZXIgYSB0b2FzdCBoYXMgYmVlbiBwdXNoZWQuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluZm8oZGVzY3JpcHRpb246IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIGNvbmZpZz86IHtcbiAgICAgICAgdGltZU91dD86IG51bWJlcixcbiAgICAgICAgcmVtb3ZlT25DbGljaz86IGJvb2xlYW5cbiAgICB9LCBjYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBUb2FzdCgnaW5mbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID8gdGl0bGUgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPyBkZXNjcmlwdGlvbiA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPyBjb25maWcudGltZU91dCA6IDUwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3RzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnID8gY29uZmlnLnJlbW92ZU9uQ2xpY2sgOiBmYWxzZSk7XG4gICAgICAgIHRoaXMucHVzaFRvYXN0KG1lc3NhZ2UpO1xuICAgICAgICAvLyBhbiBvcHRpb25hbCBjYWxsYmFjayBwcm92aWRlZCBpZiBvbmx5IGRldmVsb3BlcnMgd2FudCB0byBleGVjdXRlIHNvbWV0aGluZyBhZnRlciBhIHRvYXN0IGhhcyBiZWVuIHB1c2hlZC5cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3VjY2VzcyhkZXNjcmlwdGlvbjogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgY29uZmlnPzoge1xuICAgICAgICB0aW1lT3V0PzogbnVtYmVyLFxuICAgICAgICByZW1vdmVPbkNsaWNrPzogYm9vbGVhblxuICAgIH0sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IFRvYXN0KCdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPyB0aXRsZSA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA/IGRlc2NyaXB0aW9uIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZyA/IGNvbmZpZy50aW1lT3V0IDogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPyBjb25maWcucmVtb3ZlT25DbGljayA6IGZhbHNlKTtcbiAgICAgICAgdGhpcy5wdXNoVG9hc3QobWVzc2FnZSk7XG4gICAgICAgIC8vIGFuIG9wdGlvbmFsIGNhbGxiYWNrIHByb3ZpZGVkIGlmIG9ubHkgZGV2ZWxvcGVycyB3YW50IHRvIGV4ZWN1dGUgc29tZXRoaW5nIGFmdGVyIGEgdG9hc3QgaGFzIGJlZW4gcHVzaGVkLlxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3YXJuaW5nKGRlc2NyaXB0aW9uOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBjb25maWc/OiB7XG4gICAgICAgIHRpbWVPdXQ/OiBudW1iZXIsXG4gICAgICAgIHJlbW92ZU9uQ2xpY2s/OiBib29sZWFuXG4gICAgfSwgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgVG9hc3QoJ3dhcm5pbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA/IHRpdGxlIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID8gZGVzY3JpcHRpb24gOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnID8gY29uZmlnLnRpbWVPdXQgOiA1MDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0cy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZyA/IGNvbmZpZy5yZW1vdmVPbkNsaWNrIDogZmFsc2UpO1xuICAgICAgICB0aGlzLnB1c2hUb2FzdChtZXNzYWdlKTtcbiAgICAgICAgLy8gYW4gb3B0aW9uYWwgY2FsbGJhY2sgcHJvdmlkZWQgaWYgb25seSBkZXZlbG9wZXJzIHdhbnQgdG8gZXhlY3V0ZSBzb21ldGhpbmcgYWZ0ZXIgYSB0b2FzdCBoYXMgYmVlbiBwdXNoZWQuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcHVzaFRvYXN0KG1lc3NhZ2U6IGFueSkge1xuICAgICAgICB0aGlzLnRvYXN0cy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnN1YmplY3QubmV4dCh0aGlzLnRvYXN0cyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9hc3QoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRvYXN0cyA9IHRoaXMudG9hc3RzLmZpbHRlcih0b2FzdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdG9hc3QuaW5kZXggIT09IGluZGV4O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdWJqZWN0Lm5leHQodGhpcy50b2FzdHMpO1xuICAgIH1cblxuICAgIHJldHJpZXZlVG9hc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxufVxuIl19