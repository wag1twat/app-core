import { Guards } from '../Guards'
import {
    MutableRefObject,
    UIEvent as ReactUIEvent,
    UIEventHandler,
} from 'react'

class EventHandling {
    static toScrollBottom = <E extends Element>(
        ref: MutableRefObject<E | null>,
        options?: ScrollToOptions
    ) => {
        if (ref.current) {
            if (
                Guards.isTypeofFn(ref.current.scrollTo) &&
                Guards.isNumber(ref.current.scrollHeight)
            ) {
                ref.current.scrollTo({
                    left: 0,
                    top: ref.current.scrollHeight,
                    behavior: 'smooth',
                    ...options,
                })
            }
        }
    }

    static onScrollBottom = <El extends Element>(
        callback: (e: ReactUIEvent<El, UIEvent>) => void,
        enabled: boolean
    ): UIEventHandler<El> => {
        return (event) => {
            if (enabled) {
                if (event.currentTarget) {
                    let isScrollHeight = Guards.isNumber(
                        event.currentTarget.scrollHeight
                    )
                    let isScrollTop = Guards.isNumber(
                        event.currentTarget.scrollTop
                    )
                    let isClientHeight = Guards.isNumber(
                        event.currentTarget.clientHeight
                    )
                    if (isScrollHeight && isScrollTop && isClientHeight) {
                        const bottom =
                            event.currentTarget.scrollHeight -
                                event.currentTarget.scrollTop ===
                            event.currentTarget.clientHeight

                        if (bottom) {
                            callback(event)
                        }
                    }
                }
            }
        }
    }
}

export { EventHandling }
