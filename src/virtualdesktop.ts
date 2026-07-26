import { Signal } from "./qt";

export interface VirtualDesktop {
    readonly id: string;
    readonly x11DesktopNumber: number;
    name: string;

    readonly nameChanged: Signal<() => void>;
    readonly x11DesktopNumberChanged: Signal<() => void>;
    readonly aboutToBeDestroyed: Signal<() => void>;
}
