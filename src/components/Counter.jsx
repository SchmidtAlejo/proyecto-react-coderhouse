import { useCount } from "../hooks/useCount"

export const Counter = ({max}) => {
    const { count, decrement, increment, reset } = useCount(0, 0, max);

    return (
        <div className="counter d-flex align-items-center rounded-2">
            <button className="rounded-2" onClick={decrement}>-</button>
            <p className="text-center m-0" style={{ flex: 1 }}>{count}</p>
            <button className="rounded-2" onClick={increment}>+</button>
        </div>
    )
} 