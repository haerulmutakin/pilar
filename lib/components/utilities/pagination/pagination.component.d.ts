import { OnInit, EventEmitter } from '@angular/core';
import { PageModel, PageEventModel } from './../../../models/pagination.model';
export declare class PaginationComponent implements OnInit {
    dataPerPage: number;
    amountOfData: number;
    pageTotal: number;
    currentPage: number;
    paginationALign: string;
    pageChanged: EventEmitter<PageEventModel>;
    currentPageChange: EventEmitter<number>;
    _amountOfData: number;
    _dataPerPage: number;
    _pageTotal: number;
    selectedPage: number;
    isInitilized: boolean;
    pages: PageModel[];
    constructor();
    ngOnInit(): void;
    countPageTotal(): number;
    renderPage(currentPage: number, pageTotal: number): any[];
    makePage(label: string, value: number, active: boolean): {
        label: string;
        value: number;
        active: boolean;
    };
    onPageSelect(pageNumber: number): void;
    doSelectPage(pageNumber: number): void;
    isDefined(): boolean;
}
