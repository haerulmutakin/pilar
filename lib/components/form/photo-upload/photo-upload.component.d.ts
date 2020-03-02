import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { ImageService } from '../../../services/image.service';
export declare class PhotoUploadComponent implements OnInit {
    private imageSvc;
    tagar: ElementRef;
    label: string;
    required: boolean;
    fileType: Array<string>;
    maxFileSize: number;
    maxFileType: string;
    imageBase64: string;
    width: string;
    height: string;
    isImageExist: boolean;
    imageSelected: EventEmitter<{}>;
    fileTypeAllowed: string;
    fileOversize: boolean;
    fileNotAllowed: boolean;
    index: number;
    constructor(imageSvc: ImageService);
    ngOnInit(): void;
    onFileChange(event: any, index: any): void;
    onImageDelete(): void;
}
