import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Toast } from '../../../models/toast';
import { ToastService } from '../../../services/toast.service';
export declare class ToastComponent implements OnInit, OnDestroy {
    private toastSvc;
    toasts: Array<Toast>;
    subscription: Subscription;
    constructor(toastSvc: ToastService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    removeToast(index: number): void;
}
