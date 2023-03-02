## Class: EventHandling

Contain a set of ready-made handlers for your events in the DOM

```javascript
import { EventHandling } from 'shulga-app-core'

// #onScrollBottom
const enabled = true

const Component = () => {
    return <ScrollLayout onScroll={EventHandling.onScrollBottom((e) => callback(e), enabled)} />
}

// #toScrollBottom
const GoBottomButton = () => {
    return (
        <Button onClick={() => EventHandling.toScrollBottom(scrollRef)}>
            <Icon as={ArrowDownOutlined} />
        </Button>
    )
}
```

---
