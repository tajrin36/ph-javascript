//! 1 ==> decleare a state to hold a data
//! 2 ==> useEffect function calling; syntax : useEffect(callbackFunction,dependency) ; useEffect(()=>{},[])
//! 3 ==> use fetch to load data
import { useEffect, useState } from "react"
import User2 from "./User2";

export default function User() {
    //!default value bade onno kichu hoile usestate a empty array dite hobe
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold mt-4">data fetched</h1>
            <div className="border border-blue-400 rounded-xl mt-3 h-10 w-24">
                <h1 className="text-2xl font-semibold mb-3 text-center">user:{user.length}</h1>
            </div>
            {
                user.map(user2 => <User2 user2={user2}></User2>)
            }
        </div>
    )
}

