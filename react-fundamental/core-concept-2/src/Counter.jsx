import { useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(10)

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () => {
        const reduceCount = count - 1;
        setCount(reduceCount);
    }

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="border border-purple-400 flex flex-col items-center justify-center h-40 w-44 rounded-xl">
                <h1 className="text-2xl font-semibold mb-3">Counter: {count}</h1>
                <div className="flex gap-2">
                    <button className="btn btn-error" onClick={handleAdd}>Add</button>
                    <button className="btn btn-secondary" onClick={handleReduce}>Reduce</button>
                </div>
            </div>
        </div>
    )
}