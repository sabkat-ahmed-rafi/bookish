import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./LayOut.jsx";
import ListedBooks from "./components/ListedBooks";
import PagesToRead from "./components/PagesToRead";
import BookDetails from "./components/BookDetails.jsx";
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LayOut></LayOut>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("/data.json")
        },
        {
          path: "/home",
          element: <Home></Home>,
          loader: () => fetch("/data.json")
        },
        {
          path: "/listedBooks",
          element: <ListedBooks></ListedBooks>,
        },
        {
          path: "/pagesToRead",
          element: <PagesToRead></PagesToRead>,
        },
        {
          path: "/book/:bookId",
          loader: async ({ params }) => {
            const res = await fetch("/data.json");
            const data = await res.json();
            const paramInt = parseInt(params.bookId)
            return data.find(book => book.bookId == paramInt) || null;
          },
          element: <BookDetails></BookDetails>,
        },

      ],
    },
  ]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
  </React.StrictMode>
  
);
