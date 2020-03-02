import { EventEmitter } from '@angular/core';
export declare class TranslateService {
    private _translations;
    private _currentLang;
    private _defaultLang;
    private _fallback;
    private PLACEHOLDER;
    onLangChanged: EventEmitter<string>;
    readonly currentLang: string;
    setDefaultLang(lang: string): void;
    enableFallback(enable: boolean): void;
    constructor(_translations: any);
    use(lang: string): void;
    private translate;
    replace(word?: string, words?: string | string[]): string;
    instant(key: string, words?: string | string[]): string;
}
