export declare function $Array<T extends any[]>(collection?: T): {
    sort: <XPath extends import("..").Types.Utility.JSONPath<import("..").Types.Array.Of<T>, "">>(options: import("..").Types.Array.Sort.Options<T, XPath>) => {
        cleanup: () => void;
        update: <XPath_1 extends import("..").Types.Utility.JSONPath<import("..").Types.Array.Of<T>, "">>(options?: import("..").Types.Array.Sort.UpdateOptions<T, XPath_1>) => void;
    };
};
