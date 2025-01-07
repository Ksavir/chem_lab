import React from "react";

export default function Button({text}) {
        return (
          <a href="#contact">
              <button className="relative cursor-pointer text-white text-xl hover:bg-green-600 overflow-hidden h-12 w-48 lg:h-16 lg:w-64 rounded-xl bg-sky-800 p-2 flex justify-center items-center font-extrabold">
              <p className="z-10 ">{text}</p>
            </button>
          </a>

          );
    
}