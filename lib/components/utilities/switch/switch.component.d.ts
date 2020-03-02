import { OnInit, EventEmitter } from '@angular/core';
export declare class SwitchComponent implements OnInit {
    useOverlay: boolean;
    checked: boolean;
    disabled: boolean;
    changed: EventEmitter<{}>;
    changeEvent: EventEmitter<{}>;
    _checked: boolean;
    _disabled: boolean;
    constructor();
    ngOnInit(): void;
    onSwitchToggle(): void;
    onOverlayToggle(): void;
}
