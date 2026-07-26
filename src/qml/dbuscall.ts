import { QObject, Signal } from "../qt";

export interface DBusCall extends QObject {
    dbusInterface: string;
    service: string;
    path: string;
    method: string;
    arguments: any[];

    call(): void;

    readonly finished: Signal<(returnValue: any[]) => void>;
    readonly failed: Signal<() => void>;
}