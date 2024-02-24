import Signal from "./signal";
import QObject from "./qobject";

export default interface QTimer extends QObject {
    interval: number;
    repeat: boolean;
    running: boolean;
    triggeredOnStart: boolean;

    restart(): void;

    start(): void;

    stop(): void;

    triggered: Signal<() => void>;
}