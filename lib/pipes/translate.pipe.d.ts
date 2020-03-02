import { PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';
export declare class TranslatePipe implements PipeTransform {
    private translateSvc;
    constructor(translateSvc: TranslateService);
    transform(value: string, args?: any[]): any;
}
