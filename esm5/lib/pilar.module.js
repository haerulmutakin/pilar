/**
 * @fileoverview added by tsickle
 * Generated from: lib/pilar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContextMenuModule } from 'ngx-contextmenu';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { AlertModule, ModalModule, AccordionModule, TabsModule, TooltipModule, CollapseModule, BsDatepickerModule, TimepickerModule, BsDropdownModule, PaginationModule, ProgressbarModule, TypeaheadModule } from 'ngx-bootstrap';
import { NgxSelectModule } from 'ngx-select-ex';
import { dictionary } from './providers/translations';
import { TRANSLATIONS } from './providers/translations';
/* library components */
import { PilarComponent } from './pilar.component';
import { AccordionComponent } from './components/utilities/accordion/accordion.component';
import { AccordionGroupComponent } from './components/utilities/accordion/accordion-group/accordion-group.component';
import { ClientTableComponent } from './components/data/table/client-table/client-table.component';
import { ConfirmdialogComponent } from './components/dialog/confirm-dialog/confirm-dialog.component';
import { FileUploadComponent } from './components/form/file-upload/file-upload.component';
import { InfoBoxComponent } from './components/utilities/info-box/info-box.component';
import { MobileFilterComponent } from './components/data/table/common/mobile-filter/mobile-filter.component';
import { ModalDialogComponent } from './components/dialog/modal-dialog/modal-dialog.component';
import { PaginationComponent } from './components/utilities/pagination/pagination.component';
import { ServerTableComponent } from './components/data/table/server-table/server-table.component';
import { SwitchComponent } from './components/utilities/switch/switch.component';
import { TableComponent } from './components/data/table/table.component';
import { TableActionComponent } from './components/data/table/common/table-action/table-action.component';
import { TableFilterComponent } from './components/data/table/common/table-filter/table-filter.component';
import { TableFooterComponent } from './components/data/table/common/table-footer/table-footer.component';
import { TableSkeletonComponent } from './components/skeletons/table-skeleton/table-skeleton.component';
import { TabsetComponent } from './components/utilities/tabset/tabset.component';
import { TextEditorComponent } from './components/form/text-editor/text-editor.component';
import { UiiImageUploadComponent } from './components/form/image-upload/image-upload.component';
import { UiiDataGridComponent } from './components/data/data-grid/data-grid.component';
import { WizardComponent } from './components/utilities/wizard/wizard.component';
import { WizardStepComponent } from './components/utilities/wizard/wizard-step.component';
import { PhotoUploadComponent } from './components/form/photo-upload/photo-upload.component';
import { ToastComponent } from './components/utilities/toast/toast.component';
import { InformationComponent } from './components/utilities/information/information.component';
/* library pipes */
import { TranslatePipe } from './pipes/translate.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
/* library services */
import { ConfigService } from './services/config.service';
import { ImageService } from './services/image.service';
import { LoadingBarService } from './services/loadingBar.service';
import { TranslateService } from './services/translate.service';
import { TablePageService } from './services/table-page.service';
import { ToastService } from './services/toast.service';
/* library directives */
import { TabsetDirective } from './directives/tabset-tab/tabset.directive';
import { ToastDirective } from './directives/toast/toast.directive';
import { CollapseDirective } from './directives/collapse/collapse.directive';
/* tinymce */
import { EditorModule } from '@tinymce/tinymce-angular';
var PilarModule = /** @class */ (function () {
    function PilarModule() {
    }
    /**
     * @return {?}
     */
    PilarModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PilarModule,
            providers: [
                { provide: TRANSLATIONS, useValue: dictionary },
                DatePipe,
                ImageService,
                LoadingBarService,
                TranslateService,
                TablePageService,
                ConfigService,
                ToastService
            ]
        };
    };
    PilarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        /* components */
                        PilarComponent,
                        AccordionComponent,
                        AccordionGroupComponent,
                        ClientTableComponent,
                        ConfirmdialogComponent,
                        FileUploadComponent,
                        InfoBoxComponent,
                        MobileFilterComponent,
                        ModalDialogComponent,
                        PaginationComponent,
                        ServerTableComponent,
                        PhotoUploadComponent,
                        SwitchComponent,
                        TableComponent,
                        TableActionComponent,
                        TableFilterComponent,
                        TableFooterComponent,
                        TableSkeletonComponent,
                        TabsetComponent,
                        TextEditorComponent,
                        UiiDataGridComponent,
                        UiiImageUploadComponent,
                        WizardComponent,
                        WizardStepComponent,
                        ToastComponent,
                        InformationComponent,
                        /* pipes */
                        FileSizePipe,
                        TranslatePipe,
                        /* directives */
                        TabsetDirective,
                        SwitchComponent,
                        ToastDirective,
                        CollapseDirective
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        HttpClientModule,
                        LazyLoadImagesModule,
                        NgxSelectModule,
                        ReactiveFormsModule,
                        RouterModule,
                        AccordionModule.forRoot(),
                        AlertModule.forRoot(),
                        BsDatepickerModule.forRoot(),
                        BsDropdownModule.forRoot(),
                        CollapseModule.forRoot(),
                        ContextMenuModule.forRoot(),
                        ModalModule.forRoot(),
                        ProgressbarModule.forRoot(),
                        TabsModule.forRoot(),
                        PaginationModule.forRoot(),
                        TimepickerModule.forRoot(),
                        TooltipModule.forRoot(),
                        TypeaheadModule.forRoot(),
                        EditorModule
                    ],
                    exports: [
                        /* components */
                        PilarComponent,
                        AccordionComponent,
                        AccordionGroupComponent,
                        ClientTableComponent,
                        ConfirmdialogComponent,
                        ContextMenuModule,
                        FileUploadComponent,
                        InfoBoxComponent,
                        MobileFilterComponent,
                        LazyLoadImagesModule,
                        ModalDialogComponent,
                        PaginationComponent,
                        PhotoUploadComponent,
                        ServerTableComponent,
                        SwitchComponent,
                        TableComponent,
                        TableActionComponent,
                        TableFilterComponent,
                        TableFooterComponent,
                        TableSkeletonComponent,
                        TabsetComponent,
                        TextEditorComponent,
                        UiiDataGridComponent,
                        UiiImageUploadComponent,
                        WizardComponent,
                        WizardStepComponent,
                        ToastComponent,
                        InformationComponent,
                        FileSizePipe,
                        TranslatePipe,
                        /* directives */
                        TabsetDirective,
                        ToastDirective,
                        CollapseDirective,
                        AccordionModule,
                        AlertModule,
                        BsDatepickerModule,
                        BsDropdownModule,
                        CollapseModule,
                        CommonModule,
                        FormsModule,
                        ModalModule,
                        NgxSelectModule,
                        ProgressbarModule,
                        ReactiveFormsModule,
                        TabsModule,
                        PaginationModule,
                        TimepickerModule,
                        TooltipModule,
                        TypeaheadModule,
                    ],
                    entryComponents: [
                        ConfirmdialogComponent,
                        ToastComponent
                    ],
                },] }
    ];
    return PilarModule;
}());
export { PilarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlsYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGlsYXIvIiwic291cmNlcyI6WyJsaWIvcGlsYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFDTCxXQUFXLEVBQ1gsV0FBVyxFQUNYLGVBQWUsRUFDZixVQUFVLEVBQ1YsYUFBYSxFQUNiLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUd4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDMUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDckgsT0FBTyxFQUFFLG9C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J0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVNb2R1bGUgfSBmcm9tICduZ3gtY29udGV4dG1lbnUnO1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZXNNb2R1bGUgfSBmcm9tICduZ3gtbGF6eS1sb2FkLWltYWdlcyc7XG5pbXBvcnQge1xuICBBbGVydE1vZHVsZSxcbiAgTW9kYWxNb2R1bGUsXG4gIEFjY29yZGlvbk1vZHVsZSxcbiAgVGFic01vZHVsZSxcbiAgVG9vbHRpcE1vZHVsZSxcbiAgQ29sbGFwc2VNb2R1bGUsXG4gIEJzRGF0ZXBpY2tlck1vZHVsZSxcbiAgVGltZXBpY2tlck1vZHVsZSxcbiAgQnNEcm9wZG93bk1vZHVsZSxcbiAgUGFnaW5hdGlvbk1vZHVsZSxcbiAgUHJvZ3Jlc3NiYXJNb2R1bGUsXG4gIFR5cGVhaGVhZE1vZHVsZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwJztcbmltcG9ydCB7IE5neFNlbGVjdE1vZHVsZSB9IGZyb20gJ25neC1zZWxlY3QtZXgnO1xuaW1wb3J0IHsgZGljdGlvbmFyeSB9IGZyb20gJy4vcHJvdmlkZXJzL3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBUUkFOU0xBVElPTlMgfSBmcm9tICcuL3Byb3ZpZGVycy90cmFuc2xhdGlvbnMnO1xuXG4vKiBsaWJyYXJ5IGNvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBpbGFyQ29tcG9uZW50IH0gZnJvbSAnLi9waWxhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3V0aWxpdGllcy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY2NvcmRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91dGlsaXRpZXMvYWNjb3JkaW9uL2FjY29yZGlvbi1ncm91cC9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IENsaWVudFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEvdGFibGUvY2xpZW50LXRhYmxlL2NsaWVudC10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlybWRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2cvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbGVVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5mb0JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91dGlsaXRpZXMvaW5mby1ib3gvaW5mby1ib3guY29tcG9uZW50JztcbmltcG9ydCB7IE1vYmlsZUZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhL3RhYmxlL2NvbW1vbi9tb2JpbGUtZmlsdGVyL21vYmlsZS1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy9tb2RhbC1kaWFsb2cvbW9kYWwtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3V0aWxpdGllcy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFNlcnZlclRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGEvdGFibGUvc2VydmVyLXRhYmxlL3NlcnZlci10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpdGNoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3V0aWxpdGllcy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUFjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhL3RhYmxlL2NvbW1vbi90YWJsZS1hY3Rpb24vdGFibGUtYWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhL3RhYmxlL2NvbW1vbi90YWJsZS1maWx0ZXIvdGFibGUtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhL3RhYmxlL2NvbW1vbi90YWJsZS1mb290ZXIvdGFibGUtZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZVNrZWxldG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NrZWxldG9ucy90YWJsZS1za2VsZXRvbi90YWJsZS1za2VsZXRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFic2V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3V0aWxpdGllcy90YWJzZXQvdGFic2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vdGV4dC1lZGl0b3IvdGV4dC1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFVpaUltYWdlVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vaW1hZ2UtdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVWlpRGF0YUdyaWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS9kYXRhLWdyaWQvZGF0YS1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaXphcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXRpbGl0aWVzL3dpemFyZC93aXphcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFdpemFyZFN0ZXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXRpbGl0aWVzL3dpemFyZC93aXphcmQtc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvdG9VcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS9waG90by11cGxvYWQvcGhvdG8tdXBsb2FkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91dGlsaXRpZXMvdG9hc3QvdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEluZm9ybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3V0aWxpdGllcy9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi5jb21wb25lbnQnO1xuXG4vKiBsaWJyYXJ5IHBpcGVzICovXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy90cmFuc2xhdGUucGlwZSc7XG5pbXBvcnQgeyBGaWxlU2l6ZVBpcGUgfSBmcm9tICcuL3BpcGVzL2ZpbGUtc2l6ZS5waXBlJztcblxuLyogbGlicmFyeSBzZXJ2aWNlcyAqL1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvYWRpbmdCYXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2FkaW5nQmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFibGVQYWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdGFibGUtcGFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdG9hc3Quc2VydmljZSc7XG5cbi8qIGxpYnJhcnkgZGlyZWN0aXZlcyAqL1xuaW1wb3J0IHsgVGFic2V0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RhYnNldC10YWIvdGFic2V0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUb2FzdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90b2FzdC90b2FzdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sbGFwc2VEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29sbGFwc2UvY29sbGFwc2UuZGlyZWN0aXZlJztcblxuLyogdGlueW1jZSAqL1xuaW1wb3J0IHsgRWRpdG9yTW9kdWxlIH0gZnJvbSAnQHRpbnltY2UvdGlueW1jZS1hbmd1bGFyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLyogY29tcG9uZW50cyAqL1xuICAgIFBpbGFyQ29tcG9uZW50LFxuICAgIEFjY29yZGlvbkNvbXBvbmVudCxcbiAgICBBY2NvcmRpb25Hcm91cENvbXBvbmVudCxcbiAgICBDbGllbnRUYWJsZUNvbXBvbmVudCxcbiAgICBDb25maXJtZGlhbG9nQ29tcG9uZW50LFxuICAgIEZpbGVVcGxvYWRDb21wb25lbnQsXG4gICAgSW5mb0JveENvbXBvbmVudCxcbiAgICBNb2JpbGVGaWx0ZXJDb21wb25lbnQsXG4gICAgTW9kYWxEaWFsb2dDb21wb25lbnQsXG4gICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICBTZXJ2ZXJUYWJsZUNvbXBvbmVudCxcbiAgICBQaG90b1VwbG9hZENvbXBvbmVudCxcbiAgICBTd2l0Y2hDb21wb25lbnQsXG4gICAgVGFibGVDb21wb25lbnQsXG4gICAgVGFibGVBY3Rpb25Db21wb25lbnQsXG4gICAgVGFibGVGaWx0ZXJDb21wb25lbnQsXG4gICAgVGFibGVGb290ZXJDb21wb25lbnQsXG4gICAgVGFibGVTa2VsZXRvbkNvbXBvbmVudCxcbiAgICBUYWJzZXRDb21wb25lbnQsXG4gICAgVGV4dEVkaXRvckNvbXBvbmVudCxcbiAgICBVaWlEYXRhR3JpZENvbXBvbmVudCxcbiAgICBVaWlJbWFnZVVwbG9hZENvbXBvbmVudCxcbiAgICBXaXphcmRDb21wb25lbnQsXG4gICAgV2l6YXJkU3RlcENvbXBvbmVudCxcbiAgICBUb2FzdENvbXBvbmVudCxcbiAgICBJbmZvcm1hdGlvbkNvbXBvbmVudCxcbiAgICAvKiBwaXBlcyAqL1xuICAgIEZpbGVTaXplUGlwZSxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgICAvKiBkaXJlY3RpdmVzICovXG4gICAgVGFic2V0RGlyZWN0aXZlLFxuICAgIFN3aXRjaENvbXBvbmVudCxcbiAgICBUb2FzdERpcmVjdGl2ZSxcbiAgICBDb2xsYXBzZURpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTGF6eUxvYWRJbWFnZXNNb2R1bGUsXG4gICAgTmd4U2VsZWN0TW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEFjY29yZGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgQWxlcnRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEJzRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgQnNEcm9wZG93bk1vZHVsZS5mb3JSb290KCksXG4gICAgQ29sbGFwc2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvbnRleHRNZW51TW9kdWxlLmZvclJvb3QoKSxcbiAgICBNb2RhbE1vZHVsZS5mb3JSb290KCksXG4gICAgUHJvZ3Jlc3NiYXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRhYnNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBhZ2luYXRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRpbWVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRvb2x0aXBNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFR5cGVhaGVhZE1vZHVsZS5mb3JSb290KCksXG4gICAgRWRpdG9yTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAvKiBjb21wb25lbnRzICovXG4gICAgUGlsYXJDb21wb25lbnQsXG4gICAgQWNjb3JkaW9uQ29tcG9uZW50LFxuICAgIEFjY29yZGlvbkdyb3VwQ29tcG9uZW50LFxuICAgIENsaWVudFRhYmxlQ29tcG9uZW50LFxuICAgIENvbmZpcm1kaWFsb2dDb21wb25lbnQsXG4gICAgQ29udGV4dE1lbnVNb2R1bGUsXG4gICAgRmlsZVVwbG9hZENvbXBvbmVudCxcbiAgICBJbmZvQm94Q29tcG9uZW50LFxuICAgIE1vYmlsZUZpbHRlckNvbXBvbmVudCxcbiAgICBMYXp5TG9hZEltYWdlc01vZHVsZSxcbiAgICBNb2RhbERpYWxvZ0NvbXBvbmVudCxcbiAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgIFBob3RvVXBsb2FkQ29tcG9uZW50LFxuICAgIFNlcnZlclRhYmxlQ29tcG9uZW50LFxuICAgIFN3aXRjaENvbXBvbmVudCxcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBUYWJsZUFjdGlvbkNvbXBvbmVudCxcbiAgICBUYWJsZUZpbHRlckNvbXBvbmVudCxcbiAgICBUYWJsZUZvb3RlckNvbXBvbmVudCxcbiAgICBUYWJsZVNrZWxldG9uQ29tcG9uZW50LFxuICAgIFRhYnNldENvbXBvbmVudCxcbiAgICBUZXh0RWRpdG9yQ29tcG9uZW50LFxuICAgIFVpaURhdGFHcmlkQ29tcG9uZW50LFxuICAgIFVpaUltYWdlVXBsb2FkQ29tcG9uZW50LFxuICAgIFdpemFyZENvbXBvbmVudCxcbiAgICBXaXphcmRTdGVwQ29tcG9uZW50LFxuICAgIFRvYXN0Q29tcG9uZW50LFxuICAgIEluZm9ybWF0aW9uQ29tcG9uZW50LFxuICAgIEZpbGVTaXplUGlwZSxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgIC8qIGRpcmVjdGl2ZXMgKi9cbiAgICBUYWJzZXREaXJlY3RpdmUsXG4gICAgVG9hc3REaXJlY3RpdmUsXG4gICAgQ29sbGFwc2VEaXJlY3RpdmUsXG4gICAgQWNjb3JkaW9uTW9kdWxlLFxuICAgIEFsZXJ0TW9kdWxlLFxuICAgIEJzRGF0ZXBpY2tlck1vZHVsZSxcbiAgICBCc0Ryb3Bkb3duTW9kdWxlLFxuICAgIENvbGxhcHNlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNb2RhbE1vZHVsZSxcbiAgICBOZ3hTZWxlY3RNb2R1bGUsXG4gICAgUHJvZ3Jlc3NiYXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBUYWJzTW9kdWxlLFxuICAgIFBhZ2luYXRpb25Nb2R1bGUsXG4gICAgVGltZXBpY2tlck1vZHVsZSxcbiAgICBUb29sdGlwTW9kdWxlLFxuICAgIFR5cGVhaGVhZE1vZHVsZSxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgQ29uZmlybWRpYWxvZ0NvbXBvbmVudCxcbiAgICBUb2FzdENvbXBvbmVudFxuICBdLFxufSlcblxuZXhwb3J0IGNsYXNzIFBpbGFyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBQaWxhck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFRSQU5TTEFUSU9OUywgdXNlVmFsdWU6IGRpY3Rpb25hcnkgfSxcbiAgICAgICAgRGF0ZVBpcGUsXG4gICAgICAgIEltYWdlU2VydmljZSxcbiAgICAgICAgTG9hZGluZ0JhclNlcnZpY2UsXG4gICAgICAgIFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgIFRhYmxlUGFnZVNlcnZpY2UsXG4gICAgICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgICAgIFRvYXN0U2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==