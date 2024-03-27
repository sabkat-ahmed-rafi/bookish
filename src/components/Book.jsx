import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
  } = book;
  return (
    <>
      <Link to={`/book/${bookId}`} className="max-w-xs p-6 hover:scale-110 transition duration-100 ease-in bg-slate-100 rounded-md shadow-2xl dark:bg-gray-50 dark:text-gray-900">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <div className="flex flex-row space-x-5 text-blue-700">
            <span className="block text-[11px] font-bold tracking-widest uppercase dark:text-violet-600 ">
              {tags[0]}
            </span>
            <span className="block text-[11px] font-bold tracking-widest uppercase dark:text-violet-600">
              {tags[1]}
            </span>
          </div>
          <h2 className="text-xl font-semibold tracking-wide">{bookName}</h2>
        </div>
        <p className="text-[#131313CC]">By: {author}</p>
        <hr className="border-dashed mt-3 mb-3" />
        <div className="flex items-center justify-between">
          <h1 className="font-bold">{category}</h1>
          <div className="flex items-center space-x-2">
            <p>{rating}</p>
            <IoIosStarOutline />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Book;
