/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/toast/toast.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ToastService } from '../../../services/toast.service';
var ToastComponent = /** @class */ (function () {
    function ToastComponent(toastSvc) {
        this.toastSvc = toastSvc;
    }
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription = this.toastSvc.retrieveToast().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.toasts = result;
        }));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ToastComponent.prototype.removeToast = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.toastSvc.removeToast(index);
    };
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-toast',
                    template: "\n  <div class=\"container uii-toast uii-toast-fixed\">\n    <div class=\"row\">\n      <div\n        class=\"col-xs-9 col-xs-offset-3 uii-toast-box\"\n        [ngClass]=\"{\n          'uii-toast-box-success': toast.type === 'success',\n          'uii-toast-box-warning': toast.type === 'warning',\n          'uii-toast-box-error': toast.type === 'error',\n          'uii-toast-box-info': toast.type === 'info'\n        }\"\n        *ngFor=\"let toast of toasts; let i = index\"\n        uiiToast\n        [timeOut]=toast.timeOut\n        [toastIndex]=toast.index\n        [removeOnClick]=\"toast.removeOnClick\"\n      >\n        <div class=\"col-xs-12 padding-0\">\n          <p class=\"uii-toast-title margin-0\"><strong>{{ toast.title }}</strong></p>\n          <p class=\"uii-toast-description margin-0\">{{ toast.description }}</p>\n        </div>\n      </div>\n    </div>\n  </div>",
                    styles: [".padding-0{padding:0}.margin-0{margin:0}.uii-toast{top:0;right:0;width:45rem;z-index:9999999;overflow:hidden;background:0 0!important}.uii-toast-title{font-size:14px;color:#fff}.uii-toast-description{word-wrap:break-word;color:#fff}.uii-toast-fixed{position:fixed}.uii-toast .row{padding:1rem 4rem;width:100%;background:0 0!important}.uii-toast-box{transition:.2s ease-in-out;padding:1.7rem;margin-top:.6rem;margin-bottom:.6rem;background-color:#fff;box-shadow:0 6px 15px rgba(36,37,38,.3);display:flex;align-items:center;opacity:0}.uii-toast-box-success{background-color:#4db6ac}.uii-toast-box-warning{background-color:#fbc02d}.uii-toast-box-error{background-color:#ff5252}.uii-toast-box-info{background-color:#0277bd}.uii-toast-symbol{width:2.5rem}.uii-toast-cancel{position:absolute;top:50%;right:1.3rem;transform:translateY(-50%)}.uii-toast-cancel:focus{outline:0}.uii-toast-cancel-image{width:1.5rem}"]
                }] }
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return [
        { type: ToastService }
    ]; };
    return ToastComponent;
}());
export { ToastComponent };
if (false) {
    /** @type {?} */
    ToastComponent.prototype.toasts;
    /** @type {?} */
    ToastComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    ToastComponent.prototype.toastSvc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91dGlsaXRpZXMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFHN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRS9EO0lBaUNFLHdCQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO0lBQUcsQ0FBQzs7OztJQUU5QyxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ2hFLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxvQ0FBVzs7OztJQUFYLFVBQVksS0FBYTtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsMjNCQXVCSDs7aUJBRVI7Ozs7Z0JBN0JRLFlBQVk7O0lBbURyQixxQkFBQztDQUFBLEFBakRELElBaURDO1NBckJZLGNBQWM7OztJQUV6QixnQ0FBcUI7O0lBQ3JCLHNDQUEyQjs7Ozs7SUFFZixrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3RvYXN0JztcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3RvYXN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWktdG9hc3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHVpaS10b2FzdCB1aWktdG9hc3QtZml4ZWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY29sLXhzLTkgY29sLXhzLW9mZnNldC0zIHVpaS10b2FzdC1ib3hcIlxuICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgJ3VpaS10b2FzdC1ib3gtc3VjY2Vzcyc6IHRvYXN0LnR5cGUgPT09ICdzdWNjZXNzJyxcbiAgICAgICAgICAndWlpLXRvYXN0LWJveC13YXJuaW5nJzogdG9hc3QudHlwZSA9PT0gJ3dhcm5pbmcnLFxuICAgICAgICAgICd1aWktdG9hc3QtYm94LWVycm9yJzogdG9hc3QudHlwZSA9PT0gJ2Vycm9yJyxcbiAgICAgICAgICAndWlpLXRvYXN0LWJveC1pbmZvJzogdG9hc3QudHlwZSA9PT0gJ2luZm8nXG4gICAgICAgIH1cIlxuICAgICAgICAqbmdGb3I9XCJsZXQgdG9hc3Qgb2YgdG9hc3RzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgdWlpVG9hc3RcbiAgICAgICAgW3RpbWVPdXRdPXRvYXN0LnRpbWVPdXRcbiAgICAgICAgW3RvYXN0SW5kZXhdPXRvYXN0LmluZGV4XG4gICAgICAgIFtyZW1vdmVPbkNsaWNrXT1cInRvYXN0LnJlbW92ZU9uQ2xpY2tcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIHBhZGRpbmctMFwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwidWlpLXRvYXN0LXRpdGxlIG1hcmdpbi0wXCI+PHN0cm9uZz57eyB0b2FzdC50aXRsZSB9fTwvc3Ryb25nPjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInVpaS10b2FzdC1kZXNjcmlwdGlvbiBtYXJnaW4tMFwiPnt7IHRvYXN0LmRlc2NyaXB0aW9uIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5gLFxuICBzdHlsZVVybHM6IFsnLi90b2FzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHRvYXN0czogQXJyYXk8VG9hc3Q+O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvYXN0U3ZjOiBUb2FzdFNlcnZpY2UpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy50b2FzdFN2Yy5yZXRyaWV2ZVRvYXN0KCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLnRvYXN0cyA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVRvYXN0KGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnRvYXN0U3ZjLnJlbW92ZVRvYXN0KGluZGV4KTtcbiAgfVxuXG59XG4iXX0=