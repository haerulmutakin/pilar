import { Observable } from 'rxjs';
export declare enum LoadingBarEventType {
    PROGRESS = 0,
    HEIGHT = 1,
    COLOR = 2,
    VISIBLE = 3
}
export declare function isPresent(obj: any): boolean;
export declare class LoadingBarEvent {
    type: LoadingBarEventType;
    value: any;
    constructor(type: LoadingBarEventType, value: any);
}
export declare class LoadingBarService {
    private _progress;
    private _height;
    private _color;
    private _visible;
    private _intervalCounterId;
    interval: number;
    private eventSource;
    events: Observable<LoadingBarEvent>;
    constructor();
    progress: number;
    height: string;
    color: string;
    visible: boolean;
    private emitEvent;
    start(onCompleted?: Function): void;
    stop(): void;
    reset(): void;
    complete(onCompleted?: Function): void;
}
