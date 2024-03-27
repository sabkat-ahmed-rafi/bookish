import React from "react";
import Book from "./Book";

const Books = ({ books }) => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl mb-7">Books</h1>
      <div className="grid grid-cols-3 gap-y-8 mb-10">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </>
  );
};

export default Books;
