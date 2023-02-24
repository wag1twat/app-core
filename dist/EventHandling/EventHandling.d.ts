import { MutableRefObject, UIEvent } from "react";
declare class EventHandling {
    static scrollBottomRef: <E extends HTMLElement>(ref: MutableRefObject<E | null>, options?: ScrollToOptions) => void;
    static ifScrollBottom: (callback: <E extends HTMLElement>(event: UIEvent<E, UIEvent<Element, globalThis.UIEvent>>) => void, enabled: boolean) => <E_1 extends HTMLElement>(event: UIEvent<E_1, UIEvent<Element, globalThis.UIEvent>>) => void;
}
export { EventHandling };
