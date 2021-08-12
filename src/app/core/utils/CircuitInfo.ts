import {Camera} from "math/Camera";

import {CircuitDesigner, IOObject} from "core/models";
import {HistoryManager} from "core/actions/HistoryManager";
import {ToolManager} from "core/tools/ToolManager";

import {Input} from "./Input";
import {RenderQueue} from "./RenderQueue";
import {Selectable} from "./Selectable";
import {SelectionsWrapper} from "./SelectionsWrapper";


export type CircuitInfo = {
    locked: boolean;

    input: Input;
    camera: Camera;

    history: HistoryManager;

    designer: CircuitDesigner;

    selections: SelectionsWrapper;
    currentlyPressedObject?: Selectable;

    clipboard: Array<IOObject>;

    toolManager: ToolManager;

    renderer: RenderQueue;
}
