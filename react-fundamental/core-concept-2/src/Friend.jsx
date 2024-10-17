export default function Friend({ friend }) {
    const { name, email } = friend;
    return (
        <div className="flex items-center justify-center">
            <div className="border border-purple-400 p-3 h-28 w-64">
                <h1>Name: {name}</h1>
                <p>Email: {email}</p>
            </div>
        </div>
    )
}