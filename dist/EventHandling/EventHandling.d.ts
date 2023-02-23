import React from "react";
declare class EventHandling {
    static scrollBottomRef: <E extends HTMLElement>(ref: React.MutableRefObject<E | null>, options?: ScrollToOptions) => void;
    static ifScrollBottom: (callback: <E extends HTMLElement>(event: React.UIEvent<E, UIEvent>) => void, enabled: boolean) => <E_1 extends HTMLElement>(event: React.UIEvent<E_1, UIEvent>) => void;
}
export { EventHandling };
