/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/form/text-editor/text-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
var TextEditorComponent = /** @class */ (function () {
    function TextEditorComponent() {
        var _this = this;
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
            function (editor) {
                editor.on('blur', (/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var content = editor.getContent();
                    _this.editorBlured.emit(content);
                }));
                editor.on('change', (/**
                 * @return {?}
                 */
                function () {
                    _this.editorContentChanged.emit(editor.getContent());
                }));
            })
        };
    }
    /**
     * @return {?}
     */
    TextEditorComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.editor) {
            if (this.content && this.content.length > 0) {
                this.editor.setContent(this.content);
            }
            else {
                this.editor.setContent('');
            }
        }
    };
    TextEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-text-editor',
                    template: "<div *ngIf=\"group\" [formGroup]=\"group\">\n  <editor\n    id=\"{{ elementId }}\"\n    apiKey=\"test\"\n    [init]= \"tinyMceConfig\"\n    [formControlName]=\"controlName\"></editor>\n</div>\n<div *ngIf=\"!group\">\n  <editor\n    id=\"{{ elementId }}\"\n    apiKey=\"test\"\n    [init]=\"tinyMceConfig\"></editor>\n</div>\n  ",
                    styles: [".mce-notification{display:none!important}"]
                }] }
    ];
    /** @nocollapse */
    TextEditorComponent.ctorParameters = function () { return []; };
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
    return TextEditorComponent;
}());
export { TextEditorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtL3RleHQtZWRpdG9yL3RleHQtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBb0JFO1FBQUEsaUJBK0JDO1FBekNRLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0MsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBTS9DLElBQUksQ0FBQyxhQUFhLEdBQUc7WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMzQixRQUFRLEVBQUUsS0FBSztZQUNmLE1BQU0sRUFBRSxLQUFLO1lBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZCO29CQUNFLHlOQUF5TjtpQkFDMU4sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNULE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztZQUM1QyxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3ZCO3dCQUNFLDJKQUEySjtxQkFDNUosQ0FBQyxDQUFDLENBQUMsS0FBSzthQUNWO1lBQ0QsS0FBSzs7OztZQUFFLFVBQUMsTUFBVztnQkFDakIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7Z0JBQUU7O3dCQUNWLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFO29CQUNuQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7Z0JBQUU7b0JBQ2xCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3RELENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFBO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDNUI7U0FDRjtJQUNILENBQUM7O2dCQTdERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsbVZBQTJDOztpQkFFNUM7Ozs7OzRCQUVFLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzt1Q0FDTCxNQUFNOytCQUNOLE1BQU07O0lBK0NULDBCQUFDO0NBQUEsQUE5REQsSUE4REM7U0F6RFksbUJBQW1COzs7SUFDOUIsd0NBQTJCOztJQUMzQixvQ0FBMEI7O0lBQzFCLDBDQUEwQjs7SUFDMUIsc0NBQXNCOztJQUN0QixxQ0FBc0I7O0lBQ3RCLHNDQUF5Qjs7SUFDekIsc0NBQXdCOztJQUN4Qix3Q0FBMEI7O0lBQzFCLG1EQUF5RDs7SUFDekQsMkNBQWlEOztJQUVqRCxxQ0FBTzs7SUFDUCw0Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsICBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWktdGV4dC1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWVkaXRvci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBlbGVtZW50SWQ6IHN0cmluZztcbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgY29udHJvbE5hbWU6IGFueTtcbiAgQElucHV0KCkgY29udGVudDogYW55O1xuICBASW5wdXQoKSBoZWlnaHQgPSAyNTA7XG4gIEBJbnB1dCgpIG1lbnVCYXIgPSBmYWxzZTtcbiAgQElucHV0KCkgdG9vbEJhciA9IHRydWU7XG4gIEBJbnB1dCgpIHN0YXR1c0JhciA9IHRydWU7XG4gIEBPdXRwdXQoKSBlZGl0b3JDb250ZW50Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZWRpdG9yQmx1cmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgZWRpdG9yO1xuICB0aW55TWNlQ29uZmlnOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50aW55TWNlQ29uZmlnID0ge1xuICAgICAgbWVudWJhcjogdGhpcy5tZW51QmFyLFxuICAgICAgaGVpZ2h0OiBOdW1iZXIodGhpcy5oZWlnaHQpLFxuICAgICAgYnJhbmRpbmc6IGZhbHNlLFxuICAgICAgcmVzaXplOiBmYWxzZSxcbiAgICAgIHN0YXR1c2JhcjogdGhpcy5zdGF0dXNCYXIsXG4gICAgICB0b29sYmFyOiB0aGlzLnRvb2xCYXIgP1xuICAgICAgW1xuICAgICAgICAndW5kbyByZWRvIHwgc3R5bGVzZWxlY3QgfCBmb250c2VsZWN0IHwgZm9udHNpemVzZWxlY3QgfCBzdWJzY3JpcHQgc3VwZXJzY3JpcHQgfCBidWxsaXN0IG51bWxpc3QgfCBib2xkIGl0YWxpYyB1bmRlcmxpbmUgc3RyaWtldGhyb3VnaCAgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgIHwgIG91dGRlbnQgaW5kZW50fCBsaW5rIHwgaW1hZ2UnXG4gICAgICBdIDogZmFsc2UsXG4gICAgICBwbHVnaW5zOiBbJ2xpbmsnLCAncGFzdGUnLCAnbGlzdHMnLCAnaW1hZ2UnXSxcbiAgICAgIG1vYmlsZToge1xuICAgICAgICB0aGVtZTogJ3NpbHZlcicsXG4gICAgICAgIG1lbnViYXI6IGZhbHNlLFxuICAgICAgICBzdGF0dXNiYXI6IGZhbHNlLFxuICAgICAgICB0b29sYmFyOiB0aGlzLnRvb2xCYXIgP1xuICAgICAgICBbXG4gICAgICAgICAgJ3VuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYnVsbGlzdCBudW1saXN0fCBzdWJzY3JpcHQgc3VwZXJzY3JpcHQgfCBib2xkIGl0YWxpYyB1bmRlcmxpbmUgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBvdXRkZW50IGluZGVudCdcbiAgICAgICAgXSA6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHNldHVwOiAoZWRpdG9yOiBhbnkpID0+IHtcbiAgICAgICAgZWRpdG9yLm9uKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlZGl0b3IuZ2V0Q29udGVudCgpO1xuICAgICAgICAgIHRoaXMuZWRpdG9yQmx1cmVkLmVtaXQoY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlZGl0b3Iub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmVkaXRvckNvbnRlbnRDaGFuZ2VkLmVtaXQoZWRpdG9yLmdldENvbnRlbnQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRlbnQgJiYgdGhpcy5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0Q29udGVudCh0aGlzLmNvbnRlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0Q29udGVudCgnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=