import { QPoint } from "./qpoint";
import { QRect } from "./qrect";
import { QSize } from "./qsize";
import { QObject } from "./qobject";

export interface Qt {
    point(x: number, y: number): QPoint;
    rect(x: number, y: number, width: number, height: number): QRect;
    size(width: number, height: number): QSize;
    createQmlObject(obj: string, parent: QObject): QObject;
}