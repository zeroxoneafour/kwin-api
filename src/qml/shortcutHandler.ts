import Signal from "../qt/signal";

export default interface ShortcutHandler {
    name: string;
    text: string;
    sequence: string;
    
    activated: Signal<() => void>;
}