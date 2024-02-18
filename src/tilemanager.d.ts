import QPoint from "./qml/qpoint";
import Signal from "./qml/signal";

import TileModel from "./tilemodel";
import Tile from "./tile";

export default interface TileManager
{
    rootTile: Tile;
    model: TileModel;
    
    bestTileForPosition(pos: QPoint): Tile;
    bestTileForPosition(x: number, y: number): Tile;
    
    tileRemoved: Signal<(tile: Tile) => void>;
}