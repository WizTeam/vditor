/// <reference types="./types" />
export declare class Options {
    options: IOptions;
    private defaultOptions;
    private toolbarItem;
    constructor(options: IOptions);
    merge(): IOptions;
    private mergeToolbar;
}
