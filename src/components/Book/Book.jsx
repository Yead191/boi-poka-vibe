import { Link } from 'react-router-dom';
import star from '../../assets/star.png'

const Book = ({ book }) => {
    // console.log(book);
    const {bookId, image, bookName, author, rating, tags, category } = book
    return (
        <Link to={`/books/${bookId}`} className="block w-full h-full">
        <div className=" card bg-base-100 shadow-xl w-full p-6 flex flex-col h-full ">
            <figure className='bg-base-200 rounded-2xl w-full h-[230px]'>
                <img className='h-[190px] p-6 '
                    src={image} alt={bookName} />
            </figure>
            <div className="card-actions justify-start mt-5">
                <div className='gap-5'>
                    {
                        tags.map((tag , index) => <div key={index} className="badge badge-outline bg-green-100  text-[#23BE0A] w-[125px] h-[23px] font-semibold mr-3">{tag}</div>)
                    }
                </div>

            </div>
            <div className="mt-5 mb-2 flex-grow">
                <h2 className="card-title">
                    {bookName}

                </h2>
                <p className='text-gray-600 my-2 '>By: {author}</p>

            </div>
            {/* <hr /> */}
            <div className='border-t-1 border border-dashed'></div>
            <div className='mt-4 flex justify-between items-center  place-items-center'>
                <p className='text-sm '>
                    {category}
                </p>
                <div className='flex place-items-center gap-2'>
                    <p className='font-semibold'>{rating}</p>
                    <img className='h-[20px] w-[20px]' src={star} alt="" />
                </div>
            </div>
        </div>
     </Link>
    );
};

export default Book;