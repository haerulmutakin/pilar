import { OnInit, EventEmitter } from '@angular/core';
export declare class MobileFilterComponent implements OnInit {
    checkboxColumn: boolean;
    columns: Array<any>;
    limitOptions: boolean;
    searchOptions: boolean;
    isAllRowsSelected: boolean;
    limitChanged: EventEmitter<{}>;
    allRowsOnMobileSelected: EventEmitter<{}>;
    searchChanged: EventEmitter<{}>;
    columnSorted: EventEmitter<{}>;
    limitOpts: {
        label: string;
        value: number;
    }[];
    selectedLimit: number;
    toogleSearch: boolean;
    toggleLimit: boolean;
    isSortAsc: boolean;
    toggleSort: boolean;
    selectedColumn: any;
    constructor();
    ngOnInit(): void;
    emitColumnSort(): void;
    onColumnSelect(column: any): void;
    onLimitChange(limit: number): void;
    onRowSelect($event: any): void;
    onSearchChange(keyword: string): void;
    onSortTypeChange(): void;
}
