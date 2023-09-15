import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Search({ prompts }) {
  const [searchResults, setSearchResults] = useState([]);

  function searchFun(e) {
    e.preventDefault();
    const searchTerm = e.target.value.toLowerCase();
    const tempArr = prompts.filter((prompt) =>
      prompt.act.toLowerCase().includes(searchTerm)
    );
    setSearchResults(tempArr);
  }

  return (
    <div className="group relative">
      <div className="bg-white rounded-full">
        <input
          type="text"
          name=""
          id=""
          required
          onChange={(e) => searchFun(e)}
          placeholder="Search..."
          className="ring ring-zinc-800 outline-none bg-transparent h-10 sm:h-12 w-48 group-focus-within:w-[90vw] sm:group-focus-within:w-96 rounded-full px-4 transition-all ease-in-out"
        />
        <BsSearch className="absolute top-2.5 sm:top-3 right-3 h-5 sm:h-6 w-5 sm:w-6 fill-zinc-800" />
      </div>
      {searchResults.length !== 0 && (
        <div className="w-full max-h-[50vh] bg-white relative p-4 pt-8 rounded-b-xl hidden group-focus-within:flex flex-col overflow-y-auto max-w-[12rem] group-focus-within:max-w-[90vw] sm:group-focus-within:max-w-[24rem] font-medium ease-in-out transition-all shadow-xl">
          {searchResults.map((result, i) => (
            <Link key={i} to={result.href}>
              <span className="w break-all">{result.act}</span>
              <hr className="opacity-10 w-full border border-zinc-800 my-2" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
