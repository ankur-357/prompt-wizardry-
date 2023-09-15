import React, { useState } from "react";
import { prompts } from "../pages/Prompts";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { FiRotateCcw } from "react-icons/fi";
import {
  BsWhatsapp,
  BsClipboard,
  BsBookmarkHeart,
  BsFacebook,
} from "react-icons/bs";
import { toast } from "react-toastify";

// Number of items to display per page
const itemsPerPage = 9;

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(prompts.length / itemsPerPage);

  //Calculate the start and end index of items for the current page
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
      {currentItems.map((item) => (
        <div className="">
          <div className="max-[800px]:max-w-[95vw] max-w-sm max-[800px] w-full md:w-[40vw] rounded-3xl card p-6 text-black-600 flex flex-wrap flex-col gap-4 m-4 self-center shadow-2xl">
            <div className="flex w-full justify-between items-baseline">
              <p className="flex flex-wrap font-semibold text-xl md:text-2xl w-8/12">
                {item.act}
              </p>
              <p className="font-bold text-5xl text-zinc-500 flex justify-end flex-wrap relative pulse w-3/12">
                #{item.index}
              </p>
            </div>
            <hr className="opacity-10" />
            <p className="text-zinc-300">{item.prompt}</p>
            <hr className="opacity-10" />
            {/* Tools */}
            <div className="flex gap-8 text-zinc-400 justify-around -mt-1 -mb-3">
              {/* Copy Prompt */}
              <div
                className="group hover:bg-yellow-100/20 p-2 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer"
                onClick={() =>
                  navigator.clipboard.writeText(item.prompt) &
                  toast.success("Prompt copied to clipboard!")
                }
                data-tooltip-id="tooltip"
                data-tooltip-content="Copy Prompt"
                data-tooltip-delay-show={1000}
              >
                <BsClipboard className="w-6 h-6 transition-all ease-in-out group-hover:text-yellow-300 active:scale-90 outline-none" />
              </div>
              {/* Share on WhatsApp */}
              <a
                href={`whatsapp://send?text=*Act:* ${item.act} %0a%0a*Prompt:* ${item.prompt}%0a%0a*Get the best AI prompts for ChatGPT, Bard and more only on https://ankur.github.io* %0a%0a*PromptWizardry*`}
                data-action="share/whatsapp/share"
                className="group hover:bg-green-100/20 p-2 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer"
                data-tooltip-id="tooltip"
                data-tooltip-content="Share on WhatsApp"
                data-tooltip-delay-show={1000}
              >
                <BsWhatsapp className="w-6 h-6 transition-all ease-in-out group-hover:text-green-300 active:scale-90 outline-none" />
              </a>
              {/* Share on Facebook */}
              <a
                href={`facebook://send?text=*Act:* ${item.act} %0a%0a*Prompt:* ${item.prompt}%0a%0a*Get the best AI prompts for ChatGPT, Bard and more only on https://ankur.github.io* %0a%0a*PromptWizardry*`}
                data-action="share/facebook/share"
                className="group hover:bg-green-100/20 p-2 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer"
                data-tooltip-id="tooltip"
                data-tooltip-content="Share on Facebook"
                data-tooltip-delay-show={1000}
              >
                <BsFacebook className="w-6 h-6 transition-all ease-in-out group-hover:text-green-300 active:scale-90 outline-none" />
              </a>
              {/* Save prompt */}
              <div
                className="group hover:bg-red-100/20 p-2 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer"
                data-tooltip-id="tooltip"
                data-tooltip-content="Save this prompt"
                data-tooltip-delay-show={1000}
              >
                <BsBookmarkHeart className="w-6 h-6 transition-all ease-in-out group-hover:text-red-300 active:scale-90 outline-none" />
              </div>
            </div>
          </div>
        </div>
      ))}
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
