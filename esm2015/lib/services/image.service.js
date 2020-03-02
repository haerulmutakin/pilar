/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/image.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class ImageService {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} file
     * @param {?} callback
     * @return {?}
     */
    imageBase64fromFile(file, callback) {
        /** @type {?} */
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (/**
         * @return {?}
         */
        () => {
            callback(reader.result);
        });
    }
    /**
     * @param {?} url
     * @param {?} callback
     * @return {?}
     */
    imageBase64fromUrl(url, callback) {
        /** @type {?} */
        const xhr = new XMLHttpRequest();
        xhr.onload = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const reader = new FileReader();
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
    }
}
ImageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ImageService.ctorParameters = () => [
    { type: DomSanitizer }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdsRSxNQUFNLE9BQU8sWUFBWTs7OztJQUlyQixZQUNZLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUwsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFFBQVE7O2NBQ3hCLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUMvQixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNOzs7UUFBRyxHQUFHLEVBQUU7WUFDakIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUEsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUVELGtCQUFrQixDQUFDLEdBQUcsRUFBRSxRQUFROztjQUN0QixHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUU7UUFDaEMsR0FBRyxDQUFDLE1BQU07OztRQUFHOztrQkFDSCxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7WUFDL0IsTUFBTSxDQUFDLFNBQVM7OztZQUFHO2dCQUNmLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFBLENBQUM7WUFDRixNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUEsQ0FBQztRQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUM7OztZQTdCTixVQUFVOzs7O1lBRk8sWUFBWTs7OztJQUkxQixvQ0FBcUI7O0lBQ3JCLGtDQUFvQjs7Ozs7SUFHaEIsaUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZVVybCwgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbWFnZVNlcnZpY2Uge1xuICAgIGRhbmdlcm91c1VybDogc3RyaW5nO1xuICAgIHRydXN0ZWRVcmw6IFNhZmVVcmw7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICApIHsgfVxuXG4gICAgaW1hZ2VCYXNlNjRmcm9tRmlsZShmaWxlLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGltYWdlQmFzZTY0ZnJvbVVybCh1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHhoci5yZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgfVxuXG59XG4iXX0=