import React from 'react';
import { getItemRead } from './localStorage';
import { IoPeople } from "react-icons/io5";
import { RiPagesFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ReadContent = () => {

    let items = getItemRead()


    return (
        <>
          {
            items.map(item => <section>
                <article className='mb-5 border p-4 rounded-lg flex space-x-10'>
                    <div>
                        <img className='w-[100%] h-[200px] rounded-lg' src={item.image} alt="" />
                    </div>
                    <section className='space-y-2'>
                        <h1 className='font-semibold text-2xl'>{item.bookName}</h1>
                        <p className='font-semibold'>By: {item.author}</p>
                    <div className="flex space-x-5 font-semibold item-center"> 
                        <span>Tag</span>
                        <p className="text-blue-600 bg-slate-200 px-2 py-[5px] rounded-xl">#{item.tags[0]}</p>
                        <p className="text-blue-600 bg-slate-200 px-2 py-[5px] rounded-xl">#{item.tags[1]}</p>
                    </div>
                    <div>
                        <div className='flex space-x-8'>
                            <div className='flex items-center space-x-2'>
                                <div>
                                <IoPeople />
                                </div>
                                <div>
                                   Publisher: {item.publisher}
                                </div>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <div>
                                <RiPagesFill />
                                </div>
                                <div>
                                   Pages: {item.totalPages}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='flex space-x-7 items-center'>
                        <p className='px-5 py-2.5 bg-red-100 text-red-400 font-semibold rounded-lg'>category:  {item.category}</p>
                        <p className='px-5 py-2.5 bg-green-100 text-green-400 font-semibold rounded-lg'>rating:  {item.rating}</p>
                        <Link to='/' className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View Details</Link>
                    </div>
                    </section>
                </article>
            </section>)
          }
        </>
    );
};

export default ReadContent;