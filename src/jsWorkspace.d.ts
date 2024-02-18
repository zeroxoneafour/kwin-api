import Workspace from "./workspace";
import Window from "./window";

export default interface JsWorkspace extends Workspace {
    windowList(): Window[];
}