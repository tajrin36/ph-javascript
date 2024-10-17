import { useState } from "react";


export default function Team() {

    const [count, setCount] = useState(11);


    const handlePlayerAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handlePlayerRemove = () => {
        // const newCount = count - 1;
        setCount(count - 1);
    }
    return (
        <div className="flex items-center justify-center mt-10">
            <div className="border border-pink-400 flex flex-col items-center justify-center h-40 w-44 rounded-xl">
                <h1 className="text-2xl font-semibold mb-3">Players: {count}</h1>
                <div className="flex gap-2">
                    <button className="btn btn-error" onClick={handlePlayerAdd}>Add</button>
                    <button className="btn btn-secondary" onClick={handlePlayerRemove}>Remove</button>
                </div>
            </div>

        </div>
    )
}