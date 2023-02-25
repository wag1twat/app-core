import { MutableRefObject, UIEvent as ReactUIEvent, UIEventHandler } from 'react';
declare class EventHandling {
    static toScrollBottom: <E extends Element>(ref: MutableRefObject<E | null>, options?: ScrollToOptions) => void;
    static onScrollBottom: <El extends Element>(callback: (e: ReactUIEvent<El, UIEvent>) => void, enabled: boolean) => UIEventHandler<El>;
}
export { EventHandling };
