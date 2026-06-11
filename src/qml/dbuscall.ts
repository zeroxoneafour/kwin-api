import { Signal } from "../qt";

export interface DBusCall {
    dbusInterface: string;
    service: string;
    path: string;
    method: string;
    arguments: any[];

    call(): void;

    finished: Signal<(returnValue: any[]) => void>;
    failed: Signal<() => void>;
}