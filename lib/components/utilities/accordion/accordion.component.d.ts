import { AccordionService } from './../../../services/accordion.service';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
export declare class AccordionComponent {
    private accordionSvc;
    /** turn on/off animation */
    isAnimated: boolean;
    /** if 'true', expanding one item will close others */
    closeOthers: boolean;
    protected groups: AccordionGroupComponent[];
    constructor(accordionSvc: AccordionService);
    closeOthersPanels(openGroup: AccordionGroupComponent): void;
    addGroup(group: AccordionGroupComponent): void;
}
