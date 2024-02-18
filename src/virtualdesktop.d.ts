import Signal from "./qt/signal";

export default interface VirtualDesktop {
    id: string;
    x11DesktopNumber: number;
    name: string;

    nameChanged: Signal<() => void>;
    x11DesktopNumberChanged: Signal<() => void>;
    aboutToBeDestroyed: Signal<() => void>;
}
