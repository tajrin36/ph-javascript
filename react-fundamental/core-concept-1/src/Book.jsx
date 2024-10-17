export default function Book({book})
{
    const {name,price} = book;
    return(
        <div>
            <h3>
                Book name:{book.name}
            </h3>
            <p>price:{price}</p>
        </div>
    )
}