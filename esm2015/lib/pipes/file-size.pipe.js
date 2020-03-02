/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/file-size.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FileSizePipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        try {
            if (args) {
                /** @type {?} */
                let size;
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
    }
}
FileSizePipe.decorators = [
    { type: Pipe, args: [{
                name: 'fileSize'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9waWxhci8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9maWxlLXNpemUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxZQUFZOzs7Ozs7SUFFdkIsU0FBUyxDQUFDLEtBQVUsRUFBRSxJQUFVO1FBQzlCLElBQUk7WUFDRixJQUFJLElBQUksRUFBRTs7b0JBQ0osSUFBWTtnQkFDaEIsUUFBUSxJQUFJLEVBQUU7b0JBQ1osS0FBSyxJQUFJO3dCQUNQLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTs0QkFDakIsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzt5QkFDOUI7NkJBQU07NEJBQ0wsSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7eUJBQ3BCO3dCQUNELE1BQU07b0JBRVIsS0FBSyxJQUFJO3dCQUNQLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFOzRCQUMxQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7eUJBQ3ZDOzZCQUFNOzRCQUNMLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO3lCQUNwQjt3QkFDRCxNQUFNO29CQUVSO3dCQUNFLE1BQU07aUJBQ1Q7Z0JBRUQsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7OztZQXRDRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFVBQVU7YUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2ZpbGVTaXplJ1xufSlcbmV4cG9ydCBjbGFzcyBGaWxlU2l6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgIGxldCBzaXplOiBzdHJpbmc7XG4gICAgICAgIHN3aXRjaCAoYXJncykge1xuICAgICAgICAgIGNhc2UgJ0tCJzpcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+PSAxMDI0KSB7XG4gICAgICAgICAgICAgIHNpemUgPSAodmFsdWUgLyAxMDI0KSArICdLQic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaXplID0gdmFsdWUgKyAnQic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ01CJzpcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+PSAoMTAyNCAqIDEwMjQpKSB7XG4gICAgICAgICAgICAgIHNpemUgPSAodmFsdWUgLyAoMTAyNCAqIDEwMjQpKSArICdNQic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaXplID0gdmFsdWUgKyAnQic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzaXplO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxufVxuIl19