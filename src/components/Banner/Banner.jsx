import banner from '../../assets/books.jpg'


const Banner = () => {
    return (
        <div className=''>
            <div className="hero bg-base-200 h-[800px]  lg:h-[600px] rounded-2xl my-9">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='rounded-lg'
                        src={banner} />
                    <div>
                        <h1 className="text-6xl font-bold">Books to freshen up your bookshelf</h1>

                        <button className="btn btn-success text-white mt-9">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;