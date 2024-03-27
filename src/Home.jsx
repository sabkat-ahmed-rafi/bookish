import Banner from "./components/Banner";
import "./App.css";
import { useLoaderData } from "react-router-dom";
import Books from "./components/Books";

function Home() {
  const books = useLoaderData();

  return (
    <>
      <div className="mx-[80px]">
        <Banner></Banner>
        <Books books={books}></Books>
      </div>
    </>
  );
}

export default Home;
