// ALL DEPRECATED (but still in API), DO NOT USE! Favor rootTile.pick() and workspace.rootTile()

import { QPoint, Signal } from "./qt";

import { Tile } from "./tile";

// idk what this is exactly but it exists ig
export type TileModel = object;

/**
 * @deprecated Use rootTile().pick() instead!
 */
export interface TileManager {
    readonly rootTile: Tile;
    readonly model: TileModel;

    bestTileForPosition(pos: QPoint): Tile;
    bestTileForPosition(x: number, y: number): Tile;

    readonly tileRemoved: Signal<(tile: Tile) => void>;
}