import { QPoint, QRect, Signal } from "./qt";

import { Window } from "./window";
import { LayoutDirection, Edge } from "./enums";

export interface Tile {
    relativeGeometry: QRect;
    absoluteGeometry: QRect;
    absoluteGeometryInScreen: QRect;
    padding: number;
    positionInLayout: number;
    parent: Tile | null;
    tiles: Tile[];
    windows: Window[];
    isLayout: boolean;
    canBeRemoved: boolean;
    layoutDirection: LayoutDirection;

    resizeByPixels(delta: number, edge: Edge): void;
    moveByPixels(delta: number): void;
    remove(): void;
    split(direction: LayoutDirection): void;
    manage(window: Window): void;
    unmanage(window: Window): void;
    pick(point: QPoint): Tile | null;

    relativeGeometryChanged: Signal<() => void>;
    absoluteGeometryChanged: Signal<() => void>;
    windowGeometryChanged: Signal<() => void>;
    paddingChanged: Signal<(padding: number) => void>;
    rowChanged: Signal<() => void>;
    isLayoutChanged: Signal<(isLayout: boolean) => void>;
    childTilesChanged: Signal<() => void>;
    windowAdded: Signal<(window: Window) => void>;
    windowRemoved: Signal<(window: Window) => void>;
    windowsChanged: Signal<() => void>;
    layoutDirectionChanged: Signal<() => void>;
    layoutModified: Signal<() => void>;
}
