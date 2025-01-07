"use client";

import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import Certifications from "@/components/Certifications";


const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const customerLogos = [
    "images/Ais_logo.jpg",
    "images/Amino_Chemicals_logo.jpg",
    "images/Foster_Clark_logo.jpg",
    "images/pharos.png",
    "images/siegfried.png",
    "images/spic_logo.jpg",
    "images/Tanti_&_Mallia_logo.jpg",
    "images/Wasteserv_Treatment_logo.jpg",
    "images/Enemalta_logo.jpg",
    "images/Ecoserv_logo.jpg",
    "images/Transport_Malta_logo.jpg",
    "images/Ais_logo.jpg",
    "images/Amino_Chemicals_logo.jpg",
    "images/Foster_Clark_logo.jpg",
    "images/pharos.png",
    "images/siegfried.png",
    "images/spic_logo.jpg",
    "images/Tanti_&_Mallia_logo.jpg",
    "images/Wasteserv_Treatment_logo.jpg",
    "images/Enemalta_logo.jpg",
    "images/Ecoserv_logo.jpg",
    "images/Transport_Malta_logo.jpg",
    "images/Ais_logo.jpg",
    "images/Amino_Chemicals_logo.jpg",
    "images/Foster_Clark_logo.jpg",
    "images/pharos.png",
    "images/siegfried.png",
    "images/spic_logo.jpg",
    "images/Tanti_&_Mallia_logo.jpg",
    "images/Wasteserv_Treatment_logo.jpg",
    "images/Enemalta_logo.jpg",
    "images/Ecoserv_logo.jpg",
    "images/Transport_Malta_logo.jpg",
    "images/Ais_logo.jpg",
    "images/Amino_Chemicals_logo.jpg",
    "images/Foster_Clark_logo.jpg",
    "images/pharos.png",
    "images/siegfried.png",
    "images/spic_logo.jpg",
    "images/Tanti_&_Mallia_logo.jpg",
    "images/Wasteserv_Treatment_logo.jpg",
    "images/Enemalta_logo.jpg",
    "images/Ecoserv_logo.jpg",
    "images/Transport_Malta_logo.jpg",
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* About us Section */}
      <div className="py-10 bg-white border-b-2">
        <div className="rounded-xl container mx-auto p-4 text-center ">
          <h2 className="text-4xl font-bold mb-8 text-bluenav text-center">
            About us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-10">
            <p className="text-gray-600 text-xl text-justify leading-relaxed h-full">
              Sunlab was founded in 2008 from an idea by a single professional,
              Dott. Giglio Filippo, who has seen a natural application of the
              knowledge acquired with a chemistry degree and successively an
              in-depth study at masters level on the chemical processes applied
              to environmental remidiation techniques. Since January 2016 Sunlab
              is operative with her lab to the LS 2.0.12 - Sir Temi Buildings at
              Malta Life Sciences Park, in San Gwann. The laboratory space is
              about 130 m2, this will provide Sunlab with more space and for
              growing into a cutting-edge facility that will be providing world
              class facilities including laboratories, offices, lecture
              theaters, meeting rooms and a number of perfectly equipped shared
              facilities, giving space to local and International Organizations
              Research, to explore and create.
            </p>
            <img
              src="images/maltalab.jpg"
              alt="SunLab Group LTD"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* <div className="py-10 bg-white">
        <div className="rounded-xl container mx-auto p-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-bluenav">About us</h2>

          <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4">
            <p className="text-gray-600 mb-6 text-justify object-cover">
              Sunlab was founded in 2008 from an idea by a single professional,
              Dott. Giglio Filippo, who has seen a natural application of the
              knowledge acquired with a chemistry degree and successively an
              in-depth study at masters level on the chemical processes applied
              to environmental remidiation techniques. Since January 2016 Sunlab
              is operative with her lab to the LS 2.0.12 - Sir Temi Buildings at
              Malta Life Sciences Park, in San Gwann. The laboratory space is
              about 130 m2, this will provide Sunlab with more space and for
              growing into a cutting-edge facility that will be providing world
              class facilities including laboratories, offices, lecture
              theaters, meeting rooms and a number of perfectly equipped shared
              facilities, giving space to local and International Organizations
              Research, to explore and create.
            </p>
            <img src="images/maltalab.jpg" alt="SunLab Group LTD" className="w-full h-full" />
          </div>
        </div>
      </div> */}
      <Certifications />
      {/* Activities Section */}
      <div className="py-10 bg-white text-center text-bluenav">
        <h2 className="text-3xl font-bold mb-8 text-bluenav">Our Activities</h2>
        <div className="grid gap-12 shadow-xs lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-4 md:px-10">
          <Card
            title="💧 Chemical, physical and microbiological analysis"
            description="Sampling and analysis of chemical, physical and microbiological parameters in sediments, soils and subsoils waters, etc. that are contaminated or potentially so."
            imageUrl="../images/analysis.jpeg"
          />
          <Card
            title="🌳 Environmental Monitoring"
            description="Environmental monitoring pre-construction, during construction and post-construction on environmental matrices connected to the execution of major works. Activities carried out using a mobile laboratory and/or fixed station for measurement of airborne gases, particulate matter, noise, vibrations and magnetic fields."
            imageUrl="../images/enviroment.jpeg"
          />
          <Card
            title="⚙️ Technical services"
            description="The company offers a wide range of technical services for the design, technical direction, monitoring and management process of the principal acts to minimize environmental impacts arising from the operation of industrial activities and/or civil liability; laboratories, offices, and shared spaces designed to support both local and international research initiatives."
            imageUrl="../images/services.jpeg"
          />
        </div>
      </div>
      
      

      {/* <div className="py-10 bg-white text-center text-bluenav">
        <h2 className="text-3xl font-bold mb-4">Our Activities</h2>
        <div className="py-10 bg-white grid lg:grid-cols-3">
          <Card
            title="💧 Chemical, physical and microbiological analysis"
            description="Sampling and analysis of chemical, physical and microbiological parameters in sediments, soils and subsoils waters,etc. That are contaminated or potentially so"
            imageUrl="../images/analysis.jpeg"
          />
          <Card
            title="🌳 Enviromental Monitoring"
            description="Environmental monitoring pre-construction, during construction and post-construction on environmental matrices connected to the execution of major works. Activities carried out using a mobile laboratory and / or fixed station for measurement of airborne gases, particulate matter, noise, vibrations and magnetic fields"
            imageUrl="../images/enviroment.jpeg"
          />
          <Card
            title="⚙️ Technical services"
            description="he company offers a wide range of technical services for the design, technical direction, monitoring and management process of the principal acts to minimize environmental impacts arising from the operation of industrial activities and/or civil liability; laboratories, offices, and shared spaces designed to support both local and international research initiatives"
            imageUrl="../images/services.jpeg"
          />
        </div>
      </div> */}
      {/* Certifications Section */}
        
      {/* Trusted Customers Section */}
      <div className="py-8 bg-gray-50 px-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="flex overflow-hidden space-x-8">
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
              className="flex space-x-8 min-w-max"
            >
              {[...customerLogos, ...customerLogos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Customer ${index + 1}`}
                  className="h-16 w-auto gap-6 file:object-contain"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactUs id="contact" />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;


