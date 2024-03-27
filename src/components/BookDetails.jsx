import { useLoaderData } from "react-router-dom";
import { saveItemWish, getItemRead, saveItemRead } from "./localStorage";
import toast from 'react-hot-toast'


const BookDetails = () => {
  const books = useLoaderData()
  const {bookName, author, review, image, category, tags, totalPages, yearOfPublishing, publisher, rating} = books;

  const handleWishList = (book) => {
    let items = getItemRead()
    const isExist = items.find(item => item.bookId === book.bookId)
    if(isExist) {
      toast.error("You already read this book")
    } else {
      saveItemWish(book)
    }
  } 
  const handleReadList = (book) => {
    saveItemRead(book)
  } 

  return (
    <>
      <article className="flex flex-row justify-center items-center mx-14 mt-10">
        <section>
          <img src={image} className="w-[70%] rounded-lg"  alt="" />
        </section>
        <section className="space-y-2">
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <p className="font-semibold">By: {author}</p>
          <hr />
          <p>{category}</p>
          <hr />
          <p> <span className="font-semibold">Review : </span>{review}</p>
          <div className="flex space-x-5 font-semibold item-center"> <span>Tag</span>
            <p className="text-blue-600 bg-slate-200 px-2 py-[5px] rounded-xl">#{tags[0]}</p>
            <p className="text-blue-600 bg-slate-200 px-2 py-[5px] rounded-xl">#{tags[1]}</p>
          </div>
          <hr className="mt-1" />
          <div className="flex item-center space-x-6">
            <p className="text-[#131313B2]">Number of pages:</p>
            <p className="font-semibold">{totalPages}</p>
          </div>
          <div className="flex item-center space-x-6">
            <p className="text-[#131313B2]">Publisher:</p>
            <p className="font-semibold">{publisher}</p>
          </div>
          <div className="flex item-center space-x-6">
            <p className="text-[#131313B2]">Year of Publishing:</p>
            <p className="font-semibold">{yearOfPublishing}</p>
          </div>
          <div className="flex item-center space-x-6">
            <p className="text-[#131313B2]">Rating:</p>
            <p className="font-semibold">{rating}</p>
          </div>
          <div className="flex space-x-5">
            <button
            onClick={() => handleReadList(books)}
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read</button>
            <button
            onClick={() => handleWishList(books)}
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Wishlist +</button>
          </div>
        </section>
      </article>
    </>
  );
};

export default BookDetails;
