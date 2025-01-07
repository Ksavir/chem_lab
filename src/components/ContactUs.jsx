import React from "react";

export default function ContactUs() {
    return (
        <div id="contact" className="py-20 bg-white px-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-blue-900">Get In Touch</h2>
            <p className="text-lg text-blue-800 mt-2 font-semibold">
              Life Sciences Park San Gwann Industrial Estate, Malta
            </p>
            <p className="text-gray-500 mt-1">
              Don’t like forms? Send us an email. 👋
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="w-full h-[400px] bg-gray-200">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.7921351295736!2d14.4733328!3d35.9031063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e457195e4a417%3A0x94bd4be3f6b1438d!2sSunlab%20Group%20Ltd!5e0!3m2!1ses-419!2smt!4v1734387945015!5m2!1ses-419!2smt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                <input
                  type="text"
                  placeholder="Insert your name"
                  className="w-full rounded-full border border-gray-300 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Insert your email"
                  className="w-full rounded-full border border-gray-300 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="text"
                placeholder="Insert your subject"
                className="w-full rounded-full border border-gray-300 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                placeholder="Write your message"
                rows="6"
                className="w-full rounded-3xl border border-gray-300 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <div className=" text-center lg:text-right">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 xs:justify-center"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    )
}