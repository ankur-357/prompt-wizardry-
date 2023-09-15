import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Footer() {
    return (
        <div className="flex flex-col w-full justify-center items-center mb-6">
            <div className="flex flex-row space-x-2">
                <a
                    className="bg-blue-500 text-blue-50 mt-3 hover:bg-blue-600 font-semibold text-lg p-2 rounded-full shadow hover:shadow-md"
                    href="https://twitter.com/xtylishankur"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsTwitter className="w-4 h-4" />
                </a>
                <a
                    className="bg-violet-500 text-violet-50 mt-3 hover:bg-violet-600 font-semibold text-lg p-2 rounded-full shadow hover:shadow-md"
                    href="https://github.com/ankur-357"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsGithub className="w-4 h-4" />
                </a>
                <a
                    className="bg-blue-600 text-blue-50 mt-3 hover:bg-blue-700 font-semibold text-lg p-2 rounded-full shadow hover:shadow-md"
                    href="https://www.linkedin.com/in/VishwaGauravIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsLinkedin className="w-4 h-4" />
                </a>
                <a
                    className="bg-rose-500 text-fuchsia-50 mt-3 hover:bg-rose-600 font-semibold text-lg p-2 rounded-full shadow hover:shadow-md"
                    href="https://www.instagram.com/ankur_k_tiwari/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsInstagram className="w-4 h-4" />
                </a>
            </div>
            <div className="flex justify-center w-full">
                <a
                    href="mailto:ankurtiwari502@gmail.com"
                    className="text-base opacity-75 mt-2 hover:opacity-100"
                    title="Contact us for any business, service or query."
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 inline-block mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                    </svg>
                    ankurtiwari502@gmail.com
                </a>
            </div>
            <div className="w-full flex justify-center items-center text-zinc-800">
                <a
                    href="https://ankur.github.io"
                    className="opacity-75 hover:opacity-95 mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {"</>"} & Crafted with&nbsp;💛&nbsp;Ankur Kumar
                </a>
            </div>
        </div>
    );
}
