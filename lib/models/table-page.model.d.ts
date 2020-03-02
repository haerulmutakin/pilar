export declare class PilTablePagedData<T> {
    data: T[];
    page: PilTablePage;
    response: T[];
}
export declare class PilTablePage {
    size: number;
    page: 0;
    totalElements: number;
    totalPages: number;
    pageNumber: number;
    keyword: string;
}
