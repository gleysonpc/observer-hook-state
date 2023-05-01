import { createGlobalState } from 'react-hooks-global-state'

const initialState = { count: 0 }
const { useGlobalState } = createGlobalState(initialState)

export function useCounter() {
    const [count, setCount] = useGlobalState('count')

    function increase() {
        setCount(count + 1)
    }

    function decrease() {
        setCount(count - 1)
    }

    return {
        count,
        increase,
        decrease
    }
}