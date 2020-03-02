/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/data/table/common/table-action/table-action.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class TableActionComponent {
    constructor() {
        this.emitAction = new EventEmitter();
    }
}
TableActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-table-action',
                template: `
  <div class="cell-action">
    <span *ngIf="auth && auth.canPublish" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'publish'})" tooltip="Terbit">
      <span class="fa fa-arrow-circle-up"></span>
    </span>
    <span *ngIf="auth && auth.canUpdate" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'update'})" tooltip="Edit">
      <span class="fa fa-pencil"></span>
    </span>
    <span *ngIf="auth && auth.canRead" class="action-icon i-mat icon-primary " (click)="emitAction.emit({index: index, type: 'detail'})" tooltip="Detail">
      <span class="material-icons">visibility</span>
    </span>
    <span *ngIf="auth && auth.canVerify" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'verify'})" tooltip="Verifikasi">
      <span class="fa fa-comment"></span>
    </span>
    <span *ngIf="auth && auth.canValidate" class="action-icon i-mat icon-primary " (click)="emitAction.emit({index: index, type: 'validate'})" tooltip="Validasi">
      <span class="material-icons">playlist_add_check</span>
    </span>
    <span *ngIf="auth && auth.canPrint" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'print'})" tooltip="Cetak">
      <span class="fa fa-print"></span>
    </span>
    <span *ngIf="auth && auth.canReload" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'reload'})" tooltip="Muat ulang">
      <span class="fa fa-repeat"></span>
    </span>
    <span *ngIf="actionInValidation === true" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'invalidate'})" tooltip="Batalkan validasi">
      <span class="fa fa-lock"></span>
    </span>
    <span *ngIf="auth && auth.canDelete" class="action-icon icon-primary " (click)="emitAction.emit({index: index, type: 'delete'})" tooltip="Hapus">
      <span class="fa fa-trash"></span>
    </span>
    <span *ngIf="auth && auth.canActivate" class="action-icon i-on-off icon-primary" tooltip="Aktivasi">
      <uii-switch
        [useOverlay]="true"
        [checked]="item.is_active === 1 || item.flag_aktif === 1 ? true : false"
        (changeEvent)="emitAction.emit({$event: $event, index: index, type: 'activate'})">
      </uii-switch>
    </span>
  </div>
  `,
                styles: [".cell-action{font-size:20px;width:100%}.cell-action .action-icon{cursor:pointer;margin:0 5px;vertical-align:middle;display:inline}.cell-action .action-icon.i-mat,.cell-action .action-icon.i-on-off{position:relative;top:5px}"]
            }] }
];
TableActionComponent.propDecorators = {
    actionInValidation: [{ type: Input }],
    item: [{ type: Input }],
    auth: [{ type: Input }],
    index: [{ type: Input }],
    emitAction: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TableActionComponent.prototype.actionInValidation;
    /** @type {?} */
    TableActionComponent.prototype.item;
    /** @type {?} */
    TableActionComponent.prototype.auth;
    /** @type {?} */
    TableActionComponent.prototype.index;
    /** @type {?} */
    TableActionComponent.prototype.emitAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0YS90YWJsZS9jb21tb24vdGFibGUtYWN0aW9uL3RhYmxlLWFjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBNEN2RSxNQUFNLE9BQU8sb0JBQW9CO0lBMUNqQztRQStDWSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7WUFoREEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFDVDs7YUFFRjs7O2lDQUVFLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsTUFBTTs7OztJQUpQLGtEQUFxQzs7SUFDckMsb0NBQW1COztJQUNuQixvQ0FBbUI7O0lBQ25CLHFDQUF1Qjs7SUFDdkIsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLXRhYmxlLWFjdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJjZWxsLWFjdGlvblwiPlxuICAgIDxzcGFuICpuZ0lmPVwiYXV0aCAmJiBhdXRoLmNhblB1Ymxpc2hcIiBjbGFzcz1cImFjdGlvbi1pY29uIGljb24tcHJpbWFyeSBcIiAoY2xpY2spPVwiZW1pdEFjdGlvbi5lbWl0KHtpbmRleDogaW5kZXgsIHR5cGU6ICdwdWJsaXNoJ30pXCIgdG9vbHRpcD1cIlRlcmJpdFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1hcnJvdy1jaXJjbGUtdXBcIj48L3NwYW4+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiYXV0aCAmJiBhdXRoLmNhblVwZGF0ZVwiIGNsYXNzPVwiYWN0aW9uLWljb24gaWNvbi1wcmltYXJ5IFwiIChjbGljayk9XCJlbWl0QWN0aW9uLmVtaXQoe2luZGV4OiBpbmRleCwgdHlwZTogJ3VwZGF0ZSd9KVwiIHRvb2x0aXA9XCJFZGl0XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXBlbmNpbFwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJhdXRoICYmIGF1dGguY2FuUmVhZFwiIGNsYXNzPVwiYWN0aW9uLWljb24gaS1tYXQgaWNvbi1wcmltYXJ5IFwiIChjbGljayk9XCJlbWl0QWN0aW9uLmVtaXQoe2luZGV4OiBpbmRleCwgdHlwZTogJ2RldGFpbCd9KVwiIHRvb2x0aXA9XCJEZXRhaWxcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj52aXNpYmlsaXR5PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImF1dGggJiYgYXV0aC5jYW5WZXJpZnlcIiBjbGFzcz1cImFjdGlvbi1pY29uIGljb24tcHJpbWFyeSBcIiAoY2xpY2spPVwiZW1pdEFjdGlvbi5lbWl0KHtpbmRleDogaW5kZXgsIHR5cGU6ICd2ZXJpZnknfSlcIiB0b29sdGlwPVwiVmVyaWZpa2FzaVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jb21tZW50XCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImF1dGggJiYgYXV0aC5jYW5WYWxpZGF0ZVwiIGNsYXNzPVwiYWN0aW9uLWljb24gaS1tYXQgaWNvbi1wcmltYXJ5IFwiIChjbGljayk9XCJlbWl0QWN0aW9uLmVtaXQoe2luZGV4OiBpbmRleCwgdHlwZTogJ3ZhbGlkYXRlJ30pXCIgdG9vbHRpcD1cIlZhbGlkYXNpXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cGxheWxpc3RfYWRkX2NoZWNrPC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImF1dGggJiYgYXV0aC5jYW5QcmludFwiIGNsYXNzPVwiYWN0aW9uLWljb24gaWNvbi1wcmltYXJ5IFwiIChjbGljayk9XCJlbWl0QWN0aW9uLmVtaXQoe2luZGV4OiBpbmRleCwgdHlwZTogJ3ByaW50J30pXCIgdG9vbHRpcD1cIkNldGFrXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXByaW50XCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImF1dGggJiYgYXV0aC5jYW5SZWxvYWRcIiBjbGFzcz1cImFjdGlvbi1pY29uIGljb24tcHJpbWFyeSBcIiAoY2xpY2spPVwiZW1pdEFjdGlvbi5lbWl0KHtpbmRleDogaW5kZXgsIHR5cGU6ICdyZWxvYWQnfSlcIiB0b29sdGlwPVwiTXVhdCB1bGFuZ1wiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1yZXBlYXRcIj48L3NwYW4+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiYWN0aW9uSW5WYWxpZGF0aW9uID09PSB0cnVlXCIgY2xhc3M9XCJhY3Rpb24taWNvbiBpY29uLXByaW1hcnkgXCIgKGNsaWNrKT1cImVtaXRBY3Rpb24uZW1pdCh7aW5kZXg6IGluZGV4LCB0eXBlOiAnaW52YWxpZGF0ZSd9KVwiIHRvb2x0aXA9XCJCYXRhbGthbiB2YWxpZGFzaVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1sb2NrXCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cImF1dGggJiYgYXV0aC5jYW5EZWxldGVcIiBjbGFzcz1cImFjdGlvbi1pY29uIGljb24tcHJpbWFyeSBcIiAoY2xpY2spPVwiZW1pdEFjdGlvbi5lbWl0KHtpbmRleDogaW5kZXgsIHR5cGU6ICdkZWxldGUnfSlcIiB0b29sdGlwPVwiSGFwdXNcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L3NwYW4+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwiYXV0aCAmJiBhdXRoLmNhbkFjdGl2YXRlXCIgY2xhc3M9XCJhY3Rpb24taWNvbiBpLW9uLW9mZiBpY29uLXByaW1hcnlcIiB0b29sdGlwPVwiQWt0aXZhc2lcIj5cbiAgICAgIDx1aWktc3dpdGNoXG4gICAgICAgIFt1c2VPdmVybGF5XT1cInRydWVcIlxuICAgICAgICBbY2hlY2tlZF09XCJpdGVtLmlzX2FjdGl2ZSA9PT0gMSB8fCBpdGVtLmZsYWdfYWt0aWYgPT09IDEgPyB0cnVlIDogZmFsc2VcIlxuICAgICAgICAoY2hhbmdlRXZlbnQpPVwiZW1pdEFjdGlvbi5lbWl0KHskZXZlbnQ6ICRldmVudCwgaW5kZXg6IGluZGV4LCB0eXBlOiAnYWN0aXZhdGUnfSlcIj5cbiAgICAgIDwvdWlpLXN3aXRjaD5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1hY3Rpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUFjdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGFjdGlvbkluVmFsaWRhdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgaXRlbTogYW55O1xuICBASW5wdXQoKSBhdXRoOiBhbnk7XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG4gIEBPdXRwdXQoKSBlbWl0QWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xufVxuIl19