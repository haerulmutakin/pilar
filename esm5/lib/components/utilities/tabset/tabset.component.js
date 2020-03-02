/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/utilities/tabset/tabset.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent() {
        this.tabMobileAttr = 'both';
        this.tabs = [];
    }
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.addTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs.push(tab);
        this.tabs[0].active = true;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.onTabClick = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs.forEach((/**
         * @param {?} tabItem
         * @return {?}
         */
        function (tabItem) {
            if (tabItem === tab) {
                tabItem.active = true;
                tabItem.selectedTab = tab;
            }
            else {
                tabItem.active = false;
            }
        }));
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.getLeft = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = this.tabs.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.active === true; }));
        return index * (100 / this.tabs.length);
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.borderWidth = /**
     * @return {?}
     */
    function () {
        return (100 / this.tabs.length);
    };
    /**
     * @param {?} tabIndex
     * @return {?}
     */
    TabsetComponent.prototype.selectTab = /**
     * @param {?} tabIndex
     * @return {?}
     */
    function (tabIndex) {
        this.tabs.forEach((/**
         * @param {?} tabItem
         * @param {?} index
         * @return {?}
         */
        function (tabItem, index) {
            if (index === tabIndex) {
                tabItem.active = true;
                tabItem.selectedTab = tabItem;
            }
            else {
                tabItem.active = false;
            }
        }));
    };
    TabsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uii-tabset',
                    template: "<ul class=\"ugw-tab-container\">\n  <li *ngFor=\"let tabItem of tabs; let i = index\"\n    [style.width.%]=\"(100 / tabs.length)\"\n    [class.tab-active]=\"tabItem.active\"\n    (click)=\"onTabClick(tabItem)\">\n    <a href=\"javascript:void(0);\">\n      <span class=\"tab-title-container\">\n        <span \n          *ngIf=\"tabItem.tabIcon\"\n          class=\"tab-icon\"\n          [ngClass]=\"tabItem.tabIcon ? tabItem.tabIcon : ''\"\n          [class.hide-tab-icon]=\"tabMobileAttr === 'title'\">\n        </span>\n        <span\n          class=\"tab-title\"\n          [class.hide-tab-title]=\"tabMobileAttr === 'icon'\">\n          {{tabItem.title}}</span>\n      </span>\n    </a>\n    <div class=\"tab-border\" [style.width.%]=\"borderWidth()\" [style.left.%]=\"getLeft()\" ></div>\n  </li>\n</ul>\n<div class=\"tab-item-content\">\n  <ng-content></ng-content>\n</div>",
                    styles: ["::-webkit-scrollbar{display:none}@media screen and (max-width:700px){.ugw-tab-container{-webkit-overflow-scrolling:touch;white-space:nowrap;overflow-y:scroll;list-style:none}.ugw-tab-container li{position:relative;display:inline-block;min-width:33%}.ugw-tab-container li span.tab-title-container{overflow:visible;vertical-align:middle}.ugw-tab-container li .hide-tab-icon,.ugw-tab-container li .hide-tab-title{display:none}.ugw-tab-container li.tab-active::after{content:'';position:absolute;left:0;bottom:0;height:4px;width:100%;background:#093697}.ugw-tab-container .tab-border{display:none}}.ugw-tab-container{position:relative;width:100%;display:flex;justify-content:space-between;padding:0;margin:0;border-bottom:1px solid #fbc02d;list-style:none}.ugw-tab-container li{margin:0;cursor:pointer;text-align:center;height:45px;font-weight:700;color:#093697;padding:0 4px}.ugw-tab-container li a{display:flex;align-items:center;justify-content:space-around;width:100%;height:100%}.ugw-tab-container li span.tab-icon{margin-right:2px}.ugw-tab-container li span.tab-title-container{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle}.ugw-tab-container .tab-border{position:absolute;bottom:0;height:4px;transition:left .3s;background:#093697}.tab-item-content{width:100%}.tab-item-content ::ng-deep .tab-active{display:block!important}.tab-item-content ::ng-deep .tab-pane{display:none}"]
                }] }
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return []; };
    TabsetComponent.propDecorators = {
        tabMobileAttr: [{ type: Input }]
    };
    return TabsetComponent;
}());
export { TabsetComponent };
if (false) {
    /** @type {?} */
    TabsetComponent.prototype.tabMobileAttr;
    /** @type {?} */
    TabsetComponent.prototype.tabs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpbGFyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXRpbGl0aWVzL3RhYnNldC90YWJzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekQ7SUFVRTtRQUhTLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLFNBQUksR0FBc0IsRUFBRSxDQUFDO0lBRWIsQ0FBQzs7OztJQUVqQixrQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7OztJQUVOLGdDQUFNOzs7O0lBQWIsVUFBYyxHQUFvQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxvQ0FBVTs7OztJQUFWLFVBQVcsR0FBb0I7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxPQUF3QjtZQUN6QyxJQUFJLE9BQU8sS0FBSyxHQUFHLEVBQUU7Z0JBQ25CLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixPQUFPLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGlDQUFPOzs7SUFBUDs7WUFDUSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBcEIsQ0FBb0IsRUFBQztRQUMvRCxPQUFPLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxtQ0FBUzs7OztJQUFULFVBQVUsUUFBZ0I7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7OztRQUFDLFVBQUMsT0FBd0IsRUFBRSxLQUFhO1lBQ3hELElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDdEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO2FBQy9CO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0Qiw2M0JBQXNDOztpQkFFdkM7Ozs7O2dDQUdFLEtBQUs7O0lBMkNSLHNCQUFDO0NBQUEsQUFsREQsSUFrREM7U0E3Q1ksZUFBZTs7O0lBRTFCLHdDQUFnQzs7SUFDaEMsK0JBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJzZXREaXJlY3RpdmUgfSBmcm9tICcuLy4uLy4uLy4uL2RpcmVjdGl2ZXMvdGFic2V0LXRhYi90YWJzZXQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWlpLXRhYnNldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJzZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRhYk1vYmlsZUF0dHIgPSAnYm90aCc7XG4gIHRhYnM6IFRhYnNldERpcmVjdGl2ZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgcHVibGljIGFkZFRhYih0YWI6IFRhYnNldERpcmVjdGl2ZSk6IHZvaWQge1xuICAgIHRoaXMudGFicy5wdXNoKHRhYik7XG4gICAgdGhpcy50YWJzWzBdLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBvblRhYkNsaWNrKHRhYjogVGFic2V0RGlyZWN0aXZlKSB7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYkl0ZW06IFRhYnNldERpcmVjdGl2ZSkgPT4ge1xuICAgICAgaWYgKHRhYkl0ZW0gPT09IHRhYikge1xuICAgICAgICB0YWJJdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRhYkl0ZW0uc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJJdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudGFicy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmFjdGl2ZSA9PT0gdHJ1ZSk7XG4gICAgcmV0dXJuIGluZGV4ICogKDEwMCAvIHRoaXMudGFicy5sZW5ndGgpO1xuICB9XG5cbiAgYm9yZGVyV2lkdGgoKSB7XG4gICAgcmV0dXJuICgxMDAgLyB0aGlzLnRhYnMubGVuZ3RoKTtcbiAgfVxuXG4gIHNlbGVjdFRhYih0YWJJbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYkl0ZW06IFRhYnNldERpcmVjdGl2ZSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSB0YWJJbmRleCkge1xuICAgICAgICB0YWJJdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRhYkl0ZW0uc2VsZWN0ZWRUYWIgPSB0YWJJdGVtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiSXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=