import { ComponentFactoryResolver } from '@angular/core';
export declare class ToastService {
    factoryResolver: ComponentFactoryResolver;
    private toasts;
    private subject;
    private rootViewContainer;
    toastHovered: boolean;
    constructor(factoryResolver: ComponentFactoryResolver);
    setToastRootViewContainerRef(viewContainerRef: any): void;
    addToastDynamicComponent(): void;
    error(description: string, title?: string, config?: {
        timeOut?: number;
        removeOnClick?: boolean;
    }, callback?: () => void): void;
    info(description: string, title?: string, config?: {
        timeOut?: number;
        removeOnClick?: boolean;
    }, callback?: () => void): void;
    success(description: string, title?: string, config?: {
        timeOut?: number;
        removeOnClick?: boolean;
    }, callback?: () => void): void;
    warning(description: string, title?: string, config?: {
        timeOut?: number;
        removeOnClick?: boolean;
    }, callback?: () => void): void;
    private pushToast;
    removeToast(index: number): void;
    retrieveToast(): import("rxjs").Observable<any>;
}
