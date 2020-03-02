/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/form/file-upload/file-upload.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
export class FileUploadComponent {
    constructor() {
        this.multiple = false;
        this.fileType = '.csv, .xlsx, application/pdf';
        this.maxFileSize = 1;
        this.maxFileType = 'MB';
        this.inputLabel = 'Upload';
        this.showPreview = true;
        this.showFileSize = true;
        this.filesSelected = new EventEmitter();
        this.files = [];
        this.sizes = [];
        this.fileSizeOver = false;
        this._previewPosition = 'bottom';
    }
    /**
     * @param {?} position
     * @return {?}
     */
    set previewPosition(position) {
        // for single upload only
        this._previewPosition = (this.multiple) ? 'bottom' : position;
    }
    /**
     * @param {?} files
     * @return {?}
     */
    set fileList(files) {
        if (files) {
            this.onFileChange(files);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.convertMaxFileSize();
    }
    /**
     * @private
     * @param {?} bytes
     * @return {?}
     */
    countFileSize(bytes) {
        if (bytes < 1024) {
            return bytes + 'B';
        }
        else if (bytes < 1048576) {
            return (bytes / 1024).toFixed(3) + ' KB';
        }
        else if (bytes < 1073741824) {
            return (bytes / 1048576).toFixed(3) + ' MB';
        }
        else {
            return (bytes / 1073741824).toFixed(3) + ' GB';
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFileChange($event) {
        this.fileSizeOver = false;
        /** @type {?} */
        const files = $event.target.files;
        if (this.multiple) {
            this.attacheMultipleFiles(files);
        }
        else {
            this.attachSingleFile(files);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onFileItemRemove(index) {
        this.files.splice(index, 1);
        this.sizes.splice(index, 1);
        if (this.files.length > 0) {
            this.fileSizeOver = false;
            this.files.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                if (item.size > this._maxFileSize) {
                    this.fileSizeOver = true;
                }
            }));
            if (this.fileSizeOver) {
                this.filesSelected.emit(null);
                this.fileTag.nativeElement.value = '';
                return;
            }
            this.filesSelected.emit(this.files);
        }
        else {
            this.filesSelected.emit(null);
        }
        this.fileTag.nativeElement.value = '';
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    attacheMultipleFiles(files) {
        Array.from(files).forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (item.size > this._maxFileSize) {
                this.fileSizeOver = true;
            }
            if (this.isFileExist(item.name) < 0) {
                this.files.push(item);
                this.sizes.push(this.countFileSize(item.size));
            }
        }));
        this.fileTag.nativeElement.value = '';
        if (this.fileSizeOver) {
            this.filesSelected.emit(null);
            return;
        }
        this.filesSelected.emit(this.files);
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    attachSingleFile(files) {
        this.files[0] = files[0];
        this.sizes[0] = this.countFileSize(files[0].size);
        if (files[0].size > this._maxFileSize) {
            this.fileSizeOver = true;
            this.filesSelected.emit(null);
            return;
        }
        this.filesSelected.emit(this.files);
    }
    /**
     * @return {?}
     */
    convertMaxFileSize() {
        switch (this.maxFileType.toUpperCase()) {
            case 'KB':
                this._maxFileSize = this.maxFileSize * 1024;
                break;
            case 'MB':
                this._maxFileSize = this.maxFileSize * 1024 * 1024;
                break;
            case 'GB':
                this._maxFileSize = this.maxFileSize * 1024 * 1024 * 1024;
                break;
            case 'B':
                this._maxFileSize = this.maxFileSize;
                break;
            default:
                this._maxFileSize = this.maxFileSize;
                break;
        }
    }
    /**
     * @private
     * @param {?} fileName
     * @return {?}
     */
    isFileExist(fileName) {
        return this.files.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item.name === fileName));
    }
}
FileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-file-upload',
                template: "<div class=\"control-note max-file-upload\">\n  <p>Maksimal {{ maxFileSize }}{{maxFileType.toUpperCase()}}</p>\n</div>\n<div class=\"form-upload-file\" [class.flex-display]=\"_previewPosition !== 'bottom'\">\n  <button class=\"btn btn-primary form-control-file-upload\">\n    {{inputLabel}} <input #file type=\"file\" [accept]=\"fileType\" [multiple]=\"multiple\" (change)=\"onFileChange($event)\">\n  </button>\n  <div class=\"file-list\" *ngIf=\"files.length > 0 && showPreview\">\n    <p *ngFor=\"let file of files; let i = index\" \n      class=\"control-label file-name\" \n      [class.not-allowed]=\"file.size > _maxFileSize\" \n      [class.left-marign]=\"_previewPosition !== 'bottom'\">\n      <span class=\"fa fa-times table-cell\" aria-hidden=\"true\" (click)=\"onFileItemRemove(i)\"></span>\n      <span class=\"name table-cell\">{{file.name}}</span>\n      <span *ngIf=\"showFileSize\" class=\"table-cell\">{{sizes[i]}}</span>\n    </p>\n  </div>\n</div>\n<small *ngIf=\"fileSizeOver && files.length > 0\" class=\"text-danger\">\n  {{ 'Ukuran berkas terlalu besar' | translate }}\n</small>",
                styles: [".max-file-upload p{font-size:11px!important;margin:2px 0}.form-upload-file.flex-display{display:flex;align-items:flex-end}.form-upload-file .file-name{align-items:center;display:table-row-group;margin:2px 0;font-weight:400;font-size:13px}.form-upload-file .file-name .fa{font-size:18px;cursor:pointer;margin-right:5px}.form-upload-file .file-name.not-allowed{color:#a94442}.form-upload-file .file-name.left-marign{display:unset;margin-left:10px}.form-upload-file .file-name .table-cell{display:table-cell;padding:2px 3px}.form-control-file-upload{font-size:14px;position:relative}.form-control-file-upload input[type=file]{position:absolute;top:0;right:0;width:100%;height:100%;opacity:0;outline:0;cursor:inherit;display:block}"]
            }] }
];
FileUploadComponent.propDecorators = {
    fileTag: [{ type: ViewChild, args: ['file',] }],
    multiple: [{ type: Input }],
    fileType: [{ type: Input }],
    maxFileSize: [{ type: Input }],
    maxFileType: [{ type: Input }],
    inputLabel: [{ type: Input }],
    showPreview: [{ type: Input }],
    showFileSize: [{ type: Input }],
    previewPosition: [{ type: Input }],
    fileList: [{ type: Input }],
    filesSelected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FileUploadComponent.prototype.fileTag;
    /** @type {?} */
    FileUploadComponent.prototype.multiple;
    /** @type {?} */
    FileUploadComponent.prototype.fileType;
    /** @type {?} */
    FileUploadComponent.prototype.maxFileSize;
    /** @type {?} */
    FileUploadComponent.prototype.maxFileType;
    /** @type {?} */
    FileUploadComponent.prototype.inputLabel;
    /** @type {?} */
    FileUploadComponent.prototype.showPreview;
    /** @type {?} */
    FileUploadComponent.prototype.showFileSize;
    /** @type {?} */
    FileUploadComponent.prototype.filesSelected;
    /** @type {?} */
    FileUploadComponent.prototype.files;
    /** @type {?} */
    FileUploadComponent.prototype.sizes;
    /** @type {?} */
    FileUploadComponent.prototype.fileSizeOver;
    /** @type {?} */
    FileUploadComponent.prototype._maxFileSize;
    /** @type {?} */
    FileUploadComponent.prototype._previewPosition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU90RyxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBUVcsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsOEJBQThCLENBQUM7UUFDMUMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN0QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQWNuQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0MsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUN2QixVQUFLLEdBQWUsRUFBRSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXJCLHFCQUFnQixHQUFHLFFBQVEsQ0FBQztJQTJHOUIsQ0FBQzs7Ozs7SUE5SEMsSUFDSSxlQUFlLENBQUMsUUFBZ0I7UUFDbEMseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxJQUNJLFFBQVEsQ0FBQyxLQUFVO1FBQ3JCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7SUFV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eyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLWZpbGUtdXBsb2FkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnZmlsZScpIGZpbGVUYWc6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgbXVsdGlwbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgZmlsZVR5cGUgPSAnLmNzdiwgLnhsc3gsIGFwcGxpY2F0aW9uL3BkZic7XG4gIEBJbnB1dCgpIG1heEZpbGVTaXplID0gMTtcbiAgQElucHV0KCkgbWF4RmlsZVR5cGUgPSAnTUInO1xuICBASW5wdXQoKSBpbnB1dExhYmVsID0gJ1VwbG9hZCc7XG4gIEBJbnB1dCgpIHNob3dQcmV2aWV3ID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd0ZpbGVTaXplID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgc2V0IHByZXZpZXdQb3NpdGlvbihwb3NpdGlvbjogc3RyaW5nKSB7XG4gICAgLy8gZm9yIHNpbmdsZSB1cGxvYWQgb25seVxuICAgIHRoaXMuX3ByZXZpZXdQb3NpdGlvbiA9ICh0aGlzLm11bHRpcGxlKSA/ICdib3R0b20nIDogcG9zaXRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZmlsZUxpc3QoZmlsZXM6IGFueSkge1xuICAgIGlmIChmaWxlcykge1xuICAgICAgdGhpcy5vbkZpbGVDaGFuZ2UoZmlsZXMpO1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoKSBmaWxlc1NlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGZpbGVzOiBBcnJheTxhbnk+ID0gW107XG4gIHNpemVzOiBBcnJheTxhbnk+ID0gW107XG4gIGZpbGVTaXplT3ZlciA9IGZhbHNlO1xuICBfbWF4RmlsZVNpemU6IG51bWJlcjtcbiAgX3ByZXZpZXdQb3NpdGlvbiA9ICdib3R0b20nO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29udmVydE1heEZpbGVTaXplKCk7XG4gIH1cblxuICBwcml2YXRlIGNvdW50RmlsZVNpemUoYnl0ZXM6IG51bWJlcikge1xuICAgICAgaWYgKGJ5dGVzIDwgMTAyNCkge1xuICAgICAgICByZXR1cm4gYnl0ZXMgKyAnQic7XG4gICAgICB9IGVsc2UgaWYgKGJ5dGVzIDwgMTA0ODU3Nikge1xuICAgICAgICByZXR1cm4oYnl0ZXMgLyAxMDI0KS50b0ZpeGVkKDMpICsgJyBLQic7XG4gICAgICB9IGVsc2UgaWYgKGJ5dGVzIDwgMTA3Mzc0MTgyNCkge1xuICAgICAgICByZXR1cm4oYnl0ZXMgLyAxMDQ4NTc2KS50b0ZpeGVkKDMpICsgJyBNQic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4oYnl0ZXMgLyAxMDczNzQxODI0KS50b0ZpeGVkKDMpICsgJyBHQic7XG4gICAgfVxuICB9XG5cbiAgb25GaWxlQ2hhbmdlKCRldmVudDogYW55KSB7XG4gICAgdGhpcy5maWxlU2l6ZU92ZXIgPSBmYWxzZTtcbiAgICBjb25zdCBmaWxlcyA9ICRldmVudC50YXJnZXQuZmlsZXM7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuYXR0YWNoZU11bHRpcGxlRmlsZXMoZmlsZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF0dGFjaFNpbmdsZUZpbGUoZmlsZXMpO1xuICAgIH1cbiAgfVxuXG4gIG9uRmlsZUl0ZW1SZW1vdmUoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnNpemVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgaWYgKHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5maWxlU2l6ZU92ZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmlsZXMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnNpemUgPiB0aGlzLl9tYXhGaWxlU2l6ZSkge1xuICAgICAgICAgIHRoaXMuZmlsZVNpemVPdmVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmZpbGVTaXplT3Zlcikge1xuICAgICAgICB0aGlzLmZpbGVzU2VsZWN0ZWQuZW1pdChudWxsKTtcbiAgICAgICAgdGhpcy5maWxlVGFnLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZpbGVzU2VsZWN0ZWQuZW1pdCh0aGlzLmZpbGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWxlc1NlbGVjdGVkLmVtaXQobnVsbCk7XG4gICAgfVxuICAgIHRoaXMuZmlsZVRhZy5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaGVNdWx0aXBsZUZpbGVzKGZpbGVzOiBhbnkpIHtcbiAgICBBcnJheS5mcm9tKGZpbGVzKS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIGlmIChpdGVtLnNpemUgPiB0aGlzLl9tYXhGaWxlU2l6ZSkge1xuICAgICAgICB0aGlzLmZpbGVTaXplT3ZlciA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc0ZpbGVFeGlzdChpdGVtLm5hbWUpIDwgMCkge1xuICAgICAgICB0aGlzLmZpbGVzLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMuc2l6ZXMucHVzaCh0aGlzLmNvdW50RmlsZVNpemUoaXRlbS5zaXplKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5maWxlVGFnLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICBpZiAodGhpcy5maWxlU2l6ZU92ZXIpIHtcbiAgICAgIHRoaXMuZmlsZXNTZWxlY3RlZC5lbWl0KG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZmlsZXNTZWxlY3RlZC5lbWl0KHRoaXMuZmlsZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hTaW5nbGVGaWxlKGZpbGVzOiBhbnkpIHtcbiAgICB0aGlzLmZpbGVzWzBdID0gZmlsZXNbMF07XG4gICAgdGhpcy5zaXplc1swXSA9IHRoaXMuY291bnRGaWxlU2l6ZShmaWxlc1swXS5zaXplKTtcbiAgICBpZiAoZmlsZXNbMF0uc2l6ZSA+IHRoaXMuX21heEZpbGVTaXplKSB7XG4gICAgICB0aGlzLmZpbGVTaXplT3ZlciA9IHRydWU7XG4gICAgICB0aGlzLmZpbGVzU2VsZWN0ZWQuZW1pdChudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmZpbGVzU2VsZWN0ZWQuZW1pdCh0aGlzLmZpbGVzKTtcbiAgfVxuXG4gIGNvbnZlcnRNYXhGaWxlU2l6ZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMubWF4RmlsZVR5cGUudG9VcHBlckNhc2UoKSkge1xuICAgICAgY2FzZSAnS0InOlxuICAgICAgICB0aGlzLl9tYXhGaWxlU2l6ZSA9IHRoaXMubWF4RmlsZVNpemUgKiAxMDI0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ01CJzpcbiAgICAgICAgdGhpcy5fbWF4RmlsZVNpemUgPSB0aGlzLm1heEZpbGVTaXplICogMTAyNCAqICAxMDI0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0dCJzpcbiAgICAgICAgdGhpcy5fbWF4RmlsZVNpemUgPSB0aGlzLm1heEZpbGVTaXplICogMTAyNCAqIDEwMjQgKiAxMDI0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgICB0aGlzLl9tYXhGaWxlU2l6ZSA9IHRoaXMubWF4RmlsZVNpemU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fbWF4RmlsZVNpemUgPSB0aGlzLm1heEZpbGVTaXplO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzRmlsZUV4aXN0KGZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGZpbGVOYW1lKTtcbiAgfVxuXG59XG4iXX0=