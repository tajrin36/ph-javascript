export default function User2 ({user2}){
    const {name,email} = user2;
    return(
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}