'use client'

import React from 'react'
import Button from "@/components/Button";

export default function Hero() {
    return (
        <div className="h-screen lg:h-screen overflow-hidden">
        
        <img
          src="images/maltalab.jpg"
          alt="SunLab Group LTD"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-600 bg-opacity-20">
          <div className="container mx-auto px-6 h-full flex justify-center items-center">
            <div className="text-white bg-opacity-30 p-6 text-justify items-center">
              <h1 className="text-6xl lg:text-9xl text-center font-bold mb-2">
                Welcome to <span className="text-primary ">Sunlab</span> LTD
                </h1>
              <p className="text-sm lg:text-lg text-center p-2 mb-4 font-bold">
              Innovating Chemistry for Environmental Solutions and Global Research Excellence
              </p>
              <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
                <Button text="Contact us" />
                {/* <Card />
                <Card />
                <Card /> */}
                {/* <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-primary font-bold px-8 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 gap-3 "
                >
                  See more activities
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-primary font-bold px-8 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Contact us
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}