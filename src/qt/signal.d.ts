export default interface Signal<T extends Function> {
    connect(callback: T): void;
    disconnect(callback: T): void;
}
