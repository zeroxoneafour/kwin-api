import Workspace from "./workspace";
import Window from "./window";

export default interface QmlWorkspace extends Workspace {
    windows: Window[];
}