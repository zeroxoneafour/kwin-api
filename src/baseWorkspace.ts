import { QPoint, QRect, QSize, Signal } from "./qt";

import { VirtualDesktop } from "./virtualdesktop";
import { Window } from "./window";
import { Output } from "./output";
import { TileManager } from "./tilemanager";
import { ClientAreaOption } from "./enums";
import { Tile } from "./tile";

export type Activity = string;

export interface BaseWorkspace {
    desktops: VirtualDesktop[];
    currentDesktop: VirtualDesktop;
    activeWindow: Window | null;
    desktopGridSize: QSize;
    workspaceSize: QSize;
    activeScreen: Output;
    screens: Output[];
    currentActivity: Activity;
    activities: Activity[];
    virtualScreenSize: QSize;
    virtualScreenGeometry: QRect;
    stackingOrder: Window[];
    cursorPos: QPoint;

    sendClientToScreen(client: Window, screen: Output): void;
    showOutline(): void;
    hideOutline(): void;
    screenAt(point: QPoint): Output;
    /// DEPRECATED - use rootTile() instead
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
    rootTile(output: Output, desktop: VirtualDesktop): Tile;

    windowAdded: Signal<(window: Window) => void>;
    windowRemoved: Signal<(window: Window) => void>;
    windowActivated: Signal<(window: Window) => void>;
    desktopsChanged: Signal<() => void>;
    desktopLayoutChanged: Signal<() => void>;
    screensChanged: Signal<() => void>;
    currentActivityChanged: Signal<(id: Activity) => void>;
    activitiesChanged: Signal<(id: Activity) => void>;
    activityAdded: Signal<(id: Activity) => void>;
    activityRemoved: Signal<(id: Activity) => void>;
    virtualScreenSizeChanged: Signal<() => void>;
    currentDesktopChanged: Signal<(previousDesktop: VirtualDesktop, currentDesktop: VirtualDesktop, output: Output) => void>;
    cursorPosChanged: Signal<() => void>;
}
