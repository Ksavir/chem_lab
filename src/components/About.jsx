import React from 'react';

export default function About() {
    return (
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
    );
}