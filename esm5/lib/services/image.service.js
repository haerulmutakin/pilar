/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/image.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var ImageService = /** @class */ (function () {
    function ImageService(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} file
     * @param {?} callback
     * @return {?}
     */
    ImageService.prototype.imageBase64fromFile = /**
     * @param {?} file
     * @param {?} callback
     * @return {?}
     */
    function (file, callback) {
        /** @type {?} */
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (/**
         * @return {?}
         */
        function () {
            callback(reader.result);
        });
    };
    /**
     * @param {?} url
     * @param {?} callback
     * @return {?}
     */
    ImageService.prototype.imageBase64fromUrl = /**
     * @param {?} url
     * @param {?} callback
     * @return {?}
     */
    function (url, callback) {
        /** @type {?} */
        var xhr = new XMLHttpRequest();
        xhr.onload = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var reader = new FileReader();
            reader.onloadend = (/**
             * @return {?}
             */
            function () {
                callback(reader.result);
            });
            reader.readAsDataURL(xhr.response);
        });
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    };
    ImageService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ImageService.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return ImageService;
}());
export { ImageService };
if (false) {
    /** @type {?} */
    ImageService.prototype.dangerousUrl;
    /** @type {?} */
    ImageService.prototype.trustedUrl;
    /**
     * @type {?}
     * @private
     */
    ImageService.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQUtJLHNCQUNZLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUwsMENBQW1COzs7OztJQUFuQixVQUFvQixJQUFJLEVBQUUsUUFBUTs7WUFDeEIsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQy9CLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLE1BQU07OztRQUFHO1lBQ1osUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUEsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUVELHlDQUFrQjs7Ozs7SUFBbEIsVUFBbUIsR0FBRyxFQUFFLFFBQVE7O1lBQ3RCLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRTtRQUNoQyxHQUFHLENBQUMsTUFBTTs7O1FBQUc7O2dCQUNILE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtZQUMvQixNQUFNLENBQUMsU0FBUzs7O1lBQUc7Z0JBQ2YsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUEsQ0FBQztZQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQSxDQUFDO1FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckIsR0FBRyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDMUIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7Z0JBN0JOLFVBQVU7Ozs7Z0JBRk8sWUFBWTs7SUFpQzlCLG1CQUFDO0NBQUEsQUEvQkQsSUErQkM7U0E5QlksWUFBWTs7O0lBQ3JCLG9DQUFxQjs7SUFDckIsa0NBQW9COzs7OztJQUdoQixpQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlVXJsLCBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEltYWdlU2VydmljZSB7XG4gICAgZGFuZ2Vyb3VzVXJsOiBzdHJpbmc7XG4gICAgdHJ1c3RlZFVybDogU2FmZVVybDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgICkgeyB9XG5cbiAgICBpbWFnZUJhc2U2NGZyb21GaWxlKGZpbGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2socmVhZGVyLnJlc3VsdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaW1hZ2VCYXNlNjRmcm9tVXJsKHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgICB9XG5cbn1cbiJdfQ==