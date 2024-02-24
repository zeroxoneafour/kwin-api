import BaseWorkspace from "../baseWorkspace";
import Window from "../window";

export default interface Workspace extends BaseWorkspace {
    windows: Window[];
}