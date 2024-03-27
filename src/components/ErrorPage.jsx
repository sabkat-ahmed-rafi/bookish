import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center space-y-16 items-center mt-[20%]'>
            <div className='text-center'>
            <h1 className='text-4xl font-semibold'>Oops!</h1>
            <h1 className='text-4xl font-semibold'>Something went wront.</h1>
            </div>
            <Link to='/' className=' flex justify-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Back to home</Link>
        </div>
    );
};

export default ErrorPage;
