'use client'

import React from 'react'

export default function Card ({title, description, imageUrl}) {
  return (
    <div className="block rounded-3xl bg-white shadow-xl hover:scale-110 dark:bg-white text-center max-w-xs mx-auto md:max-w-lg lg:max-w-xl mb-10">
      <a href="#!">
        <img
          className="rounded-t-3xl w-full object-cover h-60 sm:h-32 md:h-72"
          src={imageUrl}
          alt="activities"
        />
      </a>

      <div className="p-4 sm:p-6">
        <h5 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-bluenav">
          {title}
        </h5>

        <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};



    // <div className="max-w-xl mx-auto bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
    //   {/* Header Section */}
    //   <div className="flex items-center px-6 py-4 bg-gray-100">
    //     <div className="flex items-center space-x-2 text-blue-600">
    //       {/* Icon */}
    //       <span className="text-xl">💧</span>
    //       <h2 className="text-lg font-semibold text-gray-800">
    //         Chemical, Physical and Microbiological Analysis
    //       </h2>
    //     </div>
    //   </div>

    //   {/* Content Section */}
    //   <div className="p-6 space-y-4">
    //     <ul className="list-disc list-inside text-gray-700">
    //       <li>
    //         <span className="font-semibold italic text-blue-600">
    //           Sampling and analysis of chemical, physical and microbiological parameters in sediments, soils and subsoils;
    //         </span>
    //       </li>
    //       <li>
    //         <span className="font-semibold italic text-blue-600">
    //           Sampling and analysis of chemical, physical and microbiological parameters of environmental matrices
    //         </span>
    //         <span className="text-gray-600 italic">
    //           (soils, waters, etc.), that are <span className="font-semibold">contaminated</span> or potentially so;
    //         </span>
    //       </li>
    //     </ul>
    //   </div>

    //   {/* Footer Section */}
    //   <div className="px-6 pb-6">
    //     <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
    //       Learn More
    //     </button>
    //   </div>
    // </div>





