import React from "react";

const Banner = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-300 px-10 rounded-lg mt-1 mb-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="./hero.png"
            className="max-w-sm rounded-lg shadow-2xl py-5"
          />
          <div>
            <h1 className="text-5xl font-bold">Discover and Dive into <br /> Our Book Collection <span className="text-blue-600">!</span></h1>
            <p className="py-6">
            Welcome to our world of literary wonders! Explore a vast collection of books spanning genres from timeless classics to gripping thrillers, heartwarming romances, thought-provoking non-fiction, and much more.
            </p>
            <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            View The List
          </button>          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
