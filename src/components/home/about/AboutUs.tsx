"use client"
import Image from 'next/image';
import React from "react";

const AboutUs = () => {
  return (
      <section id="AboutUs"
               className="flex flex-col md:flex-row items-center justify-center p-6 pb-5 pt-28 bg-gray-100">
          {/* Gambar */}
          <div className="md:w-1/2 flex justify-center">
              <Image
                  src="/images/about.jpg"
                  alt="About Us"
                  layout="intrinsic" // Menggunakan intrinsic untuk ukuran lebih kecil
                  width={500} // Lebar gambar
                  height={500} // Tinggi gambar
                  className="rounded-lg shadow-lg"
              />
          </div>

          {/* Teks */}
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
              <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
              <p className="mt-4 text-lg text-gray-600 content-between">
                  Step aboard Bar Booze's Cool, where we elevate your experience with an unforgettable 2-hour cruising
                  tour through the vibrant streets of Kuta and Legian. With space for 13 guests, you'll enjoy your
                  favorite drinks, handpicked music playlists, and the assurance that everything is handled by our
                  friendly crew. Our team includes a dedicated driver, security, and of course, your own waitress for
                  the journey.
              </p>
              <p className="mt-4 text-lg text-gray-600 content-between">
                  No need to stay sober—kick back, relax, and let us take care of the rest! Need a quick stop? We’ve got
                  an onboard toilet, and we’ll gladly pull aside whenever needed.
              </p>
              <p className="mt-4 text-lg text-gray-600 content-between">
                  Ready for the ultimate mobile party experience? Book now and let the good times roll with Bar Booze's
                  Cool!
              </p>
              <button
                  onClick={() => window.open('https://wa.me/6285333683334', '_blank')}
                  className="bg-amber-300 text-black mt-4 text-lg px-6 py-3 rounded border border-amber-300 hover:bg-transparent hover:text-amber-300 transition duration-300">
                  Book Now!
              </button>
          </div>
      </section>


  );
};

export default AboutUs;