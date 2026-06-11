export interface KWin {
    readConfig<T>(property: string, defaultValue: T): T;
}