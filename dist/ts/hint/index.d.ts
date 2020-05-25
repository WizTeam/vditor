/// <reference types="./types" />
export declare class Hint {
    timeId: number;
    element: HTMLDivElement;
    recentLanguage: string;
    constructor();
    render(vditor: IVditor): void;
    genHTML(data: IHintData[], key: string, vditor: IVditor): void;
    fillEmoji: (element: HTMLElement, vditor: IVditor) => void;
    select(event: KeyboardEvent, vditor: IVditor): boolean;
    private getKey;
}
