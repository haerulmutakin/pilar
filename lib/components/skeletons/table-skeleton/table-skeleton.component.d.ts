import { TemplateRef } from '@angular/core';
export declare class TableSkeletonComponent {
    customElement: TemplateRef<any>;
    columnCount: number;
    rowCount: number;
    showActionColumn: boolean;
    showButtonCreate: boolean;
    showCheckButton: boolean;
    showLimitOptions: boolean;
    showMobileLimitOptions: boolean;
    showNumberColumn: boolean;
    showRadioButton: boolean;
    showSearchOptions: boolean;
    useCustomElement: boolean;
    rows: ArrayConstructor;
    columns: ArrayConstructor;
}
