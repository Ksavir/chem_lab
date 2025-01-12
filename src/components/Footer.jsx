import React from "react";
import {FiPhone, FiMail, FiClock } from "react-icons/fi";


export default function Footer() {
    return (
        <footer className="bg-bluenav text-white py-6 px-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-3">
              <FiPhone className="text-2xl" />
              <div className="flex flex-col items-center">
                <span>+356 79598726</span>
                <span>+356 21381391</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <FiMail className="text-2xl" />
              <span>info@sunlabgroup.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FiClock className="text-2xl" />
              <span>Monday-Friday: 8:00 AM - 5:00 PM</span>
            </div>
            <div className="flex items-center space-x-3">
              <a href="https://www.linkedin.com/company/sunlab-group-ltd/">
                <button className="group hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6">
                  <svg
                    className="w-8 h-8 fill-neutral-50"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                  </svg>
                  <span className="border-l-2 px-1">Contact us</span>
                </button>
              </a>

              {/* <img
                src="https://static.licdn.com/aero-v1/sc/h/akt4ae504epesldzj74dzred8"
                alt="Linkedin"
                className="text-2xl w-10 h-10"
              />
              <span>
                <a href="https://www.linkedin.com/company/sunlab-group-ltd/">
                  SunLab
                </a>
              </span>*/}
            </div>
          </div>
        </div>
      </footer>
    )
}