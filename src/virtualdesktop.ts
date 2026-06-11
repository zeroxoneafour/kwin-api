import { Signal } from "./qt";

export interface VirtualDesktop {
    id: string;
    x11DesktopNumber: number;
    name: string;

    nameChanged: Signal<() => void>;
    x11DesktopNumberChanged: Signal<() => void>;
    aboutToBeDestroyed: Signal<() => void>;
}
