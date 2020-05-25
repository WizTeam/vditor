/// <reference types="./types" />
declare class WYSIWYG {
    element: HTMLPreElement;
    popover: HTMLDivElement;
    afterRenderTimeoutId: number;
    hlToolbarTimeoutId: number;
    preventInput: boolean;
    composingLock: boolean;
    constructor(vditor: IVditor);
    private bindEvent;
}
export { WYSIWYG };
