/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/form/image-upload/image-upload.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IMAGE_PLACEHOLDER } from '../../../pilar.constant';
import { ImageService } from '../../../services/image.service';
export class UiiImageUploadComponent {
    /**
     * @param {?} imageSvc
     */
    constructor(imageSvc) {
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
    ngOnInit() {
        this.fileTypeAllowed = '';
        this.fileType.forEach((/**
         * @param {?} type
         * @param {?} index
         * @return {?}
         */
        (type, index) => {
            if (index > 0) {
                this.fileTypeAllowed += ', ';
            }
            this.fileTypeAllowed += '*.' + type;
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFileChange(event) {
        if (event.target.files.length > 0) {
            /** @type {?} */
            const file = event.target.files[0];
            this.imageBase64 = IMAGE_PLACEHOLDER;
            /** @type {?} */
            const typeAllowed = this.fileType.filter((/**
             * @param {?} type
             * @return {?}
             */
            type => file.type === 'image/' + type));
            this.imageSelected.emit(null);
            if (typeAllowed.length === 0) {
                this.fileNotAllowed = true;
                return;
            }
            if (file.size >= this.maxFileSize) {
                this.fileOversize = true;
                return;
            }
            this.fileOversize = false;
            this.fileNotAllowed = false;
            /** @type {?} */
            const self = this;
            this.imageSvc.imageBase64fromFile(file, (/**
             * @param {?} base64
             * @return {?}
             */
            function (base64) {
                self.imageBase64 = base64;
            }));
            this.imageSelected.emit(file);
        }
    }
}
UiiImageUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-image-upload',
                template: "<div class=\"form-upload-image\">\n  <div class=\"form-upload-image-input\">\n      <label class=\"control-label\" for=\"\">{{ label }}</label>\n      <label class=\"btn btn-primary form-control-file\">\n        {{ 'Pilih gambar' | translate }} <input type=\"file\" (change)=\"onFileChange($event)\" #fileInput>\n      </label>\n      <div class=\"control-note\">\n        <p>Format {{ fileTypeAllowed }} <br /> Maksimal {{ maxFileSize | fileSize:'MB' }}</p>\n      </div>\n  </div>\n  <div class=\"form-upload-image-preview\">\n    <img src=\"{{ imageBase64 }}\" alt=\"\">\n  </div>\n</div>\n<div class=\"failed-upload-photo\">\n  <small *ngIf=\"fileOversize\" class=\"text-danger\">\n    {{ 'file oversize' | translate }}\n  </small>\n  <small *ngIf=\"fileNotAllowed\" class=\"text-danger\">\n    {{ 'file not allowed' | translate }}\n  </small>\n</div>"
            }] }
];
/** @nocollapse */
UiiImageUploadComponent.ctorParameters = () => [
    { type: ImageService }
];
UiiImageUploadComponent.propDecorators = {
    label: [{ type: Input }],
    required: [{ type: Input }],
    fileType: [{ type: Input }],
    maxFileSize: [{ type: Input }],
    imageBase64: [{ type: Input }],
    imageSelected: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybS9pbWFnZS11cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBTS9ELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFhbEMsWUFDVSxRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBWnZCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSWpDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc3QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixtQkFBYyxHQUFHLEtBQUssQ0FBQztJQUluQixDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNwQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUM7YUFDOUI7WUFFRCxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFLO1FBQ2hCLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7a0JBQzNCLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQzs7a0JBRS9CLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxHQUFHLElBQUksRUFBQztZQUUvRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU5QixJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsT0FBTzthQUNSO1lBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzs7a0JBRXRCLElBQUksR0FBRyxJQUFJO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSTs7OztZQUFFLFVBQVMsTUFBTTtnQkFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7WUFDNUIsQ0FBQyxFQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7OztZQTdERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbTJCQUE0QzthQUM3Qzs7OztZQUxRLFlBQVk7OztvQkFPbEIsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUVMLE1BQU07Ozs7SUFOUCx3Q0FBdUI7O0lBQ3ZCLDJDQUEwQjs7SUFDMUIsMkNBQTJDOztJQUMzQyw4Q0FBd0I7O0lBQ3hCLDhDQUE2Qjs7SUFFN0IsZ0RBQTZDOztJQUU3QyxrREFBd0I7O0lBQ3hCLCtDQUFxQjs7SUFDckIsaURBQXVCOzs7OztJQUdyQiwyQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJTUFHRV9QTEFDRUhPTERFUiB9IGZyb20gJy4uLy4uLy4uL3BpbGFyLmNvbnN0YW50JztcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWktaW1hZ2UtdXBsb2FkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVWlpSW1hZ2VVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBmaWxlVHlwZTogQXJyYXk8c3RyaW5nPiA9IFsncG5nJ107XG4gIEBJbnB1dCgpIG1heEZpbGVTaXplOiAxO1xuICBASW5wdXQoKSBpbWFnZUJhc2U2NDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBpbWFnZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGZpbGVUeXBlQWxsb3dlZDogc3RyaW5nO1xuICBmaWxlT3ZlcnNpemUgPSBmYWxzZTtcbiAgZmlsZU5vdEFsbG93ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGltYWdlU3ZjOiBJbWFnZVNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpbGVUeXBlQWxsb3dlZCA9ICcnO1xuICAgIHRoaXMuZmlsZVR5cGUuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgdGhpcy5maWxlVHlwZUFsbG93ZWQgKz0gJywgJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5maWxlVHlwZUFsbG93ZWQgKz0gJyouJyArIHR5cGU7XG4gICAgfSk7XG4gIH1cblxuICBvbkZpbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICB0aGlzLmltYWdlQmFzZTY0ID0gSU1BR0VfUExBQ0VIT0xERVI7XG5cbiAgICAgIGNvbnN0IHR5cGVBbGxvd2VkID0gdGhpcy5maWxlVHlwZS5maWx0ZXIodHlwZSA9PiBmaWxlLnR5cGUgPT09ICdpbWFnZS8nICsgdHlwZSk7XG5cbiAgICAgIHRoaXMuaW1hZ2VTZWxlY3RlZC5lbWl0KG51bGwpO1xuXG4gICAgICBpZiAodHlwZUFsbG93ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuZmlsZU5vdEFsbG93ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWxlLnNpemUgPj0gdGhpcy5tYXhGaWxlU2l6ZSkge1xuICAgICAgICB0aGlzLmZpbGVPdmVyc2l6ZSA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5maWxlT3ZlcnNpemUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmlsZU5vdEFsbG93ZWQgPSBmYWxzZTtcblxuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLmltYWdlU3ZjLmltYWdlQmFzZTY0ZnJvbUZpbGUoZmlsZSwgZnVuY3Rpb24oYmFzZTY0KSB7XG4gICAgICAgIHNlbGYuaW1hZ2VCYXNlNjQgPSBiYXNlNjQ7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbWFnZVNlbGVjdGVkLmVtaXQoZmlsZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==