import { Guards } from "../Guards";
import { MutableRefObject, UIEvent } from "react";

class EventHandling {
    static scrollBottomRef = <E extends HTMLElement>(ref: MutableRefObject<E | null>, options?: ScrollToOptions) => {
        if(ref.current) {
            if(Guards.isTypeofFn(ref.current.scrollTo) && Guards.isNumber(ref.current.scrollHeight)) {
                ref.current.scrollTo({
                    left: 0,
                    top: ref.current.scrollHeight,
                    behavior: "smooth",
                    ...options
                });
            }
        }
    }

    static ifScrollBottom =(callback: <E extends HTMLElement>(event: UIEvent<E, UIEvent>) => void, enabled: boolean) => {
        return <E extends HTMLElement>(event: UIEvent<E, UIEvent>) => {
            if(enabled) {
                if(event.currentTarget) {
                    let isScrollHeight =  Guards.isNumber(event.currentTarget.scrollHeight)
                    let isScrollTop =  Guards.isNumber(event.currentTarget.scrollTop)
                    let isClientHeight =  Guards.isNumber(event.currentTarget.clientHeight)
                    if(isScrollHeight && isScrollTop && isClientHeight) {
                        const bottom = event.currentTarget.scrollHeight - event.currentTarget.scrollTop === event.currentTarget.clientHeight;

                        if(bottom) {
                            callback(event)
                        }
                    }
                }                
            }         
        }
    }
}

export { EventHandling }