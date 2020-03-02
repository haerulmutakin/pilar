/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/translate.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, EventEmitter } from '@angular/core';
import { TRANSLATIONS } from '../providers/translations';
var TranslateService = /** @class */ (function () {
    // inject our translations
    function TranslateService(_translations) {
        this._translations = _translations;
        this.PLACEHOLDER = '%';
        this.onLangChanged = new EventEmitter();
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentLang || this._defaultLang;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.setDefaultLang = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this._defaultLang = lang;
    };
    /**
     * @param {?} enable
     * @return {?}
     */
    TranslateService.prototype.enableFallback = /**
     * @param {?} enable
     * @return {?}
     */
    function (enable) {
        this._fallback = enable;
    };
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.use = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        // set current language
        this._currentLang = lang;
        this.onLangChanged.emit(lang);
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    TranslateService.prototype.translate = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var translation = key;
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
    };
    /**
     * @param {?=} word
     * @param {?=} words
     * @return {?}
     */
    TranslateService.prototype.replace = /**
     * @param {?=} word
     * @param {?=} words
     * @return {?}
     */
    function (word, words) {
        var _this = this;
        if (word === void 0) { word = ''; }
        if (words === void 0) { words = ''; }
        /** @type {?} */
        var translation = word;
        /** @type {?} */
        var values = [].concat(words);
        values.forEach((/**
         * @param {?} e
         * @param {?} i
         * @return {?}
         */
        function (e, i) {
            translation = translation.replace(_this.PLACEHOLDER.concat((/** @type {?} */ (i))), e);
        }));
        return translation;
    };
    /**
     * @param {?} key
     * @param {?=} words
     * @return {?}
     */
    TranslateService.prototype.instant = /**
     * @param {?} key
     * @param {?=} words
     * @return {?}
     */
    function (key, words) {
        // public perform translation
        /** @type {?} */
        var translation = this.translate(key);
        if (!words) {
            return translation;
        }
        return this.replace(translation, words);
    };
    TranslateService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [TRANSLATIONS,] }] }
    ]; };
    return TranslateService;
}());
export { TranslateService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRyxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQ7SUFxQkUsMEJBQTBCO0lBQzFCLDBCQUNnQyxhQUFrQjtRQUFsQixrQkFBYSxHQUFiLGFBQWEsQ0FBSztRQWxCMUMsZ0JBQVcsR0FBRyxHQUFHLENBQUM7UUFFbkIsa0JBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQWlCcEUsQ0FBQztJQWZMLHNCQUFXLHlDQUFXOzs7O1FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7Ozs7O0lBRU0seUNBQWM7Ozs7SUFBckIsVUFBc0IsSUFBWTtRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOzs7OztJQUVNLHlDQUFjOzs7O0lBQXJCLFVBQXNCLE1BQWU7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFPTSw4QkFBRzs7OztJQUFWLFVBQVcsSUFBWTtRQUNyQix1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRU8sb0NBQVM7Ozs7O0lBQWpCLFVBQWtCLEdBQVc7O1lBQ3JCLFdBQVcsR0FBRyxHQUFHO1FBRXZCLDRCQUE0QjtRQUM1QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JGLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEQ7UUFFRCxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTyxXQUFXLENBQUM7U0FDcEI7UUFFRCw0QkFBNEI7UUFDNUIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2RixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsWUFBWTtRQUNaLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVNLGtDQUFPOzs7OztJQUFkLFVBQWUsSUFBaUIsRUFBRSxLQUE2QjtRQUEvRCxpQkFVQztRQVZjLHFCQUFBLEVBQUEsU0FBaUI7UUFBRSxzQkFBQSxFQUFBLFVBQTZCOztZQUN6RCxXQUFXLEdBQVcsSUFBSTs7WUFFeEIsTUFBTSxHQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRXpDLE1BQU0sQ0FBQyxPQUFPOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbEIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsbUJBQUssQ0FBQyxFQUFBLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVNLGtDQUFPOzs7OztJQUFkLFVBQWUsR0FBVyxFQUFFLEtBQXlCOzs7WUFFN0MsV0FBVyxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBRS9DLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxPQUFPLFdBQVcsQ0FBQztTQUFFO1FBRW5DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBekVGLFVBQVU7Ozs7Z0RBdUJOLE1BQU0sU0FBQyxZQUFZOztJQW9EeEIsdUJBQUM7Q0FBQSxBQTNFRCxJQTJFQztTQTFFWSxnQkFBZ0I7Ozs7OztJQUMzQix3Q0FBNkI7Ozs7O0lBQzdCLHdDQUE2Qjs7Ozs7SUFDN0IscUNBQTJCOzs7OztJQUMzQix1Q0FBMEI7O0lBRTFCLHlDQUF3RTs7Ozs7SUFnQnRFLHlDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgRXZlbnRFbWl0dGVyICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVFJBTlNMQVRJT05TIH0gZnJvbSAnLi4vcHJvdmlkZXJzL3RyYW5zbGF0aW9ucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY3VycmVudExhbmc6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGVmYXVsdExhbmc6IHN0cmluZztcbiAgcHJpdmF0ZSBfZmFsbGJhY2s6IGJvb2xlYW47XG4gIHByaXZhdGUgUExBQ0VIT0xERVIgPSAnJSc7XG5cbiAgcHVibGljIG9uTGFuZ0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgcHVibGljIGdldCBjdXJyZW50TGFuZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGFuZyB8fCB0aGlzLl9kZWZhdWx0TGFuZztcbiAgfVxuXG4gIHB1YmxpYyBzZXREZWZhdWx0TGFuZyhsYW5nOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0TGFuZyA9IGxhbmc7XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlRmFsbGJhY2soZW5hYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZmFsbGJhY2sgPSBlbmFibGU7XG4gIH1cblxuICAvLyBpbmplY3Qgb3VyIHRyYW5zbGF0aW9uc1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFRSQU5TTEFUSU9OUykgcHJpdmF0ZSBfdHJhbnNsYXRpb25zOiBhbnlcbiAgKSB7IH1cblxuICBwdWJsaWMgdXNlKGxhbmc6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIHNldCBjdXJyZW50IGxhbmd1YWdlXG4gICAgdGhpcy5fY3VycmVudExhbmcgPSBsYW5nO1xuICAgIHRoaXMub25MYW5nQ2hhbmdlZC5lbWl0KGxhbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0ga2V5O1xuXG4gICAgLy8gZm91bmQgaW4gY3VycmVudCBsYW5ndWFnZVxuICAgIGlmICh0aGlzLl90cmFuc2xhdGlvbnNbdGhpcy5jdXJyZW50TGFuZ10gJiYgdGhpcy5fdHJhbnNsYXRpb25zW3RoaXMuY3VycmVudExhbmddW2tleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGlvbnNbdGhpcy5jdXJyZW50TGFuZ11ba2V5XTtcbiAgICB9XG5cbiAgICAvLyBmYWxsYmFjayBkaXNhYmxlZFxuICAgIGlmICghdGhpcy5fZmFsbGJhY2spIHtcbiAgICAgIHJldHVybiB0cmFuc2xhdGlvbjtcbiAgICB9XG5cbiAgICAvLyBmb3VuZCBpbiBkZWZhdWx0IGxhbmd1YWdlXG4gICAgaWYgKHRoaXMuX3RyYW5zbGF0aW9uc1t0aGlzLl9kZWZhdWx0TGFuZ10gJiYgdGhpcy5fdHJhbnNsYXRpb25zW3RoaXMuX2RlZmF1bHRMYW5nXVtrZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdHJhbnNsYXRpb25zW3RoaXMuX2RlZmF1bHRMYW5nXVtrZXldO1xuICAgIH1cblxuICAgIC8vIG5vdCBmb3VuZFxuICAgIHJldHVybiB0cmFuc2xhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyByZXBsYWNlKHdvcmQ6IHN0cmluZyA9ICcnLCB3b3Jkczogc3RyaW5nIHwgc3RyaW5nW10gPSAnJykge1xuICAgIGxldCB0cmFuc2xhdGlvbjogc3RyaW5nID0gd29yZDtcblxuICAgIGNvbnN0IHZhbHVlczogc3RyaW5nW10gPSBbXS5jb25jYXQod29yZHMpO1xuXG4gICAgdmFsdWVzLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICAgIHRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb24ucmVwbGFjZSh0aGlzLlBMQUNFSE9MREVSLmNvbmNhdCg8YW55PmkpLCBlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBpbnN0YW50KGtleTogc3RyaW5nLCB3b3Jkcz86IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgLy8gcHVibGljIHBlcmZvcm0gdHJhbnNsYXRpb25cbiAgICBjb25zdCB0cmFuc2xhdGlvbjogc3RyaW5nID0gdGhpcy50cmFuc2xhdGUoa2V5KTtcblxuICAgIGlmICghd29yZHMpIHsgcmV0dXJuIHRyYW5zbGF0aW9uOyB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKHRyYW5zbGF0aW9uLCB3b3Jkcyk7XG4gIH1cblxufVxuIl19