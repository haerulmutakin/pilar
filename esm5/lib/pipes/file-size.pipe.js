/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/file-size.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var FileSizePipe = /** @class */ (function () {
    function FileSizePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    FileSizePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        try {
            if (args) {
                /** @type {?} */
                var size = void 0;
                switch (args) {
                    case 'KB':
                        if (value >= 1024) {
                            size = (value / 1024) + 'KB';
                        }
                        else {
                            size = value + 'B';
                        }
                        break;
                    case 'MB':
                        if (value >= (1024 * 1024)) {
                            size = (value / (1024 * 1024)) + 'MB';
                        }
                        else {
                            size = value + 'B';
                        }
                        break;
                    default:
                        break;
                }
                return size;
            }
            return value;
        }
        catch (error) {
            console.log(error);
            return value;
        }
    };
    FileSizePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fileSize'
                },] }
    ];
    return FileSizePipe;
}());
export { FileSizePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waWxhci8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9maWxlLXNpemUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUF3Q0EsQ0FBQzs7Ozs7O0lBbkNDLGdDQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLElBQVU7UUFDOUIsSUFBSTtZQUNGLElBQUksSUFBSSxFQUFFOztvQkFDSixJQUFJLFNBQVE7Z0JBQ2hCLFFBQVEsSUFBSSxFQUFFO29CQUNaLEtBQUssSUFBSTt3QkFDUCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7NEJBQ2pCLElBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7eUJBQzlCOzZCQUFNOzRCQUNMLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO3lCQUNwQjt3QkFDRCxNQUFNO29CQUVSLEtBQUssSUFBSTt3QkFDUCxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTs0QkFDMUIsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO3lCQUN2Qzs2QkFBTTs0QkFDTCxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQzt5QkFDcEI7d0JBQ0QsTUFBTTtvQkFFUjt3QkFDRSxNQUFNO2lCQUNUO2dCQUVELE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOztnQkF0Q0YsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxVQUFVO2lCQUNqQjs7SUFzQ0QsbUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXJDWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdmaWxlU2l6ZSdcbn0pXG5leHBvcnQgY2xhc3MgRmlsZVNpemVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoYXJncykge1xuICAgICAgICBsZXQgc2l6ZTogc3RyaW5nO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MpIHtcbiAgICAgICAgICBjYXNlICdLQic6XG4gICAgICAgICAgICBpZiAodmFsdWUgPj0gMTAyNCkge1xuICAgICAgICAgICAgICBzaXplID0gKHZhbHVlIC8gMTAyNCkgKyAnS0InO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2l6ZSA9IHZhbHVlICsgJ0InO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdNQic6XG4gICAgICAgICAgICBpZiAodmFsdWUgPj0gKDEwMjQgKiAxMDI0KSkge1xuICAgICAgICAgICAgICBzaXplID0gKHZhbHVlIC8gKDEwMjQgKiAxMDI0KSkgKyAnTUInO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2l6ZSA9IHZhbHVlICsgJ0InO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==