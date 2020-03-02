/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/form/file-upload/file-upload.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent() {
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
    Object.defineProperty(FileUploadComponent.prototype, "previewPosition", {
        set: /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            // for single upload only
            this._previewPosition = (this.multiple) ? 'bottom' : position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileUploadComponent.prototype, "fileList", {
        set: /**
         * @param {?} files
         * @return {?}
         */
        function (files) {
            if (files) {
                this.onFileChange(files);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.convertMaxFileSize();
    };
    /**
     * @private
     * @param {?} bytes
     * @return {?}
     */
    FileUploadComponent.prototype.countFileSize = /**
     * @private
     * @param {?} bytes
     * @return {?}
     */
    function (bytes) {
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
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FileUploadComponent.prototype.onFileChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.fileSizeOver = false;
        /** @type {?} */
        var files = $event.target.files;
        if (this.multiple) {
            this.attacheMultipleFiles(files);
        }
        else {
            this.attachSingleFile(files);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    FileUploadComponent.prototype.onFileItemRemove = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        this.files.splice(index, 1);
        this.sizes.splice(index, 1);
        if (this.files.length > 0) {
            this.fileSizeOver = false;
            this.files.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.size > _this._maxFileSize) {
                    _this.fileSizeOver = true;
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
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    FileUploadComponent.prototype.attacheMultipleFiles = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var _this = this;
        Array.from(files).forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.size > _this._maxFileSize) {
                _this.fileSizeOver = true;
            }
            if (_this.isFileExist(item.name) < 0) {
                _this.files.push(item);
                _this.sizes.push(_this.countFileSize(item.size));
            }
        }));
        this.fileTag.nativeElement.value = '';
        if (this.fileSizeOver) {
            this.filesSelected.emit(null);
            return;
        }
        this.filesSelected.emit(this.files);
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    FileUploadComponent.prototype.attachSingleFile = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.files[0] = files[0];
        this.sizes[0] = this.countFileSize(files[0].size);
        if (files[0].size > this._maxFileSize) {
            this.fileSizeOver = true;
            this.filesSelected.emit(null);
            return;
        }
        this.filesSelected.emit(this.files);
    };
    /**
     * @return {?}
     */
    FileUploadComponent.prototype.convertMaxFileSize = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @param {?} fileName
     * @return {?}
     */
    FileUploadComponent.prototype.isFileExist = /**
     * @private
     * @param {?} fileName
     * @return {?}
     */
    function (fileName) {
        return this.files.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.name === fileName; }));
    };
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
    return FileUploadComponent;
}());
export { FileUploadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RztJQUFBO1FBUVcsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsOEJBQThCLENBQUM7UUFDMUMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN0QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQWNuQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0MsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUN2QixVQUFLLEdBQWUsRUFBRSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXJCLHFCQUFnQixHQUFHLFFBQVEsQ0FBQztJQTJHOUIsQ0FBQztJQTlIQyxzQkFDSSxnREFBZTs7Ozs7UUFEbkIsVUFDb0IsUUFBZ0I7WUFDbEMseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDaEUsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSx5Q0FBUTs7Ozs7UUFEWixVQUNhLEtBQVU7WUFDckIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQjtRQUNILENBQUM7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OztJQUM1Qix5Q0FBK0I7O0lBQy9CLDBDQUE0Qjs7SUFDNUIsMkNBQTZCOztJQWM3Qiw0Q0FBNkM7O0lBRTdDLG9DQUF1Qjs7SUFDdkIsb0NBQXVCOztJQUN2QiwyQ0FBcUI7O0lBQ3JCLDJDQUFxQjs7SUFDckIsK0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpaS1maWxlLXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2ZpbGUnKSBmaWxlVGFnOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIG11bHRpcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZpbGVUeXBlID0gJy5jc3YsIC54bHN4LCBhcHBsaWNhdGlvbi9wZGYnO1xuICBASW5wdXQoKSBtYXhGaWxlU2l6ZSA9IDE7XG4gIEBJbnB1dCgpIG1heEZpbGVUeXBlID0gJ01CJztcbiAgQElucHV0KCkgaW5wdXRMYWJlbCA9ICdVcGxvYWQnO1xuICBASW5wdXQoKSBzaG93UHJldmlldyA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dGaWxlU2l6ZSA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHNldCBwcmV2aWV3UG9zaXRpb24ocG9zaXRpb246IHN0cmluZykge1xuICAgIC8vIGZvciBzaW5nbGUgdXBsb2FkIG9ubHlcbiAgICB0aGlzLl9wcmV2aWV3UG9zaXRpb24gPSAodGhpcy5tdWx0aXBsZSkgPyAnYm90dG9tJyA6IHBvc2l0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZpbGVMaXN0KGZpbGVzOiBhbnkpIHtcbiAgICBpZiAoZmlsZXMpIHtcbiAgICAgIHRoaXMub25GaWxlQ2hhbmdlKGZpbGVzKTtcbiAgICB9XG4gIH1cblxuICBAT3V0cHV0KCkgZmlsZXNTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBmaWxlczogQXJyYXk8YW55PiA9IFtdO1xuICBzaXplczogQXJyYXk8YW55PiA9IFtdO1xuICBmaWxlU2l6ZU92ZXIgPSBmYWxzZTtcbiAgX21heEZpbGVTaXplOiBudW1iZXI7XG4gIF9wcmV2aWV3UG9zaXRpb24gPSAnYm90dG9tJztcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbnZlcnRNYXhGaWxlU2l6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3VudEZpbGVTaXplKGJ5dGVzOiBudW1iZXIpIHtcbiAgICAgIGlmIChieXRlcyA8IDEwMjQpIHtcbiAgICAgICAgcmV0dXJuIGJ5dGVzICsgJ0InO1xuICAgICAgfSBlbHNlIGlmIChieXRlcyA8IDEwNDg1NzYpIHtcbiAgICAgICAgcmV0dXJuKGJ5dGVzIC8gMTAyNCkudG9GaXhlZCgzKSArICcgS0InO1xuICAgICAgfSBlbHNlIGlmIChieXRlcyA8IDEwNzM3NDE4MjQpIHtcbiAgICAgICAgcmV0dXJuKGJ5dGVzIC8gMTA0ODU3NikudG9GaXhlZCgzKSArICcgTUInO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuKGJ5dGVzIC8gMTA3Mzc0MTgyNCkudG9GaXhlZCgzKSArICcgR0InO1xuICAgIH1cbiAgfVxuXG4gIG9uRmlsZUNoYW5nZSgkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuZmlsZVNpemVPdmVyID0gZmFsc2U7XG4gICAgY29uc3QgZmlsZXMgPSAkZXZlbnQudGFyZ2V0LmZpbGVzO1xuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICB0aGlzLmF0dGFjaGVNdWx0aXBsZUZpbGVzKGZpbGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdHRhY2hTaW5nbGVGaWxlKGZpbGVzKTtcbiAgICB9XG4gIH1cblxuICBvbkZpbGVJdGVtUmVtb3ZlKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmZpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5zaXplcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGlmICh0aGlzLmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZmlsZVNpemVPdmVyID0gZmFsc2U7XG4gICAgICB0aGlzLmZpbGVzLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5zaXplID4gdGhpcy5fbWF4RmlsZVNpemUpIHtcbiAgICAgICAgICB0aGlzLmZpbGVTaXplT3ZlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5maWxlU2l6ZU92ZXIpIHtcbiAgICAgICAgdGhpcy5maWxlc1NlbGVjdGVkLmVtaXQobnVsbCk7XG4gICAgICAgIHRoaXMuZmlsZVRhZy5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5maWxlc1NlbGVjdGVkLmVtaXQodGhpcy5maWxlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsZXNTZWxlY3RlZC5lbWl0KG51bGwpO1xuICAgIH1cbiAgICB0aGlzLmZpbGVUYWcubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hlTXVsdGlwbGVGaWxlcyhmaWxlczogYW55KSB7XG4gICAgQXJyYXkuZnJvbShmaWxlcykuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICBpZiAoaXRlbS5zaXplID4gdGhpcy5fbWF4RmlsZVNpemUpIHtcbiAgICAgICAgdGhpcy5maWxlU2l6ZU92ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNGaWxlRXhpc3QoaXRlbS5uYW1lKSA8IDApIHtcbiAgICAgICAgdGhpcy5maWxlcy5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLnNpemVzLnB1c2godGhpcy5jb3VudEZpbGVTaXplKGl0ZW0uc2l6ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZmlsZVRhZy5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgaWYgKHRoaXMuZmlsZVNpemVPdmVyKSB7XG4gICAgICB0aGlzLmZpbGVzU2VsZWN0ZWQuZW1pdChudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmZpbGVzU2VsZWN0ZWQuZW1pdCh0aGlzLmZpbGVzKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoU2luZ2xlRmlsZShmaWxlczogYW55KSB7XG4gICAgdGhpcy5maWxlc1swXSA9IGZpbGVzWzBdO1xuICAgIHRoaXMuc2l6ZXNbMF0gPSB0aGlzLmNvdW50RmlsZVNpemUoZmlsZXNbMF0uc2l6ZSk7XG4gICAgaWYgKGZpbGVzWzBdLnNpemUgPiB0aGlzLl9tYXhGaWxlU2l6ZSkge1xuICAgICAgdGhpcy5maWxlU2l6ZU92ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5maWxlc1NlbGVjdGVkLmVtaXQobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5maWxlc1NlbGVjdGVkLmVtaXQodGhpcy5maWxlcyk7XG4gIH1cblxuICBjb252ZXJ0TWF4RmlsZVNpemUoKSB7XG4gICAgc3dpdGNoICh0aGlzLm1heEZpbGVUeXBlLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGNhc2UgJ0tCJzpcbiAgICAgICAgdGhpcy5fbWF4RmlsZVNpemUgPSB0aGlzLm1heEZpbGVTaXplICogMTAyNDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdNQic6XG4gICAgICAgIHRoaXMuX21heEZpbGVTaXplID0gdGhpcy5tYXhGaWxlU2l6ZSAqIDEwMjQgKiAgMTAyNDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdHQic6XG4gICAgICAgIHRoaXMuX21heEZpbGVTaXplID0gdGhpcy5tYXhGaWxlU2l6ZSAqIDEwMjQgKiAxMDI0ICogMTAyNDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdCJzpcbiAgICAgICAgdGhpcy5fbWF4RmlsZVNpemUgPSB0aGlzLm1heEZpbGVTaXplO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX21heEZpbGVTaXplID0gdGhpcy5tYXhGaWxlU2l6ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0ZpbGVFeGlzdChmaWxlTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5uYW1lID09PSBmaWxlTmFtZSk7XG4gIH1cblxufVxuIl19