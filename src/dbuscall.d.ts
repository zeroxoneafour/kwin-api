import Signal from "./qml/signal";

export default interface DBusCall
{
    dbusInterface: string;
    service: string;
    path: string;
    method: string;
    arguments: object[];
    
    call(): void;
    
    finished: Signal<(returnValue: object[]) => void>;
    failed: Signal<() => void>;
}