import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
export declare class ImageService {
    private sanitizer;
    dangerousUrl: string;
    trustedUrl: SafeUrl;
    constructor(sanitizer: DomSanitizer);
    imageBase64fromFile(file: any, callback: any): void;
    imageBase64fromUrl(url: any, callback: any): void;
}
