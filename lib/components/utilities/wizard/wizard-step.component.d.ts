import { OnInit, EventEmitter } from '@angular/core';
export declare class WizardStepComponent implements OnInit {
    activeStepIndex: number;
    title: string;
    subtitle: string;
    hidden: boolean;
    isValid: boolean;
    isAllowed: number;
    showNext: boolean;
    showPrev: boolean;
    onNext: EventEmitter<any>;
    onPrev: EventEmitter<any>;
    onComplete: EventEmitter<any>;
    onCancel: EventEmitter<any>;
    _isActive: boolean;
    isDisabled: boolean;
    constructor();
    ngOnInit(): void;
    isActive: boolean;
}
