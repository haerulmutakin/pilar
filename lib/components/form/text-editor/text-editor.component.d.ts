import { EventEmitter, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class TextEditorComponent implements OnChanges {
    elementId: string;
    group: FormGroup;
    controlName: any;
    content: any;
    height: number;
    menuBar: boolean;
    toolBar: boolean;
    statusBar: boolean;
    editorContentChanged: EventEmitter<any>;
    editorBlured: EventEmitter<any>;
    editor: any;
    tinyMceConfig: any;
    constructor();
    ngOnChanges(): void;
}
