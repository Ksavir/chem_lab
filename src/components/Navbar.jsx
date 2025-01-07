

import React from 'react'

export default function Navbar() {
    return (
        <nav className="fix top-0 bg-bluenav">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="images/Logo_tondo.png"
                alt="Logo"
                className="h-14 w-14 object-contain"
              />
              <span className="ml-3 text-xl font-bold text-primary">
                SunLab Group LTD
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-white hover:text-primary active:text-primary"
              >
                Services
              </a>
              <a
                href="#customers"
                className="text-white hover:text-primary  active:text-primary"
              >
                Customers
              </a>
              <a
                href="#contact"
                className="text-white hover:text-primary  active:text-primary"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav> 
    )
}