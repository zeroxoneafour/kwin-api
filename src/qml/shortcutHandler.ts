import { QObject, Signal } from "../qt";

export interface ShortcutHandler extends QObject {
    name: string;
    text: string;
    sequence: string;
    
    activated: Signal<() => void>;
}