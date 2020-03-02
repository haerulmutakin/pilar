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
export class ToastService {
    /**
     * @param {?} factoryResolver
     */
    constructor(factoryResolver) {
        this.factoryResolver = factoryResolver;
        this.toasts = [];
        this.subject = new Subject();
        this.toastHovered = false;
    }
    /**
     * @param {?} viewContainerRef
     * @return {?}
     */
    setToastRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }
    /**
     * @return {?}
     */
    addToastDynamicComponent() {
        /** @type {?} */
        const factory = this.factoryResolver.resolveComponentFactory(ToastComponent);
        /** @type {?} */
        const component = factory.create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
    }
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    error(description, title, config, callback) {
        /** @type {?} */
        const message = new Toast('error', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    }
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    info(description, title, config, callback) {
        /** @type {?} */
        const message = new Toast('info', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    }
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    success(description, title, config, callback) {
        /** @type {?} */
        const message = new Toast('success', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    }
    /**
     * @param {?} description
     * @param {?=} title
     * @param {?=} config
     * @param {?=} callback
     * @return {?}
     */
    warning(description, title, config, callback) {
        /** @type {?} */
        const message = new Toast('warning', title ? title : '', description ? description : '', config ? config.timeOut : 5000, this.toasts.length, config ? config.removeOnClick : false);
        this.pushToast(message);
        // an optional callback provided if only developers want to execute something after a toast has been pushed.
        if (callback) {
            callback();
        }
    }
    /**
     * @private
     * @param {?} message
     * @return {?}
     */
    pushToast(message) {
        this.toasts.push(message);
        this.subject.next(this.toasts);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeToast(index) {
        this.toasts = this.toasts.filter((/**
         * @param {?} toast
         * @return {?}
         */
        toast => {
            return toast.index !== index;
        }));
        this.subject.next(this.toasts);
    }
    /**
     * @return {?}
     */
    retrieveToast() {
        return this.subject.asObservable();
    }
}
ToastService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ToastService.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
/** @nocollapse */ ToastService.ngInjectableDef = i0.defineInjectable({ factory: function ToastService_Factory() { return new ToastService(i0.inject(i0.ComponentFactoryResolver)); }, token: ToastService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7QUFNL0UsTUFBTSxPQUFPLFlBQVk7Ozs7SUFRckIsWUFBbUIsZUFBeUM7UUFBekMsb0JBQWUsR0FBZixlQUFlLENBQTBCO1FBTnBELFdBQU0sR0FBaUIsRUFBRSxDQUFDO1FBQzFCLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBR3JDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBRTBDLENBQUM7Ozs7O0lBRWhFLDRCQUE0QixDQUFDLGdCQUFxQjtRQUM5QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELHdCQUF3Qjs7Y0FDZCxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUM7O2NBQ3RFLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7UUFDdkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7Ozs7SUFFRCxLQUFLLENBQUMsV0FBbUIsRUFBRSxLQUFjLEVBQUUsTUFHMUMsRUFBRSxRQUFxQjs7Y0FDZCxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUNULEtBQUssQ0FBQyxDQUFD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LENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7OztZQTFHSixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQb0Isd0JBQXdCOzs7Ozs7OztJQVd6Qyw4QkFBa0M7Ozs7O0lBQ2xDLCtCQUFxQzs7Ozs7SUFDckMseUNBQStCOztJQUUvQixvQ0FBcUI7O0lBRVQsdUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJy4uL21vZGVscy90b2FzdCc7XG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbGl0aWVzL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgVG9hc3RTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgdG9hc3RzOiBBcnJheTxUb2FzdD4gPSBbXTtcbiAgICBwcml2YXRlIHN1YmplY3QgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgcHJpdmF0ZSByb290Vmlld0NvbnRhaW5lcjogYW55O1xuXG4gICAgdG9hc3RIb3ZlcmVkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHt9XG5cbiAgICBzZXRUb2FzdFJvb3RWaWV3Q29udGFpbmVyUmVmKHZpZXdDb250YWluZXJSZWY6IGFueSkge1xuICAgICAgICB0aGlzLnJvb3RWaWV3Q29udGFpbmVyID0gdmlld0NvbnRhaW5lclJlZjtcbiAgICB9XG5cbiAgICBhZGRUb2FzdER5bmFtaWNDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUb2FzdENvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGZhY3RvcnkuY3JlYXRlKHRoaXMucm9vdFZpZXdDb250YWluZXIucGFyZW50SW5qZWN0b3IpO1xuICAgICAgICB0aGlzLnJvb3RWaWV3Q29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xuICAgIH1cblxuICAgIGVycm9yKGRlc2NyaXB0aW9uOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBjb25maWc/OiB7XG4gICAgICAgIHRpbWVPdXQ/OiBudW1iZXIsXG4gICAgICAgIHJlbW92ZU9uQ2xpY2s/OiBib29sZWFuXG4gICAgfSwgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgVG9hc3QoJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPyB0aXRsZSA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA/IGRlc2NyaXB0aW9uIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZyA/IGNvbmZpZy50aW1lT3V0IDogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPyBjb25maWcucmVtb3ZlT25DbGljayA6IGZhbHNlKTtcbiAgICAgICAgdGhpcy5wdXNoVG9hc3QobWVzc2FnZSk7XG4gICAgICAgIC8vIGFuIG9wdGlvbmFsIGNhbGxiYWNrIHByb3ZpZGVkIGlmIG9ubHkgZGV2ZWxvcGVycyB3YW50IHRvIGV4ZWN1dGUgc29tZXRoaW5nIGFmdGVyIGEgdG9hc3QgaGFzIGJlZW4gcHVzaGVkLlxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbmZvKGRlc2NyaXB0aW9uOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBjb25maWc/OiB7XG4gICAgICAgIHRpbWVPdXQ/OiBudW1iZXIsXG4gICAgICAgIHJlbW92ZU9uQ2xpY2s/OiBib29sZWFuXG4gICAgfSwgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgVG9hc3QoJ2luZm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA/IHRpdGxlIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID8gZGVzY3JpcHRpb24gOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnID8gY29uZmlnLnRpbWVPdXQgOiA1MDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0cy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZyA/IGNvbmZpZy5yZW1vdmVPbkNsaWNrIDogZmFsc2UpO1xuICAgICAgICB0aGlzLnB1c2hUb2FzdChtZXNzYWdlKTtcbiAgICAgICAgLy8gYW4gb3B0aW9uYWwgY2FsbGJhY2sgcHJvdmlkZWQgaWYgb25seSBkZXZlbG9wZXJzIHdhbnQgdG8gZXhlY3V0ZSBzb21ldGhpbmcgYWZ0ZXIgYSB0b2FzdCBoYXMgYmVlbiBwdXNoZWQuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Y2Nlc3MoZGVzY3JpcHRpb246IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIGNvbmZpZz86IHtcbiAgICAgICAgdGltZU91dD86IG51bWJlcixcbiAgICAgICAgcmVtb3ZlT25DbGljaz86IGJvb2xlYW5cbiAgICB9LCBjYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBUb2FzdCgnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID8gdGl0bGUgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPyBkZXNjcmlwdGlvbiA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPyBjb25maWcudGltZU91dCA6IDUwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3RzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnID8gY29uZmlnLnJlbW92ZU9uQ2xpY2sgOiBmYWxzZSk7XG4gICAgICAgIHRoaXMucHVzaFRvYXN0KG1lc3NhZ2UpO1xuICAgICAgICAvLyBhbiBvcHRpb25hbCBjYWxsYmFjayBwcm92aWRlZCBpZiBvbmx5IGRldmVsb3BlcnMgd2FudCB0byBleGVjdXRlIHNvbWV0aGluZyBhZnRlciBhIHRvYXN0IGhhcyBiZWVuIHB1c2hlZC5cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2FybmluZyhkZXNjcmlwdGlvbjogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgY29uZmlnPzoge1xuICAgICAgICB0aW1lT3V0PzogbnVtYmVyLFxuICAgICAgICByZW1vdmVPbkNsaWNrPzogYm9vbGVhblxuICAgIH0sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IFRvYXN0KCd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPyB0aXRsZSA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA/IGRlc2NyaXB0aW9uIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZyA/IGNvbmZpZy50aW1lT3V0IDogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcgPyBjb25maWcucmVtb3ZlT25DbGljayA6IGZhbHNlKTtcbiAgICAgICAgdGhpcy5wdXNoVG9hc3QobWVzc2FnZSk7XG4gICAgICAgIC8vIGFuIG9wdGlvbmFsIGNhbGxiYWNrIHByb3ZpZGVkIGlmIG9ubHkgZGV2ZWxvcGVycyB3YW50IHRvIGV4ZWN1dGUgc29tZXRoaW5nIGFmdGVyIGEgdG9hc3QgaGFzIGJlZW4gcHVzaGVkLlxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHB1c2hUb2FzdChtZXNzYWdlOiBhbnkpIHtcbiAgICAgICAgdGhpcy50b2FzdHMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5zdWJqZWN0Lm5leHQodGhpcy50b2FzdHMpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvYXN0KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2FzdHMgPSB0aGlzLnRvYXN0cy5maWx0ZXIodG9hc3QgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRvYXN0LmluZGV4ICE9PSBpbmRleDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHRoaXMudG9hc3RzKTtcbiAgICB9XG5cbiAgICByZXRyaWV2ZVRvYXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbn1cbiJdfQ==