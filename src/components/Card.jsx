import React from "react";
import {
  BsClipboard,
  BsWhatsapp,
  BsFacebook,
  BsBookmarkHeart,
  BsLink45Deg,
} from "react-icons/bs";
import { toast } from "react-toastify";
import "./Card.css"; // Import your CSS file for styling

export default function Card({ item }) {
  const copyLink = () => {
    navigator.clipboard.writeText(item.prompt);
    toast.success("Prompt copied to clipboard!");
  };
  function playPop() {
    document.getElementById("popAudio").play();
  }

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <p className="card-title">{item.act}</p>
          <p className="card-index">#{item.index}</p>
        </div>
        <hr className="card-divider" />
        <p className="card-prompt">{item.prompt}</p>
        <hr className="card-divider" />
        {/* Tools */}
        <div className="card-tools">
          {/* Copy Prompt */}
          <div
            className="group hover:bg-yellow-100/20 p-2 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer"
            onClick={() =>
              navigator.clipboard.writeText(prompt) &
              toast.success("Prompt copied to clipboard!") &
              playPop()
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
            className="card-tool"
          >
            <BsWhatsapp className="tool-icon" />
          </a>
          {/* Share on Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              `*Act:* ${item.act} %0a%0a*Prompt:* ${item.prompt}%0a%0a*Get the best AI prompts for ChatGPT, Bard and more only on https://ankur.github.io* %0a%0a*PromptWizardry*`
            )}`}
            className="card-tool"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook className="tool-icon" />
          </a>

          {/* Save prompt */}
          <div className="card-tool">
            <BsBookmarkHeart className="tool-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
