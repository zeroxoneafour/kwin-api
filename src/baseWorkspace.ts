import { QPoint, QRect, QSize, QUuid, Signal } from "./qt";

import { VirtualDesktop } from "./virtualdesktop";
import { Window } from "./window";
import { Output } from "./output";
import { TileManager } from "./tilemanager";
import { ClientAreaOption } from "./enums";
import { Tile } from "./tile";

export type Activity = string;

export interface BaseWorkspace {
    readonly desktops: VirtualDesktop[];
    readonly desktopGridSize: QSize;
    readonly workspaceSize: QSize;
    readonly activeScreen: Output;
    readonly screens: Output[];
    readonly activities: Activity[];
    readonly virtualScreenSize: QSize;
    readonly virtualScreenGeometry: QRect;
    readonly stackingOrder: Window[];
    readonly cursorPos: QPoint;

    currentDesktop: VirtualDesktop;
    activeWindow: Window | null;
    currentActivity: Activity;

    sendClientToScreen(client: Window, screen: Output): void;
    showOutline(rect: QRect): void;
    hideOutline(): void;
    screenAt(point: QPoint): Output;
    /**
     * @deprecated Use rootTile() instead
     */
    tilingForScreen(screen: Output): TileManager;
    clientArea(options: ClientAreaOption, output: Output, desktop: VirtualDesktop): QRect;
    clientArea(options: ClientAreaOption, client: Window): QRect;
    createDesktop(position: number, name: string): void;
    removeDestkop(position: number): void;
    supportInformation(): string;
    raiseWindow(window: Window): string;
    getClient(id: QUuid): Window;
    windowAt(point: QPoint, count?: number): Window[];
    isEffectActive(id: string): boolean;
    rootTile(output: Output, desktop: VirtualDesktop): Tile;

    readonly windowAdded: Signal<(window: Window) => void>;
    readonly windowRemoved: Signal<(window: Window) => void>;
    readonly windowActivated: Signal<(window: Window) => void>;
    readonly desktopsChanged: Signal<() => void>;
    readonly desktopLayoutChanged: Signal<() => void>;
    readonly screensChanged: Signal<() => void>;
    readonly currentActivityChanged: Signal<(id: Activity) => void>;
    readonly activitiesChanged: Signal<(id: Activity) => void>;
    readonly activityAdded: Signal<(id: Activity) => void>;
    readonly activityRemoved: Signal<(id: Activity) => void>;
    readonly virtualScreenSizeChanged: Signal<() => void>;
    readonly currentDesktopChanged: Signal<(previousDesktop: VirtualDesktop, currentDesktop: VirtualDesktop, output: Output) => void>;
    readonly cursorPosChanged: Signal<() => void>;
}
