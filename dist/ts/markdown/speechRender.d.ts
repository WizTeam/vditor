declare global {
    interface Window {
        vditorSpeechRange: Range;
    }
}
export declare const speechRender: (element: HTMLElement, lang?: "en_US" | "ko_KR" | "zh_CN") => void;
