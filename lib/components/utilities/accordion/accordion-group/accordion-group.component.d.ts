import { EventEmitter, OnInit } from '@angular/core';
import { AccordionService } from './../../../../services/accordion.service';
import { AccordionComponent } from '../accordion.component';
export declare class AccordionGroupComponent implements OnInit {
    private accordionSvc;
    /** initialize accordion group condition */
    isOpen: boolean;
    /** initialize displayed heading */
    heading: string;
    /** disable an accordion */
    isDisabled: boolean;
    /** attach custom panel class */
    panelClass: string;
    /** an emitter which will trigerred if user open/close a panel */
    isOpenChange: EventEmitter<boolean>;
    /** panel's color option */
    panelColor: string;
    /** enable/disable isAnimated for button */
    isAnimated: Boolean;
    protected accordion: AccordionComponent;
    currentClass: string;
    constructor(accordionSvc: AccordionService, accordion: AccordionComponent);
    ngOnInit(): void;
    initIsAnimated(): void;
    panelClicked(): void;
}
