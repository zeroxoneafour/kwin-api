import Signal from "./signal";

export default interface QTimer {
    interval: number;
    repeat: boolean;
    running: boolean;
    triggeredOnStart: boolean;

    restart(): void;

    start(): void;

    stop(): void;

    triggered: Signal<() => void>;
}