import { Renderer2, ElementRef, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
export declare class ToastDirective implements OnInit {
    private renderer;
    private hostElement;
    private toastSvc;
    timeOut: number;
    toastIndex: number;
    removeOnClick: boolean;
    mouseClickCounter: number;
    mouseOverCounter: number;
    _fadeInTimeOut: any;
    _fadeOutTimeout: any;
    _removeTimeout: any;
    start: any;
    remaining: any;
    constructor(renderer: Renderer2, hostElement: ElementRef, toastSvc: ToastService);
    ngOnInit(): void;
    createToastFadeOutBehaviour(remainingTimeOut: any): void;
    initToastInterval(): void;
    pauseToastInterval(): void;
    onClick(): void;
    onMouseHover(): void;
    onMouseLeave(): void;
}
