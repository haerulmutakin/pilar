import { OnInit } from '@angular/core';
import { TabsetDirective } from './../../../directives/tabset-tab/tabset.directive';
export declare class TabsetComponent implements OnInit {
    tabMobileAttr: string;
    tabs: TabsetDirective[];
    constructor();
    ngOnInit(): void;
    addTab(tab: TabsetDirective): void;
    onTabClick(tab: TabsetDirective): void;
    getLeft(): number;
    borderWidth(): number;
    selectTab(tabIndex: number): void;
}
