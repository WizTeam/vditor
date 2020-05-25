/// <reference types="./types" />
export declare const fixCJKPosition: (range: Range, event: KeyboardEvent) => void;
export declare const fixCursorDownInlineMath: (range: Range, key: string) => void;
export declare const insertEmptyBlock: (vditor: IVditor, position: InsertPosition) => void;
export declare const isFirstCell: (cellElement: HTMLElement) => false | HTMLTableElement;
export declare const isLastCell: (cellElement: HTMLElement) => false | HTMLTableElement;
export declare const insertAfterBlock: (vditor: IVditor, event: KeyboardEvent, range: Range, element: HTMLElement, blockElement: HTMLElement) => boolean;
export declare const insertBeforeBlock: (vditor: IVditor, event: KeyboardEvent, range: Range, element: HTMLElement, blockElement: HTMLElement) => boolean;
export declare const listToggle: (vditor: IVditor, range: Range, type: string, cancel?: boolean) => void;
export declare const listIndent: (vditor: IVditor, liElement: HTMLElement, range: Range) => void;
export declare const listOutdent: (vditor: IVditor, liElement: HTMLElement, range: Range, topListElement: HTMLElement) => void;
export declare const setTableAlign: (tableElement: HTMLTableElement, type: string) => void;
export declare const isHrMD: (text: string) => boolean;
export declare const isHeadingMD: (text: string) => boolean;
export declare const isToC: (text: string) => boolean;
export declare const renderToc: (vditor: IVditor) => void;
export declare const execAfterRender: (vditor: IVditor) => void;
export declare const fixList: (range: Range, vditor: IVditor, pElement: false | HTMLElement, event: KeyboardEvent) => boolean;
export declare const fixTab: (vditor: IVditor, range: Range, event: KeyboardEvent) => boolean;
export declare const fixMarkdown: (event: KeyboardEvent, vditor: IVditor, pElement: false | HTMLElement, range: Range) => boolean;
export declare const fixTable: (vditor: IVditor, event: KeyboardEvent, range: Range) => boolean;
export declare const fixCodeBlock: (vditor: IVditor, event: KeyboardEvent, codeRenderElement: HTMLElement, range: Range) => boolean;
export declare const fixBlockquote: (vditor: IVditor, range: Range, event: KeyboardEvent, pElement: false | HTMLElement) => boolean;
export declare const fixTask: (vditor: IVditor, range: Range, event: KeyboardEvent) => boolean;
export declare const fixDelete: (vditor: IVditor, range: Range, event: KeyboardEvent, pElement: false | HTMLElement) => boolean;
export declare const fixHR: (range: Range) => void;
export declare const fixFirefoxArrowUpTable: (event: KeyboardEvent, blockElement: false | HTMLElement, range: Range) => boolean;
export declare const paste: (vditor: IVditor, event: ClipboardEvent & {
    target: HTMLElement;
}, callback: {
    pasteCode(code: string): void;
}) => void;
