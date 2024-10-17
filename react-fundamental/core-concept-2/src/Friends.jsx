import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setFriends(data))
            // .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h2 className="text-center mt-10 text-3xl font-semibold">Friends: {friends.length}</h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend> )
            }
        </div>
    )
}