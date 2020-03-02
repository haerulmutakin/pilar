import { OnInit, ElementRef, EventEmitter } from '@angular/core';
export declare class FileUploadComponent implements OnInit {
    fileTag: ElementRef;
    multiple: boolean;
    fileType: string;
    maxFileSize: number;
    maxFileType: string;
    inputLabel: string;
    showPreview: boolean;
    showFileSize: boolean;
    previewPosition: string;
    fileList: any;
    filesSelected: EventEmitter<{}>;
    files: Array<any>;
    sizes: Array<any>;
    fileSizeOver: boolean;
    _maxFileSize: number;
    _previewPosition: string;
    ngOnInit(): void;
    private countFileSize;
    onFileChange($event: any): void;
    onFileItemRemove(index: number): void;
    private attacheMultipleFiles;
    private attachSingleFile;
    convertMaxFileSize(): void;
    private isFileExist;
}
