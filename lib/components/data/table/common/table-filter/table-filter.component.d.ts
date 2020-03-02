import { OnInit, EventEmitter } from '@angular/core';
export declare class TableFilterComponent implements OnInit {
    limitOptions: boolean;
    searchOptions: boolean;
    limitChanged: EventEmitter<{}>;
    searchChanged: EventEmitter<{}>;
    limitOpts: {
        label: string;
        value: number;
    }[];
    constructor();
    ngOnInit(): void;
    onSearchChange(keyword: string): void;
    onLimitChange(limit: number): void;
}
