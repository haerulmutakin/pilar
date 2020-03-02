import { OnInit, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
export declare class ConfirmdialogComponent implements OnInit, OnDestroy {
    _activeModal: BsModalRef;
    confirmBtnlabel: string;
    cancelBtnLabel: string;
    active: boolean;
    message: string;
    title: string;
    onClose: Subject<boolean>;
    constructor(_activeModal: BsModalRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    showConfirmationModal(config: any): void;
    onConfirm(): void;
    onCancel(): void;
    hideConfirmationModal(): void;
}
