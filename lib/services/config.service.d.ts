import { Paginate } from './../models';
import { TranslateService } from './translate.service';
export declare class ConfigService {
    private translateSvc;
    constructor(translateSvc: TranslateService);
    paginateConfig(): Paginate;
}
