/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/form/photo-upload/photo-upload.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { IMAGE_PLACEHOLDER } from '../../../pilar.constant';
import { ImageService } from '../../../services/image.service';
export class PhotoUploadComponent {
    /**
     * @param {?} imageSvc
     */
    constructor(imageSvc) {
        this.imageSvc = imageSvc;
        this.required = false;
        this.fileType = ['png', 'jpg', 'jpeg'];
        this.maxFileSize = 5;
        this.maxFileType = 'MB';
        this.width = '120px';
        this.height = '160px';
        this.isImageExist = false;
        this.imageSelected = new EventEmitter();
        this.fileOversize = false;
        this.fileNotAllowed = false;
        this.index = 0;
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
     * @param {?} index
     * @return {?}
     */
    onFileChange(event, index) {
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
            this.fileOversize = false;
            this.fileNotAllowed = false;
            if (typeAllowed.length === 0) {
                this.onImageDelete();
                this.fileNotAllowed = true;
                return;
            }
            if (file.size >= this.maxFileSize) {
                this.onImageDelete();
                this.fileOversize = true;
                return;
            }
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
            this.isImageExist = true;
            this.index = index + 1;
        }
    }
    /**
     * @return {?}
     */
    onImageDelete() {
        this.isImageExist = false;
        this.imageSelected.emit(null);
        this.tagar.nativeElement.value = '';
    }
}
PhotoUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-photo-upload',
                template: "<label class=\"control-label\" [ngClass]=\"required ? 'control-required' : ''\">{{ label }}</label>\n<div class=\"form-upload-photo\" [ngStyle]=\"{'width': width, 'height': height}\">\n  <div class=\"form-upload-photo-input\">\n    <div class=\"control-label\" [ngStyle]=\"isImageExist ? {'display': 'none'} : ''\">\n        <label class=\"btn btn-primary form-control-file\">\n            Unggah\n            <input #tagar type=\"file\" (change)=\"onFileChange($event, index)\" #fileInput>\n        </label>\n        <div class=\"control-note\">\n          <p>Format<br/> {{ fileTypeAllowed }} <br /> Maksimal {{ maxFileSize | fileSize:maxFileType }}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-upload-photo-preview\" [ngClass]=\"isImageExist ? 'showImage' : '' \">\n      <img src=\"{{ imageBase64 }}\" alt=\"\">\n      <div class=\"change-photo\">\n          <span class=\"fa fa-edit\" >\n            <input #tagar type=\"file\" (change)=\"onFileChange($event, index)\" #fileInput>\n          </span>\n          <span class=\"fa fa-times\" (click)=\"onImageDelete()\"></span>\n      </div>\n      \n  </div>\n  <div class=\"form-upload-photo-failed\" [ngStyle]=\"{'top': height}\">\n      <small *ngIf=\"fileOversize\" class=\"text-danger\">\n        {{ 'file oversize' | translate }}\n      </small>\n      <small *ngIf=\"fileNotAllowed\" class=\"text-danger\">\n          {{ 'file not allowed' | translate }}\n      </small>\n  </div>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
PhotoUploadComponent.ctorParameters = () => [
    { type: ImageService }
];
PhotoUploadComponent.propDecorators = {
    tagar: [{ type: ViewChild, args: ['tagar',] }],
    label: [{ type: Input }],
    required: [{ type: Input }],
    fileType: [{ type: Input }],
    maxFileSize: [{ type: Input }],
    maxFileType: [{ type: Input }],
    imageBase64: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    isImageExist: [{ type: Input }],
    imageSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PhotoUploadComponent.prototype.tagar;
    /** @type {?} */
    PhotoUploadComponent.prototype.label;
    /** @type {?} */
    PhotoUploadComponent.prototype.required;
    /** @type {?} */
    PhotoUploadComponent.prototype.fileType;
    /** @type {?} */
    PhotoUploadComponent.prototype.maxFileSize;
    /** @type {?} */
    PhotoUploadComponent.prototype.maxFileType;
    /** @type {?} */
    PhotoUploadComponent.prototype.imageBase64;
    /** @type {?} */
    PhotoUploadComponent.prototype.width;
    /** @type {?} */
    PhotoUploadComponent.prototype.height;
    /** @type {?} */
    PhotoUploadComponent.prototype.isImageExist;
    /** @type {?} */
    PhotoUploadComponent.prototype.imageSelected;
    /** @type {?} */
    PhotoUploadComponent.prototype.fileTypeAllowed;
    /** @type {?} */
    PhotoUploadComponent.prototype.fileOversize;
    /** @type {?} */
    PhotoUploadComponent.prototype.fileNotAllowed;
    /** @type {?} */
    PhotoUploadComponent.prototype.index;
    /**
     * @type {?}
     * @private
     */
    PhotoUploadComponent.prototype.imageSvc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG8tdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybS9waG90by11cGxvYWQvcGhvdG8tdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFPL0QsTUFBTSxPQUFPLG9CQUFvQjs7OztJQWtCL0IsWUFDVSxRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBaEJ2QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUVwQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHN0MsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsVUFBSyxHQUFHLENBQUMsQ0FBQztJQUdOLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3BDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQzthQUM5QjtZQUNELElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSztRQUN2QixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2tCQUMzQixJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUM7O2tCQUUvQixXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsR0FBRyxJQUFJLEVBQUM7WUFFL0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFFNUIsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsT0FBTzthQUNSO1lBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE9BQU87YUFDUjs7a0JBRUssSUFBSSxHQUFHLElBQUk7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJOzs7O1lBQUUsVUFBUyxNQUFNO2dCQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztZQUM1QixDQUFDLEVBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7WUEzRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLG84Q0FBNEM7O2FBRTdDOzs7O1lBTlEsWUFBWTs7O29CQVFsQixTQUFTLFNBQUMsT0FBTztvQkFDakIsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBRUwsTUFBTTs7OztJQVhQLHFDQUFzQzs7SUFDdEMscUNBQXVCOztJQUN2Qix3Q0FBMEI7O0lBQzFCLHdDQUEwRDs7SUFDMUQsMkNBQXlCOztJQUN6QiwyQ0FBNEI7O0lBQzVCLDJDQUE2Qjs7SUFDN0IscUNBQXlCOztJQUN6QixzQ0FBMEI7O0lBQzFCLDRDQUE4Qjs7SUFFOUIsNkNBQTZDOztJQUU3QywrQ0FBd0I7O0lBQ3hCLDRDQUFxQjs7SUFDckIsOENBQXVCOztJQUN2QixxQ0FBVTs7Ozs7SUFFUix3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElNQUdFX1BMQUNFSE9MREVSIH0gZnJvbSAnLi4vLi4vLi4vcGlsYXIuY29uc3RhbnQnO1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpaS1waG90by11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGhvdG8tdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGhvdG8tdXBsb2FkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGhvdG9VcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCd0YWdhcicpIHRhZ2FyOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBmaWxlVHlwZTogQXJyYXk8c3RyaW5nPiA9IFsncG5nJywgJ2pwZycsICdqcGVnJ107XG4gIEBJbnB1dCgpIG1heEZpbGVTaXplID0gNTtcbiAgQElucHV0KCkgbWF4RmlsZVR5cGUgPSAnTUInO1xuICBASW5wdXQoKSBpbWFnZUJhc2U2NDogc3RyaW5nO1xuICBASW5wdXQoKSB3aWR0aCA9ICcxMjBweCc7XG4gIEBJbnB1dCgpIGhlaWdodCA9ICcxNjBweCc7XG4gIEBJbnB1dCgpIGlzSW1hZ2VFeGlzdCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBpbWFnZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGZpbGVUeXBlQWxsb3dlZDogc3RyaW5nO1xuICBmaWxlT3ZlcnNpemUgPSBmYWxzZTtcbiAgZmlsZU5vdEFsbG93ZWQgPSBmYWxzZTtcbiAgaW5kZXggPSAwO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGltYWdlU3ZjOiBJbWFnZVNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpbGVUeXBlQWxsb3dlZCA9ICcnO1xuICAgIHRoaXMuZmlsZVR5cGUuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgdGhpcy5maWxlVHlwZUFsbG93ZWQgKz0gJywgJztcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsZVR5cGVBbGxvd2VkICs9ICcqLicgKyB0eXBlO1xuICAgIH0pO1xuICB9XG5cbiAgb25GaWxlQ2hhbmdlKGV2ZW50LCBpbmRleCkge1xuICAgIGlmIChldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgIHRoaXMuaW1hZ2VCYXNlNjQgPSBJTUFHRV9QTEFDRUhPTERFUjtcblxuICAgICAgY29uc3QgdHlwZUFsbG93ZWQgPSB0aGlzLmZpbGVUeXBlLmZpbHRlcih0eXBlID0+IGZpbGUudHlwZSA9PT0gJ2ltYWdlLycgKyB0eXBlKTtcblxuICAgICAgdGhpcy5pbWFnZVNlbGVjdGVkLmVtaXQobnVsbCk7XG4gICAgICB0aGlzLmZpbGVPdmVyc2l6ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5maWxlTm90QWxsb3dlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAodHlwZUFsbG93ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMub25JbWFnZURlbGV0ZSgpO1xuICAgICAgICB0aGlzLmZpbGVOb3RBbGxvd2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlsZS5zaXplID49IHRoaXMubWF4RmlsZVNpemUpIHtcbiAgICAgICAgdGhpcy5vbkltYWdlRGVsZXRlKCk7XG4gICAgICAgIHRoaXMuZmlsZU92ZXJzaXplID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuaW1hZ2VTdmMuaW1hZ2VCYXNlNjRmcm9tRmlsZShmaWxlLCBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICAgICAgc2VsZi5pbWFnZUJhc2U2NCA9IGJhc2U2NDtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmltYWdlU2VsZWN0ZWQuZW1pdChmaWxlKTtcbiAgICAgIHRoaXMuaXNJbWFnZUV4aXN0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5kZXggPSBpbmRleCArIDE7XG4gICAgfVxuICB9XG5cbiAgb25JbWFnZURlbGV0ZSgpIHtcbiAgICB0aGlzLmlzSW1hZ2VFeGlzdCA9IGZhbHNlO1xuICAgIHRoaXMuaW1hZ2VTZWxlY3RlZC5lbWl0KG51bGwpO1xuICAgIHRoaXMudGFnYXIubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICB9XG5cbn1cbiJdfQ==