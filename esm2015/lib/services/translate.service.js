/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/translate.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, EventEmitter } from '@angular/core';
import { TRANSLATIONS } from '../providers/translations';
export class TranslateService {
    // inject our translations
    /**
     * @param {?} _translations
     */
    constructor(_translations) {
        this._translations = _translations;
        this.PLACEHOLDER = '%';
        this.onLangChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get currentLang() {
        return this._currentLang || this._defaultLang;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    setDefaultLang(lang) {
        this._defaultLang = lang;
    }
    /**
     * @param {?} enable
     * @return {?}
     */
    enableFallback(enable) {
        this._fallback = enable;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        // set current language
        this._currentLang = lang;
        this.onLangChanged.emit(lang);
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    translate(key) {
        /** @type {?} */
        const translation = key;
        // found in current language
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        // fallback disabled
        if (!this._fallback) {
            return translation;
        }
        // found in default language
        if (this._translations[this._defaultLang] && this._translations[this._defaultLang][key]) {
            return this._translations[this._defaultLang][key];
        }
        // not found
        return translation;
    }
    /**
     * @param {?=} word
     * @param {?=} words
     * @return {?}
     */
    replace(word = '', words = '') {
        /** @type {?} */
        let translation = word;
        /** @type {?} */
        const values = [].concat(words);
        values.forEach((/**
         * @param {?} e
         * @param {?} i
         * @return {?}
         */
        (e, i) => {
            translation = translation.replace(this.PLACEHOLDER.concat((/** @type {?} */ (i))), e);
        }));
        return translation;
    }
    /**
     * @param {?} key
     * @param {?=} words
     * @return {?}
     */
    instant(key, words) {
        // public perform translation
        /** @type {?} */
        const translation = this.translate(key);
        if (!words) {
            return translation;
        }
        return this.replace(translation, words);
    }
}
TranslateService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TranslateService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [TRANSLATIONS,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._currentLang;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._defaultLang;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._fallback;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.PLACEHOLDER;
    /** @type {?} */
    TranslateService.prototype.onLangChanged;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._translations;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRyxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHekQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFxQjNCLFlBQ2dDLGFBQWtCO1FBQWxCLGtCQUFhLEdBQWIsYUFBYSxDQUFLO1FBbEIxQyxnQkFBVyxHQUFHLEdBQUcsQ0FBQztRQUVuQixrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0lBaUJwRSxDQUFDOzs7O0lBZkwsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRU0sY0FBYyxDQUFDLElBQVk7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsTUFBZTtRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDOzs7OztJQU9NLEdBQUcsQ0FBQyxJQUFZO1FBQ3JCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFTyxTQUFTLENBQUMsR0FBVzs7Y0FDckIsV0FBVyxHQUFHLEdBQUc7UUFFdkIsNEJBQTRCO1FBQzVCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckYsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsRDtRQUVELG9CQUFvQjtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPLFdBQVcsQ0FBQztTQUNwQjtRQUVELDRCQUE0QjtRQUM1QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZGLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkQ7UUFFRCxZQUFZO1FBQ1osT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU0sT0FBTyxDQUFDLE9BQWUsRUFBRSxFQUFFLFFBQTJCLEVBQUU7O1lBQ3pELFdBQVcsR0FBVyxJQUFJOztjQUV4QixNQUFNLEdBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFekMsTUFBTSxDQUFDLE9BQU87Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsbUJBQUssQ0FBQyxFQUFBLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVNLE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBeUI7OztjQUU3QyxXQUFXLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFFL0MsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU8sV0FBVyxDQUFDO1NBQUU7UUFFbkMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUF6RUYsVUFBVTs7Ozs0Q0F1Qk4sTUFBTSxTQUFDLFlBQVk7Ozs7Ozs7SUFyQnRCLHdDQUE2Qjs7Ozs7SUFDN0Isd0NBQTZCOzs7OztJQUM3QixxQ0FBMkI7Ozs7O0lBQzNCLHVDQUEwQjs7SUFFMUIseUNBQXdFOzs7OztJQWdCdEUseUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBFdmVudEVtaXR0ZXIgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUUkFOU0xBVElPTlMgfSBmcm9tICcuLi9wcm92aWRlcnMvdHJhbnNsYXRpb25zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xuICBwcml2YXRlIF9jdXJyZW50TGFuZzogc3RyaW5nO1xuICBwcml2YXRlIF9kZWZhdWx0TGFuZzogc3RyaW5nO1xuICBwcml2YXRlIF9mYWxsYmFjazogYm9vbGVhbjtcbiAgcHJpdmF0ZSBQTEFDRUhPTERFUiA9ICclJztcblxuICBwdWJsaWMgb25MYW5nQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBwdWJsaWMgZ2V0IGN1cnJlbnRMYW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMYW5nIHx8IHRoaXMuX2RlZmF1bHRMYW5nO1xuICB9XG5cbiAgcHVibGljIHNldERlZmF1bHRMYW5nKGxhbmc6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRMYW5nID0gbGFuZztcbiAgfVxuXG4gIHB1YmxpYyBlbmFibGVGYWxsYmFjayhlbmFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mYWxsYmFjayA9IGVuYWJsZTtcbiAgfVxuXG4gIC8vIGluamVjdCBvdXIgdHJhbnNsYXRpb25zXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoVFJBTlNMQVRJT05TKSBwcml2YXRlIF90cmFuc2xhdGlvbnM6IGFueVxuICApIHsgfVxuXG4gIHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gc2V0IGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICB0aGlzLl9jdXJyZW50TGFuZyA9IGxhbmc7XG4gICAgdGhpcy5vbkxhbmdDaGFuZ2VkLmVtaXQobGFuZyk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBrZXk7XG5cbiAgICAvLyBmb3VuZCBpbiBjdXJyZW50IGxhbmd1YWdlXG4gICAgaWYgKHRoaXMuX3RyYW5zbGF0aW9uc1t0aGlzLmN1cnJlbnRMYW5nXSAmJiB0aGlzLl90cmFuc2xhdGlvbnNbdGhpcy5jdXJyZW50TGFuZ11ba2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zbGF0aW9uc1t0aGlzLmN1cnJlbnRMYW5nXVtrZXldO1xuICAgIH1cblxuICAgIC8vIGZhbGxiYWNrIGRpc2FibGVkXG4gICAgaWYgKCF0aGlzLl9mYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uO1xuICAgIH1cblxuICAgIC8vIGZvdW5kIGluIGRlZmF1bHQgbGFuZ3VhZ2VcbiAgICBpZiAodGhpcy5fdHJhbnNsYXRpb25zW3RoaXMuX2RlZmF1bHRMYW5nXSAmJiB0aGlzLl90cmFuc2xhdGlvbnNbdGhpcy5fZGVmYXVsdExhbmddW2tleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGlvbnNbdGhpcy5fZGVmYXVsdExhbmddW2tleV07XG4gICAgfVxuXG4gICAgLy8gbm90IGZvdW5kXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uO1xuICB9XG5cbiAgcHVibGljIHJlcGxhY2Uod29yZDogc3RyaW5nID0gJycsIHdvcmRzOiBzdHJpbmcgfCBzdHJpbmdbXSA9ICcnKSB7XG4gICAgbGV0IHRyYW5zbGF0aW9uOiBzdHJpbmcgPSB3b3JkO1xuXG4gICAgY29uc3QgdmFsdWVzOiBzdHJpbmdbXSA9IFtdLmNvbmNhdCh3b3Jkcyk7XG5cbiAgICB2YWx1ZXMuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgdHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5yZXBsYWNlKHRoaXMuUExBQ0VIT0xERVIuY29uY2F0KDxhbnk+aSksIGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uO1xuICB9XG5cbiAgcHVibGljIGluc3RhbnQoa2V5OiBzdHJpbmcsIHdvcmRzPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICAvLyBwdWJsaWMgcGVyZm9ybSB0cmFuc2xhdGlvblxuICAgIGNvbnN0IHRyYW5zbGF0aW9uOiBzdHJpbmcgPSB0aGlzLnRyYW5zbGF0ZShrZXkpO1xuXG4gICAgaWYgKCF3b3JkcykgeyByZXR1cm4gdHJhbnNsYXRpb247IH1cblxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UodHJhbnNsYXRpb24sIHdvcmRzKTtcbiAgfVxuXG59XG4iXX0=