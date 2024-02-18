export default interface Kwin
{
    readConfig<T>(property: string, defaultValue: T): T;
}