import { ElementRef, OnInit, EventEmitter } from '@angular/core';
import { TabsetComponent } from './../../components/utilities/tabset/tabset.component';
export declare class TabsetDirective implements OnInit {
    elRef: ElementRef;
    title: string;
    tabIcon: string;
    active: boolean;
    selectedTab: this;
    addClass: boolean;
    selected: EventEmitter<this>;
    deselected: EventEmitter<this>;
    tabset: TabsetComponent;
    protected _active: boolean;
    constructor(tabset: TabsetComponent, elRef: ElementRef);
    ngOnInit(): void;
}
