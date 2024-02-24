import Workspace from "./workspace";
import type Window from "./window";

export default interface JsWorkspace extends Workspace {
    windowList(): Window[];
}
