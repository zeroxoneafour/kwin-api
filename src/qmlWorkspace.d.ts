import Workspace from "./workspace";
import type Window from "./window";

export default interface QmlWorkspace extends Workspace {
    windows: Window[];
}
