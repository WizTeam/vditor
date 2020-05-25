/// <reference types="./types" />
export declare const formatRender: (vditor: IVditor, content: string, position?: {
    start: number;
    end: number;
}, options?: {
    enableAddUndoStack: boolean;
    enableHint: boolean;
    enableInput: boolean;
}) => void;
