/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { style, animate, transition, state } from '@angular/animations';
/**
 * @return {?}
 */
export function fadeIn() {
    return [
        state('in', style({ opacity: 1 })),
        transition(':enter', [
            style({ opacity: 0 }),
            animate(400)
        ])
    ];
}
/**
 * @return {?}
 */
export function fadeOut() {
    return [
        state('out', style({ opacity: 0 })),
        transition(':leave', [
            style({ opacity: 1 }),
            animate(400)
        ])
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxLQUFLLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFDVixLQUFLLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUU3QixNQUFNLFVBQVUsTUFBTTtJQUNwQixPQUFPO1FBQ0wsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDO1NBQ2YsQ0FBQztLQUNILENBQUM7QUFDSixDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLE9BQU87SUFDckIsT0FBTztRQUNMLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNqQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQztTQUNmLENBQUM7S0FDSCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgc3R5bGUsXG4gICAgYW5pbWF0ZSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIHN0YXRlXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmFkZUluKCkge1xuICByZXR1cm4gW1xuICAgIHN0YXRlKCdpbicsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSksXG4gICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXG4gICAgICAgIGFuaW1hdGUoNDAwKVxuICAgIF0pXG4gIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmYWRlT3V0KCkge1xuICByZXR1cm4gW1xuICAgIHN0YXRlKCdvdXQnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpLFxuICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxIH0pLFxuICAgICAgICBhbmltYXRlKDQwMClcbiAgICBdKVxuICBdO1xufVxuIl19