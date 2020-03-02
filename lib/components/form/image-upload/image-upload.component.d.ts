import { OnInit, EventEmitter } from '@angular/core';
import { ImageService } from '../../../services/image.service';
export declare class UiiImageUploadComponent implements OnInit {
    private imageSvc;
    label: string;
    required: boolean;
    fileType: Array<string>;
    maxFileSize: 1;
    imageBase64: string;
    imageSelected: EventEmitter<{}>;
    fileTypeAllowed: string;
    fileOversize: boolean;
    fileNotAllowed: boolean;
    constructor(imageSvc: ImageService);
    ngOnInit(): void;
    onFileChange(event: any): void;
}
