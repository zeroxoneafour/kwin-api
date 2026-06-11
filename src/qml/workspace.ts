import { BaseWorkspace } from "../baseWorkspace";
import { Window } from "../window";

export interface Workspace extends BaseWorkspace {
    windows: Window[];
}