import { Signal } from "../qt";

export interface ShortcutHandler {
    name: string;
    text: string;
    sequence: string;
    
    activated: Signal<() => void>;
}