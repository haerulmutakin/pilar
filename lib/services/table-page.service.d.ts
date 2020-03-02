import { Observable, BehaviorSubject } from 'rxjs';
import { PilTablePage } from '../models';
export declare class TablePageService {
    page: BehaviorSubject<any>;
    constructor();
    setTablePage(page: PilTablePage): void;
    getTablePage(): Observable<PilTablePage>;
}
