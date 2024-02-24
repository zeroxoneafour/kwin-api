import QPoint from "./qt/qpoint";
import Signal from "./qt/signal";

import type TileModel from "./tilemodel";
import type Tile from "./tile";

export default interface TileManager {
    rootTile: Tile;
    model: TileModel;

    bestTileForPosition(pos: QPoint): Tile;
    bestTileForPosition(x: number, y: number): Tile;

    tileRemoved: Signal<(tile: Tile) => void>;
}
