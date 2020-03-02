/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/form/text-editor/text-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class TextEditorComponent {
    constructor() {
        this.height = 250;
        this.menuBar = false;
        this.toolBar = true;
        this.statusBar = true;
        this.editorContentChanged = new EventEmitter();
        this.editorBlured = new EventEmitter();
        this.tinyMceConfig = {
            menubar: this.menuBar,
            height: Number(this.height),
            branding: false,
            resize: false,
            statusbar: this.statusBar,
            toolbar: this.toolBar ?
                [
                    'undo redo | styleselect | fontselect | fontsizeselect | subscript superscript | bullist numlist | bold italic underline strikethrough  | alignleft aligncenter alignright alignjustify  |  outdent indent| link | image'
                ] : false,
            plugins: ['link', 'paste', 'lists', 'image'],
            mobile: {
                theme: 'silver',
                menubar: false,
                statusbar: false,
                toolbar: this.toolBar ?
                    [
                        'undo redo | styleselect | bullist numlist| subscript superscript | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent'
                    ] : false,
            },
            setup: (/**
             * @param {?} editor
             * @return {?}
             */
            (editor) => {
                editor.on('blur', (/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const content = editor.getContent();
                    this.editorBlured.emit(content);
                }));
                editor.on('change', (/**
                 * @return {?}
                 */
                () => {
                    this.editorContentChanged.emit(editor.getContent());
                }));
            })
        };
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.editor) {
            if (this.content && this.content.length > 0) {
                this.editor.setContent(this.content);
            }
            else {
                this.editor.setContent('');
            }
        }
    }
}
TextEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'uii-text-editor',
                template: "<div *ngIf=\"group\" [formGroup]=\"group\">\n  <editor\n    id=\"{{ elementId }}\"\n    apiKey=\"test\"\n    [init]= \"tinyMceConfig\"\n    [formControlName]=\"controlName\"></editor>\n</div>\n<div *ngIf=\"!group\">\n  <editor\n    id=\"{{ elementId }}\"\n    apiKey=\"test\"\n    [init]=\"tinyMceConfig\"></editor>\n</div>\n  ",
                styles: [".mce-notification{display:none!important}"]
            }] }
];
/** @nocollapse */
TextEditorComponent.ctorParameters = () => [];
TextEditorComponent.propDecorators = {
    elementId: [{ type: Input }],
    group: [{ type: Input }],
    controlName: [{ type: Input }],
    content: [{ type: Input }],
    height: [{ type: Input }],
    menuBar: [{ type: Input }],
    toolBar: [{ type: Input }],
    statusBar: [{ type: Input }],
    editorContentChanged: [{ type: Output }],
    editorBlured: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TextEditorComponent.prototype.elementId;
    /** @type {?} */
    TextEditorComponent.prototype.group;
    /** @type {?} */
    TextEditorComponent.prototype.controlName;
    /** @type {?} */
    TextEditorComponent.prototype.content;
    /** @type {?} */
    TextEditorComponent.prototype.height;
    /** @type {?} */
    TextEditorComponent.prototype.menuBar;
    /** @type {?} */
    TextEditorComponent.prototype.toolBar;
    /** @type {?} */
    TextEditorComponent.prototype.statusBar;
    /** @type {?} */
    TextEditorComponent.prototype.editorContentChanged;
    /** @type {?} */
    TextEditorComponent.prototype.editorBlured;
    /** @type {?} */
    TextEditorComponent.prototype.editor;
    /** @type {?} */
    TextEditorComponent.prototype.tinyMceConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtL3RleHQtZWRpdG9yL3RleHQtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzNDLE1BQU0sT0FBTyxtQkFBbUI7SUFlOUI7UUFWUyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNoQix5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9DLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQU0vQyxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsS0FBSztZQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN2QjtvQkFDRSx5TkFBeU47aUJBQzFOLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDVCxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7WUFDNUMsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxRQUFRO2dCQUNmLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN2Qjt3QkFDRSwySkFBMko7cUJBQzVKLENBQUMsQ0FBQyxDQUFDLEtBQUs7YUFDVjtZQUNELEtBQUs7Ozs7WUFBRSxDQUFDLE1BQVcsRUFBRSxFQUFFO2dCQUNyQixNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU07OztnQkFBRSxHQUFHLEVBQUU7OzBCQUNmLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFO29CQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7Z0JBQUUsR0FBRyxFQUFFO29CQUN2QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQTtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1QjtTQUNGO0lBQ0gsQ0FBQzs7O1lBN0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixtVkFBMkM7O2FBRTVDOzs7Ozt3QkFFRSxLQUFLO29CQUNMLEtBQUs7MEJBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7bUNBQ0wsTUFBTTsyQkFDTixNQUFNOzs7O0lBVFAsd0NBQTJCOztJQUMzQixvQ0FBMEI7O0lBQzFCLDBDQUEwQjs7SUFDMUIsc0NBQXNCOztJQUN0QixxQ0FBc0I7O0lBQ3RCLHNDQUF5Qjs7SUFDekIsc0NBQXdCOztJQUN4Qix3Q0FBMEI7O0lBQzFCLG1EQUF5RDs7SUFDekQsMkNBQWlEOztJQUVqRCxxQ0FBTzs7SUFDUCw0Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsICBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWktdGV4dC1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWVkaXRvci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBlbGVtZW50SWQ6IHN0cmluZztcbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgY29udHJvbE5hbWU6IGFueTtcbiAgQElucHV0KCkgY29udGVudDogYW55O1xuICBASW5wdXQoKSBoZWlnaHQgPSAyNTA7XG4gIEBJbnB1dCgpIG1lbnVCYXIgPSBmYWxzZTtcbiAgQElucHV0KCkgdG9vbEJhciA9IHRydWU7XG4gIEBJbnB1dCgpIHN0YXR1c0JhciA9IHRydWU7XG4gIEBPdXRwdXQoKSBlZGl0b3JDb250ZW50Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZWRpdG9yQmx1cmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgZWRpdG9yO1xuICB0aW55TWNlQ29uZmlnOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50aW55TWNlQ29uZmlnID0ge1xuICAgICAgbWVudWJhcjogdGhpcy5tZW51QmFyLFxuICAgICAgaGVpZ2h0OiBOdW1iZXIodGhpcy5oZWlnaHQpLFxuICAgICAgYnJhbmRpbmc6IGZhbHNlLFxuICAgICAgcmVzaXplOiBmYWxzZSxcbiAgICAgIHN0YXR1c2JhcjogdGhpcy5zdGF0dXNCYXIsXG4gICAgICB0b29sYmFyOiB0aGlzLnRvb2xCYXIgP1xuICAgICAgW1xuICAgICAgICAndW5kbyByZWRvIHwgc3R5bGVzZWxlY3QgfCBmb250c2VsZWN0IHwgZm9udHNpemVzZWxlY3QgfCBzdWJzY3JpcHQgc3VwZXJzY3JpcHQgfCBidWxsaXN0IG51bWxpc3QgfCBib2xkIGl0YWxpYyB1bmRlcmxpbmUgc3RyaWtldGhyb3VnaCAgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgIHwgIG91dGRlbnQgaW5kZW50fCBsaW5rIHwgaW1hZ2UnXG4gICAgICBdIDogZmFsc2UsXG4gICAgICBwbHVnaW5zOiBbJ2xpbmsnLCAncGFzdGUnLCAnbGlzdHMnLCAnaW1hZ2UnXSxcbiAgICAgIG1vYmlsZToge1xuICAgICAgICB0aGVtZTogJ3NpbHZlcicsXG4gICAgICAgIG1lbnViYXI6IGZhbHNlLFxuICAgICAgICBzdGF0dXNiYXI6IGZhbHNlLFxuICAgICAgICB0b29sYmFyOiB0aGlzLnRvb2xCYXIgP1xuICAgICAgICBbXG4gICAgICAgICAgJ3VuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYnVsbGlzdCBudW1saXN0fCBzdWJzY3JpcHQgc3VwZXJzY3JpcHQgfCBib2xkIGl0YWxpYyB1bmRlcmxpbmUgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBvdXRkZW50IGluZGVudCdcbiAgICAgICAgXSA6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHNldHVwOiAoZWRpdG9yOiBhbnkpID0+IHtcbiAgICAgICAgZWRpdG9yLm9uKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlZGl0b3IuZ2V0Q29udGVudCgpO1xuICAgICAgICAgIHRoaXMuZWRpdG9yQmx1cmVkLmVtaXQoY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlZGl0b3Iub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmVkaXRvckNvbnRlbnRDaGFuZ2VkLmVtaXQoZWRpdG9yLmdldENvbnRlbnQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRlbnQgJiYgdGhpcy5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0Q29udGVudCh0aGlzLmNvbnRlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0Q29udGVudCgnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=