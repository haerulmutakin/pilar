import { Subject } from 'rxjs';
export declare class AccordionService {
    /** turn on/off animation */
    protected _isAnimated: boolean;
    /** if 'true', expanding one item will close other panels */
    protected _closeOthers: boolean;
    /** isOpen subscription */
    subject: Subject<boolean>;
    constructor();
    setIsOpen(value: boolean): void;
    getIsOpen(): import("rxjs").Observable<boolean>;
    setIsAnimated(value: boolean): void;
    getIsAnimated(): boolean;
    setCloseOthers(value: boolean): void;
    getCloseOthers(): boolean;
}
