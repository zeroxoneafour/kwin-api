/**
 * See https://doc.qt.io/qt-6/qtquick-debugging.html
 * 
 * Note that by default, KWin will only show messages of type "info" or greater.  
 * There _should_ be a setting in KDebugSettings that will change this, but I'm not really looking for it.
 */
export default interface Console {
    debug(...args: any[]): void;
    log(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    exception(...args: any[]): void;
    assert(expr: boolean, ...args: any[]): void;
    count(...args: any[]): void;
    time(...args: any[]): void;
    timeEnd(...args: any[]): void;
    profile(): void;
    profileEnd(): void;
}