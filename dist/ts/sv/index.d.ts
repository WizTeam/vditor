/// <reference types="./types" />
declare class Editor {
    element: HTMLPreElement;
    range: Range;
    constructor(vditor: IVditor);
    private bindEvent;
}
export { Editor };
