import { OnInit, EventEmitter } from '@angular/core';
import { PilTablePage } from '../../../../../models';
import { TablePageService } from '../../../../../services/table-page.service';
export declare class TableFooterComponent implements OnInit {
    private _tablePageSvc;
    footerInfo: boolean;
    footerOptions: boolean;
    paginationOptions: boolean;
    pageChanged: EventEmitter<{}>;
    totalElements: number;
    startPage: number;
    endPage: number;
    _page: PilTablePage;
    constructor(_tablePageSvc: TablePageService);
    ngOnInit(): void;
    setPageInfo(): void;
    selectedPageChange($event: any): void;
}
