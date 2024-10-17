import Book from "./Book";

export default function Bookstore({books}){
    return (
        <div>
            <h2>Books: {books.length}</h2>
            {
                // eslint-disable-next-line react/jsx-key
                books.map(book => <Book book={book}></Book>)
            }
        </div>
    )
}