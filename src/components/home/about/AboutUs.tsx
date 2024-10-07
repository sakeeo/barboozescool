import Image from 'next/image';
import React from "react";
import Divider from "@/components/default/divider/Divider";

const AboutUs = () => {
  return (
      <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100">
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
                  Welcome to Bar Booze’S! We invite you to experience an unforgettable 2-hour leisurely and fun-filled
                  tour around Kuta and Legian. With a selection of drinks tailored to your taste and carefully curated
                  music playlists, every moment spent with us is guaranteed to be filled with joy and excitement!
              </p>
              <p className="mt-4 text-lg text-gray-600 content-between">
                  We have seating for up to 13 guests, along with our friendly driver, security, and, of course, your
                  dedicated waitress. Let’s leave boredom behind and join us on this delightful adventure!
              </p>
              <p className="mt-4 text-lg text-gray-600 content-between">
                  During the tour, you can relax and soak in the beautiful scenery without any worries. We also provide
                  a
                  toilet at the back; just let our team know when you need to stop for a moment. We’re ready to take you
                  on
                  a satisfying journey full of memories!
              </p>
              <p className="mt-4 text-lg text-gray-600 content-between">
                  Ready to embark on this exciting experience? Don’t wait any longer—book your tour now and create
                  unforgettable moments with us at Bar Booze’S!
              </p>

              <button
                  className="bg-amber-300 text-black mt-4 text-lg px-6 py-3 rounded border border-amber-300 hover:bg-transparent hover:text-amber-300 transition duration-300">
                  Book Now!
              </button>
          </div>
          <Divider/>
      </div>

  );
};

export default AboutUs;