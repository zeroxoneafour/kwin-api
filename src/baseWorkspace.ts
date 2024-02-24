import QPoint from "./qt/qpoint";
import QRect from "./qt/qrect";
import QSize from "./qt/qsize";
import Signal from "./qt/signal";

import VirtualDesktop from "./virtualdesktop";
import Window from "./window";
import Output from "./output";
import TileManager from "./tilemanager";
import {ClientAreaOption} from "./enums";

export default interface Workspace {
    desktops: VirtualDesktop[];
    currentDesktop: VirtualDesktop;
    activeWindow: Window | null;
    desktopGridSize: QSize;
    workspaceSize: QSize;
    activeScreen: Output;
    screens: Output[];
    currentActivity: string;
    activities: string[];
    virtualScreenSize: QSize;
    virtualScreenGeometry: QRect;
    stackingOrder: Window[];
    cursorPos: QPoint;

    sendClientToScreen(client: Window, screen: Output): void;
    showOutline(): void;
    hideOutline(): void;
    screenAt(point: QPoint): Output;
    tilingForScreen(screen: Output): TileManager;
    clientArea(options: ClientAreaOption, output: Output): QRect;
    clientArea(options: ClientAreaOption, client: Window): QRect;
    clientArea(options: ClientAreaOption, client: Window, output: Output): QRect;
    clientArea(options: ClientAreaOption, client: Window, point: QPoint): QRect;
    createDesktop(position: number, name: string): void;
    removeDestkop(position: number): void;
    supportInformation(): string;
    raiseWindow(window: Window): string;
    getClient(id: number): Window;
    windowAt(point: QPoint, count?: number): Window[];
    isEffectActive(id: string): boolean;

    windowAdded: Signal<(window: Window) => void>;
    windowRemoved: Signal<(window: Window) => void>;
    windowActivated: Signal<(window: Window) => void>;
    desktopsChanged: Signal<() => void>;
    desktopLayoutChanged: Signal<() => void>;
    screensChanged: Signal<() => void>;
    currentActivityChanged: Signal<(id: string) => void>;
    activitiesChanged: Signal<(id: string) => void>;
    activityAdded: Signal<(id: string) => void>;
    activityRemoved: Signal<(id: string) => void>;
    virtualScreenSizeChanged: Signal<() => void>;
    currentDesktopChanged: Signal<(previousDesktop: VirtualDesktop) => void>;
    cursorPosChanged: Signal<() => void>;
}
