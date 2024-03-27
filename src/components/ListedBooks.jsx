import React from 'react';
import ReadContent from './ReadContent';
import WishlistContent from './WishlistContent';


const ListedBooks = () => {
    return (
        <>
          <h1 className='bg-blue-400 text-center px-8 py-5 text-5xl font-semibold mb-5 text-white'>Books</h1>  
          <section className='mx-16'>
          <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab focus:ring-0" aria-label="Read Books" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-gray-300 rounded-box p-6"> <ReadContent></ReadContent> </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab focus:ring-0" aria-label="Wishlist Books" />
  <div role="tabpanel" className="tab-content bg-base-100 border-gray-300 rounded-box p-6"><WishlistContent></WishlistContent></div>
</div>
          </section>
        </>
    );
};

export default ListedBooks;