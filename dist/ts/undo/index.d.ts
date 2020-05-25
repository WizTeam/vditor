/// <reference types="./types" />
declare class Undo {
    private undoStack;
    private redoStack;
    private stackSize;
    private dmp;
    private lastText;
    private hasUndo;
    private timeout;
    constructor();
    resetIcon(vditor: IVditor): void;
    recordFirstPosition(vditor: IVditor): void;
    undo(vditor: IVditor): void;
    redo(vditor: IVditor): void;
    addToUndoStack(vditor: IVditor): void;
    private renderDiff;
}
export { Undo };
