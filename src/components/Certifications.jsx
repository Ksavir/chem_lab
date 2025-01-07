'use client'

import React from "react";

export default function Certifications() {
    return (
      <div className="py-10 bg-bluenav">
        <div className="rounded-xl container mx-auto p-4 text-center ">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Our Certifications
          </h2>
          <h3 className="text-xl font-bold mb-4 text-white">
            Sunlab’s Accreditation Certificate EN ISO/IEC 17025:2017
          </h3>
          <div className="max-w-2xl mx-auto ">
            <p className="mb-6 text-justify text-white">
              The significant amount of accredited tests positions the company
              amongst the few, at national level capable of carrying out and
              conforming to the EN ISO/IEC 17025:2017 thus offering an organized
              service that is oriented towards customer satisfaction. The
              analytical date provided by the individual test reports,
              therefore, are reliable as they are obtained through the use of
              official analytical methods or internal methods that have been
              validated and accredited. In this contest, we are always in a
              position to provide, for each analytical activity, the precision,
              accuracy and completeness of the data thus obtained.
            </p>
            <div className="flex justify-center  w-3/4 lg:w-1/3 mx-auto">
              <img src="images/iso_badge.jpeg" alt="ISO-IEC 17025:2017" />
            </div>
          </div>
        </div>
      </div>
    );
}
