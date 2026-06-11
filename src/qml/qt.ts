import { QPoint, QRect, QSize } from "../qt";

export interface Qt {
    point(x: number, y: number): QPoint;
    rect(x: number, y: number, width: number, height: number): QRect;
    size(width: number, height: number): QSize;
}