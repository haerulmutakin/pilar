/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/form/photo-upload/photo-upload.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { IMAGE_PLACEHOLDER } from '../../../pilar.constant';
import { ImageService } from '../../../services/image.service';
var PhotoUploadComponent = /** @class */ (function () {
    function PhotoUploadComponent(imageSvc) {
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
    PhotoUploadComponent.prototype.ngOnInit = /**
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
     * @param {?} index
     * @return {?}
     */
    PhotoUploadComponent.prototype.onFileChange = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
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
            this.fileOversize = false;
            this.fileNotAllowed = false;
            if (typeAllowed.length === 0) {
                this.onImageDelete();
                this.fileNotAllowed = true;
                return;
            }
            if (file_1.size >= this.maxFileSize) {
                this.onImageDelete();
                this.fileOversize = true;
                return;
            }
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
            this.isImageExist = true;
            this.index = index + 1;
        }
    };
    /**
     * @return {?}
     */
    PhotoUploadComponent.prototype.onImageDelete = /**
     * @return {?}
     */
    function () {
        this.isImageExist = false;
        this.imageSelected.emit(null);
        this.tagar.nativeElement.value = '';
    };
    PhotoUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-photo-upload',
                    template: "<label class=\"control-label\" [ngClass]=\"required ? 'control-required' : ''\">{{ label }}</label>\n<div class=\"form-upload-photo\" [ngStyle]=\"{'width': width, 'height': height}\">\n  <div class=\"form-upload-photo-input\">\n    <div class=\"control-label\" [ngStyle]=\"isImageExist ? {'display': 'none'} : ''\">\n        <label class=\"btn btn-primary form-control-file\">\n            Unggah\n            <input #tagar type=\"file\" (change)=\"onFileChange($event, index)\" #fileInput>\n        </label>\n        <div class=\"control-note\">\n          <p>Format<br/> {{ fileTypeAllowed }} <br /> Maksimal {{ maxFileSize | fileSize:maxFileType }}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-upload-photo-preview\" [ngClass]=\"isImageExist ? 'showImage' : '' \">\n      <img src=\"{{ imageBase64 }}\" alt=\"\">\n      <div class=\"change-photo\">\n          <span class=\"fa fa-edit\" >\n            <input #tagar type=\"file\" (change)=\"onFileChange($event, index)\" #fileInput>\n          </span>\n          <span class=\"fa fa-times\" (click)=\"onImageDelete()\"></span>\n      </div>\n      \n  </div>\n  <div class=\"form-upload-photo-failed\" [ngStyle]=\"{'top': height}\">\n      <small *ngIf=\"fileOversize\" class=\"text-danger\">\n        {{ 'file oversize' | translate }}\n      </small>\n      <small *ngIf=\"fileNotAllowed\" class=\"text-danger\">\n          {{ 'file not allowed' | translate }}\n      </small>\n  </div>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PhotoUploadComponent.ctorParameters = function () { return [
        { type: ImageService }
    ]; };
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
    return PhotoUploadComponent;
}());
export { PhotoUploadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG8tdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybS9waG90by11cGxvYWQvcGhvdG8tdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFL0Q7SUF1QkUsOEJBQ1UsUUFBc0I7UUFBdEIsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQWhCdkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQWtCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQixVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxPQUFPLENBQUM7UUFDakIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFcEIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzdDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxDQUFDLENBQUM7SUFHTixDQUFDOzs7O0lBRUwsdUNBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztZQUNoQyxJQUFJLEtBQUssR0FBRyxDQUFD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aW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJTUFHRV9QTEFDRUhPTERFUiB9IGZyb20gJy4uLy4uLy4uL3BpbGFyLmNvbnN0YW50JztcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWktcGhvdG8tdXBsb2FkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bob3RvLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Bob3RvLXVwbG9hZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBob3RvVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgndGFnYXInKSB0YWdhcjogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZmlsZVR5cGU6IEFycmF5PHN0cmluZz4gPSBbJ3BuZycsICdqcGcnLCAnanBlZyddO1xuICBASW5wdXQoKSBtYXhGaWxlU2l6ZSA9IDU7XG4gIEBJbnB1dCgpIG1heEZpbGVUeXBlID0gJ01CJztcbiAgQElucHV0KCkgaW1hZ2VCYXNlNjQ6IHN0cmluZztcbiAgQElucHV0KCkgd2lkdGggPSAnMTIwcHgnO1xuICBASW5wdXQoKSBoZWlnaHQgPSAnMTYwcHgnO1xuICBASW5wdXQoKSBpc0ltYWdlRXhpc3QgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgaW1hZ2VTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBmaWxlVHlwZUFsbG93ZWQ6IHN0cmluZztcbiAgZmlsZU92ZXJzaXplID0gZmFsc2U7XG4gIGZpbGVOb3RBbGxvd2VkID0gZmFsc2U7XG4gIGluZGV4ID0gMDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbWFnZVN2YzogSW1hZ2VTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maWxlVHlwZUFsbG93ZWQgPSAnJztcbiAgICB0aGlzLmZpbGVUeXBlLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIHRoaXMuZmlsZVR5cGVBbGxvd2VkICs9ICcsICc7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbGVUeXBlQWxsb3dlZCArPSAnKi4nICsgdHlwZTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uRmlsZUNoYW5nZShldmVudCwgaW5kZXgpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICB0aGlzLmltYWdlQmFzZTY0ID0gSU1BR0VfUExBQ0VIT0xERVI7XG5cbiAgICAgIGNvbnN0IHR5cGVBbGxvd2VkID0gdGhpcy5maWxlVHlwZS5maWx0ZXIodHlwZSA9PiBmaWxlLnR5cGUgPT09ICdpbWFnZS8nICsgdHlwZSk7XG5cbiAgICAgIHRoaXMuaW1hZ2VTZWxlY3RlZC5lbWl0KG51bGwpO1xuICAgICAgdGhpcy5maWxlT3ZlcnNpemUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmlsZU5vdEFsbG93ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHR5cGVBbGxvd2VkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLm9uSW1hZ2VEZWxldGUoKTtcbiAgICAgICAgdGhpcy5maWxlTm90QWxsb3dlZCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbGUuc2l6ZSA+PSB0aGlzLm1heEZpbGVTaXplKSB7XG4gICAgICAgIHRoaXMub25JbWFnZURlbGV0ZSgpO1xuICAgICAgICB0aGlzLmZpbGVPdmVyc2l6ZSA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLmltYWdlU3ZjLmltYWdlQmFzZTY0ZnJvbUZpbGUoZmlsZSwgZnVuY3Rpb24oYmFzZTY0KSB7XG4gICAgICAgIHNlbGYuaW1hZ2VCYXNlNjQgPSBiYXNlNjQ7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbWFnZVNlbGVjdGVkLmVtaXQoZmlsZSk7XG4gICAgICB0aGlzLmlzSW1hZ2VFeGlzdCA9IHRydWU7XG4gICAgICB0aGlzLmluZGV4ID0gaW5kZXggKyAxO1xuICAgIH1cbiAgfVxuXG4gIG9uSW1hZ2VEZWxldGUoKSB7XG4gICAgdGhpcy5pc0ltYWdlRXhpc3QgPSBmYWxzZTtcbiAgICB0aGlzLmltYWdlU2VsZWN0ZWQuZW1pdChudWxsKTtcbiAgICB0aGlzLnRhZ2FyLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgfVxuXG59XG4iXX0=