import { QPoint, QRect, Signal } from "./qt";

import { Window } from "./window";
import { LayoutDirection, Edge } from "./enums";

export interface Tile {
    readonly absoluteGeometry: QRect;
    readonly absoluteGeometryInScreen: QRect;
    readonly positionInLayout: number;
    readonly parent: Tile | null;
    readonly tiles: Tile[];
    readonly windows: Window[];
    readonly isLayout: boolean;
    readonly canBeRemoved: boolean;
    readonly layoutDirection: LayoutDirection;

    relativeGeometry: QRect;
    padding: number;

    resizeByPixels(delta: number, edge: Edge): void;
    moveByPixels(delta: number): void;
    remove(): void;
    split(direction: LayoutDirection): void;
    manage(window: Window): void;
    unmanage(window: Window): void;
    pick(point: QPoint): Tile | null;

    readonly relativeGeometryChanged: Signal<() => void>;
    readonly absoluteGeometryChanged: Signal<() => void>;
    readonly windowGeometryChanged: Signal<() => void>;
    readonly paddingChanged: Signal<(padding: number) => void>;
    readonly rowChanged: Signal<() => void>;
    readonly isLayoutChanged: Signal<(isLayout: boolean) => void>;
    readonly childTilesChanged: Signal<() => void>;
    readonly windowAdded: Signal<(window: Window) => void>;
    readonly windowRemoved: Signal<(window: Window) => void>;
    readonly windowsChanged: Signal<() => void>;
    readonly layoutDirectionChanged: Signal<() => void>;
    readonly layoutModified: Signal<() => void>;
}
