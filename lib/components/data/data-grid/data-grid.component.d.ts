import { EventEmitter } from '@angular/core';
export declare class UiiDataGridComponent {
    gridTitle: string;
    columnTitle: Array<any>;
    rowTitle: Array<any>;
    data: Array<any>;
    enableItemCLick: boolean;
    itemClick: EventEmitter<{}>;
    _enableItemClick: boolean;
    onItemClick(data: any): void;
}
