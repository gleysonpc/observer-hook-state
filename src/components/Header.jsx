import { useCounter } from "../hooks/useCounterObserver"

export function Header() {
    const { count, decrease, increase } = useCounter()
    return (
        <>
            <button onClick={decrease} >decrease</button>
            <button onClick={increase} >increase</button>
            <h3>Header {count}</h3>
        </>
    )
}