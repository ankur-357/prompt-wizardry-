import React, { useState } from "react";
import { prompts } from "../pages/Prompts";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { FiRotateCcw } from "react-icons/fi";
import { toast } from "react-toastify";
import Card from "./Card"; // Import the Card component

// Number of items to display per page
const itemsPerPage = 9;

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(prompts.length / itemsPerPage);

  // Calculate the start and end index of items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to get items for the current page
  const currentItems = prompts.slice(startIndex, endIndex);

  // Function to handle page navigation
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {/* Render the items for the current page */}
      <div className="flex flex-wrap justify-center items-baseline">
        {currentItems.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="flex justify-center gap-8 items-center">
        <button
          className="flex items-center bg-yellow-300 relative rounded-full text-black pl-4 pr-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all ease-in-out duration-100 shadow-xl"
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          <BsCaretLeftFill /> Prev
          <span className="hidden sm:block">ious Page</span>
        </button>
        <span className="flex">
          <span className="text-2xl font-bold mr-1">
            <FiRotateCcw />
          </span>
          {currentPage}/{totalPages}
        </span>
        <button
          className="flex items-center bg-yellow-300 relative rounded-full text-black pl-6 pr-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all ease-in-out duration-100 shadow-xl"
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          Next<span className="hidden sm:block">&nbsp;Page</span>
          <BsCaretRightFill />
        </button>
      </div>
    </div>
  );
}
