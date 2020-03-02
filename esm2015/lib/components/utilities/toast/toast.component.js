/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/toast/toast.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ToastService } from '../../../services/toast.service';
export class ToastComponent {
    /**
     * @param {?} toastSvc
     */
    constructor(toastSvc) {
        this.toastSvc = toastSvc;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription = this.toastSvc.retrieveToast().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            this.toasts = result;
        }));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeToast(index) {
        this.toastSvc.removeToast(index);
    }
}
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-toast',
                template: `
  <div class="container uii-toast uii-toast-fixed">
    <div class="row">
      <div
        class="col-xs-9 col-xs-offset-3 uii-toast-box"
        [ngClass]="{
          'uii-toast-box-success': toast.type === 'success',
          'uii-toast-box-warning': toast.type === 'warning',
          'uii-toast-box-error': toast.type === 'error',
          'uii-toast-box-info': toast.type === 'info'
        }"
        *ngFor="let toast of toasts; let i = index"
        uiiToast
        [timeOut]=toast.timeOut
        [toastIndex]=toast.index
        [removeOnClick]="toast.removeOnClick"
      >
        <div class="col-xs-12 padding-0">
          <p class="uii-toast-title margin-0"><strong>{{ toast.title }}</strong></p>
          <p class="uii-toast-description margin-0">{{ toast.description }}</p>
        </div>
      </div>
    </div>
  </div>`,
                styles: [".padding-0{padding:0}.margin-0{margin:0}.uii-toast{top:0;right:0;width:45rem;z-index:9999999;overflow:hidden;background:0 0!important}.uii-toast-title{font-size:14px;color:#fff}.uii-toast-description{word-wrap:break-word;color:#fff}.uii-toast-fixed{position:fixed}.uii-toast .row{padding:1rem 4rem;width:100%;background:0 0!important}.uii-toast-box{transition:.2s ease-in-out;padding:1.7rem;margin-top:.6rem;margin-bottom:.6rem;background-color:#fff;box-shadow:0 6px 15px rgba(36,37,38,.3);display:flex;align-items:center;opacity:0}.uii-toast-box-success{background-color:#4db6ac}.uii-toast-box-warning{background-color:#fbc02d}.uii-toast-box-error{background-color:#ff5252}.uii-toast-box-info{background-color:#0277bd}.uii-toast-symbol{width:2.5rem}.uii-toast-cancel{position:absolute;top:50%;right:1.3rem;transform:translateY(-50%)}.uii-toast-cancel:focus{outline:0}.uii-toast-cancel-image{width:1.5rem}"]
            }] }
];
/** @nocollapse */
ToastComponent.ctorParameters = () => [
    { type: ToastService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91dGlsaXRpZXMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFHN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBOEIvRCxNQUFNLE9BQU8sY0FBYzs7OztJQUt6QixZQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO0lBQUcsQ0FBQzs7OztJQUU5QyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F1Qkg7O2FBRVI7Ozs7WUE3QlEsWUFBWTs7OztJQWdDbkIsZ0NBQXFCOztJQUNyQixzQ0FBMkI7Ozs7O0lBRWYsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy90b2FzdCc7XG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLXRvYXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciB1aWktdG9hc3QgdWlpLXRvYXN0LWZpeGVkXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNvbC14cy05IGNvbC14cy1vZmZzZXQtMyB1aWktdG9hc3QtYm94XCJcbiAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICd1aWktdG9hc3QtYm94LXN1Y2Nlc3MnOiB0b2FzdC50eXBlID09PSAnc3VjY2VzcycsXG4gICAgICAgICAgJ3VpaS10b2FzdC1ib3gtd2FybmluZyc6IHRvYXN0LnR5cGUgPT09ICd3YXJuaW5nJyxcbiAgICAgICAgICAndWlpLXRvYXN0LWJveC1lcnJvcic6IHRvYXN0LnR5cGUgPT09ICdlcnJvcicsXG4gICAgICAgICAgJ3VpaS10b2FzdC1ib3gtaW5mbyc6IHRvYXN0LnR5cGUgPT09ICdpbmZvJ1xuICAgICAgICB9XCJcbiAgICAgICAgKm5nRm9yPVwibGV0IHRvYXN0IG9mIHRvYXN0czsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgIHVpaVRvYXN0XG4gICAgICAgIFt0aW1lT3V0XT10b2FzdC50aW1lT3V0XG4gICAgICAgIFt0b2FzdEluZGV4XT10b2FzdC5pbmRleFxuICAgICAgICBbcmVtb3ZlT25DbGlja109XCJ0b2FzdC5yZW1vdmVPbkNsaWNrXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBwYWRkaW5nLTBcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInVpaS10b2FzdC10aXRsZSBtYXJnaW4tMFwiPjxzdHJvbmc+e3sgdG9hc3QudGl0bGUgfX08L3N0cm9uZz48L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ1aWktdG9hc3QtZGVzY3JpcHRpb24gbWFyZ2luLTBcIj57eyB0b2FzdC5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICB0b2FzdHM6IEFycmF5PFRvYXN0PjtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2FzdFN2YzogVG9hc3RTZXJ2aWNlKSB7fVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMudG9hc3RTdmMucmV0cmlldmVUb2FzdCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgdGhpcy50b2FzdHMgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVUb2FzdChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy50b2FzdFN2Yy5yZW1vdmVUb2FzdChpbmRleCk7XG4gIH1cblxufVxuIl19