import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (
        <div className="my-12 lg:max-w-[1200px] mx-auto">
            <h1 className="text-center text-4xl mt-10 mb-7">Books</h1>

            {/* books */}
            <div className="grid grid-cols-1 md:grid-cols-3   justify-items-center gap-6 ">
                {
                    books.map(book=> <Book key={book.bookId} book={book}></Book>)
                }

            </div>

        </div>
    );
};

export default Books;


/**
 * 1. state to store books
 * 2. useEffect
 * 3. fetch to load data
 * 4. set the data to the state
 */