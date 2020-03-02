import { Renderer2, ElementRef, AfterViewChecked } from '@angular/core';
import { AccordionService } from '../../services/accordion.service';
export declare class CollapseDirective implements AfterViewChecked {
    private renderer;
    private hostElement;
    private accordionSvc;
    /** update accordion group condition */
    isOpen: boolean;
    /** if closeOther(s) is true, then prevent the closed groups to execute onTransitionEnd */
    selectedGroup: Boolean;
    /** turn on/off animation */
    isAnimated: boolean;
    /** styles which will be applied if isAnimated = false */
    DISPLAY_SHOW_VALUE: string;
    DISPLAY_HIDE_VALUE: string;
    /** a class which will be applied if isAnimated = false */
    DISPLAY_NONE_CLASS: string;
    /** a class which will be applied if isAnimated = true */
    DISPLAY_ANIMATED_CLASS: string;
    /** store temporary changing height */
    tempHeight: number;
    constructor(renderer: Renderer2, hostElement: ElementRef, accordionSvc: AccordionService);
    ngAfterViewChecked(): void;
    initOpenStatus(isAnimated: boolean, isOpen: boolean): void;
    changeOpenStatus(isAnimated: boolean, isOpen: boolean): void;
    onTransitionEnd(): void;
}
