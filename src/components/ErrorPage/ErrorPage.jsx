import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <div className='w-11/12 mx-auto mt-5'>
            <Navbar></Navbar>

            </div>

            <div className='w-11/12 mx-auto flex-grow  justify-center items-center place-content-center'>
                <h1 className=' text-center text-5xl text-red-200 font-bold '>Page Not Found</h1>


            </div>
            <Footer></Footer>

        </div>

    );
};

export default ErrorPage;