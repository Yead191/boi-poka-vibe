import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList, getStoredWishList } from '../utilities/addToDb';
import Book from '../Book/Book';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData()
    useEffect(() => {
        const storedReadList = getStoredReadList()
        //worst way
        const storedReadListInt = storedReadList.map(id => parseInt(id))

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(readBookList)


    }, [])
    const [wishList, setWishList]= useState([])
    useEffect( ()=>{
        const storedWishList = getStoredWishList()

        const storedWishListInt = storedWishList.map(id=> parseInt(id))
        const wishBookList = allBooks.filter(book=> storedWishListInt.includes(book.bookId))
        setWishList(wishBookList)
    },[])
    return (

        <div role="tablist" className="tabs tabs-lifted lg:max-w-[1280px] mx-auto mt-12">
    {/* Make "Read List" selected by default */}
    <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab whitespace-nowrap text-sm p-2"
        aria-label="Read List"
        defaultChecked
    />
    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <h1 className="text-2xl font-bold my-5">Books I Read: {readList.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                readList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
    </div>

    {/* Remove defaultChecked from "Wish List" */}
    <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab whitespace-nowrap text-sm p-2"
        aria-label="Wish List"
    />
    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <h1 className="text-2xl font-bold my-5">My Wishlist: {wishList.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                wishList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
    </div>
</div>


    );
};

export default ListedBooks;