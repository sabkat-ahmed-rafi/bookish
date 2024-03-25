import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 flex justify-center mt-2">
        <div className="navbar-start w-[50%]">
          <div className="dropdown">
            <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 change"
            >
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/listedBooks">Listed Books</NavLink>
              <NavLink to="/pagesToRead">Pages to Read</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold gap-0">
            B<span className="font-normal text-blue-700">OO</span>kish
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-9 font-bold change">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 scale-125 transition duration-300 ease-in-out"
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 scale-125 transition duration-300 ease-in-out"
                  : ""
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/pagesToRead"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 scale-125 transition duration-300 ease-in-out"
                  : ""
              }
            >
              Pages to read
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end w-[20%] space-x-6">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Log in
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
