
import { useCounter } from "../hooks/useCounterObserver"

export function Counter() {
    const { count, decrease, increase } = useCounter()

    return (
        <>
            <h1>Counter {count} </h1>
            <button onClick={decrease} >decrease</button>
            <button onClick={increase} >increase</button>
        </>
    )
}