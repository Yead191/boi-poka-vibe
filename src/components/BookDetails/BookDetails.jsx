import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToReadList, addToWishList } from '../utilities/addToDb';

const BookDetails = () => {
    const { bookId} = useParams()
    const id = parseInt(bookId)

    const data = useLoaderData()

    const book = data.find(book => book.bookId === id)
    // console.log(book);
    const {image, bookName, author, tags, review, publisher, totalPages, category, yearOfPublishing, rating } = book

    const handleMarkAsRead = (id)=>{
        // console.log(id);
        /**
         * 1. understand what to store or save => bookId
         * 2. where to store: database
         * 3. array, list, collection:
         * 4. check: if the book is already in the list
         * 6. if yes, do not add the book
         */
        addToReadList(id)
    }
    const handleWishList=(id)=>{
        addToWishList(id)
    }

    return (
        <div className="md:w-10/12 p-2 md:p-0 mx-auto md:my-12 my-3">
            <div className="flex flex-col  lg:flex-row gap-16 md:gap-32 ">
                <img
                    src={image}
                    className="max-w-md rounded-2xl shadow-2xl bg-base-200 p-8 lg:p-20 " />
                <div className='lg:w-[600px] '>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className='my-4'>By: {author}</p>
                    <hr />
                    <p className='my-2 font-semibold'>
                        {category}
                    </p>
                    <hr />
                    <p className="py-6 ">
                      <span className='font-bold'>Review: </span>  {review}
                    </p>
                    <p className=' mb-6'> <span className='font-bold mr-3 '>Tag: </span>{ 
                        tags.map((tag , index) => <div key={index} className="badge badge-outline bg-green-100  text-[#23BE0A] lg:w-[125px] h-[23px] font-semibold mr-3">{tag}</div>)
                    }</p>
                    <hr />
                    <div className='mt-4 mb-6 text-gray-500 flex justify-between w-[300px]'>
                        <div className=''>
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                            
                        </div>
                        <div>
                            
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>


                        
            
                    </div>
                    <button onClick={()=> handleMarkAsRead(id)} className="btn  mr-5 bg-transparent">Mark as Read</button>
                    <button onClick={()=>{handleWishList(id)}} className="btn btn-accent text-white ">Add to WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;