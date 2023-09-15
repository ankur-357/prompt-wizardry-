import React, { useEffect } from "react";
import { BsBookmarkHeart, BsGithub } from "react-icons/bs";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import Search from "./Search";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { prompts } from "../pages/Prompts";

export default function Header({ searchBarVisible, muted, setMuted }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollYVal = window.scrollY; // Corrected the use of window.scrollY
      const navbar = document.getElementById("navbar");
      const logo = document.getElementById("logo");

      if (scrollYVal > 50) {
        navbar.style.backgroundColor = "rgba(18, 18, 18, 0.9)";
        navbar.style.backdropFilter = "blur(12px)";
        logo.classList.remove("logo-black");
      } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.backdropFilter = "blur(0px)";
        logo.classList.add("logo-black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className="flex justify-between items-center w-full px-4 md:px-6 pb-3 pt-2 md:pb-3 md:pt-3 top-0 fixed z-30 "
    >
      <Link to="/">
        <div
          id="logo"
          className="flex justify-center items-center text-2xl font-bold text-yellow-400 pointer-events-none select-none"
        >
          <span className="hidden md:block ml-5">Prompt Wizardry</span>
        </div>
      </Link>
      <Search prompts={prompts} />
      <div className="flex justify-center items-center gap-4">
        {muted !== undefined && (
          <button
            className="hover:bg-red-400 text-black w-12 h-12 flex justify-center items-center rounded-full border border-red-400"
            data-tooltip-id="tooltip"
            data-tooltip-content={muted ? "Unmute" : "Mute"}
            data-tooltip-delay-show={1000}
            onClick={() => setMuted(!muted)}
          >
            {muted ? <HiVolumeOff /> : <HiVolumeUp />}
          </button>
        )}

        <div
          className="group hover:bg-red-400 p-2 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer transition-all ease-in-out border border-red-400"
          data-tooltip-id="tooltip"
          data-tooltip-content="Saved Prompts"
          data-tooltip-delay-show={1000}
        >
          <BsBookmarkHeart className="w-6 h-6 transition-all ease-in-out text-red-400 group-hover:text-zinc-800 active:scale-90 outline-none" />
        </div>
        <a
          href="https://github.com/ankur-357/PromptWizardry"
          target="_blank"
          rel="noreferrer noopener"
          className="group hover:bg-fuchsia-300 p-2 rounded-full h-12 w-12 sm:w-auto flex justify-center items-center cursor-pointer transition-all ease-in-out gap-2 text-fuchsia-400 hover:text-zinc-800 font-semibold sm:px-4 border border-red-400"
          data-tooltip-id="tooltip"
          data-tooltip-content="GitHub Repo"
          data-tooltip-delay-show={1000}
        >
          <BsGithub className="w-7 h-7 active:scale-90 outline-none" />
          <span className="hidden sm:block">GitHub Repo</span>
        </a>
      </div>
    </div>
  );
}
