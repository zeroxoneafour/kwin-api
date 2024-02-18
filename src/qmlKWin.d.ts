export default interface QmlKWin {
    readConfig<T>(property: string, defaultValue: T): T;
}