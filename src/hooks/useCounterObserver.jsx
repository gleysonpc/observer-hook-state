import { useEffect, useMemo, useState } from 'react'

function makeObservable(initialState) {
    let listeners = []
    let value = initialState

    function get() {
        return value
    }

    function set(newValue) {
        if (value === newValue) {
            return
        }
        value = newValue
        listeners.forEach(listener => listener(value))
    }

    function unsubscribe(listenerFunction) {
        listeners = listeners.filter(listener => listener !== listenerFunction)
    }

    function subscribe(listenerFunction) {
        listeners.push(listenerFunction)
        return () => unsubscribe(listenerFunction)
    }

    return {
        get,
        set,
        subscribe
    }
}

const initialState = { count: 0, name: 'counter' }

const countStore = makeObservable(initialState)

export function useCounter() {
    const [count, setCount] = useState(countStore.get())

    useEffect(() => {
        return countStore.subscribe(setCount)
    }, [])

    const actions = useMemo(() => {
        return {
            increase: () => countStore.set({ ...count, count: count.count + 1 }),
            decrease: () => countStore.set({ ...count, count: count.count - 1 })
        }
    }, [count])

    return {
        count: count.count,
        increase: actions.increase,
        decrease: actions.decrease,
    }
}

