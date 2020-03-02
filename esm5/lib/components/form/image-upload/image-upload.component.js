/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/form/image-upload/image-upload.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IMAGE_PLACEHOLDER } from '../../../pilar.constant';
import { ImageService } from '../../../services/image.service';
var UiiImageUploadComponent = /** @class */ (function () {
    function UiiImageUploadComponent(imageSvc) {
        this.imageSvc = imageSvc;
        this.required = false;
        this.fileType = ['png'];
        this.imageSelected = new EventEmitter();
        this.fileOversize = false;
        this.fileNotAllowed = false;
    }
    /**
     * @return {?}
     */
    UiiImageUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fileTypeAllowed = '';
        this.fileType.forEach((/**
         * @param {?} type
         * @param {?} index
         * @return {?}
         */
        function (type, index) {
            if (index > 0) {
                _this.fileTypeAllowed += ', ';
            }
            _this.fileTypeAllowed += '*.' + type;
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UiiImageUploadComponent.prototype.onFileChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.target.files.length > 0) {
            /** @type {?} */
            var file_1 = event.target.files[0];
            this.imageBase64 = IMAGE_PLACEHOLDER;
            /** @type {?} */
            var typeAllowed = this.fileType.filter((/**
             * @param {?} type
             * @return {?}
             */
            function (type) { return file_1.type === 'image/' + type; }));
            this.imageSelected.emit(null);
            if (typeAllowed.length === 0) {
                this.fileNotAllowed = true;
                return;
            }
            if (file_1.size >= this.maxFileSize) {
                this.fileOversize = true;
                return;
            }
            this.fileOversize = false;
            this.fileNotAllowed = false;
            /** @type {?} */
            var self_1 = this;
            this.imageSvc.imageBase64fromFile(file_1, (/**
             * @param {?} base64
             * @return {?}
             */
            function (base64) {
                self_1.imageBase64 = base64;
            }));
            this.imageSelected.emit(file_1);
        }
    };
    UiiImageUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-image-upload',
                    template: "<div class=\"form-upload-image\">\n  <div class=\"form-upload-image-input\">\n      <label class=\"control-label\" for=\"\">{{ label }}</label>\n      <label class=\"btn btn-primary form-control-file\">\n        {{ 'Pilih gambar' | translate }} <input type=\"file\" (change)=\"onFileChange($event)\" #fileInput>\n      </label>\n      <div class=\"control-note\">\n        <p>Format {{ fileTypeAllowed }} <br /> Maksimal {{ maxFileSize | fileSize:'MB' }}</p>\n      </div>\n  </div>\n  <div class=\"form-upload-image-preview\">\n    <img src=\"{{ imageBase64 }}\" alt=\"\">\n  </div>\n</div>\n<div class=\"failed-upload-photo\">\n  <small *ngIf=\"fileOversize\" class=\"text-danger\">\n    {{ 'file oversize' | translate }}\n  </small>\n  <small *ngIf=\"fileNotAllowed\" class=\"text-danger\">\n    {{ 'file not allowed' | translate }}\n  </small>\n</div>"
                }] }
    ];
    /** @nocollapse */
    UiiImageUploadComponent.ctorParameters = function () { return [
        { type: ImageService }
    ]; };
    UiiImageUploadComponent.propDecorators = {
        label: [{ type: Input }],
        required: [{ type: Input }],
        fileType: [{ type: Input }],
        maxFileSize: [{ type: Input }],
        imageBase64: [{ type: Input }],
        imageSelected: [{ type: Output }]
    };
    return UiiImageUploadComponent;
}());
export { UiiImageUploadComponent };
if (false) {
    /** @type {?} */
    UiiImageUploadComponent.prototype.label;
    /** @type {?} */
    UiiImageUploadComponent.prototype.required;
    /** @type {?} */
    UiiImageUploadComponent.prototype.fileType;
    /** @type {?} */
    UiiImageUploadComponent.prototype.maxFileSize;
    /** @type {?} */
    UiiImageUploadComponent.prototype.imageBase64;
    /** @type {?} */
    UiiImageUploadComponent.prototype.imageSelected;
    /** @type {?} */
    UiiImageUploadComponent.prototype.fileTypeAllowed;
    /** @type {?} */
    UiiImageUploadComponent.prototype.fileOversize;
    /** @type {?} */
    UiiImageUploadComponent.prototype.fileNotAllowed;
    /**
     * @type {?}
     * @private
     */
    UiiImageUploadComponent.prototype.imageSvc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybS9pbWFnZS11cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRS9EO0lBaUJFLGlDQUNVLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFadkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFJakMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzdDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBSW5CLENBQUM7Ozs7SUFFTCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLElBQUksRUFBRSxLQUFLO1lBQ2hDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDYixLQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQzthQUM5QjtZQUVELEtBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsOENBQVk7Ozs7SUFBWixVQUFhLEtBQUs7UUFDaEIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztnQkFDM0IsTUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDOztnQkFFL0IsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsTUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEdBQUcsSUFBSSxFQUE3QixDQUE2QixFQUFDO1lBRS9FLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlCLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixPQUFPO2FBQ1I7WUFFRCxJQUFJLE1BQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDOztnQkFFdEIsTUFBSSxHQUFHLElBQUk7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFJOzs7O1lBQUUsVUFBUyxNQUFNO2dCQUNyRCxNQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztZQUM1QixDQUFDLEVBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQUksQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Z0JBN0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixtMkJBQTRDO2lCQUM3Qzs7OztnQkFMUSxZQUFZOzs7d0JBT2xCLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FFTCxNQUFNOztJQW9EVCw4QkFBQztDQUFBLEFBL0RELElBK0RDO1NBM0RZLHVCQUF1Qjs7O0lBQ2xDLHdDQUF1Qjs7SUFDdkIsMkNBQTBCOztJQUMxQiwyQ0FBMkM7O0lBQzNDLDhDQUF3Qjs7SUFDeEIsOENBQTZCOztJQUU3QixnREFBNkM7O0lBRTdDLGtEQUF3Qjs7SUFDeEIsK0NBQXFCOztJQUNyQixpREFBdUI7Ozs7O0lBR3JCLDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElNQUdFX1BMQUNFSE9MREVSIH0gZnJvbSAnLi4vLi4vLi4vcGlsYXIuY29uc3RhbnQnO1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpaS1pbWFnZS11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVaWlJbWFnZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZpbGVUeXBlOiBBcnJheTxzdHJpbmc+ID0gWydwbmcnXTtcbiAgQElucHV0KCkgbWF4RmlsZVNpemU6IDE7XG4gIEBJbnB1dCgpIGltYWdlQmFzZTY0OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGltYWdlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZmlsZVR5cGVBbGxvd2VkOiBzdHJpbmc7XG4gIGZpbGVPdmVyc2l6ZSA9IGZhbHNlO1xuICBmaWxlTm90QWxsb3dlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW1hZ2VTdmM6IEltYWdlU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmlsZVR5cGVBbGxvd2VkID0gJyc7XG4gICAgdGhpcy5maWxlVHlwZS5mb3JFYWNoKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICB0aGlzLmZpbGVUeXBlQWxsb3dlZCArPSAnLCAnO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZpbGVUeXBlQWxsb3dlZCArPSAnKi4nICsgdHlwZTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uRmlsZUNoYW5nZShldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgIHRoaXMuaW1hZ2VCYXNlNjQgPSBJTUFHRV9QTEFDRUhPTERFUjtcblxuICAgICAgY29uc3QgdHlwZUFsbG93ZWQgPSB0aGlzLmZpbGVUeXBlLmZpbHRlcih0eXBlID0+IGZpbGUudHlwZSA9PT0gJ2ltYWdlLycgKyB0eXBlKTtcblxuICAgICAgdGhpcy5pbWFnZVNlbGVjdGVkLmVtaXQobnVsbCk7XG5cbiAgICAgIGlmICh0eXBlQWxsb3dlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5maWxlTm90QWxsb3dlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbGUuc2l6ZSA+PSB0aGlzLm1heEZpbGVTaXplKSB7XG4gICAgICAgIHRoaXMuZmlsZU92ZXJzaXplID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZpbGVPdmVyc2l6ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5maWxlTm90QWxsb3dlZCA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuaW1hZ2VTdmMuaW1hZ2VCYXNlNjRmcm9tRmlsZShmaWxlLCBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICAgICAgc2VsZi5pbWFnZUJhc2U2NCA9IGJhc2U2NDtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmltYWdlU2VsZWN0ZWQuZW1pdChmaWxlKTtcbiAgICB9XG4gIH1cblxufVxuIl19